(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(400)),a=["components"],c={custom_edit_url:null,id:"22-turn_right",title:"turn_right()"},u={unversionedId:"codrone-edu/python/Flight-Commands-Movement/22-turn_right",id:"codrone-edu/python/Flight-Commands-Movement/22-turn_right",isDocsHomePage:!1,title:"turn_right()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/22-turn_right.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/22-turn_right",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/22-turn_right",editUrl:null,version:"current",sidebarPosition:22,frontMatter:{custom_edit_url:null,id:"22-turn_right",title:"turn_right()"},sidebar:"codroneEduSideBar",previous:{title:"turn_left()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/21-turn_left"},next:{title:"get_pitch()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Variables/get-pitch"}},d=[],l={toc:d};function p(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Turns the drone right using the built in gyroscope. The default degree is 90"),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"turn_right()"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"turn_right(degree)"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"turn_right(timeout)"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"turn_right(degree, timeout)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"degree"),": optional parameter that turns the drone in the given degree. default value is 90.\n",Object(i.b)("strong",{parentName:"p"},"timeout"),": optional parameter that is duration in seconds that drone will try to turn. default value is 3"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.turn_right() # make a 90 degree right turn.\ndrone.hover(1) # wait for 1 second in the air\ndrone.turn_right(30, 3) # make a 30 degree right turn with a 3 second timeout.\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return n?o.a.createElement(b,c(c({ref:t},d),{},{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);