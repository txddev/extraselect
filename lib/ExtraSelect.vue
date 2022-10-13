<script setup>
import { useVirtualList } from '@vueuse/core'
import { getParents } from "@txd/utils"
import {
  ref,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  watchEffect,
watch,
} from "vue";
import { loadOptions, prepareOriginalNode } from "./composition/options";
import { loadSearch } from "./composition/search";
import { loadFilter } from "./composition/filter";
import { loadStyling } from "./composition/styling";

const props = defineProps({
  originalNode: { type: Object, required: false },
  multiple: {type: Boolean, required: false},
  options: { type: Array, required: false },
  modelValue: { type: Array, required: false,default: [] },
  url: { type:String, required:false },
  maxWidth: { type: String, default: "dynamic" },
  search: { type: Boolean, default: false },
  searchableUrl: { type: Boolean, default: false },
  initialValue: { default: null },
  minChars: { type: Number, default: 0 },
  showSelected: { type: Boolean, default: false },
  fetchMode: { type: String, default: "limited" },
  fetchOptions: { type: Object, default: {} },
  removeIcon: {type: String, default: "X"},
  dropdownContainer: {type: String, default: null }
});
const isMultiple = computed(() => props.originalNode?.multiple ?? props.multiple)

const { options, selectedOptions } = loadOptions(props.originalNode,props.options,props.modelValue,props.initialValue);

const originalClassList = props.originalNode?.classList;
const originalCssStyles = Object.values(props.originalNode?.style ?? {});

prepareOriginalNode(props.originalNode);
const emit = defineEmits(['update:modelValue'])


const { filterText, filteredOptions } = loadFilter(options, props.minChars)
const { searchingFlag } = loadSearch(
  options,
  props.url,
  props.searchableUrl,
  filterText,
  props.minChars,
  props.fetchMode,
  props.fetchOptions
);

const inputNode = ref(null);
const dropdownNode = ref(null);
const searchNode = ref(null);
const open = ref(false);
const dropdownCointainerNode = ref(null)


const autoCloseHandler = function (e) {
  const elements = getParents(e.target);
  elements.push(e.target);

  if (
    !elements.includes(inputNode.value) &&
    !elements.includes(dropdownNode.value)
  ) {
    open.value = false;
  }
};

onMounted(() => {
  if(props.dropdownContainer){
    let parentFound = false
    dropdownCointainerNode.value = getParents(inputNode.value).find(el => {
      if(el instanceof Element){
        if(el.matches(props.dropdownContainer)){
          parentFound = true
        }
        if(parentFound && ["absolute","relative","fixed","sticky"].includes(getComputedStyle(el).position)) return true

      }
      return false
    })
  }
  if(dropdownCointainerNode.value == null) dropdownCointainerNode.value = document.querySelector("body")
  if(props.originalNode){
    for(let cssClass of originalClassList){
      if(cssClass != "extraselect"){
        inputNode.value.classList.add(cssClass)
      }
    }
    
    for(let cssStyle of originalCssStyles){
      
        inputNode.value.style[cssStyle] = props.originalNode.style[cssStyle]
      
    }
    if(!originalCssStyles.includes('background-color')){
      inputNode.value.style.backgroundColor = 'white'
    }
  }

  window.document.addEventListener("mousedown", autoCloseHandler);
  window.document.addEventListener("focusin", autoCloseHandler);
});
onUnmounted(() => {
  window.document.removeEventListener("mousedown", autoCloseHandler);
  window.document.removeEventListener("focusin", autoCloseHandler);
});


const {dropdownStyle,getTextWidth} = loadStyling(options,selectedOptions,open,inputNode,dropdownNode,dropdownCointainerNode,props.maxWidth)

const toggleOption = (key) => {
  if (isMultiple.value) {
    if (selectedOptions.value.has(key)) {
      selectedOptions.value.delete(key)
    } else {
      selectedOptions.value.set(key,key);
    }
  } else {
    selectedOptions.value.clear();
    selectedOptions.value.set(key,key)
    open.value = false;
  }
  emit('update:modelValue', Array.from(selectedOptions.value.keys()))
};
const clear = ($e) => {
  toggleAll($e,false)
  filterText.value = ""
}
const toggleAll = (event,state = null) => {
  if(state == null) state = !AllSelected.value
  if(!state){
    selectedOptions.value.clear()
  }else{
    selectedOptions.value.clear()
    options.value.forEach((el) => selectedOptions.value.set(el.key,el.key))
  }
  emit('update:modelValue', Array.from(selectedOptions.value.keys()))
}


const toggleFiltered = () => {
  if(FilterSelected.value){
    filteredOptions.value.forEach(element => {
      if(selectedOptions.value.has(element.key)){
        selectedOptions.value.delete(element.key)
      }
    })
  }else{
    filteredOptions.value.forEach(element => {
      if(!selectedOptions.value.has(element.key)){
        selectedOptions.value.set(element.key,element.key)
      }
    })
  }
  emit('update:modelValue', Array.from(selectedOptions.value.keys()))
}

watch(open,(newOpen,oldOpen)=>{
  if(newOpen!= oldOpen){
    if (newOpen) {
    
    if (props.search) {
      nextTick(() => {
        searchNode.value.focus({ focusVisible: true });
      });
    }
  } else {
    filterText.value = "";
  }  
  }
})
const AllSelected = computed(()=>selectedOptions.value.size == options.value.length)
const FilterSelected = computed(()=>{
  return filteredOptions.value.reduce((c,el) => c&& selectedOptions.value.has(el.key),true) 
})
const NoneSelected = computed(()=>selectedOptions.value.size == 0)

const placeholder = computed(() => {
  if(options.value.length < 0) return ""
  if(isMultiple.value){
    if(AllSelected.value ) return "All selected"
    if(NoneSelected.value) return "No selection"
    
    const inputStyles = inputNode.value ? getComputedStyle(inputNode.value): null
    const inputLength = inputNode.value?.clientWidth - parseInt(inputStyles?.paddingLeft) - parseInt(inputStyles?.paddingRight)
    
    let output = selectedOptions.value.size+" selected - "
    let first = true
    for(let key of selectedOptions.value){
      if(!first){
        output += ", ";
      }else{
        first = false
      }
      output += options.map.get(key[0])?.value ?? (searchingFlag.value ? 'Loading...': 'Value not found')
      if(inputLength<getTextWidth(output)){
        return selectedOptions.value.size+" selected"
      }
      
    }
    
    return output;
  }else{
    for(let key of selectedOptions.value){
      return options.map.get(key[0])?.value ?? (searchingFlag.value ? 'Loading...': 'Value not found')
    }
  }
  return "No selection"
});

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredOptions,
  {
    itemHeight: 32
  },
)
</script>

<template>
  <div v-if="props.showSelected" class="extra-select selection">
    <template v-for="opt in selectedOptions" :key="opt">
      <div @click="toggleOption(opt[0])" class="selection-badge">
          {{ options.find(el=>el.key == opt[0])?.value }}
        <div class="selection-remove" v-html="props.removeIcon"></div>
      </div>
    </template>
    
  </div>
  <input
    @focus="open = true"
    @click="open = true"
    ref="inputNode"
    :value="placeholder"
    class="extra-select extra-select-input"
    readonly=""
  />
  <Teleport v-if="dropdownCointainerNode" :to="dropdownCointainerNode">
    <div
      class="extra-select dropdown"
      :class="{searching: searchingFlag>0}"
      ref="dropdownNode"
      v-show="open"
      :style="dropdownStyle"
    >
      <div class="input-searching" v-if="props.search">
        <input
          ref="searchNode"
          class="extra-select-search"
          v-model="filterText"
          type="text"
          autocomplete="off"
          autocorrect="off"
          autocapitilize="off"
          spellcheck="false"
          placeholder="Cerca..."
        />
      </div>
      <template v-if="filterText.length >= props.minChars">
        <template v-if="isMultiple">
          <div class="allselect-clear">
            <div
              v-if="filterText.length == 0"
              @click="toggleAll"
              class="all-select"
            >
              <div class="row-input">
                <input :checked="AllSelected" type="checkbox" /><b>Select all</b>
              </div>
            </div>
            <div
            v-if="filteredOptions.length > 0 && filterText.length > 0"
            @click="toggleFiltered"
            class="all-select"
          >
            <div class="row-input">
              <input :checked="FilterSelected" type="checkbox" /><b>Select Filtered</b>
            </div>
          </div>

            <div class="clear" @click="clear">Clear</div>
            
          </div>
          
          
        </template>
        <template v-if="filteredOptions.length == 0">
          
          <div class="no-matches">No matches found</div>
        </template>
      </template>
      <div v-else >Insert at least {{props.minChars}} characters</div>
      <div v-bind="containerProps" class="scroller">
        <div v-bind="wrapperProps">
          <template v-for="item in list" :key="item.index" style="height: 32px">
            <button
              class="dropdown-row"
              @click.stop.prevent="toggleOption(item.data.key)"
              style="height: 32px"
            >
              <div class="row-input">
                <input
                  :checked="selectedOptions.has(item.data.key)"
                  v-if="isMultiple"
                  type="checkbox"
                />
                {{ item.data.value }}
              </div>
            </button>
          </template>
        </div>
      </div>
    </div>
  </Teleport>
  <Teleport v-if="props.originalNode" :to="props.originalNode">
    <option
      v-for="opt in selectedOptions"
      :key="opt[0]"
      selected="selected"
      :value="opt[0]"
    ></option>
  </Teleport>
</template>
