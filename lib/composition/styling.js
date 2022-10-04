import { computed,  ref,  watchPostEffect } from "vue";
import { offset } from "../windowUtils";

export const loadStyling = (options,selectedOptions,open,inputNode,dropdownNode,containerNode,propMaxWidth) => {
    const getTextWidth = function (text, font) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        
        context.font = font;
        
        return context.measureText(text).width;
    };
      
    
    
    const maxWidth = computed(() => {
        const min = offset(inputNode.value).width ?? 100;
        if (propMaxWidth === "inherit") {
          return min;
        }
        if ((propMaxWidth == null || propMaxWidth === "dynamic")) {
          const font = getComputedStyle(document.querySelector("body")).font
          return Math.max(min,Math.max(...options.value.map((el) => getTextWidth(el.value,font))) + 15);
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
        
        dropdownStyle.value = {
            position: "absolute",
            "min-width": "max-content",
            width: maxWidth.value.toString() + "px",
            top:(-containerOffset.top + inputOffset.top + inputOffset.height).toString() +
                "px",
            left: (-containerOffset.left+inputOffset.left).toString() + "px",
        };    
      });
      
    return {dropdownStyle}
}