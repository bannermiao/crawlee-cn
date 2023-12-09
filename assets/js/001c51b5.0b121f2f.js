"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1951],{8309:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>w});var a=t(5893),n=t(1151),l=t(5488),s=t(5162),i=t(5316),o=t(4959);const c={code:"import { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},u={code:"import { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},d={code:"import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},p={id:"crawl-sitemap",title:"Crawl a sitemap"},h=void 0,f={id:"examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap, by using the downloadListOfUrls utility method provided by the @crawlee/utils module.",source:"@site/../docs/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/docs/next/examples/crawl-sitemap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/docs/next/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/docs/next/examples/crawl-some-links"}},m={},w=[];function v(e){const r={admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["This example downloads and crawls the URLs from a sitemap, by using the ",(0,a.jsx)(o.Z,{to:"utils/function/downloadListOfUrls",children:(0,a.jsx)(r.code,{children:"downloadListOfUrls"})})," utility method provided by the ",(0,a.jsx)(o.Z,{to:"utils",children:(0,a.jsx)(r.code,{children:"@crawlee/utils"})})," module."]}),"\n",(0,a.jsxs)(l.Z,{groupId:"crawler-type",children:[(0,a.jsx)(s.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,children:(0,a.jsx)(i.Z,{className:"language-js",type:"cheerio",children:c})}),(0,a.jsxs)(s.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",children:[(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,a.jsx)(r.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,a.jsx)(i.Z,{className:"language-js",type:"puppeteer",children:u})]}),(0,a.jsxs)(s.Z,{value:"playwright_crawler",label:"Playwright Crawler",children:[(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,a.jsx)(r.code,{children:"apify/actor-node-playwright-chrome"})," image for your Dockerfile."]})}),(0,a.jsx)(i.Z,{className:"language-js",type:"playwright",children:d})]})]})]})}function b(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>s});t(7294);var a=t(512);const n={tabItem:"tabItem_Ymn6"};var l=t(5893);function s(e){var r=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,s),hidden:t,children:r})}},5488:(e,r,t)=>{t.d(r,{Z:()=>h});var a=t(7294),n=t(512),l=t(2466),s=t(989),i=t(2389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=t(5893);function u(e){var r=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,u=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,t=u.indexOf(r),n=i[t].value;n!==a&&(d(r),s(n))},h=function(e){var r,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,n=u.indexOf(e.currentTarget)+1;t=null!=(a=u[n])?a:u[0];break;case"ArrowLeft":var l,s=u.indexOf(e.currentTarget)-1;t=null!=(l=u[s])?l:u[u.length-1]}null==(r=t)||r.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:i.map((function(e){var r=e.value,t=e.label,l=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:function(e){return u.push(e)},onKeyDown:h,onClick:p},l,{className:(0,n.Z)("tabs__item",o.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===r}),children:null!=t?t:r}),r)}))})}function d(e){var r=e.lazy,t=e.children,n=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var s=l.find((function(e){return e.props.value===n}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})}))})}function p(e){var r=(0,s.Y)(e);return(0,c.jsxs)("div",{className:(0,n.Z)("tabs-container",o.tabList),children:[(0,c.jsx)(u,Object.assign({},e,r)),(0,c.jsx)(d,Object.assign({},e,r))]})}function h(e){var r=(0,i.Z)();return(0,c.jsx)(p,Object.assign({},e,{children:(0,s.h)(e.children)}),String(r))}},989:(e,r,t)=>{t.d(r,{Y:()=>h,h:()=>c});var a=t(7294),n=t(6550),l=t(469),s=t(1980),i=t(7392),o=t(12);function c(e){var r,t;return null!=(r=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function u(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,i.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function d(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,t=void 0!==r&&r,l=e.groupId,i=(0,n.k6)(),o=function(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:l});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var r=new URLSearchParams(i.location.search);r.set(o,e),i.replace(Object.assign({},i.location,{search:r.toString()}))}}),[o,i])]}function h(e){var r,t,n,s,i=e.defaultValue,c=e.queryString,h=void 0!==c&&c,f=e.groupId,m=u(e),w=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var n=null!=(r=a.find((function(e){return e.default})))?r:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:m})})),v=w[0],b=w[1],g=p({queryString:h,groupId:f}),y=g[0],x=g[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),t=(0,o.Nk)(r),n=t[0],s=t[1],[n,(0,a.useCallback)((function(e){r&&s.set(e)}),[r,s])]),k=j[0],C=j[1],Z=function(){var e=null!=y?y:k;return d({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){Z&&b(Z)}),[Z]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),C(e)}),[x,C,m]),tabValues:m}}},4959:(e,r,t)=>{t.d(r,{Z:()=>c});t(7294);var a=t(9960),n=t(4477),l=t(2263),s=t(5893),i=t(643).version.split("."),o=[i[0],i[1]].join(".");const c=function(e){var r=e.to,t=e.children,i=(0,n.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===o?(0,s.jsx)(a.default,{to:"/api/"+r,children:t}):(0,s.jsx)(a.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+r,children:t})}},5316:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(3366),n=(t(7294),t(512)),l=t(3e3),s=t(9960);const i={button:"button_YBBj",container:"container_TGAW"};var o=t(5893),c=["children","actor","hash","type"],u={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const d=function(e){var r,t=e.children,d=e.actor,p=e.hash,h=e.type,f=(0,a.Z)(e,c);if(p=null!=(r=p)?r:t.hash,!t.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!p)return(0,o.jsx)(l.default,Object.assign({},f,{children:t.code}));var m="https://console.apify.com/actors/"+(null!=d?d:u[null!=h?h:"playwright"])+"?runConfig="+p+"&asrc=run_on_apify";return(0,o.jsxs)("div",{className:(0,n.Z)(i.container,"runnable-code-block"),children:[(0,o.jsxs)(s.default,{href:m,className:i.button,rel:"follow",children:["Run on",(0,o.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,o.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,o.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,o.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,o.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,o.jsx)(l.default,Object.assign({},f,{className:(0,n.Z)(i.codeBlock,"code-block",null!=f.title?"has-title":"no-title"),children:t.code}))]})}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var a=t(7294);const n={},l=a.createContext(n);function s(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(l.Provider,{value:r},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);