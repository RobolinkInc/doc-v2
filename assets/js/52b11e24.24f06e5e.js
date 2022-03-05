(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{177:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),i=(t(0),t(377)),o=["components"],l={custom_edit_url:null,title:"parallel_park()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"parallel_park()"},p={unversionedId:"zumi/python/Driving/paralllel-park",id:"zumi/python/Driving/paralllel-park",isDocsHomePage:!1,title:"parallel_park()",description:"Description",source:"@site/docs/zumi/python/03-Driving/18-paralllel-park.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/paralllel-park",permalink:"/doc-v2/docs/zumi/python/Driving/paralllel-park",editUrl:null,version:"current",sidebarPosition:18,frontMatter:{custom_edit_url:null,title:"parallel_park()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"parallel_park()"},sidebar:"someSidebar",previous:{title:"move_to_coordinate()",permalink:"/doc-v2/docs/zumi/python/Driving/move-to-coordinate"},next:{title:"rectangle_left()",permalink:"/doc-v2/docs/zumi/python/Driving/rectangle-left"}},c=[],u={toc:c};function b(e){var r=e.components,t=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Drives Zumi in a parallel park maneuver."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"parallel_park()"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"parallel_park(speed=15, step=1, delay=0.01)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"speed: Drive speed between 0 and 80",Object(i.b)("br",null),"\nstep: The angle step size (decrease for wider turns, increase for tighter turns)",Object(i.b)("br",null),"\ndelay: The time delay between each angle step",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\n\nzumi = Zumi()\nzumi.parallel_park(speed=20, step=2)\n\n")))}b.isMDXComponent=!0},377:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(t),m=n,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return t?a.a.createElement(d,l(l({ref:r},c),{},{components:t})):a.a.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);