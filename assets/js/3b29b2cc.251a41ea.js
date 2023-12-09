"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[113],{86:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=t(5893),s=t(1151),r=t(5316),o=t(4959);const d={code:"import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open<{\n    url: string,\n    headingCount: number,\n}>();\n\n// Seeding the dataset with some data\nawait dataset.pushData([\n    {\n        url: 'https://crawlee.dev/',\n        headingCount: 11,\n    },\n    {\n        url: 'https://crawlee.dev/storage',\n        headingCount: 8,\n    },\n    {\n        url: 'https://crawlee.dev/proxy',\n        headingCount: 4,\n    },\n]);\n\n// Calling map function and filtering through mapped items...\nconst moreThan5headers = (await dataset.map((item) => item.headingCount)).filter((count) => count > 5);\n\n// Saving the result of map to default key-value store...\nawait KeyValueStore.setValue('pages_with_more_than_5_headers', moreThan5headers);\n",hash:"invalid-token"},i={code:"import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open<{\n    url: string,\n    headingCount: number,\n}>();\n\n// Seeding the dataset with some data\nawait dataset.pushData([\n    {\n        url: 'https://crawlee.dev/',\n        headingCount: 11,\n    },\n    {\n        url: 'https://crawlee.dev/storage',\n        headingCount: 8,\n    },\n    {\n        url: 'https://crawlee.dev/proxy',\n        headingCount: 4,\n    },\n]);\n\n// calling reduce function and using memo to calculate number of headers\nconst pagesHeadingCount = await dataset.reduce((memo, value) => {\n    return memo + value.headingCount;\n}, 0);\n\n// saving result of map to default Key-value store\nawait KeyValueStore.setValue('pages_heading_count', pagesHeadingCount);\n",hash:"invalid-token"},c={id:"map-and-reduce",title:"Dataset Map and Reduce methods"},l=void 0,h={id:"examples/map-and-reduce",title:"Dataset Map and Reduce methods",description:"This example shows an easy use-case of the Dataset map",source:"@site/versioned_docs/version-3.6/examples/map_and_reduce.mdx",sourceDirName:"examples",slug:"/examples/map-and-reduce",permalink:"/crawlee-cn/docs/examples/map-and-reduce",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"map-and-reduce",title:"Dataset Map and Reduce methods"},sidebar:"docs",previous:{title:"JSDOM crawler",permalink:"/crawlee-cn/docs/examples/jsdom-crawler"},next:{title:"Playwright crawler",permalink:"/crawlee-cn/docs/examples/playwright-crawler"}},u={},p=[{value:"Map",id:"map",level:3},{value:"Reduce",id:"reduce",level:3}];function m(e){const a={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["This example shows an easy use-case of the ",(0,n.jsx)(o.Z,{to:"core/class/Dataset",children:(0,n.jsx)(a.code,{children:"Dataset"})})," ",(0,n.jsx)(o.Z,{to:"core/class/Dataset#map",children:(0,n.jsx)(a.code,{children:"map"})}),"\nand ",(0,n.jsx)(o.Z,{to:"core/class/Dataset#reduce",children:(0,n.jsx)(a.code,{children:"reduce"})})," methods. Both methods can be used to simplify\nthe dataset results workflow process. Both can be called on the ",(0,n.jsx)(o.Z,{to:"core/class/Dataset",children:"dataset"})," directly."]}),"\n",(0,n.jsxs)(a.p,{children:["Important to mention is that both methods return a new result (",(0,n.jsx)(a.code,{children:"map"})," returns a new array and ",(0,n.jsx)(a.code,{children:"reduce"})," can return any type) - neither method updates\nthe dataset in any way."]}),"\n",(0,n.jsxs)(a.p,{children:["Examples for both methods are demonstrated on a simple dataset containing the results scraped from a page: the ",(0,n.jsx)(a.code,{children:"URL"})," and a hypothetical number of\n",(0,n.jsx)(a.code,{children:"h1"})," - ",(0,n.jsx)(a.code,{children:"h3"})," header elements under the ",(0,n.jsx)(a.code,{children:"headingCount"})," key."]}),"\n",(0,n.jsxs)(a.p,{children:["This data structure is stored in the default dataset under ",(0,n.jsx)(a.code,{children:"{PROJECT_FOLDER}/storage/datasets/default/"}),". If you want to simulate the\nfunctionality, you can use the ",(0,n.jsx)(o.Z,{to:"core/class/Dataset#pushData",children:(0,n.jsx)(a.code,{children:"dataset.pushData()"})}),"\nmethod to save the example ",(0,n.jsx)(a.code,{children:"JSON array"})," to your dataset."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'[\n    {\n        "url": "https://crawlee.dev/",\n        "headingCount": 11\n    },\n    {\n        "url": "https://crawlee.dev/storage",\n        "headingCount": 8\n    },\n    {\n        "url": "https://crawlee.dev/proxy",\n        "headingCount": 4\n    }\n]\n'})}),"\n",(0,n.jsx)(a.h3,{id:"map",children:"Map"}),"\n",(0,n.jsxs)(a.p,{children:["The dataset ",(0,n.jsx)(a.code,{children:"map"})," method is very similar to standard Array mapping methods. It produces a new array of values by mapping each value in the existing\narray through a transformation function and an options parameter."]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"map"})," method used to check if are there more than 5 header elements on each page:"]}),"\n",(0,n.jsx)(r.Z,{className:"language-js",type:"cheerio",children:d}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"moreThan5headers"})," variable is an array of ",(0,n.jsx)(a.code,{children:"headingCount"})," attributes where the number of headers is greater than 5."]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"map"})," method's result value saved to the ",(0,n.jsx)(o.Z,{to:"core/class/KeyValueStore",children:(0,n.jsx)(a.code,{children:"key-value store"})})," should be:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"[11, 8]\n"})}),"\n",(0,n.jsx)(a.h3,{id:"reduce",children:"Reduce"}),"\n",(0,n.jsxs)(a.p,{children:["The dataset ",(0,n.jsx)(a.code,{children:"reduce"})," method does not produce a new array of values - it reduces a list of values down to a single value. The method iterates through\nthe items in the dataset using the ",(0,n.jsxs)(o.Z,{to:"core/class/Dataset#reduce",children:[(0,n.jsx)(a.code,{children:"memo"})," argument"]}),". After performing the necessary\ncalculation, the ",(0,n.jsx)(a.code,{children:"memo"})," is sent to the next iteration, while the item just processed is reduced (removed)."]}),"\n",(0,n.jsxs)(a.p,{children:["Using the ",(0,n.jsx)(a.code,{children:"reduce"})," method to get the total number of headers scraped (all items in the dataset):"]}),"\n",(0,n.jsx)(r.Z,{className:"language-js",type:"cheerio",children:i}),"\n",(0,n.jsxs)(a.p,{children:["The original dataset will be reduced to a single value, ",(0,n.jsx)(a.code,{children:"pagesHeadingCount"}),", which contains the count of all headers for all scraped pages (all\ndataset items)."]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"reduce"})," method's result value saved to the ",(0,n.jsx)(o.Z,{to:"core/class/KeyValueStore",children:(0,n.jsx)(a.code,{children:"key-value store"})})," should be:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"23\n"})})]})}function x(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},4959:(e,a,t)=>{t.d(a,{Z:()=>c});t(7294);var n=t(9960),s=t(4477),r=t(2263),o=t(5893),d=t(643).version.split("."),i=[d[0],d[1]].join(".");const c=function(e){var a=e.to,t=e.children,d=(0,s.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||d.version===i?(0,o.jsx)(n.default,{to:"/api/"+a,children:t}):(0,o.jsx)(n.default,{to:"/api/"+("current"===d.version?"next":d.version)+"/"+a,children:t})}},5316:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(3366),s=(t(7294),t(512)),r=t(3e3),o=t(9960);const d={button:"button_YBBj",container:"container_TGAW"};var i=t(5893),c=["children","actor","hash","type"],l={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const h=function(e){var a,t=e.children,h=e.actor,u=e.hash,p=e.type,m=(0,n.Z)(e,c);if(u=null!=(a=u)?a:t.hash,!t.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!u)return(0,i.jsx)(r.default,Object.assign({},m,{children:t.code}));var x="https://console.apify.com/actors/"+(null!=h?h:l[null!=p?p:"playwright"])+"?runConfig="+u+"&asrc=run_on_apify";return(0,i.jsxs)("div",{className:(0,s.Z)(d.container,"runnable-code-block"),children:[(0,i.jsxs)(o.default,{href:x,className:d.button,rel:"follow",children:["Run on",(0,i.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,i.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,i.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,i.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,i.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,i.jsx)(r.default,Object.assign({},m,{className:(0,s.Z)(d.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:t.code}))]})}},1151:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>o});var n=t(7294);const s={},r=n.createContext(s);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:a},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);