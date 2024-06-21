var Extraselect=function(M,e){"use strict";const V=new WeakMap;class C{static put(n,t,o){V.has(n)||V.set(n,new Map),V.get(n).set(t,o)}static get(n,t){return V.get(n).get(t)}static has(n,t){return V.has(n)&&V.get(n).has(t)}static remove(n,t){var o=V.get(n).delete(t);return V.get(n).size!==0&&V.delete(n),o}static lock(n,t,o){if(!C.has(n,t)){C.put(n,t,!0);const a=o();return a!==void 0&&C.put(n,t,a),a}return!1}static async lockAsync(n,t,o){if(!C.has(n,t)){C.put(n,t,!0);const a=await o();return a!==void 0&&C.put(n,t,a),a}return!1}}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}).DATASTORE_DEBUG&&(window.__Store=V);function R(l){if(l==null)return{top:0,left:0,width:null,height:null};let n=l.getBoundingClientRect();return{top:n.top+window.scrollY,left:n.left+window.scrollX,width:n.width,height:n.height}}function A(l,n){n===void 0&&(n=window.document);for(var t=[],o=l.parentNode;o!=null&&o instanceof HTMLElement&&!(n instanceof HTMLElement&&o===n)&&!(typeof n=="string"&&o.matches(n));){var a=o;t.push(a),o=a.parentNode}return o!=null&&t.push(o),t}function Oe(l){var n=Array.prototype.slice.call(l.childNodes);n.forEach(function(t){l.removeChild(t)})}var Z;const z=typeof window<"u";z&&((Z=window==null?void 0:window.navigator)==null?void 0:Z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ne(l){return typeof l=="function"?l():e.unref(l)}function Ce(l){return l}function Be(l){return e.getCurrentScope()?(e.onScopeDispose(l),!0):!1}function Ve(l,n=!0){e.getCurrentInstance()?e.onMounted(l):n?l():e.nextTick(l)}function j(l){var n;const t=Ne(l);return(n=t==null?void 0:t.$el)!=null?n:t}const ee=z?window:void 0;z&&window.document,z&&window.navigator,z&&window.location;function Le(l,n=!1){const t=e.ref(),o=()=>t.value=Boolean(l());return o(),Ve(o,n),t}const Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G="__vueuse_ssr_handlers__";Q[G]=Q[G]||{},Q[G];var te=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,Ae=(l,n)=>{var t={};for(var o in l)Te.call(l,o)&&n.indexOf(o)<0&&(t[o]=l[o]);if(l!=null&&te)for(var o of te(l))n.indexOf(o)<0&&Fe.call(l,o)&&(t[o]=l[o]);return t};function Pe(l,n,t={}){const o=t,{window:a=ee}=o,r=Ae(o,["window"]);let c;const i=Le(()=>a&&"ResizeObserver"in a),f=()=>{c&&(c.disconnect(),c=void 0)},s=e.watch(()=>j(l),d=>{f(),i.value&&a&&d&&(c=new ResizeObserver(n),c.observe(d,r))},{immediate:!0,flush:"post"}),u=()=>{f(),s()};return Be(u),{isSupported:i,stop:u}}function Ie(l,n={width:0,height:0},t={}){const{window:o=ee,box:a="content-box"}=t,r=e.computed(()=>{var f,s;return(s=(f=j(l))==null?void 0:f.namespaceURI)==null?void 0:s.includes("svg")}),c=e.ref(n.width),i=e.ref(n.height);return Pe(l,([f])=>{const s=a==="border-box"?f.borderBoxSize:a==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(o&&r.value){const u=j(l);if(u){const d=o.getComputedStyle(u);c.value=parseFloat(d.width),i.value=parseFloat(d.height)}}else if(s){const u=Array.isArray(s)?s:[s];c.value=u.reduce((d,{inlineSize:m})=>d+m,0),i.value=u.reduce((d,{blockSize:m})=>d+m,0)}else c.value=f.contentRect.width,i.value=f.contentRect.height},t),e.watch(()=>j(l),f=>{c.value=f?n.width:0,i.value=f?n.height:0}),{width:c,height:i}}var le;(function(l){l.UP="UP",l.RIGHT="RIGHT",l.DOWN="DOWN",l.LEFT="LEFT",l.NONE="NONE"})(le||(le={}));var Me=Object.defineProperty,ne=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,ae=(l,n,t)=>n in l?Me(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,De=(l,n)=>{for(var t in n||(n={}))ze.call(n,t)&&ae(l,t,n[t]);if(ne)for(var t of ne(n))$e.call(n,t)&&ae(l,t,n[t]);return l};De({linear:Ce},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});function oe(l,n){const{containerStyle:t,wrapperProps:o,scrollTo:a,calculateRange:r,currentList:c,containerRef:i}="itemHeight"in n?qe(n,l):je(n,l);return{list:c,scrollTo:a,containerProps:{ref:i,onScroll:()=>{r()},style:t},wrapperProps:o}}function re(l){const n=e.ref(null),t=Ie(n),o=e.ref([]),a=e.shallowRef(l);return{state:e.ref({start:0,end:10}),source:a,currentList:o,size:t,containerRef:n}}function se(l,n,t){return o=>{if(typeof t=="number")return Math.ceil(o/t);const{start:a=0}=l.value;let r=0,c=0;for(let i=a;i<n.value.length;i++){const f=t(i);if(r+=f,c=i,r>o)break}return c-a}}function ie(l,n){return t=>{if(typeof n=="number")return Math.floor(t/n)+1;let o=0,a=0;for(let r=0;r<l.value.length;r++){const c=n(r);if(o+=c,o>=t){a=r;break}}return a+1}}function ce(l,n,t,o,{containerRef:a,state:r,currentList:c,source:i}){return()=>{const f=a.value;if(f){const s=t(l==="vertical"?f.scrollTop:f.scrollLeft),u=o(l==="vertical"?f.clientHeight:f.clientWidth),d=s-n,m=s+u+n;r.value={start:d<0?0:d,end:m>i.value.length?i.value.length:m},c.value=i.value.slice(r.value.start,r.value.end).map((p,y)=>({data:p,index:y+r.value.start}))}}}function ue(l,n){return t=>typeof l=="number"?t*l:n.value.slice(0,t).reduce((a,r,c)=>a+l(c),0)}function de(l,n,t){e.watch([l.width,l.height,n],()=>{t()})}function fe(l,n){return e.computed(()=>typeof l=="number"?n.value.length*l:n.value.reduce((t,o,a)=>t+l(a),0))}const Re={horizontal:"scrollLeft",vertical:"scrollTop"};function pe(l,n,t,o){return a=>{o.value&&(o.value[Re[l]]=t(a),n())}}function je(l,n){const t=re(n),{state:o,source:a,currentList:r,size:c,containerRef:i}=t,f={overflowX:"auto"},{itemWidth:s,overscan:u=5}=l,d=se(o,a,s),m=ie(a,s),p=ce("horizontal",u,m,d,t),y=ue(s,a),v=e.computed(()=>y(o.value.start)),w=fe(s,a);de(c,n,p);const O=pe("horizontal",p,y,i),B=e.computed(()=>({style:{height:"100%",width:`${w.value-v.value}px`,marginLeft:`${v.value}px`,display:"flex"}}));return{scrollTo:O,calculateRange:p,wrapperProps:B,containerStyle:f,currentList:r,containerRef:i}}function qe(l,n){const t=re(n),{state:o,source:a,currentList:r,size:c,containerRef:i}=t,f={overflowY:"auto"},{itemHeight:s,overscan:u=5}=l,d=se(o,a,s),m=ie(a,s),p=ce("vertical",u,m,d,t),y=ue(s,a),v=e.computed(()=>y(o.value.start)),w=fe(s,a);de(c,n,p);const O=pe("vertical",p,y,i),B=e.computed(()=>({style:{width:"100%",height:`${w.value-v.value}px`,marginTop:`${v.value}px`}}));return{calculateRange:p,scrollTo:O,containerStyle:f,wrapperProps:B,currentList:r,containerRef:i}}const F=l=>{let n=parseInt(l);return n==l?n:l},He=(l,n,t)=>{window.ExtraSelectOptions==null&&(window.ExtraSelectOptions={});const o={defaultArray:l.value,get:()=>l.value,push:(a,r,c=null)=>{parseInt(a)==a&&(a=parseInt(a));const i=l.map.get(a);if(i)i.value=r,i.data=c;else{let f={value:r,key:a,data:c};l.value.push(f),l.map.set(f.key,f)}},addRange:a=>{for(let r of a)l.actions.push(r.key,r.value,r.data)},remove:a=>{l.value.splice(l.value.findIndex(r=>r.key==a),1)},clear:()=>{l.value=[]},sort:(a=null)=>{a==null&&(a=(r,c)=>r.value.localeCompare(c.value)),l.value=l.value.sort(a)},setDefault:function(a){this.defaultArray=a},restoreDefault:function(){l.value=this.defaultArray},filter:function(a){},selection:{get(){return n.value},clear(){n.value.clear()},add(a){n.value.set(a,a)},remove(a){n.value.delete(a)}}};window.ExtraSelectOptions[t]=o,l.actions=o};let We=1;const me=l=>{l&&(l.style.display="none",Oe(l))},he=(l,n,t,o)=>{const a=e.ref(new Map);e.watchEffect(()=>{if(Array.isArray(t.value)){a.value.clear();for(let s of t.value)a.value.set(s,s)}});const r=e.ref([]);if(r.map=new Map,r.rebuildMap=()=>{if(r.map.clear(),r.value)for(let s of r.value)r.map.set(s.key,s)},e.watchEffect(()=>{n.value&&(r.value=n.value.map(s=>({...s,key:F(s.key)})),r.rebuildMap())}),l){if(a.value.clear(),l.matches("select")){for(let s of Array.apply(null,l.selectedOptions).map(u=>F(u.value)).filter(u=>u!=null))a.value.set(s,s);r.value=Array.apply(null,l.options).reduce((s,u)=>(s.push({value:u.text,key:F(u.value),data:Object.assign({},u.dataset)}),s),[])}if(l.matches("input")){let s=l.value;s!=null&&s.length>0&&(r.value=[{value:s,key:s}])}r.rebuildMap()}if(Array.isArray(o))for(let s of o)a.value.set(F(s),F(s));else o!=null&&a.value.set(F(o),F(o));let c=l==null?void 0:l.id;(c==null||c===""||c==0)&&(c="extraselect_"+(++We).toString()),He(r,a,c);const i=[];return a.value.forEach((s,u)=>{i.push([u,s])}),{options:r,selectedOptions:a,onReset:()=>{a.value.clear();for(let[s,u]of i)a.value.set(s,u)}}};e.ref({});function Ue(l,n={}){for(let t in n)l=l.replace(`:${t}`,n[t]);return l}const K=(l=null)=>{var o,a;window.ExtraSelectLocalization==null&&(window.ExtraSelectLocalization={});let t={...(a=(o=window.ExtraSelectLocalization.defaults)==null?void 0:o.defaultArray)!=null?a:{}};Object.assign(t,l!=null?l:{}),ge(e.ref(t),"defaults")},ge=(l,n)=>{window.ExtraSelectLocalization==null&&(window.ExtraSelectLocalization={},K());const t={defaultArray:l.value,list:()=>l.value,get:o=>{var a;return(a=l.value[o])!=null?a:null},push:(o,a)=>{l.value[o]=a}};window.ExtraSelectLocalization[n]=t,l.actions=t};let Qe=0;const ye=(l,n)=>{var o;return ge(n,(o=l==null?void 0:l.id)!=null?o:"extraselect_"+(++Qe).toString()),{propLocalization:n,t:(a,r={})=>{var i;let c=(i=n.value[a])!=null?i:window.ExtraSelectLocalization.defaults.get(a);return c==null&&(window.ExtraSelectLocalization.defaults.push(a,a),c=a),Ue(c,r)}}},we=async function(l,n=null,t={}){var r;const o={method:"POST",credentials:"include",...t,headers:{"Content-Type":"application/json",...(r=t.headers)!=null?r:{}},body:JSON.stringify({search:n,...t.body})};return await(await fetch(l,o)).json()},ve=(l,n,t,o,a,r,c="limited",i={})=>{const f=e.ref(0),s=e.ref(!1),u=e.computed(()=>s.value||f.value>0);if(n!=null&&n.length>0)if(t){const d=[];e.watchEffect(m=>{if(o.value.length>=a){let p=!0;switch(c){case"always":break;default:case"limited":p=!d.includes(o.value);break;case"complete":p=d.reduce((y,v)=>y&&!o.value.startsWith(v),!0);break}if(p){s.value=!0;const y=setTimeout(()=>{d.push(o.value),f.value+=1,i.body={...i.body,...r.value},we(n,o.value,i).then(v=>{l.actions.addRange(v),l.actions.sort(),f.value-=1,s.value=!1})},500);m(()=>{clearTimeout(y)})}}})}else we(n,null,i).then(d=>{l.actions.addRange(d),l.actions.sort()});return{searchingFlag:u}},ke=(l,n,t,o=[],a=[])=>{const r=e.ref(""),c=e.ref([]),i=e.ref({}),f={...o.reduce((u,d)=>(u[d]=!1,u),{}),...a.reduce((u,d)=>(u[d]=!0,u),{})};for(let u in f){let d=f[u],m=document.getElementById(u);i.value[u]=m==null?void 0:m.value,m&&m.addEventListener("change",p=>{i.value[u]=p.target.value,d&&e.nextTick(()=>{if(n!=null)for(let y of Array.from(n.value.keys()))c.value.find(v=>v.key==y)||t(y,!1);else c.value.find(y=>y.key==r.value)||t(r.value,!1)})})}const s=function(u,d){let m=u.value;return Object.keys(i.value).length>0&&(m=m.filter(p=>{var y,v;for(let w in i.value)if((f[w]?!0:((y=i.value[w])!=null?y:"").length>0)&&((v=p.data)==null?void 0:v.hasOwnProperty(w))){if(Array.isArray(p.data[w])){if(!p.data[w].includes(i.value[w]))return!1}else if(p.data[w]!=i.value[w])return!1}return!0})),d.length>0&&(m=m.filter(p=>p.value.toLowerCase().includes(d.toLowerCase()))),m};return e.watchEffect(()=>{c.value=s(l,r.value)}),{filterText:r,filteredOptions:c,filterValues:i}},Ee=(l,n,t,o,a,r,c)=>{const i=getComputedStyle(document.querySelector("body")).font,f=function(d){const p=document.createElement("canvas").getContext("2d");return p.font=i,p.measureText(d).width},s=e.computed(()=>{var m,p;const d=(m=R(o.value).width)!=null?m:100;if(c==="inherit")return d;if(c==null||c==="dynamic"){const y=(p=parseInt(getComputedStyle(document.querySelector("html"))["font-size"]))!=null?p:16;return Math.max(d,Math.max(...l.value.map(v=>f(v.value)))+20+y*3)}return c}),u=e.ref({position:"absolute","min-width":"max-content"});return e.watchPostEffect(()=>{t.value<0&&console.log("is open"),n.value.size<0&&console.log("empty selection");var d=R(o.value),m=R(null);if(r.value&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(r.value).position))var m=R(r.value);let p=-m.left+d.left;const y=window.document.documentElement.clientWidth;p+s.value>y&&(p=y-s.value),u.value={position:"absolute","min-width":"max-content",width:s.value.toString()+"px",top:(-m.top+d.top+d.height).toString()+"px",left:p.toString()+"px"}}),{dropdownStyle:u,getTextWidth:f}},Ge=["name"],Ke={key:1,class:"extra-select selection"},Je=["onClick"],Xe=["innerHTML"],Ye=["value","disabled"],Ze={key:0,class:"input-searching"},et=["placeholder"],tt={key:0,class:"allselect-clear"},lt={class:"row-input"},nt=["checked"],at={class:"row-input"},ot=["checked"],rt={key:1,class:"no-matches"},st={key:2},it=["onClick"],ct={class:"row-input"},ut=["checked"],dt=["value"],ft=Object.assign({name:"ExtraSelect",inheritAttrs:!1},{props:{originalNode:{type:Object,required:!1},multiple:{type:Boolean,required:!1},options:{type:Array,required:!1},localization:{type:Object,required:!1,default:{}},modelValue:{type:Array,required:!1,default:[]},url:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},search:{type:Boolean,default:!1},searchableUrl:{type:Boolean,default:!1},initialValue:{default:null},minChars:{type:Number,default:0},showSelected:{type:Boolean,default:!1},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},filterFields:{type:Array,default:[]},hardFilterFields:{type:Array,default:[]},removeIcon:{type:String,default:"X"},dropdownContainer:{type:String,default:null},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:n}){var be,Se,_e;const t=l,o=e.computed(()=>{var h,g;return(g=(h=t.originalNode)==null?void 0:h.multiple)!=null?g:t.multiple}),{options:a,selectedOptions:r,onReset:c}=he(t.originalNode,e.toRef(t,"options"),e.toRef(t,"modelValue"),t.initialValue),{t:i}=ye(t.originalNode,e.toRef(t,"localization")),f=(be=t.originalNode)==null?void 0:be.classList,s=Object.values((_e=(Se=t.originalNode)==null?void 0:Se.style)!=null?_e:{});me(t.originalNode);const u=n,d=(h,g=null)=>{if(o.value){let _=g;switch(_==null&&(_=!r.value.has(h)),_){case!0:r.value.set(h,h);break;case!1:r.value.delete(h);break}}else r.value.clear(),g!==!1&&r.value.set(h,h),L.value=!1;I(Array.from(r.value.keys()))},{filterText:m,filteredOptions:p,filterValues:y}=ke(a,r,d,t.filterFields,t.hardFilterFields),{searchingFlag:v}=ve(a,t.url,t.searchableUrl,m,t.minChars,y,t.fetchMode,t.fetchOptions),w=e.ref(null),O=e.ref(null),B=e.ref(null),L=e.ref(!1);function $(h){t.disabled||(L.value=h)}e.watch(m,()=>{O.value.querySelector(".scroller").scrollTop=0});const T=e.ref(null),P=function(h){const g=A(h.target);g.push(h.target),!g.includes(w.value)&&!g.includes(O.value)?L.value=!1:(h.stopImmediatePropagation(),h.preventDefault())};e.onMounted(()=>{if(t.dropdownContainer){let h=!1;T.value=A(w.value).find(g=>!!(g instanceof Element&&(g.matches(t.dropdownContainer)&&(h=!0),h&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(g).position))))}if(T.value==null&&(T.value=document.querySelector("body")),t.originalNode){for(let g of f)g!="extraselect"&&w.value.classList.add(g);for(let g of s)w.value.style[g]=t.originalNode.style[g];let h=A(w.value,"form").pop();h instanceof HTMLElement&&h.matches("form")&&h.addEventListener("reset",()=>setTimeout(c)),t.originalNode.toggleValue=d,t.originalNode.setValues=g=>{r.value.clear();for(let _ of g)d(_)}}window.document.addEventListener("mousedown",P),window.document.addEventListener("focusin",P)}),e.onUnmounted(()=>{window.document.removeEventListener("mousedown",P),window.document.removeEventListener("focusin",P)});const{dropdownStyle:Y,getTextWidth:q}=Ee(a,r,L,w,O,T,t.maxWidth),I=h=>{e.nextTick(()=>{var g;return(g=t.originalNode)==null?void 0:g.dispatchEvent(new Event("change",{bubbles:!0}))}),u("update:modelValue",h)},H=h=>{S(h,!1),m.value=""},S=(h,g=null)=>{g==null&&(g=!E.value),g?(r.value.clear(),a.value.forEach(_=>r.value.set(_.key,_.key))):r.value.clear(),I(Array.from(r.value.keys()))},k=()=>{x.value?p.value.forEach(h=>{r.value.has(h.key)&&r.value.delete(h.key)}):p.value.forEach(h=>{r.value.has(h.key)||r.value.set(h.key,h.key)}),I(Array.from(r.value.keys()))};e.watch(L,(h,g)=>{h!=g&&(h?t.search&&e.nextTick(()=>{B.value.focus({focusVisible:!0})}):m.value="")});const E=e.computed(()=>r.value.size==a.value.length),x=e.computed(()=>p.value.reduce((h,g)=>h&&r.value.has(g.key),!0)),kt=e.computed(()=>r.value.size==0),Et=e.computed(()=>{var h,g,_,D,b;if(a.value.length<0)return"";if(o.value){if(kt.value)return i("No selection");if(!t.searchableUrl&&E.value)return i("All selected");const N=w.value?getComputedStyle(w.value):null,W=((h=w.value)==null?void 0:h.clientWidth)-parseInt(N==null?void 0:N.paddingLeft)-parseInt(N==null?void 0:N.paddingRight);let U=i(":n selected - ",{n:r.value.size}),xe=!0;for(let xt of r.value)if(xe?xe=!1:U+=", ",U+=(_=(g=a.map.get(xt[0]))==null?void 0:g.value)!=null?_:v.value?i("Loading..."):i("Value not found"),W<q(U))return r.value.size+i(" selected");return U}else for(let N of r.value)return(b=(D=a.map.get(N[0]))==null?void 0:D.value)!=null?b:v.value?i("Loading..."):i("Value not found");return i("No selection")}),{list:bt,containerProps:St,wrapperProps:_t}=oe(p,{itemHeight:32});return(h,g)=>{var _,D;return e.openBlock(),e.createElementBlock(e.Fragment,null,[o.value&&e.unref(r).size==0?(e.openBlock(),e.createElementBlock("input",{key:0,type:"hidden",name:(D=(_=t.originalNode)==null?void 0:_.name)==null?void 0:D.replace("[]",""),value:""},null,8,Ge)):e.createCommentVNode("",!0),t.showSelected?(e.openBlock(),e.createElementBlock("div",Ke,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),b=>{var N;return e.openBlock(),e.createElementBlock("div",{key:b,onClick:e.withModifiers(W=>d(b[0]),["stop","prevent"]),class:"selection-badge"},[e.createTextVNode(e.toDisplayString((N=e.unref(a).find(W=>W.key==b[0]))==null?void 0:N.value)+" ",1),e.createElementVNode("div",{class:"selection-remove",innerHTML:t.removeIcon},null,8,Xe)],8,Je)}),128))])):e.createCommentVNode("",!0),e.createElementVNode("input",e.mergeProps({onFocus:g[0]||(g[0]=b=>$(!0)),onClick:g[1]||(g[1]=e.withModifiers(b=>$(!0),["stop","prevent"])),ref_key:"inputNode",ref:w,value:Et.value,class:"extra-select extra-select-input",readonly:""},h.$attrs,{disabled:l.disabled}),null,16,Ye),T.value?(e.openBlock(),e.createBlock(e.Teleport,{key:2,to:T.value},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["extra-select dropdown",{searching:e.unref(v)>0}]),ref_key:"dropdownNode",ref:O,style:e.normalizeStyle(e.unref(Y))},[t.search?(e.openBlock(),e.createElementBlock("div",Ze,[e.withDirectives(e.createElementVNode("input",{ref_key:"searchNode",ref:B,class:"extra-select-search","onUpdate:modelValue":g[2]||(g[2]=b=>e.isRef(m)?m.value=b:null),type:"text",autocomplete:"off",autocorrect:"off",autocapitilize:"off",spellcheck:"false",placeholder:e.unref(i)("Search...")},null,8,et),[[e.vModelText,e.unref(m)]])])):e.createCommentVNode("",!0),e.unref(m).length>=t.minChars?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[o.value?(e.openBlock(),e.createElementBlock("div",tt,[e.unref(m).length==0?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:e.withModifiers(S,["stop","prevent"]),class:"all-select"},[e.createElementVNode("div",lt,[e.createElementVNode("input",{checked:E.value,type:"checkbox"},null,8,nt),e.createElementVNode("b",null,e.toDisplayString(e.unref(i)("Select all")),1)])])):e.createCommentVNode("",!0),e.unref(p).length>0&&e.unref(m).length>0?(e.openBlock(),e.createElementBlock("div",{key:1,onClick:e.withModifiers(k,["stop","prevent"]),class:"all-select"},[e.createElementVNode("div",at,[e.createElementVNode("input",{checked:x.value,type:"checkbox"},null,8,ot),e.createElementVNode("b",null,e.toDisplayString(e.unref(i)("Select Filtered")),1)])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:"clear",onClick:e.withModifiers(H,["stop","prevent"])},e.toDisplayString(e.unref(i)("Clear")),1)])):e.createCommentVNode("",!0),e.unref(p).length==0?(e.openBlock(),e.createElementBlock("div",rt,e.toDisplayString(e.unref(i)("No matches found")),1)):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock("div",st,e.toDisplayString(e.unref(i)("Insert at least :n characters",{n:t.minChars})),1)),e.createElementVNode("div",e.mergeProps(e.unref(St),{class:"scroller"}),[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(_t))),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(bt),b=>(e.openBlock(),e.createElementBlock("button",{key:b.index,class:"dropdown-row",onClick:e.withModifiers(N=>d(b.data.key),["stop","prevent"]),style:{height:"32px"}},[e.createElementVNode("div",ct,[o.value?(e.openBlock(),e.createElementBlock("input",{key:0,checked:e.unref(r).has(b.data.key),type:"checkbox"},null,8,ut)):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(b.data.value),1)])],8,it))),128))],16)],16)],6),[[e.vShow,L.value]])],8,["to"])):e.createCommentVNode("",!0),t.originalNode?(e.openBlock(),e.createBlock(e.Teleport,{key:3,to:t.originalNode},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),b=>(e.openBlock(),e.createElementBlock("option",{key:b[0],selected:"selected",value:b[0]},null,8,dt))),128))],8,["to"])):e.createCommentVNode("",!0)],64)}}}),pt=["disabled"],mt={key:0,class:"no-matches"},ht={key:1},gt=["onClick"],yt={class:"row-input"},wt=Object.assign({name:"ExtraSuggest",inheritAttrs:!1},{props:{originalNode:{type:Object,required:!1},options:{type:Array,required:!1},localization:{type:Object,required:!1,default:{}},modelValue:{type:String,required:!1},maxWidth:{type:String,default:"dynamic"},url:{type:String,required:!1},searchableUrl:{type:Boolean,default:!1},minChars:{type:Number,default:0},fetchMode:{type:String,default:"limited"},fetchOptions:{type:Object,default:{}},filterFields:{type:Array,default:[]},hardFilterFields:{type:Array,default:[]},dropdownContainer:{type:String,default:null},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:n}){var q,I,H;const t=l,{options:o}=he(t.originalNode,e.toRef(t,"options"),e.ref([])),{t:a}=ye(t.originalNode,e.toRef(t,"localization")),r=(q=t.originalNode)==null?void 0:q.classList,c=Object.values((H=(I=t.originalNode)==null?void 0:I.style)!=null?H:{});me(t.originalNode);const i=n,f=(S,k=null)=>{k===!1?s.value="":s.value=o.map.get(S).value,v.value=!1},{filterText:s,filteredOptions:u,filterValues:d}=ke(o,null,f,t.filterFields,t.hardFilterFields),{searchingFlag:m}=ve(o,t.url,t.searchableUrl,s,t.minChars,d,t.fetchMode,t.fetchOptions),p=e.ref(null),y=e.ref(null),v=e.ref(!1),w=e.ref(null);function O(S){t.disabled||(v.value=S)}e.watch(s,()=>{y.value.querySelector(".scroller").scrollTop=0});const B=function(S){const k=A(S.target);k.push(S.target),!k.includes(p.value)&&!k.includes(y.value)&&(v.value=!1)};e.onMounted(()=>{if(t.dropdownContainer){let E=!1;w.value=A(p.value).find(x=>!!(x instanceof Element&&(x.matches(t.dropdownContainer)&&(E=!0),E&&["absolute","relative","fixed","sticky"].includes(getComputedStyle(x).position))))}if(w.value==null&&(w.value=document.querySelector("body")),t.originalNode){for(let x of r)x!="extrasuggest"&&p.value.classList.add(x);for(let x of c)p.value.style[x]=t.originalNode.style[x];s.value=t.originalNode.value;let E=A(p.value,"form").pop();E instanceof HTMLElement&&E.matches("form")&&E.addEventListener("reset",()=>setTimeout(k)),t.originalNode.addEventListener("change",()=>{$(!0)})}e.watchEffect(()=>{t.modelValue!=null&&(s.value=t.modelValue)});const S=s.value,k=()=>{s.value=S};window.document.addEventListener("mousedown",B),window.document.addEventListener("focusin",B)}),e.onUnmounted(()=>{window.document.removeEventListener("mousedown",B),window.document.removeEventListener("focusin",B)});const{dropdownStyle:L}=Ee(o,e.ref([]),v,p,y,w,t.maxWidth),$=(S=!1)=>{var k;t.originalNode&&(S?s.value=t.originalNode.value:(t.originalNode.value=s.value,(k=t.originalNode)==null||k.dispatchEvent(new Event("change",{bubbles:!0})))),i("update:modelValue",s.value)};e.watch(()=>v.value,S=>{S===!1&&$()});const{list:T,containerProps:P,wrapperProps:Y}=oe(u,{itemHeight:32});return(S,k)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("input",e.mergeProps({onFocus:k[0]||(k[0]=E=>O(!0)),onClick:k[1]||(k[1]=E=>O(!0)),ref_key:"inputNode",ref:p,"onUpdate:modelValue":k[2]||(k[2]=E=>e.isRef(s)?s.value=E:null),class:"extra-select extra-select-input"},S.$attrs,{disabled:l.disabled}),null,16,pt),[[e.vModelDynamic,e.unref(s)]]),w.value?(e.openBlock(),e.createBlock(e.Teleport,{key:0,to:w.value},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["extra-select dropdown",{searching:e.unref(m)>0}]),ref_key:"dropdownNode",ref:y,style:e.normalizeStyle(e.unref(L))},[e.unref(s).length>=t.minChars?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(u).length==0?(e.openBlock(),e.createElementBlock("div",mt,e.toDisplayString(e.unref(a)("No matches found")),1)):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createElementBlock("div",ht,e.toDisplayString(e.unref(a)("Insert at least :n characters",{n:t.minChars})),1)),e.createElementVNode("div",e.mergeProps(e.unref(P),{class:"scroller"}),[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(Y))),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(T),E=>(e.openBlock(),e.createElementBlock("button",{key:E.index,class:"dropdown-row",onClick:e.withModifiers(x=>f(E.data.key),["stop","prevent"]),style:{height:"32px"}},[e.createElementVNode("div",yt,e.toDisplayString(E.data.value),1)],8,gt))),128))],16)],16)],6),[[e.vShow,v.value]])],8,["to"])):e.createCommentVNode("",!0)],64))}}),vt=K,J={init:function(){document.querySelectorAll(".extraselect").forEach(function(l){J.bindNew(l)})},bindNew(l){C.lock(l,"extra-select",()=>{const n={};for(let a in l.dataset)try{n[a]=JSON.parse(l.dataset[a])}catch{n[a]=l.dataset[a]}n.disabled=l.disabled,n.originalNode=l;const t=document.createElement("div");l.parentNode.insertBefore(t,l.nextSibling),t.dataset.isVue=!0,t.style.display="contents";const o=e.createApp(ft,n);o.mount(t),l.addEventListener("remove",function(){o.unmount(),t.remove(),l.remove(),C.remove(l,"extra-select")})})}},X={init:function(){document.querySelectorAll(".extrasuggest").forEach(function(l){X.bindNew(l)})},bindNew(l){C.lock(l,"extra-suggest",()=>{const n={};for(let a in l.dataset)try{n[a]=JSON.parse(l.dataset[a])}catch{n[a]=l.dataset[a]}n.disabled=l.disabled,n.originalNode=l;const t=document.createElement("div");l.parentNode.insertBefore(t,l.nextSibling),t.dataset.isVue=!0,t.style.display="contents";const o=e.createApp(wt,n);o.mount(t),l.addEventListener("remove",function(){o.unmount(),t.remove(),l.remove(),C.remove(l,"extra-suggest")})})}};return document.addEventListener("DOMContentLoaded",function(){J.init(),X.init(),K()}),M.ExtraSelect=J,M.ExtraSuggest=X,M.loadExtraSelectDefaultLocalization=vt,Object.defineProperties(M,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),M}({},Vue);
