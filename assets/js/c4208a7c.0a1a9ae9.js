(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{263:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return b}));var o=r(3),t=r(7),l=(r(0),r(339)),a=["components"],i={custom_edit_url:null,title:"eye_color()",menu:"eye_color() / eyeColor()",tag:"codrone-library",taxonomy:null,category:"LED"},c={unversionedId:"codrone-pro/led/eye-color",id:"codrone-pro/led/eye-color",isDocsHomePage:!1,title:"eye_color()",description:"Description",source:"@site/docs/codrone-pro/07-led/07-eye-color.md",sourceDirName:"codrone-pro/07-led",slug:"/codrone-pro/led/eye-color",permalink:"/doc-v2/docs/codrone-pro/led/eye-color",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,title:"eye_color()",menu:"eye_color() / eyeColor()",tag:"codrone-library",taxonomy:null,category:"LED"},sidebar:"codroneProSideBar",previous:{title:"arm_strobe()",permalink:"/doc-v2/docs/codrone-pro/led/arm-strobe"},next:{title:"eye_default_color()",permalink:"/doc-v2/docs/codrone-pro/led/eye-default-color"}},u=[],d={toc:u};function b(e){var n=e.components,r=Object(t.a)(e,a);return Object(l.b)("wrapper",Object(o.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h5",{id:"description"},"Description"),Object(l.b)("p",null,"This function sets the LED color of the arms using RGB values and their brightness with value a from 1 - 100."),Object(l.b)("h5",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"Python:",Object(l.b)("br",null),"\n",Object(l.b)("inlineCode",{parentName:"p"},"eye_color(color, brightness)"),Object(l.b)("br",null),"\n",Object(l.b)("inlineCode",{parentName:"p"},"eye_color(red, green, blue, brightness)"),Object(l.b)("br",null)),Object(l.b)("p",null,"Arduino:",Object(l.b)("br",null),"\n",Object(l.b)("inlineCode",{parentName:"p"},"eyeColor(color, brightness)"),Object(l.b)("br",null),"\n",Object(l.b)("inlineCode",{parentName:"p"},"eyeColor(red, green, blue, brightness)"),Object(l.b)("br",null)),Object(l.b)("h5",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"color"),': an enum, which can be set using predefined colors out of the list below in "Example Code" under "LED Color Options" ',Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"red:")," int value from 0 to 255",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"green"),": int value from 0 to 255",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"blue"),": int value from 0 to 255",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"brightness"),": in value from 0 to 100, which represents the brightness of the light",Object(l.b)("br",null)),Object(l.b)("h5",{id:"returns"},"Returns"),Object(l.b)("p",null,"None"),Object(l.b)("h5",{id:"example-code"},"Example Code"),Object(l.b)("h6",{id:"python"},"Python"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\nfrom CoDrone import Color\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\ndrone.eye_color(Color.Red, 100)         # set color to red using Color\ndrone.eye_color(255, 0, 0, 100)         # set color to red using RGB\ndrone.close()\n")),Object(l.b)("h6",{id:"arduino"},"Arduino"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.eyeColor(White, 100);          // set color to red using Color \n    CoDrone.eyeColor(255, 0, 0, 100);      // set color to red using RGB\n}\n\nvoid loop(){\n\n}\n")),Object(l.b)("h6",{id:"led-color-options"},"LED Color options"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"    AliceBlue, AntiqueWhite, Aqua,\n    Aquamarine, Azure, Beige,\n    Bisque, Black, BlanchedAlmond,\n    Blue, BlueViolet, Brown,\n    BurlyWood, CadetBlue, Chartreuse,\n    Chocolate, Coral, CornflowerBlue,\n    Cornsilk, Crimson, Cyan,\n    DarkBlue, DarkCyan, DarkGoldenRod,\n    DarkGray, DarkGreen, DarkKhaki,\n    DarkMagenta, DarkOliveGreen, DarkOrange,\n    DarkOrchid, DarkRed, DarkSalmon,\n    DarkSeaGreen, DarkSlateBlue, DarkSlateGray,\n    DarkTurquoise, DarkViolet, DeepPink,\n    DeepSkyBlue, DimGray, DodgerBlue,\n    FireBrick, FloralWhite, ForestGreen,\n    Fuchsia, Gainsboro, GhostWhite,\n    Gold, GoldenRod, Gray,\n    Green, GreenYellow, HoneyDew,\n    HotPink, IndianRed, Indigo,\n    Ivory, Khaki, Lavender,\n    LavenderBlush, LawnGreen, LemonChiffon,\n    LightBlue, LightCoral, LightCyan,\n    LightGoldenRodYellow, LightGray, LightGreen,\n    LightPink, LightSalmon, LightSeaGreen,\n    LightSkyBlue, LightSlateGray, LightSteelBlue,\n    LightYellow, Lime, LimeGreen,\n    Linen, Magenta, Maroon,\n    MediumAquaMarine, MediumBlue, MediumOrchid,\n    MediumPurple, MediumSeaGreen, MediumSlateBlue,\n    MediumSpringGreen, MediumTurquoise, MediumVioletRed,\n    MidnightBlue, MintCream, MistyRose,\n    Moccasin, NavajoWhite, Navy,\n    OldLace, Olive, OliveDrab,\n    Orange, OrangeRed, Orchid,\n    PaleGoldenRod, PaleGreen, PaleTurquoise,\n    PaleVioletRed, PapayaWhip, PeachPuff,\n    Peru, Pink, Plum,\n    PowderBlue, Purple, RebeccaPurple,\n    Red, RosyBrown, RoyalBlue,\n    SaddleBrown, Salmon, SandyBrown,\n    SeaGreen, SeaShell, Sienna,\n    Silver, SkyBlue, SlateBlue,\n    SlateGray, Snow, SpringGreen,\n    SteelBlue, Tan, Teal,\n    Thistle, Tomato, Turquoise,\n    Violet, Wheat, White,\n    WhiteSmoke, Yellow, YellowGreen,\n    EndOfColor\n")))}b.isMDXComponent=!0},339:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var o=r(0),t=r.n(o);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=t.a.createContext({}),d=function(e){var n=t.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},b=function(e){var n=d(e.components);return t.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},s=t.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=d(r),s=o,m=b["".concat(a,".").concat(s)]||b[s]||p[s]||l;return r?t.a.createElement(m,i(i({ref:n},u),{},{components:r})):t.a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);