(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(499)),l=["components"],a={custom_edit_url:null,id:"03-set_controller_LED",title:"set_controller_LED()"},i={unversionedId:"codrone-edu/python/LED/03-set_controller_LED",id:"codrone-edu/python/LED/03-set_controller_LED",isDocsHomePage:!1,title:"set_controller_LED()",description:"Description",source:"@site/docs/codrone-edu/python/05-LED/03-set_controller_LED.md",sourceDirName:"codrone-edu/python/05-LED",slug:"/codrone-edu/python/LED/03-set_controller_LED",permalink:"/docs/codrone-edu/python/LED/03-set_controller_LED",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,id:"03-set_controller_LED",title:"set_controller_LED()"},sidebar:"codroneEduSideBar",previous:{title:"drone_LED_off()",permalink:"/docs/codrone-edu/python/LED/02-drone_LED_off"},next:{title:"set_drone_LED()",permalink:"/docs/codrone-edu/python/LED/04-set_drone_LED"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,l);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function sets the LED color and brightness of the CoDrone EDU controller's LEDs. This is done by setting RGB values (0 - 255) and brightness level (0 - 100)"),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"set_controller_LED(red, green, blue, brightness)"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"red"),": int value from 0 -255 ",Object(c.b)("br",null),"\n",Object(c.b)("strong",{parentName:"p"},"green"),": int value from 0 -255 ",Object(c.b)("br",null),"\n",Object(c.b)("strong",{parentName:"p"},"blue"),": int value from 0 -255 ",Object(c.b)("br",null),"\n",Object(c.b)("strong",{parentName:"p"},"brightness"),": int value from 0 - 100 ",Object(c.b)("br",null)," "),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.set_controller_LED(0, 0, 255, 100)\ndrone.close()\n")))}p.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||b[d]||c;return n?o.a.createElement(f,a(a({ref:t},u),{},{components:n})):o.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<c;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);