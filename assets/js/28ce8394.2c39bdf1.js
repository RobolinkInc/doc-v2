(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{154:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),c=(n(0),n(511)),a=["components"],l={custom_edit_url:null,id:"02-controller_create_canvas",title:"controller_create_canvas()"},i={unversionedId:"codrone-edu/python/Screen/02-controller_create_canvas",id:"codrone-edu/python/Screen/02-controller_create_canvas",isDocsHomePage:!1,title:"controller_create_canvas()",description:"Description",source:"@site/docs/codrone-edu/python/09-Screen/02-controller_create_canvas.md",sourceDirName:"codrone-edu/python/09-Screen",slug:"/codrone-edu/python/Screen/02-controller_create_canvas",permalink:"/docs/codrone-edu/python/Screen/02-controller_create_canvas",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-controller_create_canvas",title:"controller_create_canvas()"},sidebar:"codroneEduSideBar",previous:{title:"controller_clear_screen()",permalink:"/docs/codrone-edu/python/Screen/01-controller_clear_screen"},next:{title:"controller_draw_arc()",permalink:"/docs/codrone-edu/python/Screen/03-controller_draw_arc"}},u=[],p={toc:u};function d(e){var r=e.components,n=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Creates a new image object for drawing ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"controller_create_canvas()")," ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"Returns a new image object that is 127 x 63 pixels"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\nimage = drone.controller_create_canvas() # see controller_draw_canvas for how to draw on this new image object\ndrone.close()\n\n")))}d.isMDXComponent=!0},511:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=t,f=d["".concat(a,".").concat(b)]||d[b]||s[b]||c;return n?o.a.createElement(f,l(l({ref:r},u),{},{components:n})):o.a.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);