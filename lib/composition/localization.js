import { ref } from "vue"


const defaults = ref({
    
})
function messageReplace(text, obj = {}){
    for(let key in obj){
      text = text.replace(`:${key}`,obj[key])
    }
    return text
  }

export const exposeLocalizationDefaults = (defaults = null) => {
    if(window.ExtraSelectLocalization == null){
        window.ExtraSelectLocalization = {}
    }
    let current = window.ExtraSelectLocalization.defaults?.defaultArray ?? {}
    let final = {...current}
    Object.assign(final,defaults??{})
    
    exposeLocalization(ref(final),'defaults')
}
const exposeLocalization = (localizationRef,name) => {
    if(window.ExtraSelectLocalization == null){
        window.ExtraSelectLocalization = {}
        exposeLocalizationDefaults()
        
    }
    
    const actions = {
        defaultArray: localizationRef.value,
        list: ()=>{
            return localizationRef.value
        },
        get: (key)=>{
            
            return localizationRef.value[key] ?? null
        },
        push: (key,value) => {
            localizationRef.value[key] = value
        },
        
    }
    
    window.ExtraSelectLocalization[name] = actions
    localizationRef.actions = actions
}

let count = 0;

export const loadLocalization = (originalNode,propLocalization) => {
    
    
        
    exposeLocalization(propLocalization,originalNode?.id??"extraselect_"+(++count).toString())
    
    const t = (key,obj = {}) => {
        let message = propLocalization.value[key] ??window.ExtraSelectLocalization['defaults'].get(key)
        if(message == null){
            window.ExtraSelectLocalization['defaults'].push(key,key)
            message = key;
        }
        return messageReplace(message,obj)
    }
    return {propLocalization,t}
}