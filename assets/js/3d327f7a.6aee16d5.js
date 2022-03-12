(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(396)),i=["components"],l={custom_edit_url:null,id:"01-avoid_wall",title:"avoid_wall()"},c={unversionedId:"codrone-edu/python/Flight-Commands-Movement/01-avoid_wall",id:"codrone-edu/python/Flight-Commands-Movement/01-avoid_wall",isDocsHomePage:!1,title:"avoid_wall()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/01-avoid_wall.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/01-avoid_wall",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/01-avoid_wall",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,id:"01-avoid_wall",title:"avoid_wall()"},sidebar:"codroneEduSideBar",previous:{title:"takeoff()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/05-take_off"},next:{title:"circle()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/02-circle"}},d=[],p={toc:d};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"A looped method that makes the drone fly forward until it reaches a desired distance based on the front range sensor. The range of front sensor is from 0mm-1000mm (0cm-100cm)"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"avoid_wall()"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"avoid_wall(timeout)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"avoid_wall(distance)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"avoid_wall(timeout, distance)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"timeout"),": timeout is an optional paramaeter that is the duration in seconds that the function will run. the default value is 2\n",Object(a.b)("strong",{parentName:"p"},"distance"),": distance is an optional parameter that is the  distance in millimeters the drone will stop in front of an object. the default value is 700"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\n# fly forward until a wall is found 600 mm away. run this loop for 10 seconds.\ndrone.avoid_wall(10, 600)\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?r.a.createElement(f,l(l({ref:t},d),{},{components:n})):r.a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);