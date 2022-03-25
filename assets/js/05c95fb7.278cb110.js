(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{404:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),b=n,f=d["".concat(c,".").concat(b)]||d[b]||l[b]||a;return t?o.a.createElement(f,s(s({ref:r},u),{},{components:t})):o.a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),a=(t(0),t(404)),c=["components"],s={custom_edit_url:null,id:"12-get_pressure",title:"get_pressure()"},i={unversionedId:"codrone-edu/python/Sensors/12-get_pressure",id:"codrone-edu/python/Sensors/12-get_pressure",isDocsHomePage:!1,title:"get_pressure()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/12-get_pressure.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/12-get_pressure",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/12-get_pressure",editUrl:null,version:"current",sidebarPosition:12,frontMatter:{custom_edit_url:null,id:"12-get_pressure",title:"get_pressure()"},sidebar:"codroneEduSideBar",previous:{title:"get_position_data()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/11-get_position_data"},next:{title:"get_trim()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/13-get_trim"}},u=[],p={toc:u};function d(e){var r=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a getter function that returns the data from the barometer. The function returns a value in the unit Pascals. ",Object(a.b)("strong",{parentName:"p"},"Note:")," 1atm = 101325 Pa"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_pressure()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"Float that represents air pressure in Pascals."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\n# print the pressure\npressure = drone.get_pressure()\nprint(pressure)\ndrone.close()\n")))}d.isMDXComponent=!0}}]);