(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{230:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(512)),i=["components"],c={custom_edit_url:null,id:"land",title:"land()"},l={unversionedId:"codrone-mini/python/Flight-Commands-Start-Stop/land",id:"codrone-mini/python/Flight-Commands-Start-Stop/land",isDocsHomePage:!1,title:"land()",description:"Description",source:"@site/docs/codrone-mini/python/02-Flight-Commands-Start-Stop/04-land.md",sourceDirName:"codrone-mini/python/02-Flight-Commands-Start-Stop",slug:"/codrone-mini/python/Flight-Commands-Start-Stop/land",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/land",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"land",title:"land()"},sidebar:"cdmSideBar",previous:{title:"headless_on()",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/headless-on"},next:{title:"reset_sensor()",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/reset-sensor"}},p=[],d={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function makes the drone stop all commands, hover, and make a soft landing where it is. The function will also reset the flight motion variables to 0. ",Object(a.b)("strong",{parentName:"p"},"NOTE:")," If you want to take off and immediately land, it is recommended to run a ",Object(a.b)("inlineCode",{parentName:"p"},"hover()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"time.sleep()")," in between the ",Object(a.b)("inlineCode",{parentName:"p"},"takeoff()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"land()"),", because the CoDrone Mini will often miss the land command otherwise."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"land()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\ndrone.hover(3) # include a hover() or time.sleep() to prevent land() from skipping\ndrone.land()\ndrone.close()\n")))}s.isMDXComponent=!0},512:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,b=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return t?o.a.createElement(b,c(c({ref:n},p),{},{components:t})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);