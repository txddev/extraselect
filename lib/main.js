import DataStore from "../DataStore";
import { createApp } from "vue";
import ExtraSelectComponent from "./ExtraSelect.vue"
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'


const ExtraSelect = {
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
ExtraSelect.init()
export default ExtraSelect