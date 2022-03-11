(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{277:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(376)),l=["components"],i={custom_edit_url:null,title:"set_roll()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_roll()"},c={unversionedId:"codrone-edu/python/Flight-Variables/set-roll",id:"codrone-edu/python/Flight-Variables/set-roll",isDocsHomePage:!1,title:"set_roll()",description:"Description",source:"@site/docs/codrone-edu/python/04-Flight-Variables/07-set-roll.md",sourceDirName:"codrone-edu/python/04-Flight-Variables",slug:"/codrone-edu/python/Flight-Variables/set-roll",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Variables/set-roll",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,title:"set_roll()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_roll()"},sidebar:"codroneEduSideBar",previous:{title:"set_pitch()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Variables/set-pitch"},next:{title:"set_throttle()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Variables/set-throttle"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a setter function that allows you to set the ",Object(a.b)("strong",{parentName:"p"},"roll")," variable. Once you set roll, you have to use ",Object(a.b)("inlineCode",{parentName:"p"},"move()")," to actually execute the movement. The roll variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to roll again."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"set_roll(power)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the roll variable.  The number represents the direction and power of the output for that flight motion variable. Negative roll is left, positive roll is right."),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# Drone goes right for 1 second with 50 power\ndrone.set_roll(50)\ndrone.move(1)           #use move() to execute the movement for 1 second\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);