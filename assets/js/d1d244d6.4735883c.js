(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{1052:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/topdown_xy-cd2062ba5477b40ddcf563e336c64f5e.png"},1053:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xyz-dea1a52be4324fcb935159af84571f3d.jpg"},554:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(642)),a=["components"],s={custom_edit_url:null,id:"28-send_absolute_position",title:"send_absolute_position()"},c={unversionedId:"codrone-edu/python/Flight-Commands-Movement/28-send_absolute_position",id:"codrone-edu/python/Flight-Commands-Movement/28-send_absolute_position",isDocsHomePage:!1,title:"send_absolute_position()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/28-send_absolute_position.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/28-send_absolute_position",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/28-send_absolute_position",editUrl:null,version:"current",sidebarPosition:28,frontMatter:{custom_edit_url:null,id:"28-send_absolute_position",title:"send_absolute_position()"},sidebar:"codroneEduSideBar",previous:{title:"move_right()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/27-move_right"},next:{title:"controller_LED_off()",permalink:"/docs/codrone-edu/python/LED/01-controller_LED_off"}},l=[],d={toc:l};function p(e){var t=e.components,s=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Sends a movement command to the drone based on its absolute position from its takeoff location. Note: A sleep command for the length of the movement may be needed after using this movement command. ",Object(i.b)("br",null),"\nThe 'x' position of the drone is forwards and reverse. ",Object(i.b)("br",null),"\nThe 'y' position of the drone is left and right. ",Object(i.b)("br",null),"\nThe 'z' position of the drone is up and down. ",Object(i.b)("br",null),"\n",Object(i.b)("img",{alt:"xy position image",src:n(1052).default})," ",Object(i.b)("br",null),"\n",Object(i.b)("img",{alt:"xyz position image",src:n(1053).default})),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"send_absolute_position(positionX, positionY, positionZ, velocity, heading, rotationalVelocity)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"positionX"),": Float value from -10 ~ 10 meters. The X position of the drone. Forward is positive. Backwards is negative.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"positionY"),": Float value from -10 ~ 10 meters. The Y position of the drone. Left is positive. Right is negative.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"positionZ"),": Float value from -10 ~ 10 meters. The Z position of the drone. Up is positive. Down is negative.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"velocity"),": Float value from 0.5 ~ 10 meters per second. The movement speed of the drone. ",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"heading"),":  Integer value from -360 - 360 degrees. Positive turns the drone left. Negative turns the drone right. ",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"rotationalVelocity"),": Integer value from 0 - 360 degrees per second. Left and right rotation speed of the drone."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.takeoff()\n\n# Sending the drone forward from its takeoff location 0.5 meters moving at 0.5 m/s\ndrone.send_absolute_position(0.5, 0, 1, 0.5, 0, 0)\ntime.sleep(1) # Sleep command needed in order for this movement to execute.\n\n# Sending the same command will cause the drone to hover around \n# the same area since this command uses absolute positioning from the takeoff location\ndrone.send_absolute_position(0.5, 0, 1, 0.5, 0, 0)\ntime.sleep(1)\n\n\ndrone.land()\n")))}p.isMDXComponent=!0},642:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);