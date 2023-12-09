"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5605],{4730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(5893),s=t(1151),i=t(5316);t(4959);const c={code:"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`);\n        if (request.label === 'DETAIL') {\n            const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\n            const manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n\n            const title = await page.locator('.product-meta h1').textContent();\n            const sku = await page.locator('span.product-meta__sku-number').textContent();\n\n            const priceElement = page\n                .locator('span.price')\n                .filter({\n                    hasText: '$',\n                })\n                .first();\n\n            const currentPriceString = await priceElement.textContent();\n            const rawPrice = currentPriceString.split('$')[1];\n            const price = Number(rawPrice.replaceAll(',', ''));\n\n            const inStockElement = page\n                .locator('span.product-form__inventory')\n                .filter({\n                    hasText: 'In stock',\n                })\n                .first();\n\n            const inStock = (await inStockElement.count()) > 0;\n\n            const results = {\n                url: request.url,\n                manufacturer,\n                title,\n                sku,\n                currentPrice: price,\n                availableInStock: inStock,\n            };\n\n            console.log(results);\n        } else if (request.label === 'CATEGORY') {\n            // We are now on a category page. We can use this to paginate through and enqueue all products,\n            // as well as any subsequent pages we find\n\n            await page.waitForSelector('.product-item > a');\n            await enqueueLinks({\n                selector: '.product-item > a',\n                label: 'DETAIL', // <= note the different label\n            });\n\n            // Now we need to find the \"Next\" button and enqueue the next page of results (if it exists)\n            const nextButton = await page.$('a.pagination__next');\n            if (nextButton) {\n                await enqueueLinks({\n                    selector: 'a.pagination__next',\n                    label: 'CATEGORY', // <= note the same label\n                });\n            }\n        } else {\n            // This means we're on the start page, with no label.\n            // On this page, we just want to enqueue all the category pages.\n\n            await page.waitForSelector('.collection-block-item');\n            await enqueueLinks({\n                selector: '.collection-block-item',\n                label: 'CATEGORY',\n            });\n        }\n    },\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",hash:"invalid-token"},o={id:"scraping",title:"\u8fdb\u4e00\u6b65\u6293\u53d6",sidebar_label:"\u8fdb\u4e00\u6b65\u6293\u53d6",description:"\u4f60\u8fc8\u51fa\u4e86\u4e0eCrawlee\u4e00\u8d77\u8fdb\u884c\u7f51\u7edc\u6293\u53d6\u7684\u7b2c\u4e00\u6b65"},a=void 0,l={id:"introduction/scraping",title:"\u8fdb\u4e00\u6b65\u6293\u53d6",description:"\u4f60\u8fc8\u51fa\u4e86\u4e0eCrawlee\u4e00\u8d77\u8fdb\u884c\u7f51\u7edc\u6293\u53d6\u7684\u7b2c\u4e00\u6b65",source:"@site/versioned_docs/version-3.6/introduction/06-scraping.mdx",sourceDirName:"introduction",slug:"/introduction/scraping",permalink:"/crawlee-cn/docs/introduction/scraping",draft:!1,unlisted:!1,tags:[],version:"3.6",sidebarPosition:6,frontMatter:{id:"scraping",title:"\u8fdb\u4e00\u6b65\u6293\u53d6",sidebar_label:"\u8fdb\u4e00\u6b65\u6293\u53d6",description:"\u4f60\u8fc8\u51fa\u4e86\u4e0eCrawlee\u4e00\u8d77\u8fdb\u884c\u7f51\u7edc\u6293\u53d6\u7684\u7b2c\u4e00\u6b65"},sidebar:"docs",previous:{title:"\u722c\u53d6\u793a\u4f8b\u5546\u5e97",permalink:"/crawlee-cn/docs/introduction/crawling"},next:{title:"\u4fdd\u5b58\u6570\u636e",permalink:"/crawlee-cn/docs/introduction/saving-data"}},d={},p=[{value:"\u6293\u53d6URL\u3001\u5236\u9020\u5546\u548cSKU",id:"\u6293\u53d6url\u5236\u9020\u5546\u548csku",level:3},{value:"\u83b7\u53d6\u6807\u9898",id:"\u83b7\u53d6\u6807\u9898",level:3},{value:"\u83b7\u53d6SKU",id:"\u83b7\u53d6sku",level:3},{value:"\u83b7\u53d6\u5f53\u524d\u552e\u4ef7",id:"\u83b7\u53d6\u5f53\u524d\u552e\u4ef7",level:3},{value:"\u83b7\u53d6\u53ef\u7528\u5e93\u5b58",id:"\u83b7\u53d6\u53ef\u7528\u5e93\u5b58",level:3},{value:"\u6700\u540e\u7684\u5c1d\u8bd5",id:"\u6700\u540e\u7684\u5c1d\u8bd5",level:2},{value:"\u4e0b\u4e00\u8282",id:"\u4e0b\u4e00\u8282",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"./real-world-project#choosing-the-data-you-need",children:"\u771f\u5b9e\u9879\u76ee\u7ae0\u8282"}),"\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u5173\u4e8e\u793a\u4f8b\u5546\u5e97\u4ea7\u54c1\u4fe1\u606f\u7684\u6536\u96c6\u6e05\u5355\u3002\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"URL: \u7f51\u5740"}),"\n",(0,r.jsx)(n.li,{children:"Manufacturer: \u5236\u9020\u5546"}),"\n",(0,r.jsx)(n.li,{children:"SKU: \u5546\u54c1SKU"}),"\n",(0,r.jsx)(n.li,{children:"Title: \u5546\u54c1\u6807\u9898"}),"\n",(0,r.jsx)(n.li,{children:"Current price: \u5546\u54c1\u5f53\u524d\u552e\u4ef7"}),"\n",(0,r.jsx)(n.li,{children:"Stock available: \u53ef\u7528\u5e93\u5b58"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"data to scrape",src:t(394).Z+"",title:"Overview of data to be scraped.",width:"1798",height:"1165"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6293\u53d6url\u5236\u9020\u5546\u548csku",children:"\u6293\u53d6URL\u3001\u5236\u9020\u5546\u548cSKU"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u4e9b\u4fe1\u606f\u5c31\u5728\u6211\u4eec\u9762\u524d\uff0c\u751a\u81f3\u65e0\u9700\u89e6\u6478\u4ea7\u54c1\u8be6\u7ec6\u9875\u9762\u3002\u6211\u4eec\u5df2\u7ecf\u62e5\u6709",(0,r.jsx)(n.code,{children:"URL"})," - ",(0,r.jsx)(n.code,{children:"request.url"}),"\u3002\u4ed4\u7ec6\u89c2\u5bdf\u5b83\uff0c\u6211\u4eec\u610f\u8bc6\u5230\u8fd8\u53ef\u4ee5\u4eceURL\u4e2d\u63d0\u53d6\u5236\u9020\u5546\uff08\u56e0\u4e3a\u6240\u6709\u4ea7\u54c1\u7684URL\u90fd\u4ee5",(0,r.jsx)(n.code,{children:"/products/<manufacturer>"}),"\u5f00\u5934\uff09\u3002\u7136\u540e\u6211\u4eec\u53ea\u9700\u5206\u5272\u5b57\u7b26\u4e32\u5c31\u884c\u4e86\uff01"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"request.loadedUrl"}),"\u3002\u8bb0\u4f4f\u533a\u522b\uff1a",(0,r.jsx)(n.code,{children:"request.url"})," \u662f\u4f60\u961f\u5217\u8981\u8bbf\u95ee\u7684\u94fe\u63a5\uff0c\u800c ",(0,r.jsx)(n.code,{children:"request.loadedUrl"})," \u662f\u8fd4\u56de\u7ed3\u679c\uff0c\u53ef\u80fd\u7ecf\u8fc7\u91cd\u5b9a\u5411\u540e\u88ab\u5904\u7406\u7684\u94fe\u63a5\u3002"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// request.url = https://warehouse-theme-metal.myshopify.com/products/sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440\n\nconst urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\nconst manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u504f\u597d\u95ee\u9898\uff0c\u662f\u5426\u5c06\u8fd9\u4e9b\u4fe1\u606f\u5355\u72ec\u5b58\u50a8\u5728\u751f\u6210\u7684\u6570\u636e\u96c6\u4e2d\u5b8c\u5168\u53d6\u51b3\u4e8e\u4f60\u3002\u4f7f\u7528\u6570\u636e\u96c6\u7684\u4eba\u4e5f\u53ef\u4ee5\u8f7b\u677e\u5730\u4eceURL\u4e2d\u89e3\u6790\u51fa\u201c\u5236\u9020\u5546\u201d\uff0c\u6240\u4ee5\u662f\u5426\u6709\u5fc5\u8981\u91cd\u590d\u6570\u636e\u5462\uff1f\u6211\u8ba4\u4e3a\uff0c\u9664\u975e\u589e\u52a0\u7684\u6570\u636e\u6d88\u8017\u592a\u5927\u800c\u96be\u4ee5\u627f\u53d7\uff0c\u5426\u5219\u6700\u597d\u5c3d\u53ef\u80fd\u4f7f\u6570\u636e\u96c6\u4e30\u5bcc\u3002\u5047\u5982\uff0c\u6709\u4eba\u53ef\u80fd\u60f3\u6309\u201c\u5236\u9020\u5546\u201d\u8fdb\u884c\u7b5b\u9009\u3002"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u7684\u4e00\u4ef6\u4e8b\u662f\uff0c\u201c\u5236\u9020\u5546\u201d\u7684\u540d\u79f0\u4e2d\u53ef\u80fd\u6709 ",(0,r.jsx)(n.code,{children:"-"}),"\u3002\u5982\u679c\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u6700\u597d\u7684\u65b9\u6cd5\u662f\u4ece\u8be6\u60c5\u9875\u9762\u4e2d\u63d0\u53d6\u5b83\uff0c\u4f46\u8fd9\u5e76\u975e\u5f3a\u5236\u8981\u6c42\u3002\u5f52\u6839\u7ed3\u5e95\uff0c\u4f60\u5e94\u8be5\u8c03\u6574\u5e76\u9009\u62e9\u59cb\u7ec8\u6700\u9002\u5408\u4f60\u9879\u76ee\u65b9\u6cd5\u548c\u6293\u53d6\u7f51\u7ad9\u7684\u89e3\u51b3\u65b9\u6848\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u662f\u65f6\u5019\u5411\u7ed3\u679c\u4e2d\u6dfb\u52a0\u66f4\u591a\u6570\u636e\u4e86\u3002\u8ba9\u6211\u4eec\u6253\u5f00\u5176\u4e2d\u4e00\u4e2a\u4ea7\u54c1\u8be6\u7ec6\u9875\u9762\uff0c\u4f8b\u5982",(0,r.jsx)(n.a,{href:"https://warehouse-theme-metal.myshopify.com/products/sony-xbr-65x950g-65-class-64-5-diag-bravia-4k-hdr-ultra-hd-tv",target:"_blank",rel:"noopener",children:(0,r.jsx)(n.code,{children:"Sony XBR-950G"})})," \u9875\u9762\uff0c\u5e76\u4f7f\u7528\u6211\u4eec\u7684 DevTools-Fu \ud83e\udd4b \u6765\u627e\u51fa\u5982\u4f55\u83b7\u53d6\u4ea7\u54c1\u7684\u6807\u9898\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u83b7\u53d6\u6807\u9898",children:"\u83b7\u53d6\u6807\u9898"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"product title",src:t(5317).Z+"",title:"Finding product title in DevTools.",width:"4106",height:"2400"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u4f7f\u7528\u5143\u7d20\u9009\u62e9\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u6807\u9898\u4f4d\u4e8e",(0,r.jsx)(n.code,{children:"<h1>"}),"\u6807\u7b7e\u4e0b\u9762\uff0c\u6b63\u5982\u6807\u9898\u5e94\u8be5\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002",(0,r.jsx)(n.code,{children:"<h1>"}),"\u6807\u7b7e\u88ab\u5305\u542b\u5728\u4e00\u4e2aclass\u4e3a",(0,r.jsx)(n.code,{children:"product-meta"}),"\u7684",(0,r.jsx)(n.code,{children:"<div>"}),"\u4e2d\u3002\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u4e00\u70b9\u6765\u521b\u5efa\u4e00\u4e2a\u7ec4\u5408\u9009\u62e9\u5668",(0,r.jsx)(n.code,{children:".product-meta h1"}),"\u3002\u5b83\u9009\u62e9class\u4e3a ",(0,r.jsx)(n.code,{children:"product-meta"})," \u7684\u5b50\u7ea7\u4e0b\u7684 ",(0,r.jsx)(n.code,{children:"<h1>"})," \u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u8bf7\u8bb0\u4f4f\uff0c\u4f60\u53ef\u4ee5\u5728DevTools\u7684",(0,r.jsx)(n.strong,{children:"Elements"}),"\u9009\u9879\u5361\u4e2d\u6309\u4e0bCTRL+F\uff08\u6216Mac\u4e0a\u7684CMD+F\uff09\u6765\u6253\u5f00\u641c\u7d22\u680f\uff0c\u5728\u90a3\u91cc\u4f60\u53ef\u4ee5\u5feb\u901f\u4f7f\u7528\u9009\u62e9\u5668\u641c\u7d22\u5143\u7d20\u3002\u59cb\u7ec8\u4f7f\u7528DevTools\u9a8c\u8bc1\u4f60\u7684\u6293\u53d6\u8fc7\u7a0b\u548c\u5047\u8bbe\u3002\u8fd9\u6bd4\u4e00\u76f4\u66f4\u6539\u722c\u866b\u4ee3\u7801\u8981\u5feb\u5f97\u591a\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u83b7\u53d6\u6807\u9898\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Playwright"}),"\u548c",(0,r.jsx)(n.code,{children:".product-meta h1"}),"\u9009\u62e9\u5668\u6765\u627e\u5230\u5b83\uff0c\u8be5\u9009\u62e9\u5668\u9009\u62e9\u6211\u4eec\u6b63\u5728\u5bfb\u627e\u7684",(0,r.jsx)(n.code,{children:"<h1>"}),"\u5143\u7d20\uff0c\u5982\u679c\u627e\u5230\u591a\u4e2a\uff0c\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\u8fd9\u5f88\u597d\u3002\u901a\u5e38\u6700\u597d\u662f\u8ba9\u722c\u866b\u5d29\u6e83\u800c\u4e0d\u662f\u6084\u6084\u5730\u8fd4\u56de\u9519\u8bef\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const title = await page.locator('.product-meta h1').textContent();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u83b7\u53d6sku",children:"\u83b7\u53d6SKU"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7DevTools\uff0c\u6211\u4eec\u53d1\u73b0\u4ea7\u54c1SKU\u4f4d\u4e8e\u4e00\u4e2a\u5e26\u6709\u7c7b\u540d",(0,r.jsx)(n.code,{children:"product-meta__sku-number"}),"\u7684",(0,r.jsx)(n.code,{children:"<span>"}),"\u6807\u7b7e\u5185\u3002\u7531\u4e8e\u9875\u9762\u4e0a\u6ca1\u6709\u5176\u4ed6\u5177\u6709\u8be5\u7c7b\u540d\u7684",(0,r.jsx)(n.code,{children:"<span>"}),"\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u653e\u5fc3\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"product sku selector",src:t(4823).Z+"",title:"Finding product SKU in DevTools.",width:"4108",height:"2392"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const sku = await page.locator('span.product-meta__sku-number').textContent();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u83b7\u53d6\u5f53\u524d\u552e\u4ef7",children:"\u83b7\u53d6\u5f53\u524d\u552e\u4ef7"}),"\n",(0,r.jsxs)(n.p,{children:["DevTools\u544a\u8bc9\u6211\u4eec",(0,r.jsx)(n.code,{children:"currentPrice"}),"\u53ef\u4ee5\u5728\u5e26\u6709",(0,r.jsx)(n.code,{children:"price"}),"\u7c7b\u7684",(0,r.jsx)(n.code,{children:"<span>"}),"\u5143\u7d20\u4e2d\u627e\u5230\u3002\u4f46\u5b83\u8fd8\u663e\u793a\uff0c\u5b83\u4f5c\u4e3a\u539f\u59cb\u6587\u672c\u5d4c\u5957\u5728\u53e6\u4e00\u4e2a\u5e26\u6709",(0,r.jsx)(n.code,{children:"visually-hidden"}),"\u7c7b\u7684 ",(0,r.jsx)(n.code,{children:"<span>"})," \u5143\u7d20\u65c1\u8fb9\u3002\u6211\u4eec\u4e0d\u9700\u8981\u90a3\u4e2a\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u8fc7\u6ee4\u6389\u5b83\uff0c\u5e76\u4e14\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"hasText"})," \u8f85\u52a9\u51fd\u6570\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"product current price selector",src:t(9976).Z+"",title:"Finding product current price in DevTools.",width:"4108",height:"2396"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const priceElement = page\n    .locator('span.price')\n    .filter({\n        hasText: '$',\n    })\n    .first();\n\nconst currentPriceString = await priceElement.textContent();\nconst rawPrice = currentPriceString.split('$')[1];\nconst price = Number(rawPrice.replaceAll(',', ''));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e4d\u4e00\u770b\u53ef\u80fd\u4f1a\u663e\u5f97\u6709\u70b9\u590d\u6742\uff0c\u4f46\u8ba9\u6211\u4eec\u6765\u9010\u6b65\u89e3\u91ca\u4e00\u4e0b\u6211\u4eec\u505a\u4e86\u4ec0\u4e48\u3002\u9996\u5148\uff0c\u6211\u4eec\u901a\u8fc7\u7b5b\u9009\u5e26\u6709\u201c$\u201d\u7b26\u53f7\u7684\u5143\u7d20\u6765\u627e\u5230",(0,r.jsx)(n.code,{children:"price"}),"\u6807\u7b7e\u7684\u6b63\u786e\u90e8\u5206\uff08\u5177\u4f53\u662f\u5b9e\u9645\u4ef7\u683c\uff09\u3002\u5f53\u8fd9\u6837\u505a\u65f6\uff0c\u6211\u4eec\u5c06\u83b7\u5f97\u7c7b\u4f3c\u4e8e\u201c\u7279\u4ef7$1,398.00\u201d\u7684\u5b57\u7b26\u4e32\u3002\u5355\u72ec\u62ff\u51fa\u6765\u5e76\u4e0d\u592a\u6709\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u901a\u8fc7\u6309\u7167\u201c$\u201d\u7b26\u53f7\u8fdb\u884c\u5206\u5272\u6765\u63d0\u53d6\u5b9e\u9645\u7684\u6570\u5b57\u90e8\u5206\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u65e6\u6211\u4eec\u8fd9\u6837\u505a\uff0c\u6211\u4eec\u4f1a\u6536\u5230\u4e00\u4e2a\u4ee3\u8868\u4ef7\u683c\u7684\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u6211\u4eec\u5c06\u628a\u5b83\u8f6c\u6362\u6210\u6570\u5b57\u3002 \u6211\u4eec\u901a\u8fc7\u7528\u7a7a\u767d\u66ff\u6362\u6240\u6709\u9017\u53f7\uff08\u4ee5\u4fbf\u89e3\u6790\u4e3a\u6570\u5b57\uff09\uff0c\u7136\u540e\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Number()"}),"\u5c06\u5176\u89e3\u6790\u4e3a\u6570\u5b57\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u83b7\u53d6\u53ef\u7528\u5e93\u5b58",children:"\u83b7\u53d6\u53ef\u7528\u5e93\u5b58"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u5904\u7406",(0,r.jsx)(n.code,{children:"\u53ef\u7528\u5e93\u5b58"}),"\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6709\u4e00\u4e2a\u5e26\u6709",(0,r.jsx)(n.code,{children:"product-form__inventory"}),"\u7c7b\u7684span\uff0c\u5b83\u5305\u542b\u6587\u672c",(0,r.jsx)(n.code,{children:"In stock"}),"\u3002\u6211\u4eec\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528",(0,r.jsx)(n.code,{children:"hasText"}),"\u52a9\u624b\u6765\u8fc7\u6ee4\u51fa\u6b63\u786e\u7684\u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const inStockElement = await page\n    .locator('span.product-form__inventory')\n    .filter({\n        hasText: 'In stock',\n    })\n    .first();\n\nconst inStock = (await inStockElement.count()) > 0;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u5173\u5fc3\u7684\u53ea\u662f\u5143\u7d20\u662f\u5426\u5b58\u5728\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"count()"}),"\u65b9\u6cd5\u6765\u68c0\u67e5\u662f\u5426\u6709\u4efb\u4f55\u4e0e\u6211\u4eec\u7684\u9009\u62e9\u5668\u5339\u914d\u7684\u5143\u7d20\u3002\u5982\u679c\u6709\uff0c\u90a3\u4e48\u6211\u4eec\u77e5\u9053\u4ea7\u54c1\u662f\u6709\u5e93\u5b58\u7684\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u597d\u4e86\uff01\u6211\u4eec\u9700\u8981\u7684\u6240\u6709\u6570\u636e\u90fd\u5728\u8fd9\u91cc\u3002\u4e3a\u4e86\u5b8c\u6574\u8d77\u89c1\uff0c\u8ba9\u6211\u4eec\u628a\u6240\u6709\u5c5e\u6027\u52a0\u5728\u4e00\u8d77\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u4e86\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\nconst manufacturer = urlPart.split('-')[0]; // 'sennheiser'\n\nconst title = await page.locator('.product-meta h1').textContent();\nconst sku = await page.locator('span.product-meta__sku-number').textContent();\n\nconst priceElement = page\n    .locator('span.price')\n    .filter({\n        hasText: '$',\n    })\n    .first();\n\nconst currentPriceString = await priceElement.textContent();\nconst rawPrice = currentPriceString.split('$')[1];\nconst price = Number(rawPrice.replaceAll(',', ''));\n\nconst inStockElement = await page\n    .locator('span.product-form__inventory')\n    .filter({\n        hasText: 'In stock',\n    })\n    .first();\n\nconst inStock = (await inStockElement.count()) > 0;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u540e\u7684\u5c1d\u8bd5",children:"\u6700\u540e\u7684\u5c1d\u8bd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\u4e00\u5207\uff0c\u6240\u4ee5\u62ff\u51fa\u6211\u4eec\u65b0\u521b\u5efa\u7684\u6293\u53d6\u903b\u8f91\uff0c\u5c06\u5176\u653e\u5165\u539f\u6765\u7684",(0,r.jsx)(n.code,{children:"requestHandler()"}),"\u4e2d\uff0c\u770b\u9b54\u6cd5\u53d1\u751f\u5427\uff01"]}),"\n",(0,r.jsx)(i.Z,{className:"language-js",type:"playwright",children:c}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4f60\u8fd0\u884c\u722c\u866b\u65f6\uff0c\u4f60\u5c06\u5728\u63a7\u5236\u53f0\u4e0a\u770b\u5230\u5df2\u722c\u53d6\u7684URL\u53ca\u5176\u6293\u53d6\u7684\u6570\u636e\u3002\u8f93\u51fa\u7ed3\u679c\u4f1a\u7c7b\u4f3c\u4e8e\u8fd9\u6837\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "url": "https://warehouse-theme-metal.myshopify.com/products/sony-str-za810es-7-2-channel-hi-res-wi-fi-network-av-receiver",\n    "manufacturer": "sony",\n    "title": "Sony STR-ZA810ES 7.2-Ch Hi-Res Wi-Fi Network A/V Receiver",\n    "sku": "SON-692802-STR-DE",\n    "currentPrice": 698,\n    "availableInStock": true\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0b\u4e00\u8282",children:"\u4e0b\u4e00\u8282"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e0b\u4e00\u8bfe\u4e2d\uff0c\u6211\u4eec\u5c06\u5411\u4f60\u5c55\u793a\u5982\u4f55\u5c06\u4f60\u6293\u53d6\u7684\u6570\u636e\u4fdd\u5b58\u5230\u78c1\u76d8\u4e0a\u4ee5\u4f9b\u8fdb\u4e00\u6b65\u5904\u7406\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4959:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var r=t(9960),s=t(4477),i=t(2263),c=t(5893),o=t(643).version.split("."),a=[o[0],o[1]].join(".");const l=function(e){var n=e.to,t=e.children,o=(0,s.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===a?(0,c.jsx)(r.default,{to:"/api/"+n,children:t}):(0,c.jsx)(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+n,children:t})}},5316:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(3366),s=(t(7294),t(512)),i=t(3e3),c=t(9960);const o={button:"button_YBBj",container:"container_TGAW"};var a=t(5893),l=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const p=function(e){var n,t=e.children,p=e.actor,h=e.hash,u=e.type,m=(0,r.Z)(e,l);if(h=null!=(n=h)?n:t.hash,!t.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!h)return(0,a.jsx)(i.default,Object.assign({},m,{children:t.code}));var x="https://console.apify.com/actors/"+(null!=p?p:d[null!=u?u:"playwright"])+"?runConfig="+h+"&asrc=run_on_apify";return(0,a.jsxs)("div",{className:(0,s.Z)(o.container,"runnable-code-block"),children:[(0,a.jsxs)(c.default,{href:x,className:o.button,rel:"follow",children:["Run on",(0,a.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,a.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,a.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,a.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,a.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,a.jsx)(i.default,Object.assign({},m,{className:(0,s.Z)(o.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:t.code}))]})}},9976:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/current-price-16b0f4b92332837111d04f632234d2c3.jpg"},394:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/scraping-practice-ed4e3a233c852ffa694b80371fed9d37.jpg"},4823:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/sku-4427a5a820183e7c74fb4beeabcf9116.jpg"},5317:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/title-8f63a08e5ecf82b5547f1fac8ffc77a7.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(7294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);