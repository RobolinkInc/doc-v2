(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),a=(r(0),r(323)),c=["components"],i={custom_edit_url:null,title:"arm_off()",menu:"arm_off() / armOff()",tag:"codrone-library",taxonomy:null,category:"LED"},l={unversionedId:"codrone-pro/led/arm-off",id:"codrone-pro/led/arm-off",isDocsHomePage:!1,title:"arm_off()",description:"Description",source:"@site/docs/codrone-pro/07-led/04-arm-off.md",sourceDirName:"codrone-pro/07-led",slug:"/codrone-pro/led/arm-off",permalink:"/doc-v2/docs/codrone-pro/led/arm-off",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,title:"arm_off()",menu:"arm_off() / armOff()",tag:"codrone-library",taxonomy:null,category:"LED"},sidebar:"codroneProSideBar",previous:{title:"arm_default_pattern()",permalink:"/doc-v2/docs/codrone-pro/led/arm-default-pattern"},next:{title:"arm_pattern()",permalink:"/doc-v2/docs/codrone-pro/led/arm-pattern"}},u=[],p={toc:u};function d(e){var n=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function turns off the arm LEDs"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"arm_off()"),Object(a.b)("br",null)),Object(a.b)("p",null,"Arduino:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"armOff()"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    # turn off the arms\n    drone.arm_off()\n    \nif __name__ == '__main__':\n    main()\n\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n//open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.armOff();\n}\n\nvoid loop(){\n    \n}\n\n")))}d.isMDXComponent=!0},323:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=t,m=d["".concat(c,".").concat(b)]||d[b]||f[b]||a;return r?o.a.createElement(m,i(i({ref:n},u),{},{components:r})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);