import { ref, watchEffect } from "vue"

export const loadFilter = (options, filterFields) => {
    
    const filterText = ref("")
    const filteredOptions = ref([])
    const filterValues = ref({})

    for(let field of filterFields){
        let node = document.getElementById(field)
        filterValues.value[field] = node?.value
        if(node){
            node.addEventListener("change", (event) => { filterValues.value[field] = event.target.value })
        }
    }
    
    const filter = function(options,searchTerm) {
        let results = options.value

        if(Object.keys(filterValues.value).length > 0){
            results = results
                .filter((option)=>{
                    for(let key in filterValues.value){
                        if((filterValues.value[key] ?? "").length > 0 && (!option.data?.hasOwnProperty(key) || option.data[key] != filterValues.value[key])){
                            return false
                        }
                    }
                    return true
                })   
        }

        if(searchTerm.length > 0){
            results = results
                .filter((option)=>{
                    return option.value.toLowerCase().includes(searchTerm.toLowerCase())
                })   
        }
       
        return results
    }
    
    watchEffect(()=>{
        filteredOptions.value = filter(options,filterText.value)
    })
    

    return {filterText,filteredOptions,filterValues}
}