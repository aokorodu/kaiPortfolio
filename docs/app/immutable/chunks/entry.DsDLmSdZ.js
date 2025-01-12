var We=e=>{throw TypeError(e)};var Ot=(e,t,n)=>t.has(e)||We("Cannot "+n);var v=(e,t,n)=>(Ot(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?We("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{V as Re,at as Nt,as as C,I as O,a2 as N,ar as jt}from"./runtime.CwBQ-803.js";import{a as $t,b as P}from"./paths.CMBNinaX.js";import{o as Ye}from"./index-client.XrQ3M0XL.js";new URL("sveltekit-internal://");function Dt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Vt(e){return e.split("%25").map(decodeURI).join("%25")}function Ft(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Ie({href:e}){return e.split("#")[0]}function Bt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));t();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const qt="/__data.json",Gt=".html__data.json";function Mt(e){return e.endsWith(".html")?e.replace(/\.html$/,Gt):e.replace(/\/$/,"")+qt}function Ht(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Kt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const it=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete(Oe(e)),it(e,t));const W=new Map;function Wt(e,t){const n=Oe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Kt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,t)}function Yt(e,t,n){if(W.size>0){const r=Oe(e,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(t,n)}function Oe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Ht(...a)}"]`}return r}const zt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Jt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Zt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ue(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=zt.exec(c),[,h,y,u,g]=d;return t.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Ue(c)}).join("")}).join("")}/?$`),params:t}}function Xt(e){return!/^\([^)]+\)$/.test(e)}function Zt(e){return e.slice(1).split("/").filter(Xt)}function Qt(e,t,n){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function en({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Jt(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return Qt(f,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function ct(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function ze(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const F=[];function Ne(e,t=Re){let n=null;const r=new Set;function a(s){if(Nt(e,s)&&(e=s,n)){const c=!F.length;for(const l of r)l[1](),F.push(l,e);if(c){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function o(s){a(s(e))}function i(s,c=Re){const l=[s,c];return r.add(l),r.size===1&&(n=t(a,o)||Re),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}const tn="1736702881969",lt="sveltekit:snapshot",ft="sveltekit:scroll",ut="sveltekit:states",nn="sveltekit:pageurl",q="sveltekit:history",J="sveltekit:navigation",ue={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},fe=location.origin;function dt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function je(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Je={...ue,"":ue.hover};function ht(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function pt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=ht(e)}}function xe(e,t,n){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!r||!!a||be(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===fe&&e.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function de(e){let t=null,n=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),t===null&&(t=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=ht(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Je[r??"off"],preload_data:Je[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Xe(e){const t=Ne(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const gt={v:()=>{}};function rn(){const{set:e,subscribe:t}=Ne(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${$t}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==tn;return i&&(e(!0),gt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function be(e,t,n){return e.origin!==fe||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Ze(e){const t=on(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const an="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function on(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=an.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const sn=-1,cn=-2,ln=-3,fn=-4,un=-5,dn=-6;function hn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(o,i=!1){if(o===sn)return;if(o===ln)return NaN;if(o===fn)return 1/0;if(o===un)return-1/0;if(o===dn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=t==null?void 0:t[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=Ze(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ze(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==cn&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const mt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...mt];const pn=new Set([...mt]);[...pn];function gn(e){return e.filter(t=>t!=null)}class ve{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class yt{constructor(t,n){this.status=t,this.location=n}}class $e extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const mn="x-sveltekit-invalidated",yn="x-sveltekit-trailing-slash";function he(e){return e instanceof ve||e instanceof $e?e.status:500}function wn(e){return e instanceof $e?e.text:"Internal Error"}let U,X,Le;const _n=Ye.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ye.toString());var ee,te,ne,re,ae,oe,se,ie,at,ce,ot,le,st;_n?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Le={current:!1}):(U=new(at=class{constructor(){x(this,ee,C({}));x(this,te,C(null));x(this,ne,C(null));x(this,re,C({}));x(this,ae,C({id:null}));x(this,oe,C({}));x(this,se,C(-1));x(this,ie,C(new URL("https://example.com")))}get data(){return O(v(this,ee))}set data(t){N(v(this,ee),t)}get form(){return O(v(this,te))}set form(t){N(v(this,te),t)}get error(){return O(v(this,ne))}set error(t){N(v(this,ne),t)}get params(){return O(v(this,re))}set params(t){N(v(this,re),t)}get route(){return O(v(this,ae))}set route(t){N(v(this,ae),t)}get state(){return O(v(this,oe))}set state(t){N(v(this,oe),t)}get status(){return O(v(this,se))}set status(t){N(v(this,se),t)}get url(){return O(v(this,ie))}set url(t){N(v(this,ie),t)}},ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,at),X=new(ot=class{constructor(){x(this,ce,C(null))}get current(){return O(v(this,ce))}set current(t){N(v(this,ce),t)}},ce=new WeakMap,ot),Le=new(st=class{constructor(){x(this,le,C(!1))}get current(){return O(v(this,le))}set current(t){N(v(this,le),t)}},le=new WeakMap,st),gt.v=()=>Le.current=!0);function bn(e){Object.assign(U,e)}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ct(ft)??{},Z=ct(lt)??{},$={url:Xe({}),page:Xe({}),navigating:Ne(null),updated:rn()};function De(e){V[e]=je()}function An(e,t){let n=e+1;for(;V[n];)delete V[n],n+=1;for(n=t+1;Z[n];)delete Z[n],n+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function wt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(P||"/");e&&await e.update()}}function Qe(){}let Ae,Pe,pe,j,Ce,S;const _t=[],ge=[];let L=null;const bt=new Set,Sn=new Set,Y=new Set;let w={branch:[],error:null,url:null},Ve=!1,me=!1,et=!0,Q=!1,H=!1,vt=!1,Fe=!1,At,I,T,ye;const z=new Set;async function Fn(e,t,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),S=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),Ae=en(e),j=document.documentElement,Ce=t,Pe=e.nodes[0],pe=e.nodes[1],Pe(),pe(),I=(i=history.state)==null?void 0:i[q],T=(s=history.state)==null?void 0:s[J],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[J]:T},""));const r=V[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await xn(Ce,n):Ln(location.href,{replaceState:!0}),Tn()}function kn(){_t.length=0,Fe=!1}function St(e){ge.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=ge.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function kt(e){var t;(t=Z[e])==null||t.forEach((n,r)=>{var a,o;(o=(a=ge[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function tt(){De(I),ze(ft,V),St(T),ze(lt,Z)}async function Et(e,t,n,r){return K({type:"goto",url:dt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Fe=!0)}})}async function En(e){if(e.id!==(L==null?void 0:L.id)){const t={};z.add(t),L={id:e.id,token:t,promise:It({...e,preload:t}).then(n=>(z.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Te(e){const t=Ae.find(n=>n.exec(Ut(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n==null?void 0:n[1]()))}function Rt(e,t,n){var o;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),At=new S.root({target:t,props:{...e.props,stores:$,components:ge},hydrate:n,sync:!1}),kt(T);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),me=!0}function we({url:e,params:t,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(P&&(e.pathname===P||e.pathname===P+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=Dt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:o},props:{constructors:gn(n).map(u=>u.node.component),page:Me(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,h=0;for(let u=0;u<Math.max(n.length,w.branch.length);u+=1){const g=n[u],f=w.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:t,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:U.data}),c}async function Be({loader:e,parent:t,url:n,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:A}=new URL(p,n);c.dependencies.add(A)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Bt(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},S.hash),async fetch(f,p){let A;f instanceof Request?(A=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):A=f;const E=new URL(A,n);return s&&u(E.href),E.origin===n.origin&&(A=E.href.slice(n.origin.length)),me?Yt(A,E.href,p):Wt(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),t()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function nt(e,t,n,r,a,o){if(Fe)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(_t.some(s=>s(new URL(i))))return!0;return!1}function qe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Rn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),o=t.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function rt({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Me(U),constructors:[]}}}async function It({id:e,invalidating:t,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===e)return z.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==_e(w.url):!1,y=w.route?a.id!==w.route.id:!1,u=Rn(w.url,n);let g=!1;const f=l.map((m,_)=>{var D;const k=w.branch[_],R=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||nt(g,y,h,u,(D=k.server)==null?void 0:D.uses,r));return R&&(g=!0),R});if(f.some(Boolean)){try{d=await xt(n,f)}catch(m){const _=await G(m,{url:n,params:r,route:{id:e}});return z.has(o)?rt({error:_,url:n,params:r,route:a}):Se({status:he(m),error:_,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let A=!1;const E=l.map(async(m,_)=>{var ke;if(!m)return;const k=w.branch[_],R=p==null?void 0:p[_];if((!R||R.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!nt(A,y,h,u,(ke=k.universal)==null?void 0:ke.uses,r))return k;if(A=!0,(R==null?void 0:R.type)==="error")throw R;return Be({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Ke;const He={};for(let Ee=0;Ee<_;Ee+=1)Object.assign(He,(Ke=await E[Ee])==null?void 0:Ke.data);return He},server_data_node:qe(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of E)m.catch(()=>{});const b=[];for(let m=0;m<l.length;m+=1)if(l[m])try{b.push(await E[m])}catch(_){if(_ instanceof yt)return{type:"redirect",location:_.location};if(z.has(o))return rt({error:await G(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=he(_),R;if(p!=null&&p.includes(_))k=_.status??k,R=_.error;else if(_ instanceof ve)R=_.body;else{if(await $.updated.check())return await wt(),await M(n);R=await G(_,{params:r,url:n,route:{id:a.id}})}const D=await In(m,b,i);return D?we({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:k,error:R,route:a}):await Tt(n,{id:a.id},R,k)}else b.push(void 0);return we({url:n,params:r,branch:b,status:200,error:null,route:a,form:t?void 0:null})}async function In(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Se({status:e,error:t,url:n,route:r}){const a={};let o=null;if(S.server_loads[0]===0)try{const l=await xt(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==fe||n.pathname!==location.pathname||Ve)&&await M(n)}const s=await Be({loader:Pe,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qe(o)}),c={node:await pe(),loader:pe,universal:null,server:null,data:null};return we({url:n,params:a,branch:[s,c],status:e,error:t,route:null})}function Ge(e,t){if(!e||be(e,P,S.hash))return;let n;try{if(n=S.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const a=new URL(e);S.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=Ut(n);for(const a of Ae){const o=a.exec(r);if(o)return{id:_e(e),invalidating:t,route:a,params:Ft(o),url:e}}}function Ut(e){return Vt(S.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(P.length))||"/"}function _e(e){return(S.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Lt({url:e,type:t,intent:n,delta:r}){let a=!1;const o=Ct(w,n,e,t);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Q||bt.forEach(s=>s(i)),a?null:o}async function K({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Qe,block:d=Qe}){const h=Ge(t,!1),y=Lt({url:t,type:e,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=I,g=T;l(),Q=!0,me&&$.navigating.set(X.current=y.navigation),ye=c;let f=h&&await It(h);if(!f){if(be(t,P,S.hash))return await M(t);f=await Tt(t,{id:null},await G(new $e(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(h==null?void 0:h.url)||t,ye!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await Se({status:500,error:await G(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Et(new URL(f.location,t).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await wt(),await M(t));if(kn(),De(u),St(g),f.props.page.url.pathname!==t.pathname&&(t.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const b=o?0:1,m={[q]:I+=b,[J]:T+=b,[ut]:i};(o?history.replaceState:history.pushState).call(history,m,"",t),o||An(I,T)}if(L=null,f.props.page.state=i,me){w=f.state,f.props.page&&(f.props.page.url=t);const b=(await Promise.all(Array.from(Sn,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){b.forEach(_=>{Y.delete(_)})};b.push(m),b.forEach(_=>{Y.add(_)})}At.$set(f.props),bn(f.props.page),vt=!0}else Rt(f,Ce,!1);const{activeElement:p}=document;await jt();const A=n?n.scroll:a?je():null;if(et){const b=t.hash&&document.getElementById(decodeURIComponent(S.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));A?scrollTo(A.x,A.y):b?b.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&Pn(),et=!0,f.props.page&&Object.assign(U,f.props.page),Q=!1,e==="popstate"&&kt(T),y.fulfil(void 0),Y.forEach(b=>b(y.navigation)),$.navigating.set(X.current=null)}async function Tt(e,t,n,r){return e.origin===fe&&e.pathname===location.pathname&&!Ve?await Se({status:r,error:n,url:e,route:t}):await M(e)}function Un(){let e;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Te(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=pt(o,j);if(!s)return;const{url:c,external:l,download:d}=xe(s,P,S.hash);if(l||d)return;const h=de(s),y=c&&_e(w.url)===_e(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Ge(c,!1);u&&En(u)}else i<=h.preload_code&&Te(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=xe(o,P,S.hash);if(s||c)continue;const l=de(o);l.reload||(l.preload_code===ue.viewport&&n.observe(o),l.preload_code===ue.eager&&Te(i))}}Y.add(a),a()}function G(e,t){if(e instanceof ve)return e.body;const n=he(e),r=wn(e);return S.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Ln(e,t={}){return e=new URL(dt(e)),e.origin!==fe?Promise.reject(new Error("goto: invalid URL")):Et(e,t,0)}function Tn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(tt(),!Q){const a=Ct(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};bt.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&tt()}),(t=navigator.connection)!=null&&t.saveData||Un(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=pt(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=xe(r,P,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=de(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Ie(location);if(o||c.reload&&(!y||!h)){Lt({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(H=!0,De(I),e(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(be(s,P,!1))return;const c=n.target,l=de(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),K({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(ye={},a===I)return;const o=V[a],i=n.state[ut]??{},s=new URL(n.state[nn]??location.href),c=n.state[J],l=Ie(location)===Ie(w.url);if(c===T&&(vt||l)){i!==U.state&&(U.state=i),e(s),V[I]=je(),o&&scrollTo(o.x,o.y),I=a;return}const h=a-I;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,T=c},block:()=>{history.go(-h)},nav_token:ye})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++I,[J]:T},"",location.href)):S.hash&&w.url.hash===location.hash&&K({type:"goto",url:w.url})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function e(n){w.url=U.url=n,$.page.set(Me(U)),$.page.notify()}}async function xn(e,{status:t=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Ve=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ge(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=Pt(p.uses)),Be({loader:S.nodes[g],url:c,params:a,route:o,parent:async()=>{const A={};for(let E=0;E<f;E+=1)Object.assign(A,(await h[E]).data);return A},server_data_node:qe(p)})}),y=await Promise.all(h),u=Ae.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=we({url:c,params:a,branch:y,status:t,error:n,form:s,route:u??null})}catch(h){if(h instanceof yt){await M(new URL(h.location,location.href));return}l=await Se({status:he(h),error:await G(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Rt(l,e,d)}async function xt(e,t){var a;const n=new URL(e);n.pathname=Mt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(yn,"1"),n.searchParams.append(mn,t.map(o=>o?"1":"0").join(""));const r=await it(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ve(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return hn(y,{...S.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Pt(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:A,error:E}=f,b=i.get(p);i.delete(p),E?b.reject(l(E)):b.fulfil(l(A))}}}})}function Pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Pn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Ct(e,t,n,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:o}}function Me(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{Fn as a,U as p,$ as s,Le as u};
