(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{374:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(437)),c=["components"],a={custom_edit_url:null,id:"20-get_height",title:"get_height()"},u={unversionedId:"codrone-edu/python/Sensors/20-get_height",id:"codrone-edu/python/Sensors/20-get_height",isDocsHomePage:!1,title:"get_height()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/20-get_height.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/20-get_height",permalink:"/docs/codrone-edu/python/Sensors/20-get_height",editUrl:null,version:"current",sidebarPosition:20,frontMatter:{custom_edit_url:null,id:"20-get_height",title:"get_height()"},sidebar:"codroneEduSideBar",previous:{title:"get_z_angle()",permalink:"/docs/codrone-edu/python/Sensors/19-get_z_angle"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a getter function which returns the current ",Object(i.b)("strong",{parentName:"p"},"height")," of the drone. The default unit of measurement is centimeters. ",Object(i.b)("br",null),"\nThis function uses the bottom range sensor to measure distance from the drone to the surface below the drone. ",Object(i.b)("br",null)),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get_height()"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},'get_height(unit="<cm, in, mm, m>)"'),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"unit"),': The unit of measurement that is chosen for the height distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.'),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"The current height calculated by the bottom range sensor (cm default)."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.hover(3)\nheight = drone.get_height()\nprint(height)\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},437:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(h,a(a({ref:t},s),{},{components:n})):o.a.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);