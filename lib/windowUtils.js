export const offset = function(node){
    if(node == null) return {top:0,left:0}
    let rect = node.getBoundingClientRect();

    return { 
        top: rect.top + window.scrollY, 
        left: rect.left + window.scrollX, 
        width: rect.width,
        height: rect.height
    };
}

export const getParents = function(el, parentSelector) {
    if (parentSelector === undefined) {
        parentSelector = document;
    }
    var parents = [];
    var p = el.parentNode;
    while (p !== parentSelector) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    parents.push(parentSelector);
    return parents;
}

export const wrap = function (toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    toWrap.parentNode.appendChild(wrapper);
    return wrapper.appendChild(toWrap);
}

export const  empty = function (element) {

    // Get the element's children as an array
    var children = Array.prototype.slice.call(element.childNodes);
  
    // Remove each child node
    children.forEach(function (child) {
      element.removeChild(child);
    });
  
  }