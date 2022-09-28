<script setup>
import { RecycleScroller } from "vue-virtual-scroller";
import { offset, getParents } from "./windowUtils";
import {
  ref,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  watchEffect,
} from "vue";
import { loadOptions, prepareOriginalNode } from "./composition/options";
import { loadSearch } from "./composition/search";
import { loadFilter } from "./composition/filter";
import { loadStyling } from "./composition/styling";

const props = defineProps({
  originalNode: { type: Object, required: false },
  options: { type: Array, required: false },
  modelValue: { type: Array, required: false },
  url: { type:String, required:false },
  keepOpen: { type: Boolean, default: false },
  maxWidth: { type: String, default: "dynamic" },
  search: { type: Boolean, default: true },
  searchableUrl: { type: Boolean, default: false },
  minChars: { type: Number, default: 0 },
  showSelected: { type: Boolean, default: false },
  fetchMode: { type: String, default: "limited" },
  fetchOptions: { type: Object, default: {} },
});
const isMultiple = props.originalNode.multiple;
const { options, selectedOptions } = loadOptions(props.originalNode);
prepareOriginalNode(props.originalNode);


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

if (!props.keepOpen) {
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
    window.document.addEventListener("mousedown", autoCloseHandler);
    window.document.addEventListener("focusin", autoCloseHandler);
  });
  onUnmounted(() => {
    window.document.removeEventListener("mousedown", autoCloseHandler);
    window.document.removeEventListener("focusin", autoCloseHandler);
  });
}

const {dropdownStyle,placeDropdown} = loadStyling(options,selectedOptions,getComputedStyle(props.originalNode).font,inputNode,dropdownNode,props.maxWidth)

const toggleOption = (key) => {
  if (isMultiple) {
    if (selectedOptions.value.includes(key)) {
      selectedOptions.value.splice(selectedOptions.value.indexOf(key), 1);
    } else {
      selectedOptions.value.push(key);
    }
  } else {
    selectedOptions.value = [key];
    open.value = false;
  }
};

const toggleAll = (event,state = null) => {
  if(state == null) state = !AllSelected.value
  if(!state){
    selectedOptions.value = []
  }else{
    selectedOptions.value = options.value.map((el) => el.key)
  }
}


const toggleFiltered = () => {
  if(FilterSelected.value){
    filteredOptions.value.forEach(element => {
      if(selectedOptions.value.includes(element.key)){
        selectedOptions.value.splice(selectedOptions.value.indexOf(element.key),1)
      }
    })
  }else{
    filteredOptions.value.forEach(element => {
      if(!selectedOptions.value.includes(element.key)){
        selectedOptions.value.push(element.key)
      }
    })
  }
}


watchEffect(() => {
  if (open.value) {
    placeDropdown();
    if (props.search) {
      nextTick(() => {
        searchNode.value.focus({ focusVisible: true });
      });
    }
  } else {
    filterText.value = "";
  }
});

const AllSelected = computed(()=>selectedOptions.value.length == options.value.length)
const FilterSelected = computed(()=>{
  return filteredOptions.value.reduce((c,el) => c&& selectedOptions.value.includes(el.key),true) 
})
const NoneSelected = computed(()=>selectedOptions.value.length == 0)

const placeholder = computed(() => {
  const output = selectedOptions.value
    .map((opt) => options.value.find((el) => el.key == opt)?.value)
    .join(", ");

  return output.length > 0 ? output : "--";
});
</script>

<template>
  <div v-if="props.showSelected">
    <h2>selezione:</h2>
    <div v-for="opt in selectedOptions" :key="opt">{{ opt }}</div>
  </div>
  <input
    @focus="open = true"
    @click="open = true"
    ref="inputNode"
    :value="placeholder"
    class="extra-select extra-select-input"
    readonly=""
  />
  <Teleport to="body">
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
          <div
            v-if="filterText.length == 0"
            @click="toggleAll"
          >
          <div class="row-input">
           <input :checked="AllSelected" type="checkbox" /><b>Select all</b>
          </div>
          </div>
          <div @click="toggleAll($e,false)">Clear</div>
          <div
            v-if="filteredOptions.length > 0 && filterText.length > 0"
            @click="toggleFiltered"
          >
          <div class="row-input">
            <input :checked="FilterSelected" type="checkbox" /><b>Select Filtered</b>
            </div>
          </div>
          
        </template>
        <template v-if="filteredOptions.length == 0">
          
          <div >No matches found</div>
        </template>
      </template>
      <div v-else >Insert at least {{props.minChars}} characters</div>
      <recycle-scroller
        :items="filteredOptions"
        :item-size="32"
        key-field="key"
        class="scroller"
        v-slot="{ item }"
      >
        <div
          class="dropdown-row"
          @click="toggleOption(item.key, $event)"
          style="height: 32px"
        >
          <div class="row-input">
            <input
              :checked="selectedOptions.includes(item.key)"
              v-if="isMultiple"
              type="checkbox"
            />
            {{ item.value }}
          </div>
        </div>
      </recycle-scroller>
    </div>
  </Teleport>
  <Teleport :to="props.originalNode">
    <option
      v-for="opt in selectedOptions"
      :key="opt"
      selected="selected"
      :value="opt"
    ></option>
  </Teleport>
</template>
