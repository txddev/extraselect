import { computed,  ref,  watchPostEffect } from "vue";
import { offset } from "../windowUtils";

export const loadStyling = (options,selectedOptions,originalNode,inputNode,dropdownNode,propMaxWidth) => {
    const getTextWidth = function (text, font) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        
        context.font = font || getComputedStyle(originalNode).font;
        
        return context.measureText(text).width;
    };
      
    const placeDropdown = function () {
        var inputOffset = offset(inputNode.value);
        var containerOffset = offset(document.querySelector("body"));
        
        dropdownNode.value.style.top = -containerOffset.top + inputOffset.top;
    };
    
    const maxWidth = computed(() => {
        const min = offset(inputNode.value).width ?? 100;
        if (propMaxWidth === "inherit") {
          return min;
        }
        if (propMaxWidth == null || propMaxWidth === "dynamic") {
          return Math.max(min,Math.max(...options.value.map((el) => getTextWidth(el.value))) + 15);
        }
        return propMaxWidth;
      });
      const dropdownStyle = ref({
        position: "absolute",
        "min-width": "max-content"
      })
      watchPostEffect(() => {
        if(selectedOptions.value.length < 0) console.log("empty selection")
        var inputOffset = offset(inputNode.value);
        var containerOffset = offset(document.querySelector("body"));
        dropdownStyle.value = {
            position: "absolute",
            "min-width": "max-content",
            width: maxWidth.value.toString() + "px",
            top:
                (-containerOffset.top + inputOffset.top + inputOffset.height).toString() +
                "px",
            left: (-containerOffset.left + inputOffset.left).toString() + "px",
        };    
      });
      
    return {dropdownStyle,placeDropdown}
}