(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),c=(r(0),r(614)),a=["components"],i={custom_edit_url:null,title:"eye_strobe()",menu:"eye_strobe() / eyeStrobe()",tag:"codrone-library",taxonomy:null,category:"LED"},l={unversionedId:"codrone-pro/python/led/eye-strobe",id:"codrone-pro/python/led/eye-strobe",isDocsHomePage:!1,title:"eye_strobe()",description:"Description",source:"@site/docs/codrone-pro/python/07-led/12-eye-strobe.md",sourceDirName:"codrone-pro/python/07-led",slug:"/codrone-pro/python/led/eye-strobe",permalink:"/docs/codrone-pro/python/led/eye-strobe",editUrl:null,version:"current",sidebarPosition:12,frontMatter:{custom_edit_url:null,title:"eye_strobe()",menu:"eye_strobe() / eyeStrobe()",tag:"codrone-library",taxonomy:null,category:"LED"},sidebar:"codroneProSideBar",previous:{title:"eye_pattern()",permalink:"/docs/codrone-pro/python/led/eye-pattern"},next:{title:"reset_default_led()",permalink:"/docs/codrone-pro/python/led/reset-default-led"}},p=[],b={toc:p};function u(e){var n=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function makes the arms to strobe in various colors"),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"Python:",Object(c.b)("br",null),"\n",Object(c.b)("inlineCode",{parentName:"p"},"eye_strobe()"),Object(c.b)("br",null)),Object(c.b)("p",null,"Arduino:",Object(c.b)("br",null),"\n",Object(c.b)("inlineCode",{parentName:"p"},"eyeStrobe()"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# strobe the eyes\ndrone.eye_strobe()\ndrone.close()\n")),Object(c.b)("h6",{id:"arduino"},"Arduino"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n//open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    // strobe the eyes\n    CoDrone.eyeStrobe();\n}\n\nvoid loop(){\n\n}\n")))}u.isMDXComponent=!0},614:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=b(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),s=t,y=u["".concat(a,".").concat(s)]||u[s]||d[s]||c;return r?o.a.createElement(y,i(i({ref:n},p),{},{components:r})):o.a.createElement(y,i({ref:n},p))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);