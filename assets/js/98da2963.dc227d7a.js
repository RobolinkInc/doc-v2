(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{376:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(586)),i=["components"],c={custom_edit_url:null,id:"11-get_position_data",title:"get_position_data()"},s={unversionedId:"codrone-edu/python/Sensors/11-get_position_data",id:"codrone-edu/python/Sensors/11-get_position_data",isDocsHomePage:!1,title:"get_position_data()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/11-get_position_data.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/11-get_position_data",permalink:"/docs/codrone-edu/python/Sensors/11-get_position_data",editUrl:null,version:"current",sidebarPosition:11,frontMatter:{custom_edit_url:null,id:"11-get_position_data",title:"get_position_data()"},sidebar:"codroneEduSideBar",previous:{title:"get_pos_z()",permalink:"/docs/codrone-edu/python/Sensors/10-get_pos_z"},next:{title:"get_pressure()",permalink:"/docs/codrone-edu/python/Sensors/12-get_pressure"}},d=[],p={toc:d};function u(e){var t=e.components,c=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"get_position_data is a getter function that retuns a list of position data for the drone.\n",Object(a.b)("img",{alt:"top down image",src:n(591).default}),"\n",Object(a.b)("img",{alt:"xyz image",src:n(600).default})),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_position_data()"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"get_position_data(delay)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"delay"),": the delay in seconds before the position data is returned. default value is 0.01"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"A list of position data for the drone. The list contains the current time of the running program ","[0]",", x position data ","[1]",", y position data ","[2]",", z position data ","[3]","."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndata = drone.get_position_data()\nprint(data)\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||l[f]||a;return n?o.a.createElement(b,c(c({ref:t},d),{},{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},591:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/topdown_xy-cd2062ba5477b40ddcf563e336c64f5e.png"},600:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xyz-dea1a52be4324fcb935159af84571f3d.jpg"}}]);