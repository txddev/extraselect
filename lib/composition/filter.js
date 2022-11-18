import { nextTick, ref, watchEffect } from "vue"

export const loadFilter = (options,selectedOptions,toggleOption, filterFields = [], hardFilterFields = []) => {
    
    const filterText = ref("")
    const filteredOptions = ref([])
    const filterValues = ref({})

    const mergedFilterFields = {...filterFields.reduce( (c,el) =>{c[el] = false; return c},{} ),...hardFilterFields.reduce( (c,el) =>{c[el] = true; return c},{} )}
    
    for(let field in mergedFilterFields){
        let isHard = mergedFilterFields[field];
        let node = document.getElementById(field)
        filterValues.value[field] = node?.value
        if(node){
            node.addEventListener("change", (event) => { 
                filterValues.value[field] = event.target.value
                if(isHard){
                    nextTick(() =>{
                        console.log(Array.from(selectedOptions.value.keys()))
                        for(let key of Array.from(selectedOptions.value.keys())){
                            if(!filteredOptions.value.find(el => el.key == key)){
                                console.log("toggling")
                                toggleOption(key,false)
                            }
                        }
                    })
                }
            })
        }
    }
    
    const filter = function(options,searchTerm) {
        let results = options.value

        if(Object.keys(filterValues.value).length > 0){
            results = results
                .filter((option)=>{
                    for(let key in filterValues.value){
                        // se il filtro è hard, basta che il valore di filtraggio esista ed il filtro viene applicato. se è soft, il valore deve essere di almeno 1 carattere
                        const applyFilter = mergedFilterFields[key] ? true : (filterValues.value[key] ?? "").length > 0
                        console.log(mergedFilterFields,key,filterValues.value[key],applyFilter)
                        if(applyFilter && option.data?.hasOwnProperty(key) && option.data[key] != filterValues.value[key]){
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