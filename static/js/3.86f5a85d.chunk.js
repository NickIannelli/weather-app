(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[3],{109:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(45);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(s){i=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},110:function(t,e,n){t.exports=n.p+"static/media/sun.e169a38b.svg"},111:function(t,e,n){"use strict";var a,i=n(0),r=n.n(i),o=n(5),c=n(23),s=n(3),u=n(9),l=n(109),p=n(37);function d(t){var e=t.initialValues,n=t.fields,a=r.a.useState(n.map((function(t){return Object(u.a)({},t,e[t]||"")})).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),e)}),{})),i=Object(l.a)(a,2),o=i[0],c=i[1];return{fields:n.map((function(t){return Object(u.a)({},t,{onChange:function(e){return n=t,a=e.target.value,c((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(u.a)({},n,a))}));var n,a},value:o[t]})})).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),e)}),{}),handleSubmit:function(t){return function(e){return e.preventDefault(),t(o)}}}}var f=n(43),m=["-","ACT","NSW","NT","QLD","SA","TAS","VIC","WA"],h=Object(f.b)((function(t){return{container:{display:"flex",width:"100%",maxWidth:"660px",margin:"0 auto"},citySearch:{flex:"4 1 40px",width:"0"},stateDropdown:{flex:"0 0 80px",width:"0"},searchButton:{flex:"1 1 40px",width:"0",maxWidth:"100px",fontWeight:"bold"}}}));e.a=Object(i.forwardRef)((function(t,e){var n=t.initialValues,u=void 0===n?{city:"",state:"-"}:n,l=Object(c.e)(),f=h(),b=d({initialValues:u,fields:["city","state"]}),x=b.fields,v=b.handleSubmit;Object(i.useImperativeHandle)(e,(function(){return{updateValues:function(t){Object.keys(t).forEach((function(e){x[e].onChange(function(t){return Object(s.a)(Object(s.a)({},t),{},{addEventListener:p.noop,dispatchEvent:p.noop})}({target:{value:t[e]}}))}))}}}));var g=r.a.useCallback((function(t){t.city&&t.state&&(document.activeElement&&(void 0===a&&(a="ontouchstart"in window),a)&&document.activeElement.blur(),l(Object(o.d)("/weather/".concat(t.city,"|").concat(t.state))))}),[l]);return r.a.createElement("form",{action:"#",onSubmit:v(g),className:f.container},r.a.createElement("input",Object.assign({placeholder:"City/Suburb","aria-label":"Enter a city or suburb to search",className:f.citySearch,type:"text"},x.city)),r.a.createElement("select",Object.assign({className:f.stateDropdown},x.state,{"aria-label":"Select a state"}),m.map((function(t){return r.a.createElement("option",{value:t,key:t},t)}))),r.a.createElement("button",{className:f.searchButton,type:"submit","aria-label":"Search"},"Go"))}))},112:function(t,e,n){t.exports=n.p+"static/media/cloud.c3660713.png"},113:function(t,e,n){t.exports=n.p+"static/media/rain.67df380f.png"},114:function(t,e,n){t.exports=n.p+"static/media/half-moon.920ac6c5.svg"},120:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return et}));var a=n(109),i=n(0),r=n.n(i),o=n(43),c=n(23),s=n(3),u=n(4),l=n(6),p=(n(2),n(28)),d=n.n(p),f=!1,m=r.a.createContext(null),h=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var i,r=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?r?(i="exited",a.appearStatus="entering"):i="entered":i=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",a.state={status:i},a.nextCallback=null,a}Object(l.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,a=this.context?this.context.isMounting:t,i=this.props.nodeRef?[a]:[d.a.findDOMNode(this),a],r=i[0],o=i[1],c=this.getTimeouts(),s=a?c.appear:c.enter;!t&&!n||f?this.safeSetState({status:"entered"},(function(){e.props.onEntered(r)})):(this.props.onEnter(r,o),this.safeSetState({status:"entering"},(function(){e.props.onEntering(r,o),e.onTransitionEnd(s,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(r,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:d.a.findDOMNode(this);e&&!f?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(a),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:d.a.findDOMNode(this),a=null==t&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=i[0],o=i[1];this.props.addEndListener(r,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,a=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(u.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(m.Provider,{value:null},"function"===typeof n?n(t,a):r.a.cloneElement(r.a.Children.only(n),a))},e}(r.a.Component);function b(){}h.contextType=m,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},h.UNMOUNTED="unmounted",h.EXITED="exited",h.ENTERING="entering",h.ENTERED="entered",h.EXITING="exiting";var x=h,v=function(t,e){if(!t||!t.base)return 0;var n=function(t){var e=t.sys;return{sunrise:1e3*(e=void 0===e?{sunrise:0,sunset:0,type:0,id:0}:e).sunrise,sunset:1e3*e.sunset}}(t),a=n.sunrise,i=n.sunset;return e<a-18e5?1:e<a+18e5?1-(e-(a-18e5))/36e5*1:e>i+18e5?1:e>i-18e5?(e-i+18e5)/36e5*1:0},g=n(61);function E(t,e,n){var a=r.a.useRef(null);r.a.useEffect((function(){return a.current=setInterval(t,e),function(){clearInterval(a.current)}}),[].concat(Object(g.a)(n),[t,e]))}var y=n(112),O=n.n(y),j=Object(o.b)({cloudContainer:{transition:"opacity 1.4s ease"},clouds:{position:"fixed",opacity:.7,animation:"15s ease-in-out 0s infinite running both $shiftLeft"},"@keyframes shiftLeft":{"0%":{transform:"translate3d(0, 0, 0)"},"30%":{transform:"translate3d(50px, 0, 0)"},"100%":{transform:"translate3d(0, 0, 0)"}}});function w(t){var e=function(){var t=r.a.useState(document.documentElement.getBoundingClientRect()),e=Object(a.a)(t,2),n=e[0],i=e[1],o=r.a.useCallback((function(){i(document.documentElement.getBoundingClientRect())}),[i]);return r.a.useEffect((function(){window.addEventListener("resize",o),window.addEventListener("orientationchange",o)}),[o]),n}().width,n=j();return r.a.createElement("div",Object.assign({className:n.cloudContainer},t),Array.from({length:Math.ceil(e/700)},(function(t,e){return r.a.createElement("img",{key:e,src:O.a,alt:"",className:n.clouds,style:{left:"".concat(700*e-200,"px"),top:"".concat(-60*((e+1)%2+1),"px"),animationDelay:"".concat(600*e,"ms")}})})))}var k=n(113),S=n.n(k),C=Object(o.b)({rainContainer:{transition:"opacity 1.4s ease",position:"fixed",top:"-100vh",left:"-200px",zIndex:-1},rain:{minHeight:"220vh",opacity:.7,animation:"0.4s linear 0s infinite running $drizzleDown"},"@keyframes drizzleDown":{"0%":{transform:"translate3d(0, 0, 0)"},"100%":{transform:"translate3d(-70px, 100vh, 0)"}}});function N(t){var e=C();return r.a.createElement("div",Object.assign({},t,{className:e.rainContainer,style:Object(s.a)({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",WebkitTransformStyle:"preserve-3d",transformStyle:"preserve-3d"},t.style)}),r.a.createElement("img",{src:S.a,alt:"",className:e.rain}))}var T=n(47),D=n(110),A=n.n(D),W=n(114),I=n.n(W),L=Object(o.b)({sunContainer:{transition:"opacity 1.4s ease"},sun:{position:"fixed",opacity:.7,top:"-60px",left:"-60px",width:"150px"}});function R(t){var e=t.isMoon,n=Object(T.a)(t,["isMoon"]),a=L();return r.a.createElement("div",Object.assign({className:a.sunContainer},n),r.a.createElement("img",{src:e?I.a:A.a,alt:"",className:a.sun}))}var M={transition:"all 1.5s ease-in-out",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:-1,pointerEvents:"none","& *":{pointerEvents:"none",userSelect:"none"}},B=Object(o.b)((function(t){return{backgroundDay:Object(s.a)(Object(s.a)({},M),{},{backgroundColor:t.color.dayBlue}),backgroundNight:Object(s.a)(Object(s.a)({},M),{},{backgroundColor:t.color.nightBlue})}})),z={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},F=function(t){return t.weather.some((function(t){return t.id>200&&t.id<600}))};function V(t){var e=B(),n=r.a.useState(Date.now()),i=Object(a.a)(n,2),o=i[0],c=i[1];if(E((function(){c(Date.now())}),3e4,[c]),!t.base)return r.a.createElement("div",{className:e.backgroundDay});var s=function(t){return F(t)||t.weather.some((function(t){return t.id>=801&&t.id<=804}))}(t),u=F(t);return r.a.createElement("div",{className:e.backgroundDay},r.a.createElement("div",{className:e.backgroundNight,style:{opacity:.9*v(t,o)}}),r.a.createElement(x,{in:s,timeout:1400},(function(t){return r.a.createElement(w,{style:z[t]})})),r.a.createElement(x,{in:u,timeout:1400},(function(t){return r.a.createElement(N,{style:z[t]})})),r.a.createElement(x,{in:!u&&!s,timeout:1400},(function(e){return r.a.createElement(R,{style:z[e],isMoon:1===v(t,o)})})))}var P=n(111),U=n(60);function _(t){var e=t.isFilled,n=t.size;return r.a.createElement("svg",{height:"".concat(n,"em"),viewBox:"0 0 512 512",width:"".concat(n,"em"),xmlns:"http://www.w3.org/2000/svg",overflow:"visible"},r.a.createElement("path",{d:"m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0",fill:e?"#ffc107":"none",stroke:e?"none":"#000",strokeWidth:"2em"}))}var H=n(46);var G=n(58),J=Object(o.b)((function(t){return{outerContainer:{maxWidth:t.spacing.contentWidth,margin:t.spacing.get(0,"auto"),cursor:function(t){return t.isActive?"auto":"pointer"},"& > *":{opacity:function(t){return t.isActive?1:.5}},"&:active, &:focus":{outline:"none"}},container:Object(s.a)(Object(s.a)({},t.effects.glassPane(5)),{},{position:"relative",display:"flex",margin:t.spacing.get(4,2),padding:t.spacing.get(1,2),background:"rgba(2, 150, 125, 0.1)",borderRadius:t.curvature.large,color:function(t){return t.color},transition:"color 1.4s ease",transitionDelay:"0.3s","& h2":{marginTop:"12px"}}),icon:{flex:"0 0 50px",alignSelf:"flex-start",height:"50px",width:"50px"},content:{flex:"1 1 auto",display:"flex",flexDirection:"column",padding:t.spacing.get(0,2),overflow:"hidden","& h1, & p":{margin:0,lineHeight:t.typography.lineHeight,textShadow:"0 2px 5px rgba(255, 255, 255, 0.2)"},"& h1":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},rightActions:{display:"flex",flex:"0 0 auto",flexDirection:"column",justifyContent:"space-around"},subtleText:{paddingTop:"0.5em",opacity:.5},notButton:{"&, &:hover, &:active, &:focus":{border:"none",background:"none",margin:0,padding:0,outline:"none"}}}})),X=function(t){return"".concat(Math.round(t)).concat("\xb0")},$=function(t){var e=t.location.city,n=t.weather,a=n.main,i=n.weather,r=X(a.temp),o=X(a.temp_max),c=X(a.temp_min),s=X(a.feels_like);return"The weather in ".concat(e," is currently ").concat(r," with ").concat(i[0].description,".\n\t").concat(s!==r?"It feels like ".concat(s,"."):"","\n\t").concat(c!==o?"It is a top of ".concat(o," and a low of ").concat(c):"")};function q(t){var e=t.location,n=t.isActive,i=t.weather,o=Object(T.a)(t,["location","isActive","weather"]),s=r.a.useState(Date.now()),u=Object(a.a)(s,2),l=u[0],p=u[1],d=Object(c.e)(),f=Object(c.f)((function(t){return H.c.isLocationPinned(e,t)})),m=Object(c.f)(G.getActiveWeather);E((function(){p(Date.now())}),3e4,[p]);var h=v(m,l),b=J({color:h>.2?"white":"black",isActive:n});if(!i||!i.base)return null;var x=i.weather,g=i.name,y=i.main;return r.a.createElement("div",Object.assign({},o,{className:[b.outerContainer,o.className].filter(Boolean).join(" "),tabIndex:0,"aria-label":$(t)}),r.a.createElement(U.b,{message:$(t),"aria-live":n?"assertive":"polite"}),r.a.createElement("div",{className:b.container},r.a.createElement("img",{className:b.icon,src:"http://openweathermap.org/img/wn/".concat(x[0].icon,"@2x.png"),alt:""}),r.a.createElement("div",{className:b.content},r.a.createElement("h1",null,g),r.a.createElement("p",null,x[0].description.split(". ").map((function(t){return"".concat(t[0].toUpperCase()).concat(t.substring(1))})).join(". "),". Feels like ",X(y.feels_like)),r.a.createElement("p",{className:b.subtleText},"Low: ",X(y.temp_min)," | High: ",X(y.temp_max))),r.a.createElement("div",{className:b.rightActions},r.a.createElement("h2",null,X(y.temp)),r.a.createElement("button",{onClick:function(){d(f?H.a.unpinLocation(e.city,e.state):H.a.pinLocation(e.city,e.state))},type:"button",className:b.notButton,"aria-label":f?"Unpin ".concat(e.city," location"):"Pin ".concat(e.city," for quick access")},r.a.createElement(_,{isFilled:f,size:2})))))}var Q=n(5),K=n(44),Y=n(25);function Z(t){var e=t.location,n=Object(c.f)((function(t){return K.c.getWeatherForTerm(Object(Y.a)(e),t)})),a=Object(c.e)();return E((function(){a(K.a.fetchWeather(e.city,e.state,!0))}),6e4,[e.city,e.state,a]),r.a.createElement(q,{weather:n,location:e,onClick:function(){a(Object(Q.d)("/weather/".concat(e.city,"|").concat(e.state)))}})}var tt=Object(o.b)((function(t){return{fixedSearchForm:{position:"fixed",top:0,left:0,right:0,padding:t.spacing.get(1),zIndex:1,backdropFilter:"blur(8px)",boxShadow:"0 4px 4px -1px rgba(0, 0, 0, 0.3)"},content:{marginTop:"80px",paddingBottom:"80px"}}}));function et(t){var e=t.computedMatch.params.location,n=tt(),i=e.split("|"),o=Object(a.a)(i,2),s=o[0],u=o[1],l=Object(c.f)(K.c.getActiveWeather),p=Object(c.f)((function(t){return t.user.pinnedLocations})),d=Object(c.e)(),f=r.a.useRef(null);return r.a.useEffect((function(){s&&u&&(d(K.a.fetchWeather(s,u)),null!=f.current&&f.current.updateValues({city:s,state:u}))}),[s,u,d,f]),E((function(){d(K.a.fetchWeather(s,u))}),3e4,[s,u,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.fixedSearchForm},r.a.createElement(P.a,{ref:f,initialValues:{city:s,state:u}})),r.a.createElement("div",{className:n.content},r.a.createElement(q,{weather:l,location:{city:s,state:u},isActive:!0}),r.a.createElement(V,l),p.filter((function(t){return t.city!==s&&t.state!==u})).map((function(t){return r.a.createElement(Z,{key:"".concat(t.city,"|").concat(t.state),location:t})}))))}}}]);
//# sourceMappingURL=3.86f5a85d.chunk.js.map