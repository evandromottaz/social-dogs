(this["webpackJsonpsocial-dogs"]=this["webpackJsonpsocial-dogs"]||[]).push([[4],{316:function(t,n,e){"use strict";e.r(n);var a,i=e(4),r=e(1),s=e.n(r),c=e(3),o=e(2).d.section(a||(a=Object(c.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 2rem;\n\n  .graphItem {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n    border-radius: 0.2rem;\n    display: grid;\n    align-items: center;\n\n    .VictoryContainer {\n      height: initial !important;\n    }\n  }\n\n  .total {\n    grid-column: 1 /3;\n    padding: 2rem;\n    font-size: 2rem;\n  }\n\n  @media (max-width: 40rem) {\n    grid-template-columns: 1fr;\n\n    .total {\n      grid-column: 1;\n    }\n  }\n"]))),d=e(314),l=e(313),m=e(315),u=e(0);n.default=function(t){var n=t.data,e=s.a.useState([]),a=Object(i.a)(e,2),r=a[0],c=a[1],p=s.a.useState(0),g=Object(i.a)(p,2),b=g[0],f=g[1];return s.a.useEffect((function(){var t=n.map((function(t){return{x:t.title,y:Number(t.acessos)}}));n&&n.length>0&&(f(n.map((function(t){var n=t.acessos;return Number(n)})).reduce((function(t,n){return t+n}))),c(t))}),[n]),Object(u.jsxs)(o,{className:"animation",children:[Object(u.jsx)("div",{className:"total graphItem",children:Object(u.jsxs)("p",{children:["Acessos: ",b]})}),Object(u.jsx)("div",{className:"graphItem",children:Object(u.jsx)(d.a,{data:r,innerRadius:50,padding:{top:20,bottom:20,left:80,right:80},style:{data:{fillOpacity:.9,stroke:"#fff",strokeWidth:2},labels:{fontSize:14,fill:"#333"}}})}),Object(u.jsx)("div",{className:"graphItem",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(m.a,{alignment:"start",data:r})})})]})}}}]);
//# sourceMappingURL=4.d71ffb3c.chunk.js.map