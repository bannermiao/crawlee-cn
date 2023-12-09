"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1633],{1247:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>h,toc:()=>d});var a=t(5893),i=t(1151),n=t(5316),s=t(4959);const l={code:"import { PlaywrightCrawler } from 'crawlee';\nimport { firefox } from 'playwright';\n\n// Create an instance of the PlaywrightCrawler class.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // Set the Firefox browser to be used by the crawler.\n        // If launcher option is not specified here,\n        // default Chromium browser will be used.\n        launcher: firefox,\n    },\n    async requestHandler({ request, page, log }) {\n        const pageTitle = await page.title();\n\n        log.info(`URL: ${request.loadedUrl} | Page title: ${pageTitle}`);\n    },\n});\n\nawait crawler.addRequests(['https://example.com']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n",hash:"invalid-token"},o={id:"playwright-crawler-firefox",title:"Using Firefox browser with Playwright crawler"},c=void 0,h={id:"examples/playwright-crawler-firefox",title:"Using Firefox browser with Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler with headless Firefox browser.",source:"@site/versioned_docs/version-3.6/examples/playwright_crawler_firefox.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler-firefox",permalink:"/docs/examples/playwright-crawler-firefox",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"playwright-crawler-firefox",title:"Using Firefox browser with Playwright crawler"},sidebar:"docs",previous:{title:"Playwright crawler",permalink:"/docs/examples/playwright-crawler"},next:{title:"Capture a screenshot using Puppeteer",permalink:"/docs/examples/capture-screenshot"}},p={},d=[];function w(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["This example demonstrates how to use ",(0,a.jsx)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(r.code,{children:"PlaywrightCrawler"})})," with headless Firefox browser."]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,a.jsx)(r.code,{children:"apify/actor-node-playwright-firefox"})," image for your Dockerfile."]})}),"\n",(0,a.jsx)(n.Z,{className:"language-js",children:l}),"\n",(0,a.jsxs)(r.p,{children:["To see a real-world example of how to use ",(0,a.jsx)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(r.code,{children:"PlaywrightCrawler"})})," in combination with ",(0,a.jsx)(s.Z,{to:"core/class/RequestQueue",children:(0,a.jsx)(r.code,{children:"RequestQueue"})})," to recursively scrape the ",(0,a.jsx)(r.a,{href:"https://news.ycombinator.com",target:"_blank",rel:"noopener",children:"Hacker News website"})," check out the ",(0,a.jsx)(r.a,{href:"./playwright-crawler",children:(0,a.jsx)(r.code,{children:"Playwright\xa0crawler\xa0example"})}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(w,{...e})}):w(e)}},4959:(e,r,t)=>{t.d(r,{Z:()=>c});t(7294);var a=t(9960),i=t(4477),n=t(2263),s=t(5893),l=t(643).version.split("."),o=[l[0],l[1]].join(".");const c=function(e){var r=e.to,t=e.children,l=(0,i.E)();return(0,n.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===o?(0,s.jsx)(a.default,{to:"/api/"+r,children:t}):(0,s.jsx)(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+r,children:t})}},5316:(e,r,t)=>{t.d(r,{Z:()=>p});var a=t(3366),i=(t(7294),t(512)),n=t(3e3),s=t(9960);const l={button:"button_YBBj",container:"container_TGAW"};var o=t(5893),c=["children","actor","hash","type"],h={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const p=function(e){var r,t=e.children,p=e.actor,d=e.hash,w=e.type,u=(0,a.Z)(e,c);if(d=null!=(r=d)?r:t.hash,!t.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!d)return(0,o.jsx)(n.default,Object.assign({},u,{children:t.code}));var f="https://console.apify.com/actors/"+(null!=p?p:h[null!=w?w:"playwright"])+"?runConfig="+d+"&asrc=run_on_apify";return(0,o.jsxs)("div",{className:(0,i.Z)(l.container,"runnable-code-block"),children:[(0,o.jsxs)(s.default,{href:f,className:l.button,rel:"follow",children:["Run on",(0,o.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,o.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,o.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,o.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,o.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,o.jsx)(n.default,Object.assign({},u,{className:(0,i.Z)(l.codeBlock,"code-block",null!=u.title?"has-title":"no-title"),children:t.code}))]})}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>s});var a=t(7294);const i={},n=a.createContext(i);function s(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:r},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);