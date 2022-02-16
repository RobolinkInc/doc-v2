(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(323)),i=["components"],c={custom_edit_url:null,title:"LED_pattern()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"LED_pattern()"},l={unversionedId:"codrone-mini/LED/led-pattern",id:"codrone-mini/LED/led-pattern",isDocsHomePage:!1,title:"LED_pattern()",description:"Description",source:"@site/docs/codrone-mini/05-LED/02-led-pattern.md",sourceDirName:"codrone-mini/05-LED",slug:"/codrone-mini/LED/led-pattern",permalink:"/doc-v2/docs/codrone-mini/LED/led-pattern",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"LED_pattern()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"LED_pattern()"},sidebar:"cdmSideBar",previous:{title:"LED_color()",permalink:"/doc-v2/docs/codrone-mini/LED/led-color"},next:{title:"play_note()",permalink:"/doc-v2/docs/codrone-mini/LED/play-note"}},p=[],u={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function sets the color of the arm LED lights to flash in a particular pre-set pattern at a given speed."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"LED_pattern(red, green, blue, mode)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"LED_pattern(red, green, blue, mode, speed)"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"red:")," int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"green"),": int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"blue"),": int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"mode"),": an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, PULSE, FADE_IN, FADE_OUT",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"speed"),": int value from 1-10, which represents the speed of the pattern. 1 is slowest, 10 is fastest. Default value is 5.",Object(a.b)("br",null)),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nfrom CoDrone_mini import Mode\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ntime.sleep(1) # to prevent skipping the LED command\ndrone.LED_pattern(0, 100, 0, Mode.PULSE, 5)  \n")))}b.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);