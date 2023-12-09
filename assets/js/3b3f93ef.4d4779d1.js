"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2289],{2401:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>l,frontMatter:()=>a,toc:()=>o});var s=t(5893),n=t(1151),a={},i=void 0,o=[{value:"Example usage",id:"example-usage",level:2}];function c(e){var r=Object.assign({a:"a",code:"code",h2:"h2",p:"p",pre:"pre"},(0,n.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Provides a framework for the parallel crawling of web pages using plain HTTP requests and ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/linkedom",children:"linkedom"})," DOM implementation. The URLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."]}),"\n",(0,s.jsxs)(r.p,{children:["Since ",(0,s.jsx)(r.code,{children:"LinkeDOMCrawler"})," uses raw HTTP requests to download web pages, it is very fast and efficient on data bandwidth. However, if the target website requires JavaScript to display the content, you might need to use ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",children:"PuppeteerCrawler"})," or ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler",children:"PlaywrightCrawler"})," instead, because it loads the pages using full-featured headless Chrome browser."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"LinkeDOMCrawler"})," downloads each URL using a plain HTTP request, parses the HTML content using ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/linkedom",children:"LinkeDOM"})," and then invokes the user-provided ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#requestHandler",children:"LinkeDOMCrawlerOptions.requestHandler"})," to extract page data using the ",(0,s.jsx)(r.code,{children:"window"})," object."]}),"\n",(0,s.jsxs)(r.p,{children:["The source URLs are represented using ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/Request",children:"Request"})," objects that are fed from ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestList",children:"RequestList"})," or ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestQueue",children:"RequestQueue"})," instances provided by the ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#requestList",children:"LinkeDOMCrawlerOptions.requestList"})," or ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#requestQueue",children:"LinkeDOMCrawlerOptions.requestQueue"})," constructor options, respectively."]}),"\n",(0,s.jsxs)(r.p,{children:["If both ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#requestList",children:"LinkeDOMCrawlerOptions.requestList"})," and ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#requestQueue",children:"LinkeDOMCrawlerOptions.requestQueue"})," are used, the instance first processes URLs from the ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestList",children:"RequestList"})," and automatically enqueues all of them to ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestQueue",children:"RequestQueue"})," before it starts their processing. This ensures that a single URL is not crawled multiple times."]}),"\n",(0,s.jsxs)(r.p,{children:["The crawler finishes when there are no more ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/Request",children:"Request"})," objects to crawl."]}),"\n",(0,s.jsxs)(r.p,{children:["We can use the ",(0,s.jsx)(r.code,{children:"preNavigationHooks"})," to adjust ",(0,s.jsx)(r.code,{children:"gotOptions"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"preNavigationHooks: [\n    (crawlingContext, gotOptions) => {\n        // ...\n    },\n]\n"})}),"\n",(0,s.jsxs)(r.p,{children:["By default, ",(0,s.jsx)(r.code,{children:"LinkeDOMCrawler"})," only processes web pages with the ",(0,s.jsx)(r.code,{children:"text/html"})," and ",(0,s.jsx)(r.code,{children:"application/xhtml+xml"})," MIME content types (as reported by the ",(0,s.jsx)(r.code,{children:"Content-Type"})," HTTP header), and skips pages with other content types. If you want the crawler to process other content types, use the ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#additionalMimeTypes",children:"LinkeDOMCrawlerOptions.additionalMimeTypes"})," constructor option. Beware that the parsing behavior differs for HTML, XML, JSON and other types of content. For more details, see ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/linkedom-crawler/interface/LinkeDOMCrawlerOptions#requestHandler",children:"LinkeDOMCrawlerOptions.requestHandler"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["New requests are only dispatched when there is enough free CPU and memory available, using the functionality provided by the ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/AutoscaledPool",children:"AutoscaledPool"})," class. All ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/AutoscaledPool",children:"AutoscaledPool"})," configuration options can be passed to the ",(0,s.jsx)(r.code,{children:"autoscaledPoolOptions"})," parameter of the ",(0,s.jsx)(r.code,{children:"LinkeDOMCrawler"})," constructor. For user convenience, the ",(0,s.jsx)(r.code,{children:"minConcurrency"})," and ",(0,s.jsx)(r.code,{children:"maxConcurrency"})," ",(0,s.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/AutoscaledPool",children:"AutoscaledPool"})," options are available directly in the ",(0,s.jsx)(r.code,{children:"LinkeDOMCrawler"})," constructor."]}),"\n",(0,s.jsx)(r.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"const crawler = new LinkeDOMCrawler({\n    async requestHandler({ request, window }) {\n        await Dataset.pushData({\n            url: request.url,\n            title: window.document.title,\n        });\n    },\n});\n\nawait crawler.run([\n    'http://crawlee.dev',\n]);\n"})})]})}function l(e){void 0===e&&(e={});var r=Object.assign({},(0,n.a)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(c,Object.assign({},e))})):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var s=t(7294);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);