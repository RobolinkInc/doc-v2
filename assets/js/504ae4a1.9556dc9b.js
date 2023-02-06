(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(586)),a=["components"],l={custom_edit_url:null,title:"set_throttle()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_throttle()"},c={unversionedId:"codrone-mini/python/Flight-Variables/set-throttle",id:"codrone-mini/python/Flight-Variables/set-throttle",isDocsHomePage:!1,title:"set_throttle()",description:"Description",source:"@site/docs/codrone-mini/python/04-Flight-Variables/08-set-throttle.md",sourceDirName:"codrone-mini/python/04-Flight-Variables",slug:"/codrone-mini/python/Flight-Variables/set-throttle",permalink:"/docs/codrone-mini/python/Flight-Variables/set-throttle",editUrl:null,version:"current",sidebarPosition:8,frontMatter:{custom_edit_url:null,title:"set_throttle()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_throttle()"},sidebar:"cdmSideBar",previous:{title:"set_roll()",permalink:"/docs/codrone-mini/python/Flight-Variables/set-roll"},next:{title:"set_yaw()",permalink:"/docs/codrone-mini/python/Flight-Variables/set-yaw"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a setter function that allows you to set the ",Object(i.b)("strong",{parentName:"p"},"throttle")," variable. Once you set throttle, you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"move()")," to actually execute the movement. The throttle variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to throttle again."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"set_throttle(power)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the throttle variable.  The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# Drone goes up for 1 second with 50% power\ndrone.set_throttle(50)\ndrone.move(1)               #use move() to execute the movement for 1 second\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);