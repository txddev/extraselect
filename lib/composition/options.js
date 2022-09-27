import { ref } from "vue"
import { empty } from '../windowUtils'
const exposeOptions = (optionRef,name) => {
    if(window.ExtraSelectOptions == null){
        window.ExtraSelectOptions = {}
    }
    
    const actions = {
        defaultArray: optionRef.value,
        get: ()=>{
            return optionRef.value
        },
        push: (key,label,data = null) => {
            const matchingKey = optionRef.value.find(el=>el.key == key)
            if(matchingKey){
                matchingKey.value = label
                matchingKey.data = data
            }else{
                optionRef.value.push({value:label,key,data})
            }
        },
        addRange: (options) => {
            for(let opt of options){
                optionRef.actions.push(opt.key,opt.value,opt.data)
            }
        },
        remove: (key) => {
            optionRef.value.splice(optionRef.value.findIndex((el)=>el.key == key),1)
        },
        clear: () => {
            optionRef.value = []
        },
        sort: (callback = null) => {
            if(callback == null){
                callback = (a,b) => a.value.localeCompare(b.value)
            }
            optionRef.value = optionRef.value.sort(callback)
        },
        setDefault: function(array){
            this.defaultArray = array
        },
        restoreDefault: function(){
            optionRef.value = this.defaultArray
        },
        filter: function(filterCallback){
            
        }
    }
    
    window.ExtraSelectOptions[name] = actions
    optionRef.actions = actions
}
 let count = 1

export const prepareOriginalNode = (originalNode) =>{
    originalNode.hidden = true
    empty(originalNode)

}

export const loadOptions = (originalNode) => {
    
    const originalSelection = Array.apply(null,originalNode.selectedOptions).map(opt => opt.value)
    const selectedOptions = ref(originalSelection.filter(n => n))


    const options = ref(Array.apply(null, originalNode.options).reduce((c,opt) => {
        c.push({value:opt.text,key:opt.value,data: opt.dataset})
        return c
    },[]))
    
    if(originalNode.id == null || originalNode.id.length == 0){
        originalNode.id = "extraselect_"+count.toString()
        count++
    }
    
    exposeOptions(options,originalNode.id)
    
    
    return {options,selectedOptions}
}