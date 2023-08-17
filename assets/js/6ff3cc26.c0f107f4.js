(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{323:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(644)),l=["components"],c={custom_edit_url:null,id:"35-get_error_data()",title:"get_error_data()"},i={unversionedId:"codrone-edu/python/Sensors/35-get_error_data()",id:"codrone-edu/python/Sensors/35-get_error_data()",isDocsHomePage:!1,title:"get_error_data()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/35-get_error_data.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/35-get_error_data()",permalink:"/docs/codrone-edu/python/Sensors/35-get_error_data()",editUrl:null,version:"current",sidebarPosition:35,frontMatter:{custom_edit_url:null,id:"35-get_error_data()",title:"get_error_data()"},sidebar:"codroneEduSideBar",previous:{title:"get_sensor_data()",permalink:"/docs/codrone-edu/python/Sensors/24-get_sensor_data"},next:{title:"down_arrow_pressed()",permalink:"/docs/codrone-edu/python/Controller/01-down_arrow_pressed"}},s=[],p={toc:s};function u(e){var r=e.components,t=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This command requests if the drone is in an error state. One or more of the following error states can be printed to console."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Motion_Calibrating")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Drone is calibrating")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Motion_NoAnswer")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Gyroscope Accelerometer is unresponsive and may be damaged.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Motion_WrongValue")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Gyroscope Accelerometer is giving erroneous data")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Motion_NotCalibrated")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Gyroscope Accelerometer is not calibrated")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Pressure_NoAnswer")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Barometer is unresponsive")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Pressure_WrongValue")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Barometer is giving erroneous data")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"RangeGround_NoAnswer")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Bottom Range sensor is unresponsive")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"RangeGround_WrongValue")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Bottom range sensor has given an incorrect value")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Flow_NoAnswer")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Optical flow sensor is unresponsive ")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Flow_CannotRecognizeGroundImage")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Optical flow sensor is giving erroneous data due to the image.")),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_error_data()"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"get_error_data(delay)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"delay:")," The delay in seconds that the command will wait for a response. The default value is 0.1."),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"error state:")," String of one or more error messages"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("p",null,"Turn the drone left and right on a flat surface while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom time import sleep\nfrom codrone_edu.drone import *\nfrom codrone_edu.protocol import *\n\ndrone = Drone()\ndrone.pair()\n\n# For demonstration purposes, activate motion calibration\ndrone.sendCommand(CommandType.ClearBias)\nsleep(0.1)\nfor i in range(10):\n    drone.get_error_data() # see motion error state during calibration\n    time.sleep(0.5)\ndrone.close()\n\n\n")))}u.isMDXComponent=!0},644:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,c(c({ref:r},s),{},{components:t})):o.a.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);