(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{292:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return d})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(323)),i=["components"],c={custom_edit_url:null,title:"get_drone_temp()",taxonomy:{category:["sensors"],tag:["codrone-library"]},menu:"get_drone_temp() / getDroneTemp()"},p={unversionedId:"codrone-pro/sensors/get-drone-temp",id:"codrone-pro/sensors/get-drone-temp",isDocsHomePage:!1,title:"get_drone_temp()",description:"Description",source:"@site/docs/codrone-pro/09-sensors/05-get-drone-temp.md",sourceDirName:"codrone-pro/09-sensors",slug:"/codrone-pro/sensors/get-drone-temp",permalink:"/doc-v2/docs/codrone-pro/sensors/get-drone-temp",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"get_drone_temp()",taxonomy:{category:["sensors"],tag:["codrone-library"]},menu:"get_drone_temp() / getDroneTemp()"},sidebar:"codroneProSideBar",previous:{title:"get_battery_voltage()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-battery-voltage"},next:{title:"get_gyro_angles()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-gyro-angles"}},d=[],s={toc:d};function l(e){var n=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a getter function gets the data from the drone\u2019s temperature sensor.",Object(a.b)("br",null),"Importantly, it reads the drone\u2019s temperature, not the air around it."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"get_drone_temp()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"getDroneTemp()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"The temperature in celsius as an integer."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    ## print the temperature of drone\n    temperature = drone.get_drone_temp()\n    print(temperature)\n    \nif __name__ == '__main__':\n    main()\n\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);      \n}\n\nvoid loop(){\n    int temperature;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    temperature = CoDrone.getDroneTemp();                   //save request data\n    delay(100);\n        \n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("temperature : \\t");\n    Serial.println(temperature);    \n}\n\n')))}l.isMDXComponent=!0},323:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=t,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return r?o.a.createElement(b,c(c({ref:n},d),{},{components:r})):o.a.createElement(b,c({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);