"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4585],{4288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=a(5893),n=a(1151),r=a(5316),o=a(4959);const i={code:"import { Dataset, CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, body }) {\n        // Save data to default dataset\n        await Dataset.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\nawait crawler.addRequests([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},l={id:"add-data-to-dataset",title:"Add data to dataset"},c=void 0,d={id:"examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/versioned_docs/version-3.6/examples/add_data_to_dataset.mdx",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/docs/examples/add-data-to-dataset",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"docs",previous:{title:"Accept user input",permalink:"/docs/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/docs/examples/basic-crawler"}},p={},h=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,s.jsx)(o.Z,{to:"core/class/Dataset#open",children:(0,s.jsx)(t.code,{children:"Dataset.open()"})})]}),"\n",(0,s.jsx)(r.Z,{className:"language-js",type:"cheerio",children:i}),"\n",(0,s.jsx)(t.p,{children:"Each item in this dataset will be saved to its own file in the following directory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"{PROJECT_FOLDER}/storage/datasets/default/\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4959:(e,t,a)=>{a.d(t,{Z:()=>c});a(7294);var s=a(9960),n=a(4477),r=a(2263),o=a(5893),i=a(643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,n.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?(0,o.jsx)(s.default,{to:"/api/"+t,children:a}):(0,o.jsx)(s.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},5316:(e,t,a)=>{a.d(t,{Z:()=>p});var s=a(3366),n=(a(7294),a(512)),r=a(3e3),o=a(9960);const i={button:"button_YBBj",container:"container_TGAW"};var l=a(5893),c=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const p=function(e){var t,a=e.children,p=e.actor,h=e.hash,u=e.type,m=(0,s.Z)(e,c);if(h=null!=(t=h)?t:a.hash,!a.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!h)return(0,l.jsx)(r.default,Object.assign({},m,{children:a.code}));var w="https://console.apify.com/actors/"+(null!=p?p:d[null!=u?u:"playwright"])+"?runConfig="+h+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,n.Z)(i.container,"runnable-code-block"),children:[(0,l.jsxs)(o.default,{href:w,className:i.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(r.default,Object.assign({},m,{className:(0,n.Z)(i.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:a.code}))]})}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var s=a(7294);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);