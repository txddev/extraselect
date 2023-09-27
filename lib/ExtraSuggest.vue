<script>
  export default {
    name: 'ExtraSuggest',
    inheritAttrs: false
  }
</script>
<script setup>
import { useVirtualList } from '@vueuse/core'
import { getParents } from "@txd/utils"
import {
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
  watch,
  toRef
} from "vue";
import { loadOptions, prepareOriginalNode } from "./composition/options";
import { loadLocalization } from "./composition/localization";
import { loadSearch } from "./composition/search";
import { loadFilter } from "./composition/filter";
import { loadStyling } from "./composition/styling";



const props = defineProps({
  originalNode: { type: Object, required: false },
  options: { type: Array, required: false },
  localization: { type: Object, required: false, default: {} },
  modelValue: { type: String, required: false },
  maxWidth: { type: String, default: "dynamic" },
  url: { type:String, required:false },
  searchableUrl: { type: Boolean, default: false },
  minChars: { type: Number, default: 0 },
  fetchMode: { type: String, default: "limited" },
  fetchOptions: { type: Object, default: {} },
  filterFields: { type: Array, default: [] },
  hardFilterFields: { type: Array, default: [] },
  dropdownContainer: {type: String, default: null }
});

const { options } = loadOptions(props.originalNode,toRef(props,'options'),ref([]));
const {t: $t} = loadLocalization(props.originalNode,toRef(props,'localization'))
const originalClassList = props.originalNode?.classList;
const originalCssStyles = Object.values(props.originalNode?.style ?? {});

prepareOriginalNode(props.originalNode);
const emit = defineEmits(['update:modelValue'])

const toggleOption = (key, forcedState = null) => {
    if(forcedState === false){
      filterText.value = ""  
    }else{
      filterText.value = options.map.get(key).value
    }
    
    open.value = false;
};

const { filterText, filteredOptions, filterValues } = loadFilter(options,null,toggleOption, props.filterFields,props.hardFilterFields)
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

const inputNode = ref(null);
const dropdownNode = ref(null);
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
      if(cssClass != "extrasuggest"){
        inputNode.value.classList.add(cssClass)
      }
    }
    
    for(let cssStyle of originalCssStyles){
      inputNode.value.style[cssStyle] = props.originalNode.style[cssStyle]
    }
        
    filterText.value = props.originalNode.value
    
    
    let form = getParents(inputNode.value,"form").pop()
    if(form instanceof HTMLElement && form.matches("form")){
      form.addEventListener("reset", () => setTimeout(onReset));
    }
    
  }
  
  watchEffect(()=>{
    if(props.modelValue != null){
      filterText.value = props.modelValue
    }
  })

  const resetValue = filterText.value
  
  const onReset = () =>{
      filterText.value = resetValue
  }
  

  window.document.addEventListener("mousedown", autoCloseHandler);
  window.document.addEventListener("focusin", autoCloseHandler);
});

onUnmounted(() => {
  window.document.removeEventListener("mousedown", autoCloseHandler);
  window.document.removeEventListener("focusin", autoCloseHandler);
});




const {dropdownStyle} = loadStyling(options,ref([]),open,inputNode,dropdownNode,dropdownCointainerNode,props.maxWidth)



const emitModelValue = () => {
  if(props.originalNode){
    props.originalNode.value = filterText.value
    props.originalNode?.dispatchEvent(new Event('change',{ bubbles: true }));
  }
  emit('update:modelValue', filterText.value)
}

watch(() => open.value, (openValue)=>{
  if(openValue === false){
    emitModelValue()
  }
})


const { list, containerProps, wrapperProps } = useVirtualList(
  filteredOptions,
  {
    itemHeight: 32
  },
)
</script>

<template>
  <input
    @focus="open = true"
    @click="open = true"
    ref="inputNode"
    v-model="filterText"
    class="extra-select extra-select-input"
    v-bind="$attrs"
  />
  <Teleport v-if="dropdownCointainerNode" :to="dropdownCointainerNode">
    <div
      class="extra-select dropdown"
      :class="{searching: searchingFlag>0}"
      ref="dropdownNode"
      v-show="open"
      :style="dropdownStyle"
    >
      <template v-if="filterText.length >= props.minChars">
        
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
                {{ item.data.value }}
              </div>
            </button>
          </template>
        </div>
      </div>
    </div>
  </Teleport>
</template>
