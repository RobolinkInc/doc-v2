(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{206:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),i=(r(0),r(377)),a=["components"],c={custom_edit_url:null,title:"smooth_reverse()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"smooth_reverse()"},u={unversionedId:"zumi/python/Driving/smooth-reverse",id:"zumi/python/Driving/smooth-reverse",isDocsHomePage:!1,title:"smooth_reverse()",description:"Description",source:"@site/docs/zumi/python/03-Driving/28-smooth-reverse.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/smooth-reverse",permalink:"/doc-v2/docs/zumi/python/Driving/smooth-reverse",editUrl:null,version:"current",sidebarPosition:28,frontMatter:{custom_edit_url:null,title:"smooth_reverse()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"smooth_reverse()"},sidebar:"someSidebar",previous:{title:"smooth_forward()",permalink:"/doc-v2/docs/zumi/python/Driving/smooth-forward"},next:{title:"smooth_turn_left()",permalink:"/doc-v2/docs/zumi/python/Driving/smooth-turn-left"}},l=[],s={toc:l};function m(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Causes Zumi to gradually accelerate in reverse to max speed during a given duration before decelerating back to zero."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"smooth_reverse(duration)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"smooth_reverse(duration, rate=1)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"duration: Total duration of drive command including acceleration and deceleration",Object(i.b)("br",null),"\nrate: rate at which speed changes. Default to 1",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\nzumi.smooth_reverse(3)\ntime.sleep(1)\nzumi.smooth_reverse(duration=3,rate=2)\n\n")))}m.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(r),b=n,d=m["".concat(a,".").concat(b)]||m[b]||p[b]||i;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);