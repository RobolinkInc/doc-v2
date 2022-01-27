(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{304:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return b}));var t=r(3),i=r(7),o=(r(0),r(312)),c=["components"],a={custom_edit_url:null,title:"blink()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"blink()"},l={unversionedId:"zumi/Screen/blink",id:"zumi/Screen/blink",isDocsHomePage:!1,title:"blink()",description:"Description",source:"@site/docs/zumi/06-Screen/02-blink.md",sourceDirName:"zumi/06-Screen",slug:"/zumi/Screen/blink",permalink:"/doc-v2/docs/zumi/Screen/blink",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"blink()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"blink()"},sidebar:"someSidebar",previous:{title:"angry()",permalink:"/doc-v2/docs/zumi/Screen/angry"},next:{title:"clear_display()",permalink:"/doc-v2/docs/zumi/Screen/clear-display"}},u=[],p={toc:u};function b(e){var n=e.components,r=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Draws Zumi's blinking animation on the screen."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"blink()"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen \nscreen = Screen()\n\nscreen.blink()\n")))}b.isMDXComponent=!0},312:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},b=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=t,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return r?i.a.createElement(d,a(a({ref:n},u),{},{components:r})):i.a.createElement(d,a({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);