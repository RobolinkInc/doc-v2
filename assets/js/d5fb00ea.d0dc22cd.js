(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{286:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),a=(r(0),r(339)),l=["components"],i={custom_edit_url:null,title:"arm_pattern()",taxonomy:{category:["LED"],tag:["codrone-library"]},menu:"arm_pattern() / armPattern()",tag:"codrone-library"},c={unversionedId:"codrone-pro/led/arm-pattern",id:"codrone-pro/led/arm-pattern",isDocsHomePage:!1,title:"arm_pattern()",description:"Description",source:"@site/docs/codrone-pro/07-led/05-arm-pattern.md",sourceDirName:"codrone-pro/07-led",slug:"/codrone-pro/led/arm-pattern",permalink:"/doc-v2/docs/codrone-pro/led/arm-pattern",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"arm_pattern()",taxonomy:{category:["LED"],tag:["codrone-library"]},menu:"arm_pattern() / armPattern()",tag:"codrone-library"},sidebar:"codroneProSideBar",previous:{title:"arm_off()",permalink:"/doc-v2/docs/codrone-pro/led/arm-off"},next:{title:"arm_strobe()",permalink:"/doc-v2/docs/codrone-pro/led/arm-strobe"}},u=[],d={toc:u};function p(e){var n=e.components,r=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function sets the color of the arm LED lights to flash in a particular pre-set pattern at a given speed."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"arm_pattern(color, mode)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"arm_pattern(color, mode, speed)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"arm_pattern(red, green, blue, mode)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"arm_pattern(red, green, blue, mode, speed)"),Object(a.b)("br",null)),Object(a.b)("p",null,"Arduino:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"armPattern(color, mode)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"armPattern(color, mode, speed)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"armPattern(red, green, blue, mode)"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"armPattern(red, green, blue, mode, speed)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"color"),': an enum, which can be set using predefined colors out of the list below in "Example Code" under "LED Color Options" ',Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"red:")," int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"green"),": int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"blue"),": int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"mode"),": an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING, PULSE, REVERSE_PULSE",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"speed"),": int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.",Object(a.b)("br",null)),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\nfrom CoDrone import Mode, Color\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\ndrone.arm_pattern(Color.Red, Mode.DOUBLE_BLINK, 200)        # Set arms to double blink red slowly using Color\ndrone.arm_pattern(0, 100, 0, Mode.PULSE, 200)               # Set arms to pulse green slowly using RGB\ndrone.close()\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n//open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.armPattern(Red, DOUBLE_BLINK, 200);                 // Set arms to double blink red slowly using Color\n    CoDrone.armPattern(0, 0, 255, PULSE, 200);                  // Set arms to pulse blue slowly using RGB\n}\n\nvoid loop(){\n\n}\n")),Object(a.b)("h6",{id:"led-color-options"},"LED Color options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"    AliceBlue, AntiqueWhite, Aqua,\n    Aquamarine, Azure, Beige,\n    Bisque, Black, BlanchedAlmond,\n    Blue, BlueViolet, Brown,\n    BurlyWood, CadetBlue, Chartreuse,\n    Chocolate, Coral, CornflowerBlue,\n    Cornsilk, Crimson, Cyan,\n    DarkBlue, DarkCyan, DarkGoldenRod,\n    DarkGray, DarkGreen, DarkKhaki,\n    DarkMagenta, DarkOliveGreen, DarkOrange,\n    DarkOrchid, DarkRed, DarkSalmon,\n    DarkSeaGreen, DarkSlateBlue, DarkSlateGray,\n    DarkTurquoise, DarkViolet, DeepPink,\n    DeepSkyBlue, DimGray, DodgerBlue,\n    FireBrick, FloralWhite, ForestGreen,\n    Fuchsia, Gainsboro, GhostWhite,\n    Gold, GoldenRod, Gray,\n    Green, GreenYellow, HoneyDew,\n    HotPink, IndianRed, Indigo,\n    Ivory, Khaki, Lavender,\n    LavenderBlush, LawnGreen, LemonChiffon,\n    LightBlue, LightCoral, LightCyan,\n    LightGoldenRodYellow, LightGray, LightGreen,\n    LightPink, LightSalmon, LightSeaGreen,\n    LightSkyBlue, LightSlateGray, LightSteelBlue,\n    LightYellow, Lime, LimeGreen,\n    Linen, Magenta, Maroon,\n    MediumAquaMarine, MediumBlue, MediumOrchid,\n    MediumPurple, MediumSeaGreen, MediumSlateBlue,\n    MediumSpringGreen, MediumTurquoise, MediumVioletRed,\n    MidnightBlue, MintCream, MistyRose,\n    Moccasin, NavajoWhite, Navy,\n    OldLace, Olive, OliveDrab,\n    Orange, OrangeRed, Orchid,\n    PaleGoldenRod, PaleGreen, PaleTurquoise,\n    PaleVioletRed, PapayaWhip, PeachPuff,\n    Peru, Pink, Plum,\n    PowderBlue, Purple, RebeccaPurple,\n    Red, RosyBrown, RoyalBlue,\n    SaddleBrown, Salmon, SandyBrown,\n    SeaGreen, SeaShell, Sienna,\n    Silver, SkyBlue, SlateBlue,\n    SlateGray, Snow, SpringGreen,\n    SteelBlue, Tan, Teal,\n    Thistle, Tomato, Turquoise,\n    Violet, Wheat, White,\n    WhiteSmoke, Yellow, YellowGreen,\n    EndOfColor\n")))}p.isMDXComponent=!0},339:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return s}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=t,s=p["".concat(l,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(s,i(i({ref:n},u),{},{components:r})):o.a.createElement(s,i({ref:n},u))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);