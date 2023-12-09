"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5721],{8688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>w,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var r=a(5893),n=a(1151),s=a(5316),i=a(4959);const o={code:"import { Dataset, PlaywrightCrawler } from 'crawlee';\n\n// Create an instance of the PlaywrightCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Playwright.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // Here you can set options that are passed to the playwright .launch() function.\n        launchOptions: {\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Playwright scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with a lot of properties,\n    // the most important being:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Playwright's Page object (see https://playwright.dev/docs/api/class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Playwright within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.info(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n",hash:"invalid-token"},l={id:"playwright-crawler",title:"Playwright crawler"},c=void 0,h={id:"examples/playwright-crawler",title:"Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler in combination with RequestQueue to recursively scrape the Hacker News website using headless Chrome / Playwright.",source:"@site/versioned_docs/version-3.6/examples/playwright_crawler.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler",permalink:"/docs/examples/playwright-crawler",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"playwright-crawler",title:"Playwright crawler"},sidebar:"docs",previous:{title:"Dataset Map and Reduce methods",permalink:"/docs/examples/map-and-reduce"},next:{title:"Using Firefox browser with Playwright crawler",permalink:"/docs/examples/playwright-crawler-firefox"}},p={},d=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example demonstrates how to use ",(0,r.jsx)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,r.jsx)(t.code,{children:"PlaywrightCrawler"})})," in combination with ",(0,r.jsx)(i.Z,{to:"core/class/RequestQueue",children:(0,r.jsx)(t.code,{children:"RequestQueue"})})," to recursively scrape the ",(0,r.jsx)(t.a,{href:"https://news.ycombinator.com",target:"_blank",rel:"noopener",children:"Hacker News website"})," using headless Chrome / Playwright."]}),"\n",(0,r.jsxs)(t.p,{children:["The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results are stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,r.jsx)(t.code,{children:"./storage/datasets/default"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,r.jsx)(t.code,{children:"apify/actor-node-playwright-chrome"})," image for your Dockerfile."]})}),"\n",(0,r.jsx)(s.Z,{className:"language-js",children:o})]})}function w(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4959:(e,t,a)=>{a.d(t,{Z:()=>c});a(7294);var r=a(9960),n=a(4477),s=a(2263),i=a(5893),o=a(643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,a=e.children,o=(0,n.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(r.default,{to:"/api/"+t,children:a}):(0,i.jsx)(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:a})}},5316:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(3366),n=(a(7294),a(512)),s=a(3e3),i=a(9960);const o={button:"button_YBBj",container:"container_TGAW"};var l=a(5893),c=["children","actor","hash","type"],h={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const p=function(e){var t,a=e.children,p=e.actor,d=e.hash,u=e.type,w=(0,r.Z)(e,c);if(d=null!=(t=d)?t:a.hash,!a.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!d)return(0,l.jsx)(s.default,Object.assign({},w,{children:a.code}));var m="https://console.apify.com/actors/"+(null!=p?p:h[null!=u?u:"playwright"])+"?runConfig="+d+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,n.Z)(o.container,"runnable-code-block"),children:[(0,l.jsxs)(i.default,{href:m,className:o.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(s.default,Object.assign({},w,{className:(0,n.Z)(o.codeBlock,"code-block",null!=w.title?"has-title":"no-title"),children:a.code}))]})}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var r=a(7294);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);