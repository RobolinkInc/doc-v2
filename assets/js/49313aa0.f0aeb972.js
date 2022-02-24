(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(339)),a=["components"],l={custom_edit_url:null,title:"set_throttle()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_throttle()"},c={unversionedId:"codrone-mini/Flight-Variables/set-throttle",id:"codrone-mini/Flight-Variables/set-throttle",isDocsHomePage:!1,title:"set_throttle()",description:"Description",source:"@site/docs/codrone-mini/04-Flight-Variables/08-set-throttle.md",sourceDirName:"codrone-mini/04-Flight-Variables",slug:"/codrone-mini/Flight-Variables/set-throttle",permalink:"/doc-v2/docs/codrone-mini/Flight-Variables/set-throttle",editUrl:null,version:"current",sidebarPosition:8,frontMatter:{custom_edit_url:null,title:"set_throttle()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_throttle()"},sidebar:"cdmSideBar",previous:{title:"set_roll()",permalink:"/doc-v2/docs/codrone-mini/Flight-Variables/set-roll"},next:{title:"set_yaw()",permalink:"/doc-v2/docs/codrone-mini/Flight-Variables/set-yaw"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a setter function that allows you to set the ",Object(i.b)("strong",{parentName:"p"},"throttle")," variable. Once you set throttle, you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"move()")," to actually execute the movement. The throttle variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to throttle again."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"set_throttle(power)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the throttle variable.  The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# Drone goes up for 1 second with 50% power\ndrone.set_throttle(50)\ndrone.move(1)               #use move() to execute the movement for 1 second\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},339:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);