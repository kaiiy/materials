import{d as o,_ as c,o as E,c as f,n as k,g as P,u as s}from"./entry.c5a3ec34.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(u){var n;const{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,i=(n=t.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",p=t.message||t.toString(),_=void 0,d=o(()=>c(()=>import("./error-404.72abef0f.js"),["error-404.72abef0f.js","error-404.7729cee9.css","entry.c5a3ec34.js","entry.d7ea7887.css"],import.meta.url)),l=o(()=>c(()=>import("./error-500.808b019c.js"),["error-500.808b019c.js","error-500.08851880.css","entry.c5a3ec34.js","entry.d7ea7887.css"],import.meta.url)),m=a?d:l;return(e,g)=>(E(),f(s(m),k(P({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},C=v;export{C as default};
