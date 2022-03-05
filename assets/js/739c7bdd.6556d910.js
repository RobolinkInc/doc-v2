(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{213:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return c})),o.d(n,"metadata",(function(){return d})),o.d(n,"toc",(function(){return l})),o.d(n,"default",(function(){return u}));var t=o(3),r=o(7),i=(o(0),o(377)),a=["components"],c={custom_edit_url:null,title:"go()",menu:"go()",taxonomy:null,category:"flight-command-movement"},d={unversionedId:"codrone-pro/python/flight-commands-movement/go",id:"codrone-pro/python/flight-commands-movement/go",isDocsHomePage:!1,title:"go()",description:"Description",source:"@site/docs/codrone-pro/python/05-flight-commands-movement/03-go.md",sourceDirName:"codrone-pro/python/05-flight-commands-movement",slug:"/codrone-pro/python/flight-commands-movement/go",permalink:"/doc-v2/docs/codrone-pro/python/flight-commands-movement/go",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,title:"go()",menu:"go()",taxonomy:null,category:"flight-command-movement"},sidebar:"codroneProSideBar",previous:{title:"go_to_height()",permalink:"/doc-v2/docs/codrone-pro/python/flight-commands-movement/go-to-height"},next:{title:"hover()",permalink:"/doc-v2/docs/codrone-pro/python/flight-commands-movement/hover"}},l=[],p={toc:l};function u(e){var n=e.components,o=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"A simpler Junior level function that represents positive flight with a direction, but with more natural language. ",Object(i.b)("br",null),"\nIt simply flies in the given direction for the given duration and power."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"go(direction)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"go(direction, duration)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"go(direction, duration, power)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"direction"),":\ta constant in Arduino and enum in Python. It\u2019s the direction of the flight, which can be one of the following: FORWARD, BACKWARD, LEFT, RIGHT, UP, and DOWN.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"duration"),":\tthe duration of the flight motion in seconds. If undefined, defaults to 1 seconds. If duration is 0, it will turn right indefinitely.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"power"),":\t\tthe power at which the drone flies forward. Takes a value from 0 to 100. Defaults to 50 if not defined."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\nfrom CoDrone import Direction\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\ndrone.go(Direction.FORWARD)         # Go forward for 1 second at 50% power\ndrone.go(Direction.UP, 5)           # Go up for 5 seconds at 50% power\ndrone.go(Direction.BACKWARD, 3, 70) # Go backwards for 3 seconds at 70% power\ndrone.land()\ndrone.close()\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.go(FORWARD);        // Go forward at 50% power for 1 second\n    CoDrone.go(UP, 5);          // Go up for 5 seconds at 50% power\n    CoDrone.go(BACKWARD, 3, 70) // Go backwards for 3 seconds at 70% power  \n}\n\nvoid loop(){\n\n}\n")))}u.isMDXComponent=!0},377:function(e,n,o){"use strict";o.d(n,"a",(function(){return u})),o.d(n,"b",(function(){return b}));var t=o(0),r=o.n(t);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function d(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(o),m=t,b=u["".concat(a,".").concat(m)]||u[m]||s[m]||i;return o?r.a.createElement(b,c(c({ref:n},l),{},{components:o})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);