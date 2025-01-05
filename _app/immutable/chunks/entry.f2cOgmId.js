var yt=Object.defineProperty;var wt=(e,n,t)=>n in e?yt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>wt(e,typeof n!="symbol"?n+"":n,t);import{n as de,s as _t,o as Ce,t as vt}from"./scheduler.DiXKfncd.js";new URL("sveltekit-internal://");function bt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function kt(e){return e.split("%25").map(decodeURI).join("%25")}function At(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function he({href:e}){return e.split("#")[0]}function St(e,n,t,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(t(l),i[s](l));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return r}const Et="/__data.json",Rt=".html__data.json";function It(e){return e.endsWith(".html")?e.replace(/\.html$/,Rt):e.replace(/\/$/,"")+Et}function Ut(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Lt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const He=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(ve(e)),He(e,n));const M=new Map;function Tt(e,n){const t=ve(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&M.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Lt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function xt(e,n,t){if(M.size>0){const a=ve(e,t),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(n,t)}function ve(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Ut(...r)}"]`}return a}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ct(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Nt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pe(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Pt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pe(c)}).join("")}).join("")}/?$`),params:n}}function Ot(e){return!/^\([^)]+\)$/.test(e)}function Nt(e){return e.slice(1).split("/").filter(Ot)}function $t(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){a[c.name]=l;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Ct(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return $t(f,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Ke(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Oe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}const $=[];function be(e,n=de){let t;const a=new Set;function r(s){if(_t(e,s)&&(e=s,t)){const c=!$.length;for(const l of a)l[1](),$.push(l,e);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){r(s(e))}function i(s,c=de){const l=[s,c];return a.add(l),a.size===1&&(t=n(r,o)||de),s(e),()=>{a.delete(l),a.size===0&&t&&(t(),t=null)}}return{set:r,update:o,subscribe:i}}var Ge;const T=((Ge=globalThis.__sveltekit_xwcj74)==null?void 0:Ge.base)??"";var Me;const Dt=((Me=globalThis.__sveltekit_xwcj74)==null?void 0:Me.assets)??T,Ft="1736093391034",We="sveltekit:snapshot",Ye="sveltekit:scroll",ze="sveltekit:states",Vt="sveltekit:pageurl",F="sveltekit:history",K="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Je(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ke(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ne={...X,"":X.hover};function Xe(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function ye(e,n,t){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!a||!!r||se(a,n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===J&&e.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function Z(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=j(s,"preload-code")),r===null&&(r=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),t===null&&(t=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Xe(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[a??"off"],preload_data:Ne[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function $e(e){const n=be(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const Qe={v:()=>{}};function Bt(){const{set:e,subscribe:n}=be(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Dt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Ft;return i&&(e(!0),Qe.v(),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function se(e,n,t){return e.origin!==J||!e.pathname.startsWith(n)?!0:t?!(e.pathname===n+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function je(e){const n=Gt(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Gt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=qt.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Mt=-1,Ht=-2,Kt=-3,Wt=-4,Yt=-5,zt=-6;function Jt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Mt)return;if(o===Kt)return NaN;if(o===Wt)return 1/0;if(o===Yt)return-1/0;if(o===zt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=je(g),p=new u(f);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=je(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Ht&&(c[l]=r(d))}}else{const c={};a[o]=c;for(const l in s){const d=s[l];c[l]=r(d)}}return a[o]}return r(0)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const Xt=new Set([...et]);[...Xt];function Zt(e){return e.filter(n=>n!=null)}class ie{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class tt{constructor(n,t){this.status=n,this.location=t}}class Ae extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const Qt="x-sveltekit-invalidated",en="x-sveltekit-trailing-slash";function Q(e){return e instanceof ie||e instanceof Ae?e.status:500}function tn(e){return e instanceof Ae?e.text:"Internal Error"}let b,W,ge;const nn=Ce.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ce.toString());nn?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},ge={current:!1}):(b=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},ge=new class{constructor(){x(this,"current",$state.raw(!1))}},Qe.v=()=>ge.current=!0);function an(e){Object.assign(b,e)}const rn=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Ke(Ye)??{},Y=Ke(We)??{},C={url:$e({}),page:$e({}),navigating:be(null),updated:Bt()};function Se(e){N[e]=ke()}function on(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;Y[t];)delete Y[t],t+=1}function B(e){return location.href=e.href,new Promise(()=>{})}async function nt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function De(){}let ce,we,ee,P,_e,A;const at=[],te=[];let U=null;const rt=[],sn=[];let D=[],w={branch:[],error:null,url:null},Ee=!1,ne=!1,Fe=!0,z=!1,q=!1,ot=!1,Re=!1,Ie,I,L,ae;const H=new Set;async function kn(e,n,t){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),A=e,await((o=(r=e.hooks).init)==null?void 0:o.call(r)),ce=jt(e),P=document.documentElement,_e=n,we=e.nodes[0],ee=e.nodes[1],we(),ee(),I=(i=history.state)==null?void 0:i[F],L=(s=history.state)==null?void 0:s[K],I||(I=L=Date.now(),history.replaceState({...history.state,[F]:I,[K]:L},""));const a=N[I];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await gn(_e,t):hn(location.href,{replaceState:!0}),pn()}function cn(){at.length=0,Re=!1}function st(e){te.some(n=>n==null?void 0:n.snapshot)&&(Y[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function it(e){var n;(n=Y[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=te[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Ve(){Se(I),Oe(Ye,N),st(L),Oe(We,Y)}async function ct(e,n,t,a){return G({type:"goto",url:Je(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(Re=!0)}})}async function ln(e){if(e.id!==(U==null?void 0:U.id)){const n={};H.add(n),U={id:e.id,token:n,promise:ft({...e,preload:n}).then(t=>(H.delete(n),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function me(e){const n=ce.find(t=>t.exec(ut(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function lt(e,n,t){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(b,e.props.page),Ie=new A.root({target:n,props:{...e.props,stores:C,components:te},hydrate:t,sync:!1}),it(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(r)),ne=!0}function re({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(T&&(e.pathname===T||e.pathname===T+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=bt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Zt(t).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let l={},d=!b,h=0;for(let u=0;u<Math.max(t.length,w.branch.length);u+=1){const g=t[u],f=w.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==b.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?l:b.data}),c}async function Ue({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,t);c.dependencies.add(k)}};const g={route:new Proxy(r,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(a,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:St(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},A.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,t);return s&&u(E.href),E.origin===t.origin&&(k=E.href.slice(t.origin.length)),ne?xt(k,E.href,p):Tt(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Be(e,n,t,a,r,o){if(Re)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(at.some(s=>s(new URL(i))))return!0;return!1}function Le(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function fn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function qe({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:b,constructors:[]}}}async function ft({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((U==null?void 0:U.id)===e)return H.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=r,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==oe(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=fn(w.url,t);let g=!1;const f=l.map((m,v)=>{var O;const S=w.branch[v],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Be(g,y,h,u,(O=S.server)==null?void 0:O.uses,a));return R&&(g=!0),R});if(f.some(Boolean)){try{d=await pt(t,f)}catch(m){const v=await V(m,{url:t,params:a,route:{id:e}});return H.has(o)?qe({error:v,url:t,params:a,route:r}):le({status:Q(m),error:v,url:t,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=l.map(async(m,v)=>{var fe;if(!m)return;const S=w.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Be(k,y,h,u,(fe=S.universal)==null?void 0:fe.uses,a))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Ue({loader:m[1],url:t,params:a,route:r,parent:async()=>{var Pe;const xe={};for(let ue=0;ue<v;ue+=1)Object.assign(xe,(Pe=await E[ue])==null?void 0:Pe.data);return xe},server_data_node:Le(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const _=[];for(let m=0;m<l.length;m+=1)if(l[m])try{_.push(await E[m])}catch(v){if(v instanceof tt)return{type:"redirect",location:v.location};if(H.has(o))return qe({error:await V(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let S=Q(v),R;if(p!=null&&p.includes(v))S=v.status??S,R=v.error;else if(v instanceof ie)R=v.body;else{if(await C.updated.check())return await nt(),await B(t);R=await V(v,{params:a,url:t,route:{id:r.id}})}const O=await un(m,_,i);return O?re({url:t,params:a,branch:_.slice(0,O.idx).concat(O.node),status:S,error:R,route:r}):await ht(t,{id:r.id},R,S)}else _.push(void 0);return re({url:t,params:a,branch:_,status:200,error:null,route:r,form:n?void 0:null})}async function un(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:n,url:t,route:a}){const r={};let o=null;if(A.server_loads[0]===0)try{const l=await pt(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Ee)&&await B(t)}const s=await Ue({loader:we,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Le(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return re({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function Te(e,n){if(!e||se(e,T,A.hash))return;let t;try{if(t=A.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const r=new URL(e);A.hash?r.hash=t:r.pathname=t,t=r}}catch{return}const a=ut(t);for(const r of ce){const o=r.exec(a);if(o)return{id:oe(e),invalidating:n,route:r,params:At(o),url:e}}}function ut(e){return kt(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function oe(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function dt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=mt(w,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return z||rt.forEach(s=>s(i)),r?null:o}async function G({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=De,block:d=De}){const h=Te(n,!1),y=dt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=I,g=L;l(),z=!0,ne&&C.navigating.set(W.current=y.navigation),ae=c;let f=h&&await ft(h);if(!f){if(se(n,T,A.hash))return await B(n);f=await ht(n,{id:null},await V(new Ae(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ae!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await le({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ct(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await C.updated.check()&&(await nt(),await B(n));if(cn(),Se(u),st(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const _=o?0:1,m={[F]:I+=_,[K]:L+=_,[ze]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||on(I,L)}if(U=null,f.props.page.state=i,ne){w=f.state,f.props.page&&(f.props.page.url=n);const _=(await Promise.all(sn.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){D=D.filter(v=>!_.includes(v))};_.push(m),D.push(..._)}Ie.$set(f.props),an(f.props.page),ot=!0}else lt(f,_e,!1);const{activeElement:p}=document;await vt();const k=t?t.scroll:r?ke():null;if(Fe){const _=n.hash&&document.getElementById(decodeURIComponent(A.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));k?scrollTo(k.x,k.y):_?_.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!a&&!E&&mn(),Fe=!0,f.props.page&&Object.assign(b,f.props.page),z=!1,e==="popstate"&&it(L),y.fulfil(void 0),D.forEach(_=>_(y.navigation)),C.navigating.set(W.current=null)}async function ht(e,n,t,a){return e.origin===J&&e.pathname===location.pathname&&!Ee?await le({status:a,error:t,url:e,route:n}):await B(e)}function dn(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(me(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=Ze(o,P);if(!s)return;const{url:c,external:l,download:d}=ye(s,T,A.hash);if(l||d)return;const h=Z(s),y=c&&oe(w.url)===oe(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Te(c,!1);u&&ln(u)}else i<=h.preload_code&&me(c)}function r(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=ye(o,T,A.hash);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&t.observe(o),l.preload_code===X.eager&&me(i))}}D.push(r),r()}function V(e,n){if(e instanceof ie)return e.body;const t=Q(e),a=tn(e);return A.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function hn(e,n={}){return e=new URL(Je(e)),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):ct(e,n,0)}function pn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ve(),!z){const r=mt(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};rt.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ve()}),(n=navigator.connection)!=null&&n.saveData||dn(),P.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Ze(t.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:i,download:s}=ye(a,T,A.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(A.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===he(location);if(o||c.reload&&(!y||!h)){dt({url:r,type:"link"})?z=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(q=!0,Se(I),e(r),!c.replace_state)return;q=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),G({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(se(s,T,!1))return;const c=t.target,l=Z(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),G({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[F]){const r=t.state[F];if(ae={},r===I)return;const o=N[r],i=t.state[ze]??{},s=new URL(t.state[Vt]??location.href),c=t.state[K],l=he(location)===he(w.url);if(c===L&&(ot||l)){e(s),N[I]=ke(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,Ie.$set({page:b})),I=r;return}const h=r-I;await G({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=r,L=c},block:()=>{history.go(-h)},nav_token:ae})}else if(!q){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[F]:++I,[K]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&G({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))rn.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(W.current=null)});function e(t){w.url=b.url=t,C.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:t}),C.page.notify()}}async function gn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){Ee=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Te(c,!1)||{});let l,d=!0;try{const h=a.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=gt(p.uses)),Ue({loader:A.nodes[g],url:c,params:r,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:Le(p)})}),y=await Promise.all(h),u=ce.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=re({url:c,params:r,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof tt){await B(new URL(h.location,location.href));return}l=await le({status:Q(h),error:await V(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),lt(l,e,d)}async function pt(e,n){var r;const t=new URL(e);t.pathname=It(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(en,"1"),t.searchParams.append(Qt,n.map(o=>o?"1":"0").join(""));const a=await He(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ie(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function l(y){return Jt(y,{...A.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=gt(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,_=i.get(p);i.delete(p),E?_.reject(l(E)):_.fulfil(l(k))}}}})}function gt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function mn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function mt(e,n,t,a){var c,l;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{kn as a,C as s};
