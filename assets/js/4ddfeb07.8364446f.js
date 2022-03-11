(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(376)),c=["components"],i={custom_edit_url:null,title:"fly_sequence()",taxonomy:{category:["flight-command-movement"],tag:["CDM-library"]},menu:"fly_sequence()"},u={unversionedId:"codrone-edu/python/Flight-Commands-Movement/fly-sequence",id:"codrone-edu/python/Flight-Commands-Movement/fly-sequence",isDocsHomePage:!1,title:"fly_sequence()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/02-fly-sequence.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/fly-sequence",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/fly-sequence",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"fly_sequence()",taxonomy:{category:["flight-command-movement"],tag:["CDM-library"]},menu:"fly_sequence()"},sidebar:"codroneEduSideBar",previous:{title:"flip()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/flip"},next:{title:"go()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/go"}},l=[],p={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function makes the drone fly in a pre-determined shape. The options are ",Object(a.b)("strong",{parentName:"p"},"square"),", ",Object(a.b)("strong",{parentName:"p"},"spiral"),", ",Object(a.b)("strong",{parentName:"p"},"triangle"),", ",Object(a.b)("strong",{parentName:"p"},"hop"),", ",Object(a.b)("strong",{parentName:"p"},"sway"),", and ",Object(a.b)("strong",{parentName:"p"},"zigzag"),". It's recommended that you ",Object(a.b)("strong",{parentName:"p"},"make sure the drone is trimmed and hovering stably")," before running a sequence, otherwise the sequence may not appear as expected."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"fly_sequence(sequence)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"sequence"),": SQUARE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nfrom CoDrone_mini import Sequence\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.fly_sequence(Sequence.ZIGZAG) # Fly zigzag (move left and right 2 times each while move forward)\ndrone.fly_sequence(Sequence.SPIRAL)     # Fly Spiral shape\ndrone.fly_sequence(Sequence.SQUARE)     # Fly square shape\n\ndrone.land()\ndrone.close()\n")))}s.isMDXComponent=!0},376:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return t?o.a.createElement(b,i(i({ref:n},l),{},{components:t})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);