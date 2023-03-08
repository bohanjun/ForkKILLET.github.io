/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=window,q=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),F=new WeakMap;let ht=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=F.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(t,e))}return e}toString(){return this.cssText}};const vt=e=>new ht(typeof e=="string"?e:e+"",void 0,J),_t=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new ht(s,e,J)},$t=(e,t)=>{q?e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):t.forEach(s=>{const i=document.createElement("style"),r=x.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)})},Q=q?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return vt(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const H=window,Z=H.trustedTypes,gt=Z?Z.emptyScript:"",X=H.reactiveElementPolyfillSupport,V={toAttribute(e,t){switch(t){case Boolean:e=e?gt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},at=(e,t)=>t!==e&&(t==t||e==e),Y={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:at};let A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const i=this._$Ep(s,t);i!==void 0&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,t=Y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Q(i))}else e!==void 0&&t.push(Q(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=Y){var i;const r=this.constructor._$Ep(e,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:V).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:V;this._$El=r,this[r]=o.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||at)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:A}),((D=H.reactiveElementVersions)!==null&&D!==void 0?D:H.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const k=window,S=k.trustedTypes,tt=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+f,ft=`<${ct}>`,E=document,T=(e="")=>E.createComment(e),P=e=>e===null||typeof e!="object"&&typeof e!="function",dt=Array.isArray,mt=e=>dt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,m=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,ut=/^(?:script|style|textarea|title)$/i,At=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),yt=At(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),nt=new WeakMap,y=E.createTreeWalker(E,129,null,!1),St=(e,t)=>{const s=e.length-1,i=[];let r,n=t===2?"<svg>":"",o=w;for(let l=0;l<s;l++){const c=e[l];let g,a,d=-1,$=0;for(;$<c.length&&(o.lastIndex=$,a=o.exec(c),a!==null);)$=o.lastIndex,o===w?a[1]==="!--"?o=et:a[1]!==void 0?o=st:a[2]!==void 0?(ut.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=m):a[3]!==void 0&&(o=m):o===m?a[0]===">"?(o=r!=null?r:w,d=-1):a[1]===void 0?d=-2:(d=o.lastIndex-a[2].length,g=a[1],o=a[3]===void 0?m:a[3]==='"'?rt:it):o===rt||o===it?o=m:o===et||o===st?o=w:(o=m,r=void 0);const R=o===m&&e[l+1].startsWith("/>")?" ":"";n+=o===w?c+ft:d>=0?(i.push(g),c.slice(0,d)+"$lit$"+c.slice(d)+f+R):c+f+(d===-2?(i.push(void 0),l):R)}const h=n+(e[s]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tt!==void 0?tt.createHTML(h):h,i]};class N{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,o=0;const h=t.length-1,l=this.parts,[c,g]=St(t,s);if(this.el=N.createElement(c,i),y.currentNode=this.el.content,s===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(r=y.nextNode())!==null&&l.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const a=[];for(const d of r.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(f)){const $=g[o++];if(a.push(d),$!==void 0){const R=r.getAttribute($.toLowerCase()+"$lit$").split(f),M=/([.?@])?(.*)/.exec($);l.push({type:1,index:n,name:M[2],strings:R,ctor:M[1]==="."?bt:M[1]==="?"?wt:M[1]==="@"?Ut:z})}else l.push({type:6,index:n})}for(const d of a)r.removeAttribute(d)}if(ut.test(r.tagName)){const a=r.textContent.split(f),d=a.length-1;if(d>0){r.textContent=S?S.emptyScript:"";for(let $=0;$<d;$++)r.append(a[$],T()),y.nextNode(),l.push({type:2,index:++n});r.append(a[d],T())}}}else if(r.nodeType===8)if(r.data===ct)l.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(f,a+1))!==-1;)l.push({type:7,index:n}),a+=f.length-1}n++}}static createElement(t,s){const i=E.createElement("template");return i.innerHTML=t,i}}function C(e,t,s=e,i){var r,n,o,h;if(t===b)return t;let l=i!==void 0?(r=s._$Co)===null||r===void 0?void 0:r[i]:s._$Cl;const c=P(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,s,i)),i!==void 0?((o=(h=s)._$Co)!==null&&o!==void 0?o:h._$Co=[])[i]=l:s._$Cl=l),l!==void 0&&(t=C(e,l._$AS(e,t.values),l,i)),t}class Et{constructor(t,s){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var s;const{el:{content:i},parts:r}=this._$AD,n=((s=t==null?void 0:t.creationScope)!==null&&s!==void 0?s:E).importNode(i,!0);y.currentNode=n;let o=y.nextNode(),h=0,l=0,c=r[0];for(;c!==void 0;){if(h===c.index){let g;c.type===2?g=new I(o,o.nextSibling,this,t):c.type===1?g=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(g=new Ot(o,this,t)),this.u.push(g),c=r[++l]}h!==(c==null?void 0:c.index)&&(o=y.nextNode(),h++)}return n}p(t){let s=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class I{constructor(t,s,i,r){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cm=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var t,s;return(s=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&s!==void 0?s:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=C(this,t,s),P(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mt(t)?this.k(t):this.g(t)}O(t,s=this._$AB){return this._$AA.parentNode.insertBefore(t,s)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=N.createElement(r.h,this.options)),r);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===n)this._$AH.p(i);else{const o=new Et(n,this),h=o.v(this.options);o.p(i),this.T(h),this._$AH=o}}_$AC(t){let s=nt.get(t.strings);return s===void 0&&nt.set(t.strings,s=new N(t)),s}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of t)r===s.length?s.push(i=new I(this.O(T()),this.O(T()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,s);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var s;this._$AM===void 0&&(this._$Cm=t,(s=this._$AP)===null||s===void 0||s.call(this,t))}}let z=class{constructor(e,t,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const r=this.strings;let n=!1;if(r===void 0)e=C(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==b,n&&(this._$AH=e);else{const o=e;let h,l;for(e=r[0],h=0;h<r.length-1;h++)l=C(this,o[s+h],t,h),l===b&&(l=this._$AH[h]),n||(n=!P(l)||l!==this._$AH[h]),l===u?e=u:e!==u&&(e+=(l!=null?l:"")+r[h+1]),this._$AH[h]=l}n&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}};class bt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Ct=S?S.emptyScript:"";class wt extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ct):this.element.removeAttribute(this.name)}}class Ut extends z{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){var i;if((t=(i=C(this,t,s,0))!==null&&i!==void 0?i:u)===b)return;const r=this._$AH,n=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==u&&(r===u||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;typeof this._$AH=="function"?this._$AH.call((i=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ot=k.litHtmlPolyfillSupport;ot==null||ot(N,I),((j=k.litHtmlVersions)!==null&&j!==void 0?j:k.litHtmlVersions=[]).push("2.6.1");const Tt=(e,t,s)=>{var i,r;const n=(i=s==null?void 0:s.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const h=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=o=new I(t.insertBefore(T(),h),h,void 0,s!=null?s:{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,G;let U=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return b}};U.finalized=!0,U._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:U});const lt=globalThis.litElementPolyfillSupport;lt==null||lt({LitElement:U});((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=e=>t=>typeof t=="function"?((s,i)=>(customElements.define(s,i),i))(e,t):((s,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(o){customElements.define(s,o)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function _(e){return(t,s)=>s!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(e,t,s):Nt(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;((W=window.HTMLSlotElement)===null||W===void 0?void 0:W.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=e=>(...t)=>({_$litDirective$:e,values:t});let xt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(e,t)=>{var s,i;const r=e._$AN;if(r===void 0)return!1;for(const n of r)(i=(s=n)._$AO)===null||i===void 0||i.call(s,t,!1),O(n,t);return!0},L=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},pt=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Lt(t)}};function Ht(e){this._$AN!==void 0?(L(this),this._$AM=e,pt(this)):this._$AM=e}function kt(e,t=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)O(i[n],!1),L(i[n]);else i!=null&&(O(i,!1),L(i));else O(this,e)}const Lt=e=>{var t,s,i,r;e.type==Rt.CHILD&&((t=(i=e)._$AP)!==null&&t!==void 0||(i._$AP=kt),(s=(r=e)._$AQ)!==null&&s!==void 0||(r._$AQ=Ht))};class zt extends xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),pt(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),s&&(O(this,t),L(this))}setValue(t){if(It(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=()=>new Yt;class Yt{}const K=new WeakMap,jt=Mt(class extends zt{render(e){return u}update(e,[t]){var s;const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.rt(this.ct=e.element)),u}rt(e){var t;if(typeof this.Y=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let i=K.get(s);i===void 0&&(i=new WeakMap,K.set(s,i)),i.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,s;return typeof this.Y=="function"?(t=K.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.Y):(s=this.Y)===null||s===void 0?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Bt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,v=(e,t,s,i)=>{for(var r=i>1?void 0:i?Gt(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(i?o(t,s,r):o(r))||r);return i&&r&&Bt(t,s,r),r};let p=class extends U{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=Dt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var e;return(e=this._iframeRef)==null?void 0:e.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return`[giscus] An error occurred. Error message: "${e}".`}setupSession(){const e=location.href,t=new URL(e),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")||"";if(this.__session="",i){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(s)try{this.__session=JSON.parse(s)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(r==null?void 0:r.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(e){if(e.origin!==this.host)return;const{data:t}=e;if(!(typeof t=="object"&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut){console.log("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;const s=t.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(s)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(s.includes("Discussion not found")){console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(e){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:e},this.host)}updateConfig(){const e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;(e=this.iframeRef)==null||e.addEventListener("load",()=>{var t;(t=this.iframeRef)==null||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(e,t,s){if(!this.hasUpdated||e==="host"){super.requestUpdate(e,t,s);return}this.updateConfig()}getMetaContent(e,t=!1){const s=t?`meta[property='og:${e}'],`:"",i=document.querySelector(s+`meta[name='${e}']`);return i?i.content:""}_getCleanedUrl(){const e=new URL(location.href);return e.searchParams.delete("giscus"),e.hash="",e}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"&&this.term||""}getIframeSrc(){const e=this._getCleanedUrl().toString(),t=`${e}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||e,r={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i},n=this.host||this.GISCUS_DEFAULT_HOST,o=this.lang?`/${this.lang}`:"",h=new URLSearchParams(r);return`${n}${o}/widget?${h}`}render(){return yt`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${jt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};p.styles=_t`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;v([_({reflect:!0})],p.prototype,"host",2);v([_({reflect:!0})],p.prototype,"repo",2);v([_({reflect:!0})],p.prototype,"repoId",2);v([_({reflect:!0})],p.prototype,"category",2);v([_({reflect:!0})],p.prototype,"categoryId",2);v([_({reflect:!0})],p.prototype,"mapping",2);v([_({reflect:!0})],p.prototype,"term",2);v([_({reflect:!0})],p.prototype,"strict",2);v([_({reflect:!0})],p.prototype,"reactionsEnabled",2);v([_({reflect:!0})],p.prototype,"emitMetadata",2);v([_({reflect:!0})],p.prototype,"inputPosition",2);v([_({reflect:!0})],p.prototype,"theme",2);v([_({reflect:!0})],p.prototype,"lang",2);v([_({reflect:!0})],p.prototype,"loading",2);p=v([Pt("giscus-widget")],p);export{p as GiscusWidget};
