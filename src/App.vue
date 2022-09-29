<script setup lang="ts">
import ExtraSelect from "../lib/ExtraSelect.vue";
import {ref, watchEffect} from 'vue'

const options = ref([
  {key:1,value:"Opzione 1"},
  {key:2,value:"Opzione 2"},
  {key:3,value:"Opzione 3"},
  {key:4,value:"Opzione 4"},
  {key:5,value:"Opzione 5"},
  {key:6,value:"Opzione 6"},
  {key:7,value:"Opzione 7"},
  {key:8,value:"Opzione 8"},
  {key:9,value:"Opzione 9"},
  {key:10,value:"Opzione 10"},
  {key:11,value:"Opzione 11"},
  {key:12,value:"Opzione 12"},
  {key:13,value:"Opzione 13"},
  {key:14,value:"Opzione 14"},
  {key:15,value:"Opzione 15"},
  {key:16,value:"Opzione 16"},
])

const selection = ref([])

const multiple = ref(false)
const keepOpen = ref(false)
const maxWidth = ref("dynamic")
const search = ref(true)
const minChars= ref(0)
const showSelected = ref(false)
const removeIcon = ref("X")

  // fetchMode: { type: String, default: "limited" },
  // fetchOptions: { type: Object, default: {} },
  // url: { type:String, required:false },
  // searchableUrl: { type: Boolean, default: false },
  
  

</script>

<template>
  <div>
    <a href="/index-b3.html"> Bootstrap 3</a>
    <a href="/index-b4.html"> Bootstrap 4</a>
    <a href="/index-b5.html"> Bootstrap 5</a>
    <h2>Vue Component</h2>
    <div>Selected Options: {{selection.join(", ")}}</div>
    <div><label><input v-model="multiple" type="checkbox" />multiple</label></div>
    <div><label><input v-model="keepOpen" type="checkbox" />keepOpen</label></div>
    <div><label><input v-model="search" type="checkbox" />search</label></div>
    <div><label><input v-model="showSelected" type="checkbox" />showSelected</label></div>
    <div><input v-model="minChars" type="number" />minChars</div>
    <div><input v-model="maxWidth" type="text" />maxWidth</div>
    <div><input v-model="removeIcon" type="text" />removeIcon</div>
    
    <extra-select :options="options" v-model="selection" 
      :multiple="multiple"
      :keepOpen="keepOpen"
      :maxWidth="maxWidth"
      :search="search"
      :minChars="minChars"
      :showSelected="showSelected"
      :remove-icon="removeIcon"
    ></extra-select>
  </div>
  
</template>

