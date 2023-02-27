(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{538:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(617)),a=["components"],c={custom_edit_url:null,title:"pair()",taxonomy:{category:["connection"],tag:["codrone-library"]},menu:"pair()"},p={unversionedId:"codrone-pro/python/connection/pair",id:"codrone-pro/python/connection/pair",isDocsHomePage:!1,title:"pair()",description:"Description",source:"@site/docs/codrone-pro/python/03-connection/02-pair.md",sourceDirName:"codrone-pro/python/03-connection",slug:"/codrone-pro/python/connection/pair",permalink:"/docs/codrone-pro/python/connection/pair",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"pair()",taxonomy:{category:["connection"],tag:["codrone-library"]},menu:"pair()"},sidebar:"codroneProSideBar",previous:{title:"disconnect()",permalink:"/docs/codrone-pro/python/connection/disconnect"},next:{title:"emergency_stop()",permalink:"/docs/codrone-pro/python/flight-commands-start-stop/emergency-stop"}},s=[],d={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function pairs the BLE board to the CoDrone.  After establishing a connection, it always waits for 3 seconds before executing the next command. Pair works a bit differently between Arduino and Python.  With the Arduino-based remote, ",Object(i.b)("inlineCode",{parentName:"p"},"pair()"),' with no parameters will pair with the last paired CoDrone. If it\'s your first time using the remote, it will just find the nearest CoDrone it can find, then "lock in" with that CoDrone and always pair with it.  With Python, ',Object(i.b)("inlineCode",{parentName:"p"},"pair()"),' with no parameters will pair with the last paired CoDrone, which is saved in a file called "PairInfo." If it\'s your first time running ',Object(i.b)("inlineCode",{parentName:"p"},"pair()"),', it will just find the nearest CoDrone it can find, then "lock in" with that CoDrone, save it to "PairInfo" and always pair with it until you run ',Object(i.b)("inlineCode",{parentName:"p"},"pair(drone.Nearest)"),"."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pair()"),Object(i.b)("br",null),"\nArduino: ",Object(i.b)("inlineCode",{parentName:"p"},"pair(Nearest)"),", Python: ",Object(i.b)("inlineCode",{parentName:"p"},"pair(drone.Nearest)"),Object(i.b)("br",null),"\nArduino: ",Object(i.b)("inlineCode",{parentName:"p"},"pair(bluetoothAddress)"),", Python: ",Object(i.b)("inlineCode",{parentName:"p"},"pair(fourDigitAddress)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Nearest:")," If you specify ",Object(i.b)("inlineCode",{parentName:"p"},"Nearest")," in Arduino or ",Object(i.b)("inlineCode",{parentName:"p"},"drone.Nearest"),' in Python, it will pair with the first drone it finds (which may not always be the nearest CoDrone, in some cases, just the first CoDrone it finds). This function can be used to "unlock" the drone from only pairing with the CoDrone it\'s been "locked in" with. Once you\'ve paired with a nearest CoDrrone, you can run ',Object(i.b)("inlineCode",{parentName:"p"},"pair()"),' again with no parameters, and it will only pair with the "locked in" CoDrone.',Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"address:")," This is the address of the CoDrone. In Arduino, this is a 6-index array of bytes representing the Bluetooth address.  In Python, this is the 4-digit number that identifies the CoDrone."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n# drone.pair(\u201c5349\u201d)\n# drone.pair(drone.Nearest)\n\n# you can set specific port name for pairing especially Windows need/require this \n# drone.pair(port_name = 'COM3')\n# drone.pair('1234', 'COM3')\n# drone.pair(drone.Nearest, 'COM3')\n\ndrone.takeoff()\ndrone.hover(3)\ndrone.land()\ndrone.close()\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n  //below this have to code in setup\n  CoDrone.begin(115200);\n\n  //IMPORATNT: You would only run ONE of the 3 options below\n\n  /* 1) This will pair with the last drone that the remote was paired to. If this is the first time pairing, \n   *    this function will pair with whatever first drone it finds, and "lock in" to that drone and only pair with \n   *    that drone\n   */\n  CoDrone.pair();\n\n   /* 2) This will pair with the nearest drone that the BLE board finds. You can use this function to "unlock" a \n   *    remote that\'s been "locked in" to a drone. So first run this code, then just upload and run with "CoDrone.pair()" *    to "lock in" to that drone\n   */\n  CoDrone.pair(Nearest);\n\n}\n\nvoid loop(){\n\n}\n\n')))}l.isMDXComponent=!0},617:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=r,h=l["".concat(a,".").concat(b)]||l[b]||u[b]||i;return t?o.a.createElement(h,c(c({ref:n},s),{},{components:t})):o.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);