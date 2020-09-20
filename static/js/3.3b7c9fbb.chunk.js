(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[3],{109:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(45);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(u){r=!0,c=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},110:function(t,e,a){"use strict";var n,r=a(0),c=a.n(r),i=a(5),o=a(23),u=a(3),l=a(9),s=a(109),b=a(37);function d(t){var e=t.initialValues,a=t.fields,n=c.a.useState(a.map((function(t){return Object(l.a)({},t,e[t]||"")})).reduce((function(t,e){return Object(u.a)(Object(u.a)({},t),e)}),{})),r=Object(s.a)(n,2),i=r[0],o=r[1];return{fields:a.map((function(t){return Object(l.a)({},t,{onChange:function(e){return a=t,n=e.target.value,o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(l.a)({},a,n))}));var a,n},value:i[t]})})).reduce((function(t,e){return Object(u.a)(Object(u.a)({},t),e)}),{}),handleSubmit:function(t){return function(e){return e.preventDefault(),t(i)}}}}var f=a(43),p=["-","ACT","NSW","NT","QLD","SA","TAS","VIC","WA"],h=Object(f.b)((function(t){return{container:{display:"flex",width:"100%",maxWidth:"660px",margin:"0 auto"},citySearch:{flex:"4 1 40px",width:"0"},stateDropdown:{flex:"0 0 80px",width:"0"},searchButton:{flex:"1 1 40px",width:"0",maxWidth:"100px",fontWeight:"bold"}}}));e.a=Object(r.forwardRef)((function(t,e){var a=t.initialValues,l=void 0===a?{city:"",state:"-"}:a,s=Object(o.e)(),f=h(),m=d({initialValues:l,fields:["city","state"]}),v=m.fields,y=m.handleSubmit;Object(r.useImperativeHandle)(e,(function(){return{updateValues:function(t){Object.keys(t).forEach((function(e){v[e].onChange(function(t){return Object(u.a)(Object(u.a)({},t),{},{addEventListener:b.noop,dispatchEvent:b.noop})}({target:{value:t[e]}}))}))}}}));var g=c.a.useCallback((function(t){t.city&&t.state&&(document.activeElement&&(void 0===n&&(n="ontouchstart"in window),n)&&document.activeElement.blur(),s(Object(i.d)("/weather/".concat(t.city,"|").concat(t.state))))}),[s]);return c.a.createElement("form",{action:"#",onSubmit:y(g),className:f.container},c.a.createElement("input",Object.assign({placeholder:"City/Suburb","aria-label":"Enter a city or suburb to search",className:f.citySearch,type:"text"},v.city)),c.a.createElement("select",Object.assign({className:f.stateDropdown},v.state,{"aria-label":"Select a state"}),p.map((function(t){return c.a.createElement("option",{value:t,key:t},t)}))),c.a.createElement("button",{className:f.searchButton,type:"submit","aria-label":"Search"},"Go"))}))},113:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return f}));var n=a(5),r=a(0),c=a.n(r),i=a(43),o=a(23),u=a(110),l=a(57),s=a(46),b=a(44),d=Object(i.b)((function(t){return{backgroundDay:{display:"flex",flexDirection:"column",position:"fixed",top:"0",left:"0",right:"0",bottom:"0",justifyContent:"center"},content:{textAlign:"center",margin:"-20vh auto 0",width:"calc(100% - 40px)"},logoImage:{filter:"drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))",width:"80px",height:"80px",userSelect:"none"},citiesButton:{transition:"all 0.3s ease",padding:t.spacing.get(3,6),background:"rgba(255, 255, 255, 0.5)",borderRadius:t.curvature.small,border:"none",boxShadow:"0 3px 4px -2px rgba(0, 0, 0, 0.6)",fontWeight:"bold",cursor:"pointer","&:hover":{background:"rgba(255, 255, 255, 0.7)",boxShadow:"0 5px 6px -2px rgba(0, 0, 0, 0.7)"},"&:focus, &:active":{outline:"none"}}}}));function f(){var t=d(),e=Object(o.e)();return c.a.createElement("div",{className:t.backgroundDay},c.a.createElement("div",{className:t.content},c.a.createElement("img",{src:"/images/sun.svg",className:t.logoImage,alt:""}),c.a.createElement("h1",null,"Weather Finder"),c.a.createElement("button",{type:"button",onClick:function(){Object(o.c)((function(){l.b.forEach((function(t){var a=t.city,n=t.state;e(s.a.pinLocation(a,n)),e(b.a.fetchWeather(a,n,!0))})),e(Object(n.d)("/weather/".concat(l.b[0].city,"|").concat(l.b[0].state)))}))},className:t.citiesButton},"Australia's Capital Cities"),c.a.createElement("p",null,"or"),c.a.createElement(u.a,null)))}}}]);
//# sourceMappingURL=3.3b7c9fbb.chunk.js.map