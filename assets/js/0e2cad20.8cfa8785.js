(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{512:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},A=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),A=r,b=u["".concat(c,".").concat(A)]||u[A]||f[A]||i;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=A;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},587:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABHCAYAAAByMhmyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAl7SURBVHhe7Z3LbxvXFcaPTYmkKEqmZcl62WysQo4SpWpi1K6LBKiAoAhieNdusghQ1Ci86a7oLsssmz/AKIIuslBRoIsCboCiCKBFi6oJ0rpq5KhWKqcKIustSqRYPkS591zeS86Mh+SQMyMN7e8HDDB3Hpev+e75zpkHTz0WUANSqRQlEgnVcg/6cwf6c4cf/Z1W8wAAF0BIAHgAhASAB0BIAHgAhASAB7iq2uX3Dmnrs6xq2dObjFDPxYhqlXFSNUl/laf9lbxq1SeXy1E0GlUt96A/d7Rjf6Ov9qq55uHj+dTu7m5DIRkppo9o8695OvhviR4fPaaD9aJaY098JEy9Ex00+JrzL2L9zznaWyg27BsAL4gPh2n8p3HVao2mIhJHicXfbFLmUYEOxOSEUPiUjEhd5zrp8o/65XytiMT9f/H7bUot5xz3D4BbBq/E6eovLqhW8/Dx7DhH4oP885lN2n3wv6YO8lLhMaX+k6ONexn692836cs/7ao1Zng597/5zwOICLQdjiPS0q8yUkSFTEktbR4dnaJ9HTT83aon3fhHBlEInBheRCRHQpr/9Srt/CsnLZ0XsKCiwuppiumSK4EC4IZjs3b5rSPPRMSw3ePooyeICLQ7DYXEuRGdbqqwB8AzR0Mh5feE7do/Ui0AgB0OhHRIBZHDAABq47j8DQCoDYQEgAdASAB4AIQEgAdASAB4AIQEgAcEUkgPU4tyWty6R+l8Si0FILgETkgsnq3smpzShRQtbt+jr9NfqrUABJNACYkFw+KxsiqW50s51QIgeARKSPVsHCweCDKBElKko/bt6JGQd/fsA+A1DZ/ZsP1pgVb+kDmWm+44L+IigxUW0dTgddUCwFv4fiTfn9nw9V/26cHvto7t7tX59bkn8qGRnudoVEwA+MGx3CHrVkgsisJhjnoiNo/zMghGWzdrVHrqotHtMbo5HSZaTdHdn6+phcFh6r0JSo4QZWYXafaOWmhBb1OL8r5DND2TINtxPpul+7dWaFk1W+ZGkt54O0ble61LtPXBEm1cGacXJ0NyidPXOdaHn7QCV+E4wnAJ+5PVWVMZmwXD6/SkxdMfG6KecKIycTRyA//o07dVAwSDWIxenBmjKdVsjT66/kMtIsULSRrXIjpmfBMSC4PL1ka4zaJhQVlzIS0shsWksYtkzhBf9Pv1R07gDo48d996cjJHMpFjm9anKCOXh2n4nT455w6ORNzvEs19rhZxJOLX8iLqOcQXa8dCsYrIKWzlnu9/WZa7WUStVetYROeFIFWTkWG+QElpN/jHXaZ5uUJvW7YGc6Tsgth+KxWjfhaimF9/GKFBMdoVFzbo0dnzVYE2sg/ayknE684SJQ3WbuydshUpLmQpPxmTVohf44/v7lisC2N83yLa/lIMFKN8QG9Q7prh81pso34NjRPb5nYbIm3tzO9Zoj9Xg+/OaiEr30ulbwPZkoh05mhU//1VCay1a1VEDOdNLCKOSq2JyCOE/ZAiYlIF2laznZMGETFiu/FaI6tJREy4LCIbOpWImPymOFh4X5OIGLH/zDhdv6Gaivi0ZdAYSVTsrFVETHzaG7vL/dycsU4OLNuHBZIPo451mMVQwd5N8Hd/872qWwkSnguJLVo9WByNBGJ3dUNz7NDcrQ3xXsotaUFaCPNyP7YIpqJA1aqsrJaXdJ61F8fUZbWcI4Tcp/qenqTa7+wdcSBdte6rXy9E/a9bDiYe2S39RwZY3EOUlCLS9kdMH2SJHwQdv5akMd7wRAlRzDIoSG4n1MDw5PsWSbMYSNZotvJZ1Ta3lqrbqO/DSTTyCs+FVE8kXDzgChxP9YoI4ZOMRBUKtGP3Q6xmKzZl/kE9u9tHMZneiR/6Iy1EIfCPa+xj6JcjT1QeSEJcBhHPf6QPpphp1C8+zKhBYoc2Hhqer3EjTOW/LxDie1tFDB3lakYD51QGGtNksXEtMDZQjqDFhW2a+1DOiii2Qo/UQHLmihe5lbd4LiTOa1gwdhjPBRkLClbqrfMG40ioD1oL2UOVFJsp7vpzPs1Nv9IKthMVgZcoq4XS5viSI106O2EbmYwVOF5vJ7iJcy83tH7O2KFsTYcYouhFNXu7mpt4i359oxUTlu2avQ00U6CctC0iJzLkBFOvq2hiil510LmI0SJ5GDlaQ3wHqmxdXEjZvoflzXJU7Zw8V80HbyRpWOZMJdr7e/AGDl+ExEKw2jM7cdhdW9d6ubs2Mil+n3MCfYAaEuUayb8XVKyfSP7LibilKFATYQE/se6rk2+jVWzEGq0s8EFpsHZ6apC0Oykk2G8jJlPfXCAxrtffQYEeyQqcDXdSKv+xsaSr6ardCxC+CImrbtaCgd1tEHZXdNtda9cqphxG5gRchNDnMcrwqFi7AOCSO8t0d9Zo2UTOY2rXgffVyXMFLkgsNXUgLb+7RPelmAyc9FUVsoBSLyLy71Qt5mi4/B3Eq0EYX84j8VUMdnDucykxIedZRHzFgx28jf95EgBlAnkeqV75m8XDJ2t5qiUixi56ARBkPBdSvUIBC4RP1jY6YVuAkECb4bmQwh321bhm6O+CrQPthS8RqVb52wlc/vajcgeAn/hStWMR8YWndmLiQgJf2WC3DiIC7YovQmK0mPhSIH1fEQtIX4xqXQcRgXYmUM9sAOAkeCqf2QDAcRP4W80BeFaAkADwAAgJAA+AkADwAAgJAA+AkADwAEdC6ug6peYAAHY0FFJvMkLhHvPjnAAAZhoKKXymg0JhOEAA6tFQIZHeEMUuhCg+7N+zDQBodxyFmoHvRejs5S5YPABq4EhInT2nafS1Xup7vkvYPBQeALDiOPnpf6mbnnujj4a+0wObB4CFhld/M3x1ayJRvlcov3dIax9naHM+Q0clotzOIZUKR3KdHcV0iQoZy+OgHBCOh0QkhJUE/sOBwfd/7GOMQtKwoJj0V4XKvB3rn2You1mg1BfOH2iS+GaUuofCdP4VZ/eI5HI5ikZbu7XdDvTnjnbsb/TVXjXXPK6E5JT8fonW/pamrc8OaPt+tm504iiUGO+SH6qZD+bm/dmB/tzxLPbn+wkiLp9/4wcJeukng9T/rW4Zbezg5QPf7qYX3hpwNToAcBL4LiRN5EwHTf54kC58/wwNXY1Tt/ClemILd+nNPnrlZyPUc7H8PwUAtBMNn9ngB8X0Ee0/qOZVsZEQdQ2jsADaF99zJDvQnzvQnzv86O/YrB0ATzMQEgCuIfo/qHML+t9IBW8AAAAASUVORK5CYII="},588:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone_led_off_example-7dafe5fa6bc8519bc7ab9f2d86ce8478.PNG"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(512)),c=["components"],a={custom_edit_url:null,id:"02-drone-led-off",title:"turn drone LED off"},d={unversionedId:"codrone-edu/blockly/Junior/Lights/02-drone-led-off",id:"codrone-edu/blockly/Junior/Lights/02-drone-led-off",isDocsHomePage:!1,title:"turn drone LED off",description:"Block",source:"@site/docs/codrone-edu/blockly/Junior/04-Lights/02-drone-led-off.md",sourceDirName:"codrone-edu/blockly/Junior/04-Lights",slug:"/codrone-edu/blockly/Junior/Lights/02-drone-led-off",permalink:"/docs/codrone-edu/blockly/Junior/Lights/02-drone-led-off",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-drone-led-off",title:"turn drone LED off"},sidebar:"codroneEduBlocklyJuniorSideBar",previous:{title:"set drone LED color to [color], with a brightness of [brightness]",permalink:"/docs/codrone-edu/blockly/Junior/Lights/01-set-drone-led"},next:{title:"set controller LED to [color], with a brightness of [brightness]",permalink:"/docs/codrone-edu/blockly/Junior/Lights/03-set-controller-led"}},l=[],s={toc:l};function u(e){var t=e.components,a=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"block"},"Block"),Object(i.b)("p",null,Object(i.b)("img",{alt:"drone led off block image",src:n(587).default})),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Turns the CoDrone EDU's LED off."),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("img",{alt:"drone led off example",src:n(588).default})))}u.isMDXComponent=!0}}]);