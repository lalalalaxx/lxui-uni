import{_ as M}from"./ContentTitle.C2Y5FpJ2.js";import{n as H,r as k,s as R,q as T,u as L,v as O,g as N,x as E,y as K,z as I,m as q,A as V,B as W,C as $,D as x,E as J,F as Q,c as G,b as X,G as Y,H as Z,o as tt,_ as et}from"./entry.BbXBtsTw.js";const P=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function st(r,a){a?a={...P,...a}:a=P;const s=U(a);return s.dispatch(r),s.toString()}const rt=Object.freeze(["prototype","__proto__","constructor"]);function U(r){let a="",s=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let i="";const h=n.length;h<10?i="unknown:["+n+"]":i=n.slice(8,h-1),i=i.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):r.ignoreUnknown||this.unkown(t,i);else{let l=Object.keys(t);r.unorderedObjects&&(l=l.sort());let o=[];r.respectType!==!1&&!A(t)&&(o=rt),r.excludeKeys&&(l=l.filter(u=>!r.excludeKeys(u)),o=o.filter(u=>!r.excludeKeys(u))),e("object:"+(l.length+o.length)+":");const y=u=>{this.dispatch(u),e(":"),r.excludeValues||this.dispatch(t[u]),e(",")};for(const u of l)y(u);for(const u of o)y(u)}},array(t,n){if(n=n===void 0?r.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const c of t)this.dispatch(c);return}const i=new Map,h=t.map(c=>{const l=U(r);l.dispatch(c);for(const[o,y]of l.getContext())i.set(o,y);return l.toString()});return s=i,h.sort(),this.array(h,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),A(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const j="[native code] }",nt=j.length;function A(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-nt)===j}class w{constructor(a,s){a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||at).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const at={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},it={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,h=t<<16|n<<8|i;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(a.charAt(h>>>6*(3-c)&63))}return s.join("")}},ot={parse(r){const a=r.length,s=[];for(let e=0;e<a;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new w(s,a)}},ct={parse(r){return ot.parse(unescape(encodeURIComponent(r)))}};class ut{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=ct.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new w(s,n)}}class lt extends ut{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const F=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],dt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class ft extends lt{constructor(){super(...arguments),this._hash=new w([...F])}reset(){super.reset(),this._hash=new w([...F])}_doProcessBlock(a,s){const e=this._hash.words;let t=e[0],n=e[1],i=e[2],h=e[3],c=e[4],l=e[5],o=e[6],y=e[7];for(let u=0;u<64;u++){if(u<16)v[u]=a[s+u]|0;else{const _=v[u-15],D=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,p=v[u-2],C=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;v[u]=D+v[u-7]+C+v[u-16]}const b=c&l^~c&o,B=t&n^t&i^n&i,f=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),m=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),d=y+m+b+dt[u]+v[u],g=f+B;y=o,o=l,l=c,c=h+d|0,h=i,i=n,n=t,t=d+g|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+i|0,e[3]=e[3]+h|0,e[4]=e[4]+c|0,e[5]=e[5]+l|0,e[6]=e[6]+o|0,e[7]=e[7]+y|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ht(r){return new ft().finalize(r).toString(it)}function pt(r,a={}){const s=typeof r=="string"?r:st(r,a);return ht(s).slice(0,10)}const yt=r=>r==="defer"||r===!1;function gt(...r){var B;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=E(),i=e,h=()=>null,c=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];t.server=t.server??!0,t.default=t.default??h,t.getCachedData=t.getCachedData??c,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??H.deep,t.dedupe=t.dedupe??"cancel";const l=()=>![null,void 0].includes(t.getCachedData(s));if(!n._asyncData[s]||!t.immediate){(B=n.payload._errors)[s]??(B[s]=null);const f=t.deep?k:R;n._asyncData[s]={data:f(t.getCachedData(s)??t.default()),pending:k(!l()),error:T(n.payload._errors,s),status:k("idle")}}const o={...n._asyncData[s]};o.refresh=o.execute=(f={})=>{if(n._asyncDataPromises[s]){if(yt(f.dedupe??t.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((f._initial||n.isHydrating&&f._initial!==!1)&&l())return Promise.resolve(t.getCachedData(s));o.pending.value=!0,o.status.value="pending";const m=new Promise((d,g)=>{try{d(i(n))}catch(_){g(_)}}).then(d=>{if(m.cancelled)return n._asyncDataPromises[s];let g=d;t.transform&&(g=t.transform(d)),t.pick&&(g=mt(g,t.pick)),n.payload.data[s]=g,o.data.value=g,o.error.value=null,o.status.value="success"}).catch(d=>{if(m.cancelled)return n._asyncDataPromises[s];o.error.value=K(d),o.data.value=I(t.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=m,n._asyncDataPromises[s]};const y=()=>o.refresh({_initial:!0}),u=t.server!==!1&&n.payload.serverRendered;{const f=q();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const d=f._nuxtOnBeforeMountCbs;f&&(L(()=>{d.forEach(g=>{g()}),d.splice(0,d.length)}),O(()=>d.splice(0,d.length)))}u&&n.isHydrating&&(o.error.value||l())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?f._nuxtOnBeforeMountCbs.push(y):t.immediate&&y(),t.watch&&N(t.watch,()=>o.refresh());const m=n.hook("app:data:refresh",async d=>{(!d||d.includes(s))&&await o.refresh()});f&&O(m)}const b=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(b,o),b}function mt(r,a){const s={};for(const e of a)s[e]=r[e];return s}function _t(r,a,s){const[e={},t]=[{},a],n=V(()=>x(r)),i=e.key||pt([t,typeof n.value=="string"?n.value:"",...wt(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);const h=i===t?"$f"+i:i;if(!e.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:l,default:o,transform:y,pick:u,watch:b,immediate:B,getCachedData:f,deep:m,dedupe:d,...g}=e,_=W({...$,...g,cache:typeof e.cache=="boolean"?void 0:e.cache}),D={server:c,lazy:l,default:o,transform:y,pick:u,immediate:B,getCachedData:f,deep:m,dedupe:d,watch:b===!1?[]:[_,n,...b||[]]};let p;return gt(h,()=>{var z;(z=p==null?void 0:p.abort)==null||z.call(p),p=typeof AbortController<"u"?new AbortController:{};const S=x(e.timeout);return S&&setTimeout(()=>p.abort(),S),(e.$fetch||globalThis.$fetch)(n.value,{signal:p.signal,..._})},D)}function wt(r){var s;const a=[((s=x(r.method))==null?void 0:s.toUpperCase())||"GET",x(r.baseURL)];for(const e of[r.params||r.query]){const t=x(e);if(!t)continue;const n={};for(const[i,h]of Object.entries(t))n[x(i)]=x(h);a.push(n)}return a}const bt=()=>(console.log("123"),{num:1}),vt=Z('<div class="home" data-aos="fade-up" data-v-32747cd7><span class="code-box" data-v-32747cd7>lxui-ui</span> 是一款基于uniapp(vue3)的前端UI组件库,主要用于快速开发uniapp项目,根据实际的需求封装组件,减少重复代码,提高开发效率。 <h4 data-v-32747cd7>版权</h4><span class="code-box" data-v-32747cd7>lxui-ui</span> 遵循MIT开源协议,意味着您无需支付任何费用,无需授权,即可将lxui-ui应用到您的产品中。 <h4 data-v-32747cd7>特点</h4><ul style="padding-left:30px;" data-v-32747cd7><li data-v-32747cd7>基于uniapp开发的ui组件</li><li data-v-32747cd7>基于vue3开发</li><li data-v-32747cd7>支持按需导入（推荐）</li></ul><h4 data-v-32747cd7>贡献</h4> 如果您在使用 <span class="code-box" data-v-32747cd7>lxui-ui</span> 时有好的想法，或者遇到问题，欢迎交流。 <br data-v-32747cd7> 加QQ交流群: 965740323 </div>',1),xt=J({__name:"index",async setup(r){let a,s;const{data:e}=([a,s]=Q(()=>_t("/api/news/2","$pqtWcjQkdb")),a=await a,s(),a);return console.log(e,"data"),console.log(bt()),(t,n)=>{const i=M;return tt(),G(Y,null,[X(i,{title:"介绍"}),vt],64)}}}),kt=et(xt,[["__scopeId","data-v-32747cd7"]]);export{kt as default};
