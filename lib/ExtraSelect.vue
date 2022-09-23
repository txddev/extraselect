<script setup>
import { RecycleScroller } from 'vue-virtual-scroller'
import { offset, getParents,empty } from './windowUtils'
import { ref } from "@vue/reactivity";
import { computed, nextTick, onMounted,onUnmounted, watchEffect } from 'vue';
import testOptions from './test_options'
import {loadOptions } from './options'

const props = defineProps({
    keepOpen: Boolean|null,
    originalNode: Object,
    maxWidth: String | null,
    minWidth: String | null,
    search: Boolean | null
})

props.originalNode.hidden = true

const isMultiple = ref(props.originalNode.multiple)
const originalSelection = Array.apply(null,props.originalNode.selectedOptions).map(opt => opt.value)
const selectedOptions = ref(originalSelection.filter(n => n))

const options = loadOptions(props.originalNode)

empty(props.originalNode)

const searchActive = ref(props.search??true)
const inputNode = ref(null)
const dropdownNode = ref(null)
const searchNode = ref(null)
const open = ref(false)
const preventDefault = (e) => e.preventDefault()
const toggleOption = (key,event) => {
    event.preventDefault()
    event.stopPropagation()
    if(isMultiple.value){
        if(selectedOptions.value.includes(key)){
            selectedOptions.value.splice(selectedOptions.value.indexOf(key),1)
        }else{
            selectedOptions.value.push(key)
        }
    }else{
        selectedOptions.value = [key]
        open.value = false
    }
}

if (!props.keepOpen) {
    const autoCloseHandler = function(e) {
        const elements = getParents(e.target)
        elements.push(e.target)
        
        if(!elements.includes(inputNode.value) && !elements.includes(dropdownNode.value) ){
            open.value = false
        }
    }
    
    onMounted(()=>{
        console.log("mounting on",window.document)
        window.document.addEventListener("mousedown", autoCloseHandler)
        window.document.addEventListener("focusin", autoCloseHandler)
    })
    onUnmounted(() => {
        window.document.removeEventListener("mousedown",autoCloseHandler)
        window.document.removeEventListener("focusin",autoCloseHandler)
    })
}

const placeDropdown = function () {
    
    var inputOffset = offset(inputNode.value)
    var containerOffset = offset(document.querySelector("body"));
    
    dropdownNode.value.style.top = -containerOffset.top+inputOffset.top
    
}

//const actualTestOptions = testOptions.map((el,idx)=>({...el,key: idx}))

//const options = ref(actualTestOptions)

const getTextWidth = function(text, font) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  context.font = font || getComputedStyle(props.originalNode).font;

  return context.measureText(text).width;
}
const maxWidth = computed(() => {
        if(props.maxWidth == null || props.maxWidth === "inherit"){
            return  offset(inputNode.value).width ?? 200
        }
        if(props.maxWidth === "dynamic"){
            return Math.max(...options.value.map(el=>getTextWidth(el.value)))+35
        }
        return props.maxWidth
    })

const dropdownStyle = computed(()=>{
    var inputOffset = offset(inputNode.value)
    var containerOffset = offset(document.querySelector("body"));
    let out = {
        width: maxWidth.value.toString()+"px",
        position: "absolute",
        top: (-containerOffset.top+inputOffset.top+inputOffset.height).toString()+"px",
        left: (-containerOffset.left+inputOffset.left).toString()+"px",
    }
    
    return out
})

const filter = ref("")

const setOpen = (value) => {
    open.value = value
}


const filteredOptions = computed(()=>options.value
    .filter((option)=>{
    if(filter.value.length>0){
        return option.value.toLowerCase().includes(filter.value.toLowerCase())
    }
    return true
}))

watchEffect(()=>{
    console.log("watching open",open.value)
    if(open.value){
        placeDropdown()
        if(searchActive.value){
            nextTick(()=>{
                searchNode.value.focus({focusVisible: true})
            })
        }
    }else{
        filter.value = ""
    }
})


const placeholder = computed(()=>{
    const output = selectedOptions.value.map(opt=>options.value.find((el)=>el.key == opt)?.value).join(", ")
    
    return output.length > 0?output:'--'
    
})

</script>

<template>
    <input @focus="setOpen(true)" @click="setOpen(true)" ref="inputNode" :value="placeholder" class="extra-select extra-select-input form-select" readonly="">
    <Teleport to="body">
        <div class="extra-select dropdown" ref="dropdownNode" v-show="open" :style="dropdownStyle">
            <div v-if="searchActive">
                <input ref="searchNode" class="extra-select-search form-control" v-model="filter" type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false" placeholder="Cerca...">
            </div>
            <template v-if="isMultiple" >
                <div v-if="filter.length == 0" @click="selectedOptions=options.map(el=>el.key)"><label><b>Select all</b></label></div>
                <div v-if="filteredOptions.length > 0 && filter.length > 0" @click="selectedOptions=filteredOptions.map(el=>el.key)"><label><b>Select Filtered</b></label></div>
                <div @click="selectedOptions=[]"><label><b>Select None</b></label></div>
            </template>
            <div v-if="filteredOptions.length == 0">No matches found</div>
            <recycle-scroller
                :items="filteredOptions"
                :item-size="32"
                key-field="key"
                class="scroller"
                v-slot="{ item }"
            >    
                <div class="dropdown-row" @click="toggleOption(item.key,$event)" style="height:32px"><label class="">
                    <input :checked="selectedOptions.includes(item.key)" v-if="isMultiple" type="checkbox"> {{item.value}} </label>
                </div>
            </recycle-scroller>
        </div>
    </Teleport>
    <Teleport :to="props.originalNode">
        <option v-for="opt in selectedOptions" :key="opt" selected="selected" :value="opt"></option>
    </Teleport>
</template>
