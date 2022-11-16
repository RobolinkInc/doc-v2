(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(502)),i=["components"],a={custom_edit_url:null,title:"clock()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"clock()"},l={unversionedId:"zumi/python/Screen/clock",id:"zumi/python/Screen/clock",isDocsHomePage:!1,title:"clock()",description:"Descriptionx",source:"@site/docs/zumi/python/06-Screen/05-clock.md",sourceDirName:"zumi/python/06-Screen",slug:"/zumi/python/Screen/clock",permalink:"/docs/zumi/python/Screen/clock",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"clock()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"clock()"},sidebar:"someSidebar",previous:{title:"clear_drawing()",permalink:"/docs/zumi/python/Screen/clear-drawing"},next:{title:"close_eyes()",permalink:"/docs/zumi/python/Screen/close-eyes"}},u=[],p={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"descriptionx"},"Descriptionx"),Object(c.b)("p",null,"Clears the screen and draws a clock with the given hour and minute set by the user."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"clock(hour, minute)"),Object(c.b)("br",null),"\n",Object(c.b)("inlineCode",{parentName:"p"},"clock(hour, minute, string='', font_size=18)"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"hour: Integer for the hour",Object(c.b)("br",null),"\nminute: Integer for the minute",Object(c.b)("br",null),"\nstring: an 8 character String to be displayed under the clock (optional). Defaults to an empty string.",Object(c.b)("br",null),"\nfont_size: the font-size of the time"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\nscreen.clock(3,15,"Monday")\n')))}s.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||c;return n?o.a.createElement(d,a(a({ref:t},u),{},{components:n})):o.a.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);