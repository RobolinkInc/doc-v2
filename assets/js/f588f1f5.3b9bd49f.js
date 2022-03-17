(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(413)),i=["components"],a={custom_edit_url:null,id:"06-get_flow_y",title:"get_flow_y()"},l={unversionedId:"codrone-edu/python/Sensors/06-get_flow_y",id:"codrone-edu/python/Sensors/06-get_flow_y",isDocsHomePage:!1,title:"get_flow_y()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/06-get_flow_y.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/06-get_flow_y",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/06-get_flow_y",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,id:"06-get_flow_y",title:"get_flow_y()"},sidebar:"codroneEduSideBar",previous:{title:"get_flow_x()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/05-get_flow_x"},next:{title:"get_front_range()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/07-get_front_range"}},u=[],p={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This getter function gets the relative position value calculated by the optical flow sensor from the y direction (left and right). ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"get_flow_y()"),Object(c.b)("br",null),"\n",Object(c.b)("inlineCode",{parentName:"p"},'get_flow_y(unit="<cm, in, mm, m>)"'),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"unit"),': The unit of measurement that is chosen for the distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.'),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"The relative position value calculated by the optical flow sensor from the x direction. (cm default)."),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.set_roll(50)\ndrone.move(1)\nprint(drone.get_flow_y())\ndrone.land()\ndrone.close()\n\n")))}s.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||c;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);