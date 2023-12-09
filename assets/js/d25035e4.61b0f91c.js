"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5458],{69:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(5893),o=t(1151),i=t(4959);const s={id:"configuration",title:"Configuration",description:"Configuring Crawlee parameters"},a=void 0,l={id:"guides/configuration",title:"Configuration",description:"Configuring Crawlee parameters",source:"@site/../docs/guides/configuration.mdx",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/crawlee-cn/docs/next/guides/configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",description:"Configuring Crawlee parameters"},sidebar:"docs",previous:{title:"Result Storage",permalink:"/crawlee-cn/docs/next/guides/result-storage"},next:{title:"CheerioCrawler",permalink:"/crawlee-cn/docs/next/guides/cheerio-crawler-guide"}},c={},d=[{value:"<code>crawlee.json</code>",id:"crawleejson",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Important env vars",id:"important-env-vars",level:3},{value:"<code>CRAWLEE_STORAGE_DIR</code>",id:"crawlee_storage_dir",level:4},{value:"<code>CRAWLEE_DEFAULT_DATASET_ID</code>",id:"crawlee_default_dataset_id",level:4},{value:"<code>CRAWLEE_DEFAULT_KEY_VALUE_STORE_ID</code>",id:"crawlee_default_key_value_store_id",level:4},{value:"<code>CRAWLEE_DEFAULT_REQUEST_QUEUE_ID</code>",id:"crawlee_default_request_queue_id",level:4},{value:"<code>CRAWLEE_PURGE_ON_START</code>",id:"crawlee_purge_on_start",level:4},{value:"Convenience env vars",id:"convenience-env-vars",level:3},{value:"<code>CRAWLEE_HEADLESS</code>",id:"crawlee_headless",level:4},{value:"<code>CRAWLEE_LOG_LEVEL</code>",id:"crawlee_log_level",level:4},{value:"<code>CRAWLEE_VERBOSE_LOG</code>",id:"crawlee_verbose_log",level:4},{value:"<code>CRAWLEE_MEMORY_MBYTES</code>",id:"crawlee_memory_mbytes",level:4},{value:"Configuration class",id:"configuration-class",level:2},{value:"Global Configuration",id:"global-configuration",level:3},{value:"Custom configuration",id:"custom-configuration",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u200b",(0,r.jsx)(i.Z,{to:"core/class/Configuration",children:(0,r.jsx)(n.code,{children:"Configuration"})})," is a class holding Crawlee configuration parameters. By default, you don't need to set or change any of them, but for certain use cases you might want to do so, e.g. in order to change the default storage directory, or enable verbose error logging, and so on."]}),"\n",(0,r.jsx)(n.p,{children:"There are three ways of changing the configuration parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["adding ",(0,r.jsx)(n.code,{children:"crawlee.json"})," file to your project"]}),"\n",(0,r.jsx)(n.li,{children:"setting environment variables"}),"\n",(0,r.jsxs)(n.li,{children:["using the ",(0,r.jsx)(n.code,{children:"Configuration"})," class"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You could also combine all the above, but you should keep in mind, that the precedence for these 3 options is the following:\n",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"crawlee.json"})})})," < ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"constructor options"})})," < ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"environment variables"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"crawlee.json"})," is a baseline. The options provided in the ",(0,r.jsx)(n.code,{children:"Configuration"})," constructor will override the options provided in the JSON. Environment variables will override both."]}),"\n",(0,r.jsx)(n.h2,{id:"crawleejson",children:(0,r.jsx)(n.code,{children:"crawlee.json"})}),"\n",(0,r.jsxs)(n.p,{children:["The first option you could use for configuring Crawlee is ",(0,r.jsx)(n.code,{children:"crawlee.json"})," file. The only thing you need to do is specify the ",(0,r.jsx)(i.Z,{to:"core/interface/ConfigurationOptions",children:(0,r.jsx)(n.code,{children:"ConfigurationOptions"})})," in the file, place the file in the root of your project, and Crawlee will use provided options as global configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="crawlee.json"',children:'{\n  "persistStateIntervalMillis": 10000,\n  "logLevel": "DEBUG"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"crawlee.json"})," you don't need to do anything else in the code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { CheerioCrawler, sleep } from 'crawlee';\n// We are not importing nor passing\n// the Configuration to the crawler.\n// We are not assigning any env vars either.\nconst crawler = new CheerioCrawler();\n\ncrawler.router.addDefaultHandler(async ({ request }) => {\n    // for the first request we wait for 5 seconds,\n    // and add the second request to the queue\n    if (request.url === 'https://www.example.com/1') {\n        await sleep(5_000);\n        await crawler.addRequests(['https://www.example.com/2'])\n    }\n    // for the second request we wait for 10 seconds,\n    // and abort the run\n    if (request.url === 'https://www.example.com/2') {\n        await sleep(10_000);\n        process.exit(0);\n    }\n});\n\nawait crawler.run(['https://www.example.com/1']);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you run this example (assuming you placed the ",(0,r.jsx)(n.code,{children:"crawlee.json"})," file with ",(0,r.jsx)(n.code,{children:"persistStateIntervalMillis"})," and ",(0,r.jsx)(n.code,{children:"logLevel"})," specified there in the root of your project), you will find the ",(0,r.jsx)(n.code,{children:"SDK_CRAWLER_STATISTICS"})," file in default Key-Value store,\nwhich would show, that there's 1 finished request and crawler runtime was ~10 seconds.\nThis confirms that the state was persisted after 10 seconds, as it was set in ",(0,r.jsx)(n.code,{children:"crawlee.json"}),".\nBesides, you should see ",(0,r.jsx)(n.code,{children:"DEBUG"})," logs in addition to ",(0,r.jsx)(n.code,{children:"INFO"})," ones in your terminal, as ",(0,r.jsx)(n.code,{children:"logLevel"})," was set to ",(0,r.jsx)(n.code,{children:"DEBUG"})," in the ",(0,r.jsx)(n.code,{children:"crawlee.json"}),", meaning Crawlee picked both provided options correctly."]}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsx)(n.p,{children:"Another way of configuring Crawlee is setting environment variables.\nThe following is a list of the environment variables used by Crawlee that are available to the user."}),"\n",(0,r.jsx)(n.h3,{id:"important-env-vars",children:"Important env vars"}),"\n",(0,r.jsx)(n.p,{children:"The following environment variables have large impact on the way Crawlee works and its behavior\ncan be changed significantly by setting or unsetting them."}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_storage_dir",children:(0,r.jsx)(n.code,{children:"CRAWLEE_STORAGE_DIR"})}),"\n",(0,r.jsxs)(n.p,{children:["Defines the path to a local directory where ",(0,r.jsx)(i.Z,{to:"core/class/KeyValueStore",children:(0,r.jsx)(n.code,{children:"KeyValueStore"})}),", ",(0,r.jsx)(i.Z,{to:"core/class/Dataset",children:(0,r.jsx)(n.code,{children:"Dataset"})}),", and ",(0,r.jsx)(i.Z,{to:"core/class/RequestQueue",children:(0,r.jsx)(n.code,{children:"RequestQueue"})})," store their data. By default, it is set to ",(0,r.jsx)(n.code,{children:"./storage"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_default_dataset_id",children:(0,r.jsx)(n.code,{children:"CRAWLEE_DEFAULT_DATASET_ID"})}),"\n",(0,r.jsxs)(n.p,{children:["The default dataset has ID ",(0,r.jsx)(n.code,{children:"default"}),". Setting this environment variable overrides the default dataset ID with the provided value."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_default_key_value_store_id",children:(0,r.jsx)(n.code,{children:"CRAWLEE_DEFAULT_KEY_VALUE_STORE_ID"})}),"\n",(0,r.jsxs)(n.p,{children:["The default key-value store has ID ",(0,r.jsx)(n.code,{children:"default"}),". Setting this environment variable overrides the default key-value store ID with the provided value."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_default_request_queue_id",children:(0,r.jsx)(n.code,{children:"CRAWLEE_DEFAULT_REQUEST_QUEUE_ID"})}),"\n",(0,r.jsxs)(n.p,{children:["The default request queue has ID ",(0,r.jsx)(n.code,{children:"default"}),". Setting this environment variable overrides the default request queue ID with the provided value."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_purge_on_start",children:(0,r.jsx)(n.code,{children:"CRAWLEE_PURGE_ON_START"})}),"\n",(0,r.jsxs)(n.p,{children:["Storage directories are purged by default. If set to ",(0,r.jsx)(n.code,{children:"false"})," - local storage directories would not be purged automatically at the start of the crawler run or before opening of some storage explicitly (e.g. via ",(0,r.jsx)(n.code,{children:"Dataset.open()"}),"). Useful if we're trying e.g. to add more items to dataset with each next run (and keep the previously saved/scraped items)."]}),"\n",(0,r.jsx)(n.h3,{id:"convenience-env-vars",children:"Convenience env vars"}),"\n",(0,r.jsx)(n.p,{children:"The next group includes env vars that can help achieve certain goals without having to change\nour code, such as temporarily switching log level to DEBUG or enabling verbose logging for errors."}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_headless",children:(0,r.jsx)(n.code,{children:"CRAWLEE_HEADLESS"})}),"\n",(0,r.jsxs)(n.p,{children:["If set to ",(0,r.jsx)(n.code,{children:"1"}),", web browsers launched by Crawlee will run in the headless mode. We can still override\nthis setting in the code, e.g. by passing the ",(0,r.jsx)(n.code,{children:"headless: true"})," option to the ",(0,r.jsx)(i.Z,{to:"puppeteer-crawler/function/launchPuppeteer",children:(0,r.jsx)(n.code,{children:"launchPuppeteer()"})})," function. By default, the browsers\nare launched in headful mode, i.e. with windows."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_log_level",children:(0,r.jsx)(n.code,{children:"CRAWLEE_LOG_LEVEL"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies the minimum log level, which can be one of the following values (in order of severity):\n",(0,r.jsx)(n.code,{children:"DEBUG"}),", ",(0,r.jsx)(n.code,{children:"INFO"}),", ",(0,r.jsx)(n.code,{children:"WARNING"}),", ",(0,r.jsx)(n.code,{children:"ERROR"})," and ",(0,r.jsx)(n.code,{children:"OFF"}),". By default, the log level is set to ",(0,r.jsx)(n.code,{children:"INFO"}),",\nwhich means that ",(0,r.jsx)(n.code,{children:"DEBUG"})," messages are not printed to console. See the ",(0,r.jsx)(i.Z,{to:"core/class/Log",children:(0,r.jsx)(n.code,{children:"utils.log"})}),"\nnamespace for logging utilities."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_verbose_log",children:(0,r.jsx)(n.code,{children:"CRAWLEE_VERBOSE_LOG"})}),"\n",(0,r.jsxs)(n.p,{children:["Enables verbose logging if set to ",(0,r.jsx)(n.code,{children:"true"}),". If not explicitly set to ",(0,r.jsx)(n.code,{children:"true"})," - for errors thrown from inside request handler a warning with only error message will be logged as long as we know the request will be retried. Same applies to some known errors (such as timeout errors). Disabled by default."]}),"\n",(0,r.jsx)(n.h4,{id:"crawlee_memory_mbytes",children:(0,r.jsx)(n.code,{children:"CRAWLEE_MEMORY_MBYTES"})}),"\n",(0,r.jsxs)(n.p,{children:["Sets the amount of system memory in megabytes to be used by the ",(0,r.jsx)(i.Z,{to:"core/class/AutoscaledPool",children:(0,r.jsx)(n.code,{children:"AutoscaledPool"})}),".\nIt is used to limit the number of concurrently running tasks. By default, the max amount of memory\nto be used is set to one quarter of total system memory, i.e. on a system with 8192 MB of memory,\nthe autoscaling feature will only use up to 2048 MB of memory."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-class",children:"Configuration class"}),"\n",(0,r.jsxs)(n.p,{children:["The last option to adjust Crawlee configuration is to use the ",(0,r.jsx)(i.Z,{to:"core/class/Configuration",children:(0,r.jsx)(n.code,{children:"Configuration"})})," class in the code."]}),"\n",(0,r.jsx)(n.h3,{id:"global-configuration",children:"Global Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["By default, there is a global singleton instance of ",(0,r.jsx)(n.code,{children:"Configuration"})," class, it is used by the crawlers and some other classes that depend on a configurable behavior. In most cases you don't need to adjust any options there, but if needed - you can get access to it via ",(0,r.jsx)(i.Z,{to:"core/class/Configuration#getGlobalConfig",children:(0,r.jsx)(n.code,{children:"Configuration.getGlobalConfig()"})})," function. Now you can easily ",(0,r.jsx)(i.Z,{to:"core/class/Configuration#get",children:(0,r.jsx)(n.code,{children:"get"})})," and ",(0,r.jsx)(i.Z,{to:"core/class/Configuration#set",children:(0,r.jsx)(n.code,{children:"set"})})," the ",(0,r.jsx)(i.Z,{to:"core/interface/ConfigurationOptions",children:(0,r.jsx)(n.code,{children:"ConfigurationOptions"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { CheerioCrawler, Configuration, sleep } from 'crawlee';\n\n// Get the global configuration\nconst config = Configuration.getGlobalConfig();\n// Set the 'persistStateIntervalMillis' option\n// of global configuration to 10 seconds\nconfig.set('persistStateIntervalMillis', 10_000);\n\n// Note, that we are not passing the configuration to the crawler\n// as it's using the global configuration\nconst crawler = new CheerioCrawler();\n\ncrawler.router.addDefaultHandler(async ({ request }) => {\n    // For the first request we wait for 5 seconds,\n    // and add the second request to the queue\n    if (request.url === 'https://www.example.com/1') {\n        await sleep(5_000);\n        await crawler.addRequests(['https://www.example.com/2'])\n    }\n    // For the second request we wait for 10 seconds,\n    // and abort the run\n    if (request.url === 'https://www.example.com/2') {\n        await sleep(10_000);\n        process.exit(0);\n    }\n});\n\nawait crawler.run(['https://www.example.com/1']);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is pretty much the same example we used for showing ",(0,r.jsx)(n.code,{children:"crawlee.json"})," usage,\nbut now we're using the global configuration, which is the only difference.\nIf you run this example - you will find the ",(0,r.jsx)(n.code,{children:"SDK_CRAWLER_STATISTICS"})," file in default Key-Value store as before,\nwhich would show the same number of finishes requests (one) and the same crawler runtime (~10 seconds).\nThis confirms that provided parameters worked: the state was persisted after 10 seconds, as it was set in the global configuration."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["After running the same example with commented two lines of code related to ",(0,r.jsx)(n.code,{children:"Configuration"})," there will be\nno ",(0,r.jsx)(n.code,{children:"SDK_CRAWLER_STATISTICS"})," file stored in the default Key-Value store:\nas we did not change the ",(0,r.jsx)(n.code,{children:"persistStateIntervalMillis"}),", Crawlee used the default value of 60 seconds,\nand the crawler was forcefully aborted after ~15 seconds of run time before it persisted the state for the first time."]})}),"\n",(0,r.jsx)(n.h3,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can create a custom configuration. In this case you need to pass it to the class that is going to use it, e.g. to the crawler. Let's adjust the previous example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { CheerioCrawler, Configuration, sleep } from 'crawlee';\n\n// Create new configuration\nconst config = new Configuration({\n    // Set the 'persistStateIntervalMillis' option to 10 seconds\n    persistStateIntervalMillis: 10_000,\n});\n\n// Now we need to pass the configuration to the crawler\nconst crawler = new CheerioCrawler({}, config);\n\ncrawler.router.addDefaultHandler(async ({ request }) => {\n    // for the first request we wait for 5 seconds,\n    // and add the second request to the queue\n    if (request.url === 'https://www.example.com/1') {\n        await sleep(5_000);\n        await crawler.addRequests(['https://www.example.com/2'])\n    }\n    // for the second request we wait for 10 seconds,\n    // and abort the run\n    if (request.url === 'https://www.example.com/2') {\n        await sleep(10_000);\n        process.exit(0);\n    }\n});\n\nawait crawler.run(['https://www.example.com/1']);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you run this example - it would work exactly the same as before,\nwith the same ",(0,r.jsx)(n.code,{children:"SDK_CRAWLER_STATISTICS"})," file in default Key-Value store after the run,\nshowing the same number of finished requests and the same crawler run time."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you would not pass the configuration to the crawler, there again will be\nno ",(0,r.jsx)(n.code,{children:"SDK_CRAWLER_STATISTICS"})," file stored in the default Key-Value store, this time for a different reason though.\nSince we did not pass the configuration to the crawler,\nthe crawler will use the global configuration, which is using the default ",(0,r.jsx)(n.code,{children:"persistStateIntervalMillis"}),".\nSo again, the run was aborted before the state was persisted for the first time."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4959:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var r=t(9960),o=t(4477),i=t(2263),s=t(5893),a=t(643).version.split("."),l=[a[0],a[1]].join(".");const c=function(e){var n=e.to,t=e.children,a=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||a.version===l?(0,s.jsx)(r.default,{to:"/api/"+n,children:t}):(0,s.jsx)(r.default,{to:"/api/"+("current"===a.version?"next":a.version)+"/"+n,children:t})}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);