(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7746],{93481:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(63366),a=t(87462),s=t(67294),o=t(86010),r=t(8662),c=t(94780),l=t(67074),d=t(78884),h=t(53204),u=t(53566),p=t(62097),m=t(84771),x=t(1588),f=t(34867);function v(e){return(0,f.Z)("MuiCollapse",e)}(0,x.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var j=t(85893);let N=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],g=e=>{let{orientation:n,classes:t}=e,i={root:["root",`${n}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${n}`],wrapperInner:["wrapperInner",`${n}`]};return(0,c.Z)(i,v,t)},w=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver(e,n){let{ownerState:t}=e;return[n.root,n[t.orientation],"entered"===t.state&&n.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&n.hidden]}})(({theme:e,ownerState:n})=>(0,a.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===n.state&&(0,a.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})),y=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,n)=>n.wrapper})(({ownerState:e})=>(0,a.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),b=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,n)=>n.wrapperInner})(({ownerState:e})=>(0,a.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),Z=s.forwardRef(function(e,n){let t=(0,d.Z)({props:e,name:"MuiCollapse"}),{addEndListener:c,children:l,className:x,collapsedSize:f="0px",component:v,easing:Z,in:k,onEnter:C,onEntered:E,onEntering:A,onExit:S,onExited:V,onExiting:q,orientation:I="vertical",style:_,timeout:W=h.x9.standard,TransitionComponent:F=r.ZP}=t,P=(0,i.Z)(t,N),Q=(0,a.Z)({},t,{orientation:I,collapsedSize:f}),z=g(Q),T=(0,p.Z)(),D=s.useRef(),R=s.useRef(null),$=s.useRef(),M="number"==typeof f?`${f}px`:f,O="horizontal"===I,H=O?"width":"height";s.useEffect(()=>()=>{clearTimeout(D.current)},[]);let U=s.useRef(null),Y=(0,m.Z)(n,U),L=e=>n=>{if(e){let t=U.current;void 0===n?e(t):e(t,n)}},X=()=>R.current?R.current[O?"clientWidth":"clientHeight"]:0,G=L((e,n)=>{R.current&&O&&(R.current.style.position="absolute"),e.style[H]=M,C&&C(e,n)}),B=L((e,n)=>{let t=X();R.current&&O&&(R.current.style.position="");let{duration:i,easing:a}=(0,u.C)({style:_,timeout:W,easing:Z},{mode:"enter"});if("auto"===W){let s=T.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${s}ms`,$.current=s}else e.style.transitionDuration="string"==typeof i?i:`${i}ms`;e.style[H]=`${t}px`,e.style.transitionTimingFunction=a,A&&A(e,n)}),J=L((e,n)=>{e.style[H]="auto",E&&E(e,n)}),K=L(e=>{e.style[H]=`${X()}px`,S&&S(e)}),ee=L(V),en=L(e=>{let n=X(),{duration:t,easing:i}=(0,u.C)({style:_,timeout:W,easing:Z},{mode:"exit"});if("auto"===W){let a=T.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${a}ms`,$.current=a}else e.style.transitionDuration="string"==typeof t?t:`${t}ms`;e.style[H]=M,e.style.transitionTimingFunction=i,q&&q(e)}),et=e=>{"auto"===W&&(D.current=setTimeout(e,$.current||0)),c&&c(U.current,e)};return(0,j.jsx)(F,(0,a.Z)({in:k,onEnter:G,onEntered:J,onEntering:B,onExit:K,onExited:ee,onExiting:en,addEndListener:et,nodeRef:U,timeout:"auto"===W?null:W},P,{children:(e,n)=>(0,j.jsx)(w,(0,a.Z)({as:v,className:(0,o.Z)(z.root,x,{entered:z.entered,exited:!k&&"0px"===M&&z.hidden}[e]),style:(0,a.Z)({[O?"minWidth":"minHeight"]:M},_),ownerState:(0,a.Z)({},Q,{state:e}),ref:Y},n,{children:(0,j.jsx)(y,{ownerState:(0,a.Z)({},Q,{state:e}),className:z.wrapper,ref:R,children:(0,j.jsx)(b,{ownerState:(0,a.Z)({},Q,{state:e}),className:z.wrapperInner,children:l})})}))}))});Z.muiSupportAuto=!0;var k=Z},84771:function(e,n,t){"use strict";var i=t(30067);n.Z=i.Z},7960:function(e,n,t){"use strict";function i(e,n){"function"==typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return i}})},30067:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(67294),a=t(7960);function s(...e){return i.useMemo(()=>e.every(e=>null==e)?null:n=>{e.forEach(e=>{(0,a.Z)(e,n)})},e)}},97814:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(55523)}])},55523:function(e,n,t){"use strict";t.r(n);var i=t(85893),a=t(67294),s=t(66261),o=t(61953),r=t(93481),c=t(9008),l=t.n(c),d=t(30152);let h=()=>{let[e,n]=(0,a.useState)([{open:!0,title:"What is a FAQ page?",content:"Visa approval will be obtained in 10 working days"},{open:!1,title:"What is VIP Visa Service?",content:"It is a service which deliver Visa to your door."},{open:!1,title:"Treatment Visa Validity?",content:"45 Days"}]),[t,c]=(0,a.useState)([{open:!1,title:"Express Visa",content:"7 Working Days"},{open:!1,title:"Ordinary Visa",content:"14 Woking Days"},{open:!1,title:"Where I can book my Airline Ticket?",content:"We recommend booking your Airline ticket through AtracTravel"},{open:!1,title:"Can I extend my Visa",content:"Yes, you can"}]),[h,u]=(0,a.useState)([{open:!1,title:"Can I extend my Visa?",content:"You will need to contact Visa Authority in Iran."},{open:!1,title:"What If i don't receive an email?",content:"If you do not receive SMS confirmation or email confirmation please check your email account's Spam folder."},{open:!1,title:"What is passport validity required to obtain a Visa?",content:"Passport Validity 6 Months minimum"},{open:!1,title:"How Can I track the progress of my Application?",content:"You can track your application through the following link"}]),[p,m]=(0,a.useState)([{open:!1,title:"Do you have a version for business?",content:"Yes we do, Please Contact us through Contact Us page."},{open:!1,title:"Can I get a refund after Submitting my application?",content:"We start processing your application instantly, only 24 hours."},{open:!1,title:"What kind of support do you provide?",content:"24/7 Support"}]),x=t=>{n(e.map((e,n)=>(n==t&&(e.open=!e.open),e)))},f=e=>{c(t.map((n,t)=>(t==e&&(n.open=!n.open),n)))},v=e=>{u(h.map((n,t)=>(t==e&&(n.open=!n.open),n)))},j=e=>{m(p.map((n,t)=>(t==e&&(n.open=!n.open),n)))};return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(l(),{children:(0,i.jsxs)("title",{children:[d.Z.templateName," | FAQ's"]})}),(0,i.jsxs)("div",{"data-w-id":"9d7a0e08-e91c-0a1e-26f8-43972dc7186a",className:"section top-section less wf-section",children:[(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("div",{className:"page-intro",children:[(0,i.jsx)("h1",{className:"heading-content specialp special2",children:"Frequently Asked Questions"}),(0,i.jsx)("div",{className:"divider page-intro-divider"})]})}),(0,i.jsxs)("div",{className:"bg-elements",children:[(0,i.jsx)("div",{className:"bg-element-1"}),(0,i.jsx)("div",{className:"bg-element-2"}),(0,i.jsx)("div",{className:"bg-element-3"}),(0,i.jsx)("div",{className:"bg-element-4"})]})]}),(0,i.jsx)("div",{className:"section haze o kj wf-section",children:(0,i.jsx)("div",{className:"wrapper iu",children:(0,i.jsxs)("div",{className:"sidebar-grid",children:[(0,i.jsx)("div",{id:"w-node-bdc693aa-93d6-f004-b043-32061db55d6a-6c7d63dd",className:"sidebar sticky",children:(0,i.jsxs)("div",{className:"sidebar-faq-links",children:[(0,i.jsx)(s.rU,{to:"FAQ-1",activeClass:"w--current",spy:!0,className:"faq-nav-link",smooth:!0,children:"Common Questions"}),(0,i.jsx)(s.rU,{to:"FAQ-2",activeClass:"w--current",spy:!0,className:"faq-nav-link",smooth:!0,children:"Visa Processing Time"}),(0,i.jsx)(s.rU,{to:"FAQ-3",activeClass:"w--current",spy:!0,className:"faq-nav-link",smooth:!0,children:"Extending Visa"}),(0,i.jsx)(s.rU,{to:"FAQ-4",activeClass:"w--current",spy:!0,className:"faq-nav-link",smooth:!0,children:"Authorisation Code"})]})}),(0,i.jsxs)("div",{id:"w-node-bdc693aa-93d6-f004-b043-32061db55d0c-6c7d63dd",children:[(0,i.jsxs)("div",{id:"FAQ-1",className:"faq-block first",children:[(0,i.jsx)("div",{className:"intro left margin-bottom",children:(0,i.jsxs)("h2",{className:"faq-block-heading",children:[(0,i.jsx)("span",{className:"text-color-2",children:"01."})," Common Questions"]})}),e.map((e,n)=>(0,i.jsxs)("div",{className:"accordion-card",children:[(0,i.jsxs)("div",{className:"accordion-header",onClick:()=>x(n),children:[(0,i.jsx)("h5",{className:"accordion-heading",children:e.title}),(0,i.jsx)("div",{className:e.open?"accordion-arrow is-open":"accordion-arrow"})]}),(0,i.jsx)(r.Z,{in:e.open,children:(0,i.jsx)("div",{"data-ix":"new-interaction",className:"accordion-info",children:(0,i.jsxs)("div",{className:"accordion-text",children:[e.content,(0,i.jsx)("br",{})]})})})]},n))]}),(0,i.jsxs)("div",{id:"FAQ-2",className:"faq-block",children:[(0,i.jsx)("div",{className:"intro left margin-bottom",children:(0,i.jsxs)("h2",{className:"faq-block-heading",children:[(0,i.jsx)("span",{className:"text-color-2",children:"02."})," Visa Processing Time"]})}),t.map((e,n)=>(0,i.jsxs)("div",{className:"accordion-card",children:[(0,i.jsxs)("div",{className:"accordion-header",onClick:()=>f(n),children:[(0,i.jsx)("h5",{className:"accordion-heading",children:e.title}),(0,i.jsx)("div",{className:e.open?"accordion-arrow is-open":"accordion-arrow"})]}),(0,i.jsx)(r.Z,{in:e.open,children:(0,i.jsx)("div",{"data-ix":"new-interaction",className:"accordion-info",children:(0,i.jsxs)("div",{className:"accordion-text",children:[e.content,(0,i.jsx)("br",{})]})})})]},n))]}),(0,i.jsxs)("div",{id:"FAQ-3",className:"faq-block",children:[(0,i.jsx)("div",{className:"intro left margin-bottom",children:(0,i.jsxs)("h2",{className:"faq-block-heading",children:[(0,i.jsx)("span",{className:"text-color-2",children:"03."})," Extending Visa"]})}),h.map((e,n)=>(0,i.jsxs)("div",{className:"accordion-card",children:[(0,i.jsxs)("div",{className:"accordion-header",onClick:()=>v(n),children:[(0,i.jsx)("h5",{className:"accordion-heading",children:e.title}),(0,i.jsx)("div",{className:e.open?"accordion-arrow is-open":"accordion-arrow"})]}),(0,i.jsx)(r.Z,{in:e.open,children:(0,i.jsx)("div",{"data-ix":"new-interaction",className:"accordion-info",children:(0,i.jsxs)("div",{className:"accordion-text",children:[e.content,(0,i.jsx)("br",{})]})})})]},n))]}),(0,i.jsxs)("div",{id:"FAQ-4",className:"faq-block",children:[(0,i.jsx)("div",{className:"intro left margin-bottom",children:(0,i.jsxs)("h2",{className:"faq-block-heading",children:[(0,i.jsx)("span",{className:"text-color-2",children:"04."})," Authorisation Code"]})}),p.map((e,n)=>(0,i.jsxs)("div",{className:"accordion-card",children:[(0,i.jsxs)("div",{className:"accordion-header",onClick:()=>j(n),children:[(0,i.jsx)("h5",{className:"accordion-heading",children:e.title}),(0,i.jsx)("div",{className:e.open?"accordion-arrow is-open":"accordion-arrow"})]}),(0,i.jsx)(r.Z,{in:e.open,children:(0,i.jsx)("div",{"data-ix":"new-interaction",className:"accordion-info",children:(0,i.jsxs)("div",{className:"accordion-text",children:[e.content,(0,i.jsx)("br",{})]})})})]},n))]})]})]})})})]})};h.guestGuard=!0,n.default=h},220:function(e,n,t){"use strict";var i=t(67294);n.Z=i.createContext(null)},75068:function(e,n,t){"use strict";function i(e,n){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function a(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n)}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[8480,6261,9774,2888,179],function(){return e(e.s=97814)}),_N_E=e.O()}]);