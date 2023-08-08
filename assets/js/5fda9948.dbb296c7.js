(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{288:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(640)),i=["components"],c={custom_edit_url:null,id:"31-get_angular_speed_x",title:"get_angular_speed_x()"},s={unversionedId:"codrone-edu/python/Sensors/31-get_angular_speed_x",id:"codrone-edu/python/Sensors/31-get_angular_speed_x",isDocsHomePage:!1,title:"get_angular_speed_x()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/31-get_angular_speed_x.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/31-get_angular_speed_x",permalink:"/docs/codrone-edu/python/Sensors/31-get_angular_speed_x",editUrl:null,version:"current",sidebarPosition:31,frontMatter:{custom_edit_url:null,id:"31-get_angular_speed_x",title:"get_angular_speed_x()"},sidebar:"codroneEduSideBar",previous:{title:"set_initial_pressure()",permalink:"/docs/codrone-edu/python/Sensors/30-set_initial_pressure"},next:{title:"get_angular_speed_y()",permalink:"/docs/codrone-edu/python/Sensors/32-get_angular_speed_y"}},p=[],u={toc:p};function l(e){var n=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,'This function returns the current angular speed in degrees per second around the x-axis ("roll" axis). ',Object(a.b)("br",null)),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_angular_speed_x()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"angular speed:")," positive or negative integer in degrees per second"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("p",null,"Tilt the drone left and right while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\nimport time\n\ndrone = Drone()\ndrone.pair()\n\nfor i in range(100):\n    print(drone.get_angular_speed_x())\n    time.sleep(0.05)\ndrone.close()\n")))}l.isMDXComponent=!0},640:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=t,g=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(g,c(c({ref:n},p),{},{components:r})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);