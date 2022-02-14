(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{317:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(317)),i=["components"],c={custom_edit_url:null,title:"set_yaw()",menu:"set_yaw() / setYaw()",taxonomy:null,category:"flight-variables"},l={unversionedId:"codrone-pro/flight-variables/set-yaw",id:"codrone-pro/flight-variables/set-yaw",isDocsHomePage:!1,title:"set_yaw()",description:"Description",source:"@site/docs/codrone-pro/06-flight-variables/09-set-yaw.md",sourceDirName:"codrone-pro/06-flight-variables",slug:"/codrone-pro/flight-variables/set-yaw",permalink:"/doc-v2/docs/codrone-pro/flight-variables/set-yaw",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{custom_edit_url:null,title:"set_yaw()",menu:"set_yaw() / setYaw()",taxonomy:null,category:"flight-variables"},sidebar:"codroneProSideBar",previous:{title:"set_throttle()",permalink:"/doc-v2/docs/codrone-pro/flight-variables/set-throttle"},next:{title:"arm_color()",permalink:"/doc-v2/docs/codrone-pro/led/arm-color"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a setter function that allows you to set the yaw variable."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"set_yaw(power)"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"setYaw(power)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the yaw variable.  The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right."),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"Boolean"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    drone.takeoff()\n    \n    # Drone turns right for 1 second with 50 power\n    drone.set_yaw(50)\n    drone.move(1)\n    \nif __name__ == '__main__':\n    main()\n\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.setYaw(60);     // set yaw power for 60%\n    CoDrone.move(5);        // move drone for 5 seconds\n}\n\nvoid loop(){\n    \n}\n    \n")))}u.isMDXComponent=!0}}]);