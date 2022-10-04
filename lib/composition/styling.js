import { computed,  ref,  watchPostEffect } from "vue";
import { offset } from "../windowUtils";

export const loadStyling = (options,selectedOptions,open,inputNode,dropdownNode,containerNode,propMaxWidth) => {
    const bodyFont = getComputedStyle(document.querySelector("body")).font
    const getTextWidth = function (text) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        
        context.font = bodyFont;
        
        return context.measureText(text).width;
    };
      
    
    
    const maxWidth = computed(() => {
        const min = offset(inputNode.value).width ?? 100;
        if (propMaxWidth === "inherit") {
          return min;
        }
        if ((propMaxWidth == null || propMaxWidth === "dynamic")) {
          const baseRem = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
          
          
          return Math.max(min,Math.max(...options.value.map((el) => getTextWidth(el.value))) + 20+baseRem*3);
        }
        return propMaxWidth;
      });
      const dropdownStyle = ref({
        position: "absolute",
        "min-width": "max-content"
      })
      watchPostEffect(() => {
        
        if(open.value < 0) console.log("is open")
        if(selectedOptions.value.length < 0) console.log("empty selection")
        var inputOffset = offset(inputNode.value);
        var containerOffset = offset(null)
        if(containerNode.value && ["absolute","relative","fixed","sticky"].includes(getComputedStyle(containerNode.value).position)){
          var containerOffset = offset(containerNode.value)
        }
        
        let left = (-containerOffset.left+inputOffset.left);
        const viewportWidth = window.document.documentElement.clientWidth
        
        if(left+maxWidth.value > viewportWidth){
          left = viewportWidth - maxWidth.value
        }
        
        dropdownStyle.value = {
            position: "absolute",
            "min-width": "max-content",
            width: maxWidth.value.toString() + "px",
            top:(-containerOffset.top + inputOffset.top + inputOffset.height).toString() +
                "px",
            left: left.toString() + "px",
        };    
      });
      
    return {dropdownStyle,getTextWidth}
}