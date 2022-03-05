(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{330:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(377)),c=["components"],l={custom_edit_url:null,title:"draw_ellipse()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_ellipse()"},a={unversionedId:"zumi/python/Screen/draw-elipse",id:"zumi/python/Screen/draw-elipse",isDocsHomePage:!1,title:"draw_ellipse()",description:"Description",source:"@site/docs/zumi/python/06-Screen/10-draw-elipse.md",sourceDirName:"zumi/python/06-Screen",slug:"/zumi/python/Screen/draw-elipse",permalink:"/doc-v2/docs/zumi/python/Screen/draw-elipse",editUrl:null,version:"current",sidebarPosition:10,frontMatter:{custom_edit_url:null,title:"draw_ellipse()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_ellipse()"},sidebar:"someSidebar",previous:{title:"draw_circle()",permalink:"/doc-v2/docs/zumi/python/Screen/draw-circle"},next:{title:"draw_image()",permalink:"/doc-v2/docs/zumi/python/Screen/draw-image"}},p=[],u={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Draws an ellipse that fits in a rectangle with its top-left corner at x,y and a set width and height."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"draw_ellipse(self, x, y, width, height)"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"draw_ellipse(self, x, y, width, height, fill_in=True)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"x: x coordinate of the top-left corner of the enclosing rectangle",Object(o.b)("br",null),"\ny: y coordinate of the top-left corner of the enclosing rectangle",Object(o.b)("br",null),"\nwidth: width of enclosing rectangle",Object(o.b)("br",null),"\nheight: height of enclosing rectangle",Object(o.b)("br",null),"\nfill_in: Boolean that selects if the triangle will be filled in (white). Default to True.",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\nscreen.draw_ellipse(0,0,100,30,fill_in=True)\n")))}s.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?i.a.createElement(f,l(l({ref:t},p),{},{components:n})):i.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);