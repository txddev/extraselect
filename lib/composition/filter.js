import { ref, watchEffect } from "vue"

export const loadFilter = (options) => {
    
    const filterText = ref("")
    const filteredOptions = ref([])
    
    const filter = function(options,searchTerm) {
            const results = options.value.filter((option)=>{
                if(searchTerm.length>0){
                    return option.value.toLowerCase().includes(searchTerm.toLowerCase())
                }
                return true
            })   
            return results
    }
    
    watchEffect(()=>{
        filteredOptions.value = filter(options,filterText.value)
    })
    

    return {filterText,filteredOptions}
}