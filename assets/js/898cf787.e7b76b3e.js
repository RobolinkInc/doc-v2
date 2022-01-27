(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(312)),a=["components"],c={custom_edit_url:null,title:"turn()",menu:"turn()",taxonomy:null,category:"flight-command-movement"},u={unversionedId:"codrone-pro/flight-commands-movement/turn",id:"codrone-pro/flight-commands-movement/turn",isDocsHomePage:!1,title:"turn()",description:"Description",source:"@site/docs/codrone-pro/05-flight-commands-movement/07-turn.md",sourceDirName:"codrone-pro/05-flight-commands-movement",slug:"/codrone-pro/flight-commands-movement/turn",permalink:"/doc-v2/docs/codrone-pro/flight-commands-movement/turn",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,title:"turn()",menu:"turn()",taxonomy:null,category:"flight-command-movement"},sidebar:"codroneProSideBar",previous:{title:"turn_degree()",permalink:"/doc-v2/docs/codrone-pro/flight-commands-movement/turn-degree"},next:{title:"get_pitch()",permalink:"/doc-v2/docs/codrone-pro/flight-variables/get-pitch"}},l=[],d={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"A function that represents yaw, but with more natural language. It simply turns in the given direction, duration and power."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"turn(direction)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"turn(direction, duration)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"turn(direction, duration, power)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"direction"),"\t: a constant in Arduino and enum in Python. It\u2019s the direction of the turn, which can be one of the following: LEFT or RIGHT.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"duration"),"\t: the duration of the turn in seconds. If 0, it will turn right indefinitely. Defaults to 1 second if not defined.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"power"),"\t\t: the power at which the drone turns right. Takes a value from 0 to 100. Defaults to 50 if not defined."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\nfrom CoDrone import Direction\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n    drone.takeoff()\n    \n    drone.turn(Direction.LEFT)          # Turn left for 1 second at -50 power\n    drone.turn(Direction.LEFT, 0)       # Turn left at -50 power indefinitely\n    drone.turn(Direction.RIGHT, 3, 100) # Turn right for 3 seconds at 100 power\n    \nif __name__ == '__main__':\n    main()\n\n\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.turn(LEFT);             // Turn left for 1 second at 50 power\n    CoDrone.turn(LEFT, 0);          // Turn left at 50 power indefinitely\n    CoDrone.turn(RIGHT, 5, 100);    // Turn right for 5 seconds at 100 power    \n}\n\nvoid loop(){\n\n}\n")))}p.isMDXComponent=!0},312:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(t),s=r,f=p["".concat(a,".").concat(s)]||p[s]||m[s]||i;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);