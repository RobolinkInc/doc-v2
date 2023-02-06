(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{558:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(586)),a=["components"],c={custom_edit_url:null,title:"calibrate_MPU()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"calibrate_MPU()"},u={unversionedId:"zumi/python/MPU/calibrate-mpu",id:"zumi/python/MPU/calibrate-mpu",isDocsHomePage:!1,title:"calibrate_MPU()",description:"Description",source:"@site/docs/zumi/python/01-MPU/02-calibrate-mpu.md",sourceDirName:"zumi/python/01-MPU",slug:"/zumi/python/MPU/calibrate-mpu",permalink:"/docs/zumi/python/MPU/calibrate-mpu",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"calibrate_MPU()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"calibrate_MPU()"},sidebar:"someSidebar",previous:{title:"calibrate_gyro()",permalink:"/docs/zumi/python/MPU/calibrate-gyro"},next:{title:"get_orientation()",permalink:"/docs/zumi/python/MPU/get-orientation"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will\ncreate an offsets file by taking the average of multiple readings from the sensor. While running this function, make\nsure Zumi is not moving and is resting on a flat surface."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"calibrate_MPU()"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"calibrate_MPU(count=100)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"count:")," the number of samples you want Zumi to take. Increase to improve accuracy. "),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nzumi = Zumi()\n\n#Zumi will take 500 samples/readings\nzumi.mpu.calibrate_MPU(count=500)\n\n#this is the order the offsets will be printed\nprint("angular speed rad/sec Gx,Gy,Gz")\nprint("linear acceleration   Ax,Ay,Az")\n\n#print the offsets of each Axis\nzumi.mpu.print_offsets()\n\n')))}p.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);