"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2957],{8792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>w,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(5893),s=n(1151),r=n(5316),i=n(4959);const o={code:"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`);\n        if (request.label === 'DETAIL') {\n            const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\n            const manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n\n            const title = await page.locator('.product-meta h1').textContent();\n            const sku = await page.locator('span.product-meta__sku-number').textContent();\n\n            const priceElement = page\n                .locator('span.price')\n                .filter({\n                    hasText: '$',\n                })\n                .first();\n\n            const currentPriceString = await priceElement.textContent();\n            const rawPrice = currentPriceString.split('$')[1];\n            const price = Number(rawPrice.replaceAll(',', ''));\n\n            const inStockElement = page\n                .locator('span.product-form__inventory')\n                .filter({\n                    hasText: 'In stock',\n                })\n                .first();\n\n            const inStock = (await inStockElement.count()) > 0;\n\n            const results = {\n                url: request.url,\n                manufacturer,\n                title,\n                sku,\n                currentPrice: price,\n                availableInStock: inStock,\n            };\n\n            // highlight-next-line\n            await Dataset.pushData(results);\n        } else if (request.label === 'CATEGORY') {\n            // We are now on a category page. We can use this to paginate through and enqueue all products,\n            // as well as any subsequent pages we find\n\n            await page.waitForSelector('.product-item > a');\n            await enqueueLinks({\n                selector: '.product-item > a',\n                label: 'DETAIL', // <= note the different label\n            });\n\n            // Now we need to find the \"Next\" button and enqueue the next page of results (if it exists)\n            const nextButton = await page.$('a.pagination__next');\n            if (nextButton) {\n                await enqueueLinks({\n                    selector: 'a.pagination__next',\n                    label: 'CATEGORY', // <= note the same label\n                });\n            }\n        } else {\n            // This means we're on the start page, with no label.\n            // On this page, we just want to enqueue all the category pages.\n\n            await page.waitForSelector('.collection-block-item');\n            await enqueueLinks({\n                selector: '.collection-block-item',\n                label: 'CATEGORY',\n            });\n        }\n    },\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",hash:"invalid-token"},l={id:"saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee"},c=void 0,d={id:"introduction/saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/introduction/07-saving-data.mdx",sourceDirName:"introduction",slug:"/introduction/saving-data",permalink:"/crawlee-cn/docs/next/introduction/saving-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Scraping",permalink:"/crawlee-cn/docs/next/introduction/scraping"},next:{title:"Refactoring",permalink:"/crawlee-cn/docs/next/introduction/refactoring"}},h={},u=[{value:"What&#39;s <code>Dataset.pushData()</code>",id:"whats-datasetpushdata",level:2},{value:"Finding saved data",id:"finding-saved-data",level:2},{value:"Next lesson",id:"next-lesson",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A data extraction job would not be complete without saving the data for later use and processing. We've come to the final and most difficult part of this tutorial so make sure to pay attention very carefully!"}),"\n",(0,a.jsx)(t.p,{children:"First, add a new import to the top of the file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { PlaywrightCrawler, Dataset } from 'crawlee';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then, replace the ",(0,a.jsx)(t.code,{children:"console.log(results)"})," call with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"await Dataset.pushData(results);\n"})}),"\n",(0,a.jsx)(t.p,{children:"and that's it. Unlike earlier, we are being serious now. That's it, we're done. The final code looks like this:"}),"\n",(0,a.jsx)(r.Z,{className:"language-js",type:"playwright",children:o}),"\n",(0,a.jsxs)(t.h2,{id:"whats-datasetpushdata",children:["What's ",(0,a.jsx)(t.code,{children:"Dataset.pushData()"})]}),"\n",(0,a.jsxs)(t.p,{children:["\u200b",(0,a.jsx)(i.Z,{to:"core/class/Dataset#pushData",children:(0,a.jsx)(t.code,{children:"Dataset.pushData()"})})," is a function that saves data to the default ",(0,a.jsx)(i.Z,{to:"core/class/Dataset",children:(0,a.jsx)(t.code,{children:"Dataset"})}),". ",(0,a.jsx)(t.code,{children:"Dataset"})," is a storage designed to hold data in a format similar to a table. Each time you call ",(0,a.jsx)(t.code,{children:"Dataset.pushData()"})," a new row in the table is created, with the property names serving as column titles. In the default configuration, the rows are represented as JSON files saved on your disk, but other storage systems can be plugged into Crawlee as well."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Each time you start Crawlee a default ",(0,a.jsx)(t.code,{children:"Dataset"})," is automatically created, so there's no need to initialize it or create an instance first. You can create as many datasets as you want and even give them names. For more details see the ",(0,a.jsx)(t.a,{href:"../guides/result-storage#dataset",children:"Result storage guide"})," and the ",(0,a.jsx)(i.Z,{to:"core/class/Dataset#open",children:(0,a.jsx)(t.code,{children:"Dataset.open()"})})," function."]})}),"\n",(0,a.jsx)(t.h2,{id:"finding-saved-data",children:"Finding saved data"}),"\n",(0,a.jsxs)(t.p,{children:["Unless you changed the configuration that Crawlee uses locally, which would suggest that you knew what you were doing, and you didn't need this tutorial anyway, you'll find your data in the ",(0,a.jsx)(t.code,{children:"storage"})," directory that Crawlee creates in the working directory of the running script:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{PROJECT_FOLDER}/storage/datasets/default/\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The above folder will hold all your saved data in numbered files, as they were pushed into the dataset. Each file represents one invocation of ",(0,a.jsx)(t.code,{children:"Dataset.pushData()"})," or one table row."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you would like to store your data in a single big file, instead of many small ones, see the ",(0,a.jsx)(t.a,{href:"../guides/result-storage#key-value-store",children:"Result storage guide"})," for Key-value stores."]})}),"\n",(0,a.jsx)(t.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,a.jsx)(t.p,{children:"In the next lesson, we will show you some improvements that you can add to your crawler code that will make it more readable and maintainable in the long run."})]})}function w(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4959:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(9960),s=n(4477),r=n(2263),i=n(5893),o=n(643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,n=e.children,o=(0,s.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(a.default,{to:"/api/"+t,children:n}):(0,i.jsx)(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:n})}},5316:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(3366),s=(n(7294),n(512)),r=n(3e3),i=n(9960);const o={button:"button_YBBj",container:"container_TGAW"};var l=n(5893),c=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const h=function(e){var t,n=e.children,h=e.actor,u=e.hash,p=e.type,w=(0,a.Z)(e,c);if(u=null!=(t=u)?t:n.hash,!n.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!u)return(0,l.jsx)(r.default,Object.assign({},w,{children:n.code}));var g="https://console.apify.com/actors/"+(null!=h?h:d[null!=p?p:"playwright"])+"?runConfig="+u+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,s.Z)(o.container,"runnable-code-block"),children:[(0,l.jsxs)(i.default,{href:g,className:o.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(r.default,Object.assign({},w,{className:(0,s.Z)(o.codeBlock,"code-block",null!=w.title?"has-title":"no-title"),children:n.code}))]})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(7294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);