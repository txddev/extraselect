
<script setup lang="ts">
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
  toRef,
  Ref
} from "vue";
import { loadOptions, prepareOriginalNode } from "./composition/options";
import { loadLocalization } from "./composition/localization";
import { loadSearch } from "./composition/search";
import { loadFilter } from "./composition/filter";
import { loadStyling } from "./composition/styling";
import { Option, OptionKey, OptionValue, TargetHTMLElement } from '../types';



defineOptions({
  name: 'ExtraSelect',
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  modelValue?: OptionValue[],
  originalNode?: TargetHTMLElement|null,
  multiple: boolean,
  options: Option[],
  localization?: Record<string,string>
  url?: string,
  maxWidth: "dynamic"|"inherit"|string,
  minChars: number,
  search: boolean,
  searchableUrl?: boolean,
  initialValue?: OptionValue[]
  showSelected: boolean,
  fetchMode?: "always"|"limited"|"complete",
  fetchOptions?: RequestInit,
  filterFields?: string[],
  hardFilterFields?: string[],
  removeIcon: string,
  dropdownContainer?: string,
  disabled?: boolean
}>(),{
  modelValue: ()=> [],
  originalNode: null,
  options: ()=>[],
  maxWidth: "dynamic",
  minChars: 0,
  fetchMode:"limited",
  fetchOptions: ()=>({}),
  filterFields: ()=>[],
  hardFilterFields: ()=>[],
  removeIcon: "X",
  localization: () => ({}),
  
});

const isMultiple = computed(() => props.originalNode?.multiple ?? props.multiple)

const { options, selectedOptions, onReset } = loadOptions(props.originalNode,toRef(props,'options'),toRef(props,'modelValue'),props.initialValue);
const {t: $t} = loadLocalization(props.originalNode,toRef(props,'localization'))

const originalCssStyles = Object.values(props.originalNode?.style ?? {});

prepareOriginalNode(props.originalNode);
const emit = defineEmits(['update:modelValue'])

const toggleOption = (key: OptionKey, forcedState : boolean|null = null) => {
  if (isMultiple.value) {
      let targetState = forcedState
      if(targetState == null){
        targetState = !selectedOptions.value.has(key)
      }
      
      switch(targetState){
        case true:
          selectedOptions.value.set(key,key);
          break;
        case false:
          selectedOptions.value.delete(key);
          break;
      }
    
  } else {
    selectedOptions.value.clear();
    if(forcedState !== false) selectedOptions.value.set(key,key)
    open.value = false;
  }
  emitModelValue(Array.from(selectedOptions.value.keys()))
};

const { filterText, filteredOptions, filterValues } = loadFilter(options,selectedOptions,toggleOption, props.filterFields,props.hardFilterFields)
const { searchingFlag } = loadSearch(
  options,
  props.url,
  props.searchableUrl,
  filterText,
  props.minChars,
  filterValues,
  props.fetchMode,
  props.fetchOptions
);





const inputNode = ref<HTMLInputElement>();
const dropdownNode = ref<HTMLDivElement>();
const searchNode = ref(null);
const open = ref(false);

function setOpen(value){
  if(!props.disabled){
    open.value = value
  }
}

watch(filterText,()=>{
  let scroller = dropdownNode.value?.querySelector(".scroller")
  if(scroller){
    scroller.scrollTop = 0
  }
})


const dropdownCointainerNode = ref<HTMLElement|null>(null)


const autoCloseHandler = function (e) {
  const elements = getParents(e.target);
  elements.push(e.target);
  
  if (
    !elements.includes(inputNode.value) &&
    !elements.includes(dropdownNode.value)
  ) {
    open.value = false;
  }else{
    e.stopImmediatePropagation()
    e.preventDefault()
  }
};

onMounted(() => {
  if(props.dropdownContainer != null){
    const containerSelector = props.dropdownContainer
    let parentFound = false
    dropdownCointainerNode.value = getParents(inputNode.value).find(el => {
      if(el instanceof Element){
        if(el.matches(containerSelector)){
          parentFound = true
        }
        if(parentFound && ["absolute","relative","fixed","sticky"].includes(getComputedStyle(el).position)) return true

      }
      return false
    })
  }
  if(dropdownCointainerNode.value == null) dropdownCointainerNode.value = document.querySelector("body")
  if(props.originalNode){
    for(let cssClass of props.originalNode.classList){
      if(cssClass != "extraselect"){
        inputNode.value?.classList.add(cssClass)
      }
    }
    
    for(let cssStyle of originalCssStyles){
      if(inputNode.value){
        inputNode.value.style[cssStyle] = props.originalNode.style[cssStyle] 
      }
    }
    
    let form = getParents(inputNode.value,"form").pop()
    if(form instanceof HTMLElement && form.matches("form")){
      form.addEventListener("reset", () => setTimeout(onReset));
    }
    
    Object.assign(props.originalNode,{
        toggleValue: toggleOption,
        setValues: (values) => {
          selectedOptions.value.clear()
          for(let value of values){
            toggleOption(value)
          }
        }
    })
    
  }

  window.document.addEventListener("mousedown", autoCloseHandler);
  window.document.addEventListener("focusin", autoCloseHandler);
    
});
onUnmounted(() => {
  window.document.removeEventListener("mousedown", autoCloseHandler);
  window.document.removeEventListener("focusin", autoCloseHandler);
});



const { list, containerProps, wrapperProps } = useVirtualList(
  filteredOptions,
  {
    itemHeight: 32
  },
)

const {dropdownStyle,getTextWidth} = loadStyling(options,selectedOptions,open,inputNode,dropdownNode,dropdownCointainerNode,props.maxWidth)

const emitModelValue = ( value : OptionValue[] ) => {
  nextTick(()=>
    props.originalNode?.dispatchEvent(new Event('change',{ bubbles: true }))
  )
  emit('update:modelValue', value)
}


const clear = ($e:unknown) => {
  toggleAll($e,false)
  filterText.value = ""
}
const toggleAll = (event : unknown,state : boolean|null = null) => {
  if(state == null) state = !AllSelected.value
  if(!state){
    selectedOptions.value.clear()
  }else{
    selectedOptions.value.clear()
    options.value.forEach((el) => selectedOptions.value.set(el.key,el.key))
  }
  emitModelValue(Array.from(selectedOptions.value.keys()))
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
  emitModelValue(Array.from(selectedOptions.value.keys()))
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
    if(NoneSelected.value) return $t("No selection")
    if(!props.searchableUrl && AllSelected.value ) return $t("All selected")
    
    const inputStyles = inputNode.value ? getComputedStyle(inputNode.value): null
    const inputLength = inputNode.value?.clientWidth - parseInt(inputStyles?.paddingLeft) - parseInt(inputStyles?.paddingRight)
    
    let output = $t(":n selected - ",{n:selectedOptions.value.size})
    let first = true
    for(let key of selectedOptions.value){
      if(!first){
        output += ", ";
      }else{
        first = false
      }
      output += options.map.get(key[0])?.value ?? (searchingFlag.value ? $t('Loading...'): $t('Value not found'))
      if(inputLength<getTextWidth(output)){
        return selectedOptions.value.size+$t(" selected")
      }
      
    }
    
    return output;
  }else{
    for(let key of selectedOptions.value){
      return options.map.get(key[0])?.value ?? (searchingFlag.value ? $t('Loading...'): $t('Value not found'))
    }
  }
  return $t("No selection")
});

</script>

<template>
  <input v-if="isMultiple&&selectedOptions.size==0" type="hidden" :name="props.originalNode?.name?.replace('[]','')" value/>
  <div v-if="props.showSelected" class="extra-select selection">
    <template v-for="opt in selectedOptions" :key="opt">
      <div @click.stop.prevent="toggleOption(opt[0])" class="selection-badge">
          {{ options.find(el=>el.key == opt[0])?.value }}
        <div class="selection-remove" v-html="props.removeIcon"></div>
      </div>
    </template>
    
  </div>
  <input
    @focus="setOpen(true)"
    @click.stop.prevent="setOpen(true)"
    ref="inputNode"
    :value="placeholder"
    class="extra-select extra-select-input"
    readonly=""
    v-bind="$attrs"
    :disabled="disabled"
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
          :placeholder="$t('Search...')"
        />
      </div>
      <template v-if="filterText.length >= props.minChars">
        <template v-if="isMultiple">
          <div class="allselect-clear">
            <div
              v-if="filterText.length == 0"
              @click.stop.prevent="toggleAll"
              class="all-select"
            >
              <div class="row-input">
                <input :checked="AllSelected" type="checkbox" /><b>{{$t("Select all")}}</b>
              </div>
            </div>
            <div
            v-if="filteredOptions.length > 0 && filterText.length > 0"
            @click.stop.prevent="toggleFiltered"
            class="all-select"
          >
            <div class="row-input">
              <input :checked="FilterSelected" type="checkbox" /><b>{{$t("Select Filtered")}}</b>
            </div>
          </div>

            <div class="clear" @click.stop.prevent="clear">{{$t("Clear")}}</div>
            
          </div>
          
          
        </template>
        <template v-if="filteredOptions.length == 0">
          
          <div class="no-matches">{{$t("No matches found")}}</div>
        </template>
      </template>
      <div v-else >{{$t("Insert at least :n characters",{n:props.minChars})}}</div>
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
