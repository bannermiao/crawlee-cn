"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1110],{5150:(e,t,r)=>{var n=r(5192),a=r(4091),s=r(5893),i=[];e.exports=function(e){var t,r=e.changelog,o=e.route;return s.jsx(a,{heading:"Changelog",pageMetadata:s.jsx(n.PageMetadata,{description:r.contentTitle,title:"Changelog | API"}),route:o,toc:null!=(t=r.toc)?t:i,children:s.jsx("section",{className:"tsd-readme",children:s.jsx(r,{})})})}},3660:(e,t,r)=>{var n=r(7294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=n},4091:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=r(5192),o=r(1310),c=r(4966),l=r(4364),u=r(2503),d=r(5042),m=r(9407),f=r(9286),p=r(6109),j=r(5845),b=r(7850),g=r(5893),h=function(e){return e&&e.__esModule?e:{default:e}},x=h(o),v=h(c),y=h(l),O=h(u),w=h(d),C=h(m),N=h(f);e.exports=function(e){var t,r,n=e.children,s=e.heading,o=e.pageMetadata,c=e.pagingMetadata,l=e.toc,u=i.useWindowSize(),d=p.useBreadcrumbs(),m=l.length>0,f=m&&("desktop"===u||"ssr"===u);return g.jsxs(g.Fragment,{children:[o,g.jsxs("div",{className:"row",children:[g.jsxs("div",{className:"col apiItemCol",children:[g.jsx(b.VersionBanner,{}),g.jsxs("div",{className:"apiItemContainer",children:[g.jsxs("article",{children:[d&&g.jsx(x.default,{}),g.jsx(y.default,{}),m&&g.jsx(N.default,{className:(null!=(t=i.ThemeClassNames.docs.docTocMobile)?t:"")+" apiTocMobile",maxHeadingLevel:6,minHeadingLevel:1,toc:l}),g.jsxs("div",{className:(null!=(r=i.ThemeClassNames.docs.docMarkdown)?r:"")+" markdown",children:[g.jsx("header",{children:g.jsx(O.default,{as:"h1",children:s})}),g.jsx(w.default,{children:n})]}),g.jsx(j.Footer,{})]}),c&&g.jsx(v.default,a({},c))]})]}),f&&g.jsx("div",{className:"col col--3",children:g.jsx(C.default,{className:i.ThemeClassNames.docs.docTocDesktop,maxHeadingLevel:6,minHeadingLevel:1,toc:l})})]})]})}},6109:(e,t,r)=>{var n=r(7294),a=r(3660);t.useBreadcrumbs=function(){return n.useContext(a.ApiDataContext).options.breadcrumbs}}}]);