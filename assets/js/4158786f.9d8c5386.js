(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(502)),a=["components"],c={custom_edit_url:null,title:"get_trim()",menu:"get_trim() / getTrim()",taxonomy:null,category:"sensors"},l={unversionedId:"codrone-pro/python/sensors/get-trim",id:"codrone-pro/python/sensors/get-trim",isDocsHomePage:!1,title:"get_trim()",description:"Description",source:"@site/docs/codrone-pro/python/09-sensors/11-get-trim.md",sourceDirName:"codrone-pro/python/09-sensors",slug:"/codrone-pro/python/sensors/get-trim",permalink:"/docs/codrone-pro/python/sensors/get-trim",editUrl:null,version:"current",sidebarPosition:11,frontMatter:{custom_edit_url:null,title:"get_trim()",menu:"get_trim() / getTrim()",taxonomy:null,category:"sensors"},sidebar:"codroneProSideBar",previous:{title:"get_state()",permalink:"/docs/codrone-pro/python/sensors/get-state"},next:{title:"set_plot_sensor()/draw_plot_sensor()",permalink:"/docs/codrone-pro/python/sensors/set-plot-sensor"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function gets the current trim values of the drone."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"get_trim()"),Object(i.b)("br",null),"\nArduino: ",Object(i.b)("inlineCode",{parentName:"p"},"getTrim()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"Outputs to visual UI. In code, it returns a class in Python and struct in Arduino."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n#print current drone's trim value\ntrim = drone.get_trim()\nprint(trim.ROLL, trim.PITCH, trim.YAW, trim.THROTTLE)\ndrone.close()\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);  \n}\n\nvoid loop(){\n    // Struct for get trim data\n    trimdata trim;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    trim = CoDrone.getTrim();                               //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("trim roll : \\t");\n    Serial.println(trim.roll);\n    Serial.print("trim pitch : \\t");\n    Serial.println(trim.pitch);\n    Serial.print("trim yaw : \\t");\n    Serial.println(trim.yaw);\n    Serial.print("trim throttle : \\t");\n    Serial.println(trim.throttle);  \n}\n')))}u.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);