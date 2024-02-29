(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{521:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(643)),l=["components"],c={custom_edit_url:null,id:"changelog",title:"CoDrone EDU Library Changelog"},i={unversionedId:"codrone-edu/blockly/changelog",id:"codrone-edu/blockly/changelog",isDocsHomePage:!1,title:"CoDrone EDU Library Changelog",description:"---",source:"@site/docs/codrone-edu/blockly/changelog.md",sourceDirName:"codrone-edu/blockly",slug:"/codrone-edu/blockly/changelog",permalink:"/docs/codrone-edu/blockly/changelog",editUrl:null,version:"current",frontMatter:{custom_edit_url:null,id:"changelog",title:"CoDrone EDU Library Changelog"}},u=[],b={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h5",{id:"february-26th-2024"},"February 26th, 2024"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone EDU Version 2.1.5")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Disabled battery requests during takeoff"),Object(a.b)("li",{parentName:"ul"},"Implemented an error-logging system so users can report an error from the menu"),Object(a.b)("li",{parentName:"ul"},"Implemented analytics"),Object(a.b)("li",{parentName:"ul"},"Updated firmware notifications to match latest firmware releases"),Object(a.b)("li",{parentName:"ul"},"Updated Korean-language translations")),Object(a.b)("h5",{id:"february-14th-2024"},"February 14th, 2024"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone EDU Version 2.1.4")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Updated drone visuals to match CoDrone EDU (JROTC ed.) when connected"),Object(a.b)("li",{parentName:"ul"},'Temporarily disabled "Screen" category for JROTC ed.'),Object(a.b)("li",{parentName:"ul"},"Improvements to firmware notifications in the connection box")),Object(a.b)("h5",{id:"january-23-2024"},"January 23, 2024"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone EDU Version 2.1.3")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Changed parameters on "flip" functions to match Python function parameters'),Object(a.b)("li",{parentName:"ul"},"Improved trim slider functionality"),Object(a.b)("li",{parentName:"ul"},"Updated pairing window to reflect messaging about AA batteries"),Object(a.b)("li",{parentName:"ul"},"Fixed Senior turn_degree() block"),Object(a.b)("li",{parentName:"ul"},"Fixed Senior get_pressure() block"),Object(a.b)("li",{parentName:"ul"},"Addressed backend errors to improve performance"),Object(a.b)("li",{parentName:"ul"},"Improved functionality of the drone LED feature in the connection window")),Object(a.b)("h5",{id:"december-21-2023"},"December 21, 2023"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone EDU Version 2.1.2")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Added ability to change the drone LED color from the connection window"),Object(a.b)("li",{parentName:"ul"},"Created a new senior block for turn_left() and turn_right() Python functions"),Object(a.b)("li",{parentName:"ul"},"Added a link to the release notes in the Blockly menu"),Object(a.b)("li",{parentName:"ul"},"Corrected the generated RGB values for the Junior controller LED block"),Object(a.b)("li",{parentName:"ul"},"Updated missing blocks for Japanese-language Blockly"),Object(a.b)("li",{parentName:"ul"},"More small changes in Python generated code output and block parameters to reflect Python library")),Object(a.b)("h5",{id:"november-8-2023"},"November 8, 2023"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone EDU Version 2.1.1")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Completed backend refactoring to update Blockly infrastructure. These changes will not affect your user experience, but they will help deliver a smoother update process in the future."),Object(a.b)("li",{parentName:"ul"},"Renamed get_gyro() Senior blocks to get_angular_speed()"),Object(a.b)("li",{parentName:"ul"},"Small changes in the Python generated code output to reflect the latest library")),Object(a.b)("hr",null))}p.isMDXComponent=!0},643:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(r),s=n,m=p["".concat(l,".").concat(s)]||p[s]||d[s]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);