(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),l=(n(0),n(643)),a=["components"],i={custom_edit_url:null,id:"09-avoid-wall",title:"avoid_wall()"},c={unversionedId:"codrone-edu/blockly/Senior/Flight-Commands/09-avoid-wall",id:"codrone-edu/blockly/Senior/Flight-Commands/09-avoid-wall",isDocsHomePage:!1,title:"avoid_wall()",description:"Block",source:"@site/docs/codrone-edu/blockly/Senior/01-Flight-Commands/09-avoid-wall.md",sourceDirName:"codrone-edu/blockly/Senior/01-Flight-Commands",slug:"/codrone-edu/blockly/Senior/Flight-Commands/09-avoid-wall",permalink:"/docs/codrone-edu/blockly/Senior/Flight-Commands/09-avoid-wall",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{custom_edit_url:null,id:"09-avoid-wall",title:"avoid_wall()"},sidebar:"codroneEduBlocklySideBar",previous:{title:"turn_left()/turn_right()",permalink:"/docs/codrone-edu/blockly/Senior/Flight-Commands/08-turn-direction-degree"},next:{title:"set_roll()",permalink:"/docs/codrone-edu/blockly/Senior/Flight-Variables/01-set-roll"}},d=[],u={toc:d};function s(e){var t=e.components,i=Object(o.a)(e,a);return Object(l.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h5",{id:"block"},"Block"),Object(l.b)("p",null,Object(l.b)("img",{alt:"avoid wall image",src:n(934).default})),Object(l.b)("h5",{id:"description"},"Description"),Object(l.b)("p",null,"CoDrone EDU will fly forward and stop when an obstacle is detected a given distance away (in centimeters). The block will run until the timeout (in seconds) is finished or the obstacle is found, whichever comes first. The default timeout is 10 seconds for an obstacle detected 20cm away."),Object(l.b)("h5",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"timeout"),": positive integer timeout duration in seconds ",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"distance"),": positive integer in centimeters",Object(l.b)("br",null)),Object(l.b)("h5",{id:"returns"},"Returns"),Object(l.b)("p",null,"None"),Object(l.b)("h5",{id:"example"},"Example"),Object(l.b)("p",null,"Place the drone on the floor a few feet away from a wall. When you run the code, the drone will fly forward until the wall is detected 30 centimeters away. The next block will immediately execute. In this case, the drone will land."),Object(l.b)("p",null,Object(l.b)("img",{alt:"avoid wall example",src:n(935).default})))}s.isMDXComponent=!0},643:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,m=s["".concat(a,".").concat(p)]||s[p]||b[p]||l;return n?o.a.createElement(m,i(i({ref:t},d),{},{components:n})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},934:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/avoid_wall-adc4d1c3284981112d288f78be129ea6.PNG"},935:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/avoid_wall_example-2c853354c32c3d483b16fd7949ad9e5a.PNG"}}]);