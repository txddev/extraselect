import { DataStore } from "@txd/utils";
import { createApp } from "vue";
import ExtraSelectComponent from "./ExtraSelect.vue"
import ExtraSuggestComponent from "./ExtraSuggest.vue"


export const ExtraSelect = {
    init: function(){
        
        document.querySelectorAll(".extraselect").forEach(function(el){
            
            ExtraSelect.bindNew(el)
        });
    },
    bindNew(node){
        DataStore.lock(node,"extra-select",()=>{
            
            const propData = {}
            
            for(let key in node.dataset){
                try{
                    propData[key] = JSON.parse(node.dataset[key])
                }catch(e){
                    propData[key] = node.dataset[key]
                }
            }
            
            
            propData["originalNode"] = node
            const newNode = document.createElement("div")
            node.parentNode.insertBefore(newNode, node.nextSibling);
            newNode.dataset.isVue = true
            newNode.style.display = "contents";
            const app = createApp(ExtraSelectComponent,propData)
            app.mount(newNode)
            node.addEventListener("remove",function(){
                app.unmount()
                newNode.remove()
                node.remove()
                DataStore.remove(node,"extra-select")
                
            })
        })
    }
    
}
export const ExtraSuggest = {
    init: function(){
        
        document.querySelectorAll(".extrasuggest").forEach(function(el){
            
            ExtraSuggest.bindNew(el)
        });
    },
    bindNew(node){
        DataStore.lock(node,"extra-suggest",()=>{
            
            const propData = {}
            
            for(let key in node.dataset){
                try{
                    propData[key] = JSON.parse(node.dataset[key])
                }catch(e){
                    propData[key] = node.dataset[key]
                }
            }
            
            
            propData["originalNode"] = node
            const newNode = document.createElement("div")
            node.parentNode.insertBefore(newNode, node.nextSibling);
            newNode.dataset.isVue = true
            newNode.style.display = "contents";
            const app = createApp(ExtraSuggestComponent,propData)
            app.mount(newNode)
            node.addEventListener("remove",function(){
                app.unmount()
                newNode.remove()
                node.remove()
                DataStore.remove(node,"extra-suggest")
                
            })
        })
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
    ExtraSelect.init()
    ExtraSuggest.init()
});