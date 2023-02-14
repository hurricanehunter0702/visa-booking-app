(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5051],{91359:function(e,a,t){"use strict";t.d(a,{Z:function(){return g}});var o=t(87462),r=t(63366),s=t(67294),n=t(86010),i=t(94780),l=t(67074),c=t(78884),d=t(1588),u=t(34867);function m(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var h=t(85893);let p=["className","component"],Z=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"]},m,a)},x=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=s.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:s,component:i="div"}=t,l=(0,r.Z)(t,p),d=(0,o.Z)({},t,{component:i}),u=Z(d);return(0,h.jsx)(x,(0,o.Z)({as:i,className:(0,n.Z)(u.root,s),ownerState:d,ref:a},l))});var g=f},59742:function(e,a,t){"use strict";t.d(a,{Z:function(){return N}});var o=t(63366),r=t(87462),s=t(67294),n=t(86010),i=t(94780),l=t(29630),c=t(78884),d=t(67074),u=t(1588),m=t(34867);function h(e){return(0,m.Z)("MuiCardHeader",e)}let p=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var Z=t(85893);let x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,a)},g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,r.Z)({[`& .${p.title}`]:a.title,[`& .${p.subheader}`]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),C=s.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:s,avatar:i,className:d,component:u="div",disableTypography:m=!1,subheader:h,subheaderTypographyProps:p,title:C,titleTypographyProps:N}=t,b=(0,o.Z)(t,x),w=(0,r.Z)({},t,{component:u,disableTypography:m}),M=f(w),P=C;null==P||P.type===l.Z||m||(P=(0,Z.jsx)(l.Z,(0,r.Z)({variant:i?"body2":"h5",className:M.title,component:"span",display:"block"},N,{children:P})));let R=h;return null==R||R.type===l.Z||m||(R=(0,Z.jsx)(l.Z,(0,r.Z)({variant:i?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:R}))),(0,Z.jsxs)(g,(0,r.Z)({className:(0,n.Z)(M.root,d),as:u,ref:a,ownerState:w},b,{children:[i&&(0,Z.jsx)(v,{className:M.avatar,ownerState:w,children:i}),(0,Z.jsxs)(y,{className:M.content,ownerState:w,children:[P,R]}),s&&(0,Z.jsx)(j,{className:M.action,ownerState:w,children:s})]}))});var N=C},49837:function(e,a,t){"use strict";t.d(a,{Z:function(){return v}});var o=t(87462),r=t(63366),s=t(67294),n=t(86010),i=t(94780),l=t(67074),c=t(78884),d=t(70918),u=t(1588),m=t(34867);function h(e){return(0,m.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var p=t(85893);let Z=["className","raised"],x=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"]},h,a)},f=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({overflow:"hidden"})),g=s.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiCard"}),{className:s,raised:i=!1}=t,l=(0,r.Z)(t,Z),d=(0,o.Z)({},t,{raised:i}),u=x(d);return(0,p.jsx)(f,(0,o.Z)({className:(0,n.Z)(u.root,s),elevation:i?8:void 0,ref:a,ownerState:d},l))});var v=g},70125:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crms/logo",function(){return t(64442)}])},64442:function(e,a,t){"use strict";t.r(a);var o=t(85893),r=t(67294),s=t(79072),n=t(49837),i=t(59742),l=t(91359),c=t(61953),d=t(29630),u=t(80562),m=t(94314),h=t(21609),p=t(5464),Z=t(86501);let x=()=>{let[e,a]=(0,r.useState)([]);(0,r.useEffect)(()=>{t()},[]);let t=async()=>{let{data:e}=await p.Z.get("crms/logos");a(e)},m=async(e,a)=>{let o=new FormData;o.append("logo",e.target.files[0]),o.append("type",a);let{data:r}=await p.Z.post("/crms/logos",o,{headers:{"Content-Type":"multipart/form-data"}});r.status?Z.ZP.success(r.msg):Z.ZP.error(r.msg),await t()},x=async e=>{let{data:a}=await p.Z.delete("/crms/logo",{type:e});a.status?Z.ZP.success(a.msg):Z.ZP.error(a.msg),await t()},f=a=>{let t=e.find(e=>e.type===a);return t?"".concat("/uploads","/logos/").concat(t.image):void 0};return(0,o.jsx)(s.ZP,{container:!0,spacing:6,children:(0,o.jsx)(s.ZP,{item:!0,xs:12,children:(0,o.jsxs)(n.Z,{children:[(0,o.jsx)(i.Z,{title:"Logo Management"}),(0,o.jsx)(l.Z,{children:(0,o.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,o.jsxs)(c.Z,{sx:{mr:4},children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"Email template"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:f("email"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(u.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>m(e,"email")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(u.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>x("email"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]}),(0,o.jsxs)(c.Z,{sx:{mr:4},children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"User panel"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:f("user"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(u.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>m(e,"user")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(u.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>x("user"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"Admin panel"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:f("admin"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(u.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>m(e,"admin")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(u.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>x("admin"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]})]})})]})})})};x.getLayout=e=>(0,o.jsx)(m.Z,{children:e}),a.default=x}},function(e){e.O(0,[6284,8480,4583,8515,8259,9072,4314,9774,2888,179],function(){return e(e.s=70125)}),_N_E=e.O()}]);