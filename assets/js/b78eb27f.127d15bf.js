(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(499)),i=["components"],u={custom_edit_url:null,id:"21-turn_left",title:"turn_left()"},c={unversionedId:"codrone-edu/python/Flight-Commands-Movement/21-turn_left",id:"codrone-edu/python/Flight-Commands-Movement/21-turn_left",isDocsHomePage:!1,title:"turn_left()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/21-turn_left.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/21-turn_left",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/21-turn_left",editUrl:null,version:"current",sidebarPosition:21,frontMatter:{custom_edit_url:null,id:"21-turn_left",title:"turn_left()"},sidebar:"codroneEduSideBar",previous:{title:"turn_degree()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/20-turn_degree"},next:{title:"turn_right()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/22-turn_right"}},l=[],d={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Turns the drone left using the built in gyroscope. The default degree is 90"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"turn_left()"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"turn_left(degree)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"turn_left(timeout)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"turn_left(degree, timeout)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"degree"),": optional parameter that turns the drone in the given degree. default value is 90. ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"timeout"),": optional parameter that is duration in seconds that drone will try to turn. default value is 3 ",Object(a.b)("br",null)," "),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.turn_left() # make a 90 degree left turn.\ndrone.hover(1) # wait for 1 second in the air\ndrone.turn_left(30, 3) # make a 30 degree left turn with a 3 second timeout.\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||s[m]||a;return n?o.a.createElement(f,u(u({ref:t},l),{},{components:n})):o.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);