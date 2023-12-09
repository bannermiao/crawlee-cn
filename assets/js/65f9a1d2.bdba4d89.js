"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6478],{1918:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var t=r(5893),l=r(1151),i=(r(4959),r(5488)),a=r(5162),s=r(3e3);const o="// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('.collection-block-item');\n        // Execute a function in the browser which targets\n        // the actor card elements and allows their manipulation.\n        const categoryTexts = await page.$$eval('.collection-block-item', (els) => {\n            // Extract text content from the actor cards\n            return els.map((el) => el.textContent);\n        });\n        categoryTexts.forEach((text, i) => {\n            console.log(`CATEGORY_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",c="// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, parseWithCheerio }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('.collection-block-item');\n        // Extract the page's HTML from browser\n        // and parse it with Cheerio.\n        const $ = await parseWithCheerio();\n        // Use familiar Cheerio syntax to\n        // select all the actor cards.\n        $('.collection-block-item').each((i, el) => {\n            const text = $(el).text();\n            console.log(`CATEGORY_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",d={id:"real-world-project",title:"\u83b7\u53d6\u4e00\u4e9b\u771f\u5b9e\u7684\u6570\u636e",sidebar_label:"\u771f\u5b9e\u9879\u76ee",description:"\u4f60\u8fc8\u51fa\u4e86\u4e0eCrawlee\u4e00\u8d77\u8fdb\u884c\u7f51\u7edc\u6293\u53d6\u7684\u7b2c\u4e00\u6b65"},u=void 0,h={id:"introduction/real-world-project",title:"\u83b7\u53d6\u4e00\u4e9b\u771f\u5b9e\u7684\u6570\u636e",description:"\u4f60\u8fc8\u51fa\u4e86\u4e0eCrawlee\u4e00\u8d77\u8fdb\u884c\u7f51\u7edc\u6293\u53d6\u7684\u7b2c\u4e00\u6b65",source:"@site/versioned_docs/version-3.6/introduction/04-real-world-project.mdx",sourceDirName:"introduction",slug:"/introduction/real-world-project",permalink:"/crawlee-cn/docs/introduction/real-world-project",draft:!1,unlisted:!1,tags:[],version:"3.6",sidebarPosition:4,frontMatter:{id:"real-world-project",title:"\u83b7\u53d6\u4e00\u4e9b\u771f\u5b9e\u7684\u6570\u636e",sidebar_label:"\u771f\u5b9e\u9879\u76ee",description:"\u4f60\u8fc8\u51fa\u4e86\u4e0eCrawlee\u4e00\u8d77\u8fdb\u884c\u7f51\u7edc\u6293\u53d6\u7684\u7b2c\u4e00\u6b65"},sidebar:"docs",previous:{title:"\u6dfb\u52a0\u66f4\u591a\u94fe\u63a5",permalink:"/crawlee-cn/docs/introduction/adding-urls"},next:{title:"\u722c\u53d6\u793a\u4f8b\u5546\u5e97",permalink:"/crawlee-cn/docs/introduction/crawling"}},p={},m=[{value:"\u5236\u4f5c\u4e00\u4e2a\u751f\u4ea7\u7ea7\u722c\u866b",id:"\u5236\u4f5c\u4e00\u4e2a\u751f\u4ea7\u7ea7\u722c\u866b",level:2},{value:"\u5236\u5b9a\u8ba1\u5212",id:"\u5236\u5b9a\u8ba1\u5212",level:2},{value:"\u9009\u62e9\u4f60\u9700\u8981\u7684\u6570\u636e",id:"\u9009\u62e9\u4f60\u9700\u8981\u7684\u6570\u636e",level:2},{value:"\u8d77\u59cb\u7f51\u5740",id:"\u8d77\u59cb\u7f51\u5740",level:3},{value:"\u6d4f\u89c8\u9875\u9762",id:"\u6d4f\u89c8\u9875\u9762",level:2},{value:"\u5206\u7c7b\u548c\u6392\u5e8f",id:"\u5206\u7c7b\u548c\u6392\u5e8f",level:3},{value:"\u5206\u9875",id:"\u5206\u9875",level:3},{value:"\u722c\u884c\u7b56\u7565",id:"\u722c\u884c\u7b56\u7565",level:2},{value:"\u5408\u7406\u6027\u68c0\u67e5",id:"\u5408\u7406\u6027\u68c0\u67e5",level:2},{value:"DevTools - \u7f51\u9875\u6293\u53d6\u5de5\u5177\u7bb1",id:"devtools---\u7f51\u9875\u6293\u53d6\u5de5\u5177\u7bb1",level:2},{value:"\u9009\u62e9\u5143\u7d20",id:"\u9009\u62e9\u5143\u7d20",level:2},{value:"\u4e0b\u4e00\u8282",id:"\u4e0b\u4e00\u8282",level:2}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["\u563f\uff0c\u4f19\u8ba1\u4eec\uff0c\u4f60\u77e5\u9053\u5417\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5f88\u9177\u7684\u6293\u53d6\u7f51\u9875",(0,t.jsx)(n.code,{children:"<title>"}),"\u5143\u7d20\u4e86\uff0c\u4f46\u8fd9\u5e76\u4e0d\u662f\u975e\u5e38\u7684\u6709\u7528\u3002\u6700\u7ec8\u6211\u4eec\u80fd\u4e0d\u80fd\u6293\u53d6\u4e00\u4e9b\u771f\u5b9e\u6570\u636e\uff0c\u5e76\u5c06\u4ed6\u4eec\u7528\u53ef\u673a\u5668\u5904\u7406\u7684\u683c\u5f0f\u8fdb\u884c\u4fdd\u5b58\uff1f\u6240\u4ee5\u8fd9\u6b63\u662f\u672c\u6559\u7a0b\u7684\u539f\u56e0\uff01"]})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6765\u5427\u83dc\u9e21\uff01\u9996\u5148\uff0c\u4f60\u5fc5\u987b\u5b66\u4f1a\u722c\u866b\u3002\u53ea\u6709\u8fd9\u6837\u4f60\u624d\u80fd\u9a7e\u9a6d\u7f51\u7edc\u6570\u636e\uff01"}),"\n",(0,t.jsx)(n.h2,{id:"\u5236\u4f5c\u4e00\u4e2a\u751f\u4ea7\u7ea7\u722c\u866b",children:"\u5236\u4f5c\u4e00\u4e2a\u751f\u4ea7\u7ea7\u722c\u866b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5236\u4f5c\u4e00\u4e2a\u751f\u4ea7\u7ea7\u7684\u7f51\u7edc\u722c\u866b\u5e76\u4e0d\u56f0\u96be\uff0c\u4f46\u662f\u5728\u6293\u53d6\u6570\u636e\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u8bb8\u591a\u9677\u9631\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u4e2a\u771f\u5b9e\u9879\u76ee\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u6293\u53d6",(0,t.jsx)(n.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"\u793a\u4f8b\u5546\u5e97"}),"\u800c\u4e0d\u662fCrawlee\u5b98\u7f51\u3002\u5b83\u5305\u542b\u4e86\u5404\u79cd\u5206\u7c7b\u4e0b\u7684\u4ea7\u54c1\u5217\u8868\uff0c\u5e76\u4e14\u6bcf\u4e2a\u4ea7\u54c1\u90fd\u6709\u81ea\u5df1\u7684\u8be6\u60c5\u9875\u9762\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u7f51\u7ad9\u9700\u8981JavaScript\u6e32\u67d3\uff0c\u8fd9\u5c31\u4f7f\u6211\u4eec\u80fd\u591f\u5c55\u793a\u66f4\u591aCrawlee\u7684\u529f\u80fd\u3002\u6211\u4eec\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u63d0\u793a\uff0c\u4e3a\u4f60\u89e3\u51b3\u5728\u5927\u89c4\u6a21\u8fdb\u884c\u722c\u53d6\u65f6\uff0c\u80af\u5b9a\u4f1a\u9047\u5230\u7684\u4e00\u4e9b\u73b0\u5b9e\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5bf9\u722c\u866b\u7406\u8bba\u4e0d\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u76f4\u63a5",(0,t.jsx)(n.a,{href:"./crawling",children:"\u8df3\u5230\u4e0b\u4e00\u8282"}),"\uff0c\u76f4\u63a5\u5f00\u59cb\u7f16\u7801\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u5236\u5b9a\u8ba1\u5212",children:"\u5236\u5b9a\u8ba1\u5212"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u65f6\u5019\u722c\u53d6\u6570\u636e\u786e\u5b9e\u5f88\u76f4\u63a5\uff0c\u4f46\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u5148\u505a\u4e00\u4e9b\u7814\u7a76\uff0c\u5c1d\u8bd5\u56de\u7b54\u4e0b\u9762\u95ee\u9898\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f51\u7ad9\u7684\u7ed3\u6784\u662f\u600e\u6837\u7684\uff1f"}),"\n",(0,t.jsxs)(n.li,{children:["\u6211\u80fd\u53ea\u7528HTTP\u8bf7\u6c42\uff08\u7528",(0,t.jsx)(n.code,{children:"CheerioCrawler"}),"\uff09\u6765\u722c\u53d6\u5b83\u5417\uff1f"]}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u9700\u8981\u65e0\u5934\u6d4f\u89c8\u5668\u505a\u4e9b\u4ec0\u4e48\u5417\uff1f"}),"\n",(0,t.jsx)(n.li,{children:"\u662f\u5426\u6709\u53cd\u722c\u4fdd\u62a4\u63aa\u65bd\uff1f"}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u9700\u8981\u89e3\u6790HTML\uff0c\u8fd8\u662f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u83b7\u53d6\u6570\u636e\uff0c\u6bd4\u5982\u53ef\u4ee5\u76f4\u63a5\u4ece\u7f51\u7ad9\u7684API\u83b7\u53d6\u5417\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u8fbe\u5230\u672c\u6559\u7a0b\u7684\u5b66\u4e60\u76ee\u7684\uff0c\u6211\u4eec\u5047\u8bbe\u65e0\u6cd5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"CheerioCrawler"}),"\u6765\u722c\u53d6\u7f51\u7ad9\u3002\u5b9e\u9645\u4e0a\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u6211\u60f3\u505a\u7684\u6bd4\u5165\u95e8\u6307\u5357\u66f4\u6df1\u5165\u4e00\u4e9b\u3002\u73b0\u5728\u6211\u4eec\u5148\u5c06\u4e8b\u60c5\u7b80\u5316\uff0c\u7528",(0,t.jsx)(n.code,{children:"PlaywrightCrawler"}),"\u6765\u722c\u53d6\uff0c\u5e76\u4e14\u4f60\u4f1a\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5c06\u5b66\u4e60\u5173\u4e8e\u65e0\u5934\u6d4f\u89c8\u5668\u7684\u77e5\u8bc6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9009\u62e9\u4f60\u9700\u8981\u7684\u6570\u636e",children:"\u9009\u62e9\u4f60\u9700\u8981\u7684\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\u8981\u505a\u7684\u662f\u786e\u5b9a\u4f60\u60f3\u8981\u6293\u53d6\u54ea\u4e9b\u6570\u636e\uff0c\u4ee5\u53ca\u5728\u54ea\u91cc\u627e\u5230\u5b83\u4eec\u3002\u6682\u65f6\u8ba9\u6211\u4eec\u5c31\u4ece\u793a\u4f8b\u5546\u5e97\u7684",(0,t.jsx)(n.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"\u96c6\u5408\u9875\u9762"}),"\u4e2d\u6293\u53d6\u6240\u6709\u5206\u7c7b\u4e0b\u7684\u6240\u6709\u4ea7\u54c1\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u4ea7\u54c1\uff0c\u6211\u4eec\u60f3\u83b7\u53d6\u4ee5\u4e0b\u4fe1\u606f\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"URL: \u7f51\u5740"}),"\n",(0,t.jsx)(n.li,{children:"Manufacturer: \u5236\u9020\u5546"}),"\n",(0,t.jsx)(n.li,{children:"SKU: \u5546\u54c1SKU"}),"\n",(0,t.jsx)(n.li,{children:"Title: \u5546\u54c1\u6807\u9898"}),"\n",(0,t.jsx)(n.li,{children:"Current price: \u5546\u54c1\u5f53\u524d\u552e\u4ef7"}),"\n",(0,t.jsx)(n.li,{children:"Stock available: \u53ef\u7528\u5e93\u5b58"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u4f1a\u6ce8\u610f\u5230\u4e00\u4e9b\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u5728\u4ea7\u54c1\u5217\u4e0a\u627e\u5230\uff0c\u4f46\u662f\u5bf9\u4e8e\u50cf\u201cSKU\u201d\u8fd9\u6837\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u6253\u5f00\u4ea7\u54c1\u7684\u8be6\u60c5\u9875\u83b7\u53d6\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"data to scrape",src:r(394).Z+"",title:"Overview of data to be scraped.",width:"1798",height:"1165"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8d77\u59cb\u7f51\u5740",children:"\u8d77\u59cb\u7f51\u5740"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u662f\u4f60\u5f00\u59cb\u722c\u53d6\u6570\u636e\u7684\u5730\u65b9\u3002\u4e3a\u4e86\u65b9\u4fbf\uff0c\u6211\u4eec\u9700\u8981\u5c3d\u53ef\u80fd\u5c06\u9760\u8fd1\u76ee\u6807\u6570\u636e\u7684\u9875\u9762\u4f5c\u4e3a\u5f00\u59cb\u9875\u9762\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u6211\u4eec\u60f3\u8981\u63d0\u53d6\u7684\u6240\u6709\u5185\u5bb9\u90fd\u53ef\u4ee5\u5728\u96c6\u5408\u9875\u9762",(0,t.jsx)(n.code,{children:"https://warehouse-theme-metal.myshopify.com/collections"}),"\u4e2d\u627e\u5230\uff0c\u5c31\u6ca1\u6709\u5fc5\u8981\u628a\u9996\u9875",(0,t.jsx)(n.code,{children:"https://warehouse-theme-metal.myshopify.com/"}),"\u4f5c\u4e3a\u5f00\u59cb\u9875\u9762\uff0c\u7136\u540e\u518d\u53bb\u722c\u53d6",(0,t.jsx)(n.code,{children:"collections"}),"\u96c6\u5408\u9875\u9762\uff0c\u8fd9\u6837\u64cd\u4f5c\u5c31\u6ca1\u6709\u592a\u591a\u610f\u4e49\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6d4f\u89c8\u9875\u9762",children:"\u6d4f\u89c8\u9875\u9762"}),"\n",(0,t.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u4ed4\u7ec6\u770b\u4e00\u4e0b\u96c6\u5408\u9875\u9762",(0,t.jsx)(n.code,{children:"https://warehouse-theme-metal.myshopify.com/collections"}),"\u3002\u9875\u9762\u4e2d\u6709\u5f88\u591a",(0,t.jsx)(n.strong,{children:"\u5206\u7c7b"}),"\uff0c\u8fdb\u5165\u6bcf\u4e2a\u5206\u7c7b\u90fd\u6709\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u4ea7\u54c1\u5217\u8868"}),"\u9875\u3002\u5728\u4e00\u4e9b\u4ea7\u54c1\u5217\u8868\u9875\u5e95\u90e8\uff0c\u4f60\u8fd8\u4f1a\u6ce8\u610f\u5230\u6709\u4e00\u4e9b\u8fdb\u5165\u4e0b\u4e00\u9875\u7684\u94fe\u63a5\uff0c\u901a\u5e38\u88ab\u79f0\u4e3a",(0,t.jsx)(n.strong,{children:"\u5206\u9875"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u7c7b\u548c\u6392\u5e8f",children:"\u5206\u7c7b\u548c\u6392\u5e8f"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f60\u70b9\u51fb\u5de6\u8fb9\u7684\u5206\u7c7b\u65f6\uff0c\u5b83\u4eec\u4f1a\u7b5b\u9009\u52a0\u8f7d\u8be5\u5206\u7c7b\u4e0b\u4ea7\u54c1\u3002\u901a\u8fc7\u8fdb\u4e00\u6b65\u7684\u64cd\u4f5c\u53ef\u4ee5\u89c2\u5bdf\u5230\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u9009\u62e9\u6309\u4e0d\u540c\u6761\u4ef6\u5bf9\u5546\u54c1\u8fdb\u884c\u6392\u5e8f\uff08\u4f8b\u5982",(0,t.jsx)(n.code,{children:"Best selling"}),"\u6216",(0,t.jsx)(n.code,{children:"Price, low to high"}),"\uff09\uff0c\u4f46\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4e0d\u6d89\u53ca\u8fd9\u4e9b\u5185\u5bb9\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u4e00\u4e9b\u7f51\u7ad9\u4e0a\uff0c\u6bd4\u5982",(0,t.jsx)(n.a,{href:"https://amazon.com",target:"_blank",rel:"noopener",children:"amazon.com"}),"\uff0c\u6dfb\u52a0\u7b5b\u9009\u6761\u4ef6\u540e\u7684\u4ea7\u54c1\u603b\u6570\u5b9e\u9645\u4e0a\u8981\u6bd4\u5206\u7c7b\u4e0b\u603b\u4ea7\u54c1\u7684\u603b\u6570\u8981\u5c11\u3002\u5728",(0,t.jsx)(n.a,{href:"https://docs.apify.com/tutorials/scrape-paginated-sites",target:"_blank",rel:"noopener",children:"\u6293\u53d6\u6709\u9650\u5236\u5206\u9875\u7f51\u7ad9\u7684\u8bfe\u7a0b"}),"\u4e2d\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u9875",children:"\u5206\u9875"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u5546\u5e97\u7684\u5206\u9875\u4f8b\u5b50\u4e5f\u975e\u5e38\u7b80\u5355\u3002\u4ee5\u201caudio\u201d\u8fd9\u4e2a\u96c6\u5408\u4e3a\u4f8b\uff0c\u5728\u5207\u6362\u5206\u9875\u94fe\u63a5\u65f6\uff0c\u4f60\u4f1a\u770b\u5230URL\u66f4\u6539\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://warehouse-theme-metal.myshopify.com/collections/audio?page=2\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u4f60\u5c1d\u8bd5\u70b9\u51fb\u7b2c4\u9875\u7684\u94fe\u63a5\u65f6\u3002\u4f60\u5c06\u770b\u5230\u5206\u9875\u94fe\u63a5\u88ab\u66f4\u65b0\u5e76\u663e\u793a\u66f4\u591a\u7684\u7684\u9875\u9762\u3002\u6240\u4ee5\u4f60\u5982\u4f55\u624d\u80fd\u76f8\u4fe1\u8fd9\u4e2a\u5206\u9875\u4f1a\u5305\u542b\u6240\u6709\u9875\u9762\u5e76\u4e14\u4e0d\u4f1a\u5728\u67d0\u4e2a\u65f6\u523b\u9690\u85cf\u5462\uff1f"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"\u8fd9\u4e0e\u4e0a\u9762\u7684\u6761\u4ef6\u7b5b\u9009\u95ee\u9898\u7c7b\u4f3c\uff0c\u5982\u679c\u6709\u5206\u9875\u7684\u5b58\u5728\uff0c\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u6d4f\u89c8\u5230\u6240\u6709\u7ed3\u679c\u3002\u6240\u4ee5\u59cb\u7ec8\u8981\u5bf9\u5206\u9875\u8fdb\u884c\u53cd\u590d\u89c2\u5bdf\u6d4b\u8bd5\u3002\u5426\u5219\uff0c\u4f60\u53ef\u80fd\u4f1a\u9519\u8fc7\u4e00\u90e8\u5206\u7ed3\u679c\uff0c\u751a\u81f3\u90fd\u4e0d\u77e5\u9053\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u64b0\u5199\u672c\u6587\u6863\u65f6\uff0c\u201caudio\u201d\u96c6\u5408\u663e\u793a\u4e86147\u4e2a\u4ea7\u54c1\u7ed3\u679c\u3002 \u5feb\u901f\u8ba1\u7b97\u5728\u4e00\u9875\u4e0a\u4ea7\u54c1\u6570\u91cf\u4e3a24\u30026\u884c\u4e58\u4ee54\u4e2a\u4ea7\u54c1\u3002 \u6240\u4ee5\u8fd9\u610f\u5473\u7740\u771f\u5b9e\u5206\u9875\u67097\u9875\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u76f8\u4fe1\u8fd9\u4e2a\u7ed3\u679c\uff0c\u53ef\u4ee5\u8bbf\u95ee\u4e2d\u95f4\u7684\u67d0\u4e2a\u9875\u9762\uff0c\u4f8b\u5982",(0,t.jsx)(n.code,{children:"https://warehouse-theme-metal.myshopify.com/collections/audio?page=2"})," \uff0c\u7136\u540e\u67e5\u770b\u663e\u793a\u5185\u5bb9\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u722c\u884c\u7b56\u7565",children:"\u722c\u884c\u7b56\u7565"}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u77e5\u9053\u4ece\u54ea\u91cc\u5f00\u59cb\u4ee5\u53ca\u5982\u4f55\u627e\u5230\u6240\u6709\u7684\u8be6\u7ec6\u4fe1\u606f\u4e86\uff0c\u518d\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u722c\u53d6\u8fc7\u7a0b\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u8bbf\u95ee\u5305\u542b\u6240\u6709\u5206\u7c7b\u7684\u96c6\u5408\u9875\u9762\uff08\u5f00\u59cb\u9875\u9762\uff09\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5c06\u6240\u6709\u5206\u7c7b\u7684\u94fe\u63a5\u52a0\u5165\u961f\u5217\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5c06\u5206\u7c7b\u4e0b\u5217\u8868\u9875\u7684\u6240\u6709\u4ea7\u54c1\u94fe\u63a5\u52a0\u5165\u961f\u5217\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5c06\u5206\u7c7b\u4e0b\u5217\u8868\u9875\u7684\u4e0b\u4e00\u9875\u94fe\u63a5\u52a0\u5165\u961f\u5217\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u4f9d\u6b21\u6253\u5f00\u961f\u5217\u4e2d\u7684\u4e0b\u4e00\u4e2a\u9875\u9762\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f53\u5b83\u662f\u5546\u54c1\u5217\u8868\u9875\u65f6\uff0c\u8f6c\u5230\u81f3\u7b2c2\u6b65\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5f53\u5b83\u662f\u4ea7\u54c1\u94fe\u63a5\u9875\u9762\u65f6\uff0c\u6293\u53d6\u4ea7\u54c1\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u91cd\u590d\u76f4\u5230\u6240\u6709\u9875\u9762\u548c\u6240\u6709\u4ea7\u54c1\u90fd\u88ab\u5904\u7406\u5b8c\u6bd5\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PlaywrightCrawler"})," \u4f1a\u786e\u4fdd\u8bbf\u95ee\u9875\u9762\uff0c\u5982\u679c\u4f60\u63d0\u4f9b\u7684\u8bf7\u6c42\u662f\u6b63\u786e\u7684\uff0c\u5e76\u4e14\u4f60\u5df2\u7ecf\u77e5\u9053\u5982\u4f55\u5c06\u9875\u9762\u52a0\u5165\u961f\u5217\uff0c\u8fd9\u5e94\u8be5\u662f\u76f8\u5f53\u5bb9\u6613\u7684\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c\u6211\u4eec\u8fd8\u60f3\u7ed9\u4f60\u5c55\u793a\u4e00\u4e9b\u66f4\u591a\u7684\u6280\u5de7\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5408\u7406\u6027\u68c0\u67e5",children:"\u5408\u7406\u6027\u68c0\u67e5"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5728\u7f16\u5199\u6293\u53d6\u903b\u8f91\u4e4b\u524d\u68c0\u67e5\u4e00\u5207\u662f\u5426\u8bbe\u7f6e\u6b63\u786e\u3002\u4f60\u53ef\u80fd\u4f1a\u610f\u8bc6\u5230\u4ee5\u524d\u7684\u5206\u6790\u4e2d\u6709\u4e9b\u5730\u65b9\u4e0d\u592a\u5bf9\uff0c\u6216\u8005\u7f51\u7ad9\u7684\u884c\u4e3a\u53ef\u80fd\u5e76\u975e\u5b8c\u5168\u7b26\u5408\u4f60\u7684\u9884\u671f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u7684\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u722c\u866b\uff0c\u8bbf\u95ee\u5f00\u59cb URL \u5e76\u6253\u5370\u8be5\u9875\u9762\u4e0a\u6240\u6709\u7c7b\u522b\u7684\u6587\u672c\u5185\u5bb9\u3002\u5f53\u4f60\u8fd0\u884c\u4ee3\u7801\u65f6\uff0c\u4f60\u5c06\u770b\u5230\u4e2a\u522b\u5206\u7c7b\u5361\u7247\u4e0a ",(0,t.jsx)(n.em,{children:"\u975e\u5e38\u7cdf\u7cd5\u7684\u683c\u5f0f"})," \u5185\u5bb9\u3002"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"sanity-check",children:[(0,t.jsx)(a.Z,{value:"playwright",label:"Playwright",default:!0,children:(0,t.jsx)(s.default,{language:"js",title:"src/main.mjs",children:o})}),(0,t.jsx)(a.Z,{value:"playwright-with-cheerio",label:"Playwright with Cheerio",children:(0,t.jsx)(s.default,{language:"js",title:"src/main.mjs",children:c})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u77e5\u9053\u5982\u4f55\u83b7\u53d6",(0,t.jsx)(n.code,{children:".collection-block-item"}),"\u9009\u62e9\u5668\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u7ae0\u4e2d\u7684DevTools\u4e2d\u89e3\u91ca\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"devtools---\u7f51\u9875\u6293\u53d6\u5de5\u5177\u7bb1",children:"DevTools - \u7f51\u9875\u6293\u53d6\u5de5\u5177\u7bb1"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u6211\u4eec\u5c06\u5728\u8fd9\u91cc\u4f7f\u7528Chrome DevTools\uff0c\u56e0\u4e3a\u5b83\u662f\u6700\u5e38\u89c1\u7684\u6d4f\u89c8\u5668\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u968f\u610f\u4f7f\u7528\u5176\u4ed6\u4efb\u4f55\u6d4f\u89c8\u5668\uff0c\u5b83\u4eec\u90fd\u975e\u5e38\u76f8\u4f3c\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u5728Chrome\u4e2d\u6253\u5f00DevTools\uff0c\u65b9\u6cd5\u662f\uff1a\u5f53\u8f6c\u5230 ",(0,t.jsx)(n.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"https://warehouse-theme-metal.myshopify.com/collections"})," \u65f6\uff0c\u5728\u9875\u9762\u7684\u4efb\u4f55\u4f4d\u7f6e\u53f3\u952e\u5355\u51fb\u5e76\u9009\u62e9",(0,t.jsx)(n.strong,{children:"\u68c0\u67e5"}),"\uff0c\u6216\u8005\u6309\u4e0b",(0,t.jsx)(n.strong,{children:"F12"}),"\uff0c\u6216\u8005\u662f\u4f60\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e\u7684\u5176\u4ed6\u5feb\u6377\u952e\u3002\u4f7f\u7528DevTools\uff0c\u4f60\u53ef\u4ee5\u68c0\u67e5\u6216\u64cd\u7eb5\u5f53\u524d\u6253\u5f00\u7f51\u9875\u7684\u4efb\u4f55\u65b9\u9762\u3002\u4f60\u53ef\u4ee5\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u4e86\u89e3\u66f4\u591a\u5173\u4e8eDevTools\u7684\u4fe1\u606f\uff1a",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools",target:"_blank",rel:"noopener",children:"official documentation"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9009\u62e9\u5143\u7d20",children:"\u9009\u62e9\u5143\u7d20"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728DevTools\u4e2d\uff0c\u4f7f\u7528",(0,t.jsx)(n.strong,{children:"\u9009\u62e9\u5143\u7d20"}),"\u5de5\u5177\uff0c\u7136\u540e\u5c1d\u8bd5\u5c06\u9f20\u6807\u60ac\u505c\u5728\u9875\u9762\u4e0a\u7684\u4efb\u610f\u4e00\u4e2a\u5206\u7c7b\u5361\u7247\u4e0a\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"select an element",src:r(8322).Z+"",title:"Finding the select an element tool.",width:"1332",height:"600"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u4f1a\u53d1\u73b0\u53ef\u4ee5\u5728\u5361\u7247\u5185\u9009\u62e9\u4e0d\u540c\u7684\u5143\u7d20\u3002\u8bf7\u9009\u4e2d\u6574\u4e2a\u5361\u7247\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5176\u4e2d\u7684\u4e00\u4e9b\u5185\u5bb9\uff0c\u6bd4\u5982\u6807\u9898\u6216\u63cf\u8ff0\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"selected element",src:r(6385).Z+"",title:"Selecting an element by hovering over it.",width:"4030",height:"752"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728DevTools HTML\u68c0\u67e5\u5668\u4e2d\u9009\u62e9\u4e00\u4e2a\u5143\u7d20\u5c06\u4f1a\u7a81\u51fa\u663e\u793a\u5b83\u3002\u4ed4\u7ec6\u89c2\u5bdf\u8fd9\u4e9b\u5143\u7d20\uff0c\u4f60\u4f1a\u53d1\u73b0\u4e0d\u540c\u7684HTML\u5143\u7d20\u4e0a\u90fd\u9644\u6709\u4e00\u4e9b",(0,t.jsx)(n.strong,{children:"class"}),"\u3002\u8fd9\u4e9b\u88ab\u79f0\u4e3a",(0,t.jsx)(n.strong,{children:"CSS class"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6293\u53d6\u6570\u636e\u65f6\u5229\u7528\u5b83\u4eec\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u76f8\u53cd\uff0c\u901a\u8fc7\u5728HTML\u68c0\u67e5\u5668\u4e2d\u60ac\u505c\u5728\u5143\u7d20\u4e0a\uff0c\u4f60\u5c06\u770b\u5230\u5b83\u4eec\u5728\u9875\u9762\u4e0a\u7a81\u51fa\u663e\u793a\u3002\u68c0\u67e5\u96c6\u5408\u5361\u5468\u56f4\u7684\u9875\u9762\u7ed3\u6784\u3002\u4f60\u4f1a\u53d1\u73b0\u6240\u6709\u5361\u7247\u6570\u636e\u90fd\u663e\u793a\u5728\u4e00\u4e2a\u5e26\u6709",(0,t.jsx)(n.code,{children:"class"}),"\u5c5e\u6027\u7684",(0,t.jsx)(n.code,{children:"<a>"}),"\u5143\u7d20\u4e2d\uff0c\u5176\u4e2d\u5305\u62ec",(0,t.jsx)(n.strong,{children:"collection-block-item"}),"\u3002\u73b0\u5728\u5e94\u8be5\u6e05\u695a\u6211\u4eec\u5982\u4f55\u5f97\u5230",(0,t.jsx)(n.code,{children:".collection-block-item"}),"\u9009\u62e9\u5668\u4e86\u3002\u8fd9\u53ea\u662f\u4e00\u79cd\u627e\u5230\u6240\u6709\u5e26\u6709",(0,t.jsx)(n.code,{children:"collection-block-item"}),"\u6807\u8bb0\u7684\u5143\u7d20\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u59cb\u7ec8\u8981\u4ed4\u7ec6\u68c0\u67e5\uff0c\u786e\u4fdd\u4f60\u5728\u4f7f\u7528\u6b64class\u7684\u65f6\u6ca1\u6709\u83b7\u53d6\u4efb\u4f55\u4e0d\u9700\u8981\u7684\u5143\u7d20\u3002\u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bf7\u8fdb\u5165DevTools\u7684",(0,t.jsx)(n.strong,{children:"\u63a7\u5236\u53f0"}),"\u9009\u9879\u5361\u5e76\u8fd0\u884c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"document.querySelectorAll('.collection-block-item');\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u4f1a\u53d1\u73b0\u53ea\u670931\u4e2a\u96c6\u5408\u5361\u7247\u5143\u7d20\u5c06\u88ab\u8fd4\u56de\uff0c\u6b64\u5916\u6ca1\u6709\u5176\u4ed6\u4efb\u4f55\u4e1c\u897f\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["CSS\u9009\u62e9\u5668\u548c\u5f00\u53d1\u5de5\u5177\u662f\u4e00\u4e2a\u76f8\u5f53\u5927\u7684\u8bdd\u9898\u3002\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\uff0c\u8bf7\u8bbf\u95eeApify\u5b66\u9662\u4e2d\u7684",(0,t.jsx)(n.a,{href:"https://developers.apify.com/academy/web-scraping-for-beginners",target:"_blank",rel:"noopener",children:"\u9762\u5411\u521d\u5b66\u8005\u7684\u7f51\u7edc\u6293\u53d6\u8bfe\u7a0b"}),"\u3002",(0,t.jsx)(n.strong,{children:"\u5b83\u662f\u514d\u8d39\u5f00\u6e90\u7684"})," \u2764\ufe0f\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e0b\u4e00\u8282",children:"\u4e0b\u4e00\u8282"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0b\u4e00\u8bfe\u4e2d\uff0c\u6211\u4eec\u5c06\u722c\u53d6\u6574\u4e2a\u793a\u4f8b\u5546\u5e97\uff0c\u5305\u62ec\u6240\u6709\u7684\u5217\u8868\u9875\u9762\u548c\u6240\u6709\u7684\u4ea7\u54c1\u8be6\u60c5\u9875\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var t=r(512);const l={tabItem:"tabItem_Ymn6"};var i=r(5893);function a(e){var n=e.children,r=e.hidden,a=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,a),hidden:r,children:n})}},5488:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(7294),l=r(512),i=r(2466),a=r(989),s=r(2389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=r(5893);function d(e){var n=e.className,r=e.block,t=e.selectedValue,a=e.selectValue,s=e.tabValues,d=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var n=e.currentTarget,r=d.indexOf(n),l=s[r].value;l!==t&&(u(n),a(l))},p=function(e){var n,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var t,l=d.indexOf(e.currentTarget)+1;r=null!=(t=d[l])?t:d[0];break;case"ArrowLeft":var i,a=d.indexOf(e.currentTarget)-1;r=null!=(i=d[a])?i:d[d.length-1]}null==(n=r)||n.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return d.push(e)},onKeyDown:p,onClick:h},i,{className:(0,l.Z)("tabs__item",o.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function u(e){var n=e.lazy,r=e.children,l=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var a=i.find((function(e){return e.props.value===l}));return a?(0,t.cloneElement)(a,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})}))})}function h(e){var n=(0,a.Y)(e);return(0,c.jsxs)("div",{className:(0,l.Z)("tabs-container",o.tabList),children:[(0,c.jsx)(d,Object.assign({},e,n)),(0,c.jsx)(u,Object.assign({},e,n))]})}function p(e){var n=(0,s.Z)();return(0,c.jsx)(h,Object.assign({},e,{children:(0,a.h)(e.children)}),String(n))}},989:(e,n,r)=>{r.d(n,{Y:()=>p,h:()=>c});var t=r(7294),l=r(6550),i=r(469),a=r(1980),s=r(7392),o=r(12);function c(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function u(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId,s=(0,l.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:i});return[(0,a._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function p(e){var n,r,l,a,s=e.defaultValue,c=e.queryString,p=void 0!==c&&c,m=e.groupId,x=d(e),j=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var l=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:s,tabValues:x})})),f=j[0],v=j[1],g=h({queryString:p,groupId:m}),w=g[0],b=g[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,o.Nk)(n),l=r[0],a=r[1],[l,(0,t.useCallback)((function(e){n&&a.set(e)}),[n,a])]),k=y[0],C=y[1],T=function(){var e=null!=w?w:k;return u({value:e,tabValues:x})?e:null}();return(0,i.Z)((function(){T&&v(T)}),[T]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!u({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),C(e)}),[b,C,x]),tabValues:x}}},4959:(e,n,r)=>{r.d(n,{Z:()=>c});r(7294);var t=r(9960),l=r(4477),i=r(2263),a=r(5893),s=r(643).version.split("."),o=[s[0],s[1]].join(".");const c=function(e){var n=e.to,r=e.children,s=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===o?(0,a.jsx)(t.default,{to:"/api/"+n,children:r}):(0,a.jsx)(t.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+n,children:r})}},394:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/scraping-practice-ed4e3a233c852ffa694b80371fed9d37.jpg"},8322:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/select-an-element-63e42331a0df1985c597ffc8ead02a0f.png"},6385:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/selected-element-652798a29828d5b1a4d893c2de7a0e75.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>a});var t=r(7294);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);