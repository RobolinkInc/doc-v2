(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{451:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=f(n),s=t,b=d["".concat(u,".").concat(s)]||d[s]||p[s]||c;return n?o.a.createElement(b,a(a({ref:r},l),{},{components:n})):o.a.createElement(b,a({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,u=new Array(c);u[0]=s;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,u[1]=a;for(var l=2;l<c;l++)u[l]=n[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},523:function(e,r,n){"use strict";n.r(r),r.default="data:image/png;base64,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"},524:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/drone_led_off_example-144794eb49cd55c56cfb3944ecd28e37.PNG"},90:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),c=(n(0),n(451)),u=["components"],a={custom_edit_url:null,id:"02-drone-led-off",title:"drone_LED_off()"},i={unversionedId:"codrone-edu/blockly/Junior/Lights/02-drone-led-off",id:"codrone-edu/blockly/Junior/Lights/02-drone-led-off",isDocsHomePage:!1,title:"drone_LED_off()",description:"drone led off block image",source:"@site/docs/codrone-edu/blockly/Junior/04-Lights/02-drone-led-off.md",sourceDirName:"codrone-edu/blockly/Junior/04-Lights",slug:"/codrone-edu/blockly/Junior/Lights/02-drone-led-off",permalink:"/docs/codrone-edu/blockly/Junior/Lights/02-drone-led-off",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-drone-led-off",title:"drone_LED_off()"}},l=[],f={toc:l};function d(e){var r=e.components,a=Object(o.a)(e,u);return Object(c.b)("wrapper",Object(t.a)({},f,a,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"drone led off block image",src:n(523).default}),"\nTurns the CoDrone EDU's LED off."),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example"},"Example"),Object(c.b)("p",null,Object(c.b)("img",{alt:"drone led off example",src:n(524).default})))}d.isMDXComponent=!0}}]);