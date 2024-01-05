(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{593:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),i=(t(0),t(643)),s=["components"],a={custom_edit_url:null,id:"29-height_from_pressure",title:"height_from_pressure()"},c={unversionedId:"codrone-edu/python/Sensors/29-height_from_pressure",id:"codrone-edu/python/Sensors/29-height_from_pressure",isDocsHomePage:!1,title:"height_from_pressure()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/29-height_from_pressure.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/29-height_from_pressure",permalink:"/docs/codrone-edu/python/Sensors/29-height_from_pressure",editUrl:null,version:"current",sidebarPosition:29,frontMatter:{custom_edit_url:null,id:"29-height_from_pressure",title:"height_from_pressure()"},sidebar:"codroneEduSideBar",previous:{title:"append_color_data()",permalink:"/docs/codrone-edu/python/Sensors/28-append_color_data"},next:{title:"set_initial_pressure()",permalink:"/docs/codrone-edu/python/Sensors/30-set_initial_pressure"}},p=[],u={toc:p};function l(e){var r=e.components,t=Object(o.a)(e,s);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function gets the drone's current height in centimeters based on the initial pressure sensor reading. You must call set_initial_pressure() to establish a reference point."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"height_from_pressure()"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"height_from_pressure(b, m)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"b"),": slope intercept in pascals (default is set to 0) ",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"m"),": slope in centimeters/pascals (default is set to 9.34)"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"Estimated height in centimeters relative to starting position."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.set_initial_pressure() # Take an initial pressure reading as a reference \n\nfor i in range(300):\n    print(drone.height_from_pressure(), " centimeters")\n    time.sleep(0.2)\n')))}l.isMDXComponent=!0},643:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return t?o.a.createElement(b,a(a({ref:r},p),{},{components:t})):o.a.createElement(b,a({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);