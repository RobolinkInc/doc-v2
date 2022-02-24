(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{323:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),c=(t(0),t(339)),a=["components"],i={custom_edit_url:null,title:"emergency_stop()",menu:"emergency_stop() / emergencyStop()",taxonomy:null,category:"flight-command-startstop"},p={unversionedId:"codrone-pro/flight-commands-start-stop/emergency-stop",id:"codrone-pro/flight-commands-start-stop/emergency-stop",isDocsHomePage:!1,title:"emergency_stop()",description:"Description",source:"@site/docs/codrone-pro/04-flight-commands-start-stop/01-emergency-stop.md",sourceDirName:"codrone-pro/04-flight-commands-start-stop",slug:"/codrone-pro/flight-commands-start-stop/emergency-stop",permalink:"/doc-v2/docs/codrone-pro/flight-commands-start-stop/emergency-stop",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"emergency_stop()",menu:"emergency_stop() / emergencyStop()",taxonomy:null,category:"flight-command-startstop"},sidebar:"codroneProSideBar",previous:{title:"pair()",permalink:"/doc-v2/docs/codrone-pro/connection/pair"},next:{title:"land()",permalink:"/doc-v2/docs/codrone-pro/flight-commands-start-stop/land"}},l=[],s={toc:l};function d(e){var n=e.components,t=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function immediately stops all commands and stops all motors, so the drone will stop flying immediately. ",Object(c.b)("br",null),"\nThe function will also zero-out all of the flight motion variables to 0."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"Python: ",Object(c.b)("inlineCode",{parentName:"p"},"emergency_stop()"),"\nArduino: ",Object(c.b)("inlineCode",{parentName:"p"},"emergencyStop()")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\ndrone.emergency_stop()\ndrone.close()\n")),Object(c.b)("h6",{id:"arduino"},"Arduino"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();      // take off and hover for 3 second\n    CoDrone.emergencyStop();    // emergency stop   \n}\n\nvoid loop(){\n\n}\n")))}d.isMDXComponent=!0},339:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||c;return t?o.a.createElement(b,i(i({ref:n},l),{},{components:t})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);