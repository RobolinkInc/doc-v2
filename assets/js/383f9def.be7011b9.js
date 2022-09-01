(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{174:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),i=(t(0),t(497)),a=["components"],c={custom_edit_url:null,id:"11-right_arrow_pressed",title:"right_arrow_pressed()"},p={unversionedId:"codrone-edu/python/Controller/11-right_arrow_pressed",id:"codrone-edu/python/Controller/11-right_arrow_pressed",isDocsHomePage:!1,title:"right_arrow_pressed()",description:"Description",source:"@site/docs/codrone-edu/python/08-Controller/11-right_arrow_pressed.md",sourceDirName:"codrone-edu/python/08-Controller",slug:"/codrone-edu/python/Controller/11-right_arrow_pressed",permalink:"/docs/codrone-edu/python/Controller/11-right_arrow_pressed",editUrl:null,version:"current",sidebarPosition:11,frontMatter:{custom_edit_url:null,id:"11-right_arrow_pressed",title:"right_arrow_pressed()"},sidebar:"codroneEduSideBar",previous:{title:"r2_pressed()",permalink:"/docs/codrone-edu/python/Controller/10-r2_pressed"},next:{title:"s_pressed()",permalink:"/docs/codrone-edu/python/Controller/12-s_pressed"}},s=[],l={toc:s};function d(e){var r=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"A function that determines if the controller's right arrow button has been pressed"),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"right_arrow_pressed()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"True if the right arrow button is pressed or held. Otherwise the function will return false."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\nimport time\n\ndrone = Drone()\ndrone.open()\n\nwhile True:\n    time.sleep(0.1)\n    if drone.right_arrow_pressed():\n        print("right arrow button has been pressed!")\n\n')))}d.isMDXComponent=!0},497:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,f=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return t?o.a.createElement(f,c(c({ref:r},s),{},{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);