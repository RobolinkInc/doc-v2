(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),c=(t(0),t(413)),a=["components"],i={custom_edit_url:null,title:"get_z_angle()",taxonomy:{tag:"CDE-library",category:"sensors"},menu:"get_z_angle()"},l={unversionedId:"codrone-edu/python/Sensors/get_z_angle",id:"codrone-edu/python/Sensors/get_z_angle",isDocsHomePage:!1,title:"get_z_angle()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/get_z_angle.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/get_z_angle",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/get_z_angle",editUrl:null,version:"current",frontMatter:{custom_edit_url:null,title:"get_z_angle()",taxonomy:{tag:"CDE-library",category:"sensors"},menu:"get_z_angle()"},sidebar:"codroneEduSideBar",previous:{title:"get_z_accel()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/get_z_accel"}},u=[],p={toc:u};function s(e){var n=e.components,t=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,'This is a getter function which returns the current Z angle from the drone. This is angle is the "yaw" direction ',Object(c.b)("br",null)),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"get_z_angle()")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"The current angle in regards to the Z direction."),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\nprint(drone.get_z_angle())\n\ndrone.close()\n")))}s.isMDXComponent=!0},413:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,g=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return t?o.a.createElement(g,i(i({ref:n},u),{},{components:t})):o.a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);