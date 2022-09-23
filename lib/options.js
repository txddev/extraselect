import { ref } from "vue"

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
            optionRef.value.push({value:label,key,data})
        },
        remove: (key) => {
            optionRef.value.splice(optionRef.value.findIndex((el)=>el.key == key),1)
        },
        clear: () => {
            optionRef.value = []
        },
        sort: (callback) => {
            optionRef.value = optionRef.value.sort(callback)
        },
        setDefault: function(array){
            this.defaultArray = array
        },
        restoreDefault: function(){
            optionRef.value = this.defaultArray
        }
    }
    
    window.ExtraSelectOptions[name] = actions
    optionRef.actions = actions
}
 let count = 1
export const loadOptions = (originalNode) => {
    const options = ref(Array.apply(null, originalNode.options).reduce((c,opt) => {
        c.push({value:opt.text,key:opt.value,data: opt.dataset})
        return c
    },[]))
    
    if(originalNode.id == null || originalNode.id.length == 0){
        originalNode.id = "extraselect_"+count.toString()
        count++
    }
    
    exposeOptions(options,originalNode.id)
    
    return options
}