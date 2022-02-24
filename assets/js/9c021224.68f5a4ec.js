(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{222:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(339)),c=["components"],i={custom_edit_url:null,title:"get_angular_speed()",taxonomy:{category:["sensors"],tag:["codrone-library"]},menu:"get_angular_speed() / getAngularSpeed()"},l={unversionedId:"codrone-pro/sensors/get-angular-speed",id:"codrone-pro/sensors/get-angular-speed",isDocsHomePage:!1,title:"get_angular_speed()",description:"Description",source:"@site/docs/codrone-pro/09-sensors/02-get-angular-speed.md",sourceDirName:"codrone-pro/09-sensors",slug:"/codrone-pro/sensors/get-angular-speed",permalink:"/doc-v2/docs/codrone-pro/sensors/get-angular-speed",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"get_angular_speed()",taxonomy:{category:["sensors"],tag:["codrone-library"]},menu:"get_angular_speed() / getAngularSpeed()"},sidebar:"codroneProSideBar",previous:{title:"get_accelerometer()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-accelerometer"},next:{title:"get_battery_percentage()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-battery-percentage"}},p=[],d={toc:p};function s(e){var n=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function gets the data from the gyrometer sensor for the roll, pitch, and yaw angular speed."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"get_angular_speed()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"getAngularSpeed()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"Output to visual UI. In code, it returns a class in Python and struct in Arduino."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# print the angular speed of drone\ngyrodata = drone.get_angular_speed()\nprint(gyrodata.ROLL, gyrodata.PITCH, gyrodata.YAW)\ndrone.close()\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);  \n}\n\nvoid loop(){\n    // Struct for get Angular speed(gyro) data\n    gyrodata gyro;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    gyro = CoDrone.getAngularSpeed();                       //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("gyro roll : \\t");\n    Serial.println(gyro.roll);\n    Serial.print("gyro pitch : \\t");\n    Serial.println(gyro.pitch);\n    Serial.print("gyro yaw : \\t");\n    Serial.println(gyro.yaw);   \n}\n')))}s.isMDXComponent=!0},339:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),g=t,b=s["".concat(c,".").concat(g)]||s[g]||u[g]||a;return r?o.a.createElement(b,i(i({ref:n},p),{},{components:r})):o.a.createElement(b,i({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);