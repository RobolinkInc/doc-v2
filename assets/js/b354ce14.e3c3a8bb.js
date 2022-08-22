(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(452)),a=["components"],c={custom_edit_url:null,id:"01-emergency-stop",title:"emergency_stop()"},p={unversionedId:"codrone-mini/python/Flight-Commands-Start-Stop/01-emergency-stop",id:"codrone-mini/python/Flight-Commands-Start-Stop/01-emergency-stop",isDocsHomePage:!1,title:"emergency_stop()",description:"Description",source:"@site/docs/codrone-mini/python/02-Flight-Commands-Start-Stop/01-emergency-stop.md",sourceDirName:"codrone-mini/python/02-Flight-Commands-Start-Stop",slug:"/codrone-mini/python/Flight-Commands-Start-Stop/01-emergency-stop",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/01-emergency-stop",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,id:"01-emergency-stop",title:"emergency_stop()"},sidebar:"cdmSideBar",previous:{title:"pair()",permalink:"/docs/codrone-mini/python/Connection/01-pair"},next:{title:"headless_off()",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/headless-off"}},m=[],l={toc:m};function s(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. ",Object(i.b)("strong",{parentName:"p"},"NOTE:")," If you want to take off and emergency stop, it is recommended to run a ",Object(i.b)("inlineCode",{parentName:"p"},"hover()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"time.sleep()")," in between the ",Object(i.b)("inlineCode",{parentName:"p"},"takeoff()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"emergency_stop()"),", because the CoDrone Mini might miss the emergency_stop() command."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"emergency_stop()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\ndrone.hover(3) #Recommended to have a hover() or time.sleep(1) before landing\ndrone.emergency_stop()\ndrone.close()\n")))}s.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),l=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,b=s["".concat(a,".").concat(u)]||s[u]||d[u]||i;return n?o.a.createElement(b,c(c({ref:t},m),{},{components:n})):o.a.createElement(b,c({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var m=2;m<i;m++)a[m]=n[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);