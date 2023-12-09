"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2875],{356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>w,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var n=t(5893),a=t(1151),s=t(5488),l=t(5162),o=t(5316),i=t(4959);const c={code:"import { KeyValueStore, launchPuppeteer } from 'crawlee';\n\nconst keyValueStore = await KeyValueStore.open();\n\nconst url = 'https://crawlee.dev';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nconst screenshot = await page.screenshot();\n\n// Save the screenshot to the default key-value store\nawait keyValueStore.setValue('my-key', screenshot, { contentType: 'image/png' });\n\n// Close Puppeteer\nawait browser.close();\n",hash:"invalid-token"},u={code:"import { launchPuppeteer, utils } from 'crawlee';\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nawait utils.puppeteer.saveSnapshot(page, { key: 'my-key', saveHtml: false });\n\n// Close Puppeteer\nawait browser.close();\n",hash:"invalid-token"},p={code:"import { PuppeteerCrawler, KeyValueStore } from 'crawlee';\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Capture the screenshot with Puppeteer\n        const screenshot = await page.screenshot();\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Save the screenshot to the default key-value store\n        await KeyValueStore.setValue(key, screenshot, { contentType: 'image/png' });\n    },\n});\n\nawait crawler.addRequests([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},h={code:"import { PuppeteerCrawler } from 'crawlee';\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, saveSnapshot }) {\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Capture the screenshot\n        await saveSnapshot({ key, saveHtml: false });\n    },\n});\n\nawait crawler.addRequests([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\n// Run the crawler\nawait crawler.run();\n",hash:"invalid-token"},d={id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},w=void 0,m={id:"examples/capture-screenshot",title:"Capture a screenshot using Puppeteer",description:"Using Puppeteer directly",source:"@site/versioned_docs/version-3.6/examples/puppeteer_capture_screenshot.mdx",sourceDirName:"examples",slug:"/examples/capture-screenshot",permalink:"/crawlee-cn/docs/examples/capture-screenshot",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},sidebar:"docs",previous:{title:"Using Firefox browser with Playwright crawler",permalink:"/crawlee-cn/docs/examples/playwright-crawler-firefox"},next:{title:"Puppeteer crawler",permalink:"/crawlee-cn/docs/examples/puppeteer-crawler"}},f={},v=[{value:"Using Puppeteer directly",id:"using-puppeteer-directly",level:2},{value:"Using <code>PuppeteerCrawler</code>",id:"using-puppeteercrawler",level:2}];function g(e){const r={admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"using-puppeteer-directly",children:"Using Puppeteer directly"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,n.jsx)(r.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),"\n",(0,n.jsxs)(r.p,{children:["This example captures a screenshot of a web page using ",(0,n.jsx)(r.code,{children:"Puppeteer"}),". It would look almost exactly the same with ",(0,n.jsx)(r.code,{children:"Playwright"}),"."]}),"\n",(0,n.jsxs)(s.Z,{groupId:"puppeteer-capture-screenshot",children:[(0,n.jsxs)(l.Z,{value:"pagescreenshot",label:"Page Screenshot",children:[(0,n.jsxs)(r.p,{children:["Using ",(0,n.jsx)(r.code,{children:"page.screenshot()"}),":"]}),(0,n.jsx)(o.Z,{className:"language-js",type:"puppeteer",children:c})]}),(0,n.jsxs)(l.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,children:[(0,n.jsxs)(r.p,{children:["Using ",(0,n.jsx)(r.code,{children:"utils.puppeteer.saveSnapshot()"}),":"]}),(0,n.jsx)(o.Z,{className:"language-js",type:"puppeteer",children:u})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"using-puppeteercrawler",children:["Using ",(0,n.jsx)(r.code,{children:"PuppeteerCrawler"})]}),"\n",(0,n.jsxs)(r.p,{children:["This example captures a screenshot of multiple web pages when using ",(0,n.jsx)(r.code,{children:"PuppeteerCrawler"}),":"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"puppeteer-capture-screenshot",children:[(0,n.jsxs)(l.Z,{value:"pagescreenshot",label:"Page Screenshot",children:[(0,n.jsxs)(r.p,{children:["Using ",(0,n.jsx)(r.code,{children:"page.screenshot()"}),":"]}),(0,n.jsx)(o.Z,{className:"language-js",type:"puppeteer",children:p})]}),(0,n.jsxs)(l.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,children:[(0,n.jsxs)(r.p,{children:["Using the context-aware ",(0,n.jsx)(i.Z,{to:"puppeteer-crawler/namespace/puppeteerUtils#saveSnapshot",children:(0,n.jsx)(r.code,{children:"saveSnapshot()"})})," utility:"]}),(0,n.jsx)(o.Z,{className:"language-js",type:"puppeteer",children:h})]})]}),"\n",(0,n.jsxs)(r.p,{children:["In both examples using ",(0,n.jsx)(r.code,{children:"page.screenshot()"}),", a ",(0,n.jsx)(r.code,{children:"key"})," variable is created based on the URL of the web page. This variable is used as the key when saving\neach screenshot into a key-value store."]})]})}function b(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>l});t(7294);var n=t(512);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function l(e){var r=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:t,children:r})}},5488:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7294),a=t(512),s=t(2466),l=t(989),o=t(2389);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=t(5893);function u(e){var r=e.className,t=e.block,n=e.selectedValue,l=e.selectValue,o=e.tabValues,u=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var r=e.currentTarget,t=u.indexOf(r),a=o[t].value;a!==n&&(p(r),l(a))},d=function(e){var r,t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,a=u.indexOf(e.currentTarget)+1;t=null!=(n=u[a])?n:u[0];break;case"ArrowLeft":var s,l=u.indexOf(e.currentTarget)-1;t=null!=(s=u[l])?s:u[u.length-1]}null==(r=t)||r.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map((function(e){var r=e.value,t=e.label,s=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:function(e){return u.push(e)},onKeyDown:d,onClick:h},s,{className:(0,a.Z)("tabs__item",i.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===r}),children:null!=t?t:r}),r)}))})}function p(e){var r=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var l=s.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function h(e){var r=(0,l.Y)(e);return(0,c.jsxs)("div",{className:(0,a.Z)("tabs-container",i.tabList),children:[(0,c.jsx)(u,Object.assign({},e,r)),(0,c.jsx)(p,Object.assign({},e,r))]})}function d(e){var r=(0,o.Z)();return(0,c.jsx)(h,Object.assign({},e,{children:(0,l.h)(e.children)}),String(r))}},989:(e,r,t)=>{t.d(r,{Y:()=>d,h:()=>c});var n=t(7294),a=t(6550),s=t(469),l=t(1980),o=t(7392),i=t(12);function c(e){var r,t;return null!=(r=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function u(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,o.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function h(e){var r=e.queryString,t=void 0!==r&&r,s=e.groupId,o=(0,a.k6)(),i=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:s});return[(0,l._X)(i),(0,n.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function d(e){var r,t,a,l,o=e.defaultValue,c=e.queryString,d=void 0!==c&&c,w=e.groupId,m=u(e),f=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),v=f[0],g=f[1],b=h({queryString:d,groupId:w}),x=b[0],y=b[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:w}.groupId),t=(0,i.Nk)(r),a=t[0],l=t[1],[a,(0,n.useCallback)((function(e){r&&l.set(e)}),[r,l])]),k=j[0],C=j[1],P=function(){var e=null!=x?x:k;return p({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){P&&g(P)}),[P]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,m]),tabValues:m}}},4959:(e,r,t)=>{t.d(r,{Z:()=>c});t(7294);var n=t(9960),a=t(4477),s=t(2263),l=t(5893),o=t(643).version.split("."),i=[o[0],o[1]].join(".");const c=function(e){var r=e.to,t=e.children,o=(0,a.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===i?(0,l.jsx)(n.default,{to:"/api/"+r,children:t}):(0,l.jsx)(n.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+r,children:t})}},5316:(e,r,t)=>{t.d(r,{Z:()=>p});var n=t(3366),a=(t(7294),t(512)),s=t(3e3),l=t(9960);const o={button:"button_YBBj",container:"container_TGAW"};var i=t(5893),c=["children","actor","hash","type"],u={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const p=function(e){var r,t=e.children,p=e.actor,h=e.hash,d=e.type,w=(0,n.Z)(e,c);if(h=null!=(r=h)?r:t.hash,!t.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!h)return(0,i.jsx)(s.default,Object.assign({},w,{children:t.code}));var m="https://console.apify.com/actors/"+(null!=p?p:u[null!=d?d:"playwright"])+"?runConfig="+h+"&asrc=run_on_apify";return(0,i.jsxs)("div",{className:(0,a.Z)(o.container,"runnable-code-block"),children:[(0,i.jsxs)(l.default,{href:m,className:o.button,rel:"follow",children:["Run on",(0,i.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,i.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,i.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,i.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,i.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,i.jsx)(s.default,Object.assign({},w,{className:(0,a.Z)(o.codeBlock,"code-block",null!=w.title?"has-title":"no-title"),children:t.code}))]})}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>l});var n=t(7294);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);