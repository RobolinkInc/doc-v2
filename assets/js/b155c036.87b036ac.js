(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{369:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return p})),o.d(n,"toc",(function(){return d})),o.d(n,"default",(function(){return u}));var t=o(3),r=o(7),c=(o(0),o(497)),i=["components"],a={custom_edit_url:null,title:"disconnect()",menu:"disconnect()",taxonomy:null,category:"connection"},p={unversionedId:"codrone-pro/python/connection/disconnect",id:"codrone-pro/python/connection/disconnect",isDocsHomePage:!1,title:"disconnect()",description:"Description",source:"@site/docs/codrone-pro/python/03-connection/01-disconnect.md",sourceDirName:"codrone-pro/python/03-connection",slug:"/codrone-pro/python/connection/disconnect",permalink:"/docs/codrone-pro/python/connection/disconnect",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"disconnect()",menu:"disconnect()",taxonomy:null,category:"connection"},sidebar:"codroneProSideBar",previous:{title:"CoDrone Pro Library Reference",permalink:"/docs/codrone-pro/blockly/reference_senior"},next:{title:"pair()",permalink:"/docs/codrone-pro/python/connection/pair"}},d=[],l={toc:d};function u(e){var n=e.components,o=Object(r.a)(e,i);return Object(c.b)("wrapper",Object(t.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function disconnects with the drone that you're connected to."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"disconnect()")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.hover(1)\ndrone.land()\ndrone.disconnect()\ndrone.close()\n")),Object(c.b)("h6",{id:"arduino"},"Arduino"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //below this have to code in setup\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.hover(3);\n    CoDrone.land();\n    CoDrone.disconnect();   // disconnects  \n}\n\nvoid loop(){\n    \n}\n")))}u.isMDXComponent=!0},497:function(e,n,o){"use strict";o.d(n,"a",(function(){return u})),o.d(n,"b",(function(){return f}));var t=o(0),r=o.n(t);function c(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){c(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},u=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(o),b=t,f=u["".concat(i,".").concat(b)]||u[b]||s[b]||c;return o?r.a.createElement(f,a(a({ref:n},d),{},{components:o})):r.a.createElement(f,a({ref:n},d))}));function f(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=o.length,i=new Array(c);i[0]=b;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var d=2;d<c;d++)i[d]=o[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);