(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),o=(t(0),t(377)),l=["components"],a={custom_edit_url:null,title:"funnel_align()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"funnel_align()"},u={unversionedId:"zumi/python/Driving/funnel-align",id:"zumi/python/Driving/funnel-align",isDocsHomePage:!1,title:"funnel_align()",description:"Description",source:"@site/docs/zumi/python/03-Driving/09-funnel-align.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/funnel-align",permalink:"/doc-v2/docs/zumi/python/Driving/funnel-align",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{custom_edit_url:null,title:"funnel_align()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"funnel_align()"},sidebar:"someSidebar",previous:{title:"forward()",permalink:"/doc-v2/docs/zumi/python/Driving/forward"},next:{title:"go_reverse()",permalink:"/doc-v2/docs/zumi/python/Driving/go-reverse"}},c=[],p={toc:c};function b(e){var n=e.components,t=Object(i.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Zumi will try to align to the funnel piece on the competition field (Click ",Object(o.b)("a",{parentName:"p",href:"https://learn.robolink.com/wp-content/uploads/2021/06/current_funnel.pdf"},"here")," for a PDF version)."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"funnel_align(speed=20, duration=1.0)"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"funnel_align(speed=20, duration=1, angle=None, angle_adj=2, l_th=100, r_th=100)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"speed: Positive integer value for speed between 0 and 80",Object(o.b)("br",null),"\nduration: Number of seconds Zumi will try to align to the funnel piece",Object(o.b)("br",null),"\nangle: Heading or desired angle (Default to None which is Zumi's current heading)",Object(o.b)("br",null),"\nangle_adj: The number of degrees Zumi will turn if one IR sensor detects white",Object(o.b)("br",null),"\nl_th: threshold of the bottom left IR sensor",Object(o.b)("br",null),"\nr_th: threshold of the bottom right IR sensor",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\n\nzumi = Zumi()\n\nzumi.funnel_align(speed=10,duration=3,angle_adj=1.1)\n\n")))}b.isMDXComponent=!0},377:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,f=b["".concat(l,".").concat(d)]||b[d]||s[d]||o;return t?i.a.createElement(f,a(a({ref:n},c),{},{components:t})):i.a.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);