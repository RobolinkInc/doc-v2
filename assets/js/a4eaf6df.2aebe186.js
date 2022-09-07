(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{344:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return b})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),c=(r(0),r(498)),u=["components"],a={custom_edit_url:null,id:"02-drone_buzzer",title:"drone_buzzer()"},i={unversionedId:"codrone-edu/python/Buzzer/02-drone_buzzer",id:"codrone-edu/python/Buzzer/02-drone_buzzer",isDocsHomePage:!1,title:"drone_buzzer()",description:"Description",source:"@site/docs/codrone-edu/python/06-Buzzer/02-drone_buzzer.md",sourceDirName:"codrone-edu/python/06-Buzzer",slug:"/codrone-edu/python/Buzzer/02-drone_buzzer",permalink:"/docs/codrone-edu/python/Buzzer/02-drone_buzzer",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-drone_buzzer",title:"drone_buzzer()"}},b=[],l={toc:b};function p(e){var n=e.components,r=Object(o.a)(e,u);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Plays a note using the drone's buzzer. ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"drone_buzzer(note, duration)"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"note"),": Integer frequency in Hz or a Note object.",Object(c.b)("br",null)),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"duration"),": Duration of the note in milliseconds",Object(c.b)("br",null)),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.drone_buzzer(400, 300)\ndrone.drone_buzzer(600, 300)\ndrone.close()\n")))}p.isMDXComponent=!0},498:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),l=function(e){var n=o.a.useContext(b),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,u=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(r),s=t,f=p["".concat(u,".").concat(s)]||p[s]||d[s]||c;return r?o.a.createElement(f,a(a({ref:n},b),{},{components:r})):o.a.createElement(f,a({ref:n},b))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,u=new Array(c);u[0]=s;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,u[1]=a;for(var b=2;b<c;b++)u[b]=r[b];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);