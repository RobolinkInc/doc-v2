(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{501:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=o.a.createContext({}),d=function(e){var r=o.a.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=d(e.components);return o.a.createElement(a.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),s=d(t),p=n,b=s["".concat(i,".").concat(p)]||s[p]||f[p]||c;return t?o.a.createElement(b,l(l({ref:r},a),{},{components:t})):o.a.createElement(b,l({ref:r},a))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var a=2;a<c;a++)i[a]=t[a];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},575:function(e,r,t){"use strict";t.r(r),r.default="data:image/png;base64,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"},576:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/drone_led_off_example-144794eb49cd55c56cfb3944ecd28e37.PNG"},94:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(0),t(501)),i=["components"],l={custom_edit_url:null,id:"02-drone-led-off",title:"turn drone LED off"},u={unversionedId:"codrone-edu/blockly/Junior/Lights/02-drone-led-off",id:"codrone-edu/blockly/Junior/Lights/02-drone-led-off",isDocsHomePage:!1,title:"turn drone LED off",description:"Block",source:"@site/docs/codrone-edu/blockly/Junior/04-Lights/02-drone-led-off.md",sourceDirName:"codrone-edu/blockly/Junior/04-Lights",slug:"/codrone-edu/blockly/Junior/Lights/02-drone-led-off",permalink:"/docs/codrone-edu/blockly/Junior/Lights/02-drone-led-off",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-drone-led-off",title:"turn drone LED off"},sidebar:"codroneEduBlocklyJuniorSideBar",previous:{title:"set drone LED color to [color], with a brightness of [brightness]",permalink:"/docs/codrone-edu/blockly/Junior/Lights/01-set-drone-led"},next:{title:"set controller LED to [color], with a brightness of [brightness]",permalink:"/docs/codrone-edu/blockly/Junior/Lights/03-set-controller-led"}},a=[],d={toc:a};function s(e){var r=e.components,l=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(n.a)({},d,l,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"block"},"Block"),Object(c.b)("p",null,Object(c.b)("img",{alt:"drone led off block image",src:t(575).default})),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Turns the CoDrone EDU's LED off."),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example"},"Example"),Object(c.b)("p",null,Object(c.b)("img",{alt:"drone led off example",src:t(576).default})))}s.isMDXComponent=!0}}]);