(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{213:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),c=(r(0),r(497)),a=["components"],l={custom_edit_url:null,id:"08-controller_draw_line",title:"controller_draw_line()"},i={unversionedId:"codrone-edu/python/Screen/08-controller_draw_line",id:"codrone-edu/python/Screen/08-controller_draw_line",isDocsHomePage:!1,title:"controller_draw_line()",description:"Description",source:"@site/docs/codrone-edu/python/09-Screen/08-controller_draw_line.md",sourceDirName:"codrone-edu/python/09-Screen",slug:"/codrone-edu/python/Screen/08-controller_draw_line",permalink:"/docs/codrone-edu/python/Screen/08-controller_draw_line",editUrl:null,version:"current",sidebarPosition:8,frontMatter:{custom_edit_url:null,id:"08-controller_draw_line",title:"controller_draw_line()"},sidebar:"codroneEduSideBar",previous:{title:"controller_draw_image()",permalink:"/docs/codrone-edu/python/Screen/07-controller_draw_image"},next:{title:"controller_draw_point()",permalink:"/docs/codrone-edu/python/Screen/09-controller_draw_point"}},p=[],d={toc:p};function u(e){var n=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    (x1,y1) \\\n             \\\n              \\\n               \\ (x2,y2)\n    draws a line between points (x1, y1) and (x2, y2)\n")),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"controller_draw_line(x1, y1, x2, y2, pixel, line_type)")," ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"x1"),": point 1 x coordinate\n",Object(c.b)("strong",{parentName:"p"},"y1"),": point 1 y coordinate\n",Object(c.b)("strong",{parentName:"p"},"x2"),": point 2 x coordinate\n",Object(c.b)("strong",{parentName:"p"},"y2"),": point 2 y coordinate\n",Object(c.b)("strong",{parentName:"p"},"pixel"),": optional parameter that changes the pixel color of the line. default value is Black\n",Object(c.b)("strong",{parentName:"p"},"line_type"),": optional parameter that is the type of line drawn. default is Solid"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.controller_clear_screen() # clear screen for drawing\n\ndrone.controller_draw_line(0,0, 60, 60)\n\ndrone.close()\n\n")))}u.isMDXComponent=!0},497:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=t,y=u["".concat(a,".").concat(b)]||u[b]||s[b]||c;return r?o.a.createElement(y,l(l({ref:n},p),{},{components:r})):o.a.createElement(y,l({ref:n},p))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);