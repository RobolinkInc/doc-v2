(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{564:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),c=r(7),o=(r(0),r(637)),a=["components"],i={custom_edit_url:null,title:"draw_rect()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_rect()"},l={unversionedId:"zumi/python/Screen/draw-rect",id:"zumi/python/Screen/draw-rect",isDocsHomePage:!1,title:"draw_rect()",description:"Description",source:"@site/docs/zumi/python/06-Screen/15-draw-rect.md",sourceDirName:"zumi/python/06-Screen",slug:"/zumi/python/Screen/draw-rect",permalink:"/docs/zumi/python/Screen/draw-rect",editUrl:null,version:"current",sidebarPosition:15,frontMatter:{custom_edit_url:null,title:"draw_rect()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_rect()"},sidebar:"someSidebar",previous:{title:"draw_polygon()",permalink:"/docs/zumi/python/Screen/draw-polygon"},next:{title:"draw_square()",permalink:"/docs/zumi/python/Screen/draw-square"}},u=[],p={toc:u};function b(e){var t=e.components,r=Object(c.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Draws a rectangle on the screen."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"draw_rect(x, y, width, height)"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"draw_rect(x, y, width, height, thickness=1, fill_in=False)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"x: the top left corner x coordinate",Object(o.b)("br",null),"\ny: the top left corner y coordinate",Object(o.b)("br",null),"\nwidth: width of rectangle",Object(o.b)("br",null),"\nheight: height of rectangle",Object(o.b)("br",null),"\nthickness: thickness of rectangle border, default to 1",Object(o.b)("br",null),"\nfill_in: Boolean that selects if the shape will be filled in. Default to False.",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\nscreen.draw_rect(0,0,128,64,thickness=1,fill_in=True)\n")))}b.isMDXComponent=!0},637:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),p=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||s[d]||o;return r?c.a.createElement(m,i(i({ref:t},u),{},{components:r})):c.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);