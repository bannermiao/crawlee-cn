"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[284],{162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>v,frontMatter:()=>h,metadata:()=>d,toc:()=>m});var n=r(5893),a=r(1151),l=r(5488),i=r(5162),o=r(5316);const u={code:"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, $, log }) {\n        const title = $('title').text();\n        log.info(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n",hash:"invalid-token"},s={code:"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request, page, log }) {\n        const title = await page.title();\n        log.info(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n",hash:"invalid-token"},c={code:"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request, page, log }) {\n        const title = await page.title();\n        log.info(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n",hash:"invalid-token"},h={id:"crawl-multiple-urls",title:"Crawl multiple URLs"},p=void 0,d={id:"examples/crawl-multiple-urls",title:"Crawl multiple URLs",description:"This example crawls the specified list of URLs.",source:"@site/../docs/examples/crawl_multiple_urls.mdx",sourceDirName:"examples",slug:"/examples/crawl-multiple-urls",permalink:"/docs/next/examples/crawl-multiple-urls",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"crawl-multiple-urls",title:"Crawl multiple URLs"},sidebar:"docs",previous:{title:"Crawl all links on a website",permalink:"/docs/next/examples/crawl-all-links"},next:{title:"Crawl a website with relative links",permalink:"/docs/next/examples/crawl-relative-links"}},f={},m=[];function w(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This example crawls the specified list of URLs."}),"\n",(0,n.jsxs)(l.Z,{groupId:"crawler-type",children:[(0,n.jsx)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,children:(0,n.jsx)(o.Z,{className:"language-js",type:"cheerio",children:u})}),(0,n.jsxs)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",children:[(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,n.jsx)(t.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,n.jsx)(o.Z,{className:"language-js",type:"puppeteer",children:s})]}),(0,n.jsxs)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",children:[(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,n.jsx)(t.code,{children:"apify/actor-node-playwright-chrome"})," image for your Dockerfile."]})}),(0,n.jsx)(o.Z,{className:"language-js",type:"playwright",children:c})]})]})]})}function v(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(512);const a={tabItem:"tabItem_Ymn6"};var l=r(5893);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),a=r(512),l=r(2466),i=r(989),o=r(2389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var s=r(5893);function c(e){var t=e.className,r=e.block,n=e.selectedValue,i=e.selectValue,o=e.tabValues,c=[],h=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),a=o[r].value;a!==n&&(h(t),i(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;r=null!=(l=c[i])?l:c[c.length-1]}null==(t=r)||t.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((function(e){var t=e.value,r=e.label,l=e.attributes;return(0,s.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},l,{className:(0,a.Z)("tabs__item",u.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function h(e){var t=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function p(e){var t=(0,i.Y)(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",u.tabList),children:[(0,s.jsx)(c,Object.assign({},e,t)),(0,s.jsx)(h,Object.assign({},e,t))]})}function d(e){var t=(0,o.Z)();return(0,s.jsx)(p,Object.assign({},e,{children:(0,i.h)(e.children)}),String(t))}},989:(e,t,r)=>{r.d(t,{Y:()=>d,h:()=>s});var n=r(7294),a=r(6550),l=r(469),i=r(1980),o=r(7392),u=r(12);function s(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function c(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return s(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,l=e.groupId,o=(0,a.k6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:l});return[(0,i._X)(u),(0,n.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function d(e){var t,r,a,i,o=e.defaultValue,s=e.queryString,d=void 0!==s&&s,f=e.groupId,m=c(e),w=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),v=w[0],g=w[1],b=p({queryString:d,groupId:f}),x=b[0],y=b[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,u.Nk)(t),a=r[0],i=r[1],[a,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=j[0],C=j[1],Z=function(){var e=null!=x?x:k;return h({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){Z&&g(Z)}),[Z]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,m]),tabValues:m}}},5316:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(3366),a=(r(7294),r(512)),l=r(3e3),i=r(9960);const o={button:"button_YBBj",container:"container_TGAW"};var u=r(5893),s=["children","actor","hash","type"],c={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const h=function(e){var t,r=e.children,h=e.actor,p=e.hash,d=e.type,f=(0,n.Z)(e,s);if(p=null!=(t=p)?t:r.hash,!r.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!p)return(0,u.jsx)(l.default,Object.assign({},f,{children:r.code}));var m="https://console.apify.com/actors/"+(null!=h?h:c[null!=d?d:"playwright"])+"?runConfig="+p+"&asrc=run_on_apify";return(0,u.jsxs)("div",{className:(0,a.Z)(o.container,"runnable-code-block"),children:[(0,u.jsxs)(i.default,{href:m,className:o.button,rel:"follow",children:["Run on",(0,u.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,u.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,u.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,u.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,u.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,u.jsx)(l.default,Object.assign({},f,{className:(0,a.Z)(o.codeBlock,"code-block",null!=f.title?"has-title":"no-title"),children:r.code}))]})}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(7294);const a={},l=n.createContext(a);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);