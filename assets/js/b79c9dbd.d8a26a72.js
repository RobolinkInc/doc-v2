(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{384:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(499)),c=["components"],i={custom_edit_url:null,id:"25-go",title:"go()"},l={unversionedId:"codrone-edu/python/Flight-Commands-Movement/25-go",id:"codrone-edu/python/Flight-Commands-Movement/25-go",isDocsHomePage:!1,title:"go()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/25-go.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/25-go",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/25-go",editUrl:null,version:"current",sidebarPosition:25,frontMatter:{custom_edit_url:null,id:"25-go",title:"go()"},sidebar:"codroneEduSideBar",previous:{title:"set_waypoint()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/24-set_waypoint"},next:{title:"controller_LED_off()",permalink:"/docs/codrone-edu/python/LED/01-controller_LED_off"}},p=[],u={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Sends roll, pitch, yaw, throttle values continuously to the drone for duration (seconds)"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"go(roll, pitch, yaw, throttle, duration)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"roll"),": roll power. int from -100-100 ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"pitch"),": pitch power. int from -100-100 ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"yaw"),": yaw power. int from -100-100 ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"throttle"),": throttle power. int from -100-100 ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"duration"),": Duration of the movement in seconds ",Object(a.b)("br",null)),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.go(50, 50, 0, 0, 5) # Drone flies diagonally forward and right for 5 seconds\ndrone.land()\ndrone.close()\n")))}d.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);