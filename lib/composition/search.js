import { computed, ref } from "vue"

export const loadSearch = (active,options) => {
    const searchActive = ref(active??true)
    const filterText = ref("")

    const filteredOptions = computed(()=>options.value
        .filter((option)=>{
        if(filterText.value.length>0){
            return option.value.toLowerCase().includes(filterText.value.toLowerCase())
        }
        return true
    }))

    return {searchActive,filterText,filteredOptions}
}