var Extraselect=function(P,e){"use strict";const O=new WeakMap;class V{static put(o,t,l){O.has(o)||O.set(o,new Map),O.get(o).set(t,l)}static get(o,t){return O.get(o).get(t)}static has(o,t){return O.has(o)&&O.get(o).has(t)}static remove(o,t){var l=O.get(o).delete(t);return O.get(o).size!==0&&O.delete(o),l}static lock(o,t,l){return V.has(o,t)?!1:(V.put(o,t,!0),l())}}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}).DATASTORE_DEBUG&&(window.__Store=O);function M(n){if(n==null)return{top:0,left:0,width:null,height:null};let o=n.getBoundingClientRect();return{top:o.top+window.scrollY,left:o.left+window.scrollX,width:o.width,height:o.height}}function A(n,o){o===void 0&&(o=window.document);for(var t=[],l=n.parentNode;l!=null&&l!==o;){var r=l;t.push(r),l=r.parentNode}return t.push(o),t}function se(n){var o=Array.prototype.slice.call(n.childNodes);o.forEach(function(t){n.removeChild(t)})}var U;const T=typeof window<"u";T&&((U=window==null?void 0:window.navigator)==null?void 0:U.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ce(n){return typeof n=="function"?n():e.unref(n)}function ie(n){return n}function de(n){return e.getCurrentScope()?(e.onScopeDispose(n),!0):!1}function ue(n,o=!0){e.getCurrentInstance()?e.onMounted(n):o?n():e.nextTick(n)}function W(n){var o;const t=ce(n);return(o=t==null?void 0:t.$el)!=null?o:t}const fe=T?window:void 0;T&&window.document,T&&window.navigator,T&&window.location;function pe(n,o=!1){const t=e.ref(),l=()=>t.value=Boolean(n());return l(),ue(l,o),t}const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j="__vueuse_ssr_handlers__";$[j]=$[j]||{},$[j];var R=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,ge=(n,o)=>{var t={};for(var l in n)me.call(n,l)&&o.indexOf(l)<0&&(t[l]=n[l]);if(n!=null&&R)for(var l of R(n))o.indexOf(l)<0&&he.call(n,l)&&(t[l]=n[l]);return t};function ye(n,o,t={}){const l=t,{window:r=fe}=l,a=ge(l,["window"]);let c;const s=pe(()=>r&&"ResizeObserver"in r),d=()=>{c&&(c.disconnect(),c=void 0)},f=e.watch(()=>W(n),u=>{d(),s.value&&r&&u&&(c=new ResizeObserver(o),c.observe(u,a))},{immediate:!0,flush:"post"}),y=()=>{d(),f()};return de(y),{isSupported:s,stop:y}}function we(n,o={width:0,height:0},t={}){const{box:l="content-box"}=t,r=e.ref(o.width),a=e.ref(o.height);return ye(n,([c])=>{const s=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;s?(r.value=s.reduce((d,{inlineSize:f})=>d+f,0),a.value=s.reduce((d,{blockSize:f})=>d+f,0)):(r.value=c.contentRect.width,a.value=c.contentRect.height)},t),e.watch(()=>W(n),c=>{r.value=c?o.width:0,a.value=c?o.height:0}),{width:r,height:a}}var H;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(H||(H={}));var ke=Object.defineProperty,Q=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,G=(n,o,t)=>o in n?ke(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,_e=(n,o)=>{for(var t in o||(o={}))ve.call(o,t)&&G(n,t,o[t]);if(Q)for(var t of Q(o))Ee.call(o,t)&&G(n,t,o[t]);return n};_e({linear:ie},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});function J(n,o){const t=e.ref(),l=we(t),r=e.ref([]),a=e.shallowRef(n),c=e.ref({start:0,end:10}),{itemHeight:s,overscan:d=5}=o,f=E=>{if(typeof s=="number")return Math.ceil(E/s);const{start:S=0}=c.value;let _=0,b=0;for(let m=S;m<a.value.length;m++)if(_+=s(m),_>=E){b=m;break}return b-S},y=E=>{if(typeof s=="number")return Math.floor(E/s)+1;let S=0,_=0;for(let b=0;b<a.value.length;b++)if(S+=s(b),S>=E){_=b;break}return _+1},u=()=>{const E=t.value;if(E){const S=y(E.scrollTop),_=f(E.clientHeight),b=S-d,m=S+_+d;c.value={start:b<0?0:b,end:m>a.value.length?a.value.length:m},r.value=a.value.slice(c.value.start,c.value.end).map((w,N)=>({data:w,index:N+c.value.start}))}};e.watch([l.width,l.height,n],()=>{u()});const h=e.computed(()=>typeof s=="number"?a.value.length*s:a.value.reduce((E,S,_)=>E+s(_),0)),g=E=>typeof s=="number"?E*s:a.value.slice(0,E).reduce((_,b,m)=>_+s(m),0),v=E=>{t.value&&(t.value.scrollTop=g(E),u())},C=e.computed(()=>g(c.value.start)),x=e.computed(()=>({style:{width:"100%",height:`${h.value-C.value}px`,marginTop:`${C.value}px`}}));return{list:r,scrollTo:v,containerProps:{ref:t,onScroll:()=>{u()},style:{overflowY:"auto"}},wrapperProps:x}}const be=(n,o)=>{window.ExtraSelectOptions==null&&(window.ExtraSelectOptions={});const t={defaultArray:n.value,get:()=>n.value,push:(l,r,a=null)=>{const c=n.map.get(l);if(c)c.value=r,c.data=a;else{let s={value:r,key:l,data:a};n.value.push(s),n.map.set(s.key,s)}},addRange:l=>{for(let r of l)n.actions.push(r.key,r.value,r.data)},remove:l=>{n.value.splice(n.value.findIndex(r=>r.key==l),1)},clear:()=>{n.value=[]},sort:(l=null)=>{l==null&&(l=(r,a)=>r.value.localeCompare(a.value)),n.value=n.value.sort(l)},setDefault:function(l){this.defaultArray=l},restoreDefault:function(){n.value=this.defaultArray},filter:function(l){}};window.ExtraSelectOptions[o]=t,n.actions=t};let Se=1;const K=n=>{n&&(n.style.display="none",se(n))},X=(n,o,t,l)=>{var c;const r=e.ref(new Map);e.watchEffect(()=>{r.value.clear();for(let s of t)r.value.set(s,s)});const a=e.ref([]);if(a.map=new Map,a.rebuildMap=()=>{if(a.map.clear(),a.value)for(let s of a.value)a.map.set(s.key,s)},e.watchEffect(()=>{o&&(a.value=o,a.rebuildMap())}),n){r.value.clear();for(let s of Array.apply(null,n.selectedOptions).map(d=>d.value).filter(d=>d))r.value.set(s,s);a.value=Array.apply(null,n.options).reduce((s,d)=>(s.push({value:d.text,key:d.value,data:d.dataset}),s),[]),a.rebuildMap()}if(Array.isArray(l))for(let s of l)r.value.set(s,s);else l!=null&&r.value.set(l,l);return be(a,(c=n==null?void 0:n.id)!=null?c:"extraselect_"+(++Se).toString()),{options:a,selectedOptions:r}},Y=async function(n,o=null,t={}){var a;const l={method:"POST",credentials:"include",...t,headers:{"Content-Type":"application/json",...(a=t.headers)!=null?a:{}},body:JSON.stringify({search:o,...t.body})};return await(await fetch(n,l)).json()},Z=(n,o,t,l,r,a="limited",c={})=>{const s=e.ref(0),d=e.ref(!1),f=e.computed(()=>d.value||s.value>0);if(o!=null&&o.length>0)if(t){const y=[];e.watchEffect(u=>{if(l.value.length>=r){let h=!0;switch(a){case"always":break;default:case"limited":h=!y.includes(l.value);break;case"complete":h=y.reduce((g,v)=>g&&!l.value.startsWith(v),!0);break}if(h){d.value=!0;const g=setTimeout(()=>{y.push(l.value),s.value+=1,Y(o,l.value,c).then(v=>{n.actions.addRange(v),n.actions.sort(),s.value-=1,d.value=!1})},500);u(()=>{clearTimeout(g)})}}})}else Y(o,null,c).then(y=>{n.actions.addRange(y),n.actions.sort()});return{searchingFlag:f}},ee=n=>{const o=e.ref(""),t=e.ref([]),l=function(r,a){return r.value.filter(s=>a.length>0?s.value.toLowerCase().includes(a.toLowerCase()):!0)};return e.watchEffect(()=>{t.value=l(n,o.value)}),{filterText:o,filteredOptions:t}},te=(n,o,t,l,r,a,c)=>{const s=getComputedStyle(document.querySelector("body")).font,d=function(u){const g=document.createElement("canvas").getContext("2d");return g.font=s,g.measureText(u).width},f=e.computed(()=>{var h,g;const u=(h=M(l.value).width)!=null?h:100;if(c==="inherit")return u;if(c==null||c==="dynamic"){const v=(g=parseInt(getComputedStyle(document.querySelector("html"))["font-size"]))!=null?g:16;return Math.max(u,Math.max(...n.value.map(C=>d(C.value)))+20+v*3)}return c}),y=e.ref({position:"absolute","min-width":"max-content"});return e.watchPostEffect(()=>{t.value<0&&console.log("is open"),o.value.size<0&&console.log("empty selection");var u=M(l.value),h=M(null);if(a.value&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(a.value).position))var h=M(a.value);let g=-h.left+u.left;const v=window.document.documentElement.clientWidth;g+f.value>v&&(g=v-f.value),y.value={position:"absolute","min-width":"max-content",width:f.value.toString()+"px",top:(-h.top+u.top+u.height).toString()+"px",left:g.toString()+"px"}}),{dropdownStyle:y,getTextWidth:d}},Ce={key:0,class:"extra-select selection"},Ne=["onClick"],Oe=["innerHTML"],xe=["value"],Be={key:0,class:"input-searching"},Ve={key:0,class:"allselect-clear"},Le={class:"row-input"},Pe=["checked"],Te=e.createElementVNode("b",null,"Select all",-1),Ie={class:"row-input"},Me=["checked"],Ae=e.createElementVNode("b",null,"Select Filtered",-1),Fe={key:1,class:"no-matches"},ze={key:2},De=["onClick"],$e={class:"row-input"},je=["checked"],qe=["value"],Ue={__name:"ExtraSelect",props:{originalNode:{type:Object,required:!1},multiple:{type:Boolean,required:!1},options:{type:Array,required:!1},modelValue:{type:Array,required:!1,default:[]},url:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},search:{type:Boolean,default:!1},searchableUrl:{type:Boolean,default:!1},initialValue:{default:null},minChars:{type:Number,default:0},showSelected:{type:Boolean,default:!1},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},removeIcon:{type:String,default:"X"},dropdownContainer:{type:String,default:null}},emits:["update:modelValue"],setup(n,{emit:o}){var oe,le,ae;const t=n,l=e.computed(()=>{var i,p;return(p=(i=t.originalNode)==null?void 0:i.multiple)!=null?p:t.multiple}),{options:r,selectedOptions:a}=X(t.originalNode,t.options,t.modelValue,t.initialValue),c=(oe=t.originalNode)==null?void 0:oe.classList,s=Object.values((ae=(le=t.originalNode)==null?void 0:le.style)!=null?ae:{});K(t.originalNode);const{filterText:d,filteredOptions:f}=ee(r,t.minChars),{searchingFlag:y}=Z(r,t.url,t.searchableUrl,d,t.minChars,t.fetchMode,t.fetchOptions),u=e.ref(null),h=e.ref(null),g=e.ref(null),v=e.ref(!1),C=e.ref(null),x=function(i){const p=A(i.target);p.push(i.target),!p.includes(u.value)&&!p.includes(h.value)&&(v.value=!1)};e.onMounted(()=>{if(t.dropdownContainer){let i=!1;C.value=A(u.value).find(p=>!!(p instanceof Element&&(p.matches(t.dropdownContainer)&&(i=!0),i&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(p).position))))}if(C.value==null&&(C.value=document.querySelector("body")),t.originalNode){for(let i of c)i!="extraselect"&&u.value.classList.add(i);for(let i of s)u.value.style[i]=t.originalNode.style[i];s.includes("background-color")||(u.value.style.backgroundColor="white")}window.document.addEventListener("mousedown",x),window.document.addEventListener("focusin",x)}),e.onUnmounted(()=>{window.document.removeEventListener("mousedown",x),window.document.removeEventListener("focusin",x)});const{dropdownStyle:z,getTextWidth:E}=te(r,a,v,u,h,C,t.maxWidth),S=i=>{l.value?a.value.has(i)?a.value.delete(i):a.value.set(i,i):(a.value.clear(),a.value.set(i,i),v.value=!1),o("update:modelValue",Array.from(a.value.keys()))},_=i=>{b(i,!1),d.value=""},b=(i,p=null)=>{p==null&&(p=!w.value),p?(a.value.clear(),r.value.forEach(k=>a.value.set(k.key,k.key))):a.value.clear(),o("update:modelValue",Array.from(a.value.keys()))},m=()=>{N.value?f.value.forEach(i=>{a.value.has(i.key)&&a.value.delete(i.key)}):f.value.forEach(i=>{a.value.has(i.key)||a.value.set(i.key,i.key)}),o("update:modelValue",Array.from(a.value.keys()))};e.watch(v,(i,p)=>{i!=p&&(i?t.search&&e.nextTick(()=>{g.value.focus({focusVisible:!0})}):d.value="")});const w=e.computed(()=>a.value.size==r.value.length),N=e.computed(()=>f.value.reduce((i,p)=>i&&a.value.has(p.key),!0)),ne=e.computed(()=>a.value.size==0),Je=e.computed(()=>{var i,p,k,L,I;if(r.value.length<0)return"";if(l.value){if(w.value)return"All selected";if(ne.value)return"No selection";const B=u.value?getComputedStyle(u.value):null,Ze=((i=u.value)==null?void 0:i.clientWidth)-parseInt(B==null?void 0:B.paddingLeft)-parseInt(B==null?void 0:B.paddingRight);let D=a.value.size+" selected - ",re=!0;for(let et of a.value)if(re?re=!1:D+=", ",D+=(k=(p=r.map.get(et[0]))==null?void 0:p.value)!=null?k:y.value?"Loading...":"Value not found",Ze<E(D))return a.value.size+" selected";return D}else for(let B of a.value)return(I=(L=r.map.get(B[0]))==null?void 0:L.value)!=null?I:y.value?"Loading...":"Value not found";return"No selection"}),{list:Ke,containerProps:Xe,wrapperProps:Ye}=J(f,{itemHeight:32});return(i,p)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[t.showSelected?(e.openBlock(),e.createElementBlock("div",Ce,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),k=>{var L;return e.openBlock(),e.createElementBlock("div",{key:k,onClick:I=>S(k[0]),class:"selection-badge"},[e.createTextVNode(e.toDisplayString((L=e.unref(r).find(I=>I.key==k[0]))==null?void 0:L.value)+" ",1),e.createElementVNode("div",{class:"selection-remove",innerHTML:t.removeIcon},null,8,Oe)],8,Ne)}),128))])):e.createCommentVNode("",!0),e.createElementVNode("input",{onFocus:p[0]||(p[0]=k=>v.value=!0),onClick:p[1]||(p[1]=k=>v.value=!0),ref_key:"inputNode",ref:u,value:e.unref(Je),class:"extra-select extra-select-input",readonly:""},null,40,xe),C.value?(e.openBlock(),e.createBlock(e.Teleport,{key:1,to:C.value},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["extra-select dropdown",{searching:e.unref(y)>0}]),ref_key:"dropdownNode",ref:h,style:e.normalizeStyle(e.unref(z))},[t.search?(e.openBlock(),e.createElementBlock("div",Be,[e.withDirectives(e.createElementVNode("input",{ref_key:"searchNode",ref:g,class:"extra-select-search","onUpdate:modelValue":p[2]||(p[2]=k=>e.isRef(d)?d.value=k:null),type:"text",autocomplete:"off",autocorrect:"off",autocapitilize:"off",spellcheck:"false",placeholder:"Cerca..."},null,512),[[e.vModelText,e.unref(d)]])])):e.createCommentVNode("",!0),e.unref(d).length>=t.minChars?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.unref(l)?(e.openBlock(),e.createElementBlock("div",Ve,[e.unref(d).length==0?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:b,class:"all-select"},[e.createElementVNode("div",Le,[e.createElementVNode("input",{checked:e.unref(w),type:"checkbox"},null,8,Pe),Te])])):e.createCommentVNode("",!0),e.unref(f).length>0&&e.unref(d).length>0?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:m,class:"all-select"},[e.createElementVNode("div",Ie,[e.createElementVNode("input",{checked:e.unref(N),type:"checkbox"},null,8,Me),Ae])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:"clear",onClick:_},"Clear")])):e.createCommentVNode("",!0),e.unref(f).length==0?(e.openBlock(),e.createElementBlock("div",Fe,"No matches found")):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock("div",ze,"Insert at least "+e.toDisplayString(t.minChars)+" characters",1)),e.createElementVNode("div",e.mergeProps(e.unref(Xe),{class:"scroller"}),[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(Ye))),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Ke),k=>(e.openBlock(),e.createElementBlock("button",{key:k.index,class:"dropdown-row",onClick:e.withModifiers(L=>S(k.data.key),["stop","prevent"]),style:{height:"32px"}},[e.createElementVNode("div",$e,[e.unref(l)?(e.openBlock(),e.createElementBlock("input",{key:0,checked:e.unref(a).has(k.data.key),type:"checkbox"},null,8,je)):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(k.data.value),1)])],8,De))),128))],16)],16)],6),[[e.vShow,v.value]])],8,["to"])):e.createCommentVNode("",!0),t.originalNode?(e.openBlock(),e.createBlock(e.Teleport,{key:2,to:t.originalNode},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),k=>(e.openBlock(),e.createElementBlock("option",{key:k[0],selected:"selected",value:k[0]},null,8,qe))),128))],8,["to"])):e.createCommentVNode("",!0)],64))}},We={key:0,class:"no-matches"},Re={key:1},He=["onClick"],Qe={class:"row-input"},Ge={__name:"ExtraSuggest",props:{originalNode:{type:Object,required:!1},options:{type:Array,required:!1},modelValue:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},url:{type:String,required:!1},searchableUrl:{type:Boolean,default:!1},minChars:{type:Number,default:0},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},dropdownContainer:{type:String,default:null}},emits:["update:modelValue"],setup(n,{emit:o}){var S,_,b;const t=n,{options:l}=X(null,t.options,[]),r=(S=t.originalNode)==null?void 0:S.classList,a=Object.values((b=(_=t.originalNode)==null?void 0:_.style)!=null?b:{});K(t.originalNode);const{filterText:c,filteredOptions:s}=ee(l,t.minChars),{searchingFlag:d}=Z(l,t.url,t.searchableUrl,c,t.minChars,t.fetchMode,t.fetchOptions),f=e.ref(null),y=e.ref(null),u=e.ref(!1),h=e.ref(null),g=function(m){const w=A(m.target);w.push(m.target),!w.includes(f.value)&&!w.includes(y.value)&&(u.value=!1)};e.onMounted(()=>{if(t.dropdownContainer){let m=!1;h.value=A(f.value).find(w=>!!(w instanceof Element&&(w.matches(t.dropdownContainer)&&(m=!0),m&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(w).position))))}if(h.value==null&&(h.value=document.querySelector("body")),t.originalNode){for(let m of r)m!="extraselect"&&f.value.classList.add(m);for(let m of a)f.value.style[m]=t.originalNode.style[m];a.includes("background-color")||(f.value.style.backgroundColor="white"),c.value=t.originalNode.value,e.watchEffect(()=>{t.modelValue!=null&&(c.value=t.modelValue)}),e.watchEffect(()=>{t.originalNode.value=c.value})}window.document.addEventListener("mousedown",g),window.document.addEventListener("focusin",g)}),e.onUnmounted(()=>{window.document.removeEventListener("mousedown",g),window.document.removeEventListener("focusin",g)});const{dropdownStyle:v}=te(l,e.ref([]),u,f,y,h,t.maxWidth),C=m=>{c.value=l.map.get(m).value,u.value=!1,o("update:modelValue",c.value)},{list:x,containerProps:z,wrapperProps:E}=J(s,{itemHeight:32});return(m,w)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("input",{onFocus:w[0]||(w[0]=N=>u.value=!0),onClick:w[1]||(w[1]=N=>u.value=!0),ref_key:"inputNode",ref:f,"onUpdate:modelValue":w[2]||(w[2]=N=>e.isRef(c)?c.value=N:null),class:"extra-select extra-select-input"},null,544),[[e.vModelText,e.unref(c)]]),h.value?(e.openBlock(),e.createBlock(e.Teleport,{key:0,to:h.value},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["extra-select dropdown",{searching:e.unref(d)>0}]),ref_key:"dropdownNode",ref:y,style:e.normalizeStyle(e.unref(v))},[e.unref(c).length>=t.minChars?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(s).length==0?(e.openBlock(),e.createElementBlock("div",We,"No matches found")):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock("div",Re,"Insert at least "+e.toDisplayString(t.minChars)+" characters",1)),e.createElementVNode("div",e.mergeProps(e.unref(z),{class:"scroller"}),[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(E))),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(x),N=>(e.openBlock(),e.createElementBlock("button",{key:N.index,class:"dropdown-row",onClick:e.withModifiers(ne=>C(N.data.key),["stop","prevent"]),style:{height:"32px"}},[e.createElementVNode("div",Qe,e.toDisplayString(N.data.value),1)],8,He))),128))],16)],16)],6),[[e.vShow,u.value]])],8,["to"])):e.createCommentVNode("",!0)],64))}},F={init:function(){document.querySelectorAll(".extraselect").forEach(function(n){F.bindNew(n)})},bindNew(n){V.lock(n,"extra-select",()=>{const o={};for(let r in n.dataset)try{o[r]=JSON.parse(n.dataset[r])}catch{o[r]=n.dataset[r]}o.originalNode=n;const t=document.createElement("div");n.parentNode.insertBefore(t,n.nextSibling),t.dataset.isVue=!0,t.style.display="contents";const l=e.createApp(Ue,o);l.mount(t),n.addEventListener("remove",function(){l.unmount(),t.remove(),n.remove(),V.remove(n,"extra-select")})})}},q={init:function(){document.querySelectorAll(".extrasuggest").forEach(function(n){q.bindNew(n)})},bindNew(n){V.lock(n,"extra-suggest",()=>{const o={};for(let r in n.dataset)try{o[r]=JSON.parse(n.dataset[r])}catch{o[r]=n.dataset[r]}o.originalNode=n;const t=document.createElement("div");n.parentNode.insertBefore(t,n.nextSibling),t.dataset.isVue=!0,t.style.display="contents";const l=e.createApp(Ge,o);l.mount(t),n.addEventListener("remove",function(){l.unmount(),t.remove(),n.remove(),V.remove(n,"extra-suggest")})})}};return document.addEventListener("DOMContentLoaded",function(){F.init(),q.init()}),P.ExtraSelect=F,P.ExtraSuggest=q,P.default=F,Object.defineProperties(P,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),P}({},Vue);
