(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),a=r(4),s=r.n(a),c=(r(10),r(3)),u=(r(11),r(1)),l=function(e){var t=e.previousData,r=e.currentData,n=e.inProcess,a=Object(i.useState)(""),s=Object(c.a)(a,2),l=s[0],o=s[1],d=Object(i.useState)(""),p=Object(c.a)(d,2),m=p[0],y=p[1],v=g(r),b=n?g(t.slice(0,t.length-1))+t[t.length-1]:g(t);function g(e){return e.length>15?parseFloat(e).toPrecision(5).replace(/\.?0+$/,""):e}return Object(i.useEffect)((function(){var e="currData",t=v.length;t>7&&t<=10&&(e+=" medium"),t>10&&(e+=" small"),o(e)}),[v]),Object(i.useEffect)((function(){var e="prevData";b.length>10&&(e+=" small"),y(e)}),[b]),Object(u.jsxs)("div",{className:"display",children:[Object(u.jsx)("p",{className:m,children:b}),Object(u.jsx)("p",{className:l,children:v})]})},o=[{id:"1",display:"AC",type:"clear",value:"clear"},{id:"2",display:"+/-",type:"registr",value:"-"},{id:"3",display:"%",type:"percent",value:"%"},{id:"4",display:"\xf7",type:"action",value:"/"},{id:"5",display:"mc",type:"memory",value:"memClear"},{id:"6",display:"mr",type:"memory",value:"memReturn"},{id:"7",display:"m-",type:"memory",value:"memMinus"},{id:"8",display:"m+",type:"memory",value:"memPlus"},{id:"9",display:"7",type:"digit",value:"7"},{id:"10",display:"8",type:"digit",value:"8"},{id:"11",display:"9",type:"digit",value:"9"},{id:"12",display:"\xd7",type:"action",value:"*"},{id:"13",display:"4",type:"digit",value:"4"},{id:"14",display:"5",type:"digit",value:"5"},{id:"15",display:"6",type:"digit",value:"6"},{id:"16",display:"\u2212",type:"action",value:"-"},{id:"17",display:"1",type:"digit",value:"1"},{id:"18",display:"2",type:"digit",value:"2"},{id:"19",display:"3",type:"digit",value:"3"},{id:"20",display:"+",type:"action",value:"+"},{id:"21",display:"0",type:"digit",value:"0"},{id:"22",display:"\u0317",type:"comma",value:"."},{id:"23",display:"=",type:"action",value:"="}],d=(r(13),function(e){var t=e.onClick;return Object(u.jsx)("ul",{className:"buttonsList",children:o.map((function(e){return Object(u.jsx)("li",{className:"button-item",onClick:t,"data-type":e.type,"data-value":e.value,children:Object(u.jsx)("span",{children:e.display})},e.id)}))})}),p=r(2),m={position:"bottom-center",style:{width:"200px",margin:"0 auto"}},y=function(e,t){return"comma"===t?e.includes(".")&&e.slice(e.indexOf(".")+1).length>9:e.length>14},v=function(e,t){var r=t.current,i=t.setCurrent,n=t.previous,a=t.setPrevious,s=t.inProcess;r.includes("%")||(n&&!s||"error"===r?(i(e),a("")):y(r,"total")?p.b.warning("only 15 digits can be entered here",m):y(r,"comma")?p.b.warning("only 10 digits after point '.' can be entered here",m):i((function(t){return"0"===t?e:t+e})))},b=function(e,t){var r=t.current,i=t.setCurrent,n=t.previous,a=t.setPrevious,s=t.inProcess;r.length<14&&!r.includes(e)&&!r.includes("%")&&("error"===r||!s&&n?(i("0".concat(e)),a("")):i((function(t){return t+e})))},g=function(e,t){var r=t.current,i=t.setCurrent;r.length<14&&"0"!==r&&"error"!==r&&i((function(t){return t.includes(e)?t.slice(1):e+t}))},f=function(e){return"."===e[e.length-1]?e.slice(0,e.length-1):e},j=function(e,t){var r=t.current,i=t.setCurrent;r.length<14&&"error"!==r&&!r.includes(e)&&i((function(t){return f(t)+e}))},h={position:"bottom-center",style:{width:"200px",margin:"0 auto"}},O=function(e,t,r){switch(t){case"+":return e+r;case"-":return e-r;case"*":return e*r;case"/":return 0!==r?e/r:"error";default:return"error"}},S=function(e){return e.includes("%")?(Number(e.slice(0,e.length-1))/100).toString():"."===e[e.length-1]?e.slice(0,e.length-1):e},x=function(e,t){var r=t.current,i=t.setCurrent,n=t.previous,a=t.setPrevious,s=t.inProcess,c=t.setInProcess;if("error"!==r&&(s||"="===e||(a(S(r)+e),i("0"),c(!0)),""!==n&&s)){var u=n.slice(0,n.length-1),l=n.slice(n.length-1),o=O(parseFloat(u),l,parseFloat(S(r)));"error"===o?(p.b.error("Division by zero",h),i(o),a(""),c(!1)):"="===e?(i(o.toString()),a(o.toString()),c(!1)):(a(o.toString()+e),i("0"))}},P={position:"bottom-center",style:{width:"200px",margin:"0 auto"}},C=function(e){return e.includes("%")?(Number(e.slice(0,e.length-1))/100).toString():e},N=function(e,t){var r=t.current,i=t.setCurrent,n=t.storage,a=t.setStorage;"memClear"===e&&a(""),"memMinus"===e&&"error"!==r&&(a((function(e){return(Number(e)-Number(C(r))).toString()})),p.b.success("Saved",P)),"memPlus"===e&&"error"!==r&&(a((function(e){return(Number(e)+Number(C(r))).toString()})),p.b.success("Saved",P)),"memReturn"===e&&(""===n?p.b.info("Storage empty",P):i(n))},k=(r(14),r(15),function(){var e=Object(i.useState)("0"),t=Object(c.a)(e,2),r=t[0],n=t[1],a=Object(i.useState)(""),s=Object(c.a)(a,2),o=s[0],m=s[1],y=Object(i.useState)(!1),f=Object(c.a)(y,2),h=f[0],O=f[1],S=Object(i.useState)(""),P=Object(c.a)(S,2),C=P[0],k=P[1];return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(p.a,{autoClose:3e3}),Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)(l,{previousData:o,currentData:r,inProcess:h}),Object(u.jsx)(d,{onClick:function(e){var t=e.currentTarget,i=t.dataset.type,a=t.dataset.value,s={current:r,setCurrent:n,previous:o,setPrevious:m,inProcess:h,setInProcess:O,storage:C,setStorage:k};switch(i){case"digit":v(a,s);break;case"comma":b(a,s);break;case"registr":g(a,s);break;case"percent":j(a,s);break;case"action":x(a,s);break;case"memory":N(a,s);break;default:n("0"),m(""),O(!1)}}})]})]})});s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d85dd585.chunk.js.map