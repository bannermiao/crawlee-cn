"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2783,4368],{3394:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(7294),r=n(512),i=n(833),o=n(5281),s=n(3791),c=n(1116),l=n(5999),d=n(2730);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(5893);function b(){var e=(0,d.a)({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,m.jsx)("button",{"aria-label":(0,l.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,u.backToTopButton,t&&u.backToTopButtonShow),type:"button",onClick:n})}var p=n(1442),h=n(6550),f=n(7524),v=n(6668),x=n(1327);function j(e){return(0,m.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const g={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){var t=e.onClick;return(0,m.jsx)("button",{type:"button",title:(0,l.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,l.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t,children:(0,m.jsx)(j,{className:g.collapseSidebarButtonIcon})})}var _=n(9689),S=n(2466),y=n(3366),C=n(4353),I=n(9688),N=n(6043),T=n(8596),O=n(9960),w=n(2389),A=["item","onItemClick","activePath","level","index"];function B(e){var t=e.collapsed,n=e.categoryLabel,a=e.onClick;return(0,m.jsx)("button",{"aria-label":t?(0,l.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,l.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function Z(e){var t=e.item,n=e.onItemClick,i=e.activePath,c=e.level,l=e.index,d=(0,y.Z)(e,A),u=t.items,b=t.label,p=t.collapsible,h=t.className,f=t.href,x=(0,v.L)().docs.sidebar.autoCollapseCategories,j=function(e){var t=(0,w.Z)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.LM)(e):void 0}),[e,t])}(t),g=(0,s._F)(t,i),k=(0,T.Mg)(f,i),_=(0,N.u)({initialState:function(){return!!p&&(!g&&t.collapsed)}}),S=_.collapsed,Z=_.setCollapsed,P=(0,C.f)(),E=P.expandedItem,L=P.setExpandedItem,H=function(e){void 0===e&&(e=!S),L(e?null:l),Z(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,i=(0,I.D9)(t);(0,a.useEffect)((function(){t&&!i&&n&&r(!1)}),[t,i,n,r])}({isActive:g,collapsed:S,updateCollapsed:H}),(0,a.useEffect)((function(){p&&null!=E&&E!==l&&x&&Z(!0)}),[p,E,l,Z,x]),(0,m.jsxs)("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":S},h),children:[(0,m.jsxs)("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,m.jsx)(O.default,Object.assign({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":g}),onClick:p?function(e){null==n||n(t),f?H(!1):(e.preventDefault(),H())}:function(){null==n||n(t)},"aria-current":k?"page":void 0,"aria-expanded":p?!S:void 0,href:p?null!=j?j:"#":j},d,{children:b})),f&&p&&(0,m.jsx)(B,{collapsed:S,categoryLabel:b,onClick:function(e){e.preventDefault(),H()}})]}),(0,m.jsx)(N.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:S,children:(0,m.jsx)(K,{items:u,tabIndex:S?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var P=n(3919),E=n(9471);const L={menuExternalLink:"menuExternalLink_NmtK"};var H=["item","onItemClick","activePath","level","index"];function M(e){var t=e.item,n=e.onItemClick,a=e.activePath,i=e.level,c=(e.index,(0,y.Z)(e,H)),l=t.href,d=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,s._F)(t,a),h=(0,P.Z)(l);return(0,m.jsx)("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),children:(0,m.jsxs)(O.default,Object.assign({className:(0,r.Z)("menu__link",!h&&L.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:l},h&&{onClick:n?function(){return n(t)}:void 0},c,{children:[d,!h&&(0,m.jsx)(E.Z,{})]}))},d)}const D={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){var t=e.item,n=e.level,a=e.index,i=t.value,s=t.defaultStyle,c=t.className;return(0,m.jsx)("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),s&&[D.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}var W=["item"];function F(e){var t=e.item,n=(0,y.Z)(e,W);switch(t.type){case"category":return(0,m.jsx)(Z,Object.assign({item:t},n));case"html":return(0,m.jsx)(R,Object.assign({item:t},n));default:return(0,m.jsx)(M,Object.assign({item:t},n))}}var V=["items"];function U(e){var t=e.items,n=(0,y.Z)(e,V),a=(0,s.f)(t,n.activePath);return(0,m.jsx)(C.D,{children:a.map((function(e,t){return(0,m.jsx)(F,Object.assign({item:e,index:t},n),t)}))})}const K=(0,a.memo)(U),Y={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function z(e){var t=e.path,n=e.sidebar,i=e.className,s=function(){var e=(0,_.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,S.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return(0,m.jsx)("nav",{"aria-label":(0,l.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",Y.menu,s&&Y.menuWithAnnouncementBar,i),children:(0,m.jsx)("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(K,{items:n,activePath:t,level:1})})})}const G="sidebar_njMd",q="sidebarWithHideableNavbar_wUlq",J="sidebarHidden_VK0M",Q="sidebarLogo_isFc";function X(e){var t=e.path,n=e.sidebar,a=e.onCollapse,i=e.isHidden,o=(0,v.L)(),s=o.navbar.hideOnScroll,c=o.docs.sidebar.hideable;return(0,m.jsxs)("div",{className:(0,r.Z)(G,s&&q,i&&J),children:[s&&(0,m.jsx)(x.Z,{tabIndex:-1,className:Q}),(0,m.jsx)(z,{path:t,sidebar:n}),c&&(0,m.jsx)(k,{onClick:a})]})}const $=a.memo(X);var ee=n(3102),te=n(3163),ne=function(e){var t=e.sidebar,n=e.path,a=(0,te.e)();return(0,m.jsx)("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(K,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ae(e){return(0,m.jsx)(ee.Zo,{component:ne,props:e})}const re=a.memo(ae);function ie(e){var t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)($,Object.assign({},e)),a&&(0,m.jsx)(re,Object.assign({},e))]})}const oe={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){var t=e.toggleSidebar;return(0,m.jsx)("div",{className:oe.expandButton,title:(0,l.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,l.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(j,{className:oe.expandButtonIcon})})}const ce={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){var t,n=e.children,r=(0,c.V)();return(0,m.jsx)(a.Fragment,{children:n},null!=(t=null==r?void 0:r.name)?t:"noSidebar")}function de(e){var t=e.sidebar,n=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,s=(0,h.TH)().pathname,c=(0,a.useState)(!1),l=c[0],d=c[1],u=(0,a.useCallback)((function(){l&&d(!1),!l&&(0,p.n)()&&d(!0),i((function(e){return!e}))}),[i,l]);return(0,m.jsx)("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,ce.docSidebarContainer,n&&ce.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(ce.docSidebarContainer)&&n&&d(!0)},children:(0,m.jsx)(le,{children:(0,m.jsxs)("div",{className:(0,r.Z)(ce.sidebarViewport,l&&ce.sidebarViewportHidden),children:[(0,m.jsx)(ie,{sidebar:t,path:s,onCollapse:u,isHidden:l}),l&&(0,m.jsx)(se,{toggleSidebar:u})]})})})}const ue={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function me(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,c.V)();return(0,m.jsx)("main",{className:(0,r.Z)(ue.docMainContainer,(t||!a)&&ue.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced),children:n})})}const be={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function pe(e){var t=e.children,n=(0,c.V)(),r=(0,a.useState)(!1),i=r[0],o=r[1];return(0,m.jsxs)("div",{className:be.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:be.docRoot,children:[n&&(0,m.jsx)(de,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,m.jsx)(me,{hiddenSidebarContainer:i,children:t})]})]})}var he=n(5658);function fe(e){var t=(0,s.SN)(e);if(!t)return(0,m.jsx)(he.Z,{});var n=t.docElement,a=t.sidebarName,l=t.sidebarItems;return(0,m.jsx)(i.FG,{className:(0,r.Z)(o.k.page.docsDocPage),children:(0,m.jsx)(c.b,{name:a,items:l,children:(0,m.jsx)(pe,{children:n})})})}},5658:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(512),r=n(5999),i=n(2503),o=n(5893);function s(e){var t=e.className;return(0,o.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)(i.default,{as:"h1",className:"hero__title",children:(0,o.jsx)(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},4353:(e,t,n)=>{n.d(t,{D:()=>c,f:()=>l});var a=n(7294),r=n(9688),i=n(5893),o=Symbol("EmptyContext"),s=a.createContext(o);function c(e){var t=e.children,n=(0,a.useState)(null),r=n[0],o=n[1],c=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:o}}),[r]);return(0,i.jsx)(s.Provider,{value:c,children:t})}function l(){var e=(0,a.useContext)(s);if(e===o)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{n.d(t,{a:()=>o});var a=n(7294),r=n(2466),i=n(5936);function o(e){var t=e.threshold,n=(0,a.useState)(!1),o=n[0],s=n[1],c=(0,a.useRef)(!1),l=(0,r.Ct)(),d=l.startScroll,u=l.cancelScroll;return(0,r.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:a>=r?(u(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,i.S)((function(e){e.location.hash&&(c.current=!0,s(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}},3660:(e,t,n)=>{var a=n(7294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},6454:(e,t,n)=>{var a=["options","packages"];function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(60),n(8878);var c=n(7294),l=n(3394),d=n(3660),u=n(5893),m=function(e){return e&&e.__esModule?e:{default:e}}(l);function b(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function p(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],i=a[1];if("id"===r){var o="type"in e;(!o||o&&"reference"!==e.type)&&(t[Number(i)]=e,n&&(e.parentId=n.id))}else Array.isArray(i)?i.forEach((function(n){b(n)&&p(n,t,e)})):b(i)&&p(i,t,e)})),t}function h(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){p(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,r=s(e,a),o=c.useMemo((function(){return{options:t,reflections:h(n)}}),[t,n]);return u.jsx(d.ApiDataContext.Provider,{value:o,children:u.jsx("div",{className:"apiPage",children:u.jsx(m.default,i({},r))})})}},60:(e,t,n)=>{n.r(t)},8878:(e,t,n)=>{n.r(t)}}]);