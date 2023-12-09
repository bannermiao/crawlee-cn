"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5812],{2947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=a(5893),r=a(1151),o=a(4959);const n={id:"result-storage",title:"Result Storage",description:"Where are you going to store all of that juicy scraped data?!"},i=void 0,l={id:"guides/result-storage",title:"Result Storage",description:"Where are you going to store all of that juicy scraped data?!",source:"@site/versioned_docs/version-3.6/guides/result_storage.mdx",sourceDirName:"guides",slug:"/guides/result-storage",permalink:"/docs/guides/result-storage",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"result-storage",title:"Result Storage",description:"Where are you going to store all of that juicy scraped data?!"},sidebar:"docs",previous:{title:"Request Storage",permalink:"/docs/guides/request-storage"},next:{title:"Configuration",permalink:"/docs/guides/configuration"}},c={},d=[{value:"Key-value store",id:"key-value-store",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Cleaning up the storages",id:"cleaning-up-the-storages",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Crawlee has several result storage types that are useful for specific tasks. The data is stored on a local disk to the directory defined by the ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable. If this variable is not defined, by default Crawlee sets ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," to ",(0,s.jsx)(t.code,{children:"./storage"})," in the current working directory."]}),"\n",(0,s.jsxs)(t.p,{children:["Crawlee storage is managed by ",(0,s.jsx)(o.Z,{to:"memory-storage/class/MemoryStorage",children:(0,s.jsx)(t.code,{children:"MemoryStorage"})})," class. During the crawler run all information is stored in memory, while also being off-loaded to the local files in respective storage type folders."]}),"\n",(0,s.jsx)(t.h2,{id:"key-value-store",children:"Key-value store"}),"\n",(0,s.jsx)(t.p,{children:"The key-value store is used for saving and reading data records or files. Each data record is represented by a unique key and associated with a MIME content type. Key-value stores are ideal for saving screenshots of web pages, PDFs or to persist the state of crawlers."}),"\n",(0,s.jsxs)(t.p,{children:["Each Crawlee project run is associated with a ",(0,s.jsx)(t.strong,{children:"default key-value store"}),". By convention, the project input and output are stored in the default key-value store under the ",(0,s.jsx)(t.code,{children:"INPUT"})," and ",(0,s.jsx)(t.code,{children:"OUTPUT"})," keys respectively. Typically, both input and output are JSON files, although they could be any other format."]}),"\n",(0,s.jsxs)(t.p,{children:["In Crawlee, the key-value store is represented by the ",(0,s.jsx)(o.Z,{to:"core/class/KeyValueStore",children:(0,s.jsx)(t.code,{children:"KeyValueStore"})})," class. In order to simplify access to the default key-value store, Crawlee also provides ",(0,s.jsx)(o.Z,{to:"core/class/KeyValueStore#getValue",children:(0,s.jsx)(t.code,{children:"KeyValueStore.getValue()"})})," and ",(0,s.jsx)(o.Z,{to:"core/class/KeyValueStore#setValue",children:(0,s.jsx)(t.code,{children:"KeyValueStore.setValue()"})})," functions."]}),"\n",(0,s.jsxs)(t.p,{children:["The data is stored in the directory specified by the ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{CRAWLEE_STORAGE_DIR}/key_value_stores/{STORE_ID}/{KEY}.{EXT}\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"{STORE_ID}"})," is the name or the ID of the key-value store. The default key-value store has ID ",(0,s.jsx)(t.code,{children:"default"}),", unless we override it by setting the ",(0,s.jsx)(t.code,{children:"CRAWLEE_DEFAULT_KEY_VALUE_STORE_ID"})," environment variable. The ",(0,s.jsx)(t.code,{children:"{KEY}"})," is the key of the record and ",(0,s.jsx)(t.code,{children:"{EXT}"})," corresponds to the MIME content type of the data value."]})}),"\n",(0,s.jsx)(t.p,{children:"The following code demonstrates basic operations of key-value stores:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { KeyValueStore } from 'crawlee';\n\n// Get the INPUT from the default key-value store\nconst input = await KeyValueStore.getInput();\n\n// Write the OUTPUT to the default key-value store\nawait KeyValueStore.setValue('OUTPUT', { myResult: 123 });\n\n// Open a named key-value store\nconst store = await KeyValueStore.open('some-name');\n\n// Write a record to the named key-value store.\n// JavaScript object is automatically converted to JSON,\n// strings and binary buffers are stored as they are\nawait store.setValue('some-key', { foo: 'bar' });\n\n// Read a record from the named key-value store.\n// Note that JSON is automatically parsed to a JavaScript object,\n// text data is returned as a string, and other data is returned as binary buffer\nconst value = await store.getValue('some-key');\n\n// Delete a record from the named key-value store\nawait store.setValue('some-key', null);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To see a real-world example of how to get the input from the key-value store, see the ",(0,s.jsx)(t.a,{href:"../examples/capture-screenshot",children:"Screenshots"})," example."]}),"\n",(0,s.jsx)(t.h2,{id:"dataset",children:"Dataset"}),"\n",(0,s.jsx)(t.p,{children:"Datasets are used to store structured data where each object stored has the same attributes, such as online store products or real estate offers. Dataset can be imagined as a table, where each object is a row and its attributes are columns. Dataset is an append-only storage - we can only add new records to it, but we cannot modify or remove existing records."}),"\n",(0,s.jsxs)(t.p,{children:["Each Crawlee project run is associated with a ",(0,s.jsx)(t.strong,{children:"default dataset"}),". Typically, it is used to store crawling results specific for the crawler run. Its usage is optional."]}),"\n",(0,s.jsxs)(t.p,{children:["In Crawlee, the dataset is represented by the ",(0,s.jsx)(o.Z,{to:"core/class/Dataset",children:(0,s.jsx)(t.code,{children:"Dataset"})})," class. In order to simplify writes to the default dataset, Crawlee also provides the ",(0,s.jsx)(o.Z,{to:"core/class/Dataset#pushData",children:(0,s.jsx)(t.code,{children:"Dataset.pushData()"})})," function."]}),"\n",(0,s.jsxs)(t.p,{children:["The data is stored in the directory specified by the ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{CRAWLEE_STORAGE_DIR}/datasets/{DATASET_ID}/{INDEX}.json\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"{DATASET_ID}"})," is the name or the ID of the dataset. The default dataset has ID ",(0,s.jsx)(t.code,{children:"default"}),", unless we override it by setting the ",(0,s.jsx)(t.code,{children:"CRAWLEE_DEFAULT_DATASET_ID"})," environment variable. Each dataset item is stored as a separate JSON file, where ",(0,s.jsx)(t.code,{children:"{INDEX}"})," is a zero-based index of the item in the dataset."]})}),"\n",(0,s.jsx)(t.p,{children:"The following code demonstrates basic operations of the dataset:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { Dataset } from 'crawlee';\n\n// Write a single row to the default dataset\nawait Dataset.pushData({ col1: 123, col2: 'val2' });\n\n// Open a named dataset\nconst dataset = await Dataset.open('some-name');\n\n// Write a single row\nawait dataset.pushData({ foo: 'bar' });\n\n// Write multiple rows\nawait dataset.pushData([{ foo: 'bar2', col2: 'val2' }, { col3: 123 }]);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To see how to use the dataset to store crawler results, see the ",(0,s.jsx)(t.a,{href:"../examples/cheerio-crawler",children:"Cheerio Crawler"})," example."]}),"\n",(0,s.jsx)(t.h2,{id:"cleaning-up-the-storages",children:"Cleaning up the storages"}),"\n",(0,s.jsxs)(t.p,{children:["Default storages are purged before the crawler starts if not specified otherwise. This happens as early as when we try to open some storage (e.g. via ",(0,s.jsx)(t.code,{children:"Dataset.open()"}),") or when we try to work with a default storage via one of the helper methods (e.g. ",(0,s.jsx)(t.code,{children:"Dataset.pushData()"})," that under the hood calls ",(0,s.jsx)(t.code,{children:"Dataset.open()"}),"). If we don't work with storages explicitly in our code, the purging will eventually happen when the ",(0,s.jsx)(t.code,{children:"run"})," method of our crawler is executed. In case we need to purge the storages sooner, we can use the ",(0,s.jsx)(o.Z,{to:"core/function/purgeDefaultStorages",children:(0,s.jsx)(t.code,{children:"purgeDefaultStorages()"})})," helper explicitly:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { purgeDefaultStorages } from 'crawlee';\n\nawait purgeDefaultStorages();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Calling this function will clean up the default results storage directories except the ",(0,s.jsx)(t.code,{children:"INPUT"})," key in default key-value store directory. This is a shortcut for running (optional) ",(0,s.jsx)(t.code,{children:"purge"})," method on the ",(0,s.jsx)(o.Z,{to:"core/interface/StorageClient",children:(0,s.jsx)(t.code,{children:"StorageClient"})})," interface, in other words it will call the ",(0,s.jsx)(t.code,{children:"purge"})," method of the underlying storage implementation we are currently using. In addition, this method will make sure the storage is purged only once for a given execution context, so it is safe to call it multiple times."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4959:(e,t,a)=>{a.d(t,{Z:()=>c});a(7294);var s=a(9960),r=a(4477),o=a(2263),n=a(5893),i=a(643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,r.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?(0,n.jsx)(s.default,{to:"/api/"+t,children:a}):(0,n.jsx)(s.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>n});var s=a(7294);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);