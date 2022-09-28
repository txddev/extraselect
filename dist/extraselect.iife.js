var Extraselect=function(n){"use strict";const x=new WeakMap;class ${static put(t,i,r){x.has(t)||x.set(t,new Map),x.get(t).set(i,r)}static get(t,i){return x.get(t).get(i)}static has(t,i){return x.has(t)&&x.get(t).has(i)}static remove(t,i){var r=x.get(t).delete(i);return!x.get(t).size===0&&x.delete(t),r}static lock(t,i,r){return $.has(t,i)?!1:($.put(t,i,!0),r())}}window.__Store=x;function G(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var s=e.indexOf("Edge/");return s>0?parseInt(e.substring(s+5,e.indexOf(".",s)),10):-1}let N;function T(){T.init||(T.init=!0,N=G()!==-1)}var B={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){T(),n.nextTick(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",N&&this.$el.appendChild(e),e.data="about:blank",N||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!N&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Q=n.withScopeId("data-v-b329ee4c");n.pushScopeId("data-v-b329ee4c");const Z={class:"resize-observer",tabindex:"-1"};n.popScopeId();const ee=Q((e,t,i,r,s,o)=>(n.openBlock(),n.createBlock("div",Z)));B.render=ee,B.__scopeId="data-v-b329ee4c",B.__file="src/components/ResizeObserver.vue";function I(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(t){return typeof t}:I=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t,i){return t&&R(e.prototype,t),i&&R(e,i),e}function j(e){return ie(e)||re(e)||se(e)||oe()}function ie(e){if(Array.isArray(e))return A(e)}function re(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function se(e,t){if(!!e){if(typeof e=="string")return A(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return A(e,t)}}function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e){var t;return typeof e=="function"?t={callback:e}:t=e,t}function ae(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,s,o,l=function(a){for(var g=arguments.length,h=new Array(g>1?g-1:0),f=1;f<g;f++)h[f-1]=arguments[f];if(o=h,!(r&&a===s)){var b=i.leading;typeof b=="function"&&(b=b(a,s)),(!r||a!==s)&&b&&e.apply(void 0,[a].concat(j(o))),s=a,clearTimeout(r),r=setTimeout(function(){e.apply(void 0,[a].concat(j(o))),r=0},t)}};return l._clear=function(){clearTimeout(r),r=null},l}function D(e,t){if(e===t)return!0;if(I(e)==="object"){for(var i in e)if(!D(e[i],t[i]))return!1;return!0}return!1}var ce=function(){function e(t,i,r){te(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(i,r)}return ne(e,[{key:"createObserver",value:function(i,r){var s=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=le(i),this.callback=function(c,a){s.options.callback(c,a),c&&s.options.once&&(s.frozen=!0,s.destroyObserver())},this.callback&&this.options.throttle){var o=this.options.throttleOptions||{},l=o.leading;this.callback=ae(this.callback,this.options.throttle,{leading:function(a){return l==="both"||l==="visible"&&a||l==="hidden"&&!a}})}this.oldResult=void 0,this.observer=new IntersectionObserver(function(c){var a=c[0];if(c.length>1){var g=c.find(function(f){return f.isIntersecting});g&&(a=g)}if(s.callback){var h=a.isIntersecting&&a.intersectionRatio>=s.threshold;if(h===s.oldResult)return;s.oldResult=h,s.callback(h,a)}},this.options.intersection),n.nextTick(function(){s.observer&&s.observer.observe(s.el)})}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&typeof this.options.intersection.threshold=="number"?this.options.intersection.threshold:0}}]),e}();function H(e,t,i){var r=t.value;if(!!r)if(typeof IntersectionObserver>"u")console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var s=new ce(e,r,i);e._vue_visibilityState=s}}function de(e,t,i){var r=t.value,s=t.oldValue;if(!D(r,s)){var o=e._vue_visibilityState;if(!r){U(e);return}o?o.createObserver(r,i):H(e,{value:r},i)}}function U(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}var ue={beforeMount:H,updated:de,unmounted:U},fe={itemsLimit:1e3},he=/(auto|scroll)/;function W(e,t){return e.parentNode===null?t:W(e.parentNode,t.concat([e]))}var L=function(t,i){return getComputedStyle(t,null).getPropertyValue(i)},pe=function(t){return L(t,"overflow")+L(t,"overflow-y")+L(t,"overflow-x")},me=function(t){return he.test(pe(t))};function ye(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var t=W(e.parentNode,[]),i=0;i<t.length;i+=1)if(me(t[i]))return t[i];return document.scrollingElement||document.documentElement}}function C(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(t){return typeof t}:C=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}var be={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(t){return["vertical","horizontal"].includes(t)}}};function ge(){return this.items.length&&C(this.items[0])!=="object"}var M=!1;if(typeof window<"u"){M=!1;try{var ve=Object.defineProperty({},"passive",{get:function(){M=!0}});window.addEventListener("test",null,ve)}catch{}}let we=0;var F={name:"RecycleScroller",components:{ResizeObserver:B},directives:{ObserveVisibility:ue},props:{...be,itemSize:{type:Number,default:null},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1}},emits:["resize","visible","hidden","update"],data(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes(){if(this.itemSize===null){const e={"-1":{accumulator:0}},t=this.items,i=this.sizeField,r=this.minItemSize;let s=1e4,o=0,l;for(let c=0,a=t.length;c<a;c++)l=t[c][i]||r,l<s&&(s=l),o+=l,e[c]={accumulator:o,size:l};return this.$_computedMinItemSize=s,e}return[]},simpleArray:ge},watch:{items(){this.updateVisibleItems(!0)},pageMode(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler(){this.updateVisibleItems(!1)},deep:!0}},created(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1))},mounted(){this.applyPageMode(),this.$nextTick(()=>{this.$_prerender=!1,this.updateVisibleItems(!0),this.ready=!0})},beforeUnmount(){this.removeListeners()},methods:{addView(e,t,i,r,s){const o=n.markRaw({id:we++,index:t,used:!0,key:r,type:s}),l=n.shallowReactive({item:i,position:0,nr:o});return e.push(l),l},unuseView(e,t=!1){const i=this.$_unusedViews,r=e.nr.type;let s=i.get(r);s||(s=[],i.set(r,s)),s.push(e),t||(e.nr.used=!1,e.position=-9999,this.$_views.delete(e.nr.key))},handleResize(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll(e){this.$_scrollDirty||(this.$_scrollDirty=!0,requestAnimationFrame(()=>{this.$_scrollDirty=!1;const{continuous:t}=this.updateVisibleItems(!1,!0);t||(clearTimeout(this.$_refreshTimout),this.$_refreshTimout=setTimeout(this.handleScroll,100))}))},handleVisibilityChange(e,t){this.ready&&(e||t.boundingClientRect.width!==0||t.boundingClientRect.height!==0?(this.$emit("visible"),requestAnimationFrame(()=>{this.updateVisibleItems(!1)})):this.$emit("hidden"))},updateVisibleItems(e,t=!1){const i=this.itemSize,r=this.$_computedMinItemSize,s=this.typeField,o=this.simpleArray?null:this.keyField,l=this.items,c=l.length,a=this.sizes,g=this.$_views,h=this.$_unusedViews,f=this.pool;let b,p,S;if(!c)b=p=S=0;else if(this.$_prerender)b=0,p=this.prerender,S=null;else{const y=this.getScroll();if(t){let E=y.start-this.$_lastUpdateScrollPosition;if(E<0&&(E=-E),i===null&&E<r||E<i)return{continuous:!0}}this.$_lastUpdateScrollPosition=y.start;const k=this.buffer;if(y.start-=k,y.end+=k,i===null){let E,J=0,X=c-1,_=~~(c/2),Y;do Y=_,E=a[_].accumulator,E<y.start?J=_:_<c-1&&a[_+1].accumulator>y.start&&(X=_),_=~~((J+X)/2);while(_!==Y);for(_<0&&(_=0),b=_,S=a[c-1].accumulator,p=_;p<c&&a[p].accumulator<y.end;p++);p===-1?p=l.length-1:(p++,p>c&&(p=c))}else b=~~(y.start/i),p=Math.ceil(y.end/i),b<0&&(b=0),p>c&&(p=c),S=c*i}p-b>fe.itemsLimit&&this.itemsLimitError(),this.totalSize=S;let d;const z=b<=this.$_endIndex&&p>=this.$_startIndex;if(this.$_continuous!==z){if(z){g.clear(),h.clear();for(let y=0,k=f.length;y<k;y++)d=f[y],this.unuseView(d)}this.$_continuous=z}else if(z)for(let y=0,k=f.length;y<k;y++)d=f[y],d.nr.used&&(e&&(d.nr.index=l.findIndex(E=>o?E[o]===d.item[o]:E===d.item)),(d.nr.index===-1||d.nr.index<b||d.nr.index>=p)&&this.unuseView(d));const v=z?null:new Map;let m,u,w,V;for(let y=b;y<p;y++){m=l[y];const k=o?m[o]:m;if(k==null)throw new Error(`Key is ${k} on item (keyField is '${o}')`);if(d=g.get(k),!i&&!a[y].size){d&&this.unuseView(d);continue}d?(d.nr.used=!0,d.item=m):(u=m[s],w=h.get(u),z?w&&w.length?(d=w.pop(),d.item=m,d.nr.used=!0,d.nr.index=y,d.nr.key=k,d.nr.type=u):d=this.addView(f,y,m,k,u):(V=v.get(u)||0,(!w||V>=w.length)&&(d=this.addView(f,y,m,k,u),this.unuseView(d,!0),w=h.get(u)),d=w[V],d.item=m,d.nr.used=!0,d.nr.index=y,d.nr.key=k,d.nr.type=u,v.set(u,V+1),V++),g.set(k,d)),i===null?d.position=a[y-1].accumulator:d.position=y*i}return this.$_startIndex=b,this.$_endIndex=p,this.emitUpdate&&this.$emit("update",b,p),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,300),{continuous:z}},getListenerTarget(){let e=ye(this.$el);return window.document&&(e===window.document.documentElement||e===window.document.body)&&(e=window),e},getScroll(){const{$el:e,direction:t}=this,i=t==="vertical";let r;if(this.pageMode){const s=e.getBoundingClientRect(),o=i?s.height:s.width;let l=-(i?s.top:s.left),c=i?window.innerHeight:window.innerWidth;l<0&&(c+=l,l=0),l+c>o&&(c=o-l),r={start:l,end:l+c}}else i?r={start:e.scrollTop,end:e.scrollTop+e.clientHeight}:r={start:e.scrollLeft,end:e.scrollLeft+e.clientWidth};return r},applyPageMode(){this.pageMode?this.addListeners():this.removeListeners()},addListeners(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,M?{passive:!0}:!1),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners(){!this.listenerTarget||(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem(e){let t;this.itemSize===null?t=e>0?this.sizes[e-1].accumulator:0:t=e*this.itemSize,this.scrollToPosition(t)},scrollToPosition(e){this.direction==="vertical"?this.$el.scrollTop=e:this.$el.scrollLeft=e},itemsLimitError(){throw setTimeout(()=>{console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",this.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},sortViews(){this.pool.sort((e,t)=>e.index-t.index)}}};const ke={key:0,class:"vue-recycle-scroller__slot"},_e={key:1,class:"vue-recycle-scroller__slot"};function Se(e,t,i,r,s,o){const l=n.resolveComponent("ResizeObserver"),c=n.resolveDirective("observe-visibility");return n.withDirectives((n.openBlock(),n.createBlock("div",{class:["vue-recycle-scroller",{ready:s.ready,"page-mode":i.pageMode,[`direction-${e.direction}`]:!0}],onScrollPassive:t[2]||(t[2]=(...a)=>o.handleScroll&&o.handleScroll(...a))},[e.$slots.before?(n.openBlock(),n.createBlock("div",ke,[n.renderSlot(e.$slots,"before")])):n.createCommentVNode("v-if",!0),n.createVNode("div",{ref:"wrapper",style:{[e.direction==="vertical"?"minHeight":"minWidth"]:s.totalSize+"px"},class:"vue-recycle-scroller__item-wrapper"},[(n.openBlock(!0),n.createBlock(n.Fragment,null,n.renderList(s.pool,a=>(n.openBlock(),n.createBlock("div",{key:a.nr.id,style:s.ready?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${a.position}px)`}:null,class:["vue-recycle-scroller__item-view",{hover:s.hoverKey===a.nr.key}],onMouseenter:g=>s.hoverKey=a.nr.key,onMouseleave:t[1]||(t[1]=g=>s.hoverKey=null)},[n.renderSlot(e.$slots,"default",{item:a.item,index:a.nr.index,active:a.nr.used})],46,["onMouseenter"]))),128))],4),e.$slots.after?(n.openBlock(),n.createBlock("div",_e,[n.renderSlot(e.$slots,"after")])):n.createCommentVNode("v-if",!0),n.createVNode(l,{onNotify:o.handleResize},null,8,["onNotify"])],34)),[[c,o.handleVisibilityChange]])}F.render=Se,F.__file="src/components/RecycleScroller.vue";const O=function(e){if(e==null)return{top:0,left:0};let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}},Ee=function(e,t){t===void 0&&(t=document);for(var i=[],r=e.parentNode;r!==t;){var s=r;i.push(s),r=s.parentNode}return i.push(t),i},xe=function(e){var t=Array.prototype.slice.call(e.childNodes);t.forEach(function(i){e.removeChild(i)})},ze=(e,t)=>{window.ExtraSelectOptions==null&&(window.ExtraSelectOptions={});const i={defaultArray:e.value,get:()=>e.value,push:(r,s,o=null)=>{const l=e.value.find(c=>c.key==r);l?(l.value=s,l.data=o):e.value.push({value:s,key:r,data:o})},addRange:r=>{for(let s of r)e.actions.push(s.key,s.value,s.data)},remove:r=>{e.value.splice(e.value.findIndex(s=>s.key==r),1)},clear:()=>{e.value=[]},sort:(r=null)=>{r==null&&(r=(s,o)=>s.value.localeCompare(o.value)),e.value=e.value.sort(r)},setDefault:function(r){this.defaultArray=r},restoreDefault:function(){e.value=this.defaultArray},filter:function(r){}};window.ExtraSelectOptions[t]=i,e.actions=i};let q=1;const $e=e=>{e.hidden=!0,xe(e)},Oe=e=>{const t=Array.apply(null,e.selectedOptions).map(s=>s.value),i=n.ref(t.filter(s=>s)),r=n.ref(Array.apply(null,e.options).reduce((s,o)=>(s.push({value:o.text,key:o.value,data:o.dataset}),s),[]));return(e.id==null||e.id.length==0)&&(e.id="extraselect_"+q.toString(),q++),ze(r,e.id),{options:r,selectedOptions:i}},K=async function(e,t=null,i={}){var o;const r={method:"POST",credentials:"include",...i,headers:{"Content-Type":"application/json",...(o=i.headers)!=null?o:{}},body:JSON.stringify({search:t,...i.body})};return await(await fetch(e,r)).json()},Ve=(e,t,i,r,s,o="limited",l={})=>{const c=n.ref(0),a=n.ref(!1),g=n.computed(()=>a.value||c.value>0);if(t!=null&&t.length>0)if(i){const h=[];n.watchEffect(f=>{if(r.value.length>=s){let b=!0;switch(o){case"always":break;default:case"limited":b=!h.includes(r.value);break;case"complete":b=h.reduce((p,S)=>p&&!r.value.startsWith(S),!0);break}if(b){a.value=!0;const p=setTimeout(()=>{h.push(r.value),c.value+=1,K(t,r.value,l).then(S=>{e.actions.addRange(S),e.actions.sort(),c.value-=1,a.value=!1})},500);f(()=>{clearTimeout(p)})}}})}else K(t,null,l).then(h=>{e.actions.addRange(h),e.actions.sort()});return{searchingFlag:g}},Ne=(e,t)=>{const i=n.ref(""),r=n.ref([]),s=function(o,l){return o.value.filter(a=>l.length>0?a.value.toLowerCase().includes(l.toLowerCase()):!0)};return n.watchEffect(()=>{i.value.length>=t?r.value=s(e,i.value):r.value=[]}),{filterText:i,filteredOptions:r}},Be=(e,t,i,r,s,o)=>{const l=function(h,f){const p=document.createElement("canvas").getContext("2d");return p.font=f||getComputedStyle(i).font,p.measureText(h).width},c=function(){var h=O(r.value),f=O(document.querySelector("body"));s.value.style.top=-f.top+h.top},a=n.computed(()=>{var f;const h=(f=O(r.value).width)!=null?f:100;return o==="inherit"?h:o==null||o==="dynamic"?Math.max(h,Math.max(...e.value.map(b=>l(b.value)))+15):o}),g=n.ref({position:"absolute","min-width":"max-content"});return n.watchPostEffect(()=>{t.value.length<0&&console.log("empty selection");var h=O(r.value),f=O(document.querySelector("body"));g.value={position:"absolute","min-width":"max-content",width:a.value.toString()+"px",top:(-f.top+h.top+h.height).toString()+"px",left:(-f.left+h.left).toString()+"px"}}),{dropdownStyle:g,placeDropdown:c}},Ie={key:0},Ce=n.createElementVNode("h2",null,"selezione:",-1),Te=["value"],Ae={key:0},Le=["checked"],Me=n.createElementVNode("b",null,"Select all",-1),Fe=[n.createElementVNode("label",null,[n.createElementVNode("input",{type:"checkbox"}),n.createElementVNode("b",null,"Select Filtered")],-1)],Pe=[n.createElementVNode("label",null,[n.createElementVNode("input",{type:"checkbox"}),n.createElementVNode("b",null,"Select None")],-1)],Re={key:1},je={key:2},De=["onClick"],He={class:""},Ue=["checked"],We=["value"],qe={__name:"ExtraSelect",props:{originalNode:{type:Object,required:!0},url:String,keepOpen:{type:Boolean,default:!1},maxWidth:{type:String,default:"dynamic"},search:{type:Boolean,default:!0},searchableUrl:{type:Boolean,default:!1},minChars:{type:Number,default:0},showSelected:{type:Boolean,default:!1},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}}},setup(e){const t=e,i=t.originalNode.multiple,{options:r,selectedOptions:s}=Oe(t.originalNode);$e(t.originalNode);const{filterText:o,filteredOptions:l}=Ne(r,t.minChars),{searchingFlag:c}=Ve(r,t.url,t.searchableUrl,o,t.minChars,t.fetchMode,t.fetchOptions),a=n.ref(null),g=n.ref(null),h=n.ref(null),f=n.ref(!1);if(!t.keepOpen){const v=function(m){const u=Ee(m.target);u.push(m.target),!u.includes(a.value)&&!u.includes(g.value)&&(f.value=!1)};n.onMounted(()=>{window.document.addEventListener("mousedown",v),window.document.addEventListener("focusin",v)}),n.onUnmounted(()=>{window.document.removeEventListener("mousedown",v),window.document.removeEventListener("focusin",v)})}const{dropdownStyle:b,placeDropdown:p}=Be(r,s,t.originalNode,a,g,t.maxWidth),S=(v,m)=>{i?s.value.includes(v)?s.value.splice(s.value.indexOf(v),1):s.value.push(v):(s.value=[v],f.value=!1)};n.watchEffect(()=>{f.value?(p(),t.search&&n.nextTick(()=>{h.value.focus({focusVisible:!0})})):o.value=""});const d=n.computed(()=>s.value.length==r.value.length);n.computed(()=>s.value.length==0);const z=n.computed(()=>{const v=s.value.map(m=>{var u;return(u=r.value.find(w=>w.key==m))==null?void 0:u.value}).join(", ");return v.length>0?v:"--"});return(v,m)=>(n.openBlock(),n.createElementBlock(n.Fragment,null,[t.showSelected?(n.openBlock(),n.createElementBlock("div",Ie,[Ce,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(s),u=>(n.openBlock(),n.createElementBlock("div",{key:u},n.toDisplayString(u),1))),128))])):n.createCommentVNode("",!0),n.createElementVNode("input",{onFocus:m[0]||(m[0]=u=>f.value=!0),onClick:m[1]||(m[1]=u=>f.value=!0),ref_key:"inputNode",ref:a,value:n.unref(z),class:"extra-select extra-select-input form-select",readonly:""},null,40,Te),(n.openBlock(),n.createBlock(n.Teleport,{to:"body"},[n.withDirectives(n.createElementVNode("div",{class:n.normalizeClass(["extra-select dropdown",{searching:n.unref(c)>0}]),ref_key:"dropdownNode",ref:g,style:n.normalizeStyle(n.unref(b))},[t.search?(n.openBlock(),n.createElementBlock("div",Ae,[n.withDirectives(n.createElementVNode("input",{ref_key:"searchNode",ref:h,class:"extra-select-search form-control","onUpdate:modelValue":m[2]||(m[2]=u=>n.isRef(o)?o.value=u:null),type:"text",autocomplete:"off",autocorrect:"off",autocapitilize:"off",spellcheck:"false",placeholder:"Cerca..."},null,512),[[n.vModelText,n.unref(o)]])])):n.createCommentVNode("",!0),n.unref(o).length>=t.minChars?(n.openBlock(),n.createElementBlock(n.Fragment,{key:1},[n.unref(i)?(n.openBlock(),n.createElementBlock(n.Fragment,{key:0},[n.unref(o).length==0?(n.openBlock(),n.createElementBlock("div",{key:0,onClick:m[3]||(m[3]=u=>s.value=n.unref(r).map(w=>w.key))},[n.createElementVNode("label",null,[n.createElementVNode("input",{checked:n.unref(d),type:"checkbox"},null,8,Le),Me])])):n.createCommentVNode("",!0),n.unref(l).length>0&&n.unref(o).length>0?(n.openBlock(),n.createElementBlock("div",{key:1,onClick:m[4]||(m[4]=u=>s.value=n.unref(l).map(w=>w.key))},Fe)):n.createCommentVNode("",!0),n.createElementVNode("div",{onClick:m[5]||(m[5]=u=>s.value=[])},Pe)],64)):n.createCommentVNode("",!0),n.unref(l).length==0?(n.openBlock(),n.createElementBlock("div",Re,"No matches found")):n.createCommentVNode("",!0)],64)):(n.openBlock(),n.createElementBlock("div",je,"Insert at least "+n.toDisplayString(t.minChars)+" characters",1)),n.createVNode(n.unref(F),{items:n.unref(l),"item-size":32,"key-field":"key",class:"scroller"},{default:n.withCtx(({item:u})=>[n.createElementVNode("div",{class:"dropdown-row",onClick:w=>S(u.key),style:{height:"32px"}},[n.createElementVNode("label",He,[n.unref(i)?(n.openBlock(),n.createElementBlock("input",{key:0,checked:n.unref(s).includes(u.key),type:"checkbox"},null,8,Ue)):n.createCommentVNode("",!0),n.createTextVNode(" "+n.toDisplayString(u.value),1)])],8,De)]),_:1},8,["items"])],6),[[n.vShow,f.value]])])),(n.openBlock(),n.createBlock(n.Teleport,{to:t.originalNode},[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(s),u=>(n.openBlock(),n.createElementBlock("option",{key:u,selected:"selected",value:u},null,8,We))),128))],8,["to"]))],64))}},Xe="",Ye="",P={init:function(){document.querySelectorAll(".extraselect").forEach(function(e){P.bindNew(e)})},bindNew(e){$.lock(e,"extra-select",()=>{const t={};for(let s in e.dataset)try{t[s]=JSON.parse(e.dataset[s])}catch{t[s]=e.dataset[s]}t.originalNode=e;const i=document.createElement("div");e.parentNode.insertBefore(i,e.nextSibling),i.dataset.isVue=!0;const r=n.createApp(qe,t);r.mount(i),e.addEventListener("remove",function(){r.unmount(),i.remove(),e.remove(),$.remove(e,"extra-select")})})}};return P.init(),P}(Vue);
