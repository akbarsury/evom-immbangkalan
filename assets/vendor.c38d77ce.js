function Lc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hy=Lc(uy);function Mf(t){return!!t||t===""}function Mc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=De(r)?py(r):Mc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(De(t))return t;if(Se(t))return t}}const fy=/;(?![^(]*\))/g,dy=/:(.+)/;function py(t){const e={};return t.split(fy).forEach(n=>{if(n){const r=n.split(dy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Uc(t){let e="";if(De(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=Uc(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function gy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=fo(t[r],e[r]);return n}function fo(t,e){if(t===e)return!0;let n=Au(t),r=Au(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=q(t),r=q(e),n||r)return n&&r?gy(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!fo(t[o],e[o]))return!1}}return String(t)===String(e)}function my(t,e){return t.findIndex(n=>fo(n,e))}const eR=t=>De(t)?t:t==null?"":q(t)||Se(t)&&(t.toString===Vf||!Y(t.toString))?JSON.stringify(t,Uf,2):String(t),Uf=(t,e)=>e&&e.__v_isRef?Uf(t,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:go(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!q(e)&&!$f(e)?String(e):e,de={},dr=[],Et=()=>{},yy=()=>!1,vy=/^on[^a-z]/,po=t=>vy.test(t),Fc=t=>t.startsWith("onUpdate:"),ze=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_y=Object.prototype.hasOwnProperty,re=(t,e)=>_y.call(t,e),q=Array.isArray,pr=t=>mo(t)==="[object Map]",go=t=>mo(t)==="[object Set]",Au=t=>t instanceof Date,Y=t=>typeof t=="function",De=t=>typeof t=="string",$c=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Ff=t=>Se(t)&&Y(t.then)&&Y(t.catch),Vf=Object.prototype.toString,mo=t=>Vf.call(t),wy=t=>mo(t).slice(8,-1),$f=t=>mo(t)==="[object Object]",Bc=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ey=/-(\w)/g,Ut=yo(t=>t.replace(Ey,(e,n)=>n?n.toUpperCase():"")),Ty=/\B([A-Z])/g,xr=yo(t=>t.replace(Ty,"-$1").toLowerCase()),vo=yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=yo(t=>t?`on${vo(t)}`:""),ys=(t,e)=>!Object.is(t,e),vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ni=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const Iy=()=>Cu||(Cu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Bt;class by{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Bt&&(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Bt=this,e()}finally{Bt=this.parent}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Sy(t,e=Bt){e&&e.active&&e.effects.push(t)}const jc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bf=t=>(t.w&gn)>0,jf=t=>(t.n&gn)>0,Ay=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},Cy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Bf(s)&&!jf(s)?s.delete(t):e[n++]=s,s.w&=~gn,s.n&=~gn}e.length=n}},Ua=new WeakMap;let Zr=0,gn=1;const Fa=30;let Pt;const xn=Symbol(""),Va=Symbol("");class qc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sy(this,r)}run(){if(!this.active)return this.fn();let e=Pt,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,hn=!0,gn=1<<++Zr,Zr<=Fa?Ay(this):Ru(this),this.fn()}finally{Zr<=Fa&&Cy(this),gn=1<<--Zr,Pt=this.parent,hn=n,this.parent=void 0}}stop(){this.active&&(Ru(this),this.onStop&&this.onStop(),this.active=!1)}}function Ru(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const qf=[];function Lr(){qf.push(hn),hn=!1}function Mr(){const t=qf.pop();hn=t===void 0?!0:t}function dt(t,e,n){if(hn&&Pt){let r=Ua.get(t);r||Ua.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=jc()),Hf(s)}}function Hf(t,e){let n=!1;Zr<=Fa?jf(t)||(t.n|=gn,n=!Bf(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function Gt(t,e,n,r,s,i){const o=Ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Bc(n)&&a.push(o.get("length")):(a.push(o.get(xn)),pr(t)&&a.push(o.get(Va)));break;case"delete":q(t)||(a.push(o.get(xn)),pr(t)&&a.push(o.get(Va)));break;case"set":pr(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&$a(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$a(jc(c))}}function $a(t,e){for(const n of q(t)?t:[...t])(n!==Pt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ry=Lc("__proto__,__v_isRef,__isVue"),Kf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter($c)),ky=Hc(),Ny=Hc(!1,!0),Oy=Hc(!0),ku=Py();function Py(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lr();const r=oe(this)[e].apply(this,n);return Mr(),r}}),t}function Hc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Gy:Qf:e?Jf:Gf).get(r))return r;const o=q(r);if(!t&&o&&re(ku,s))return Reflect.get(ku,s,i);const a=Reflect.get(r,s,i);return($c(s)?Kf.has(s):Ry(s))||(t||dt(r,"get",s),e)?a:Ue(a)?!o||!Bc(s)?a.value:a:Se(a)?t?Xf(a):Ur(a):a}}const Dy=Wf(),xy=Wf(!0);function Wf(t=!1){return function(n,r,s,i){let o=n[r];if(vs(o)&&Ue(o)&&!Ue(s))return!1;if(!t&&!vs(s)&&(Yf(s)||(s=oe(s),o=oe(o)),!q(n)&&Ue(o)&&!Ue(s)))return o.value=s,!0;const a=q(n)&&Bc(r)?Number(r)<n.length:re(n,r),c=Reflect.set(n,r,s,i);return n===oe(i)&&(a?ys(s,o)&&Gt(n,"set",r,s):Gt(n,"add",r,s)),c}}function Ly(t,e){const n=re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Gt(t,"delete",e,void 0),r}function My(t,e){const n=Reflect.has(t,e);return(!$c(e)||!Kf.has(e))&&dt(t,"has",e),n}function Uy(t){return dt(t,"iterate",q(t)?"length":xn),Reflect.ownKeys(t)}const zf={get:ky,set:Dy,deleteProperty:Ly,has:My,ownKeys:Uy},Fy={get:Oy,set(t,e){return!0},deleteProperty(t,e){return!0}},Vy=ze({},zf,{get:Ny,set:xy}),Kc=t=>t,_o=t=>Reflect.getPrototypeOf(t);function ii(t,e,n=!1,r=!1){t=t.__v_raw;const s=oe(t),i=oe(e);e!==i&&!n&&dt(s,"get",e),!n&&dt(s,"get",i);const{has:o}=_o(s),a=r?Kc:n?Gc:_s;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,r=oe(n),s=oe(t);return t!==s&&!e&&dt(r,"has",t),!e&&dt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function ai(t,e=!1){return t=t.__v_raw,!e&&dt(oe(t),"iterate",xn),Reflect.get(t,"size",t)}function Nu(t){t=oe(t);const e=oe(this);return _o(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Ou(t,e){e=oe(e);const n=oe(this),{has:r,get:s}=_o(n);let i=r.call(n,t);i||(t=oe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ys(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Pu(t){const e=oe(this),{has:n,get:r}=_o(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Gt(e,"delete",t,void 0),i}function Du(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function ci(t,e){return function(r,s){const i=this,o=i.__v_raw,a=oe(o),c=e?Kc:t?Gc:_s;return!t&&dt(a,"iterate",xn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function li(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=pr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Kc:e?Gc:_s;return!e&&dt(i,"iterate",c?Va:xn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function $y(){const t={get(i){return ii(this,i)},get size(){return ai(this)},has:oi,add:Nu,set:Ou,delete:Pu,clear:Du,forEach:ci(!1,!1)},e={get(i){return ii(this,i,!1,!0)},get size(){return ai(this)},has:oi,add:Nu,set:Ou,delete:Pu,clear:Du,forEach:ci(!1,!0)},n={get(i){return ii(this,i,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ci(!0,!1)},r={get(i){return ii(this,i,!0,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=li(i,!1,!1),n[i]=li(i,!0,!1),e[i]=li(i,!1,!0),r[i]=li(i,!0,!0)}),[t,n,e,r]}const[By,jy,qy,Hy]=$y();function Wc(t,e){const n=e?t?Hy:qy:t?jy:By;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const Ky={get:Wc(!1,!1)},Wy={get:Wc(!1,!0)},zy={get:Wc(!0,!1)},Gf=new WeakMap,Jf=new WeakMap,Qf=new WeakMap,Gy=new WeakMap;function Jy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Jy(wy(t))}function Ur(t){return vs(t)?t:zc(t,!1,zf,Ky,Gf)}function Xy(t){return zc(t,!1,Vy,Wy,Jf)}function Xf(t){return zc(t,!0,Fy,zy,Qf)}function zc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Qy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gr(t){return vs(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function vs(t){return!!(t&&t.__v_isReadonly)}function Yf(t){return!!(t&&t.__v_isShallow)}function Zf(t){return gr(t)||vs(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function ed(t){return Ni(t,"__v_skip",!0),t}const _s=t=>Se(t)?Ur(t):t,Gc=t=>Se(t)?Xf(t):t;function td(t){hn&&Pt&&(t=oe(t),Hf(t.dep||(t.dep=jc())))}function nd(t,e){t=oe(t),t.dep&&$a(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function Yy(t){return rd(t,!1)}function Zy(t){return rd(t,!0)}function rd(t,e){return Ue(t)?t:new ev(t,e)}class ev{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:_s(e)}get value(){return td(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),ys(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:_s(e),nd(this))}}function is(t){return Ue(t)?t.value:t}const tv={get:(t,e,n)=>is(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sd(t){return gr(t)?t:new Proxy(t,tv)}class nv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new qc(e,()=>{this._dirty||(this._dirty=!0,nd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=oe(this);return td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rv(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=Et):(r=t.get,s=t.set),new nv(r,s,i||!s,n)}Promise.resolve();function fn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wo(i,e,n)}return s}function _t(t,e,n,r){if(Y(t)){const i=fn(t,e,n,r);return i&&Ff(i)&&i.catch(o=>{wo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(_t(t[i],e,n,r));return s}function wo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){fn(c,null,10,[t,o,a]);return}}sv(t,n,s,r)}function sv(t,e,n,r=!0){console.error(t)}let Pi=!1,Ba=!1;const lt=[];let jt=0;const os=[];let es=null,ar=0;const as=[];let nn=null,cr=0;const id=Promise.resolve();let Jc=null,ja=null;function od(t){const e=Jc||id;return t?e.then(this?t.bind(this):t):e}function iv(t){let e=jt+1,n=lt.length;for(;e<n;){const r=e+n>>>1;ws(lt[r])<t?e=r+1:n=r}return e}function ad(t){(!lt.length||!lt.includes(t,Pi&&t.allowRecurse?jt+1:jt))&&t!==ja&&(t.id==null?lt.push(t):lt.splice(iv(t.id),0,t),cd())}function cd(){!Pi&&!Ba&&(Ba=!0,Jc=id.then(hd))}function ov(t){const e=lt.indexOf(t);e>jt&&lt.splice(e,1)}function ld(t,e,n,r){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),cd()}function av(t){ld(t,es,os,ar)}function cv(t){ld(t,nn,as,cr)}function Qc(t,e=null){if(os.length){for(ja=e,es=[...new Set(os)],os.length=0,ar=0;ar<es.length;ar++)es[ar]();es=null,ar=0,ja=null,Qc(t,e)}}function ud(t){if(as.length){const e=[...new Set(as)];if(as.length=0,nn){nn.push(...e);return}for(nn=e,nn.sort((n,r)=>ws(n)-ws(r)),cr=0;cr<nn.length;cr++)nn[cr]();nn=null,cr=0}}const ws=t=>t.id==null?1/0:t.id;function hd(t){Ba=!1,Pi=!0,Qc(t),lt.sort((n,r)=>ws(n)-ws(r));const e=Et;try{for(jt=0;jt<lt.length;jt++){const n=lt[jt];n&&n.active!==!1&&fn(n,null,14)}}finally{jt=0,lt.length=0,ud(),Pi=!1,Jc=null,(lt.length||os.length||as.length)&&hd(t)}}function lv(t,e,...n){const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||de;f?s=n.map(p=>p.trim()):h&&(s=n.map(Oi))}let a,c=r[a=ha(e)]||r[a=ha(Ut(e))];!c&&i&&(c=r[a=ha(xr(e))]),c&&_t(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,s)}}function fd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=fd(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):ze(o,i),r.set(t,o),o)}function Xc(t,e){return!t||!po(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,xr(e))||re(t,e))}let vt=null,Eo=null;function Di(t){const e=vt;return vt=t,Eo=t&&t.type.__scopeId||null,e}function tR(t){Eo=t}function nR(){Eo=null}function uv(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Hu(-1);const i=Di(e),o=t(...s);return Di(i),r._d&&Hu(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:b}=t;let _,C;const D=Di(t);try{if(n.shapeFlag&4){const M=s||r;_=Nt(u.call(M,M,h,i,p,f,m)),C=c}else{const M=e;_=Nt(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),C=e.props?c:hv(c)}}catch(M){cs.length=0,wo(M,t,1),_=it(Ft)}let V=_;if(C&&b!==!1){const M=Object.keys(C),{shapeFlag:ne}=V;M.length&&ne&7&&(o&&M.some(Fc)&&(C=fv(C,o)),V=wr(V,C))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),_=V,Di(D),_}const hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||po(n))&&((e||(e={}))[n]=t[n]);return e},fv=(t,e)=>{const n={};for(const r in t)(!Fc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Xc(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xu(r,o,l):!0:!!o;return!1}function xu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xc(n,i))return!0}return!1}function pv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gv=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):cv(t)}function _i(t,e){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[t]=e}}function Tt(t,e,n=!1){const r=Pe||vt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r.proxy):e}}const Lu={};function mr(t,e,n){return dd(t,e,n)}function dd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=Pe;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=Yf(t)):gr(t)?(c=()=>t,r=!0):q(t)?(u=!0,l=t.some(gr),c=()=>t.map(C=>{if(Ue(C))return C.value;if(gr(C))return On(C);if(Y(C))return fn(C,a,2)})):Y(t)?e?c=()=>fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[f])}:c=Et,e&&r){const C=c;c=()=>On(C())}let h,f=C=>{h=_.onStop=()=>{fn(C,a,4)}};if(Es)return f=Et,e?n&&_t(e,a,3,[c(),u?[]:void 0,f]):c(),Et;let p=u?[]:Lu;const m=()=>{if(!!_.active)if(e){const C=_.run();(r||l||(u?C.some((D,V)=>ys(D,p[V])):ys(C,p)))&&(h&&h(),_t(e,a,3,[C,p===Lu?void 0:p,f]),p=C)}else _.run()};m.allowRecurse=!!e;let b;s==="sync"?b=m:s==="post"?b=()=>nt(m,a&&a.suspense):b=()=>{!a||a.isMounted?av(m):m()};const _=new qc(c,b);return e?n?m():p=_.run():s==="post"?nt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Vc(a.scope.effects,_)}}function yv(t,e,n){const r=this.proxy,s=De(t)?t.includes(".")?pd(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Pe;Er(this);const a=dd(s,i.bind(r),n);return o?Er(o):Mn(),a}function pd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function On(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))On(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)On(t[n],e);else if(go(t)||pr(t))t.forEach(n=>{On(n,e)});else if($f(t))for(const n in t)On(t[n],e);return t}function vv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _d(()=>{t.isMounted=!0}),wd(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],_v={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=o_(),r=vv();let s;return()=>{const i=e.default&&md(e.default(),!0);if(!i||!i.length)return;const o=oe(t),{mode:a}=o,c=i[0];if(r.isLeaving)return da(c);const l=Mu(c);if(!l)return da(c);const u=qa(l,o,r,n);Ha(l,u);const h=n.subTree,f=h&&Mu(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const b=m();s===void 0?s=b:b!==s&&(s=b,p=!0)}if(f&&f.type!==Ft&&(!Rn(l,f)||p)){const b=qa(f,o,r,n);if(Ha(f,b),a==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},da(c);a==="in-out"&&l.type!==Ft&&(b.delayLeave=(_,C,D)=>{const V=gd(r,f);V[String(f.key)]=f,_._leaveCb=()=>{C(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return c}}},wv=_v;function gd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function qa(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:b,onAppear:_,onAfterAppear:C,onAppearCancelled:D}=e,V=String(t.key),M=gd(n,t),ne=(Q,ve)=>{Q&&_t(Q,r,9,ve)},ce={mode:i,persisted:o,beforeEnter(Q){let ve=a;if(!n.isMounted)if(s)ve=b||a;else return;Q._leaveCb&&Q._leaveCb(!0);const pe=M[V];pe&&Rn(t,pe)&&pe.el._leaveCb&&pe.el._leaveCb(),ne(ve,[Q])},enter(Q){let ve=c,pe=l,qe=u;if(!n.isMounted)if(s)ve=_||c,pe=C||l,qe=D||u;else return;let He=!1;const Je=Q._enterCb=Yt=>{He||(He=!0,Yt?ne(qe,[Q]):ne(pe,[Q]),ce.delayedLeave&&ce.delayedLeave(),Q._enterCb=void 0)};ve?(ve(Q,Je),ve.length<=1&&Je()):Je()},leave(Q,ve){const pe=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return ve();ne(h,[Q]);let qe=!1;const He=Q._leaveCb=Je=>{qe||(qe=!0,ve(),Je?ne(m,[Q]):ne(p,[Q]),Q._leaveCb=void 0,M[pe]===t&&delete M[pe])};M[pe]=t,f?(f(Q,He),f.length<=1&&He()):He()},clone(Q){return qa(Q,e,n,r)}};return ce}function da(t){if(To(t))return t=wr(t),t.children=null,t}function Mu(t){return To(t)?t.children?t.children[0]:void 0:t}function Ha(t,e){t.shapeFlag&6&&t.component?Ha(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===kt?(i.patchFlag&128&&r++,n=n.concat(md(i.children,e))):(e||i.type!==Ft)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function yd(t){return Y(t)?{setup:t,name:t.name}:t}const Ka=t=>!!t.type.__asyncLoader,To=t=>t.type.__isKeepAlive;function Ev(t,e){vd(t,"a",e)}function Tv(t,e){vd(t,"da",e)}function vd(t,e,n=Pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Io(e,r,n),n){let s=n.parent;for(;s&&s.parent;)To(s.parent.vnode)&&Iv(r,e,n,s),s=s.parent}}function Iv(t,e,n,r){const s=Io(e,t,r,!0);Ed(()=>{Vc(r[e],s)},n)}function Io(t,e,n=Pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lr(),Er(n);const a=_t(e,n,t,o);return Mn(),Mr(),a});return r?s.unshift(i):s.push(i),i}}const Xt=t=>(e,n=Pe)=>(!Es||t==="sp")&&Io(t,e,n),bv=Xt("bm"),_d=Xt("m"),Sv=Xt("bu"),Av=Xt("u"),wd=Xt("bum"),Ed=Xt("um"),Cv=Xt("sp"),Rv=Xt("rtg"),kv=Xt("rtc");function Nv(t,e=Pe){Io("ec",t,e)}let Wa=!0;function Ov(t){const e=Id(t),n=t.proxy,r=t.ctx;Wa=!1,e.beforeCreate&&Uu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:b,deactivated:_,beforeDestroy:C,beforeUnmount:D,destroyed:V,unmounted:M,render:ne,renderTracked:ce,renderTriggered:Q,errorCaptured:ve,serverPrefetch:pe,expose:qe,inheritAttrs:He,components:Je,directives:Yt,filters:er}=e;if(l&&Pv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const le=o[ge];Y(le)&&(r[ge]=le.bind(n))}if(s){const ge=s.call(n,n);Se(ge)&&(t.data=Ur(ge))}if(Wa=!0,i)for(const ge in i){const le=i[ge],gt=Y(le)?le.bind(n,n):Y(le.get)?le.get.bind(n,n):Et,nr=!Y(le)&&Y(le.set)?le.set.bind(n):Et,$t=Ot({get:gt,set:nr});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>$t.value,set:At=>$t.value=At})}if(a)for(const ge in a)Td(a[ge],r,n,ge);if(c){const ge=Y(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(le=>{_i(le,ge[le])})}u&&Uu(u,t,"c");function Ne(ge,le){q(le)?le.forEach(gt=>ge(gt.bind(n))):le&&ge(le.bind(n))}if(Ne(bv,h),Ne(_d,f),Ne(Sv,p),Ne(Av,m),Ne(Ev,b),Ne(Tv,_),Ne(Nv,ve),Ne(kv,ce),Ne(Rv,Q),Ne(wd,D),Ne(Ed,M),Ne(Cv,pe),q(qe))if(qe.length){const ge=t.exposed||(t.exposed={});qe.forEach(le=>{Object.defineProperty(ge,le,{get:()=>n[le],set:gt=>n[le]=gt})})}else t.exposed||(t.exposed={});ne&&t.render===Et&&(t.render=ne),He!=null&&(t.inheritAttrs=He),Je&&(t.components=Je),Yt&&(t.directives=Yt)}function Pv(t,e,n=Et,r=!1){q(t)&&(t=za(t));for(const s in t){const i=t[s];let o;Se(i)?"default"in i?o=Tt(i.from||s,i.default,!0):o=Tt(i.from||s):o=Tt(i),Ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Uu(t,e,n){_t(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Td(t,e,n,r){const s=r.includes(".")?pd(n,r):()=>n[r];if(De(t)){const i=e[t];Y(i)&&mr(s,i)}else if(Y(t))mr(s,t.bind(n));else if(Se(t))if(q(t))t.forEach(i=>Td(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&mr(s,i,t)}}function Id(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xi(c,l,o,!0)),xi(c,e,o)),i.set(e,c),c}function xi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xi(t,i,n,!0),s&&s.forEach(o=>xi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Dv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dv={data:Fu,props:An,emits:An,methods:An,computed:An,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:An,directives:An,watch:Lv,provide:Fu,inject:xv};function Fu(t,e){return e?t?function(){return ze(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function xv(t,e){return An(za(t),za(e))}function za(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?ze(ze(Object.create(null),t),e):e}function Lv(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=Xe(t[r],e[r]);return n}function Mv(t,e,n,r=!1){const s={},i={};Ni(i,bo,1),t.propsDefaults=Object.create(null),bd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Uv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const p=e[f];if(c)if(re(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const m=Ut(f);s[m]=Ga(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{bd(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=xr(h))===h||!re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ga(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],l=!0)}l&&Gt(t,"set","$attrs")}function bd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(yi(c))continue;const l=e[c];let u;s&&re(s,u=Ut(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Xc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=oe(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ga(s,c,h,l[h],t,!re(l,h))}}return o}function Ga(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Er(s),r=l[n]=c.call(null,e),Mn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===xr(n))&&(r=!0))}return r}function Sd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[f,p]=Sd(h,e,!0);ze(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,dr),dr;if(q(i))for(let u=0;u<i.length;u++){const h=Ut(i[u]);Vu(h)&&(o[h]=de)}else if(i)for(const u in i){const h=Ut(u);if(Vu(h)){const f=i[u],p=o[h]=q(f)||Y(f)?{type:f}:f;if(p){const m=ju(Boolean,p.type),b=ju(String,p.type);p[0]=m>-1,p[1]=b<0||m<b,(m>-1||re(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Vu(t){return t[0]!=="$"}function $u(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Bu(t,e){return $u(t)===$u(e)}function ju(t,e){return q(e)?e.findIndex(n=>Bu(n,t)):Y(e)&&Bu(e,t)?0:-1}const Ad=t=>t[0]==="_"||t==="$stable",Yc=t=>q(t)?t.map(Nt):[Nt(t)],Fv=(t,e,n)=>{const r=uv((...s)=>Yc(e(...s)),n);return r._c=!1,r},Cd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ad(s))continue;const i=t[s];if(Y(i))e[s]=Fv(s,i,r);else if(i!=null){const o=Yc(i);e[s]=()=>o}}},Rd=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},Vv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Ni(e,"_",n)):Cd(e,t.slots={})}else t.slots={},e&&Rd(t,e);Ni(t.slots,bo,1)},$v=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Cd(e,s)),o=e}else e&&(Rd(t,e),o={default:1});if(i)for(const a in s)!Ad(a)&&!(a in o)&&delete s[a]};function rR(t,e){const n=vt;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&On(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function In(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lr(),_t(c,n,8,[t.el,a,t,e]),Mr())}}function kd(){return{app:null,config:{isNativeTag:yy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bv=0;function jv(t,e){return function(r,s=null){s!=null&&!Se(s)&&(s=null);const i=kd(),o=new Set;let a=!1;const c=i.app={_uid:Bv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:d_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=it(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,tl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ja(t,e,n,r,s=!1){if(q(t)){t.forEach((f,p)=>Ja(f,e&&(q(e)?e[p]:e),n,r,s));return}if(Ka(r)&&!s)return;const i=r.shapeFlag&4?tl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,re(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),Y(c))fn(c,a,12,[o,u]);else{const f=De(c),p=Ue(c);if(f||p){const m=()=>{if(t.f){const b=f?u[c]:c.value;s?q(b)&&Vc(b,i):q(b)?b.includes(i)||b.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,re(h,c)&&(h[c]=o)):Ue(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,nt(m,n)):m()}}}const nt=mv;function qv(t){return Hv(t)}function Hv(t,e){const n=Iy();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Et,cloneNode:m,insertStaticContent:b}=t,_=(d,g,y,E=null,w=null,A=null,N=!1,S=null,R=!!g.dynamicChildren)=>{if(d===g)return;d&&!Rn(d,g)&&(E=U(d),mt(d,w,A,!0),d=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:T,ref:$,shapeFlag:x}=g;switch(T){case Zc:C(d,g,y,E);break;case Ft:D(d,g,y,E);break;case wi:d==null&&V(g,y,E,N);break;case kt:Yt(d,g,y,E,w,A,N,S,R);break;default:x&1?ce(d,g,y,E,w,A,N,S,R):x&6?er(d,g,y,E,w,A,N,S,R):(x&64||x&128)&&T.process(d,g,y,E,w,A,N,S,R,me)}$!=null&&w&&Ja($,d&&d.ref,A,g||d,!g)},C=(d,g,y,E)=>{if(d==null)r(g.el=a(g.children),y,E);else{const w=g.el=d.el;g.children!==d.children&&l(w,g.children)}},D=(d,g,y,E)=>{d==null?r(g.el=c(g.children||""),y,E):g.el=d.el},V=(d,g,y,E)=>{[d.el,d.anchor]=b(d.children,g,y,E,d.el,d.anchor)},M=({el:d,anchor:g},y,E)=>{let w;for(;d&&d!==g;)w=f(d),r(d,y,E),d=w;r(g,y,E)},ne=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),s(d),d=y;s(g)},ce=(d,g,y,E,w,A,N,S,R)=>{N=N||g.type==="svg",d==null?Q(g,y,E,w,A,N,S,R):qe(d,g,w,A,N,S,R)},Q=(d,g,y,E,w,A,N,S)=>{let R,T;const{type:$,props:x,shapeFlag:B,transition:z,patchFlag:te,dirs:Ee}=d;if(d.el&&m!==void 0&&te===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,A,x&&x.is,x),B&8?u(R,d.children):B&16&&pe(d.children,R,null,E,w,A&&$!=="foreignObject",N,S),Ee&&In(d,null,E,"created"),x){for(const _e in x)_e!=="value"&&!yi(_e)&&i(R,_e,null,x[_e],A,d.children,E,w,k);"value"in x&&i(R,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Rt(T,E,d)}ve(R,d,d.scopeId,N,E)}Ee&&In(d,null,E,"beforeMount");const he=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;he&&z.beforeEnter(R),r(R,g,y),((T=x&&x.onVnodeMounted)||he||Ee)&&nt(()=>{T&&Rt(T,E,d),he&&z.enter(R),Ee&&In(d,null,E,"mounted")},w)},ve=(d,g,y,E,w)=>{if(y&&p(d,y),E)for(let A=0;A<E.length;A++)p(d,E[A]);if(w){let A=w.subTree;if(g===A){const N=w.vnode;ve(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},pe=(d,g,y,E,w,A,N,S,R=0)=>{for(let T=R;T<d.length;T++){const $=d[T]=S?rn(d[T]):Nt(d[T]);_(null,$,g,y,E,w,A,N,S)}},qe=(d,g,y,E,w,A,N)=>{const S=g.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:$}=g;R|=d.patchFlag&16;const x=d.props||de,B=g.props||de;let z;y&&bn(y,!1),(z=B.onVnodeBeforeUpdate)&&Rt(z,y,g,d),$&&In(g,d,y,"beforeUpdate"),y&&bn(y,!0);const te=w&&g.type!=="foreignObject";if(T?He(d.dynamicChildren,T,S,y,E,te,A):N||gt(d,g,S,null,y,E,te,A,!1),R>0){if(R&16)Je(S,g,x,B,y,E,w);else if(R&2&&x.class!==B.class&&i(S,"class",null,B.class,w),R&4&&i(S,"style",x.style,B.style,w),R&8){const Ee=g.dynamicProps;for(let he=0;he<Ee.length;he++){const _e=Ee[he],wt=x[_e],rr=B[_e];(rr!==wt||_e==="value")&&i(S,_e,wt,rr,w,d.children,y,E,k)}}R&1&&d.children!==g.children&&u(S,g.children)}else!N&&T==null&&Je(S,g,x,B,y,E,w);((z=B.onVnodeUpdated)||$)&&nt(()=>{z&&Rt(z,y,g,d),$&&In(g,d,y,"updated")},E)},He=(d,g,y,E,w,A,N)=>{for(let S=0;S<g.length;S++){const R=d[S],T=g[S],$=R.el&&(R.type===kt||!Rn(R,T)||R.shapeFlag&70)?h(R.el):y;_(R,T,$,null,E,w,A,N,!0)}},Je=(d,g,y,E,w,A,N)=>{if(y!==E){for(const S in E){if(yi(S))continue;const R=E[S],T=y[S];R!==T&&S!=="value"&&i(d,S,T,R,N,g.children,w,A,k)}if(y!==de)for(const S in y)!yi(S)&&!(S in E)&&i(d,S,y[S],null,N,g.children,w,A,k);"value"in E&&i(d,"value",y.value,E.value)}},Yt=(d,g,y,E,w,A,N,S,R)=>{const T=g.el=d?d.el:a(""),$=g.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:B,slotScopeIds:z}=g;z&&(S=S?S.concat(z):z),d==null?(r(T,y,E),r($,y,E),pe(g.children,y,$,w,A,N,S,R)):x>0&&x&64&&B&&d.dynamicChildren?(He(d.dynamicChildren,B,y,w,A,N,S),(g.key!=null||w&&g===w.subTree)&&Nd(d,g,!0)):gt(d,g,y,$,w,A,N,S,R)},er=(d,g,y,E,w,A,N,S,R)=>{g.slotScopeIds=S,d==null?g.shapeFlag&512?w.ctx.activate(g,y,E,N,R):tr(g,y,E,w,A,N,R):Ne(d,g,R)},tr=(d,g,y,E,w,A,N)=>{const S=d.component=i_(d,E,w);if(To(d)&&(S.ctx.renderer=me),a_(S),S.asyncDep){if(w&&w.registerDep(S,ge),!d.el){const R=S.subTree=it(Ft);D(null,R,g,y)}return}ge(S,d,g,y,w,A,N)},Ne=(d,g,y)=>{const E=g.component=d.component;if(dv(d,g,y))if(E.asyncDep&&!E.asyncResolved){le(E,g,y);return}else E.next=g,ov(E.update),E.update();else g.component=d.component,g.el=d.el,E.vnode=g},ge=(d,g,y,E,w,A,N)=>{const S=()=>{if(d.isMounted){let{next:$,bu:x,u:B,parent:z,vnode:te}=d,Ee=$,he;bn(d,!1),$?($.el=te.el,le(d,$,N)):$=te,x&&vi(x),(he=$.props&&$.props.onVnodeBeforeUpdate)&&Rt(he,z,$,te),bn(d,!0);const _e=fa(d),wt=d.subTree;d.subTree=_e,_(wt,_e,h(wt.el),U(wt),d,w,A),$.el=_e.el,Ee===null&&pv(d,_e.el),B&&nt(B,w),(he=$.props&&$.props.onVnodeUpdated)&&nt(()=>Rt(he,z,$,te),w)}else{let $;const{el:x,props:B}=g,{bm:z,m:te,parent:Ee}=d,he=Ka(g);if(bn(d,!1),z&&vi(z),!he&&($=B&&B.onVnodeBeforeMount)&&Rt($,Ee,g),bn(d,!0),x&&X){const _e=()=>{d.subTree=fa(d),X(x,d.subTree,d,w,null)};he?g.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=fa(d);_(null,_e,y,E,d,w,A),g.el=_e.el}if(te&&nt(te,w),!he&&($=B&&B.onVnodeMounted)){const _e=g;nt(()=>Rt($,Ee,_e),w)}g.shapeFlag&256&&d.a&&nt(d.a,w),d.isMounted=!0,g=y=E=null}},R=d.effect=new qc(S,()=>ad(d.update),d.scope),T=d.update=R.run.bind(R);T.id=d.uid,bn(d,!0),T()},le=(d,g,y)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,Uv(d,g.props,E,y),$v(d,g.children,y),Lr(),Qc(void 0,d.update),Mr()},gt=(d,g,y,E,w,A,N,S,R=!1)=>{const T=d&&d.children,$=d?d.shapeFlag:0,x=g.children,{patchFlag:B,shapeFlag:z}=g;if(B>0){if(B&128){$t(T,x,y,E,w,A,N,S,R);return}else if(B&256){nr(T,x,y,E,w,A,N,S,R);return}}z&8?($&16&&k(T,w,A),x!==T&&u(y,x)):$&16?z&16?$t(T,x,y,E,w,A,N,S,R):k(T,w,A,!0):($&8&&u(y,""),z&16&&pe(x,y,E,w,A,N,S,R))},nr=(d,g,y,E,w,A,N,S,R)=>{d=d||dr,g=g||dr;const T=d.length,$=g.length,x=Math.min(T,$);let B;for(B=0;B<x;B++){const z=g[B]=R?rn(g[B]):Nt(g[B]);_(d[B],z,y,null,w,A,N,S,R)}T>$?k(d,w,A,!0,!1,x):pe(g,y,E,w,A,N,S,R,x)},$t=(d,g,y,E,w,A,N,S,R)=>{let T=0;const $=g.length;let x=d.length-1,B=$-1;for(;T<=x&&T<=B;){const z=d[T],te=g[T]=R?rn(g[T]):Nt(g[T]);if(Rn(z,te))_(z,te,y,null,w,A,N,S,R);else break;T++}for(;T<=x&&T<=B;){const z=d[x],te=g[B]=R?rn(g[B]):Nt(g[B]);if(Rn(z,te))_(z,te,y,null,w,A,N,S,R);else break;x--,B--}if(T>x){if(T<=B){const z=B+1,te=z<$?g[z].el:E;for(;T<=B;)_(null,g[T]=R?rn(g[T]):Nt(g[T]),y,te,w,A,N,S,R),T++}}else if(T>B)for(;T<=x;)mt(d[T],w,A,!0),T++;else{const z=T,te=T,Ee=new Map;for(T=te;T<=B;T++){const ct=g[T]=R?rn(g[T]):Nt(g[T]);ct.key!=null&&Ee.set(ct.key,T)}let he,_e=0;const wt=B-te+1;let rr=!1,Iu=0;const Gr=new Array(wt);for(T=0;T<wt;T++)Gr[T]=0;for(T=z;T<=x;T++){const ct=d[T];if(_e>=wt){mt(ct,w,A,!0);continue}let Ct;if(ct.key!=null)Ct=Ee.get(ct.key);else for(he=te;he<=B;he++)if(Gr[he-te]===0&&Rn(ct,g[he])){Ct=he;break}Ct===void 0?mt(ct,w,A,!0):(Gr[Ct-te]=T+1,Ct>=Iu?Iu=Ct:rr=!0,_(ct,g[Ct],y,null,w,A,N,S,R),_e++)}const bu=rr?Kv(Gr):dr;for(he=bu.length-1,T=wt-1;T>=0;T--){const ct=te+T,Ct=g[ct],Su=ct+1<$?g[ct+1].el:E;Gr[T]===0?_(null,Ct,y,Su,w,A,N,S,R):rr&&(he<0||T!==bu[he]?At(Ct,y,Su,2):he--)}}},At=(d,g,y,E,w=null)=>{const{el:A,type:N,transition:S,children:R,shapeFlag:T}=d;if(T&6){At(d.component.subTree,g,y,E);return}if(T&128){d.suspense.move(g,y,E);return}if(T&64){N.move(d,g,y,me);return}if(N===kt){r(A,g,y);for(let x=0;x<R.length;x++)At(R[x],g,y,E);r(d.anchor,g,y);return}if(N===wi){M(d,g,y);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(A),r(A,g,y),nt(()=>S.enter(A),w);else{const{leave:x,delayLeave:B,afterLeave:z}=S,te=()=>r(A,g,y),Ee=()=>{x(A,()=>{te(),z&&z()})};B?B(A,te,Ee):Ee()}else r(A,g,y)},mt=(d,g,y,E=!1,w=!1)=>{const{type:A,props:N,ref:S,children:R,dynamicChildren:T,shapeFlag:$,patchFlag:x,dirs:B}=d;if(S!=null&&Ja(S,null,y,d,!0),$&256){g.ctx.deactivate(d);return}const z=$&1&&B,te=!Ka(d);let Ee;if(te&&(Ee=N&&N.onVnodeBeforeUnmount)&&Rt(Ee,g,d),$&6)L(d.component,y,E);else{if($&128){d.suspense.unmount(y,E);return}z&&In(d,null,g,"beforeUnmount"),$&64?d.type.remove(d,g,y,w,me,E):T&&(A!==kt||x>0&&x&64)?k(T,g,y,!1,!0):(A===kt&&x&384||!w&&$&16)&&k(R,g,y),E&&ua(d)}(te&&(Ee=N&&N.onVnodeUnmounted)||z)&&nt(()=>{Ee&&Rt(Ee,g,d),z&&In(d,null,g,"unmounted")},y)},ua=d=>{const{type:g,el:y,anchor:E,transition:w}=d;if(g===kt){v(y,E);return}if(g===wi){ne(d);return}const A=()=>{s(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:S}=w,R=()=>N(y,A);S?S(d.el,A,R):R()}else A()},v=(d,g)=>{let y;for(;d!==g;)y=f(d),s(d),d=y;s(g)},L=(d,g,y)=>{const{bum:E,scope:w,update:A,subTree:N,um:S}=d;E&&vi(E),w.stop(),A&&(A.active=!1,mt(N,d,g,y)),S&&nt(S,g),nt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},k=(d,g,y,E=!1,w=!1,A=0)=>{for(let N=A;N<d.length;N++)mt(d[N],g,y,E,w)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ue=(d,g,y)=>{d==null?g._vnode&&mt(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),ud(),g._vnode=d},me={p:_,um:mt,m:At,r:ua,mt:tr,mc:pe,pc:gt,pbc:He,n:U,o:t};let Z,X;return e&&([Z,X]=e(me)),{render:ue,hydrate:Z,createApp:jv(ue,Z)}}function bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Nd(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rn(s[i]),a.el=o.el),n||Nd(o,a))}}function Kv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Wv=t=>t.__isTeleport,Od="components";function sR(t,e){return Gv(Od,t,!0,e)||t}const zv=Symbol();function Gv(t,e,n=!0,r=!1){const s=vt||Pe;if(s){const i=s.type;if(t===Od){const a=h_(i);if(a&&(a===e||a===Ut(e)||a===vo(Ut(e))))return i}const o=qu(s[t]||i[t],e)||qu(s.appContext[t],e);return!o&&r?i:o}}function qu(t,e){return t&&(t[e]||t[Ut(e)]||t[vo(Ut(e))])}const kt=Symbol(void 0),Zc=Symbol(void 0),Ft=Symbol(void 0),wi=Symbol(void 0),cs=[];let Ln=null;function Jv(t=!1){cs.push(Ln=t?null:[])}function Qv(){cs.pop(),Ln=cs[cs.length-1]||null}let Li=1;function Hu(t){Li+=t}function Pd(t){return t.dynamicChildren=Li>0?Ln||dr:null,Qv(),Li>0&&Ln&&Ln.push(t),t}function iR(t,e,n,r,s,i){return Pd(xd(t,e,n,r,s,i,!0))}function Xv(t,e,n,r,s){return Pd(it(t,e,n,r,s,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const bo="__vInternal",Dd=({key:t})=>t!=null?t:null,Ei=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Ue(t)||Y(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function xd(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dd(e),ref:e&&Ei(e),scopeId:Eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(el(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Li>0&&!o&&Ln&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ln.push(c),c}const it=Yv;function Yv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zv)&&(t=Ft),Qa(t)){const a=wr(t,e,!0);return n&&el(a,n),a}if(f_(t)&&(t=t.__vccOpts),e){e=Zv(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Uc(a)),Se(c)&&(Zf(c)&&!q(c)&&(c=ze({},c)),e.style=Mc(c))}const o=De(t)?1:gv(t)?128:Wv(t)?64:Se(t)?4:Y(t)?2:0;return xd(t,e,n,r,s,o,i,!0)}function Zv(t){return t?Zf(t)||bo in t?ze({},t):t:null}function wr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?t_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dd(a),ref:e&&e.ref?n&&s?q(s)?s.concat(Ei(e)):[s,Ei(e)]:Ei(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),el:t.el,anchor:t.anchor}}function e_(t=" ",e=0){return it(Zc,null,t,e)}function oR(t,e){const n=it(wi,null,t);return n.staticCount=e,n}function aR(t="",e=!1){return e?(Jv(),Xv(Ft,null,t)):it(Ft,null,t)}function Nt(t){return t==null||typeof t=="boolean"?it(Ft):q(t)?it(kt,null,t.slice()):typeof t=="object"?rn(t):it(Zc,null,String(t))}function rn(t){return t.el===null||t.memo?t:wr(t)}function el(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),el(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(bo in e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[e_(e)]):n=8);t.children=e,t.shapeFlag|=n}function t_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Uc([e.class,r.class]));else if(s==="style")e.style=Mc([e.style,r.style]);else if(po(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Rt(t,e,n,r=null){_t(t,e,7,[n,r])}function cR(t,e,n,r){let s;const i=n&&n[r];if(q(t)||De(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Xa=t=>t?Ld(t)?tl(t)||t.proxy:Xa(t.parent):null,Mi=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xa(t.parent),$root:t=>Xa(t.root),$emit:t=>t.emit,$options:t=>Id(t),$forceUpdate:t=>()=>ad(t.update),$nextTick:t=>od.bind(t.proxy),$watch:t=>yv.bind(t)}),n_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==de&&re(r,e))return o[e]=1,r[e];if(s!==de&&re(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=3,i[e];if(n!==de&&re(n,e))return o[e]=4,n[e];Wa&&(o[e]=0)}}const u=Mi[e];let h,f;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==de&&re(s,e)?(s[e]=n,!0):r!==de&&re(r,e)?(r[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&re(t,o)||e!==de&&re(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(Mi,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},r_=kd();let s_=0;function i_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||r_,i={uid:s_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new by(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sd(r,s),emitsOptions:fd(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lv.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const o_=()=>Pe||vt,Er=t=>{Pe=t,t.scope.on()},Mn=()=>{Pe&&Pe.scope.off(),Pe=null};function Ld(t){return t.vnode.shapeFlag&4}let Es=!1;function a_(t,e=!1){Es=e;const{props:n,children:r}=t.vnode,s=Ld(t);Mv(t,n,s,e),Vv(t,r);const i=s?c_(t,e):void 0;return Es=!1,i}function c_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ed(new Proxy(t.ctx,n_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?u_(t):null;Er(t),Lr();const i=fn(r,t,0,[t.props,s]);if(Mr(),Mn(),Ff(i)){if(i.then(Mn,Mn),e)return i.then(o=>{Ku(t,o,e)}).catch(o=>{wo(o,t,0)});t.asyncDep=i}else Ku(t,i,e)}else Md(t,e)}function Ku(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=sd(e)),Md(t,n)}let Wu;function Md(t,e,n){const r=t.type;if(!t.render){if(!e&&Wu&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=Wu(s,l)}}t.render=r.render||Et}Er(t),Lr(),Ov(t),Mr(),Mn()}function l_(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function u_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=l_(t))},slots:t.slots,emit:t.emit,expose:e}}function tl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sd(ed(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mi)return Mi[n](t)}}))}function h_(t){return Y(t)&&t.displayName||t.name}function f_(t){return Y(t)&&"__vccOpts"in t}const Ot=(t,e)=>rv(t,e,Es);function Ud(t,e,n){const r=arguments.length;return r===2?Se(e)&&!q(e)?Qa(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qa(n)&&(n=[n]),it(t,e,n))}const d_="3.2.31",p_="http://www.w3.org/2000/svg",kn=typeof document!="undefined"?document:null,zu=kn&&kn.createElement("template"),g_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?kn.createElementNS(p_,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zu.innerHTML=r?`<svg>${t}</svg>`:t;const a=zu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function m_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function y_(t,e,n){const r=t.style,s=De(n);if(n&&!s){for(const i in n)Ya(r,i,n[i]);if(e&&!De(e))for(const i in e)n[i]==null&&Ya(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Gu=/\s*!important$/;function Ya(t,e,n){if(q(n))n.forEach(r=>Ya(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=v_(t,e);Gu.test(n)?t.setProperty(xr(r),n.replace(Gu,""),"important"):t[r]=n}}const Ju=["Webkit","Moz","ms"],pa={};function v_(t,e){const n=pa[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return pa[e]=r;r=vo(r);for(let s=0;s<Ju.length;s++){const i=Ju[s]+r;if(i in t)return pa[e]=i}return e}const Qu="http://www.w3.org/1999/xlink";function __(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qu,e.slice(6,e.length)):t.setAttributeNS(Qu,e,n);else{const i=hy(e);n==null||i&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function w_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Mf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Ui=Date.now,Fd=!1;if(typeof window!="undefined"){Ui()>document.createEvent("Event").timeStamp&&(Ui=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Fd=!!(t&&Number(t[1])<=53)}let Za=0;const E_=Promise.resolve(),T_=()=>{Za=0},I_=()=>Za||(E_.then(T_),Za=Ui());function Nn(t,e,n,r){t.addEventListener(e,n,r)}function b_(t,e,n,r){t.removeEventListener(e,n,r)}function S_(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=A_(e);if(r){const l=i[e]=C_(r,s);Nn(t,a,l,c)}else o&&(b_(t,a,o,c),i[e]=void 0)}}const Xu=/(?:Once|Passive|Capture)$/;function A_(t){let e;if(Xu.test(t)){e={};let n;for(;n=t.match(Xu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[xr(t.slice(2)),e]}function C_(t,e){const n=r=>{const s=r.timeStamp||Ui();(Fd||s>=n.attached-1)&&_t(R_(r,n.value),e,5,[r])};return n.value=t,n.attached=I_(),n}function R_(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yu=/^on[a-z]/,k_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?m_(t,r,s):e==="style"?y_(t,n,r):po(e)?Fc(e)||S_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N_(t,e,r,s))?w_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),__(t,e,r,s))};function N_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Yu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yu.test(e)&&De(n)?!1:e in t}const O_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wv.props;const Fi=t=>{const e=t.props["onUpdate:modelValue"];return q(e)?n=>vi(e,n):e};function P_(t){t.target.composing=!0}function Zu(t){const e=t.target;e.composing&&(e.composing=!1,D_(e,"input"))}function D_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const lR={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Fi(s);const i=r||s.props&&s.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Oi(a)),t._assign(a)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",P_),Nn(t,"compositionend",Zu),Nn(t,"change",Zu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Fi(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Oi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},uR={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=go(e);Nn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Oi(Vi(o)):Vi(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Fi(r)},mounted(t,{value:e}){eh(t,e)},beforeUpdate(t,e,n){t._assign=Fi(n)},updated(t,{value:e}){eh(t,e)}};function eh(t,e){const n=t.multiple;if(!(n&&!q(e)&&!go(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Vi(i);if(n)q(e)?i.selected=my(e,o)>-1:i.selected=e.has(o);else if(fo(Vi(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vi(t){return"_value"in t?t._value:t.value}const x_=["ctrl","shift","alt","meta"],L_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>x_.some(n=>t[`${n}Key`]&&!e.includes(n))},hR=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=L_[e[s]];if(i&&i(n,e))return}return t(n,...r)},fR={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Jr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Jr(t,!0),r.enter(t)):r.leave(t,()=>{Jr(t,!1)}):Jr(t,e))},beforeUnmount(t,{value:e}){Jr(t,e)}};function Jr(t,e){t.style.display=e?t._vod:"none"}const M_=ze({patchProp:k_},g_);let th;function U_(){return th||(th=qv(M_))}const dR=(...t)=>{const e=U_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=F_(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function F_(t){return De(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Vd=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Fr=t=>Vd?Symbol(t):"_vr_"+t,V_=Fr("rvlm"),nh=Fr("rvd"),So=Fr("r"),nl=Fr("rl"),ec=Fr("rvl"),lr=typeof window!="undefined";function $_(t){return t.__esModule||Vd&&t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function ga(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ls=()=>{},B_=/\/$/,j_=t=>t.replace(B_,"");function ma(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=W_(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function q_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function H_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Tr(e.matched[r],n.matched[s])&&$d(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $d(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!K_(t[n],e[n]))return!1;return!0}function K_(t,e){return Array.isArray(t)?sh(t,e):Array.isArray(e)?sh(e,t):t===e}function sh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function W_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ts;(function(t){t.pop="pop",t.push="push"})(Ts||(Ts={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function z_(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),j_(t)}const G_=/^[^#]+#/;function J_(t,e){return t.replace(G_,"#")+e}function Q_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ao=()=>({left:window.pageXOffset,top:window.pageYOffset});function X_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Q_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ih(t,e){return(history.state?history.state.position-e:-1)+t}const tc=new Map;function Y_(t,e){tc.set(t,e)}function Z_(t){const e=tc.get(t);return tc.delete(t),e}let ew=()=>location.protocol+"//"+location.host;function Bd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),rh(c,"")}return rh(n,t)+r+s}function tw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Bd(t,location),m=n.value,b=e.value;let _=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}_=b?f.position-b.position:0}else r(p);s.forEach(C=>{C(n.value,m,{delta:_,type:Ts.pop,direction:_?_>0?us.forward:us.back:us.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(fe({},f.state,{scroll:Ao()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function oh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ao():null}}function nw(t){const{history:e,location:n}=window,r={value:Bd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ew()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,oh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Ao()});i(u.current,u,!0);const h=fe({},oh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function pR(t){t=z_(t);const e=nw(t),n=tw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:J_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rw(t){return typeof t=="string"||t&&typeof t=="object"}function jd(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qd=Fr("nf");var ah;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ah||(ah={}));function Ir(t,e){return fe(new Error,{type:t,[qd]:!0},e)}function Sn(t,e){return t instanceof Error&&qd in t&&(e==null||!!(t.type&e))}const ch="[^/]+?",sw={sensitive:!1,strict:!1,start:!0,end:!0},iw=/[.+*?^${}()[\]/\\]/g;function ow(t,e){const n=fe({},sw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(iw,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:b,optional:_,regexp:C}=f;i.push({name:m,repeatable:b,optional:_});const D=C||ch;if(D!==ch){p+=10;try{new RegExp(`(${D})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+M.message)}}let V=b?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(V=_&&l.length<2?`(?:/${V})`:"/"+V),_&&(V+="?"),s+=V,p+=20,_&&(p+=-8),b&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:b,optional:_}=p,C=m in l?l[m]:"";if(Array.isArray(C)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(C)?C.join("/"):C;if(!D)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function aw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aw(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const lw={type:0,value:""},uw=/[a-zA-Z0-9_]/;function hw(t){if(!t)return[[]];if(t==="/")return[[lw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:uw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function fw(t,e,n){const r=ow(hw(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dw(t,e){const n=[],r=new Map;e=uh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,m=gw(u);m.aliasOf=f&&f.record;const b=uh(e,u),_=[m];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of V)_.push(fe({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let C,D;for(const V of _){const{path:M}=V;if(h&&M[0]!=="/"){const ne=h.record.path,ce=ne[ne.length-1]==="/"?"":"/";V.path=h.record.path+(M&&ce+M)}if(C=fw(V,h,b),f?f.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),p&&u.name&&!lh(C)&&o(u.name)),"children"in m){const ne=m.children;for(let ce=0;ce<ne.length;ce++)i(ne[ce],C,f&&f.children[ce])}f=f||C,c(C)}return D?()=>{o(D)}:ls}function o(u){if(jd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cw(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!lh(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},m,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Ir(1,{location:u});b=f.record.name,p=fe(pw(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(D=>D.re.test(m)),f&&(p=f.parse(m),b=f.record.name);else{if(f=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw Ir(1,{location:u,currentLocation:h});b=f.record.name,p=fe({},h.params,u.params),m=f.stringify(p)}const _=[];let C=f;for(;C;)_.unshift(C.record),C=C.parent;return{name:b,path:m,params:p,matched:_,meta:yw(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function pw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function mw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function lh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yw(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function uh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Hd=/#/g,vw=/&/g,_w=/\//g,ww=/=/g,Ew=/\?/g,Kd=/\+/g,Tw=/%5B/g,Iw=/%5D/g,Wd=/%5E/g,bw=/%60/g,zd=/%7B/g,Sw=/%7C/g,Gd=/%7D/g,Aw=/%20/g;function rl(t){return encodeURI(""+t).replace(Sw,"|").replace(Tw,"[").replace(Iw,"]")}function Cw(t){return rl(t).replace(zd,"{").replace(Gd,"}").replace(Wd,"^")}function nc(t){return rl(t).replace(Kd,"%2B").replace(Aw,"+").replace(Hd,"%23").replace(vw,"%26").replace(bw,"`").replace(zd,"{").replace(Gd,"}").replace(Wd,"^")}function Rw(t){return nc(t).replace(ww,"%3D")}function kw(t){return rl(t).replace(Hd,"%23").replace(Ew,"%3F")}function Nw(t){return t==null?"":kw(t).replace(_w,"%2F")}function $i(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ow(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Kd," "),o=i.indexOf("="),a=$i(o<0?i:i.slice(0,o)),c=o<0?null:$i(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function hh(t){let e="";for(let n in t){const r=t[n];if(n=Rw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&nc(i)):[r&&nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Pw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Qr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ir(4,{from:n,to:e})):h instanceof Error?a(h):rw(h)?a(Ir(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ya(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Dw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$_(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&sn(f,n,r,i,o)()}))}}return s}function Dw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fh(t){const e=Tt(So),n=Tt(nl),r=Ot(()=>e.resolve(is(t.to))),s=Ot(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Tr.bind(null,u));if(f>-1)return f;const p=dh(c[l-2]);return l>1&&dh(u)===p&&h[h.length-1].path!==p?h.findIndex(Tr.bind(null,c[l-2])):f}),i=Ot(()=>s.value>-1&&Uw(n.params,r.value.params)),o=Ot(()=>s.value>-1&&s.value===n.matched.length-1&&$d(n.params,r.value.params));function a(c={}){return Mw(c)?e[is(t.replace)?"replace":"push"](is(t.to)).catch(ls):Promise.resolve()}return{route:r,href:Ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const xw=yd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fh,setup(t,{slots:e}){const n=Ur(fh(t)),{options:r}=Tt(So),s=Ot(()=>({[ph(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ph(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ud("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Lw=xw;function Mw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Uw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ph=(t,e,n)=>t!=null?t:e!=null?e:n,Fw=yd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Tt(ec),s=Ot(()=>t.route||r.value),i=Tt(nh,0),o=Ot(()=>s.value.matched[i]);_i(nh,i+1),_i(V_,o),_i(ec,s);const a=Yy();return mr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Tr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return gh(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Ud(u,fe({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return gh(n.default,{Component:b,route:c})||b}}});function gh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vw=Fw;function gR(t){const e=dw(t.routes,t),n=t.parseQuery||Ow,r=t.stringifyQuery||hh,s=t.history,i=Qr(),o=Qr(),a=Qr(),c=Zy(en);let l=en;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ga.bind(null,v=>""+v),h=ga.bind(null,Nw),f=ga.bind(null,$i);function p(v,L){let k,U;return jd(v)?(k=e.getRecordMatcher(v),U=L):U=v,e.addRoute(U,k)}function m(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function b(){return e.getRoutes().map(v=>v.record)}function _(v){return!!e.getRecordMatcher(v)}function C(v,L){if(L=fe({},L||c.value),typeof v=="string"){const X=ma(n,v,L.path),d=e.resolve({path:X.path},L),g=s.createHref(X.fullPath);return fe(X,d,{params:f(d.params),hash:$i(X.hash),redirectedFrom:void 0,href:g})}let k;if("path"in v)k=fe({},v,{path:ma(n,v.path,L.path).path});else{const X=fe({},v.params);for(const d in X)X[d]==null&&delete X[d];k=fe({},v,{params:h(v.params)}),L.params=h(L.params)}const U=e.resolve(k,L),ue=v.hash||"";U.params=u(f(U.params));const me=q_(r,fe({},v,{hash:Cw(ue),path:U.path})),Z=s.createHref(me);return fe({fullPath:me,hash:ue,query:r===hh?Pw(v.query):v.query||{}},U,{redirectedFrom:void 0,href:Z})}function D(v){return typeof v=="string"?ma(n,v,c.value.path):fe({},v)}function V(v,L){if(l!==v)return Ir(8,{from:L,to:v})}function M(v){return Q(v)}function ne(v){return M(fe(D(v),{replace:!0}))}function ce(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:k}=L;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=D(U):{path:U},U.params={}),fe({query:v.query,hash:v.hash,params:v.params},U)}}function Q(v,L){const k=l=C(v),U=c.value,ue=v.state,me=v.force,Z=v.replace===!0,X=ce(k);if(X)return Q(fe(D(X),{state:ue,force:me,replace:Z}),L||k);const d=k;d.redirectedFrom=L;let g;return!me&&H_(r,U,k)&&(g=Ir(16,{to:d,from:U}),nr(U,U,!0,!1)),(g?Promise.resolve(g):pe(d,U)).catch(y=>Sn(y)?y:ge(y,d,U)).then(y=>{if(y){if(Sn(y,2))return Q(fe(D(y.to),{state:ue,force:me,replace:Z}),L||d)}else y=He(d,U,!0,Z,ue);return qe(d,U,y),y})}function ve(v,L){const k=V(v,L);return k?Promise.reject(k):Promise.resolve()}function pe(v,L){let k;const[U,ue,me]=$w(v,L);k=ya(U.reverse(),"beforeRouteLeave",v,L);for(const X of U)X.leaveGuards.forEach(d=>{k.push(sn(d,v,L))});const Z=ve.bind(null,v,L);return k.push(Z),sr(k).then(()=>{k=[];for(const X of i.list())k.push(sn(X,v,L));return k.push(Z),sr(k)}).then(()=>{k=ya(ue,"beforeRouteUpdate",v,L);for(const X of ue)X.updateGuards.forEach(d=>{k.push(sn(d,v,L))});return k.push(Z),sr(k)}).then(()=>{k=[];for(const X of v.matched)if(X.beforeEnter&&!L.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const d of X.beforeEnter)k.push(sn(d,v,L));else k.push(sn(X.beforeEnter,v,L));return k.push(Z),sr(k)}).then(()=>(v.matched.forEach(X=>X.enterCallbacks={}),k=ya(me,"beforeRouteEnter",v,L),k.push(Z),sr(k))).then(()=>{k=[];for(const X of o.list())k.push(sn(X,v,L));return k.push(Z),sr(k)}).catch(X=>Sn(X,8)?X:Promise.reject(X))}function qe(v,L,k){for(const U of a.list())U(v,L,k)}function He(v,L,k,U,ue){const me=V(v,L);if(me)return me;const Z=L===en,X=lr?history.state:{};k&&(U||Z?s.replace(v.fullPath,fe({scroll:Z&&X&&X.scroll},ue)):s.push(v.fullPath,ue)),c.value=v,nr(v,L,k,Z),gt()}let Je;function Yt(){Je=s.listen((v,L,k)=>{const U=C(v),ue=ce(U);if(ue){Q(fe(ue,{replace:!0}),U).catch(ls);return}l=U;const me=c.value;lr&&Y_(ih(me.fullPath,k.delta),Ao()),pe(U,me).catch(Z=>Sn(Z,12)?Z:Sn(Z,2)?(Q(Z.to,U).then(X=>{Sn(X,20)&&!k.delta&&k.type===Ts.pop&&s.go(-1,!1)}).catch(ls),Promise.reject()):(k.delta&&s.go(-k.delta,!1),ge(Z,U,me))).then(Z=>{Z=Z||He(U,me,!1),Z&&(k.delta?s.go(-k.delta,!1):k.type===Ts.pop&&Sn(Z,20)&&s.go(-1,!1)),qe(U,me,Z)}).catch(ls)})}let er=Qr(),tr=Qr(),Ne;function ge(v,L,k){gt(v);const U=tr.list();return U.length?U.forEach(ue=>ue(v,L,k)):console.error(v),Promise.reject(v)}function le(){return Ne&&c.value!==en?Promise.resolve():new Promise((v,L)=>{er.add([v,L])})}function gt(v){Ne||(Ne=!0,Yt(),er.list().forEach(([L,k])=>v?k(v):L()),er.reset())}function nr(v,L,k,U){const{scrollBehavior:ue}=t;if(!lr||!ue)return Promise.resolve();const me=!k&&Z_(ih(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return od().then(()=>ue(v,L,me)).then(Z=>Z&&X_(Z)).catch(Z=>ge(Z,v,L))}const $t=v=>s.go(v);let At;const mt=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:_,getRoutes:b,resolve:C,options:t,push:M,replace:ne,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:tr.add,isReady:le,install(v){const L=this;v.component("RouterLink",Lw),v.component("RouterView",Vw),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>is(c)}),lr&&!At&&c.value===en&&(At=!0,M(s.location).catch(ue=>{}));const k={};for(const ue in en)k[ue]=Ot(()=>c.value[ue]);v.provide(So,L),v.provide(nl,Ur(k)),v.provide(ec,c);const U=v.unmount;mt.add(v),v.unmount=function(){mt.delete(v),mt.size<1&&(l=en,Je&&Je(),c.value=en,At=!1,Ne=!1),U()}}}}function sr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $w(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Tr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Tr(l,c))||s.push(c))}return[n,r,s]}function mR(){return Tt(So)}function yR(){return Tt(nl)}function Bw(){return Jd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Jd(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const jw=typeof Proxy=="function",qw="devtools-plugin:setup",Hw="plugin:settings:set";class Kw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o}},n&&n.on(Hw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ww(t,e){const n=t,r=Jd(),s=Bw(),i=jw&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(qw,t,e);else{const o=i?new Kw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Qd="store";function vR(t){return t===void 0&&(t=null),Tt(t!==null?t:Qd)}function Vr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function zw(t){return t!==null&&typeof t=="object"}function Gw(t){return t&&typeof t.then=="function"}function Jw(t,e){return function(){return t(e)}}function Xd(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Yd(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Co(t,n,[],t._modules.root,!0),sl(t,n,e)}function sl(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Vr(s,function(o,a){i[a]=Jw(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Ur({data:e}),t.strict&&eE(t),r&&n&&t._withCommit(function(){r.data=null})}function Co(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=il(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=Qw(t,o,n);r.forEachMutation(function(u,h){var f=o+h;Xw(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,p=u.handler||u;Yw(t,f,p,l)}),r.forEachGetter(function(u,h){var f=o+h;Zw(t,f,u,l)}),r.forEachChild(function(u,h){Co(t,e,n.concat(h),u,s)})}function Qw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Bi(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Bi(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Zd(t,e)}},state:{get:function(){return il(t.state,n)}}}),s}function Zd(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Xw(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Yw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Gw(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Zw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function eE(t){mr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function il(t,e){return e.reduce(function(n,r){return n[r]},t)}function Bi(t,e,n){return zw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var tE="vuex bindings",mh="vuex:mutations",va="vuex:actions",ir="vuex",nE=0;function rE(t,e){Ww({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[tE]},function(n){n.addTimelineLayer({id:mh,label:"Vuex Mutations",color:yh}),n.addTimelineLayer({id:va,label:"Vuex Actions",color:yh}),n.addInspector({id:ir,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===ir)if(r.filter){var s=[];rp(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[np(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===ir){var s=r.nodeId;Zd(e,s),r.state=oE(cE(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===ir){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(ir),n.sendInspectorState(ir),n.addTimelineEvent({layerId:mh,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=nE++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:va,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:va,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var yh=8702998,sE=6710886,iE=16777215,ep={label:"namespaced",textColor:iE,backgroundColor:sE};function tp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function np(t,e){return{id:e||"root",label:tp(e),tags:t.namespaced?[ep]:[],children:Object.keys(t._children).map(function(n){return np(t._children[n],e+n+"/")})}}function rp(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[ep]:[]}),Object.keys(e._children).forEach(function(s){rp(t,e._children[s],n,r+s+"/")})}function oE(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=aE(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?tp(o):o,editable:!1,value:rc(function(){return i[o]})}})}return s}function aE(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=rc(function(){return t[n]})}else e[n]=rc(function(){return t[n]})}),e}function cE(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function rc(t){try{return t()}catch(e){return e}}var St=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},sp={namespaced:{configurable:!0}};sp.namespaced.get=function(){return!!this._rawModule.namespaced};St.prototype.addChild=function(e,n){this._children[e]=n};St.prototype.removeChild=function(e){delete this._children[e]};St.prototype.getChild=function(e){return this._children[e]};St.prototype.hasChild=function(e){return e in this._children};St.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};St.prototype.forEachChild=function(e){Vr(this._children,e)};St.prototype.forEachGetter=function(e){this._rawModule.getters&&Vr(this._rawModule.getters,e)};St.prototype.forEachAction=function(e){this._rawModule.actions&&Vr(this._rawModule.actions,e)};St.prototype.forEachMutation=function(e){this._rawModule.mutations&&Vr(this._rawModule.mutations,e)};Object.defineProperties(St.prototype,sp);var Jn=function(e){this.register([],e,!1)};Jn.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Jn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Jn.prototype.update=function(e){ip([],this.root,e)};Jn.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new St(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Vr(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Jn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Jn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function ip(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;ip(t.concat(r),e.getChild(r),n.modules[r])}}function _R(t){return new at(t)}var at=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Jn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,m){return l.call(o,f,p,m)},this.strict=s;var u=this._modules.root.state;Co(this,u,[],this._modules.root),sl(this,u),r.forEach(function(h){return h(n)})},ol={state:{configurable:!0}};at.prototype.install=function(e,n){e.provide(n||Qd,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&rE(e,this)};ol.state.get=function(){return this._state.data};ol.state.set=function(t){};at.prototype.commit=function(e,n,r){var s=this,i=Bi(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};at.prototype.dispatch=function(e,n){var r=this,s=Bi(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};at.prototype.subscribe=function(e,n){return Xd(e,this._subscribers,n)};at.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Xd(r,this._actionSubscribers,n)};at.prototype.watch=function(e,n,r){var s=this;return mr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};at.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};at.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Co(this,this.state,e,this._modules.get(e),r.preserveState),sl(this,this.state)};at.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=il(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Yd(this)};at.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};at.prototype.hotUpdate=function(e){this._modules.update(e),Yd(this,!0)};at.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(at.prototype,ol);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fE=function(t){try{return hE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function op(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function ap(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){return xe().indexOf("Electron/")>=0}function lp(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gE(){return xe().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=mE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function yE(t,e){return t.replace(vE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vE=/\{\$([^}]+)}/g;function _E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ji(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vh(i)&&vh(o)){if(!ji(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wE(t,e){const n=new EE(t,e);return n.subscribe.bind(n)}class EE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_a),s.error===void 0&&(s.error=_a),s.complete===void 0&&(s.complete=_a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _a(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SE(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bE(t){return t===Cn?void 0:t}function SE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const CE={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},RE=ie.INFO,kE={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},NE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=RE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",_h="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new al("@firebase/app"),DE="@firebase/app-compat",xE="@firebase/analytics-compat",LE="@firebase/analytics",ME="@firebase/app-check-compat",UE="@firebase/app-check",FE="@firebase/auth",VE="@firebase/auth-compat",$E="@firebase/database",BE="@firebase/database-compat",jE="@firebase/functions",qE="@firebase/functions-compat",HE="@firebase/installations",KE="@firebase/installations-compat",WE="@firebase/messaging",zE="@firebase/messaging-compat",GE="@firebase/performance",JE="@firebase/performance-compat",QE="@firebase/remote-config",XE="@firebase/remote-config-compat",YE="@firebase/storage",ZE="@firebase/storage-compat",eT="@firebase/firestore",tT="@firebase/firestore-compat",nT="firebase",rT="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="[DEFAULT]",sT={[sc]:"fire-core",[DE]:"fire-core-compat",[LE]:"fire-analytics",[xE]:"fire-analytics-compat",[UE]:"fire-app-check",[ME]:"fire-app-check-compat",[FE]:"fire-auth",[VE]:"fire-auth-compat",[$E]:"fire-rtdb",[BE]:"fire-rtdb-compat",[jE]:"fire-fn",[qE]:"fire-fn-compat",[HE]:"fire-iid",[KE]:"fire-iid-compat",[WE]:"fire-fcm",[zE]:"fire-fcm-compat",[GE]:"fire-perf",[JE]:"fire-perf-compat",[QE]:"fire-rc",[XE]:"fire-rc-compat",[YE]:"fire-gcs",[ZE]:"fire-gcs-compat",[eT]:"fire-fst",[tT]:"fire-fst-compat","fire-js":"fire-js",[nT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Map,ic=new Map;function iT(t,e){try{t.container.addComponent(e)}catch(n){cl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function br(t){const e=t.name;if(ic.has(e))return cl.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,t);for(const n of qi.values())iT(n,t);return!0}function Ro(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Hi=new Fs("app","Firebase",oT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=rT;function wR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:up,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Hi.create("bad-app-name",{appName:String(r)});const s=qi.get(r);if(s){if(ji(t,s.options)&&ji(n,s.config))return s;throw Hi.create("duplicate-app",{appName:r})}const i=new AE(r);for(const a of ic.values())i.addComponent(a);const o=new aT(t,n,i);return qi.set(r,o),o}function ll(t=up){const e=qi.get(t);if(!e)throw Hi.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let s=(r=sT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cl.warn(a.join(" "));return}br(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){br(new $n("platform-logger",e=>new OE(e),"PRIVATE")),xt(sc,_h,t),xt(sc,_h,"esm2017"),xt("fire-js","")}cT("");var lT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,ul=ul||{},K=lT||self;function Ki(){}function oc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $s(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uT(t){return Object.prototype.hasOwnProperty.call(t,wa)&&t[wa]||(t[wa]=++hT)}var wa="closure_uid_"+(1e9*Math.random()>>>0),hT=0;function fT(t,e,n){return t.call.apply(t.bind,arguments)}function dT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=fT:Fe=dT,Fe.apply(null,arguments)}function ui(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function En(){this.s=this.s,this.o=this.o}var pT=0,gT={};En.prototype.s=!1;En.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),pT!=0)){var t=uT(this);delete gT[t]}};En.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},fp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function mT(t){e:{var e=a0;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function wh(t){return Array.prototype.concat.apply([],arguments)}function hl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wi(t){return/^[\s\xa0]*$/.test(t)}var Eh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function Ea(t,e){return t<e?-1:t>e?1:0}var Ze;e:{var Th=K.navigator;if(Th){var Ih=Th.userAgent;if(Ih){Ze=Ih;break e}}Ze=""}function fl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dp(t){const e={};for(const n in t)e[n]=t[n];return e}var bh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<bh.length;i++)n=bh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dl(t){return dl[" "](t),t}dl[" "]=Ki;function yT(t){var e=wT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var vT=Ye(Ze,"Opera"),Sr=Ye(Ze,"Trident")||Ye(Ze,"MSIE"),gp=Ye(Ze,"Edge"),ac=gp||Sr,mp=Ye(Ze,"Gecko")&&!(Ye(Ze.toLowerCase(),"webkit")&&!Ye(Ze,"Edge"))&&!(Ye(Ze,"Trident")||Ye(Ze,"MSIE"))&&!Ye(Ze,"Edge"),_T=Ye(Ze.toLowerCase(),"webkit")&&!Ye(Ze,"Edge");function yp(){var t=K.document;return t?t.documentMode:void 0}var zi;e:{var Ta="",Ia=function(){var t=Ze;if(mp)return/rv:([^\);]+)(\)|;)/.exec(t);if(gp)return/Edge\/([\d\.]+)/.exec(t);if(Sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_T)return/WebKit\/(\S+)/.exec(t);if(vT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ia&&(Ta=Ia?Ia[1]:""),Sr){var ba=yp();if(ba!=null&&ba>parseFloat(Ta)){zi=String(ba);break e}}zi=Ta}var wT={};function ET(){return yT(function(){let t=0;const e=Eh(String(zi)).split("."),n=Eh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ea(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ea(s[2].length==0,i[2].length==0)||Ea(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var cc;if(K.document&&Sr){var Sh=yp();cc=Sh||parseInt(zi,10)||void 0}else cc=void 0;var TT=cc,IT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ki,e),K.removeEventListener("test",Ki,e)}catch{}return t}();function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};function Is(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mp){e:{try{dl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Is.Z.h.call(this)}}je(Is,We);var bT={2:"touch",3:"pen",4:"mouse"};Is.prototype.h=function(){Is.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bs="closure_listenable_"+(1e6*Math.random()|0),ST=0;function AT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++ST,this.ca=this.fa=!1}function ko(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function No(t){this.src=t,this.g={},this.h=0}No.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=uc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new AT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=hp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ko(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var pl="closure_lm_"+(1e6*Math.random()|0),Sa={};function vp(t,e,n,r,s){if(r&&r.once)return wp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vp(t,e[i],n,r,s);return null}return n=yl(n),t&&t[Bs]?t.N(e,n,$s(r)?!!r.capture:!!r,s):_p(t,e,n,!1,r,s)}function _p(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=$s(s)?!!s.capture:!!s,a=ml(t);if(a||(t[pl]=a=new No(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=CT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Tp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CT(){function t(n){return e.call(t.src,t.listener,n)}var e=RT;return t}function wp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wp(t,e[i],n,r,s);return null}return n=yl(n),t&&t[Bs]?t.O(e,n,$s(r)?!!r.capture:!!r,s):_p(t,e,n,!0,r,s)}function Ep(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ep(t,e[i],n,r,s);else r=$s(r)?!!r.capture:!!r,n=yl(n),t&&t[Bs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=uc(i,n,r,s),-1<n&&(ko(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ml(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uc(e,n,r,s)),(n=-1<t?e[t]:null)&&gl(n))}function gl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Bs])lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ml(e))?(lc(n,t),n.h==0&&(n.src=null,e[pl]=null)):ko(t)}}}function Tp(t){return t in Sa?Sa[t]:Sa[t]="on"+t}function RT(t,e){if(t.ca)t=!0;else{e=new Is(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&gl(t),t=n.call(r,e)}return t}function ml(t){return t=t[pl],t instanceof No?t:null}var Aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function yl(t){return typeof t=="function"?t:(t[Aa]||(t[Aa]=function(e){return t.handleEvent(e)}),t[Aa])}function Le(){En.call(this),this.i=new No(this),this.P=this,this.I=null}je(Le,En);Le.prototype[Bs]=!0;Le.prototype.removeEventListener=function(t,e,n,r){Ep(this,t,e,n,r)};function Ve(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var s=e;e=new We(r,t),pp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=hi(o,r,!0,e)&&s}if(o=e.g=t,s=hi(o,r,!0,e)&&s,s=hi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=hi(o,r,!1,e)&&s}Le.prototype.M=function(){if(Le.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ko(n[r]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var vl=K.JSON.stringify;function kT(){var t=bp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NT{constructor(){this.h=this.g=null}add(e,n){const r=Ip.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ip=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OT,t=>t.reset());class OT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PT(t){K.setTimeout(()=>{throw t},0)}function _l(t,e){hc||DT(),fc||(hc(),fc=!0),bp.add(t,e)}var hc;function DT(){var t=K.Promise.resolve(void 0);hc=function(){t.then(xT)}}var fc=!1,bp=new NT;function xT(){for(var t;t=kT();){try{t.h.call(t.g)}catch(n){PT(n)}var e=Ip;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fc=!1}function Oo(t,e){Le.call(this),this.h=t||1,this.g=e||K,this.j=Fe(this.kb,this),this.l=Date.now()}je(Oo,Le);P=Oo.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ve(this,"tick"),this.da&&(wl(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Oo.Z.M.call(this),wl(this),delete this.g};function El(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Sp(t){t.g=El(()=>{t.g=null,t.i&&(t.i=!1,Sp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class LT extends En{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sp(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(t){En.call(this),this.h=t,this.g={}}je(bs,En);var Ah=[];function Ap(t,e,n,r){Array.isArray(n)||(n&&(Ah[0]=n.toString()),n=Ah);for(var s=0;s<n.length;s++){var i=vp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Cp(t){fl(t.g,function(e,n){this.g.hasOwnProperty(n)&&gl(e)},t),t.g={}}bs.prototype.M=function(){bs.Z.M.call(this),Cp(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Po(){this.g=!0}Po.prototype.Aa=function(){this.g=!1};function MT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function UT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VT(t,n)+(r?" "+r:"")})}function FT(t,e){t.info(function(){return"TIMEOUT: "+e})}Po.prototype.info=function(){};function VT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vl(n)}catch{return e}}var Qn={},Ch=null;function Do(){return Ch=Ch||new Le}Qn.Ma="serverreachability";function Rp(t){We.call(this,Qn.Ma,t)}je(Rp,We);function Ss(t){const e=Do();Ve(e,new Rp(e,t))}Qn.STAT_EVENT="statevent";function kp(t,e){We.call(this,Qn.STAT_EVENT,t),this.stat=e}je(kp,We);function et(t){const e=Do();Ve(e,new kp(e,t))}Qn.Na="timingevent";function Np(t,e){We.call(this,Qn.Na,t),this.size=e}je(Np,We);function js(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var xo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Op={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tl(){}Tl.prototype.h=null;function Rh(t){return t.h||(t.h=t.i())}function Pp(){}var qs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Il(){We.call(this,"d")}je(Il,We);function bl(){We.call(this,"c")}je(bl,We);var dc;function Lo(){}je(Lo,Tl);Lo.prototype.g=function(){return new XMLHttpRequest};Lo.prototype.i=function(){return{}};dc=new Lo;function Hs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new bs(this),this.P=$T,t=ac?125:void 0,this.W=new Oo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Dp}function Dp(){this.i=null,this.g="",this.h=!1}var $T=45e3,pc={},Gi={};P=Hs.prototype;P.setTimeout=function(t){this.P=t};function gc(t,e,n){t.K=1,t.v=Uo(Jt(e)),t.s=n,t.U=!0,xp(t,null)}function xp(t,e){t.F=Date.now(),Ks(t),t.A=Jt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Bp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Dp,t.g=ag(t.l,n?e:null,!t.s),0<t.O&&(t.L=new LT(Fe(t.Ia,t,t.g),t.O)),Ap(t.V,t.g,"readystatechange",t.gb),e=t.H?dp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ss(1),MT(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ac||this.g&&(this.h.h||this.g.ga()||Ph(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ss(3):Ss(2)),Mo(this);var n=this.g.ba();this.N=n;t:if(Lp(this)){var r=Ph(this.g);t="";var s=r.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Pn(this),hs(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,UT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wi(a)){var l=a;break t}}l=null}if(n=l)ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mc(this,n);else{this.i=!1,this.o=3,et(12),Pn(this),hs(this);break e}}this.U?(Mp(this,u,o),ac&&this.i&&u==3&&(Ap(this.V,this.W,"tick",this.fb),this.W.start())):(ur(this.j,this.m,o,null),mc(this,o)),u==4&&Pn(this),this.i&&!this.I&&(u==4?rg(this.l,this):(this.i=!1,Ks(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Pn(this),hs(this)}}}catch{}finally{}};function Lp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Mp(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=BT(t,n),s==Gi){e==4&&(t.o=4,et(14),r=!1),ur(t.j,t.m,null,"[Incomplete Response]");break}else if(s==pc){t.o=4,et(15),ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ur(t.j,t.m,s,null),mc(t,s);Lp(t)&&s!=Gi&&s!=pc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dl(e),e.L=!0,et(11))):(ur(t.j,t.m,n,"[Invalid Chunked Response]"),Pn(t),hs(t))}P.fb=function(){if(this.g){var t=qt(this.g),e=this.g.ga();this.C<e.length&&(Mo(this),Mp(this,t,e),this.i&&t!=4&&Ks(this))}};function BT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gi:(n=Number(e.substring(n,r)),isNaN(n)?pc:(r+=1,r+n>e.length?Gi:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,Pn(this)};function Ks(t){t.Y=Date.now()+t.P,Up(t,t.P)}function Up(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=js(Fe(t.eb,t),e)}function Mo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FT(this.j,this.A),this.K!=2&&(Ss(3),et(17)),Pn(this),this.o=2,hs(this)):Up(this,this.Y-t)};function hs(t){t.l.G==0||t.I||rg(t.l,t)}function Pn(t){Mo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wl(t.W),Cp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yc(n.i,t))){if(n.I=t.N,!t.J&&yc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yi(n),$o(n);else break e;Pl(n),et(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=js(Fe(n.ab,n),6e3));if(1>=Hp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Dn(n,11)}else if((t.J||n.g==t)&&Yi(n),!Wi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(Ye(m,"spdy")||Ye(m,"quic")||Ye(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Cl(i,i.h),i.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,Te(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=og(r,r.H?r.la:null,r.W),o.J){Kp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Mo(a),Ks(a)),r.g=o}else tg(r);0<n.l.length&&Bo(n)}else l[0]!="stop"&&l[0]!="close"||Dn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Dn(n,7):Ol(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ss(4)}catch{}}function jT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(oc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Sl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oc(t)||typeof t=="string")fp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(oc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=jT(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Br(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Br)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=Br.prototype;P.R=function(){Al(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return Al(this),this.g.concat()};function Al(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Bn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Bn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}P.get=function(t,e){return Bn(this.h,t)?this.h[t]:e};P.set=function(t,e){Bn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Fp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof jn){this.g=e!==void 0?e:t.g,Ji(this,t.j),this.s=t.s,Qi(this,t.i),Xi(this,t.m),this.l=t.l,e=t.h;var n=new As;n.i=e.i,e.g&&(n.g=new Br(e.g),n.h=e.h),kh(this,n),this.o=t.o}else t&&(n=String(t).match(Fp))?(this.g=!!e,Ji(this,n[1]||"",!0),this.s=fs(n[2]||""),Qi(this,n[3]||"",!0),Xi(this,n[4]),this.l=fs(n[5]||"",!0),kh(this,n[6]||"",!0),this.o=fs(n[7]||"")):(this.g=!!e,this.h=new As(null,this.g))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rs(e,Nh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rs(e,Nh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(rs(n,n.charAt(0)=="/"?GT:zT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rs(n,QT)),t.join("")};function Jt(t){return new jn(t)}function Ji(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qi(t,e,n){t.i=n?fs(e,!0):e}function Xi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kh(t,e,n){e instanceof As?(t.h=e,XT(t.h,t.g)):(n||(e=rs(e,JT)),t.h=new As(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function Uo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function HT(t){return t instanceof jn?Jt(t):new jn(t,void 0)}function KT(t,e,n,r){var s=new jn(null,void 0);return t&&Ji(s,t),e&&Qi(s,e),n&&Xi(s,n),r&&(s.l=r),s}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,WT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function WT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nh=/[#\/\?@]/g,zT=/[#\?:]/g,GT=/[#\?]/g,JT=/[#\?@]/g,QT=/#/g;function As(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Br,t.h=0,t.i&&qT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=As.prototype;P.add=function(t,e){Tn(this),this.i=null,t=jr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vp(t,e){Tn(t),e=jr(t,e),Bn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Bn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Al(t)))}function $p(t,e){return Tn(t),e=jr(t,e),Bn(t.g.h,e)}P.forEach=function(t,e){Tn(this),this.g.forEach(function(n,r){fp(n,function(s){t.call(e,s,r,this)},this)},this)};P.T=function(){Tn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};P.R=function(t){Tn(this);var e=[];if(typeof t=="string")$p(this,t)&&(e=wh(e,this.g.get(jr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=wh(e,t[n])}return e};P.set=function(t,e){return Tn(this),this.i=null,t=jr(this,t),$p(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Bp(t,e,n){Vp(t,e),0<n.length&&(t.i=null,t.g.set(jr(t,e),hl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function jr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XT(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Vp(this,r),Bp(this,s,n))},t)),t.j=e}var YT=class{constructor(t,e){this.h=t,this.g=e}};function jp(t){this.l=t||ZT,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZT=10;function qp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hp(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cl(t,e){t.g?t.g.add(e):t.h=e}function Kp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jp.prototype.cancel=function(){if(this.i=Wp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hl(t.i)}function Rl(){}Rl.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Rl.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function e0(){this.g=new Rl}function t0(t,e,n){const r=n||"";try{Sl(t,function(s,i){let o=s;$s(s)&&(o=vl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function n0(t,e){const n=new Po;if(K.Image){const r=new Image;r.onload=ui(fi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ui(fi,n,r,"TestLoadImage: error",!1,e),r.onabort=ui(fi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ui(fi,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ws(t){this.l=t.$b||null,this.j=t.ib||!1}je(Ws,Tl);Ws.prototype.g=function(){return new Fo(this.l,this.j)};Ws.prototype.i=function(t){return function(){return t}}({});function Fo(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Fo,Le);var kl=0;P=Fo.prototype;P.open=function(t,e){if(this.readyState!=kl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cs(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=kl};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function zp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zs(this):Cs(this),this.readyState==3&&zp(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,zs(this))};P.Ta=function(t){this.g&&(this.response=t,zs(this))};P.ha=function(){this.g&&zs(this)};function zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cs(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var r0=K.JSON.parse;function ke(t){Le.call(this),this.headers=new Br,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Gp,this.K=this.L=!1}je(ke,Le);var Gp="",s0=/^https?$/i,i0=["POST","PUT"];P=ke.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?Rh(this.u):Rh(dc),this.g.onreadystatechange=Fe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Oh(this,i);return}t=n||"";const s=new Br(this.headers);r&&Sl(r,function(i,o){s.set(o,i)}),r=mT(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=hp(i0,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xp(this),0<this.B&&((this.K=o0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.pa,this)):this.A=El(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Oh(this,i)}};function o0(t){return Sr&&ET()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function a0(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof ul!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Oh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jp(t),Vo(t)}function Jp(t){t.D||(t.D=!0,Ve(t,"complete"),Ve(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),Vo(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vo(this,!0)),ke.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?Qp(this):this.cb())};P.cb=function(){Qp(this)};function Qp(t){if(t.h&&typeof ul!="undefined"&&(!t.C[1]||qt(t)!=4||t.ba()!=2)){if(t.v&&qt(t)==4)El(t.Fa,0,t);else if(Ve(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Fp)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!s0.test(s?s.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Jp(t)}}finally{Vo(t)}}}}function Vo(t,e){if(t.g){Xp(t);const n=t.g,r=t.C[0]?Ki:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function Xp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),r0(e)}};function Ph(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Gp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function c0(t){let e="";return fl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Nl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=c0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Xr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Yp(t){this.za=0,this.l=[],this.h=new Po,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xr("baseRetryDelayMs",5e3,t),this.$a=Xr("retryDelaySeedMs",1e4,t),this.Ya=Xr("forwardChannelMaxRetries",2,t),this.ra=Xr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new jp(t&&t.concurrentRequestLimit),this.Ca=new e0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=Yp.prototype;P.ma=8;P.G=1;function Ol(t){if(Zp(t),t.G==3){var e=t.V++,n=Jt(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),Gs(t,n),e=new Hs(t,t.h,e,void 0),e.K=2,e.v=Uo(Jt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=ag(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ks(e)}ig(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function $o(t){t.g&&(Dl(t),t.g.cancel(),t.g=null)}function Zp(t){$o(t),t.u&&(K.clearTimeout(t.u),t.u=null),Yi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ca(t,e){t.l.push(new YT(t.Za++,e)),t.G==3&&Bo(t)}function Bo(t){qp(t.i)||t.m||(t.m=!0,_l(t.Ha,t),t.C=0)}function l0(t,e){return Hp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=js(Fe(t.Ha,t,e),sg(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Hs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=dp(i),pp(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=eg(this,s,e),n=Jt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Gs(this,n),this.o&&i&&Nl(n,this.o,i),Cl(this.i,s),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),s.$=!0,gc(s,n,null)):gc(s,n,e),this.G=2}}else this.G==3&&(t?Dh(this,t):this.l.length==0||qp(this.i)||Dh(this))};function Dh(t,e){var n;e?n=e.m:n=t.V++;const r=Jt(t.F);Te(r,"SID",t.J),Te(r,"RID",n),Te(r,"AID",t.U),Gs(t,r),t.o&&t.s&&Nl(r,t.o,t.s),n=new Hs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=eg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Cl(t.i,n),gc(n,r,e)}function Gs(t,e){t.j&&Sl({},function(n,r){Te(e,r,n)})}function eg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Fe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{t0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function tg(t){t.g||t.u||(t.Y=1,_l(t.Ga,t),t.A=0)}function Pl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=js(Fe(t.Ga,t),sg(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,ng(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=js(Fe(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),$o(this),ng(this))};function Dl(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function ng(t){t.g=new Hs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Jt(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),Gs(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Nl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Uo(Jt(e)),n.s=null,n.U=!0,xp(n,t)}P.ab=function(){this.v!=null&&(this.v=null,$o(this),Pl(this),et(19))};function Yi(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function rg(t,e){var n=null;if(t.g==e){Yi(t),Dl(t),t.g=null;var r=2}else if(yc(t.i,e))n=e.D,Kp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Do(),Ve(r,new Np(r,n,e,s)),Bo(t)}else tg(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&l0(t,e)||r==2&&Pl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Dn(t,5);break;case 4:Dn(t,10);break;case 3:Dn(t,6);break;default:Dn(t,2)}}}function sg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Dn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Fe(t.jb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Ji(n,"https"),Uo(n)),n0(n.toString(),r)}else et(2);t.G=0,t.j&&t.j.va(e),ig(t),Zp(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function ig(t){t.G=0,t.I=-1,t.j&&((Wp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,hl(t.l),t.l.length=0),t.j.ua())}function og(t,e,n){let r=HT(n);if(r.i!="")e&&Qi(r,e+"."+r.i),Xi(r,r.m);else{const s=K.location;r=KT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&fl(t.aa,function(s,i){Te(r,i,s)}),e=t.D,n=t.sa,e&&n&&Te(r,e,n),Te(r,"VER",t.ma),Gs(t,r),r}function ag(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ke(new Ws({ib:!0})):new ke(t.qa),e.L=t.H,e}function cg(){}P=cg.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function Zi(){if(Sr&&!(10<=Number(TT)))throw Error("Environmental error: no available transport.")}Zi.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Le.call(this),this.g=new Yp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qr(this)}je(pt,Le);pt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),_l(Fe(t.hb,t,e))),et(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=og(t,null,t.W),Bo(t)};pt.prototype.close=function(){Ol(this.g)};pt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ca(this.g,e)}else this.v?(e={},e.__data__=vl(t),Ca(this.g,e)):Ca(this.g,t)};pt.prototype.M=function(){this.g.j=null,delete this.j,Ol(this.g),delete this.g,pt.Z.M.call(this)};function lg(t){Il.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(lg,Il);function ug(){bl.call(this),this.status=1}je(ug,bl);function qr(t){this.g=t}je(qr,cg);qr.prototype.xa=function(){Ve(this.g,"a")};qr.prototype.wa=function(t){Ve(this.g,new lg(t))};qr.prototype.va=function(t){Ve(this.g,new ug(t))};qr.prototype.ua=function(){Ve(this.g,"b")};Zi.prototype.createWebChannel=Zi.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;Op.COMPLETE="complete";Pp.EventType=qs;qs.OPEN="a";qs.CLOSE="b";qs.ERROR="c";qs.MESSAGE="d";Le.prototype.listen=Le.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var u0=function(){return new Zi},h0=function(){return Do()},Ra=xo,f0=Op,d0=Qn,xh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},p0=Ws,di=Pp,g0=ke;const Lh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new al("@firebase/firestore");function Mh(){return qn.logLevel}function F(t,...e){if(qn.logLevel<=ie.DEBUG){const n=e.map(xl);qn.debug(`Firestore (${Hr}): ${t}`,...n)}}function mn(t,...e){if(qn.logLevel<=ie.ERROR){const n=e.map(xl);qn.error(`Firestore (${Hr}): ${t}`,...n)}}function Uh(t,...e){if(qn.logLevel<=ie.WARN){const n=e.map(xl);qn.warn(`Firestore (${Hr}): ${t}`,...n)}}function xl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function ye(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class v0{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new m0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new rt(e)}}class _0{constructor(e,n,r){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class w0{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new _0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T0{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=s=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(s))};const r=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),new E0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ll.I=-1;class hg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=I0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new ft(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Rs{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const b0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Rs{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return b0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.fields=e,e.sort(st.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const S0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=S0.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pg(t){const e=t.mapValue.fields.__previous_value__;return dg(e)?pg(e):e}function Ns(t){const e=yn(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return t==null}function eo(t){return t===0&&1/t==-1/0}function A0(t){return typeof t=="number"&&Number.isInteger(t)&&!eo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ie.fromString(e))}static fromName(e){return new W(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dg(t)?4:10:G()}function Vt(t,e){if(t===e)return!0;const n=Hn(t);if(n!==Hn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=yn(r.timestampValue),o=yn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Cr(r.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Re(r.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(r.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Re(r.integerValue)===Re(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Re(r.doubleValue),o=Re(s.doubleValue);return i===o?eo(i)===eo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Fh(i)!==Fh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Vt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Os(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function Rr(t,e){if(t===e)return 0;const n=Hn(t),r=Hn(e);if(n!==r)return ae(n,r);switch(n){case 0:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Re(s.integerValue||s.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vh(t.timestampValue,e.timestampValue);case 4:return Vh(Ns(t),Ns(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Cr(s),a=Cr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ae(o[c],a[c]);if(l!==0)return l}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ae(Re(s.latitude),Re(i.latitude));return o!==0?o:ae(Re(s.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Rr(o[c],a[c]);if(l)return l}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ae(a[u],l[u]);if(h!==0)return h;const f=Rr(o[a[u]],c[l[u]]);if(f!==0)return f}return ae(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Vh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=yn(t),r=yn(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function Ml(t){return vc(t)}function vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=yn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=vc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${vc(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function _c(t){return!!t&&"integerValue"in t}function Ul(t){return!!t&&"arrayValue"in t}function $h(t){return!!t&&"nullValue"in t}function Bh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ti(t){return!!t&&"mapValue"in t}function ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ti(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ds(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ti(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(ds(this.value))}}function gg(t){const e=[];return Xn(t.fields,(n,r)=>{const s=new st([n]);if(Ti(r)){const i=gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ks(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Ke(e,0,se.min(),ut.empty(),0)}static newFoundDocument(e,n,r){return new Ke(e,1,n,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,ut.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,ut.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function jh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new C0(t,e,n,r,s,i,o)}function Fl(t){const e=J(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>k0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=to(e.startAt)),e.endAt&&(n+="|ub:",n+=to(e.endAt)),e.R=n}return e.R}function R0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ml(r.value)}`;var r}).join(", ")}]`),Kr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+to(t.startAt)),t.endAt&&(e+=", endAt: "+to(t.endAt)),`Target(${e})`}function Vl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!U0(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Vt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hh(t.startAt,e.startAt)&&Hh(t.endAt,e.endAt)}function wc(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new N0(e,n,r):n==="array-contains"?new D0(e,r):n==="in"?new x0(e,r):n==="not-in"?new L0(e,r):n==="array-contains-any"?new M0(e,r):new ot(e,n,r)}static P(e,n,r){return n==="in"?new O0(e,r):new P0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Rr(n,this.value)):n!==null&&Hn(this.value)===Hn(n)&&this.v(Rr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function k0(t){return t.field.canonicalString()+t.op.toString()+Ml(t.value)}class N0 extends ot{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.v(n)}}class O0 extends ot{constructor(e,n){super(e,"in",n),this.keys=mg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class P0 extends ot{constructor(e,n){super(e,"not-in",n),this.keys=mg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class D0 extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ul(n)&&Os(n.arrayValue,this.value)}}class x0 extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Os(this.value.arrayValue,n)}}class L0 extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Os(this.value.arrayValue,n)}}class M0 extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ul(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Os(this.value.arrayValue,r))}}class Ec{constructor(e,n){this.position=e,this.before=n}}function to(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ml(e)).join(",")}`}class ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function U0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Rr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Hh(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function F0(t,e,n,r,s,i,o,a){return new jo(t,e,n,r,s,i,o,a)}function qo(t){return new jo(t)}function Ii(t){return!Kr(t.limit)&&t.limitType==="F"}function no(t){return!Kr(t.limit)&&t.limitType==="L"}function V0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $0(t){for(const e of t.filters)if(e.V())return e.field;return null}function B0(t){return t.collectionGroup!==null}function Ps(t){const e=J(t);if(e.S===null){e.S=[];const n=$0(e),r=V0(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new ps(n)),e.S.push(new ps(st.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new ps(st.keyField(),i))}}}return e.S}function Kn(t){const e=J(t);if(!e.D)if(e.limitType==="F")e.D=jh(e.path,e.collectionGroup,Ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ps(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ps(i.field,o))}const r=e.endAt?new Ec(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Ec(e.startAt.position,!e.startAt.before):null;e.D=jh(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.D}function j0(t,e,n){return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ho(t,e){return Vl(Kn(t),Kn(e))&&t.limitType===e.limitType}function yg(t){return`${Fl(Kn(t))}|lt:${t.limitType}`}function Tc(t){return`Query(target=${R0(Kn(t))}; limitType=${t.limitType})`}function Ko(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!qh(n.startAt,Ps(n),r)||n.endAt&&qh(n.endAt,Ps(n),r))}(t,e)}function vg(t){return(e,n)=>{let r=!1;for(const s of Ps(t)){const i=q0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function q0(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Rr(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eo(e)?"-0":e}}function wg(t){return{integerValue:""+t}}function H0(t,e){return A0(e)?wg(e):_g(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function K0(t,e,n){return t instanceof ro?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ds?Tg(t,e):t instanceof xs?Ig(t,e):function(r,s){const i=Eg(r,s),o=Kh(i)+Kh(r.N);return _c(i)&&_c(r.N)?wg(o):_g(r.k,o)}(t,e)}function W0(t,e,n){return t instanceof Ds?Tg(t,e):t instanceof xs?Ig(t,e):n}function Eg(t,e){return t instanceof so?_c(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ro extends Wo{}class Ds extends Wo{constructor(e){super(),this.elements=e}}function Tg(t,e){const n=bg(e);for(const r of t.elements)n.some(s=>Vt(s,r))||n.push(r);return{arrayValue:{values:n}}}class xs extends Wo{constructor(e){super(),this.elements=e}}function Ig(t,e){let n=bg(e);for(const r of t.elements)n=n.filter(s=>!Vt(s,r));return{arrayValue:{values:n}}}class so extends Wo{constructor(e,n){super(),this.k=e,this.N=n}}function Kh(t){return Re(t.integerValue||t.doubleValue)}function bg(t){return Ul(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function z0(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ds&&r instanceof Ds||n instanceof xs&&r instanceof xs?Ar(n.elements,r.elements,Vt):n instanceof so&&r instanceof so?Vt(n.N,r.N):n instanceof ro&&r instanceof ro}(t.transform,e.transform)}class G0{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zo{}function J0(t,e,n){t instanceof Go?function(r,s,i){const o=r.value.clone(),a=Gh(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yn?function(r,s,i){if(!bi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Gh(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Sg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ic(t,e,n){t instanceof Go?function(r,s,i){if(!bi(r.precondition,s))return;const o=r.value.clone(),a=Jh(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(zh(s),o).setHasLocalMutations()}(t,e,n):t instanceof Yn?function(r,s,i){if(!bi(r.precondition,s))return;const o=Jh(r.fieldTransforms,i,s),a=s.data;a.setAll(Sg(r)),a.setAll(o),s.convertToFoundDocument(zh(s),a).setHasLocalMutations()}(t,e,n):function(r,s){bi(r.precondition,s)&&s.convertToNoDocument(se.min())}(t,e)}function Q0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Eg(r.transform,s||null);i!=null&&(n==null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function Wh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ar(n,r,(s,i)=>z0(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function zh(t){return t.isFoundDocument()?t.version:se.min()}class Go extends zo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Yn extends zo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Sg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gh(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,W0(o,a,n[s]))}return r}function Jh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,K0(i,o,e))}return r}class Ag extends zo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class X0 extends zo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function Z0(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Cg(t){if(t===void 0)return mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pi(this.root,e,this.comparator,!0)}}class pi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Me.RED,this.left=s!=null?s:Me.EMPTY,this.right=i!=null?i:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qh(this.data.getIterator())}getIteratorFrom(e){return new Qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new Ge(W.comparator);function Wn(){return eI}const tI=new Ge(W.comparator);function bc(){return tI}const nI=new Ge(W.comparator);function rI(){return nI}const sI=new $e(W.comparator);function we(...t){let e=sI;for(const n of t)e=e.add(n);return e}const iI=new $e(ae);function Rg(){return iI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,n)),new Jo(se.min(),r,Rg(),Wn(),we())}}class Js{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Js(Be.EMPTY_BYTE_STRING,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r,s){this.$=e,this.removedTargetIds=n,this.key=r,this.O=s}}class kg{constructor(e,n){this.targetId=e,this.M=n}}class Ng{constructor(e,n,r=Be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xh{constructor(){this.F=0,this.L=Zh(),this.B=Be.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=we(),n=we(),r=we();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Js(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=Zh()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class oI{constructor(e){this.et=e,this.nt=new Map,this.st=Wn(),this.it=Yh(),this.rt=new $e(ae)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,s)=>{this.lt(s)&&n(s)})}dt(e){const n=e.targetId,r=e.M.count,s=this.wt(n);if(s){const i=s.target;if(wc(i))if(r===0){const o=new W(i.path);this.at(n,o,Ke.newNoDocument(o,se.min()))}else ye(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&wc(a.target)){const c=new W(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,Ke.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let r=we();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new Jo(e,n,this.rt,this.st,r);return this.st=Wn(),this.it=Yh(),this.rt=new $e(ae),s}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,n)?s.J(n,1):s.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Xh,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new $e(ae),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Xh),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Yh(){return new Ge(W.comparator)}function Zh(){return new Ge(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class lI{constructor(e,n){this.databaseId=e,this.C=n}}function io(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.C?e.toBase64():e.toUint8Array()}function uI(t,e){return io(t,e.toTimestamp())}function zt(t){return ye(!!t),se.fromTimestamp(function(e){const n=yn(e);return new ft(n.seconds,n.nanos)}(t))}function $l(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pg(t){const e=Ie.fromString(t);return ye(Lg(e)),e}function Sc(t,e){return $l(t.databaseId,e.path)}function ka(t,e){const n=Pg(e);if(n.get(1)!==t.databaseId.projectId)throw new j(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Dg(n))}function Ac(t,e){return $l(t.databaseId,e)}function hI(t){const e=Pg(t);return e.length===4?Ie.emptyPath():Dg(e)}function Cc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dg(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ef(t,e,n){return{name:Sc(t,e),fields:n.value.mapValue.fields}}function fI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.C?(ye(l===void 0||typeof l=="string"),Be.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),Be.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Cg(c.code);return new j(l,c.message||"")}(o);n=new Ng(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ka(t,r.document.name),i=zt(r.document.updateTime),o=new ut({mapValue:{fields:r.document.fields}}),a=Ke.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Si(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ka(t,r.document),i=r.readTime?zt(r.readTime):se.min(),o=Ke.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Si([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ka(t,r.document),i=r.removedTargetIds||[];n=new Si([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Y0(s),o=r.targetId;n=new kg(o,i)}}return n}function dI(t,e){let n;if(e instanceof Go)n={update:ef(t,e.key,e.value)};else if(e instanceof Ag)n={delete:Sc(t,e.key)};else if(e instanceof Yn)n={update:ef(t,e.key,e.data),updateMask:II(e.fieldMask)};else{if(!(e instanceof X0))return G();n={verify:Sc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof ro)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ds)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof so)return{fieldPath:i.field.canonicalString(),increment:o.N};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:uI(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function pI(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?zt(r.updateTime):zt(s);return i.isEqual(se.min())&&(i=zt(s)),new G0(i,r.transformResults||[])}(n,e))):[]}function gI(t,e){return{documents:[Ac(t,e.path)]}}function mI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ac(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ac(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Bh(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NAN"}};if($h(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Bh(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NOT_NAN"}};if($h(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(u.field),op:wI(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:or(l.field),direction:_I(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||Kr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=tf(e.startAt)),e.endAt&&(n.structuredQuery.endAt=tf(e.endAt)),n}function yI(t){let e=hI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=xg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ps(hr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Kr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=nf(n.startAt));let l=null;return n.endAt&&(l=nf(n.endAt)),F0(e,s,o,i,a,"F",c,l)}function vI(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xg(t){return t?t.unaryFilter!==void 0?[TI(t)]:t.fieldFilter!==void 0?[EI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>xg(e)).reduce((e,n)=>e.concat(n)):G():[]}function tf(t){return{before:t.before,values:t.position}}function nf(t){const e=!!t.before,n=t.values||[];return new Ec(n,e)}function _I(t){return aI[t]}function wI(t){return cI[t]}function or(t){return{fieldPath:t.canonicalString()}}function hr(t){return st.fromServerFormat(t.fieldPath)}function EI(t){return ot.create(hr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function TI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hr(t.unaryFilter.field);return ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hr(t.unaryFilter.field);return ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hr(t.unaryFilter.field);return ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hr(t.unaryFilter.field);return ot.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function II(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const bI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&J0(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ic(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ic(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(se.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,r)=>Wh(n,r))&&Ar(this.baseMutations,e.baseMutations,(n,r)=>Wh(n,r))}}class Bl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=rI();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bl(e,n,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=se.min(),o=se.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.Gt=e}}function RI(t){const e=yI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?j0(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.zt=new NI}addToCollectionParentIndex(e,n){return this.zt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.zt.getEntries(n))}}class NI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new kr(0)}static re(){return new kr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==bI)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Xn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fg(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:se.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ke.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Pn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Sn(e,n.path):B0(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new W(n)).next(r=>{let s=bc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Dn(e,n,r){const s=n.collectionGroup;let i=bc();return this.Jt.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new jo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Cn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Cn(e,n,r){let s,i;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=Ke.newInvalidDocument(u),s=s.insert(u,h)),Ic(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{Ko(n,a)||(s=s.remove(o))}),s))}Nn(e,n,r){let s=we();for(const o of n)for(const a of o.mutations)a instanceof Yn&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.Je.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=s}static $n(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(se.min())?this.Fn(e,n):this.Mn.vn(e,s).next(i=>{const o=this.Ln(n,i);return(Ii(n)||no(n))&&this.Bn(n.limitType,o,s,r)?this.Fn(e,n):(Mh()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tc(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let r=new $e(vg(e));return n.forEach((s,i)=>{Ko(e,i)&&(r=r.add(i))}),r}Bn(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Mh()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Tc(n)),this.Mn.getDocumentsMatchingQuery(e,n,se.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,s){this.persistence=e,this.Un=n,this.k=s,this.qn=new Ge(ae),this.Kn=new Ys(i=>Fl(i),Vl),this.jn=se.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Mg(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function xI(t,e,n,r){return new DI(t,e,n,r)}async function Ug(t,e){const n=J(t);let r=n.An,s=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Mg(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=we();for(const f of a){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of c){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return s.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.An=r,n.Wn=s,n.Un.On(n.Wn),i}function LI(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const b=c.docVersions.get(p);ye(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&l.addEntry(m,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,s))})}function Fg(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function MI(t,e){const n=J(t),r=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.He.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.He.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Be.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(u,f),function(p,m,b){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.He.updateTargetData(i,f))});let c=Wn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(UI(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(se.min())){const l=n.He.getLastRemoteSnapshotVersion(i).next(u=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=s,i))}function UI(t,e,n,r,s){let i=we();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Wn();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function FI(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function VI(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.He.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.He.allocateTargetId(r).next(o=>(s=new Un(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qn.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Rc(t,e,n){const r=J(t),s=r.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qs(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(s.target)}function rf(t,e,n){const r=J(t);let s=se.min(),i=we();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Kn.get(l);return h!==void 0?O.resolve(u.qn.get(h)):u.He.getTargetData(c,l)}(r,o,Kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:we())).next(a=>({documents:a,zn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return O.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:zt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:RI(r.bundledQuery),readTime:zt(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.ts=new $e(Oe.es),this.ns=new $e(Oe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Oe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new W(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.ns.forEachInRange([r,s],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new W(new Ie([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=we();return this.ns.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return W.comparator(e.key,n.key)||ae(e.fs,n.fs)}static ss(e,n){return ae(e.fs,n.fs)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new $e(Oe.es)}checkEmpty(e){return O.resolve(this.An.length===0)}addMutationBatch(e,n,r,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new AI(i,n,r,s);this.An.push(o);for(const a of s)this.ws=this.ws.add(new Oe(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.gs(r),i=s<0?0:s;return O.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return O.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([r,s],o=>{const a=this._s(o.fs);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(ae);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{r=r.add(a.fs)})}),O.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new W(i),0);let a=new $e(ae);return this.ws.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.fs)),!0)},o),O.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return O.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Oe(n,0),s=this.ws.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,O.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Ge(W.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ke.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=Wn();const i=new W(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Ko(n,c)&&(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}Es(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qI(this)}getSize(e){return O.resolve(this.size)}}class qI extends OI{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.De.addEntry(e,s.document,this.getReadTime(r))):this.De.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.persistence=e,this.Is=new Ys(n=>Fl(n),Vl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.As=0,this.Rs=new ql,this.targetCount=0,this.bs=kr.ie()}forEachTarget(e,n){return this.Is.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),O.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new kr(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ae(n),O.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.Ps={},this.Be=new Ll(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new HI(this),this.Jt=new kI,this.Je=function(r,s){return new jI(r,s)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new CI(n),this.Ye=new $I(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new BI(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new WI(this.Be.next());return this.referenceDelegate.Vs(),r(s).next(i=>this.referenceDelegate.Ss(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ds(e,n){return O.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class WI extends SI{constructor(e){super(),this.currentSequenceNumber=e}}class Hl{constructor(e){this.persistence=e,this.Cs=new ql,this.Ns=null}static ks(e){return new Hl(e)}get xs(){if(this.Ns)return this.Ns;throw G()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=W.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return O.or([()=>O.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class sf{constructor(){this.activeTargetIds=Rg()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zI{constructor(){this.pi=new sf,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new sf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,s,i){const o=this.Ui(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.qi(a,s,i),this.Ki(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Uh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ji(e,n,r,s,i){return this.Bi(e,n,r,s,i)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ui(e,n){const r=JI[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,s){return new Promise((i,o)=>{const a=new g0;a.listenOnce(f0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ra.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ra.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new j(I.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(m)>=0?m:I.UNKNOWN}(h.status);o(new j(f,h.message))}else o(new j(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}Qi(e,n,r){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=u0(),o=h0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new p0({})),this.qi(a.initMessageHeaders,n,r),op()||cp()||pE()||lp()||gE()||ap()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new QI({Vi:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Si:()=>l.close()}),p=(m,b,_)=>{m.listen(b,C=>{try{_(C)}catch(D){setTimeout(()=>{throw D},0)}})};return p(l,di.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),p(l,di.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.Oi())}),p(l,di.EventType.ERROR,m=>{h||(h=!0,Uh("Connection","WebChannel transport errored:",m),f.Oi(new j(I.UNAVAILABLE,"The operation could not be completed")))}),p(l,di.EventType.MESSAGE,m=>{var b;if(!h){const _=m.data[0];ye(!!_);const C=_,D=C.error||((b=C[0])===null||b===void 0?void 0:b.error);if(D){F("Connection","WebChannel received error:",D);const V=D.status;let M=function(ce){const Q=Ce[ce];if(Q!==void 0)return Cg(Q)}(V),ne=D.message;M===void 0&&(M=I.INTERNAL,ne="Unknown error status: "+V+" with message "+D.message),h=!0,f.Oi(new j(M,ne)),l.close()}else F("Connection","WebChannel received:",_),f.Mi(_)}}),p(o,d0.STAT_EVENT,m=>{m.stat===xh.PROXY?F("Connection","Detected buffering proxy"):m.stat===xh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Na(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){return new lI(t,!0)}class Vg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,s,i,o,a,c){this.Me=e,this.nr=r,this.sr=s,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Vg(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.rr===n&&this.Ir(r,s)},r=>{e(()=>{const s=new j(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(s)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{r(()=>this.Ar(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YI extends $g{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=fI(this.k,e),r=function(s){if(!("targetChange"in s))return se.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?se.min():i.readTime?zt(i.readTime):se.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=Cc(this.k),n.addTarget=function(s,i){let o;const a=i.target;return o=wc(a)?{documents:gI(s,a)}:{query:mI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Og(s,i.resumeToken):i.snapshotVersion.compareTo(se.min())>0&&(o.readTime=io(s,i.snapshotVersion.toTimestamp())),o}(this.k,e);const r=vI(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Cc(this.k),n.removeTarget=e,this.gr(n)}}class ZI extends $g{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=pI(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.Cr(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Cc(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dI(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=s,this.$r=!1}Or(){if(this.$r)throw new j(I.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.Bi(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(I.UNKNOWN,s.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.ji(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(I.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class tb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(mn(n),this.Lr=!1):F("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Zn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.Gr.add(4),await Zs(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Xo(c)}(this))})}),this.Jr=new tb(r,s)}}async function Xo(t){if(Zn(t))for(const e of t.zr)await e(!0)}async function Zs(t){for(const e of t.zr)await e(!1)}function Bg(t,e){const n=J(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),zl(n)?Wl(n):Wr(n).lr()&&Kl(n,e))}function jg(t,e){const n=J(t),r=Wr(n);n.Wr.delete(e),r.lr()&&qg(n,e),n.Wr.size===0&&(r.lr()?r._r():Zn(n)&&n.Jr.set("Unknown"))}function Kl(t,e){t.Yr.X(e.targetId),Wr(t).Pr(e)}function qg(t,e){t.Yr.X(e),Wr(t).vr(e)}function Wl(t){t.Yr=new oI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Wr(t).start(),t.Jr.Br()}function zl(t){return Zn(t)&&!Wr(t).hr()&&t.Wr.size>0}function Zn(t){return J(t).Gr.size===0}function Hg(t){t.Yr=void 0}async function rb(t){t.Wr.forEach((e,n)=>{Kl(t,e)})}async function sb(t,e){Hg(t),zl(t)?(t.Jr.Kr(e),Wl(t)):t.Jr.set("Unknown")}async function ib(t,e,n){if(t.Jr.set("Online"),e instanceof Ng&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oo(t,r)}else if(e instanceof Si?t.Yr.ot(e):e instanceof kg?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(se.min()))try{const r=await Fg(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Wr.get(c);l&&s.Wr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Wr.get(a);if(!c)return;s.Wr.set(a,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),qg(s,a);const l=new Un(c.target,a,1,c.sequenceNumber);Kl(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await oo(t,r)}}async function oo(t,e,n){if(!Qs(e))throw e;t.Gr.add(1),await Zs(t),t.Jr.set("Offline"),n||(n=()=>Fg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Xo(t)})}function Kg(t,e){return e().catch(n=>oo(t,n,e))}async function Yo(t){const e=J(t),n=vn(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;ob(e);)try{const s=await FI(e.localStore,r);if(s===null){e.Qr.length===0&&n._r();break}r=s.batchId,ab(e,s)}catch(s){await oo(e,s)}Wg(e)&&zg(e)}function ob(t){return Zn(t)&&t.Qr.length<10}function ab(t,e){t.Qr.push(e);const n=vn(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Wg(t){return Zn(t)&&!vn(t).hr()&&t.Qr.length>0}function zg(t){vn(t).start()}async function cb(t){vn(t).kr()}async function lb(t){const e=vn(t);for(const n of t.Qr)e.Dr(n.mutations)}async function ub(t,e,n){const r=t.Qr.shift(),s=Bl.from(r,e,n);await Kg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yo(t)}async function hb(t,e){e&&vn(t).Sr&&await async function(n,r){if(s=r.code,Z0(s)&&s!==I.ABORTED){const i=n.Qr.shift();vn(n).wr(),await Kg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Yo(n)}var s}(t,e),Wg(t)&&zg(t)}async function af(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Zn(n);n.Gr.add(3),await Zs(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Xo(n)}async function fb(t,e){const n=J(t);e?(n.Gr.delete(2),await Xo(n)):e||(n.Gr.add(2),await Zs(n),n.Jr.set("Unknown"))}function Wr(t){return t.Xr||(t.Xr=function(e,n,r){const s=J(e);return s.Or(),new YI(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:rb.bind(null,t),Ni:sb.bind(null,t),br:ib.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),zl(t)?Wl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Hg(t))})),t.Xr}function vn(t){return t.Zr||(t.Zr=function(e,n,r){const s=J(e);return s.Or(),new ZI(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:cb.bind(null,t),Ni:hb.bind(null,t),Nr:lb.bind(null,t),Cr:ub.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Yo(t)):(await t.Zr.stop(),t.Qr.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Gl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Qs(t))return new j(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=bc(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.eo=new Ge(W.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):G():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Nr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Nr(e,n,yr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.so=void 0,this.listeners=[]}}class pb{constructor(){this.queries=new Ys(e=>yg(e),Ho),this.onlineState="Unknown",this.io=new Set}}async function Gg(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new db),s)try{i.so=await n.onListen(r)}catch(o){const a=Jl(o,`Initialization of query '${Tc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&Ql(n)}async function Jg(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function gb(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(s)&&(r=!0);o.so=s}}r&&Ql(n)}function mb(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ql(t){t.io.forEach(e=>{e.next()})}class Qg{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Nr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.key=e}}class Yg{constructor(e){this.key=e}}class yb{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=we(),this.mutatedKeys=we(),this.Ao=vg(e),this.Ro=new yr(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new cf,s=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Ii(this.query)&&s.size===this.query.limit?s.last():null,l=no(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Ko(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?m!==b&&(r.track({type:3,doc:p}),_=!0):this.Vo(f,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.Ao(p,c)>0||l&&this.Ao(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Ii(this.query)||no(this.query))for(;o.size>this.query.limit;){const u=Ii(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ro:o,vo:r,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(f)}(l.type,u.type)||this.Ao(l.doc,u.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new Nr(this.query,e.Ro,s,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new cf,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=we(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Yg(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Xg(r))}),n}ko(e){this.To=e.zn,this.Io=we();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Nr.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class vb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _b{constructor(e){this.key=e,this.$o=!1}}class wb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Ys(a=>yg(a),Ho),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ge(W.comparator),this.Uo=new Map,this.qo=new ql,this.Ko={},this.jo=new Map,this.Qo=kr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Eb(t,e){const n=Ob(t);let r,s;const i=n.Mo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await VI(n.localStore,Kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Tb(n,e,r,a==="current"),n.isPrimaryClient&&Bg(n.remoteStore,o)}return s}async function Tb(t,e,n,r){t.Go=(u,h,f)=>async function(p,m,b,_){let C=m.view.Po(b);C.Bn&&(C=await rf(p.localStore,m.query,!1).then(({documents:M})=>m.view.Po(M,C)));const D=_&&_.targetChanges.get(m.targetId),V=m.view.applyChanges(C,p.isPrimaryClient,D);return uf(p,m.targetId,V.Co),V.snapshot}(t,u,h,f);const s=await rf(t.localStore,e,!0),i=new yb(e,s.zn),o=i.Po(s.documents),a=Js.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);uf(t,n,c.Co);const l=new vb(e,n,i);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Ib(t,e){const n=J(t),r=n.Mo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!Ho(i,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jg(n.remoteStore,r.targetId),kc(n,r.targetId)}).catch(Xs)):(kc(n,r.targetId),await Rc(n.localStore,r.targetId,!0))}async function bb(t,e,n){const r=Pb(t);try{const s=await function(i,o){const a=J(i),c=ft.now(),l=o.reduce((h,f)=>h.add(f.key),we());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{u=f;const p=[];for(const m of o){const b=Q0(m,u.get(m.key));b!=null&&p.push(new Yn(m.key,b,gg(b.value.mapValue),Wt.exists(!0)))}return a.An.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new Ge(ae)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(r,s.batchId,n),await ei(r,s.changes),await Yo(r.remoteStore)}catch(s){const i=Jl(s,"Failed to persist write");n.reject(i)}}async function Zg(t,e){const n=J(t);try{const r=await MI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Uo.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.$o=!0:s.modifiedDocuments.size>0?ye(o.$o):s.removedDocuments.size>0&&(ye(o.$o),o.$o=!1))}),await ei(n,r,e)}catch(r){await Xs(r)}}function lf(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Mo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ro(o)&&(c=!0)}),c&&Ql(a)}(r.eventManager,e),s.length&&r.Oo.br(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sb(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Uo.get(e),i=s&&s.key;if(i){let o=new Ge(W.comparator);o=o.insert(i,Ke.newNoDocument(i,se.min()));const a=we().add(i),c=new Jo(se.min(),new Map,new $e(ae),o,a);await Zg(r,c),r.Bo=r.Bo.remove(i),r.Uo.delete(e),Xl(r)}else await Rc(r.localStore,e,!1).then(()=>kc(r,e,n)).catch(Xs)}async function Ab(t,e){const n=J(t),r=e.batch.batchId;try{const s=await LI(n.localStore,e);tm(n,r,null),em(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ei(n,s)}catch(s){await Xs(s)}}async function Cb(t,e,n){const r=J(t);try{const s=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.An.lookupMutationBatch(c,o).next(u=>(ye(u!==null),l=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,l))})}(r.localStore,e);tm(r,e,n),em(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ei(r,s)}catch(s){await Xs(s)}}function em(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function tm(t,e,n){const r=J(t);let s=r.Ko[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ko[r.currentUser.toKey()]=s}}function kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||nm(t,r)})}function nm(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(jg(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Xl(t))}function uf(t,e,n){for(const r of n)r instanceof Xg?(t.qo.addReference(r.key,e),Rb(t,r)):r instanceof Yg?(F("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||nm(t,r.key)):G()}function Rb(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Xl(t))}function Xl(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new W(Ie.fromString(e)),r=t.Qo.next();t.Uo.set(r,new _b(n)),t.Bo=t.Bo.insert(n,r),Bg(t.remoteStore,new Un(Kn(qo(n.path)),r,2,Ll.I))}}async function ei(t,e,n){const r=J(t),s=[],i=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,c)=>{o.push(r.Go(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=jl.$n(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Oo.br(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Qs(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qn.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.qn=l.qn.insert(h,m)}}}(r.localStore,i))}async function kb(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Ug(n.localStore,e);n.currentUser=e,function(s,i){s.jo.forEach(o=>{o.forEach(a=>{a.reject(new j(I.CANCELLED,i))})}),s.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(n,r.Gn)}}function Nb(t,e){const n=J(t),r=n.Uo.get(e);if(r&&r.$o)return we().add(r.key);{let s=we();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Mo.get(o);s=s.unionWith(a.view.bo)}return s}}function Ob(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sb.bind(null,e),e.Oo.br=gb.bind(null,e.eventManager),e.Oo.zo=mb.bind(null,e.eventManager),e}function Pb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cb.bind(null,e),e}class Db{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Qo(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return xI(this.persistence,new PI,e.initialUser,this.k)}Yo(e){return new KI(Hl.ks,this.k)}Jo(e){return new zI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kb.bind(null,this.syncEngine),await fb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pb}createDatastore(e){const n=Qo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new XI(s));var s;return function(i,o,a,c){return new eb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>lf(this.syncEngine,a,0),o=of.Pt()?new of:new GI,new nb(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new wb(r,s,i,o,a,c);return l&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);F("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Zs(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=hg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mb(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ug(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ub(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fb(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>af(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>af(e.remoteStore,i)),t.onlineComponents=e}async function Fb(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Mb(t,new Db)),t.offlineComponents}async function sm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Ub(t,new xb)),t.onlineComponents}function Vb(t){return sm(t).then(e=>e.syncEngine)}async function Nc(t){const e=await sm(t),n=e.eventManager;return n.onListen=Eb.bind(null,e.syncEngine),n.onUnlisten=Ib.bind(null,e.syncEngine),n}function $b(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new rm({next:h=>{i.enqueueAndForget(()=>Jg(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new j(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new j(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Qg(qo(o.path),l,{includeMetadataChanges:!0,wo:!0});return Gg(s,u)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}class Bb{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ls{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e,n){if(!n)throw new j(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jb(t,e,n,r){if(e===!0&&r===!0)throw new j(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ff(t){if(!W.isDocumentKey(t))throw new j(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(W.isDocumentKey(t))throw new j(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function It(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yl(t);throw new j(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1,e instanceof Ls?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new j(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(s.options.projectId)}(e))}get app(){if(!this._app)throw new j(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new y0;switch(n.type){case"gapi":const r=n.client;return ye(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new w0(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hf.get(e);n&&(F("ComponentProvider","Removing Datastore"),hf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class Zo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class pn extends Zo{constructor(e,n,r){super(e,n,qo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new W(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function ER(t,e,...n){if(t=be(t),im("collection","path",e),t instanceof Zl){const r=Ie.fromString(e,...n);return df(r),new pn(t,null,r)}{if(!(t instanceof tt||t instanceof pn))throw new j(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return df(r),new pn(t.firestore,null,r)}}function qb(t,e,...n){if(t=be(t),arguments.length===1&&(e=hg.A()),im("doc","path",e),t instanceof Zl){const r=Ie.fromString(e,...n);return ff(r),new tt(t,null,new W(r))}{if(!(t instanceof tt||t instanceof pn))throw new j(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return ff(r),new tt(t.firestore,t instanceof pn?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Vg(this,"async_queue_retry"),this.bc=()=>{const n=Na();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new dn;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Qs(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const s=Gl.createAndSchedule(this,e,n,r,i=>this.Sc(i));return this.Tc.push(s),s}Pc(){this.Ec&&G()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function gf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _n extends Zl{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Hb,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||om(this),this._firestoreClient.terminate()}}function TR(t=ll()){return Ro(t,"firestore").getImmediate()}function eu(t){return t._firestoreClient||om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function om(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Bb(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Lb(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Or(Be.fromBase64String(e))}catch(n){throw new j(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Or(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=/^__.*__$/;class Wb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}class am{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ru{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Oc({path:r,Fc:!1});return s.Lc(e),s}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Oc({path:r,Fc:!1});return s.xc(),s}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return ao(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(cm(this.$c)&&Kb.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class zb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Qo(e)}Qc(e,n,r,s=!1){return new ru({$c:e,methodName:n,jc:r,path:st.emptyPath(),Fc:!1,Kc:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),n=Qo(t._databaseId);return new zb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lm(t,e,n,r,s,i={}){const o=t.Qc(i.merge||i.mergeFields?2:0,e,n,s);iu("Data must be an object, but it was:",o,r);const a=um(r,o);let c,l;if(i.merge)c=new ks(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Oc(e,h,n);if(!o.contains(f))throw new j(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);fm(u,f)||u.push(f)}c=new ks(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Wb(new ut(a),c,l)}class ta extends tu{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ta}}function Gb(t,e,n,r){const s=t.Qc(1,e,n);iu("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();Xn(r,(c,l)=>{const u=ou(e,c,n);l=be(l);const h=s.Bc(u);if(l instanceof ta)i.push(u);else{const f=na(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new ks(i);return new am(o,a,s.fieldTransforms)}function Jb(t,e,n,r,s,i){const o=t.Qc(1,e,n),a=[Oc(e,r,n)],c=[s];if(i.length%2!=0)throw new j(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Oc(e,i[f])),c.push(i[f+1]);const l=[],u=ut.empty();for(let f=a.length-1;f>=0;--f)if(!fm(l,a[f])){const p=a[f];let m=c[f];m=be(m);const b=o.Bc(p);if(m instanceof ta)l.push(p);else{const _=na(m,b);_!=null&&(l.push(p),u.set(p,_))}}const h=new ks(l);return new am(u,h,o.fieldTransforms)}function na(t,e){if(hm(t=be(t)))return iu("Unsupported field value:",e,t),um(t,e);if(t instanceof tu)return function(n,r){if(!cm(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=na(o,r.Uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return H0(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ft.fromDate(n);return{timestampValue:io(r.k,s)}}if(n instanceof ft){const s=new ft(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:io(r.k,s)}}if(n instanceof nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Or)return{bytesValue:Og(r.k,n._byteString)};if(n instanceof tt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$l(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Yl(n)}`)}(t,e)}function um(t,e){const n={};return fg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xn(t,(r,s)=>{const i=na(s,e.Mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof nu||t instanceof Or||t instanceof tt||t instanceof tu)}function iu(t,e,n){if(!hm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Yl(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function Oc(t,e,n){if((e=be(e))instanceof ea)return e._internalPath;if(typeof e=="string")return ou(t,e);throw ao("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qb=new RegExp("[~\\*/\\[\\]]");function ou(t,e,n){if(e.search(Qb)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ea(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ao(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(I.INVALID_ARGUMENT,a+t+c)}function fm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Xb extends dm{data(){return super.data()}}function pm(t,e){return typeof e=="string"?ou(t,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gm extends dm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ai extends gm{data(e={}){return super.data(e)}}class Yb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ai(this._firestore,this._userDataWriter,r.key,r,new ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ai(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ai(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Zb(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Zb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t){if(no(t)&&t.explicitOrderBy.length===0)throw new j(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function IR(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{convertValue(e,n="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Xn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new nu(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const n=yn(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ye(Lg(r));const s=new Ls(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){t=It(t,tt);const e=It(t.firestore,_n);return $b(eu(e),t._key).then(n=>vm(e,t,n))}class ym extends tS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function SR(t,e,n){t=It(t,tt);const r=It(t.firestore,_n),s=mm(t.converter,e,n);return ra(r,[lm(su(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function AR(t,e,n,...r){t=It(t,tt);const s=It(t.firestore,_n),i=su(s);let o;return o=typeof(e=be(e))=="string"||e instanceof ea?Jb(i,"updateDoc",t._key,e,n,r):Gb(i,"updateDoc",t._key,e),ra(s,[o.toMutation(t._key,Wt.exists(!0))])}function CR(t){return ra(It(t.firestore,_n),[new Ag(t._key,Wt.none())])}function RR(t,e){const n=It(t.firestore,_n),r=qb(t),s=mm(t.converter,e);return ra(n,[lm(su(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function kR(t,...e){var n,r,s;t=be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(gf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof tt)l=It(t.firestore,_n),u=qo(t._key.path),c={next:h=>{e[o]&&e[o](vm(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=It(t,Zo);l=It(h.firestore,_n),u=h._query;const f=new ym(l);c={next:p=>{e[o]&&e[o](new Yb(l,f,h,p))},error:e[o+1],complete:e[o+2]},eS(t._query)}return function(h,f,p,m){const b=new rm(m),_=new Qg(f,b,p);return h.asyncQueue.enqueueAndForget(async()=>Gg(await Nc(h),_)),()=>{b.nc(),h.asyncQueue.enqueueAndForget(async()=>Jg(await Nc(h),_))}}(eu(l),u,a,c)}function ra(t,e){return function(n,r){const s=new dn;return n.asyncQueue.enqueueAndForget(async()=>bb(await Vb(n),r,s)),s.promise}(eu(t),e)}function vm(t,e,n){const r=n.docs.get(e._key),s=new ym(t);return new gm(t,s,e._key,r,new ss(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Hr=n})($r),br(new $n("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new _n(s,new v0(n.getProvider("auth-internal")),new T0(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),xt(Lh,"3.4.4",t),xt(Lh,"3.4.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebasestorage.googleapis.com",wm="storageBucket",nS=2*60*1e3,rS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends wn{constructor(e,n){super(Oa(e),`Firebase Storage: ${n} (${Oa(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}_codeEquals(e){return Oa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Oa(t){return"storage/"+t}function au(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae("unknown",t)}function sS(t){return new Ae("object-not-found","Object '"+t+"' does not exist.")}function iS(t){return new Ae("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function oS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae("unauthenticated",t)}function aS(){return new Ae("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function cS(t){return new Ae("unauthorized","User does not have permission to access '"+t+"'.")}function lS(){return new Ae("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function uS(){return new Ae("canceled","User canceled the upload/download.")}function hS(t){return new Ae("invalid-url","Invalid URL '"+t+"'.")}function fS(t){return new Ae("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function dS(){return new Ae("no-default-bucket","No default bucket found. Did you set the '"+wm+"' property when initializing the app?")}function pS(){return new Ae("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function gS(){return new Ae("no-download-url","The given file does not have any download URLs.")}function Pc(t){return new Ae("invalid-argument",t)}function Em(){return new Ae("app-deleted","The Firebase app was deleted.")}function mS(t){return new Ae("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gs(t,e){return new Ae("invalid-format","String does not match format '"+t+"': "+e)}function Yr(t){throw new Ae("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(r.path==="")return r;throw fS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},b=n===_m?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",C=new RegExp(`^https?://${b}/${s}/${_}`,"i"),V=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<V.length;M++){const ne=V[M],ce=ne.regex.exec(e);if(ce){const Q=ce[ne.indices.bucket];let ve=ce[ne.indices.path];ve||(ve=""),r=new ht(Q,ve),ne.postModify(r);break}}if(r==null)throw hS(e);return r}}class yS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(p,c())},_)}function f(){i&&clearTimeout(i)}function p(_,...C){if(l){f();return}if(_){f(),u.call(null,_,...C);return}if(c()||o){f(),u.call(null,_,...C);return}r<64&&(r*=2);let V;a===1?(a=2,V=0):V=(r+Math.random())*1e3,h(V)}let m=!1;function b(_){m||(m=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function _S(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){return t!==void 0}function ES(t){return typeof t=="object"&&!Array.isArray(t)}function cu(t){return typeof t=="string"||t instanceof String}function mf(t){return lu()&&t instanceof Blob}function lu(){return typeof Blob!="undefined"}function yf(t,e,n,r){if(r<e)throw Pc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Tm(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fn||(Fn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,s,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new gi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Fn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Fn.ABORT;r(!1,new gi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new gi(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());wS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=au();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Em():uS();o(c)}else{const c=lS();o(c)}};this.canceled_?n(!1,new gi(!1,null,!0)):this.backoffId_=vS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_S(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class gi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function IS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function SS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CS(t,e,n,r,s,i){const o=Tm(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return SS(c,e),IS(c,n),bS(c,i),AS(c,r),new TS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function kS(...t){const e=RS();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(lu())return new Blob(t);throw new Ae("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function NS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pa{constructor(e,n){this.data=e,this.contentType=n||null}}function PS(t,e){switch(t){case Dt.RAW:return new Pa(Im(e));case Dt.BASE64:case Dt.BASE64URL:return new Pa(bm(t,e));case Dt.DATA_URL:return new Pa(xS(e),LS(e))}throw au()}function Im(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function DS(t){let e;try{e=decodeURIComponent(t)}catch{throw gs(Dt.DATA_URL,"Malformed data URL.")}return Im(e)}function bm(t,e){switch(t){case Dt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw gs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw gs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OS(e)}catch{throw gs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Sm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw gs(Dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=MS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function xS(t){const e=new Sm(t);return e.base64?bm(Dt.BASE64,e.rest):DS(e.rest)}function LS(t){return new Sm(t).contentType}function MS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){let r=0,s="";mf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(mf(this.data_)){const r=this.data_,s=NS(r,e,n);return s===null?null:new on(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new on(r,!0)}}static getBlob(...e){if(lu()){const n=e.map(r=>r instanceof on?r.data_:r);return new on(kS.apply(null,n))}else{const n=e.map(o=>cu(o)?PS(Dt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new on(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){let e;try{e=JSON.parse(t)}catch{return null}return ES(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Cm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t,e){return e}class Qe{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||VS}}let mi=null;function $S(t){return!cu(t)||t.length<2?t:Cm(t)}function Rm(){if(mi)return mi;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(i,o){return $S(o)}const n=new Qe("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Qe("size");return s.xform=r,t.push(s),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),mi=t,mi}function BS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ht(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function jS(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return BS(r,t),r}function km(t,e,n){const r=Am(e);return r===null?null:jS(t,r,n)}function qS(t,e,n,r){const s=Am(e);if(s===null||!cu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=sa(f,n,r),m=Tm({alt:"media",token:l});return p+m})[0]}function HS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class uu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){if(!t)throw au()}function KS(t,e){function n(r,s){const i=km(t,s,e);return Nm(i!==null),i}return n}function WS(t,e){function n(r,s){const i=km(t,s,e);return Nm(i!==null),qS(i,s,t.host,t._protocol)}return n}function Om(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=aS():s=oS():n.getStatus()===402?s=iS(t.bucket):n.getStatus()===403?s=cS(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Pm(t){const e=Om(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=sS(t.path)),i.serverResponse=s.serverResponse,i}return n}function zS(t,e,n){const r=e.fullServerUrl(),s=sa(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new uu(s,i,WS(t,n),o);return a.errorHandler=Pm(e),a}function GS(t,e){const n=e.fullServerUrl(),r=sa(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,l){}const a=new uu(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Pm(e),a}function JS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=JS(null,e)),r}function XS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let V="";for(let M=0;M<2;M++)V=V+Math.random().toString().slice(2);return V}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=QS(e,r,s),u=HS(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=on.getBlob(h,r,f);if(p===null)throw pS();const m={name:l.fullPath},b=sa(i,t.host,t._protocol),_="POST",C=t.maxUploadRetryTime,D=new uu(b,_,KS(t,n),C);return D.urlParams=m,D.headers=o,D.body=p.uploadData(),D.errorHandler=Om(e),D}class YS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Yr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ZS extends YS{initXhr(){this.xhr_.responseType="text"}}function hu(){return new ZS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zn(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cm(this._location.path)}get storage(){return this._service}get parent(){const e=US(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new zn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw mS(e)}}function eA(t,e,n){t._throwIfRoot("uploadBytes");const r=XS(t.storage,t._location,Rm(),new on(e,!0),n);return t.storage.makeRequestWithTokens(r,hu).then(s=>({metadata:s,ref:t}))}function tA(t){t._throwIfRoot("getDownloadURL");const e=zS(t.storage,t._location,Rm());return t.storage.makeRequestWithTokens(e,hu).then(n=>{if(n===null)throw gS();return n})}function nA(t){t._throwIfRoot("deleteObject");const e=GS(t.storage,t._location);return t.storage.makeRequestWithTokens(e,hu)}function rA(t,e){const n=FS(t._location.path,e),r=new ht(t._location.bucket,n);return new zn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){return/^[A-Za-z]+:\/\//.test(t)}function iA(t,e){return new zn(t,e)}function Dm(t,e){if(t instanceof fu){const n=t;if(n._bucket==null)throw dS();const r=new zn(n,n._bucket);return e!=null?Dm(r,e):r}else return e!==void 0?rA(t,e):t}function oA(t,e){if(e&&sA(e)){if(t instanceof fu)return iA(t,e);throw Pc("To use ref(service, url), the first argument must be a Storage instance.")}else return Dm(t,e)}function vf(t,e){const n=e==null?void 0:e[wm];return n==null?null:ht.makeFromBucketSpec(n,t)}class fu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=_m,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nS,this._maxUploadRetryTime=rS,this._requests=new Set,s!=null?this._bucket=ht.makeFromBucketSpec(s,this._host):this._bucket=vf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=vf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zn(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new yS(Em());{const i=CS(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _f="@firebase/storage",wf="0.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="storage";function NR(t,e,n){return t=be(t),eA(t,e,n)}function OR(t){return t=be(t),tA(t)}function PR(t){return t=be(t),nA(t)}function DR(t,e){return t=be(t),oA(t,e)}function xR(t=ll(),e){return t=be(t),Ro(t,xm).getImmediate({identifier:e})}function aA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new fu(n,r,s,e,$r)}function cA(){br(new $n(xm,aA,"PUBLIC").setMultipleInstances(!0)),xt(_f,wf,""),xt(_f,wf,"esm2017")}cA();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function du(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Lm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lA=Lm,Mm=new Fs("auth","Firebase",Lm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new al("@firebase/auth");function Ci(t,...e){Ef.logLevel<=ie.ERROR&&Ef.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw pu(t,...e)}function Lt(t,...e){return pu(t,...e)}function uA(t,e,n){const r=Object.assign(Object.assign({},lA()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mm.create(t,...e)}function H(t,e,...n){if(!t)throw pu(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ci(e),new Error(e)}function Qt(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;function Kt(t){Qt(t instanceof Function,"Expected a class definition");let e=Tf.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e){const n=Ro(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ji(i,e!=null?e:{}))return s;bt(s,"already-initialized")}return n.initialize({options:e})}function fA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dA(){return If()==="http:"||If()==="https:"}function If(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||ap()||"connection"in navigator)?navigator.onLine:!0}function gA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=op()||cp()}get(){return pA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new ti(3e4,6e4);function ia(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ni(t,e,n,r,s={}){return Fm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Um.fetch()(Vm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Fm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mA),e);try{const s=new vA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw uA(t,u,l);bt(t,u)}}catch(s){if(s instanceof wn)throw s;bt(t,"network-request-failed")}}async function oa(t,e,n,r,s={}){const i=await ni(t,e,n,r,s);return"mfaPendingCredential"in i&&bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gu(t.config,s):`${t.config.apiScheme}://${s}`}class vA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),yA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Lt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function wA(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EA(t,e=!1){const n=be(t),r=await n.getIdToken(e),s=mu(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ms(xa(s.auth_time)),issuedAtTime:ms(xa(s.iat)),expirationTime:ms(xa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function mu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{const s=fE(n);return s?JSON.parse(s):(Ci("Failed to decode base64 JWT payload"),null)}catch(s){return Ci("Caught error parsing JWT payload as JSON",s),null}}function TA(t){const e=mu(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&IA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pr(t,wA(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?CA(i.providerUserInfo):[],a=AA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $m(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function SA(t){const e=be(t);await co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function CA(t){return t.map(e=>{var{providerId:n}=e,r=du(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){const n=await Fm(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Um.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):TA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $m(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EA(this,e)}reload(){return SA(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pr(this,_A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:M,isAnonymous:ne,providerData:ce,stsTokenManager:Q}=n;H(V&&Q,e,"internal-error");const ve=Ms.fromJSON(this.name,Q);H(typeof V=="string",e,"internal-error"),tn(h,e.name),tn(f,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof ne=="boolean",e,"internal-error"),tn(p,e.name),tn(m,e.name),tn(b,e.name),tn(_,e.name),tn(C,e.name),tn(D,e.name);const pe=new Vn({uid:V,auth:e,email:f,emailVerified:M,displayName:h,isAnonymous:ne,photoURL:m,phoneNumber:p,tenantId:b,stsTokenManager:ve,createdAt:C,lastLoginAt:D});return ce&&Array.isArray(ce)&&(pe.providerData=ce.map(qe=>Object.assign({},qe))),_&&(pe._redirectEventId=_),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await co(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bm.type="NONE";const bf=Bm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e,n){return`firebase:${t}:${e}:${n}`}class vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ri(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ri("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vr(Kt(bf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Kt(bf);const o=Ri(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Vn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new vr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wm(e))return"Blackberry";if(zm(e))return"Webos";if(yu(e))return"Safari";if((e.includes("chrome/")||qm(e))&&!e.includes("edge/"))return"Chrome";if(Km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jm(t=xe()){return/firefox\//i.test(t)}function yu(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qm(t=xe()){return/crios\//i.test(t)}function Hm(t=xe()){return/iemobile/i.test(t)}function Km(t=xe()){return/android/i.test(t)}function Wm(t=xe()){return/blackberry/i.test(t)}function zm(t=xe()){return/webos/i.test(t)}function aa(t=xe()){return/iphone|ipad|ipod/i.test(t)}function kA(t=xe()){var e;return aa(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function NA(){return lp()&&document.documentMode===10}function Gm(t=xe()){return aa(t)||Km(t)||zm(t)||Wm(t)||/windows phone/i.test(t)||Hm(t)}function OA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=Sf(xe());break;case"Worker":n=`${Sf(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vr.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await co(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await vr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function vu(t){return be(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=wE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function Qm(t,e){return ni(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return oa(t,"POST","/v1/accounts:signInWithPassword",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",ia(t,e))}async function LA(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends _u{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Us(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return DA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Qm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LA(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e){return oa(t,"POST","/v1/accounts:signInWithIdp",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="http://localhost";class Gn extends _u{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=du(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FA(t){const e=ts(ns(t)).link,n=e?ts(ns(e)).deep_link_id:null,r=ts(ns(t)).deep_link_id;return(r?ts(ns(r)).link:null)||r||n||e||t}class wu{constructor(e){var n,r,s,i,o,a;const c=ts(ns(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=UA((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FA(e);try{return new wu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wu.parseLink(n);return H(r,"argument-error"),Us._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Xm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ri{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends ri{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ri{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ri{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=Cf(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cf(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends wn{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lo(e,n,r,s)}}function Ym(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(t,i,e,r):i})}async function VA(t,e,n=!1){const r=await Pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Pr(t,Ym(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=mu(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t,e,n=!1){const r="signIn",s=await Ym(t,r,e),i=await Dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function BA(t,e){return Zm(vu(t),e)}function LR(t,e,n){return BA(be(t),zr.credential(e,n))}function MR(t,e){return jA(be(t),null,e)}async function jA(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Pr(t,Qm(r,i));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e){return be(t).setPersistence(e)}function FR(t){return be(t).signOut()}const uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){const t=xe();return yu(t)||aa(t)}const HA=1e3,KA=10;class ty extends ey{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qA()&&OA(),this.fallbackToPolling=Gm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ty.type="LOCAL";const WA=ty;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny extends ey{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ny.type="SESSION";const ry=ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Eu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function JA(t){Mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(){return typeof Mt().WorkerGlobalScope!="undefined"&&typeof Mt().importScripts=="function"}async function QA(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YA(){return sy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="firebaseLocalStorageDb",ZA=1,ho="firebaseLocalStorage",oy="fbase_key";class si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function eC(){const t=indexedDB.deleteDatabase(iy);return new si(t).toPromise()}function xc(){const t=indexedDB.open(iy,ZA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ho,{keyPath:oy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),await eC(),e(await xc()))})})}async function Rf(t,e,n){const r=la(t,!0).put({[oy]:e,value:n});return new si(r).toPromise()}async function tC(t,e){const n=la(t,!1).get(e),r=await new si(n).toPromise();return r===void 0?null:r.value}function kf(t,e){const n=la(t,!0).delete(e);return new si(n).toPromise()}const nC=800,rC=3;class ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(YA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QA(),!this.activeServiceWorker)return;this.sender=new GA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await Rf(e,uo,"1"),await kf(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=la(s,!1).getAll();return new si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ay.type="LOCAL";const sC=ay;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iC().appendChild(r)})}function aC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t,e){return e?Kt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends _u{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return _r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lC(t){return Zm(t.auth,new Tu(t),t.bypassAuthState)}function uC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),$A(n,new Tu(t),t.bypassAuthState)}async function hC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),VA(n,new Tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lC;case"linkViaPopup":case"linkViaRedirect":return hC;case"reauthViaPopup":case"reauthViaRedirect":return uC;default:bt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=new ti(2e3,1e4);class fr extends cy{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,fC.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="pendingRedirect",La=new Map;class pC extends cy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await gC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gC(t,e){const n=yC(e),r=mC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mC(t){return Kt(t._redirectPersistence)}function yC(t){return Ri(dC,t.config.apiKey,t.name)}async function vC(t,e,n=!1){const r=vu(t),s=cC(r,e),o=await new pC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=10*60*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ly(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_C&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nf(e))}saveEventToCache(e){this.cachedEventUids.add(Nf(e)),this.lastProcessedEventTime=Date.now()}}function Nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ly(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bC=/^https?/;async function SC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TC(t);for(const n of e)try{if(AC(n))return}catch{}bt(t,"unauthorized-domain")}function AC(t){const e=Dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bC.test(n))return!1;if(IC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new ti(3e4,6e4);function Of(){const t=Mt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RC(t){return new Promise((e,n)=>{var r,s,i;function o(){Of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Of(),n(Lt(t,"network-request-failed"))},timeout:CC.get()})}if((s=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Mt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=aC("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},oC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ki=null,e})}let ki=null;function kC(t){return ki=ki||RC(t),ki}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new ti(5e3,15e3),OC="__/auth/iframe",PC="emulator/auth/iframe",DC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LC(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gu(e,PC):`https://${t.config.authDomain}/${OC}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=xC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vs(r).slice(1)}`}async function MC(t){const e=await kC(t),n=Mt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:LC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Mt().setTimeout(()=>{i(o)},NC.get());function c(){Mt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,VC=600,$C="_blank",BC="http://localhost";class Pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(t,e,n,r=FC,s=VC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=xe().toLowerCase();n&&(a=qm(l)?$C:n),jm(l)&&(e=e||BC,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(kA(l)&&a!=="_self")return qC(e||"",a),new Pf(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Pf(h)}function qC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="__/auth/handler",KC="emulator/auth/handler";function Df(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Xm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_E(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ri){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${WC(t)}?${Vs(a).slice(1)}`}function WC({config:t}){return t.emulator?gu(t,KC):`https://${t.authDomain}/${HC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="webStorageSupport";class zC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ry,this._completeRedirectFn=vC}async _openPopup(e,n,r,s){var i;Qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Df(e,n,r,Dc(),s);return jC(e,o,Eu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),JA(Df(e,n,r,Dc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MC(e),r=new wC(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ma,{type:Ma},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ma];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gm()||yu()||aa()}}const GC=zC;var xf="@firebase/auth",Lf="0.19.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XC(t){br(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),H(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},c=new PA(o,a);return fA(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),br(new $n("auth-internal",e=>{const n=vu(e.getProvider("auth").getImmediate());return(r=>new JC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(xf,Lf,QC(t)),xt(xf,Lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t=ll()){const e=Ro(t,"auth");return e.isInitialized()?e.getImmediate():hA(t,{popupRedirectResolver:GC,persistence:[sC,WA,ry]})}XC("Browser");var YC="firebase",ZC="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(YC,ZC,"app");export{fR as $,kR as A,SR as B,bR as C,ER as D,CR as E,VR as F,FR as G,dR as H,Yy as I,rR as J,IR as K,uR as L,kt as M,qb as N,cR as O,lR as P,eR as Q,Mc as R,bv as S,AR as T,TR as U,UR as V,LR as W,ry as X,NR as Y,RR as Z,OR as _,mR as a,Xv as a0,MR as a1,sR as b,iR as c,xd as d,it as e,is as f,hR as g,aR as h,nR as i,e_ as j,oR as k,yR as l,_d as m,Uc as n,Jv as o,tR as p,gR as q,Ur as r,pR as s,wR as t,vR as u,_R as v,uv as w,xR as x,DR as y,PR as z};
