(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(586)),a=["components"],c={custom_edit_url:null,title:"reset_drive()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},s={unversionedId:"zumi/python/Sensors/reset-drive",id:"zumi/python/Sensors/reset-drive",isDocsHomePage:!1,title:"reset_drive()",description:"Description",source:"@site/docs/zumi/python/02-Sensors/17-reset-drive.md",sourceDirName:"zumi/python/02-Sensors",slug:"/zumi/python/Sensors/reset-drive",permalink:"/docs/zumi/python/Sensors/reset-drive",editUrl:null,version:"current",sidebarPosition:17,frontMatter:{custom_edit_url:null,title:"reset_drive()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},sidebar:"someSidebar",previous:{title:"read_z_angle()",permalink:"/docs/zumi/python/Sensors/read-z-angle"},next:{title:"reset_PID()",permalink:"/docs/zumi/python/Sensors/reset-PID"}},u=[],p={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Calls both ",Object(i.b)("inlineCode",{parentName:"p"},"reset_PID()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"reset_gyro()"),".\nUse for driving straight or turning accurately."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"reset_drive()"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nimport time\n\nzumi = Zumi()\n\nfor i in range(0,50):\n    zumi.forward_step(0,50)\n    \nprint(zumi.angle_list[2],", ", zumi.error_past)\n    \nzumi.stop()\nzumi.reset_drive()\n\nprint(" Now ")\nprint(zumi.angle_list[2],", ", zumi.error_past)\n    \n\n')))}l.isMDXComponent=!0},586:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,b=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);