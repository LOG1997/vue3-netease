import{e as k,p as v,d as R,f as t,g as a,m as s,u,F as d,k as m,t as _,I as g,_ as x,r as f,J as y,q as B,s as w,i as C}from"./index.d735a7d5.js";const I={class:"tracks-img h-60 w-60"},F=["src"],S={class:"tracks-list flex-1"},b={class:"tracks-item-first"},L={class:"tracks-item-second"},N=k({props:{officelRank:Object},setup(e){const o=e,n=v(),r=R(()=>(console.log("tracks:",o.officelRank),o.officelRank));function i(c){console.log("\u8DF3\u8F6C\u5230\u6B4C\u5355\u8BE6\u60C5",c),n.push({path:"/home/musiclist",query:{playlistid:c}})}return(c,p)=>(t(),a("div",{class:"fourRank-item w-full h-60 flex",onClick:p[0]||(p[0]=l=>i(u(r).id))},[s("div",I,[s("img",{src:u(r).coverImgUrl,alt:""},null,8,F)]),s("div",S,[s("ul",null,[(t(!0),a(d,null,m(u(r).tracks,(l,h)=>(t(),a("li",{key:l.first,class:"flex justify-between h-12"},[s("div",b,[s("span",null,_(h+1),1),g(" "+_(l.first),1)]),s("div",L,_(l.second),1)]))),128))])])]))}});const V=e=>(B("data-v-623a3d0c"),e=e(),w(),e),$=V(()=>s("h3",null,"\u5B98\u65B9\u699C",-1)),j=k({setup(e){f([]);let o=f([]);return y().then(n=>{o.value=n.list.slice(0,4)}),(n,r)=>(t(),a(d,null,[$,(t(!0),a(d,null,m(u(o),(i,c)=>(t(),a("div",{class:"fourRank-item m-auto pb-10",key:c},[C(N,{officelRank:i,class:"w-4/5 min-w-1/4"},null,8,["officelRank"])]))),128))],64))}});var D=x(j,[["__scopeId","data-v-623a3d0c"]]);export{D as default};