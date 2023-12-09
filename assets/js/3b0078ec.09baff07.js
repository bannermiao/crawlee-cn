"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9132],{2436:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151),t=s(4959);const a={id:"jsdom-crawler-guide",title:"JSDOMCrawler guide",sidebar_label:"JSDOMCrawler",description:"Your first steps into the world of scraping with Crawlee"},l=void 0,o={id:"guides/jsdom-crawler-guide",title:"JSDOMCrawler guide",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.6/guides/jsdom_crawler.mdx",sourceDirName:"guides",slug:"/guides/jsdom-crawler-guide",permalink:"/docs/guides/jsdom-crawler-guide",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"jsdom-crawler-guide",title:"JSDOMCrawler guide",sidebar_label:"JSDOMCrawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Avoid getting blocked",permalink:"/docs/guides/avoid-blocking"},next:{title:"Got Scraping",permalink:"/docs/guides/got-scraping"}},c={},d=[{value:"How the crawler works",id:"how-the-crawler-works",level:2},{value:"When to use <code>JSDOMCrawler</code>",id:"when-to-use-jsdomcrawler",level:2},{value:"Example use of Element API",id:"example-use-of-element-api",level:2},{value:"Find all links on a page",id:"find-all-links-on-a-page",level:3},{value:"Other examples",id:"other-examples",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u200b",(0,n.jsx)(t.Z,{to:"jsdom-crawler/class/JSDOMCrawler",children:(0,n.jsx)(r.code,{children:"JSDOMCrawler"})})," is very useful for scraping with the Window API."]}),"\n",(0,n.jsx)(r.h2,{id:"how-the-crawler-works",children:"How the crawler works"}),"\n",(0,n.jsxs)(r.p,{children:["\u200b",(0,n.jsx)(t.Z,{to:"jsdom-crawler/class/JSDOMCrawler",children:(0,n.jsx)(r.code,{children:"JSDOMCrawler"})})," crawls by making plain HTTP requests to the provided URLs using the specialized ",(0,n.jsx)(r.a,{href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener",children:"got-scraping"})," HTTP client. The URLs are fed to the crawler using ",(0,n.jsx)(t.Z,{to:"core/class/RequestQueue",children:(0,n.jsx)(r.code,{children:"RequestQueue"})}),". The HTTP responses it gets back are usually HTML pages. The same pages you would get in your browser when you first load a URL. But it can handle any content types with the help of the ",(0,n.jsx)(t.Z,{to:"jsdom-crawler/interface/JSDOMCrawlerOptions#additionalMimeTypes",children:(0,n.jsx)(r.code,{children:"additionalMimeTypes"})})," option."]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["Modern web pages often do not serve all of their content in the first HTML response, but rather the first HTML contains links to other resources such as CSS and JavaScript that get downloaded afterwards, and together they create the final page. To crawl those, see ",(0,n.jsx)(t.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,n.jsx)(r.code,{children:"PuppeteerCrawler"})})," and ",(0,n.jsx)(t.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,n.jsx)(r.code,{children:"PlaywrightCrawler"})}),"."]})}),"\n",(0,n.jsxs)(r.p,{children:["Once the page's HTML is retrieved, the crawler will pass it to ",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener",children:"JSDOM"})," for parsing. The result is a ",(0,n.jsx)(r.code,{children:"window"})," property, which should be familiar to frontend developers. You can use the Window API to do all sorts of lookups and manipulation of the page's HTML, but in scraping, you will mostly use it to find specific HTML elements and extract their data."]}),"\n",(0,n.jsx)(r.p,{children:"Example use of browser JavaScript:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// Return the page title\ndocument.title; // browsers\nwindow.document.title; // JSDOM\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"when-to-use-jsdomcrawler",children:["When to use ",(0,n.jsx)(r.code,{children:"JSDOMCrawler"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"JSDOMCrawler"})," really shines when ",(0,n.jsx)(r.code,{children:"CheerioCrawler"})," is just not enough. There is an entire set of ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API",target:"_blank",rel:"noopener",children:"APIs"})," available!"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Advantages:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Easy to set up"}),"\n",(0,n.jsx)(r.li,{children:"Familiar for frontend developers"}),"\n",(0,n.jsx)(r.li,{children:"Content can be manipulated"}),"\n",(0,n.jsx)(r.li,{children:"Automatically avoids some anti-scraping bans"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Disadvantages:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Slower than ",(0,n.jsx)(r.code,{children:"CheerioCrawler"})]}),"\n",(0,n.jsx)(r.li,{children:"Does not work for websites that require JavaScript rendering"}),"\n",(0,n.jsx)(r.li,{children:"May easily overload the target website with requests"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example-use-of-element-api",children:"Example use of Element API"}),"\n",(0,n.jsx)(r.h3,{id:"find-all-links-on-a-page",children:"Find all links on a page"}),"\n",(0,n.jsxs)(r.p,{children:["This snippet finds all ",(0,n.jsx)(r.code,{children:"<a>"})," elements which have the ",(0,n.jsx)(r.code,{children:"href"})," attribute and extracts the hrefs into an array."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"Array.from(document.querySelectorAll('a[href]')).map((a) => a.href);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"other-examples",children:"Other examples"}),"\n",(0,n.jsxs)(r.p,{children:["Visit the ",(0,n.jsx)(r.a,{href:"../examples",children:"Examples"})," section to browse examples of ",(0,n.jsx)(r.code,{children:"JSDOMCrawler"})," usage. Almost all examples show ",(0,n.jsx)(r.code,{children:"JSDOMCrawler"})," code in their code tabs."]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},4959:(e,r,s)=>{s.d(r,{Z:()=>c});s(7294);var n=s(9960),i=s(4477),t=s(2263),a=s(5893),l=s(643).version.split("."),o=[l[0],l[1]].join(".");const c=function(e){var r=e.to,s=e.children,l=(0,i.E)();return(0,t.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===o?(0,a.jsx)(n.default,{to:"/api/"+r,children:s}):(0,a.jsx)(n.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+r,children:s})}},1151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>a});var n=s(7294);const i={},t=n.createContext(i);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(t.Provider,{value:r},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);