(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(380)),c=["components"],a={custom_edit_url:null,id:"flip",title:"flip()"},p={unversionedId:"codrone-edu/python/Flight-Commands-Movement/flip",id:"codrone-edu/python/Flight-Commands-Movement/flip",isDocsHomePage:!1,title:"flip()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/01-flip.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/flip",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/flip",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,id:"flip",title:"flip()"},sidebar:"codroneEduSideBar",previous:{title:"takeoff()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/take-off"},next:{title:"fly_sequence()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/fly-sequence"}},l=[],d={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function makes the drone do a flip in one of four directions: ",Object(i.b)("strong",{parentName:"p"},"forward"),", ",Object(i.b)("strong",{parentName:"p"},"backward"),", ",Object(i.b)("strong",{parentName:"p"},"left"),", or ",Object(i.b)("strong",{parentName:"p"},"right"),". It's recommended that you wait a few seconds in between successive flips, otherwise the sequence may not appear as expected."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"flip(direction)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"direction"),": Direction.FORWARD, Direction.BACKWARD, Direction.LEFT, Direction.RIGHT"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\nfrom CoDrone_mini import Direction\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.flip(Direction.FORWARD)   \ntime.sleep(3) # recommended wait time between flips\ndrone.flip(Direction.LEFT)  \ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},380:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?o.a.createElement(f,a(a({ref:n},l),{},{components:t})):o.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);