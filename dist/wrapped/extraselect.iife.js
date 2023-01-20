var Extraselect=function(j,e){"use strict";const T=new WeakMap;class I{static put(l,t,o){T.has(l)||T.set(l,new Map),T.get(l).set(t,o)}static get(l,t){return T.get(l).get(t)}static has(l,t){return T.has(l)&&T.get(l).has(t)}static remove(l,t){var o=T.get(l).delete(t);return T.get(l).size!==0&&T.delete(l),o}static lock(l,t,o){return I.has(l,t)?!1:(I.put(l,t,!0),o())}}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}).DATASTORE_DEBUG&&(window.__Store=T);function D(n){if(n==null)return{top:0,left:0,width:null,height:null};let l=n.getBoundingClientRect();return{top:l.top+window.scrollY,left:l.left+window.scrollX,width:l.width,height:l.height}}function M(n,l){l===void 0&&(l=window.document);for(var t=[],o=n.parentNode;o!=null&&o instanceof HTMLElement&&!(l instanceof HTMLElement&&o===l)&&!(typeof l=="string"&&o.matches(l));){var r=o;t.push(r),o=r.parentNode}return o!=null&&t.push(o),t}function ue(n){var l=Array.prototype.slice.call(n.childNodes);l.forEach(function(t){n.removeChild(t)})}var G;const $=typeof window<"u";$&&((G=window==null?void 0:window.navigator)==null?void 0:G.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function fe(n){return typeof n=="function"?n():e.unref(n)}function pe(n){return n}function me(n){return e.getCurrentScope()?(e.onScopeDispose(n),!0):!1}function he(n,l=!0){e.getCurrentInstance()?e.onMounted(n):l?n():e.nextTick(n)}function J(n){var l;const t=fe(n);return(l=t==null?void 0:t.$el)!=null?l:t}const ge=$?window:void 0;$&&window.document,$&&window.navigator,$&&window.location;function ye(n,l=!1){const t=e.ref(),o=()=>t.value=Boolean(n());return o(),he(o,l),t}const H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U="__vueuse_ssr_handlers__";H[U]=H[U]||{},H[U];var K=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,ve=(n,l)=>{var t={};for(var o in n)we.call(n,o)&&l.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&K)for(var o of K(n))l.indexOf(o)<0&&ke.call(n,o)&&(t[o]=n[o]);return t};function Ee(n,l,t={}){const o=t,{window:r=ge}=o,a=ve(o,["window"]);let u;const s=ye(()=>r&&"ResizeObserver"in r),g=()=>{u&&(u.disconnect(),u=void 0)},i=e.watch(()=>J(n),d=>{g(),s.value&&r&&d&&(u=new ResizeObserver(l),u.observe(d,a))},{immediate:!0,flush:"post"}),c=()=>{g(),i()};return me(c),{isSupported:s,stop:c}}function be(n,l={width:0,height:0},t={}){const{box:o="content-box"}=t,r=e.ref(l.width),a=e.ref(l.height);return Ee(n,([u])=>{const s=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;s?(r.value=s.reduce((g,{inlineSize:i})=>g+i,0),a.value=s.reduce((g,{blockSize:i})=>g+i,0)):(r.value=u.contentRect.width,a.value=u.contentRect.height)},t),e.watch(()=>J(n),u=>{r.value=u?l.width:0,a.value=u?l.height:0}),{width:r,height:a}}var X;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(X||(X={}));var _e=Object.defineProperty,Y=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Z=(n,l,t)=>l in n?_e(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t,Oe=(n,l)=>{for(var t in l||(l={}))Ne.call(l,t)&&Z(n,t,l[t]);if(Y)for(var t of Y(l))Se.call(l,t)&&Z(n,t,l[t]);return n};Oe({linear:pe},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});function ee(n,l){const t=e.ref(),o=be(t),r=e.ref([]),a=e.shallowRef(n),u=e.ref({start:0,end:10}),{itemHeight:s,overscan:g=5}=l,i=w=>{if(typeof s=="number")return Math.ceil(w/s);const{start:_=0}=u.value;let S=0,O=0;for(let N=_;N<a.value.length;N++)if(S+=s(N),S>=w){O=N;break}return O-_},c=w=>{if(typeof s=="number")return Math.floor(w/s)+1;let _=0,S=0;for(let O=0;O<a.value.length;O++)if(_+=s(O),_>=w){S=O;break}return S+1},d=()=>{const w=t.value;if(w){const _=c(w.scrollTop),S=i(w.clientHeight),O=_-g,N=_+S+g;u.value={start:O<0?0:O,end:N>a.value.length?a.value.length:N},r.value=a.value.slice(u.value.start,u.value.end).map((A,v)=>({data:A,index:v+u.value.start}))}};e.watch([o.width,o.height,n],()=>{d()});const y=e.computed(()=>typeof s=="number"?a.value.length*s:a.value.reduce((w,_,S)=>w+s(S),0)),h=w=>typeof s=="number"?w*s:a.value.slice(0,w).reduce((S,O,N)=>S+s(N),0),m=w=>{t.value&&(t.value.scrollTop=h(w),d())},k=e.computed(()=>h(u.value.start)),x=e.computed(()=>({style:{width:"100%",height:`${y.value-k.value}px`,marginTop:`${k.value}px`}}));return{list:r,scrollTo:m,containerProps:{ref:t,onScroll:()=>{d()},style:{overflowY:"auto"}},wrapperProps:x}}const P=n=>{let l=parseInt(n);return l==n?l:n},Ce=(n,l)=>{window.ExtraSelectOptions==null&&(window.ExtraSelectOptions={});const t={defaultArray:n.value,get:()=>n.value,push:(o,r,a=null)=>{parseInt(o)==o&&(o=parseInt(o));const u=n.map.get(o);if(u)u.value=r,u.data=a;else{let s={value:r,key:o,data:a};n.value.push(s),n.map.set(s.key,s)}},addRange:o=>{for(let r of o)n.actions.push(r.key,r.value,r.data)},remove:o=>{n.value.splice(n.value.findIndex(r=>r.key==o),1)},clear:()=>{n.value=[]},sort:(o=null)=>{o==null&&(o=(r,a)=>r.value.localeCompare(a.value)),n.value=n.value.sort(o)},setDefault:function(o){this.defaultArray=o},restoreDefault:function(){n.value=this.defaultArray},filter:function(o){}};window.ExtraSelectOptions[l]=t,n.actions=t};let xe=1;const te=n=>{n&&(n.style.display="none",ue(n))},ne=(n,l,t,o)=>{var g;const r=e.ref(new Map);e.watchEffect(()=>{if(Array.isArray(t.value)){r.value.clear();for(let i of t.value)r.value.set(i,i)}});const a=e.ref([]);if(a.map=new Map,a.rebuildMap=()=>{if(a.map.clear(),a.value)for(let i of a.value)a.map.set(i.key,i)},e.watchEffect(()=>{l.value&&(a.value=l.value.map(i=>({...i,key:P(i.key)})),a.rebuildMap())}),n){if(r.value.clear(),n.matches("select")){for(let i of Array.apply(null,n.selectedOptions).map(c=>P(c.value)).filter(c=>c))r.value.set(i,i);a.value=Array.apply(null,n.options).reduce((i,c)=>(i.push({value:c.text,key:P(c.value),data:Object.assign({},c.dataset)}),i),[])}if(n.matches("input")){let i=n.value;i!=null&&i.length>0&&(a.value=[{value:i,key:i}])}a.rebuildMap()}if(Array.isArray(o))for(let i of o)r.value.set(P(i),P(i));else o!=null&&r.value.set(P(o),P(o));Ce(a,(g=n==null?void 0:n.id)!=null?g:"extraselect_"+(++xe).toString());const u=[];return r.value.forEach((i,c)=>{u.push([c,i])}),{options:a,selectedOptions:r,onReset:()=>{r.value.clear();for(let[i,c]of u)r.value.set(i,c)}}},le=async function(n,l=null,t={}){var a;const o={method:"POST",credentials:"include",...t,headers:{"Content-Type":"application/json",...(a=t.headers)!=null?a:{}},body:JSON.stringify({search:l,...t.body})};return await(await fetch(n,o)).json()},oe=(n,l,t,o,r,a,u="limited",s={})=>{const g=e.ref(0),i=e.ref(!1),c=e.computed(()=>i.value||g.value>0);if(l!=null&&l.length>0)if(t){const d=[];e.watchEffect(y=>{if(o.value.length>=r){let h=!0;switch(u){case"always":break;default:case"limited":h=!d.includes(o.value);break;case"complete":h=d.reduce((m,k)=>m&&!o.value.startsWith(k),!0);break}if(h){i.value=!0;const m=setTimeout(()=>{d.push(o.value),g.value+=1,s.body={...s.body,...a.value},le(l,o.value,s).then(k=>{n.actions.addRange(k),n.actions.sort(),g.value-=1,i.value=!1})},500);y(()=>{clearTimeout(m)})}}})}else le(l,null,s).then(d=>{n.actions.addRange(d),n.actions.sort()});return{searchingFlag:c}},ae=(n,l,t,o=[],r=[])=>{const a=e.ref(""),u=e.ref([]),s=e.ref({}),g={...o.reduce((c,d)=>(c[d]=!1,c),{}),...r.reduce((c,d)=>(c[d]=!0,c),{})};for(let c in g){let d=g[c],y=document.getElementById(c);s.value[c]=y==null?void 0:y.value,y&&y.addEventListener("change",h=>{s.value[c]=h.target.value,d&&e.nextTick(()=>{if(l!=null)for(let m of Array.from(l.value.keys()))u.value.find(k=>k.key==m)||t(m,!1);else u.value.find(m=>m.key==a.value)||t(a.value,!1)})})}const i=function(c,d){let y=c.value;return Object.keys(s.value).length>0&&(y=y.filter(h=>{var m,k;for(let x in s.value)if((g[x]?!0:((m=s.value[x])!=null?m:"").length>0)&&((k=h.data)==null?void 0:k.hasOwnProperty(x))&&h.data[x]!=s.value[x])return!1;return!0})),d.length>0&&(y=y.filter(h=>h.value.toLowerCase().includes(d.toLowerCase()))),y};return e.watchEffect(()=>{u.value=i(n,a.value)}),{filterText:a,filteredOptions:u,filterValues:s}},re=(n,l,t,o,r,a,u)=>{const s=getComputedStyle(document.querySelector("body")).font,g=function(d){const h=document.createElement("canvas").getContext("2d");return h.font=s,h.measureText(d).width},i=e.computed(()=>{var y,h;const d=(y=D(o.value).width)!=null?y:100;if(u==="inherit")return d;if(u==null||u==="dynamic"){const m=(h=parseInt(getComputedStyle(document.querySelector("html"))["font-size"]))!=null?h:16;return Math.max(d,Math.max(...n.value.map(k=>g(k.value)))+20+m*3)}return u}),c=e.ref({position:"absolute","min-width":"max-content"});return e.watchPostEffect(()=>{t.value<0&&console.log("is open"),l.value.size<0&&console.log("empty selection");var d=D(o.value),y=D(null);if(a.value&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(a.value).position))var y=D(a.value);let h=-y.left+d.left;const m=window.document.documentElement.clientWidth;h+i.value>m&&(h=m-i.value),c.value={position:"absolute","min-width":"max-content",width:i.value.toString()+"px",top:(-y.top+d.top+d.height).toString()+"px",left:h.toString()+"px"}}),{dropdownStyle:c,getTextWidth:g}},Be=["name"],Ve={key:1,class:"extra-select selection"},Le=["onClick"],Te=["innerHTML"],Fe=["value"],Ie={key:0,class:"input-searching"},Pe={key:0,class:"allselect-clear"},Ae={class:"row-input"},Me=["checked"],$e=e.createElementVNode("b",null,"Select all",-1),ze={class:"row-input"},je=["checked"],De=e.createElementVNode("b",null,"Select Filtered",-1),Re={key:1,class:"no-matches"},qe={key:2},He=["onClick"],Ue={class:"row-input"},We=["checked"],Qe=["value"],Ge=Object.assign({name:"ExtraSelect",inheritAttrs:!1},{props:{originalNode:{type:Object,required:!1},multiple:{type:Boolean,required:!1},options:{type:Array,required:!1},modelValue:{type:Array,required:!1,default:[]},url:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},search:{type:Boolean,default:!1},searchableUrl:{type:Boolean,default:!1},initialValue:{default:null},minChars:{type:Number,default:0},showSelected:{type:Boolean,default:!1},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},filterFields:{type:Array,default:[]},hardFilterFields:{type:Array,default:[]},removeIcon:{type:String,default:"X"},dropdownContainer:{type:String,default:null}},emits:["update:modelValue"],setup(n,{emit:l}){var se,ie,ce;const t=n,o=e.computed(()=>{var f,p;return(p=(f=t.originalNode)==null?void 0:f.multiple)!=null?p:t.multiple}),{options:r,selectedOptions:a,onReset:u}=ne(t.originalNode,e.toRef(t,"options"),e.toRef(t,"modelValue"),t.initialValue),s=(se=t.originalNode)==null?void 0:se.classList,g=Object.values((ce=(ie=t.originalNode)==null?void 0:ie.style)!=null?ce:{});te(t.originalNode);const i=(f,p=null)=>{if(o.value){let B=p;switch(B==null&&(B=!a.value.has(f)),B){case!0:a.value.set(f,f);break;case!1:a.value.delete(f);break}}else a.value.clear(),p!==!1&&a.value.set(f,f),L.value=!1;N(Array.from(a.value.keys()))},{filterText:c,filteredOptions:d,filterValues:y}=ae(r,a,i,t.filterFields,t.hardFilterFields),{searchingFlag:h}=oe(r,t.url,t.searchableUrl,c,t.minChars,y,t.fetchMode,t.fetchOptions),m=e.ref(null),k=e.ref(null),x=e.ref(null),L=e.ref(!1),w=e.ref(null),_=function(f){const p=M(f.target);p.push(f.target),!p.includes(m.value)&&!p.includes(k.value)&&(L.value=!1)};e.onMounted(()=>{if(t.dropdownContainer){let f=!1;w.value=M(m.value).find(p=>!!(p instanceof Element&&(p.matches(t.dropdownContainer)&&(f=!0),f&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(p).position))))}if(w.value==null&&(w.value=document.querySelector("body")),t.originalNode){for(let p of s)p!="extraselect"&&m.value.classList.add(p);for(let p of g)m.value.style[p]=t.originalNode.style[p];g.includes("background-color")||(m.value.style.backgroundColor="white");let f=M(m.value,"form").pop();f instanceof HTMLElement&&f.matches("form")&&f.addEventListener("reset",()=>setTimeout(u))}window.document.addEventListener("mousedown",_),window.document.addEventListener("focusin",_)}),e.onUnmounted(()=>{window.document.removeEventListener("mousedown",_),window.document.removeEventListener("focusin",_)});const{dropdownStyle:S,getTextWidth:O}=re(r,a,L,m,k,w,t.maxWidth),N=f=>{e.nextTick(()=>{var p;return(p=t.originalNode)==null?void 0:p.dispatchEvent(new Event("change",{bubbles:!0}))}),l("update:modelValue",f)},A=f=>{v(f,!1),c.value=""},v=(f,p=null)=>{p==null&&(p=!C.value),p?(a.value.clear(),r.value.forEach(B=>a.value.set(B.key,B.key))):a.value.clear(),N(Array.from(a.value.keys()))},E=()=>{F.value?d.value.forEach(f=>{a.value.has(f.key)&&a.value.delete(f.key)}):d.value.forEach(f=>{a.value.has(f.key)||a.value.set(f.key,f.key)}),N(Array.from(a.value.keys()))};e.watch(L,(f,p)=>{f!=p&&(f?t.search&&e.nextTick(()=>{x.value.focus({focusVisible:!0})}):c.value="")});const C=e.computed(()=>a.value.size==r.value.length),F=e.computed(()=>d.value.reduce((f,p)=>f&&a.value.has(p.key),!0)),et=e.computed(()=>a.value.size==0),tt=e.computed(()=>{var f,p,B,z,b;if(r.value.length<0)return"";if(o.value){if(et.value)return"No selection";if(!t.searchableUrl&&C.value)return"All selected";const V=m.value?getComputedStyle(m.value):null,R=((f=m.value)==null?void 0:f.clientWidth)-parseInt(V==null?void 0:V.paddingLeft)-parseInt(V==null?void 0:V.paddingRight);let q=a.value.size+" selected - ",de=!0;for(let at of a.value)if(de?de=!1:q+=", ",q+=(B=(p=r.map.get(at[0]))==null?void 0:p.value)!=null?B:h.value?"Loading...":"Value not found",R<O(q))return a.value.size+" selected";return q}else for(let V of a.value)return(b=(z=r.map.get(V[0]))==null?void 0:z.value)!=null?b:h.value?"Loading...":"Value not found";return"No selection"}),{list:nt,containerProps:lt,wrapperProps:ot}=ee(d,{itemHeight:32});return(f,p)=>{var B,z;return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(o)&&e.unref(a).size==0?(e.openBlock(),e.createElementBlock("input",{key:0,type:"hidden",name:(z=(B=t.originalNode)==null?void 0:B.name)==null?void 0:z.replace("[]",""),value:""},null,8,Be)):e.createCommentVNode("",!0),t.showSelected?(e.openBlock(),e.createElementBlock("div",Ve,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),b=>{var V;return e.openBlock(),e.createElementBlock("div",{key:b,onClick:R=>i(b[0]),class:"selection-badge"},[e.createTextVNode(e.toDisplayString((V=e.unref(r).find(R=>R.key==b[0]))==null?void 0:V.value)+" ",1),e.createElementVNode("div",{class:"selection-remove",innerHTML:t.removeIcon},null,8,Te)],8,Le)}),128))])):e.createCommentVNode("",!0),e.createElementVNode("input",e.mergeProps({onFocus:p[0]||(p[0]=b=>L.value=!0),onClick:p[1]||(p[1]=b=>L.value=!0),ref_key:"inputNode",ref:m,value:e.unref(tt),class:"extra-select extra-select-input",readonly:""},f.$attrs),null,16,Fe),w.value?(e.openBlock(),e.createBlock(e.Teleport,{key:2,to:w.value},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["extra-select dropdown",{searching:e.unref(h)>0}]),ref_key:"dropdownNode",ref:k,style:e.normalizeStyle(e.unref(S))},[t.search?(e.openBlock(),e.createElementBlock("div",Ie,[e.withDirectives(e.createElementVNode("input",{ref_key:"searchNode",ref:x,class:"extra-select-search","onUpdate:modelValue":p[2]||(p[2]=b=>e.isRef(c)?c.value=b:null),type:"text",autocomplete:"off",autocorrect:"off",autocapitilize:"off",spellcheck:"false",placeholder:"Cerca..."},null,512),[[e.vModelText,e.unref(c)]])])):e.createCommentVNode("",!0),e.unref(c).length>=t.minChars?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.unref(o)?(e.openBlock(),e.createElementBlock("div",Pe,[e.unref(c).length==0?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:v,class:"all-select"},[e.createElementVNode("div",Ae,[e.createElementVNode("input",{checked:e.unref(C),type:"checkbox"},null,8,Me),$e])])):e.createCommentVNode("",!0),e.unref(d).length>0&&e.unref(c).length>0?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:E,class:"all-select"},[e.createElementVNode("div",ze,[e.createElementVNode("input",{checked:e.unref(F),type:"checkbox"},null,8,je),De])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:"clear",onClick:A},"Clear")])):e.createCommentVNode("",!0),e.unref(d).length==0?(e.openBlock(),e.createElementBlock("div",Re,"No matches found")):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock("div",qe,"Insert at least "+e.toDisplayString(t.minChars)+" characters",1)),e.createElementVNode("div",e.mergeProps(e.unref(lt),{class:"scroller"}),[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(ot))),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(nt),b=>(e.openBlock(),e.createElementBlock("button",{key:b.index,class:"dropdown-row",onClick:e.withModifiers(V=>i(b.data.key),["stop","prevent"]),style:{height:"32px"}},[e.createElementVNode("div",Ue,[e.unref(o)?(e.openBlock(),e.createElementBlock("input",{key:0,checked:e.unref(a).has(b.data.key),type:"checkbox"},null,8,We)):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(b.data.value),1)])],8,He))),128))],16)],16)],6),[[e.vShow,L.value]])],8,["to"])):e.createCommentVNode("",!0),t.originalNode?(e.openBlock(),e.createBlock(e.Teleport,{key:3,to:t.originalNode},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),b=>(e.openBlock(),e.createElementBlock("option",{key:b[0],selected:"selected",value:b[0]},null,8,Qe))),128))],8,["to"])):e.createCommentVNode("",!0)],64)}}}),Je={key:0,class:"no-matches"},Ke={key:1},Xe=["onClick"],Ye={class:"row-input"},Ze=Object.assign({name:"ExtraSuggest",inheritAttrs:!1},{props:{originalNode:{type:Object,required:!1},options:{type:Array,required:!1},modelValue:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},url:{type:String,required:!1},searchableUrl:{type:Boolean,default:!1},minChars:{type:Number,default:0},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},filterFields:{type:Array,default:[]},hardFilterFields:{type:Array,default:[]},dropdownContainer:{type:String,default:null}},emits:["update:modelValue"],setup(n,{emit:l}){var O,N,A;const t=n,{options:o}=ne(t.originalNode,e.toRef(t,"options"),e.ref([])),r=(O=t.originalNode)==null?void 0:O.classList,a=Object.values((A=(N=t.originalNode)==null?void 0:N.style)!=null?A:{});te(t.originalNode);const u=(v,E=null)=>{E===!1?s.value="":s.value=o.map.get(v).value,h.value=!1},{filterText:s,filteredOptions:g,filterValues:i}=ae(o,null,u,t.filterFields,t.hardFilterFields),{searchingFlag:c}=oe(o,t.url,t.searchableUrl,s,t.minChars,i,t.fetchMode,t.fetchOptions),d=e.ref(null),y=e.ref(null),h=e.ref(!1),m=e.ref(null),k=function(v){const E=M(v.target);E.push(v.target),!E.includes(d.value)&&!E.includes(y.value)&&(h.value=!1)};e.onMounted(()=>{if(t.dropdownContainer){let v=!1;m.value=M(d.value).find(E=>!!(E instanceof Element&&(E.matches(t.dropdownContainer)&&(v=!0),v&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(E).position))))}if(m.value==null&&(m.value=document.querySelector("body")),t.originalNode){for(let F of r)F!="extrasuggest"&&d.value.classList.add(F);for(let F of a)d.value.style[F]=t.originalNode.style[F];a.includes("background-color")||(d.value.style.backgroundColor="white"),s.value=t.originalNode.value,e.watchEffect(()=>{t.modelValue!=null&&(s.value=t.modelValue)});const v=s.value,E=()=>{s.value=v};let C=M(d.value,"form").pop();C instanceof HTMLElement&&C.matches("form")&&C.addEventListener("reset",()=>setTimeout(E))}window.document.addEventListener("mousedown",k),window.document.addEventListener("focusin",k)}),e.onUnmounted(()=>{window.document.removeEventListener("mousedown",k),window.document.removeEventListener("focusin",k)});const{dropdownStyle:x}=re(o,e.ref([]),h,d,y,m,t.maxWidth),L=()=>{var v;t.originalNode&&(t.originalNode.value=s.value,(v=t.originalNode)==null||v.dispatchEvent(new Event("change",{bubbles:!0}))),l("update:modelValue",s.value)};e.watch(()=>h.value,v=>{v===!1&&L()});const{list:w,containerProps:_,wrapperProps:S}=ee(g,{itemHeight:32});return(v,E)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("input",e.mergeProps({onFocus:E[0]||(E[0]=C=>h.value=!0),onClick:E[1]||(E[1]=C=>h.value=!0),ref_key:"inputNode",ref:d,"onUpdate:modelValue":E[2]||(E[2]=C=>e.isRef(s)?s.value=C:null),class:"extra-select extra-select-input"},v.$attrs),null,16),[[e.vModelDynamic,e.unref(s)]]),m.value?(e.openBlock(),e.createBlock(e.Teleport,{key:0,to:m.value},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["extra-select dropdown",{searching:e.unref(c)>0}]),ref_key:"dropdownNode",ref:y,style:e.normalizeStyle(e.unref(x))},[e.unref(s).length>=t.minChars?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(g).length==0?(e.openBlock(),e.createElementBlock("div",Je,"No matches found")):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock("div",Ke,"Insert at least "+e.toDisplayString(t.minChars)+" characters",1)),e.createElementVNode("div",e.mergeProps(e.unref(_),{class:"scroller"}),[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(S))),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(w),C=>(e.openBlock(),e.createElementBlock("button",{key:C.index,class:"dropdown-row",onClick:e.withModifiers(F=>u(C.data.key),["stop","prevent"]),style:{height:"32px"}},[e.createElementVNode("div",Ye,e.toDisplayString(C.data.value),1)],8,Xe))),128))],16)],16)],6),[[e.vShow,h.value]])],8,["to"])):e.createCommentVNode("",!0)],64))}}),W={init:function(){document.querySelectorAll(".extraselect").forEach(function(n){W.bindNew(n)})},bindNew(n){I.lock(n,"extra-select",()=>{const l={};for(let r in n.dataset)try{l[r]=JSON.parse(n.dataset[r])}catch{l[r]=n.dataset[r]}l.originalNode=n;const t=document.createElement("div");n.parentNode.insertBefore(t,n.nextSibling),t.dataset.isVue=!0,t.style.display="contents";const o=e.createApp(Ge,l);o.mount(t),n.addEventListener("remove",function(){o.unmount(),t.remove(),n.remove(),I.remove(n,"extra-select")})})}},Q={init:function(){document.querySelectorAll(".extrasuggest").forEach(function(n){Q.bindNew(n)})},bindNew(n){I.lock(n,"extra-suggest",()=>{const l={};for(let r in n.dataset)try{l[r]=JSON.parse(n.dataset[r])}catch{l[r]=n.dataset[r]}l.originalNode=n;const t=document.createElement("div");n.parentNode.insertBefore(t,n.nextSibling),t.dataset.isVue=!0,t.style.display="contents";const o=e.createApp(Ze,l);o.mount(t),n.addEventListener("remove",function(){o.unmount(),t.remove(),n.remove(),I.remove(n,"extra-suggest")})})}};return document.addEventListener("DOMContentLoaded",function(){W.init(),Q.init()}),j.ExtraSelect=W,j.ExtraSuggest=Q,Object.defineProperties(j,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),j}({},Vue);
