(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(497)),a=["components"],l={custom_edit_url:null,title:"get_throttle()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"get_throttle()"},c={unversionedId:"codrone-mini/python/Flight-Variables/get-throttle",id:"codrone-mini/python/Flight-Variables/get-throttle",isDocsHomePage:!1,title:"get_throttle()",description:"Description",source:"@site/docs/codrone-mini/python/04-Flight-Variables/03-get-throttle.md",sourceDirName:"codrone-mini/python/04-Flight-Variables",slug:"/codrone-mini/python/Flight-Variables/get-throttle",permalink:"/docs/codrone-mini/python/Flight-Variables/get-throttle",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,title:"get_throttle()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"get_throttle()"},sidebar:"cdmSideBar",previous:{title:"get_roll()",permalink:"/docs/codrone-mini/python/Flight-Variables/get-roll"},next:{title:"get_yaw()",permalink:"/docs/codrone-mini/python/Flight-Variables/get-yaw"}},p=[],u={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a getter function that gets the value of the ",Object(i.b)("strong",{parentName:"p"},"throttle")," variable."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"get_throttle()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"The power of the throttle variable (int)"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\n# Print current throttle with getter function\nprint("Current throttle : ", drone.get_throttle())\ndrone.close()\n')))}s.isMDXComponent=!0},497:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return r?o.a.createElement(m,l(l({ref:t},p),{},{components:r})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);