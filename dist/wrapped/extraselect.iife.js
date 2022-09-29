(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:flex}.vue-recycle-scroller__slot{flex:auto 0 0}.vue-recycle-scroller__item-wrapper{flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.extra-select.selection{display:flex;flex-wrap:wrap}.extra-select.selection>.selection-badge{background-color:#d3d3d3;gap:.3rem;font-size:.9rem;display:flex;margin:.5rem .2rem;padding:.1rem .5rem;border-radius:1.5rem;cursor:pointer}.extra-select.selection>.selection-badge:hover>.selection-remove{color:#333;text-shadow:1px 0 0 #333,0 -1px 0 #333,0 1px 0 #333,-1px 0 0 #333}.extra-select.dropdown{border:1px solid rgb(180,180,180);box-shadow:0 0 8px #00000013;background-color:#fff;padding-top:.5rem;padding-left:0}.extra-select.dropdown.searching{background-color:#f8f8f8}.extra-select.dropdown .extra-select-search{margin:.4rem;width:calc(100% - 1rem)}.extra-select .allselect-clear{display:flex;width:100%;justify-content:flex-end;align-items:center;border-bottom:1px solid #ced4da}.extra-select .allselect-clear .all-select{flex-grow:1;margin-right:.5rem;cursor:pointer}.extra-select .allselect-clear .all-select:hover{background-color:#eff0f0}.extra-select .allselect-clear .clear{color:#11c3c3;font-weight:700;padding:0 1rem 0 .5rem;cursor:pointer}.extra-select .allselect-clear .clear:hover{color:#0d9494;background-color:transparent!important}.extra-select .allselect-clear .row-input input{margin-right:.45rem}.extra-select .scroller{max-height:250px}.extra-select .no-matches{font-style:italic;padding-left:.5rem}.extra-select .row-input{pointer-events:none;user-select:none;white-space:nowrap;overflow-x:hidden;width:100%;text-overflow:ellipsis}.extra-select .row-input>input[type=checkbox]{pointer-events:none}.extra-select .dropdown-row{overflow-x:hidden;width:100%;display:flex;justify-content:start;align-items:center;padding:0 1rem}.extra-select .vue-recycle-scroller__item-view.hover{background-color:#eff0f0;cursor:pointer}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Extraselect=function(t){"use strict";const x=new WeakMap;class ${static put(i,n,r){x.has(i)||x.set(i,new Map),x.get(i).set(n,r)}static get(i,n){return x.get(i).get(n)}static has(i,n){return x.has(i)&&x.get(i).has(n)}static remove(i,n){var r=x.get(i).delete(n);return!x.get(i).size===0&&x.delete(i),r}static lock(i,n,r){return $.has(i,n)?!1:($.put(i,n,!0),r())}}window.__Store=x;const Ge="",Qe="";function Y(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return parseInt(e.substring(i+5,e.indexOf(".",i)),10);var n=e.indexOf("Trident/");if(n>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var s=e.indexOf("Edge/");return s>0?parseInt(e.substring(s+5,e.indexOf(".",s)),10):-1}let I;function L(){L.init||(L.init=!0,I=Y()!==-1)}var N={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){L(),t.nextTick(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",I&&this.$el.appendChild(e),e.data="about:blank",I||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!I&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const G=t.withScopeId("data-v-b329ee4c");t.pushScopeId("data-v-b329ee4c");const Q={class:"resize-observer",tabindex:"-1"};t.popScopeId();const Z=G((e,i,n,r,s,l)=>(t.openBlock(),t.createBlock("div",Q)));N.render=Z,N.__scopeId="data-v-b329ee4c",N.__file="src/components/ResizeObserver.vue";function C(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(i){return typeof i}:C=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},C(e)}function ee(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function D(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,i,n){return i&&D(e.prototype,i),n&&D(e,n),e}function H(e){return ie(e)||ne(e)||re(e)||se()}function ie(e){if(Array.isArray(e))return M(e)}function ne(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function re(e,i){if(!!e){if(typeof e=="string")return M(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,i)}}function M(e,i){(i==null||i>e.length)&&(i=e.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=e[n];return r}function se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e){var i;return typeof e=="function"?i={callback:e}:i=e,i}function oe(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,s,l,o=function(a){for(var f=arguments.length,m=new Array(f>1?f-1:0),v=1;v<f;v++)m[v-1]=arguments[v];if(l=m,!(r&&a===s)){var h=n.leading;typeof h=="function"&&(h=h(a,s)),(!r||a!==s)&&h&&e.apply(void 0,[a].concat(H(l))),s=a,clearTimeout(r),r=setTimeout(function(){e.apply(void 0,[a].concat(H(l))),r=0},i)}};return o._clear=function(){clearTimeout(r),r=null},o}function q(e,i){if(e===i)return!0;if(C(e)==="object"){for(var n in e)if(!q(e[n],i[n]))return!1;return!0}return!1}var ae=function(){function e(i,n,r){ee(this,e),this.el=i,this.observer=null,this.frozen=!1,this.createObserver(n,r)}return te(e,[{key:"createObserver",value:function(n,r){var s=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=le(n),this.callback=function(c,a){s.options.callback(c,a),c&&s.options.once&&(s.frozen=!0,s.destroyObserver())},this.callback&&this.options.throttle){var l=this.options.throttleOptions||{},o=l.leading;this.callback=oe(this.callback,this.options.throttle,{leading:function(a){return o==="both"||o==="visible"&&a||o==="hidden"&&!a}})}this.oldResult=void 0,this.observer=new IntersectionObserver(function(c){var a=c[0];if(c.length>1){var f=c.find(function(v){return v.isIntersecting});f&&(a=f)}if(s.callback){var m=a.isIntersecting&&a.intersectionRatio>=s.threshold;if(m===s.oldResult)return;s.oldResult=m,s.callback(m,a)}},this.options.intersection),t.nextTick(function(){s.observer&&s.observer.observe(s.el)})}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&typeof this.options.intersection.threshold=="number"?this.options.intersection.threshold:0}}]),e}();function U(e,i,n){var r=i.value;if(!!r)if(typeof IntersectionObserver>"u")console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var s=new ae(e,r,n);e._vue_visibilityState=s}}function ce(e,i,n){var r=i.value,s=i.oldValue;if(!q(r,s)){var l=e._vue_visibilityState;if(!r){W(e);return}l?l.createObserver(r,n):U(e,{value:r},n)}}function W(e){var i=e._vue_visibilityState;i&&(i.destroyObserver(),delete e._vue_visibilityState)}var de={beforeMount:U,updated:ce,unmounted:W},ue={itemsLimit:1e3},fe=/(auto|scroll)/;function K(e,i){return e.parentNode===null?i:K(e.parentNode,i.concat([e]))}var F=function(i,n){return getComputedStyle(i,null).getPropertyValue(n)},he=function(i){return F(i,"overflow")+F(i,"overflow-y")+F(i,"overflow-x")},pe=function(i){return fe.test(he(i))};function me(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var i=K(e.parentNode,[]),n=0;n<i.length;n+=1)if(pe(i[n]))return i[n];return document.scrollingElement||document.documentElement}}function T(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(i){return typeof i}:T=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},T(e)}var ye={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(i){return["vertical","horizontal"].includes(i)}}};function ge(){return this.items.length&&T(this.items[0])!=="object"}var P=!1;if(typeof window<"u"){P=!1;try{var be=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,be)}catch{}}let ve=0;var R={name:"RecycleScroller",components:{ResizeObserver:N},directives:{ObserveVisibility:de},props:{...ye,itemSize:{type:Number,default:null},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1}},emits:["resize","visible","hidden","update"],data(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes(){if(this.itemSize===null){const e={"-1":{accumulator:0}},i=this.items,n=this.sizeField,r=this.minItemSize;let s=1e4,l=0,o;for(let c=0,a=i.length;c<a;c++)o=i[c][n]||r,o<s&&(s=o),l+=o,e[c]={accumulator:l,size:o};return this.$_computedMinItemSize=s,e}return[]},simpleArray:ge},watch:{items(){this.updateVisibleItems(!0)},pageMode(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler(){this.updateVisibleItems(!1)},deep:!0}},created(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1))},mounted(){this.applyPageMode(),this.$nextTick(()=>{this.$_prerender=!1,this.updateVisibleItems(!0),this.ready=!0})},beforeUnmount(){this.removeListeners()},methods:{addView(e,i,n,r,s){const l=t.markRaw({id:ve++,index:i,used:!0,key:r,type:s}),o=t.shallowReactive({item:n,position:0,nr:l});return e.push(o),o},unuseView(e,i=!1){const n=this.$_unusedViews,r=e.nr.type;let s=n.get(r);s||(s=[],n.set(r,s)),s.push(e),i||(e.nr.used=!1,e.position=-9999,this.$_views.delete(e.nr.key))},handleResize(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll(e){this.$_scrollDirty||(this.$_scrollDirty=!0,requestAnimationFrame(()=>{this.$_scrollDirty=!1;const{continuous:i}=this.updateVisibleItems(!1,!0);i||(clearTimeout(this.$_refreshTimout),this.$_refreshTimout=setTimeout(this.handleScroll,100))}))},handleVisibilityChange(e,i){this.ready&&(e||i.boundingClientRect.width!==0||i.boundingClientRect.height!==0?(this.$emit("visible"),requestAnimationFrame(()=>{this.updateVisibleItems(!1)})):this.$emit("hidden"))},updateVisibleItems(e,i=!1){const n=this.itemSize,r=this.$_computedMinItemSize,s=this.typeField,l=this.simpleArray?null:this.keyField,o=this.items,c=o.length,a=this.sizes,f=this.$_views,m=this.$_unusedViews,v=this.pool;let h,g,_;if(!c)h=g=_=0;else if(this.$_prerender)h=0,g=this.prerender,_=null;else{const y=this.getScroll();if(i){let p=y.start-this.$_lastUpdateScrollPosition;if(p<0&&(p=-p),n===null&&p<r||p<n)return{continuous:!0}}this.$_lastUpdateScrollPosition=y.start;const d=this.buffer;if(y.start-=d,y.end+=d,n===null){let p,b=0,O=c-1,w=~~(c/2),J;do J=w,p=a[w].accumulator,p<y.start?b=w:w<c-1&&a[w+1].accumulator>y.start&&(O=w),w=~~((b+O)/2);while(w!==J);for(w<0&&(w=0),h=w,_=a[c-1].accumulator,g=w;g<c&&a[g].accumulator<y.end;g++);g===-1?g=o.length-1:(g++,g>c&&(g=c))}else h=~~(y.start/n),g=Math.ceil(y.end/n),h<0&&(h=0),g>c&&(g=c),_=c*n}g-h>ue.itemsLimit&&this.itemsLimitError(),this.totalSize=_;let u;const E=h<=this.$_endIndex&&g>=this.$_startIndex;if(this.$_continuous!==E){if(E){f.clear(),m.clear();for(let y=0,d=v.length;y<d;y++)u=v[y],this.unuseView(u)}this.$_continuous=E}else if(E)for(let y=0,d=v.length;y<d;y++)u=v[y],u.nr.used&&(e&&(u.nr.index=o.findIndex(p=>l?p[l]===u.item[l]:p===u.item)),(u.nr.index===-1||u.nr.index<h||u.nr.index>=g)&&this.unuseView(u));const A=E?null:new Map;let k,S,V,z;for(let y=h;y<g;y++){k=o[y];const d=l?k[l]:k;if(d==null)throw new Error(`Key is ${d} on item (keyField is '${l}')`);if(u=f.get(d),!n&&!a[y].size){u&&this.unuseView(u);continue}u?(u.nr.used=!0,u.item=k):(S=k[s],V=m.get(S),E?V&&V.length?(u=V.pop(),u.item=k,u.nr.used=!0,u.nr.index=y,u.nr.key=d,u.nr.type=S):u=this.addView(v,y,k,d,S):(z=A.get(S)||0,(!V||z>=V.length)&&(u=this.addView(v,y,k,d,S),this.unuseView(u,!0),V=m.get(S)),u=V[z],u.item=k,u.nr.used=!0,u.nr.index=y,u.nr.key=d,u.nr.type=S,A.set(S,z+1),z++),f.set(d,u)),n===null?u.position=a[y-1].accumulator:u.position=y*n}return this.$_startIndex=h,this.$_endIndex=g,this.emitUpdate&&this.$emit("update",h,g),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,300),{continuous:E}},getListenerTarget(){let e=me(this.$el);return window.document&&(e===window.document.documentElement||e===window.document.body)&&(e=window),e},getScroll(){const{$el:e,direction:i}=this,n=i==="vertical";let r;if(this.pageMode){const s=e.getBoundingClientRect(),l=n?s.height:s.width;let o=-(n?s.top:s.left),c=n?window.innerHeight:window.innerWidth;o<0&&(c+=o,o=0),o+c>l&&(c=l-o),r={start:o,end:o+c}}else n?r={start:e.scrollTop,end:e.scrollTop+e.clientHeight}:r={start:e.scrollLeft,end:e.scrollLeft+e.clientWidth};return r},applyPageMode(){this.pageMode?this.addListeners():this.removeListeners()},addListeners(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,P?{passive:!0}:!1),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners(){!this.listenerTarget||(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem(e){let i;this.itemSize===null?i=e>0?this.sizes[e-1].accumulator:0:i=e*this.itemSize,this.scrollToPosition(i)},scrollToPosition(e){this.direction==="vertical"?this.$el.scrollTop=e:this.$el.scrollLeft=e},itemsLimitError(){throw setTimeout(()=>{console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",this.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},sortViews(){this.pool.sort((e,i)=>e.index-i.index)}}};const we={key:0,class:"vue-recycle-scroller__slot"},ke={key:1,class:"vue-recycle-scroller__slot"};function _e(e,i,n,r,s,l){const o=t.resolveComponent("ResizeObserver"),c=t.resolveDirective("observe-visibility");return t.withDirectives((t.openBlock(),t.createBlock("div",{class:["vue-recycle-scroller",{ready:s.ready,"page-mode":n.pageMode,[`direction-${e.direction}`]:!0}],onScrollPassive:i[2]||(i[2]=(...a)=>l.handleScroll&&l.handleScroll(...a))},[e.$slots.before?(t.openBlock(),t.createBlock("div",we,[t.renderSlot(e.$slots,"before")])):t.createCommentVNode("v-if",!0),t.createVNode("div",{ref:"wrapper",style:{[e.direction==="vertical"?"minHeight":"minWidth"]:s.totalSize+"px"},class:"vue-recycle-scroller__item-wrapper"},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(s.pool,a=>(t.openBlock(),t.createBlock("div",{key:a.nr.id,style:s.ready?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${a.position}px)`}:null,class:["vue-recycle-scroller__item-view",{hover:s.hoverKey===a.nr.key}],onMouseenter:f=>s.hoverKey=a.nr.key,onMouseleave:i[1]||(i[1]=f=>s.hoverKey=null)},[t.renderSlot(e.$slots,"default",{item:a.item,index:a.nr.index,active:a.nr.used})],46,["onMouseenter"]))),128))],4),e.$slots.after?(t.openBlock(),t.createBlock("div",ke,[t.renderSlot(e.$slots,"after")])):t.createCommentVNode("v-if",!0),t.createVNode(o,{onNotify:l.handleResize},null,8,["onNotify"])],34)),[[c,l.handleVisibilityChange]])}R.render=_e,R.__file="src/components/RecycleScroller.vue";const B=function(e){if(e==null)return{top:0,left:0};let i=e.getBoundingClientRect();return{top:i.top+window.scrollY,left:i.left+window.scrollX,width:i.width,height:i.height}},Se=function(e,i){i===void 0&&(i=document);for(var n=[],r=e.parentNode;r!==i;){var s=r;n.push(s),r=s.parentNode}return n.push(i),n},Ve=function(e){var i=Array.prototype.slice.call(e.childNodes);i.forEach(function(n){e.removeChild(n)})},xe=(e,i)=>{window.ExtraSelectOptions==null&&(window.ExtraSelectOptions={});const n={defaultArray:e.value,get:()=>e.value,push:(r,s,l=null)=>{const o=e.value.find(c=>c.key==r);o?(o.value=s,o.data=l):e.value.push({value:s,key:r,data:l})},addRange:r=>{for(let s of r)e.actions.push(s.key,s.value,s.data)},remove:r=>{e.value.splice(e.value.findIndex(s=>s.key==r),1)},clear:()=>{e.value=[]},sort:(r=null)=>{r==null&&(r=(s,l)=>s.value.localeCompare(l.value)),e.value=e.value.sort(r)},setDefault:function(r){this.defaultArray=r},restoreDefault:function(){e.value=this.defaultArray},filter:function(r){}};window.ExtraSelectOptions[i]=n,e.actions=n};let Ee=1;const ze=e=>{e&&(e.hidden=!0,Ve(e))},Oe=(e,i,n,r)=>{var o,c;const s=t.ref([]);t.watchEffect(()=>{s.value=n});const l=t.ref([]);return t.watchEffect(()=>{l.value=i}),e&&(s.value=Array.apply(null,e.selectedOptions).map(a=>a.value).filter(a=>a),l.value=Array.apply(null,e.options).reduce((a,f)=>(a.push({value:f.text,key:f.value,data:f.dataset}),a),[])),xe(l,(c=(o=e==null?void 0:e.id)!=null?o:r)!=null?c:"extraselect_"+(++Ee).toString()),{options:l,selectedOptions:s}},X=async function(e,i=null,n={}){var l;const r={method:"POST",credentials:"include",...n,headers:{"Content-Type":"application/json",...(l=n.headers)!=null?l:{}},body:JSON.stringify({search:i,...n.body})};return await(await fetch(e,r)).json()},$e=(e,i,n,r,s,l="limited",o={})=>{const c=t.ref(0),a=t.ref(!1),f=t.computed(()=>a.value||c.value>0);if(i!=null&&i.length>0)if(n){const m=[];t.watchEffect(v=>{if(r.value.length>=s){let h=!0;switch(l){case"always":break;default:case"limited":h=!m.includes(r.value);break;case"complete":h=m.reduce((g,_)=>g&&!r.value.startsWith(_),!0);break}if(h){a.value=!0;const g=setTimeout(()=>{m.push(r.value),c.value+=1,X(i,r.value,o).then(_=>{e.actions.addRange(_),e.actions.sort(),c.value-=1,a.value=!1})},500);v(()=>{clearTimeout(g)})}}})}else X(i,null,o).then(m=>{e.actions.addRange(m),e.actions.sort()});return{searchingFlag:f}},Be=(e,i)=>{const n=t.ref(""),r=t.ref([]),s=function(l,o){return l.value.filter(a=>o.length>0?a.value.toLowerCase().includes(o.toLowerCase()):!0)};return t.watchEffect(()=>{n.value.length>=i?r.value=s(e,n.value):r.value=[]}),{filterText:n,filteredOptions:r}},Ie=(e,i,n,r,s)=>{const l=function(f,m){const h=document.createElement("canvas").getContext("2d");return h.font=m,h.measureText(f).width},o=function(){var f=B(n.value),m=B(document.querySelector("body"));r.value.style.top=-m.top+f.top},c=t.computed(()=>{var m;const f=(m=B(n.value).width)!=null?m:100;if(s==="inherit")return f;if(s==null||s==="dynamic"){const v=getComputedStyle(document.querySelector("body")).font;return Math.max(f,Math.max(...e.value.map(h=>l(h.value,v)))+15)}return s}),a=t.ref({position:"absolute","min-width":"max-content"});return t.watchPostEffect(()=>{i.value.length<0&&console.log("empty selection");var f=B(n.value),m=B(document.querySelector("body"));a.value={position:"absolute","min-width":"max-content",width:c.value.toString()+"px",top:(-m.top+f.top+f.height).toString()+"px",left:(-m.left+f.left).toString()+"px"}}),{dropdownStyle:a,placeDropdown:o}},Ne={key:0,class:"extra-select selection"},Ce=["onClick"],Te=["innerHTML"],Ae=["value"],Le={key:0,class:"input-searching"},Me={key:0,class:"allselect-clear"},Fe={class:"row-input"},Pe=["checked"],Re=t.createElementVNode("b",null,"Select all",-1),je={class:"row-input"},De=["checked"],He=t.createElementVNode("b",null,"Select Filtered",-1),qe={key:1,class:"no-matches"},Ue={key:2},We=["onClick"],Ke={class:"row-input"},Xe=["checked"],Je=["value"],Ye={__name:"ExtraSelect",props:{originalNode:{type:Object,required:!1},multiple:{type:Boolean,required:!1},options:{type:Array,required:!1},modelValue:{type:Array,required:!1},url:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},search:{type:Boolean,default:!0},searchableUrl:{type:Boolean,default:!1},minChars:{type:Number,default:0},showSelected:{type:Boolean,default:!1},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},removeIcon:{type:String,default:"X"}},emits:["update:modelValue"],setup(e,{emit:i}){const n=e,r=t.computed(()=>{var d,p;return(p=(d=n.originalNode)==null?void 0:d.multiple)!=null?p:n.multiple}),{options:s,selectedOptions:l}=Oe(n.originalNode,n.options,n.modelValue);ze(n.originalNode);const{filterText:o,filteredOptions:c}=Be(s,n.minChars),{searchingFlag:a}=$e(s,n.url,n.searchableUrl,o,n.minChars,n.fetchMode,n.fetchOptions),f=t.ref(null),m=t.ref(null),v=t.ref(null),h=t.ref(!1),g=function(d){const p=Se(d.target);p.push(d.target),!p.includes(f.value)&&!p.includes(m.value)&&(h.value=!1)};t.onMounted(()=>{window.document.addEventListener("mousedown",g),window.document.addEventListener("focusin",g)}),t.onUnmounted(()=>{window.document.removeEventListener("mousedown",g),window.document.removeEventListener("focusin",g)});const{dropdownStyle:_,placeDropdown:u}=Ie(s,l,f,m,n.maxWidth),E=d=>{r.value?l.value.includes(d)?l.value.splice(l.value.indexOf(d),1):l.value.push(d):(l.value=[d],h.value=!1),i("update:modelValue",l.value)},A=d=>{k(d,!1),o.value=""},k=(d,p=null)=>{p==null&&(p=!V.value),p?l.value=s.value.map(b=>b.key):l.value=[],i("update:modelValue",l.value)},S=()=>{z.value?c.value.forEach(d=>{l.value.includes(d.key)&&l.value.splice(l.value.indexOf(d.key),1)}):c.value.forEach(d=>{l.value.includes(d.key)||l.value.push(d.key)}),i("update:modelValue",l.value)};t.watchEffect(()=>{h.value?(u(),n.search&&t.nextTick(()=>{v.value.focus({focusVisible:!0})})):o.value=""});const V=t.computed(()=>l.value.length==s.value.length),z=t.computed(()=>c.value.reduce((d,p)=>d&&l.value.includes(p.key),!0));t.computed(()=>l.value.length==0);const y=t.computed(()=>{const d=l.value.map(p=>{var b;return(b=s.value.find(O=>O.key==p))==null?void 0:b.value}).join(", ");return d.length>0?d:"--"});return(d,p)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[n.showSelected?(t.openBlock(),t.createElementBlock("div",Ne,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l),b=>{var O;return t.openBlock(),t.createElementBlock("div",{key:b,onClick:w=>E(b),class:"selection-badge"},[t.createTextVNode(t.toDisplayString((O=t.unref(s).find(w=>w.key==b))==null?void 0:O.value)+" ",1),t.createElementVNode("div",{class:"selection-remove",innerHTML:n.removeIcon},null,8,Te)],8,Ce)}),128))])):t.createCommentVNode("",!0),t.createElementVNode("input",{onFocus:p[0]||(p[0]=b=>h.value=!0),onClick:p[1]||(p[1]=b=>h.value=!0),ref_key:"inputNode",ref:f,value:t.unref(y),class:"extra-select extra-select-input",readonly:""},null,40,Ae),(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.withDirectives(t.createElementVNode("div",{class:t.normalizeClass(["extra-select dropdown",{searching:t.unref(a)>0}]),ref_key:"dropdownNode",ref:m,style:t.normalizeStyle(t.unref(_))},[n.search?(t.openBlock(),t.createElementBlock("div",Le,[t.withDirectives(t.createElementVNode("input",{ref_key:"searchNode",ref:v,class:"extra-select-search","onUpdate:modelValue":p[2]||(p[2]=b=>t.isRef(o)?o.value=b:null),type:"text",autocomplete:"off",autocorrect:"off",autocapitilize:"off",spellcheck:"false",placeholder:"Cerca..."},null,512),[[t.vModelText,t.unref(o)]])])):t.createCommentVNode("",!0),t.unref(o).length>=n.minChars?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[t.unref(r)?(t.openBlock(),t.createElementBlock("div",Me,[t.unref(o).length==0?(t.openBlock(),t.createElementBlock("div",{key:0,onClick:k,class:"all-select"},[t.createElementVNode("div",Fe,[t.createElementVNode("input",{checked:t.unref(V),type:"checkbox"},null,8,Pe),Re])])):t.createCommentVNode("",!0),t.unref(c).length>0&&t.unref(o).length>0?(t.openBlock(),t.createElementBlock("div",{key:1,onClick:S,class:"all-select"},[t.createElementVNode("div",je,[t.createElementVNode("input",{checked:t.unref(z),type:"checkbox"},null,8,De),He])])):t.createCommentVNode("",!0),t.createElementVNode("div",{class:"clear",onClick:A},"Clear")])):t.createCommentVNode("",!0),t.unref(c).length==0?(t.openBlock(),t.createElementBlock("div",qe,"No matches found")):t.createCommentVNode("",!0)],64)):(t.openBlock(),t.createElementBlock("div",Ue,"Insert at least "+t.toDisplayString(n.minChars)+" characters",1)),t.createVNode(t.unref(R),{items:t.unref(c),"item-size":32,"key-field":"key",class:"scroller"},{default:t.withCtx(({item:b})=>[t.createElementVNode("div",{class:"dropdown-row",onClick:O=>E(b.key),style:{height:"32px"}},[t.createElementVNode("div",Ke,[t.unref(r)?(t.openBlock(),t.createElementBlock("input",{key:0,checked:t.unref(l).includes(b.key),type:"checkbox"},null,8,Xe)):t.createCommentVNode("",!0),t.createTextVNode(" "+t.toDisplayString(b.value),1)])],8,We)]),_:1},8,["items"])],6),[[t.vShow,h.value]])])),n.originalNode?(t.openBlock(),t.createBlock(t.Teleport,{key:1,to:n.originalNode},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l),b=>(t.openBlock(),t.createElementBlock("option",{key:b,selected:"selected",value:b},null,8,Je))),128))],8,["to"])):t.createCommentVNode("",!0)],64))}},j={init:function(){document.querySelectorAll(".extraselect").forEach(function(e){j.bindNew(e)})},bindNew(e){$.lock(e,"extra-select",()=>{const i={};for(let s in e.dataset)try{i[s]=JSON.parse(e.dataset[s])}catch{i[s]=e.dataset[s]}i.originalNode=e;const n=document.createElement("div");e.parentNode.insertBefore(n,e.nextSibling),n.dataset.isVue=!0;const r=t.createApp(Ye,i);r.mount(n),e.addEventListener("remove",function(){r.unmount(),n.remove(),e.remove(),$.remove(e,"extra-select")})})}};return j.init(),j}(Vue);