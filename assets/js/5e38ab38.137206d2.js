(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{277:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),i=(t(0),t(617)),o=["components"],l={custom_edit_url:null,id:"02-get-z-angle",title:"get z angle"},u={unversionedId:"zumi/blockly/Junior/Sensors/02-get-z-angle",id:"zumi/blockly/Junior/Sensors/02-get-z-angle",isDocsHomePage:!1,title:"get z angle",description:"Block",source:"@site/docs/zumi/blockly/Junior/05-Sensors/02-get-z-angle.md",sourceDirName:"zumi/blockly/Junior/05-Sensors",slug:"/zumi/blockly/Junior/Sensors/02-get-z-angle",permalink:"/docs/zumi/blockly/Junior/Sensors/02-get-z-angle",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-get-z-angle",title:"get z angle"},sidebar:"zumiBlocklyJuniorSideBar",previous:{title:"get ir reading",permalink:"/docs/zumi/blockly/Junior/Sensors/01-get-ir-reading"},next:{title:"get x angle",permalink:"/docs/zumi/blockly/Junior/Sensors/03-get-x-angle"}},c=[],s={toc:c};function d(e){var n=e.components,l=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},s,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"block"},"Block"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Z angle block image",src:t(828).default})),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Gets the current Z angle from Zumi's gyroscope."),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"angle"),": An integer ranging from 0 to 360."),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Z angle example",src:t(829).default})))}d.isMDXComponent=!0},617:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?a.a.createElement(b,l(l({ref:n},c),{},{components:t})):a.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},828:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},829:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/getZangle_example-28995d022162e4df7a9ecf29478babf5.png"}}]);