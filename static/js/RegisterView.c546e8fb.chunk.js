(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[2],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(36);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(u){r=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},114:function(e,t,a){"use strict";a.r(t);var n=a(109),r=a(0),o=a(12),i=a(28),l=a(35),u=a(16),c=a(2),s=Object(u.a)({label:{display:"block",marginTop:"10px",marginBottom:"5px",fontWeight:700},input:{height:"20px",outline:"none","&:focus":{border:["2px","solid","orange"],boxShadow:["inset","0px","0px","3px","3px","rgba(181, 86, 38, 0.34)"]}},inputPassword:{marginLeft:"10px",marginBottom:"15px"},inputEmail:{marginLeft:"40px"},inputName:{marginLeft:"36px"},button:{display:"block",paddingRight:"10px",paddingLeft:"10px",marginRight:"auto",marginLeft:"auto",backgroundColor:"rgb(54, 140, 163)",color:"white",borderRadius:"5px","&:hover":{color:"orange"}}});t.default=function(){var e=s(),t=Object(r.useState)(""),a=Object(n.a)(t,2),u=a[0],p=a[1],b=Object(r.useState)(""),d=Object(n.a)(b,2),m=d[0],h=d[1],f=Object(r.useState)(""),j=Object(n.a)(f,2),g=j[0],x=j[1],O=Object(o.c)(),y=function(){h(""),p(""),x("")};return Object(c.jsx)(l.a,{children:Object(c.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),O(Object(i.d)({name:u,email:m,password:g})),y()},children:[Object(c.jsxs)("label",{className:e.label,children:["Name",Object(c.jsx)("input",{className:[e.inputName,e.input].join(" "),type:"text",placeholder:"name",value:u,required:!0,onChange:function(e){p(e.target.value)}})]}),Object(c.jsxs)("label",{className:e.label,children:["Email",Object(c.jsx)("input",{className:[e.inputEmail,e.input].join(" "),type:"email",placeholder:"email",required:!0,value:m,onChange:function(e){h(e.target.value)}})]}),Object(c.jsxs)("label",{className:e.label,children:["Password",Object(c.jsx)("input",{className:[e.inputPassword,e.input].join(" "),type:"password",placeholder:"password",required:!0,value:g,onChange:function(e){x(e.target.value)}})]}),Object(c.jsx)("button",{className:e.button,type:"submit",children:"Register"})]})})}}}]);
//# sourceMappingURL=RegisterView.c546e8fb.chunk.js.map