(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(586)),c=["components"],a={custom_edit_url:null,title:"print()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"print()"},l={unversionedId:"zumi/python/Screen/print",id:"zumi/python/Screen/print",isDocsHomePage:!1,title:"print()",description:"Description",source:"@site/docs/zumi/python/06-Screen/25-print.md",sourceDirName:"zumi/python/06-Screen",slug:"/zumi/python/Screen/print",permalink:"/docs/zumi/python/Screen/print",editUrl:null,version:"current",sidebarPosition:25,frontMatter:{custom_edit_url:null,title:"print()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"print()"},sidebar:"someSidebar",previous:{title:"look_around()",permalink:"/docs/zumi/python/Screen/look-around"},next:{title:"sad()",permalink:"/docs/zumi/python/Screen/sad"}},u=[],p={toc:u};function s(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Prints any number of Strings on the screen. "),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"print(*messages)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"print(*messages,x=0, y=0, fill_in=True,font_size=12)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"messages: Any number of Strings that will print to the screen",Object(i.b)("br",null),"\nx: x coordinate of the String. Default to 0.",Object(i.b)("br",null),"\ny: y coordinate of the String. Default to 0.",Object(i.b)("br",null),"\nfill_in: Boolean that selects if text will be white(True) or black(False). Default to True.",Object(i.b)("br",null),"\nfont_size: Pixel size of the font. Default to 12.",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\n\nscreen.print("12345678")\nscreen.print("hello", y=15)\nscreen.print("\\n\\n","Zumi")\n\ntime.sleep(1)\nscreen.clear_drawing()\nscreen.print("ZUMI",font_size=20)\n\n')))}s.isMDXComponent=!0},586:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||i;return t?o.a.createElement(f,a(a({ref:n},u),{},{components:t})):o.a.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);