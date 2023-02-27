(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{320:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(614)),c=["components"],i={custom_edit_url:null,title:"capture()",taxonomy:{category:["camera"],tag:["zumi-library"]},menu:"capture()"},u={unversionedId:"zumi/python/Camera/capture",id:"zumi/python/Camera/capture",isDocsHomePage:!1,title:"capture()",description:"Description",source:"@site/docs/zumi/python/05-Camera/01-capture.md",sourceDirName:"zumi/python/05-Camera",slug:"/zumi/python/Camera/capture",permalink:"/docs/zumi/python/Camera/capture",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"capture()",taxonomy:{category:["camera"],tag:["zumi-library"]},menu:"capture()"},sidebar:"someSidebar",previous:{title:"signal_right_on()",permalink:"/docs/zumi/python/LEDs-and-buzzer/signal-right-on"},next:{title:"close()",permalink:"/docs/zumi/python/Camera/close"}},p=[],m={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Takes a picture using the PiCamera and saves it in an array. "),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"capture()")),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Numpy array representing captured image")," ","\xa0","\xa0",Object(o.b)("em",{parentName:"p"},"(type: ndarray)")),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\n\nfrom zumi.util.camera import Camera\nimport time\n\ncamera=Camera()\ncamera.start_camera()\n\nframe = camera.capture()\ncamera.show_image(frame)\ntime.sleep(5)   \ncamera.close()\n")))}l.isMDXComponent=!0},614:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=m(r),b=n,y=l["".concat(c,".").concat(b)]||l[b]||s[b]||o;return r?a.a.createElement(y,i(i({ref:t},p),{},{components:r})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);