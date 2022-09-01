(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{431:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return p})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),c=(n(0),n(497)),l=["components"],i={custom_edit_url:null,id:"04-l1_pressed",title:"l1_pressed()"},p={unversionedId:"codrone-edu/python/Controller/04-l1_pressed",id:"codrone-edu/python/Controller/04-l1_pressed",isDocsHomePage:!1,title:"l1_pressed()",description:"Description",source:"@site/docs/codrone-edu/python/08-Controller/04-l1_pressed.md",sourceDirName:"codrone-edu/python/08-Controller",slug:"/codrone-edu/python/Controller/04-l1_pressed",permalink:"/docs/codrone-edu/python/Controller/04-l1_pressed",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"04-l1_pressed",title:"l1_pressed()"},sidebar:"codroneEduSideBar",previous:{title:"h_pressed()",permalink:"/docs/codrone-edu/python/Controller/03-h_pressed"},next:{title:"l2_pressed()",permalink:"/docs/codrone-edu/python/Controller/05-l2_pressed"}},s=[],a={toc:s};function d(e){var r=e.components,n=Object(o.a)(e,l);return Object(c.b)("wrapper",Object(t.a)({},a,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"A function that determines if the controller's L1 button has been pressed"),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"l1_pressed()")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"True if the L1 button is pressed or held. Otherwise the function will return false."),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\nimport time\n\ndrone = Drone()\ndrone.open()\n\nwhile True:\n    time.sleep(0.1)\n    if drone.l1_pressed():\n        print("L1 button has been pressed!")\n\n')))}d.isMDXComponent=!0},497:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),a=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=a(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=a(n),b=t,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||c;return n?o.a.createElement(f,i(i({ref:r},s),{},{components:n})):o.a.createElement(f,i({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);