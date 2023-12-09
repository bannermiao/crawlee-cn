"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2978],{3557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var n=r(5893),s=r(1151),a=r(5316),i=r(4959);const l={code:"import { CheerioCrawler } from 'crawlee';\n\n// Create a CheerioCrawler\nconst crawler = new CheerioCrawler({\n    // Limits the crawler to only 10 requests (do not use if you want to crawl all links)\n    maxRequestsPerCrawl: 10,\n    // Function called for each URL\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add some links from page to the crawler's RequestQueue\n        await enqueueLinks({\n            globs: ['http?(s)://crawlee.dev/*/*'],\n        });\n    },\n});\n\n// Define the starting URL\nawait crawler.addRequests(['https://crawlee.dev']);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},o={id:"crawl-some-links",title:"Crawl some links on a website"},c=void 0,p={id:"examples/crawl-some-links",title:"Crawl some links on a website",description:"This CheerioCrawler example uses the globs property in the enqueueLinks() method to only add links to the RequestQueue queue if they match the specified pattern.",source:"@site/../docs/examples/crawl_some_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-some-links",permalink:"/crawlee-cn/docs/next/examples/crawl-some-links",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"crawl-some-links",title:"Crawl some links on a website"},sidebar:"docs",previous:{title:"Crawl a sitemap",permalink:"/crawlee-cn/docs/next/examples/crawl-sitemap"},next:{title:"Using puppeteer-extra and playwright-extra",permalink:"/crawlee-cn/docs/next/examples/crawler-plugins/"}},d={},h=[];function u(e){const t={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This ",(0,n.jsx)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,n.jsx)(t.code,{children:"CheerioCrawler"})})," example uses the ",(0,n.jsx)(i.Z,{to:"core/interface/EnqueueLinksOptions#globs",children:(0,n.jsx)(t.code,{children:"globs"})})," property in the ",(0,n.jsx)(i.Z,{to:"cheerio-crawler/interface/CheerioCrawlingContext#enqueueLinks",children:(0,n.jsx)(t.code,{children:"enqueueLinks()"})})," method to only add links to the ",(0,n.jsx)(i.Z,{to:"core/class/RequestQueue",children:(0,n.jsx)(t.code,{children:"RequestQueue"})})," queue if they match the specified pattern."]}),"\n",(0,n.jsx)(a.Z,{className:"language-js",type:"cheerio",children:l})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4959:(e,t,r)=>{r.d(t,{Z:()=>c});r(7294);var n=r(9960),s=r(4477),a=r(2263),i=r(5893),l=r(643).version.split("."),o=[l[0],l[1]].join(".");const c=function(e){var t=e.to,r=e.children,l=(0,s.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===o?(0,i.jsx)(n.default,{to:"/api/"+t,children:r}):(0,i.jsx)(n.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t,children:r})}},5316:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(3366),s=(r(7294),r(512)),a=r(3e3),i=r(9960);const l={button:"button_YBBj",container:"container_TGAW"};var o=r(5893),c=["children","actor","hash","type"],p={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const d=function(e){var t,r=e.children,d=e.actor,h=e.hash,u=e.type,m=(0,n.Z)(e,c);if(h=null!=(t=h)?t:r.hash,!r.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!h)return(0,o.jsx)(a.default,Object.assign({},m,{children:r.code}));var w="https://console.apify.com/actors/"+(null!=d?d:p[null!=u?u:"playwright"])+"?runConfig="+h+"&asrc=run_on_apify";return(0,o.jsxs)("div",{className:(0,s.Z)(l.container,"runnable-code-block"),children:[(0,o.jsxs)(i.default,{href:w,className:l.button,rel:"follow",children:["Run on",(0,o.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,o.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,o.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,o.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,o.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,o.jsx)(a.default,Object.assign({},m,{className:(0,s.Z)(l.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:r.code}))]})}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(7294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);