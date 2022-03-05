(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{370:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(377)),a=["components"],s={custom_edit_url:null,title:"reset_PID()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},u={unversionedId:"zumi/python/Sensors/reset-PID",id:"zumi/python/Sensors/reset-PID",isDocsHomePage:!1,title:"reset_PID()",description:"Description",source:"@site/docs/zumi/python/02-Sensors/18-reset-PID.md",sourceDirName:"zumi/python/02-Sensors",slug:"/zumi/python/Sensors/reset-PID",permalink:"/doc-v2/docs/zumi/python/Sensors/reset-PID",editUrl:null,version:"current",sidebarPosition:18,frontMatter:{custom_edit_url:null,title:"reset_PID()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},sidebar:"someSidebar",previous:{title:"reset_drive()",permalink:"/doc-v2/docs/zumi/python/Sensors/reset-drive"},next:{title:"reset_gyro()",permalink:"/doc-v2/docs/zumi/python/Sensors/reset-gyro"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Resets the sum of the gyro error to zero as well as the PID error sum.\nUse for driving straight or turning accurately.\nThis does not reset the P, I, and D values of the Zumi PID control."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"reset_PID()"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nzumi = Zumi()\n\nfor i in range(0,50):\n    zumi.go_straight(50,0)\n    #print the error of the z angle along with some of the PID accumulators\n    print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum," , ", zumi.angle_list[2])\n\nzumi.stop()\n\n#this will reset those values\nzumi.reset_PID()\nprint(" Now ")\nprint(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum, " , ", zumi.angle_list[2])\n\n')))}p.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(a,".").concat(b)]||p[b]||m[b]||i;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);