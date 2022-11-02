import { ref, watchEffect } from "vue"
import { empty } from '@txd/utils'
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
            const matchingKey = optionRef.map.get(key)
            if(matchingKey){
                matchingKey.value = label
                matchingKey.data = data
            }else{
                let element = {value:label,key,data}
                optionRef.value.push(element)
                optionRef.map.set(element.key,element)
                
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
    if(originalNode){
        originalNode.style.display = 'none'
        empty(originalNode)
    }

}

export const loadOptions = (originalNode,propOptions,propValue,initialValue) => {
    
    const selectedOptions = ref(new Map())
    
    watchEffect(()=>{
        selectedOptions.value.clear()
        for(let el of propValue.value){
            selectedOptions.value.set(el,el)
        }
        
    })

    const options = ref([])
    options.map = new Map()
    options.rebuildMap = () =>{
        options.map.clear()
        if(options.value){
            for(let opt of options.value){
                options.map.set(opt.key,opt)
            }
        }
    }
    
    
    
    
    watchEffect(()=>{
        if(propOptions.value){
            options.value = propOptions.value
            options.rebuildMap()
        }
    })
    
    if(originalNode){
        selectedOptions.value.clear()
        for(let el of Array.apply(null,originalNode.selectedOptions).map(opt => opt.value).filter(n => n)){
            selectedOptions.value.set(el,el)
        }
        options.value = Array.apply(null, originalNode.options).reduce((c,opt) => {
            c.push({value:opt.text,key:opt.value,data: opt.dataset})
            return c
        },[])
        options.rebuildMap()
    }
    
    
    if(Array.isArray(initialValue)){
        for(let el of initialValue){
            selectedOptions.value.set(el,el)
        }
    }else if(initialValue != null){
        selectedOptions.value.set(initialValue,initialValue)
    }
    
    
    exposeOptions(options,originalNode?.id??"extraselect_"+(++count).toString())
    
    
    return {options,selectedOptions}
}