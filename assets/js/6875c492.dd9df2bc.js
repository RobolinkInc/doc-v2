(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{306:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(655),s=t(670),c=t(648),i=t(658),o=t(647),m=t(645);function u(e){var a,t=e.tagName,r=e.count,l=(a=Object(m.usePluralForm)().selectMessage,function(e){return a(e,Object(o.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return n.a.createElement(o.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:l(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,d=a.allTagsPath,g=a.name,h=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+g+'"',description:'Blog | Tagged "'+g+'"',wrapperClassName:m.ThemeClassNames.wrapper.blogPages,pageClassName:m.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(i.a,{sidebar:r})),n.a.createElement("main",{className:"col col--7"},n.a.createElement("h1",null,n.a.createElement(u,{count:h,tagName:g})),n.a.createElement(c.a,{href:d},n.a.createElement(o.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},653:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(654),s=t.n(l),c=t(23),i=t(16);a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),o=Object(c.useHistory)(),m=Object(i.default)().siteConfig,u=(void 0===m?{}:m).baseUrl;["/codrone-edu","/codrone-edu/"].includes(o.location.pathname)&&o.replace("/");var d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(573),t.e(575)]).then(t.bind(null,663)),t.e(403).then(t.t.bind(null,662,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=u+t.url;document.createElement("a").href=r,o.push(r)}})}(e[0],e[1],e[2].default)})),a.current=!0)},g=Object(r.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:g,onBlur:g,ref:l}))}},658:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(0),n=t.n(r),l=t(646),s=t(648),c=t(57),i=t.n(c);function o(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},670:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(646),s=t(644),c=t(647),i=t(648),o=t(671),m=t(666),u=t(58),d=t.n(u),g=t(645);a.a=function(e){var a,t,r=(a=Object(g.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(c.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,h=e.frontMatter,p=e.metadata,b=e.truncated,E=e.isBlogPostPage,f=void 0!==E&&E,v=p.date,N=p.formattedDate,_=p.permalink,k=p.tags,w=p.readingTime,T=h.author,P=h.title,x=h.image,j=h.keywords,O=h.author_url||h.authorURL,y=h.author_title||h.authorTitle,M=h.author_image_url||h.authorImageURL;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{keywords:j,image:x}),n.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(t=f?"h1":"h2",n.a.createElement("header",null,n.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},f?P:n.a.createElement(i.a,{to:_},P)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:v,className:d.a.blogPostDate},N,w&&n.a.createElement(n.a.Fragment,null," \xb7 ",r(w)))),n.a.createElement("div",{className:"avatar margin-vert--md"},M&&n.a.createElement(i.a,{className:"avatar__photo-link avatar__photo",href:O},n.a.createElement("img",{src:M,alt:T})),n.a.createElement("div",{className:"avatar__intro"},T&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement(i.a,{href:O},T)),n.a.createElement("small",{className:"avatar__subtitle"},y)))))),n.a.createElement("div",{className:"markdown"},n.a.createElement(s.a,{components:o.a},u)),(k.length>0||b)&&n.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,n.a.createElement(c.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:p.permalink,"aria-label":"Read more about "+P},n.a.createElement("strong",null,n.a.createElement(c.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);