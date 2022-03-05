(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{201:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),i=(t(0),t(377)),a=["components"],p={custom_edit_url:null,title:"get_opt_flow_position()",menu:"get_opt_flow_position() / getOptFlowPosition()",taxonomy:null,category:"sensors"},c={unversionedId:"codrone-pro/python/sensors/get-opt-flow-position",id:"codrone-pro/python/sensors/get-opt-flow-position",isDocsHomePage:!1,title:"get_opt_flow_position()",description:"Description",source:"@site/docs/codrone-pro/python/09-sensors/08-get-opt-flow-position.md",sourceDirName:"codrone-pro/python/09-sensors",slug:"/codrone-pro/python/sensors/get-opt-flow-position",permalink:"/doc-v2/docs/codrone-pro/python/sensors/get-opt-flow-position",editUrl:null,version:"current",sidebarPosition:8,frontMatter:{custom_edit_url:null,title:"get_opt_flow_position()",menu:"get_opt_flow_position() / getOptFlowPosition()",taxonomy:null,category:"sensors"},sidebar:"codroneProSideBar",previous:{title:"get_height()",permalink:"/doc-v2/docs/codrone-pro/python/sensors/get-height"},next:{title:"get_pressure()",permalink:"/doc-v2/docs/codrone-pro/python/sensors/get-pressure"}},s=[],l={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function gets the x and y coordinates from the optical flow sensor.",Object(i.b)("br",null),"Keep in mind, the positioning does not take rotation into account."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"get_opt_flow_position()"),Object(i.b)("br",null),"\nArduino: ",Object(i.b)("inlineCode",{parentName:"p"},"getOptFlowPosition()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"Outputs to visual UI. In code, it returns a class in Python and struct in Arduino."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# print the optical flow position x,y value\nposition = drone.get_opt_flow_position()\nprint(position.X, position.Y)\ndrone.close()\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);  \n}\n\nvoid loop(){\n    // Struct for get optical flow sensor data\n    optdata opt;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    opt = CoDrone.getOptFlowPosition();                     //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("opt x : \\t");\n    Serial.println(opt.x);\n    Serial.print("opt y : \\t");\n    Serial.println(opt.y);  \n}\n')))}u.isMDXComponent=!0},377:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=o,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return t?r.a.createElement(f,p(p({ref:n},s),{},{components:t})):r.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);