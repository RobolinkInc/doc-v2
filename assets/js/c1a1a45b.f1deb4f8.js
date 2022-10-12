(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{402:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(499)),i=["components"],c={custom_edit_url:null,id:"06-keep_distance",title:"keep_distance()"},d={unversionedId:"codrone-edu/python/Flight-Commands-Movement/06-keep_distance",id:"codrone-edu/python/Flight-Commands-Movement/06-keep_distance",isDocsHomePage:!1,title:"keep_distance()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/06-keep_distance.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/06-keep_distance",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/06-keep_distance",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,id:"06-keep_distance",title:"keep_distance()"},sidebar:"codroneEduSideBar",previous:{title:"hover()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/05-hover"},next:{title:"move()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/07-move"}},p=[],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"A looped method that makes the drone fly forward until it reaches a desired distance. Once the desired distance in reached the drone will maintin that distance.\nThe range of front sensor is from 0mm-1000mm (0cm-100cm)"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"keep_distance()"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"keep_distance(timeout)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"keep_distance(distance)"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"keep_distance(timeout, distance)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"timeout"),": timeout is an optional paramaeter that is the duration in seconds that the function will run. The default value is 2 ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"distance"),": distance is an optional parameter that is the distance in millimeters the drone will stop and maintin distance in front of an object. The default value is 500"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\n# fly forward until a wall is found. maintin a distance of 600mm (60cm) from an object once detected. run this loop for 10 seconds.\ndrone.keep_distance(10, 600)\ndrone.land()\ndrone.close()\n")))}l.isMDXComponent=!0},499:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return t?o.a.createElement(b,c(c({ref:n},p),{},{components:t})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);