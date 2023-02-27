(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{433:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return d})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),c=(n(0),n(614)),a=["components"],l={custom_edit_url:null,id:"04-controller_draw_canvas",title:"controller_draw_canvas()"},i={unversionedId:"codrone-edu/python/Screen/04-controller_draw_canvas",id:"codrone-edu/python/Screen/04-controller_draw_canvas",isDocsHomePage:!1,title:"controller_draw_canvas()",description:"Description",source:"@site/docs/codrone-edu/python/09-Screen/04-controller_draw_canvas.md",sourceDirName:"codrone-edu/python/09-Screen",slug:"/codrone-edu/python/Screen/04-controller_draw_canvas",permalink:"/docs/codrone-edu/python/Screen/04-controller_draw_canvas",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"04-controller_draw_canvas",title:"controller_draw_canvas()"},sidebar:"codroneEduSideBar",previous:{title:"controller_draw_arc()",permalink:"/docs/codrone-edu/python/Screen/03-controller_draw_arc"},next:{title:"controller_draw_chord()",permalink:"/docs/codrone-edu/python/Screen/05-controller_draw_chord"}},d=[],s={toc:d};function p(e){var r=e.components,n=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Draws custom image canvas onto the controller screen"),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"controller_draw_canvas(image)")," ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"image"),": image object to be drawn onto the controller screen"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.controller_clear_screen() # clear screen for drawing\nimage = drone.controller_create_canvas()  # create image object\n\narc_list = [(20, 40), (50, 50)]\nellipse_list = [(10, 10), (40, 40)]\nchord_list = [(60, 20), (100, 50)]\n\ndrone.controller_draw_ellipse(ellipse_list, image) # draw onto image object\ndrone.controller_draw_arc(arc_list, 0, 180, image)\ndrone.controller_draw_chord(chord_list, 0, 180, image)\n\ndrone.controller_draw_canvas(image)  # draw image onto controller screen\n\ndrone.close()\n\n")))}p.isMDXComponent=!0},614:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),s=function(e){var r=o.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=s(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=t,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||c;return n?o.a.createElement(m,l(l({ref:r},d),{},{components:n})):o.a.createElement(m,l({ref:r},d))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var d=2;d<c;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);