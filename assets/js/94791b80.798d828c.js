(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{248:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return d}));var t=n(3),i=n(7),o=(n(0),n(377)),a=["components"],c={custom_edit_url:null,title:"reverse_avoid_collision()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"reverse_avoid_collision()"},l={unversionedId:"zumi/python/Driving/reverse-avoid-collision",id:"zumi/python/Driving/reverse-avoid-collision",isDocsHomePage:!1,title:"reverse_avoid_collision()",description:"Description",source:"@site/docs/zumi/python/03-Driving/23-reverse-avoid-collision.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/reverse-avoid-collision",permalink:"/doc-v2/docs/zumi/python/Driving/reverse-avoid-collision",editUrl:null,version:"current",sidebarPosition:23,frontMatter:{custom_edit_url:null,title:"reverse_avoid_collision()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"reverse_avoid_collision()"},sidebar:"someSidebar",previous:{title:"reset_coordinate()",permalink:"/doc-v2/docs/zumi/python/Driving/reset-coordinate"},next:{title:"reverse_step()",permalink:"/doc-v2/docs/zumi/python/Driving/reverse-step"}},s=[],u={toc:s};function d(e){var r=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Drives Zumi in reverse at a default speed of 40 for 1 second in the direction Zumi is currently facing.\nIf either of the back IR sensor values go below the threshold, Zumi will stop even if the duration or timeout is not complete."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"reverse_avoid_collision(speed=40, duration=1.0)"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"reverse_avoid_collision(speed=40, duration=1.0, desired_angle=None, left_th=150, right_th=150)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"speed: Positive integer value for speed between 0 and 80",Object(o.b)("br",null),"\nduration: Number of seconds Zumi will drive and check for collision",Object(o.b)("br",null),"\ndesired_angle: Heading or desired angle (Default to None which is Zumi's current heading)",Object(o.b)("br",null),"\nleft_th: threshold of the back left IR sensor",Object(o.b)("br",null),"\nright_th: threshold of the back right IR sensor",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\n\nzumi = Zumi()\n\nzumi.reverse_avoid_collision(40,2)\n\n")))}d.isMDXComponent=!0},377:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var r=i.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=u(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(m,c(c({ref:r},s),{},{components:n})):i.a.createElement(m,c({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);