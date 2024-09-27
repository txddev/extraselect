import { Ref, ref, watchEffect } from "vue"
import { empty } from '@txd/utils'
import { DataValue, Option, OptionValue, TargetHTMLElement } from "../../types";

const intIfEqual = (str:number|string) => {
    let intstr = parseInt(str as string);
    return intstr == str ? intstr : str;
}

const stringOrJson = (str: string) => {

    try {
        var o : DataValue = JSON.parse(str);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return str;
};


const exposeOptions = (optionRef : Ref<Option[]>,selectedRef: Ref<Map<OptionValue,OptionValue>>,name: string) => {
    
    
    const actions = {
        defaultArray: optionRef.value,
        get: ()=>{
            return optionRef.value
        },
        push: (key,label,data = null) => {
            if(parseInt(key) == key){
                key = parseInt(key)
            }
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
            
        },
        selection:{
            get(){
                return selectedRef.value
            },
            clear(){
                selectedRef.value.clear()
            },
            add(value){
                selectedRef.value.set(value,value)
            },
            remove(value){
                selectedRef.value.delete(value)
            }
        }
    }
    let w = window
    if(!w.hasOwnProperty('ExtraSelectOptions')){
        w = Object.assign(window,{ExtraSelectOptions:{} as Record<string,typeof actions>})
    }
    w.ExtraSelectOptions[name] = actions
    optionRef.actions = actions
}
 let count = 1

export const prepareOriginalNode = (originalNode) =>{
    if(originalNode){
        originalNode.style.display = 'none'
        empty(originalNode)
    }

}

export const loadOptions = (originalNode: TargetHTMLElement|null,propOptions: Ref<Option[]>,propValue:Ref<OptionValue[]>,initialValue: OptionValue[]|undefined) => {
    
    const selectedOptions = ref(new Map<OptionValue,OptionValue>())
    
    watchEffect(()=>{
        if(Array.isArray(propValue.value)){
            selectedOptions.value.clear()
            for(let el of propValue.value){
                selectedOptions.value.set(el,el)
            }
        }
    })

    
    
    const options = Object.assign(ref<Option[]>([]),{map: new Map(), rebuildMap: () => {return}})
     
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
            options.value = propOptions.value.map(el => ({...el,key: intIfEqual(el.key)}))
            options.rebuildMap()
        }
    })
    
    if(originalNode){
        selectedOptions.value.clear()
        if(originalNode instanceof HTMLSelectElement){
            for(let optIndex in originalNode.selectedOptions){
                let opt = originalNode.selectedOptions[optIndex]
                let v = intIfEqual(opt.value)
                if(v!=null){
                    selectedOptions.value.set(v,v)
                }
                
            }
            
            let c : Option[] = []
            for(let optIndex in originalNode.options){
                let opt = originalNode.options[optIndex]
                c.push({
                    value:opt.text,
                    key:intIfEqual(opt.value),
                    data: (()=> {
                        const acc :Record<string,DataValue> = {}
                        for(let key in opt.dataset){
                            acc[key] = opt.dataset[key] ? stringOrJson(opt.dataset[key]) : null
                        }
                        return acc
                    })()
                })
                
            }
            
            options.value = c
        }
        if(originalNode.matches("input")){
            let startingValue = originalNode.value
            if(startingValue != null && startingValue.length >0){
                options.value = [{value:startingValue,key:startingValue}]
            }
        }
        options.rebuildMap()
    }
    
    
    if(Array.isArray(initialValue)){
        for(let el of initialValue){
            selectedOptions.value.set(intIfEqual(el),intIfEqual(el))
        }
    }else if(initialValue != null){
        selectedOptions.value.set(intIfEqual(initialValue),intIfEqual(initialValue))
    }
    
    let optionKey = originalNode?.id
    if(optionKey == null || optionKey==="" || optionKey == 0){
        optionKey = "extraselect_"+(++count).toString()
    }
    exposeOptions(options,selectedOptions,optionKey)
    
    const resetValues = []
    selectedOptions.value.forEach((v,k) => {
        resetValues.push([k,v])
    })
    
    const onReset = () =>{
        selectedOptions.value.clear()
        for(let [key,value] of resetValues){
            selectedOptions.value.set(key,value)
        }
    }
    
    return {options,selectedOptions,onReset}
}