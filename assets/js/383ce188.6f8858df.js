(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{210:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),c=(t(0),t(641)),a=["components"],i={custom_edit_url:null,id:"26-get_colors",title:"get_colors()"},l={unversionedId:"codrone-edu/python/Sensors/26-get_colors",id:"codrone-edu/python/Sensors/26-get_colors",isDocsHomePage:!1,title:"get_colors()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/26-get_colors.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/26-get_colors",permalink:"/docs/codrone-edu/python/Sensors/26-get_colors",editUrl:null,version:"current",sidebarPosition:26,frontMatter:{custom_edit_url:null,id:"26-get_colors",title:"get_colors()"},sidebar:"codroneEduSideBar",previous:{title:"predict_colors()",permalink:"/docs/codrone-edu/python/Sensors/25-predict_colors"},next:{title:"new_color_data()",permalink:"/docs/codrone-edu/python/Sensors/27-new_color_data"}},s=[],u={toc:s};function p(e){var r=e.components,t=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"get_colors() is a getter function that returns one of the 8 pre-calibrated colors (provided in the color cards). "),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"get_colors()"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"A list containing the front and back color sensor predictions as strings (Red, Green, Yellow, Blue, Cyan, Magenta, Black, White, Unknown)"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ncolors = drone.get_colors()\nprint(colors)\ndrone.close\n")))}p.isMDXComponent=!0},641:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return t?o.a.createElement(f,i(i({ref:r},s),{},{components:t})):o.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);