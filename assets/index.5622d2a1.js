import{u as D,a as O,r as S,b as x,o as _,c as g,d as c,e as p,w as L,f as C,g as K,h as R,p as F,i as B,j as V,k as U,l as M,m as H,n as j,q as z,s as G,t as q,U as Q,v as W,A as h,K as f,D as v,x as A,y as P,z as E,E as T,N as u,B as Z,C as k,T as b,F as J,G as X,H as Y}from"./vendor.c38d77ce.js";const tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};tt();var at="/img/evom.png";var $=(s,t)=>{const a=s.__vccOpts||s;for(const[e,o]of t)a[e]=o;return a};const N=s=>(F("data-v-1fdfefe0"),s=s(),B(),s),et={class:"shadow-sm"},ot={class:"container"},nt={class:"row"},st=N(()=>c("div",{class:"col-auto brand"},[c("img",{src:at,alt:""})],-1)),it={class:"col navigation"},rt=N(()=>c("button",{class:"btn navigation-toggle"},[c("i",{class:"fa-solid fa-bars"})],-1)),ct=V("voting"),lt=V("admin"),dt={setup(s){const t=D(),a=O(),e=S(t.state.admin),o=()=>{t.commit("tryToLogout"),a.push({name:"admin"})};return(i,n)=>{const r=x("router-link");return _(),g("header",et,[c("div",ot,[c("div",nt,[st,c("div",it,[rt,c("ul",null,[c("li",null,[p(r,{to:{name:"landing"}},{default:L(()=>[ct]),_:1})]),c("li",null,[p(r,{class:"btn btn-main btn-sm me-2",to:{name:"admin"}},{default:L(()=>[lt]),_:1}),C(e).isAdmin?(_(),g("button",{key:0,onClick:n[0]||(n[0]=K(m=>o(),["prevent"])),class:"btn btn-danger btn-sm"}," Logout ")):R("",!0)])])])])])])}}};var ut=$(dt,[["__scopeId","data-v-1fdfefe0"]]),mt="/img/footer-brand.png";const pt={},ht={class:""},_t=U('<div class="navigation p-5 container" data-v-73305c59><div class="row" data-v-73305c59><div class="col-12 col-md-4 mb-5" data-v-73305c59><img class="img-fluid pe-5" src="'+mt+'" alt="" data-v-73305c59></div><div class="col-12 col-md-4 mb-5" data-v-73305c59><h3 data-v-73305c59>Hubungi kami</h3><ul data-v-73305c59><li data-v-73305c59><a href="javascript:void()" data-v-73305c59>Telang Indah VI, Kamal, Bangkalan - 69162</a></li><li data-v-73305c59><a href="mailto:pcimmbangkalan@gmail.com" data-v-73305c59> pcimmbangkalan@gmail.com </a></li><li data-v-73305c59><a href="http://pcimmbangkalan.blogspot.com" data-v-73305c59> pcimmbangkalan.blogspot.com </a></li><li data-v-73305c59><a href="http://wa.me/6285608481194" data-v-73305c59>0856-0848-1194 </a></li></ul></div><div class="col-12 col-md-4 mb-5" data-v-73305c59><h3 data-v-73305c59>Service</h3><ul data-v-73305c59><li data-v-73305c59><a href="#" data-v-73305c59> Voting </a></li><li data-v-73305c59><a href="#" data-v-73305c59> Hasil Pemilihan </a></li><li data-v-73305c59><a href="#" data-v-73305c59> Admin </a></li><li data-v-73305c59><a href="http://wa.me/6285608481194" data-v-73305c59>0856-0848-1194</a></li></ul></div></div></div><div class="copyright container-fluid text-center" data-v-73305c59> Designed by <a href="http://instagram.com/akbarr.sury" target="_blank" data-v-73305c59>Akbar</a> | Managed by Bidang Medkom PC IMM Bangkalan </div>',2),gt=[_t];function ft(s,t){return _(),g("footer",ht,gt)}var vt=$(pt,[["render",ft],["__scopeId","data-v-73305c59"]]);const kt={class:"container-fluid body p-0 mt-5"},bt={setup(s){const t=O();M();const a=D(),e=S({nilai:!0});return H(()=>{a.commit("getCaketumList"),a.commit("getFormaturList"),a.commit("getKomisariatList"),a.commit("getTokenList")}),t.beforeEach((o,i,n)=>{o.fullPath.includes("admin")?e.nilai=!0:e.nilai=!1,n()}),(o,i)=>{const n=x("router-view");return _(),g("div",null,[p(ut),c("div",kt,[p(n)]),p(vt,{class:j([C(e).nilai?"d-none":"d-block"])},null,8,["class"])])}}},yt="modulepreload",I={},Lt="/",d=function(t,a){return!a||a.length===0?t():Promise.all(a.map(e=>{if(e=`${Lt}${e}`,e in I)return;I[e]=!0;const o=e.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":yt,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((r,m)=>{n.addEventListener("load",r),n.addEventListener("error",m)})})).then(()=>t())},At=()=>d(()=>import("./Landing.0f63b6a2.js"),["assets/Landing.0f63b6a2.js","assets/Landing.a97a2c5e.css","assets/vendor.c38d77ce.js","assets/kandidat-layout.9ee41a0c.js"]),Pt=()=>d(()=>import("./Vote.14d17313.js"),["assets/Vote.14d17313.js","assets/Vote.c991d884.css","assets/vendor.c38d77ce.js","assets/kandidat-layout.9ee41a0c.js"]),Et=()=>d(()=>import("./Admin.b0fde1ce.js"),["assets/Admin.b0fde1ce.js","assets/Admin.dc8d32f2.css","assets/vendor.c38d77ce.js"]),Tt=()=>d(()=>import("./CalonKetuaUmum.9cf450e3.js"),["assets/CalonKetuaUmum.9cf450e3.js","assets/CalonKetuaUmum.eb08f8b4.css","assets/vendor.c38d77ce.js"]),It=()=>d(()=>import("./CalonFormatur.896afd3c.js"),["assets/CalonFormatur.896afd3c.js","assets/CalonFormatur.5d9738f9.css","assets/vendor.c38d77ce.js"]),wt=()=>d(()=>import("./TokenPemilihan.e3540c04.js"),["assets/TokenPemilihan.e3540c04.js","assets/vendor.c38d77ce.js"]),Dt=()=>d(()=>import("./PerhitunganLangsung.d7eaad27.js"),["assets/PerhitunganLangsung.d7eaad27.js","assets/PerhitunganLangsung.6e1f89df.css","assets/vendor.c38d77ce.js"]),Ot=()=>d(()=>import("./PengaturanAkun.9594959a.js"),["assets/PengaturanAkun.9594959a.js","assets/vendor.c38d77ce.js"]),St=[{name:"landing",path:"/",component:At},{name:"vote",path:"/vote",component:Pt},{name:"admin",path:"/admin",component:Et,children:[{name:"adminDataCalonKetuaUmum",path:"calon-ketua-umum",component:Tt},{name:"adminDataCalonFormatur",path:"calon-formatur",component:It},{name:"adminTokenPemilihan",path:"token-pemilihan",component:wt},{name:"adminPerhitunganLangsung",path:"perhitungan-langsung",component:Dt},{name:"adminPengaturanAkun",path:"pengaturan-akun",component:Ot}]}],xt=z({history:G(),routes:St}),Ct={apiKey:"AIzaSyC0naO0XLYkQFtKpseJuuq9zHQNEK3lAI0",authDomain:"imm-bangkalan-2022.firebaseapp.com",projectId:"imm-bangkalan-2022",storageBucket:"imm-bangkalan-2022.appspot.com",messagingSenderId:"1093095263293",appId:"1:1093095263293:web:ddf9079336e68715066e54",measurementId:"G-6CML4NNDL8"},Vt=q(Ct),l=Q(Vt);var $t=W({state(){return{caketumList:{},formaturList:{},tokenList:{},komisariatList:{},admin:{}}},mutations:{getCaketumList(s){h(f(v(l,"calon ketua umum")),t=>{const a=[];t.forEach(e=>{a.push({key:e.id,data:e.data()})}),s.caketumList[0]=a})},hapusCaketum(s,[t,a]){const e=A(),o=P(e,"calon ketua umum/"+a+".png");E(o).then(()=>{T(u(l,"calon ketua umum",t)),alert(`Data ${a} berhasil dihapus`)}).catch(()=>{alert(`Data ${a} gagal dihapus`)})},getFormaturList(s){h(f(v(l,"calon formatur")),t=>{const a=[];t.forEach(e=>{a.push({key:e.id,data:e.data()})}),s.formaturList[0]=a})},hapusFormatur(s,[t,a]){const e=A(),o=P(e,"calon formatur/"+a+".png");E(o).then(()=>{T(u(l,"calon formatur",t)),alert(`Data ${a} berhasil dihapus`)}).catch(()=>{alert(`Data ${a} gagal dihapus`)})},getTokenList(s){h(u(l,"token","token"),t=>{s.tokenList[0]=t.data().token})},createToken(s,[t,a]){if(s.tokenList[0].length<=0){const e=[];for(let n=0;n<t;n++)e.push("19"+(11+n)+"ZZ"+w());const o=["AA","AB","AC","AD","AE","AF","AG","AH"];for(let n=0;n<o.length;n++)for(let r=0;r<a;r++)e.push("19"+(11+r)+o[n]+w());const i={};i.token=e,Z(u(l,"token","token"),i).then(()=>{alert("Token berhasil dibuat")}).catch(n=>{alert("Token gagal dibuat")})}else alert("token sudah dibuat sebelumnya")},getKomisariatList(s){h(f(v(l,"komisariat")),t=>{const a=[];t.forEach(e=>{a.push({key:e.id,data:e.data()})}),s.komisariatList[0]=a})},async kirimPilihan(s,t){const a=u(l,"calon ketua umum",t.dipilih.ketum[0]),e=await k(a);if(e.exists()){const n=e.data().suara;n.push(t.pemilih),await b(a,{suara:n}).then(()=>{})}t.dipilih.formatur.forEach(async n=>{const r=u(l,"calon formatur",n),m=await k(r);if(m.exists()){const y=m.data().suara;y.push(t.pemilih),await b(r,{suara:y}).then(()=>{})}});const o=u(l,"token","used"),i=await k(o);if(i.exists()){const n=i.data().lastUsedToken;n.push(t.pemilih),await b(o,{lastUsedToken:n}).then(()=>{alert("Terimakasih telah berpartisipasi dalam pemilihan.(Panitia Pemilihan)"),window.location.reload()})}},tryToLogin(s,[t,a]){s.admin.data=a,s.admin.isAdmin=t},tryToLogout(s){const t=J();X(t).then(()=>{s.admin.isAdmin=null,s.admin.data=t.currentUser,alert("Berhasil logout user")}).catch(()=>{alert("Gagal logout user")})}}});function w(s=6){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a="";for(let e=0;e<s;e++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}Y(bt).use(xt).use($t).mount("body");export{$ as _,l as d,xt as r};
