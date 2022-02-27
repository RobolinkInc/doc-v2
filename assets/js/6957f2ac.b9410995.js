(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(380)),i=["components"],c={custom_edit_url:null,title:"update_angles()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"update_angles()"},l={unversionedId:"zumi/MPU/update-angles",id:"zumi/MPU/update-angles",isDocsHomePage:!1,title:"update_angles()",description:"Description",source:"@site/docs/zumi/01-MPU/10-update-angles.md",sourceDirName:"zumi/01-MPU",slug:"/zumi/MPU/update-angles",permalink:"/doc-v2/docs/zumi/MPU/update-angles",editUrl:null,version:"current",sidebarPosition:10,frontMatter:{custom_edit_url:null,title:"update_angles()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"update_angles()"},sidebar:"someSidebar",previous:{title:"reset_PID()",permalink:"/doc-v2/docs/zumi/MPU/reset-pid"},next:{title:"back_left_detect()",permalink:"/doc-v2/docs/zumi/Sensors/back-left-detect"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Reads angular speeds and updates the list of angles:\nThe first 3 are angles produced from the gyroscope readings.",Object(o.b)("br",null),"\nX angle, Y angle and Z angle in degrees.",Object(o.b)("br",null),"\nThe next 2 angles are produced by finding the tilt with respect to gravity.",Object(o.b)("br",null),"\nX and Y acceleration angles in degrees. Work well if Zumi's wheels point to the floor",Object(o.b)("br",null),"\nThe next 2 angles are the complementary filtered angles are produced by combining both gyroscope and accelerometer angles for the x and y axis.",Object(o.b)("br",null),"\nThe next 3 are the rotation angles which are produced using the accelerometer.",Object(o.b)("br",null),"\nrotation along X, Y and Z with respect to gravity.",Object(o.b)("br",null),"\nThe last one is the tilt state.",Object(o.b)("br",null)),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"update_angles()"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"List ","[Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\n\nfor i in range(0,100):\n    angles = zumi.update_angles()\n    z_angle = angles[2]\n    print(z_angle)\nprint(" done ")\n\n')))}p.isMDXComponent=!0},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);