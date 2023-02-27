(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),i=(n(0),n(617)),a=["components"],c={custom_edit_url:null,title:"move_to_coordinate()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"move_to_coordinate()"},m={unversionedId:"zumi/python/Driving/move-to-coordinate",id:"zumi/python/Driving/move-to-coordinate",isDocsHomePage:!1,title:"move_to_coordinate()",description:"Description",source:"@site/docs/zumi/python/03-Driving/17-move-to-coordinate.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/move-to-coordinate",permalink:"/docs/zumi/python/Driving/move-to-coordinate",editUrl:null,version:"current",sidebarPosition:17,frontMatter:{custom_edit_url:null,title:"move_to_coordinate()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"move_to_coordinate()"},sidebar:"someSidebar",previous:{title:"move_inches()",permalink:"/docs/zumi/python/Driving/move-inches"},next:{title:"parallel_park()",permalink:"/docs/zumi/python/Driving/paralllel-park"}},u=[],l={toc:u};function s(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This method drives Zumi from an origin to an x,y position in inches. Using this function will keep track of Zumi's coordinates. To reset the origin, use the reset_coordinate() function. This method uses a best fit linear approximation of the distance traveled over time.\nIt uses the equation y = mx + b, where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"y is the distance traveled"),Object(i.b)("li",{parentName:"ul"},"m is the predicted speed in centimeters per second"),Object(i.b)("li",{parentName:"ul"},"x is the time elapsed"),Object(i.b)("li",{parentName:"ul"},"b is the slope intercept")),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"move_to_coordinate(desired_x, desired_y)"),Object(i.b)("br",null)),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-move_to_coordinate(desired_x,",metastring:'desired_y, k_p=None, k_i=None, k_d=None, units="in"):',"desired_y,":!0,k_p:"None,",k_i:"None,",k_d:"None,",units:'"in"):'},'```<br />\n\n##### Parameters\ndesired_x: The x-coordinate of the destination<br />\ndesired_y: The y-coordinate of the destination<br />\nk_p: P-gain. Default to None.<br />\nk_i: I-gain. Default to None.<br />\nk_d: D-gain. Default to None.<br />\nunits: Defaults to "in" or inches. Set it to "cm" for centimeters.<br />\n\n##### Returns\nNone\n\n##### Example Code\n###### Python Sample 1\n```python\n#Python code\nfrom zumi.zumi import Zumi\n\nzumi = Zumi()\n\n# a square\nzumi.move_to_coordinate(6,0)\nzumi.move_to_coordinate(6,6)\nzumi.move_to_coordinate(0,6)\nzumi.move_to_coordinate(0,0)\n')),Object(i.b)("h6",{id:"python-sample-2"},"Python Sample 2"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\n# Avoid this\nzumi.move_to_coordinate(10,0)\ntime.sleep(1)\n# zumi wont drive the second time since its already at (10, 0)\nzumi.move_to_coordinate(10,0)\n")),Object(i.b)("h6",{id:"python-sample-3"},"Python Sample 3"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\n# Avoid this\nzumi.move_to_coordinate(10,0)\ntime.sleep(1)\n\nzumi.reset_coordinate()\n# zumi will drive the second time since its position will be reset, and will move a total of 20 inches from the start\nzumi.move_to_coordinate(10,0)\n")))}s.isMDXComponent=!0},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,b=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(b,c(c({ref:t},u),{},{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);