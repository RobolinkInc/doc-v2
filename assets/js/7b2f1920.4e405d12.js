(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{348:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(3),i=r(7),o=(r(0),r(637)),c=["components"],a={custom_edit_url:null,id:"04-take-picture",title:"take picture"},u={unversionedId:"zumi/blockly/Junior/Camera/04-take-picture",id:"zumi/blockly/Junior/Camera/04-take-picture",isDocsHomePage:!1,title:"take picture",description:"Block",source:"@site/docs/zumi/blockly/Junior/06-Camera/04-take-picture.md",sourceDirName:"zumi/blockly/Junior/06-Camera",slug:"/zumi/blockly/Junior/Camera/04-take-picture",permalink:"/docs/zumi/blockly/Junior/Camera/04-take-picture",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"04-take-picture",title:"take picture"},sidebar:"zumiBlocklyJuniorSideBar",previous:{title:"close camera",permalink:"/docs/zumi/blockly/Junior/Camera/03-close-camera"},next:{title:"show image",permalink:"/docs/zumi/blockly/Junior/Camera/05-show-image"}},l=[],s={toc:l};function m(e){var t=e.components,a=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"block"},"Block"),Object(o.b)("p",null,Object(o.b)("img",{alt:"take picture block image",src:r(912).default})),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Captures a color image with Zumi's camera and stores the array as a frame object. Use the image object with show_image() to display in Blockly. This block cannot be used without importing and starting the camera."),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None "),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"image"),": A frame object composed of a 160x128 array of pixels."),Object(o.b)("h5",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("img",{alt:"take picture example",src:r(643).default})))}m.isMDXComponent=!0},637:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(r),p=n,b=m["".concat(c,".").concat(p)]||m[p]||f[p]||o;return r?i.a.createElement(b,a(a({ref:t},l),{},{components:r})):i.a.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},643:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/show_image_example-a09ef9574ab27fad12ec1318fc5d9efe.png"},912:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);