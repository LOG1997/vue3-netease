import{_ as k,e as m,w as y,f as a,g as u,m as e,F as _,k as g,t as p,q as D,s as $,d as L,K as S,l as I,A as N,u as h,r as v,a as b,L as A,i as B}from"./index.d735a7d5.js";const x=i=>(D("data-v-31834f52"),i=i(),$(),i),j={class:"all-cat text-left"},O={class:"flex flex-wrap w-full"},V=x(()=>e("div",{class:"w-30"},"\u8BED\u79CD\uFF1A",-1)),q={class:"flex gap-x-6"},z=["onClick"],J={class:"flex flex-wrap w-full"},K=x(()=>e("div",{class:"w-30"},"\u5206\u7C7B:",-1)),M={class:"flex gap-x-6"},T=["onClick"],U={class:"flex flex-wrap w-full"},G=x(()=>e("div",{class:"w-30"},"\u7B5B\u9009\uFF1A",-1)),H={class:"flex gap-x-6 flex-wrap flex-1"},P=["onClick"],Q=m({props:{sendArg:Object},emits:["changeArg"],setup(i,{emit:o}){const n=i,d=[{name:"\u5168\u90E8",id:"-1"},{name:"\u534E\u8BED",id:"7"},{name:"\u6B27\u7F8E",id:"96"},{name:"\u65E5\u672C",id:"8"},{name:"\u97E9\u56FD",id:"16"},{name:"\u5176\u4ED6",id:"0"}],c=[{name:"\u5168\u90E8",id:"-1"},{name:"\u7537\u6B4C\u624B",id:"1"},{name:"\u5973\u6B4C\u624B",id:"2"},{name:"\u5176\u4ED6",id:"3"}],l=["\u70ED\u95E8","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#"];console.log("\u5B57\u6BCD",JSON.stringify(l));function r(s){console.log("\u5730\u533A\uFF1A",s),n.sendArg.area=s}function C(s){console.log("\u7C7B\u578B\uFF1A",s),n.sendArg.type=s}function w(s){console.log("\u5B57\u6BCD\uFF1A\uFF1A",s),s=="#"&&(s="0"),s=="\u70ED\u95E8"&&(s="-1"),n.sendArg.initial=s}function E(s){o("changeArg",s)}return y(n.sendArg,(s,F)=>{E(n.sendArg)},{deep:!0}),(s,F)=>(a(),u("div",j,[e("div",O,[V,e("ul",q,[(a(),u(_,null,g(d,t=>e("li",{key:t.id,onClick:f=>r(t.id)},p(t.name),9,z)),64))])]),e("div",J,[K,e("ul",M,[(a(),u(_,null,g(c,t=>e("li",{key:t.id,onClick:f=>C(t.id)},p(t.name),9,T)),64))])]),e("div",U,[G,e("ul",H,[(a(),u(_,null,g(l,(t,f)=>e("li",{key:f,onClick:te=>w(t)},p(t),9,P)),64))])])]))}});var R=k(Q,[["__scopeId","data-v-31834f52"]]);const W={class:"singerList"},X={class:"flex flex-wrap gap-x-10 justify-between"},Y={class:"singer-img w-60 h-60 rounded-xl"},Z=["src"],ee={class:"singer-name flex justify-between mt-2"},se=m({props:{singerList:Object},setup(i){const o=i,n=L(()=>(console.log("\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u6B4C\u624B\u5217\u8868",o.singerList),o.singerList));return(d,c)=>{const l=S("icon-font");return a(),u("div",W,[e("ul",X,[(a(!0),u(_,null,g(h(n),r=>(a(),u("li",{key:r.id,class:"w-60 h-80"},[e("div",Y,[e("img",{src:r.img1v1Url,alt:"",class:"w-60 h-60 rounded-xl"},null,8,Z)]),e("div",ee,[e("span",null,p(r.name),1),r.accountId?(a(),I(l,{key:0,class:"#icon-geren"})):N("",!0)])]))),128))])])}}}),ne={class:"singerCat ml-10 mt-5 w-9/10"},ae=m({setup(i){let o=v({type:"-1",area:"-1",initial:"-1",limit:"40"}),n=v([]);b(()=>{A(o.value).then(c=>{n.value=c.artists})});function d(c){o=c,A(o).then(l=>{n.value=l.artists})}return(c,l)=>(a(),u("div",ne,[B(R,{onChangeArg:d,sendArg:h(o)},null,8,["sendArg"]),B(se,{singerList:h(n)},null,8,["singerList"])]))}});export{ae as default};
