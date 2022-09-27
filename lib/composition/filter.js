import { ref, watchEffect } from "vue"

export const loadFilter = (options, minChars) => {
    
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
        if(filterText.value.length>= minChars){
            filteredOptions.value = filter(options,filterText.value)
            }else{
            filteredOptions.value = []
        }
    })
    

    return {filterText,filteredOptions}
}