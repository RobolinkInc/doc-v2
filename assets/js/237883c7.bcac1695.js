(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{152:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return d})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(643)),c=["components"],i={custom_edit_url:null,id:"01-down_arrow_pressed",title:"down_arrow_pressed()"},d={unversionedId:"codrone-edu/python/Controller/01-down_arrow_pressed",id:"codrone-edu/python/Controller/01-down_arrow_pressed",isDocsHomePage:!1,title:"down_arrow_pressed()",description:"Description",source:"@site/docs/codrone-edu/python/08-Controller/01-down_arrow_pressed.md",sourceDirName:"codrone-edu/python/08-Controller",slug:"/codrone-edu/python/Controller/01-down_arrow_pressed",permalink:"/docs/codrone-edu/python/Controller/01-down_arrow_pressed",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,id:"01-down_arrow_pressed",title:"down_arrow_pressed()"},sidebar:"codroneEduSideBar",previous:{title:"get_error_data()",permalink:"/docs/codrone-edu/python/Sensors/35-get_error_data"},next:{title:"get_button_data()",permalink:"/docs/codrone-edu/python/Controller/02-get_button_data"}},p=[],s={toc:p};function l(e){var r=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"A function that determines if the controller's down arrow button has been pressed"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"down_arrow_pressed()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"True if the down arrow button is pressed or held. Otherwise the function will return false."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\nimport time\n\ndrone = Drone()\ndrone.open()\n\nwhile True:\n    time.sleep(0.1)\n    if drone.down_arrow_pressed():\n        print("down arrow button has been pressed!")\n\n')))}l.isMDXComponent=!0},643:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(n),b=t,f=l["".concat(c,".").concat(b)]||l[b]||u[b]||a;return n?o.a.createElement(f,i(i({ref:r},p),{},{components:n})):o.a.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);