/*! For license information please see 2.9646c5a3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{510:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},511:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(504),o=a(505),l=a(23),i=a(61),s=a.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(n.useRef)(null),t=Object(l.useLocation)();return Object(n.useEffect)((function(){!t.hash&&e.current&&u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=a(503),f=a(536),b=a(62),v=a.n(b);var h=function(){var e,t=Object(f.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,l=Object(d.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!i||m&&a?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(v.a.announcementBarContent,(e={},e[v.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:n,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=a(3),p=a(509),O=a(16),j=a(63),E=a.n(j),k=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(E.a.toggle,E.a.dark),style:a},t)},y=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(E.a.toggle,E.a.light),style:a},t)},N=Object(n.memo)((function(e){var t=e.className,a=e.icons,o=e.checked,l=e.disabled,i=e.onChange,s=Object(n.useState)(o),u=s[0],m=s[1],d=Object(n.useState)(!1),f=d[0],b=d[1],v=Object(n.useRef)(null);return r.a.createElement("div",{className:Object(c.a)("react-toggle",t,{"react-toggle--checked":u,"react-toggle--focus":f,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},a.checked),r.a.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",{ref:v,checked:u,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)}}))})),w=function(e){var t=Object(d.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(O.default)().isClient;return r.a.createElement(N,Object(g.a)({disabled:!l,icons:{checked:r.a.createElement(k,{icon:a,style:n}),unchecked:r.a.createElement(y,{icon:c,style:o})}},e))},C=a(524),_=a(539),L=function(e){var t=Object(l.useLocation)(),a=Object(n.useState)(e),r=a[0],c=a[1],o=Object(n.useRef)(!1),i=Object(n.useState)(0),s=i[0],u=i[1],m=Object(n.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return Object(_.a)((function(t,a){var n=t.scrollY,r=a.scrollY;if(e)if(n<s)c(!0);else{if(o.current)return o.current=!1,void c(!1);r&&0===n&&c(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;r&&n>=r?c(!1):n+i<l&&c(!0)}}),[s,o]),Object(n.useEffect)((function(){e&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},S=a(540),A=a(541),T=a(7),D=a(518),I=["width","height"],x=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,c=void 0===n?20:n,o=Object(T.a)(e,I);return r.a.createElement("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},B=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function P(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,c=Object(T.a)(e,B),o=Object(O.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(d.useAlternatePageUtils)();function m(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:m(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(a,f,n),v=t?"Languages":m(l);return r.a.createElement(D.a,Object(g.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement(x,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,v)),items:b}))}var V=a(64),M=a.n(V);function U(e){return e.mobile?null:r.a.createElement("div",{className:M.a.searchWrapper},r.a.createElement(p.a,null))}var R=["type"],H={default:function(){return D.a},localeDropdown:function(){return P},search:function(){return U},docsVersion:function(){return a(562).default},docsVersionDropdown:function(){return a(563).default},doc:function(){return a(564).default}};function z(e){var t=e.type,a=Object(T.a)(e,R),n=function(e){void 0===e&&(e="default");var t=H[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var G=a(542),F=a(544),W=a(66),K=a.n(W),Y="right";var Q=function(){var e,t=Object(d.useThemeConfig)(),a=t.navbar,o=a.items,l=a.hideOnScroll,i=a.style,s=t.colorMode.disableSwitch,u=Object(n.useState)(!1),m=u[0],f=u[1],b=Object(C.a)(),v=b.isDarkTheme,h=b.setLightTheme,O=b.setDarkTheme,j=L(l),E=j.navbarRef,k=j.isNavbarVisible;Object(S.a)(m);var y=Object(n.useCallback)((function(){f(!0)}),[f]),N=Object(n.useCallback)((function(){f(!1)}),[f]),_=Object(n.useCallback)((function(e){return e.target.checked?O():h()}),[h,O]),T=Object(A.a)();Object(n.useEffect)((function(){T===A.b.desktop&&f(!1)}),[T]);var D=o.some((function(e){return"search"===e.type})),I=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:Y)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:Y)}))}}(o),x=I.leftItems,B=I.rightItems;return r.a.createElement("nav",{ref:E,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[K.a.navbarHideable]=l,e[K.a.navbarHidden]=l&&!k,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.a.createElement(F.a,null)),r.a.createElement(G.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),x.map((function(e,t){return r.a.createElement(z,Object(g.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},B.map((function(e,t){return r.a.createElement(z,Object(g.a)({},e,{key:t}))})),!s&&r.a.createElement(w,{className:K.a.displayOnlyInLargeViewport,checked:v,onChange:_}),!D&&r.a.createElement(p.a,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(G.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N}),!s&&m&&r.a.createElement(w,{checked:v,onChange:_})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(z,Object(g.a)({mobile:!0},e,{onClick:N,key:t}))})))))))},q=a(506),J=a(512),X=a(67),$=a.n(X),Z=a(543),ee=["to","href","label","prependBaseUrlToHref"];function te(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(T.a)(e,ee),l=Object(J.a)(t),i=Object(J.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(q.a,Object(g.a)({className:"footer__link-item"},a?{href:c?i:a}:{to:l},o),n)}var ae=function(e){var t=e.sources,a=e.alt;return r.a.createElement(Z.a,{className:"footer__logo",alt:a,sources:t})};var ne=function(){var e=Object(d.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,s={light:Object(J.a)(i.src),dark:Object(J.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(te,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement(q.a,{href:i.href,className:$.a.footerLogoLink},r.a.createElement(ae,{alt:i.alt,sources:s})):r.a.createElement(ae,{alt:i.alt,sources:s})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},re=a(8),ce=Object(d.createStorageSlot)("theme"),oe="light",le="dark",ie=function(e){return e===le?le:oe},se=function(e){Object(d.createStorageSlot)("theme").set(ie(e))},ue=function(){var e=Object(d.useThemeConfig)().colorMode,t=e.defaultMode,a=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(n.useState)(function(e){return re.a.canUseDOM?ie(document.documentElement.getAttribute("data-theme")):ie(e)}(t)),o=c[0],l=c[1],i=Object(n.useCallback)((function(){l(oe),se(oe)}),[]),s=Object(n.useCallback)((function(){l(le),se(le)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",ie(o))}),[o]),Object(n.useEffect)((function(){if(!a)try{var e=ce.get();null!==e&&l(ie(e))}catch(t){console.error(t)}}),[l]),Object(n.useEffect)((function(){a&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?le:oe)}))}),[]),{isDarkTheme:o===le,setLightTheme:i,setDarkTheme:s}},me=a(538);var de=function(e){var t=ue(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(me.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)};function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function be(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return fe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?fe(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var ve="docusaurus.tab.",he=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){Object(d.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return Object(n.useEffect)((function(){try{for(var e,t={},n=be(Object(d.listStorageKeys)());!(e=n()).done;){var r=e.value;if(r.startsWith(ve))t[r.substring(ve.length)]=Object(d.createStorageSlot)(r).get()}a(t)}catch(c){console.error(c)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},ge=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),pe=Object(d.createStorageSlot)("docusaurus.announcement.id"),Oe=function(){var e=Object(d.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){ge.set("true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=pe.get();"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;pe.set(t),n&&ge.set("false"),(n||"false"===ge.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},je=a(537);var Ee=function(e){var t=he(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=Oe(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(je.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function ke(e){var t=e.children;return r.a.createElement(de,null,r.a.createElement(Ee,null,r.a.createElement(d.DocsPreferredVersionContextProvider,null,t)))}var ye=a(26);function Ne(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(ye.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}var we=a(519);function Ce(){var e=Object(O.default)().i18n,t=e.defaultLocale,a=e.locales,n=Object(d.useAlternatePageUtils)();return r.a.createElement(ye.a,null,a.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function _e(e){var t=e.permalink,a=Object(O.default)().siteConfig.url,n=function(){var e=Object(O.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(J.a)(t)}(),c=t?""+a+t:n;return r.a.createElement(ye.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Le(e){var t=Object(O.default)(),a=t.siteConfig,n=a.favicon,c=a.themeConfig.metadatas,o=t.i18n,l=o.currentLocale,i=o.localeConfigs,s=e.title,u=e.description,m=e.image,f=e.keywords,b=e.searchMetadatas,v=Object(J.a)(n),h=l,p=i[l].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,null,r.a.createElement("html",{lang:h,dir:p}),n&&r.a.createElement("link",{rel:"shortcut icon",href:v})),r.a.createElement(we.a,{title:s,description:u,keywords:f,image:m}),r.a.createElement(_e,null),r.a.createElement(Ce,null),r.a.createElement(Ne,Object(g.a)({tag:d.DEFAULT_SEARCH_TAG,locale:l},b)),r.a.createElement(ye.a,null,c.map((function(e,t){return r.a.createElement("meta",Object(g.a)({key:"metadata_"+t},e))}))))}a(68);var Se=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(69);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName,o=e.pageClassName;return Se(),r.a.createElement(ke,null,r.a.createElement(Le,e),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(Q,null),r.a.createElement("div",{className:Object(c.a)(d.ThemeClassNames.wrapper.main,n,o)},t),!a&&r.a.createElement(ne,null))}},518:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(504),i=a(506),s=a(512),u=a(23),m=a(503),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["items","position","className"],b=["className"],v=["items","className","position"],h=["className"],g=["mobile"];function p(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,m=e.activeClassName,f=void 0===m?"navbar__link--active":m,b=e.prependBaseUrlToHref,v=Object(r.a)(e,d),h=Object(s.a)(c),g=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{href:b?p:l}:Object.assign({isNavLink:!0,activeClassName:f,to:h},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(g)}}:null),v),u)}function O(e){var t,a=e.items,i=e.position,s=e.className,u=Object(r.a)(e,f),m=Object(c.useRef)(null),d=Object(c.useRef)(null),v=Object(c.useState)(!1),h=v[0],g=v[1];Object(c.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]);var O=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.a.createElement("div",{ref:m,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":h})},o.a.createElement(p,Object(n.a)({className:O(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},a.map((function(e,t){var c=e.className,l=Object(r.a)(e,b);return o.a.createElement("li",{key:t},o.a.createElement(p,Object(n.a)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var n=m.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:O(c,!0)},l)))})))):o.a.createElement(p,Object(n.a)({className:O(s)},u))}function j(e){var t,a,i,s=e.items,d=e.className,f=(e.position,Object(r.a)(e,v)),b=Object(c.useRef)(null),g=Object(u.useLocation)().pathname,O=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(m.isSamePath)(e.to,g)}))))||void 0===e||e})),j=O[0],E=O[1],k=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(n.a)({className:k(d)},f)));var y=null!==(t=b.current)&&void 0!==t&&t.scrollHeight?(null===(a=b.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":j})},o.a.createElement(p,Object(n.a)({role:"button",className:k(d,!0)},f,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!==(i=f.children)&&void 0!==i?i:f.label),o.a.createElement("ul",{className:"menu__list",ref:b,style:{height:j?void 0:y}},s.map((function(e,t){var a=e.className,c=Object(r.a)(e,h);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(p,Object(n.a)({activeClassName:"menu__link--active",className:k(a)},c,{onClick:f.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,g),c=a?j:O;return o.a.createElement(c,n)}},524:function(e,t,a){"use strict";var n=a(0),r=a(538);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},536:function(e,t,a){"use strict";var n=a(0),r=a(537);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},537:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},538:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},539:function(e,t,a){"use strict";var n=a(0),r=a(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useRef)(c()),r=function(){var t=c();e&&e(t,a.current),a.current=t};Object(n.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},540:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},541:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var a=Object(n.useState)(t),o=a[0],l=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){l(t())}}),[]),o}},542:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(506),i=a(543),s=a(512),u=a(16),m=a(503),d=["imageClassName","titleClassName"];t.a=function(e){var t=Object(u.default)().isClient,a=Object(m.useThemeConfig)().navbar,c=a.title,f=a.logo,b=void 0===f?{src:""}:f,v=e.imageClassName,h=e.titleClassName,g=Object(r.a)(e,d),p=Object(s.a)(b.href||"/"),O={light:Object(s.a)(b.src),dark:Object(s.a)(b.srcDark||b.src)};return o.a.createElement(l.a,Object(n.a)({to:p},g,b.target&&{target:b.target}),b.src&&o.a.createElement(i.a,{key:t,className:v,sources:O,alt:b.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:h},c))}},543:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(504),i=a(16),s=a(524),u=a(65),m=a.n(u),d=["sources","className","alt"];t.a=function(e){var t=Object(i.default)().isClient,a=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,f=e.alt,b=void 0===f?"":f,v=Object(r.a)(e,d),h=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,h.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:b,className:Object(l.a)(m.a.themedImage,m.a["themedImage--"+e],u)},v))})))}},544:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=["width","height","className"];t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=Object(r.a)(e,l);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:s,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},562:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(518),i=a(508),s=a(503),u=["label","to","docsPluginId"];function m(e){var t,a=e.label,c=e.to,m=e.docsPluginId,d=Object(r.a)(e,u),f=Object(i.useActiveVersion)(m),b=Object(s.useDocsPreferredVersion)(m).preferredVersion,v=Object(i.useLatestVersion)(m),h=null!==(t=null!=f?f:b)&&void 0!==t?t:v,g=null!=a?a:h.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:g,to:p}))}},563:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(518),i=a(508),s=a(503),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=Object(r.a)(e,u),g=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),O=Object(i.useLatestVersion)(d),j=Object(s.useDocsPreferredVersion)(d),E=j.preferredVersion,k=j.savePreferredVersionName;var y=null!==(t=null!==(a=g.activeVersion)&&void 0!==a?a:E)&&void 0!==t?t:O,N=c?"Versions":y.label,w=c?void 0:m(y).path;return o.a.createElement(l.a,Object(n.a)({},h,{mobile:c,label:N,to:w,items:function(){var e=p.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(b,e,v);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},564:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(518),i=a(508),s=a(504),u=a(503),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,f=e.label,b=e.docsPluginId,v=Object(r.a)(e,m),h=Object(i.useActiveDocContext)(b),g=h.activeVersion,p=h.activeDoc,O=Object(u.useDocsPreferredVersion)(b).preferredVersion,j=Object(i.useLatestVersion)(b),E=null!==(t=null!=g?g:O)&&void 0!==t?t:j,k=E.docs.find((function(e){return e.id===c}));if(!k){var y=E.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+y)}return o.a.createElement(l.a,Object(n.a)({exact:!0},v,{className:Object(s.a)(v.className,(a={},a[d]=p&&p.sidebar===k.sidebar,a)),label:null!=f?f:k.id,to:k.path}))}}}]);