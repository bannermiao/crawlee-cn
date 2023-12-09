"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1575],{1185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var a=r(5893),n=r(1151),s=r(5316),i=r(4959);const o={code:"import { Dataset, CheerioCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the CheerioCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the cheerio library.\nconst crawler = new CheerioCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - $: the cheerio object containing parsed HTML\n    async requestHandler({ request, $ }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page using cheerio.\n        const title = $('title').text();\n        const h1texts: { text: string }[] = [];\n        $('h1').each((index, el) => {\n            h1texts.push({\n                text: $(el).text(),\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n",hash:"invalid-token"},l={id:"cheerio-crawler",title:"Cheerio crawler"},c=void 0,h={id:"examples/cheerio-crawler",title:"Cheerio crawler",description:"This example demonstrates how to use CheerioCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the Cheerio library and extract some data from it: the page title and all h1 tags.",source:"@site/versioned_docs/version-3.6/examples/cheerio_crawler.mdx",sourceDirName:"examples",slug:"/examples/cheerio-crawler",permalink:"/crawlee-cn/docs/examples/cheerio-crawler",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"cheerio-crawler",title:"Cheerio crawler"},sidebar:"docs",previous:{title:"Basic crawler",permalink:"/crawlee-cn/docs/examples/basic-crawler"},next:{title:"Crawl all links on a website",permalink:"/crawlee-cn/docs/examples/crawl-all-links"}},d={},p=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example demonstrates how to use ",(0,a.jsx)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,a.jsx)(t.code,{children:"CheerioCrawler"})})," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener",children:"Cheerio library"})," and extract some data from it: the page title and all ",(0,a.jsx)(t.code,{children:"h1"})," tags."]}),"\n",(0,a.jsx)(s.Z,{className:"language-js",type:"cheerio",children:o})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},4959:(e,t,r)=>{r.d(t,{Z:()=>c});r(7294);var a=r(9960),n=r(4477),s=r(2263),i=r(5893),o=r(643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,r=e.children,o=(0,n.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(a.default,{to:"/api/"+t,children:r}):(0,i.jsx)(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},5316:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(3366),n=(r(7294),r(512)),s=r(3e3),i=r(9960);const o={button:"button_YBBj",container:"container_TGAW"};var l=r(5893),c=["children","actor","hash","type"],h={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const d=function(e){var t,r=e.children,d=e.actor,p=e.hash,u=e.type,m=(0,a.Z)(e,c);if(p=null!=(t=p)?t:r.hash,!r.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!p)return(0,l.jsx)(s.default,Object.assign({},m,{children:r.code}));var w="https://console.apify.com/actors/"+(null!=d?d:h[null!=u?u:"playwright"])+"?runConfig="+p+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,n.Z)(o.container,"runnable-code-block"),children:[(0,l.jsxs)(i.default,{href:w,className:o.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(s.default,Object.assign({},m,{className:(0,n.Z)(o.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:r.code}))]})}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(7294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);