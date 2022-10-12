(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(499)),i=["components"],c={custom_edit_url:null,id:"18-sway",title:"sway()"},l={unversionedId:"codrone-edu/python/Flight-Commands-Movement/18-sway",id:"codrone-edu/python/Flight-Commands-Movement/18-sway",isDocsHomePage:!1,title:"sway()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/18-sway.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/18-sway",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/18-sway",editUrl:null,version:"current",sidebarPosition:18,frontMatter:{custom_edit_url:null,id:"18-sway",title:"sway()"},sidebar:"codroneEduSideBar",previous:{title:"square()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/17-square"},next:{title:"triangle()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/19-triangle"}},s=[],d={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Flies the drone in a swaying motion."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sway()"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"sway(speed, seconds, direction)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"speed"),": optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 30. ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"seconds"),': optional parameter that is the duration in seconds the drone will fly in each "sway" motion. default value is 2 ',Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"direction"),": optional parameter that determines the direction of the sway. 1 is right, -1 is left. default value is 1. ",Object(a.b)("br",null)," "),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\n# default sway parameters (30, 2, 1)\ndrone.sway()\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);