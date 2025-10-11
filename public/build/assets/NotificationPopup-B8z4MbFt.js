import{u as f,r as i,j as t}from"./app-6EkjKtnA.js";import{A as m,l as h}from"./proxy-DWbJVk7T.js";import{I as x}from"./info-B2X51z_w.js";import{c as o}from"./createLucideIcon-DMMCXced.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],u=o("CircleCheckBig",d);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],g=o("CircleX",y),N={success:t.jsx(u,{className:"h-6 w-6 text-green-400"}),error:t.jsx(g,{className:"h-6 w-6 text-red-400"}),info:t.jsx(x,{className:"h-6 w-6 text-cyan-400"})};function z(){const{props:s}=f(),[c,a]=i.useState([]);return i.useEffect(()=>{const e=[];s?.flash?.success&&e.push({type:"success",text:s.flash.success}),s?.flash?.error&&e.push({type:"error",text:s.flash.error}),s?.flash?.info&&e.push({type:"info",text:s.flash.info}),e.length>0&&a(e);const r=e.map((j,n)=>setTimeout(()=>{a(l=>l.filter((b,p)=>p!==n))},4e3));return()=>r.forEach(clearTimeout)},[s?.flash]),c.length===0?null:t.jsx("div",{className:"fixed top-4 right-4 z-[9999] flex flex-col gap-3",children:t.jsx(m,{children:c.map((e,r)=>t.jsxs(h.div,{initial:{x:200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:500,damping:30},className:`flex items-center gap-3 p-4 rounded-xl shadow-lg border ${e.type==="success"?"bg-green-50 border-green-200":e.type==="error"?"bg-red-50 border-red-200":"bg-cyan-50 border-cyan-200"}`,children:[N[e.type],t.jsx("span",{className:"text-sm font-medium",children:e.text})]},r))})})}export{z as N};
