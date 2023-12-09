"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7015],{607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(5893),r=t(1151);const s={id:"gcp-cheerio",title:"Cheerio on GCP Cloud Functions"},i=void 0,c={id:"deployment/gcp-cheerio",title:"Cheerio on GCP Cloud Functions",description:"Running CheerioCrawler-based project in GCP functions is actually quite easy - you just have to make a few changes to the project code.",source:"@site/versioned_docs/version-3.6/deployment/gcp-cheerio.md",sourceDirName:"deployment",slug:"/deployment/gcp-cheerio",permalink:"/crawlee-cn/docs/deployment/gcp-cheerio",draft:!1,unlisted:!1,tags:[],version:"3.6",frontMatter:{id:"gcp-cheerio",title:"Cheerio on GCP Cloud Functions"},sidebar:"docs",previous:{title:"Browsers on AWS Lambda",permalink:"/crawlee-cn/docs/deployment/aws-browsers"},next:{title:"Browsers in GCP Cloud Run",permalink:"/crawlee-cn/docs/deployment/gcp-browsers"}},l={},a=[{value:"Updating the project",id:"updating-the-project",level:2},{value:"Deploying to Google Cloud Platform",id:"deploying-to-google-cloud-platform",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Running CheerioCrawler-based project in GCP functions is actually quite easy - you just have to make a few changes to the project code."}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-project",children:"Updating the project"}),"\n",(0,o.jsxs)(n.p,{children:["Let\u2019s first create the Crawlee project locally with ",(0,o.jsx)(n.code,{children:"npx crawlee create"}),". Set the ",(0,o.jsx)(n.code,{children:'"main"'})," field in the ",(0,o.jsx)(n.code,{children:"package.json"})," file to ",(0,o.jsx)(n.code,{children:'"src/main.js"'}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n    "name": "my-crawlee-project",\n    "version": "1.0.0",\n    // highlight-next-line\n    "main": "src/main.js",\n    ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now, let\u2019s update the ",(0,o.jsx)(n.code,{children:"main.js"})," file, namely:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Pass a separate ",(0,o.jsx)(n.code,{children:"Configuration"})," instance (with the ",(0,o.jsx)(n.code,{children:"persistStorage"})," option set to ",(0,o.jsx)(n.code,{children:"false"}),") to the crawler constructor."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"import { CheerioCrawler, Configuration } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\nconst crawler = new CheerioCrawler({\n    requestHandler: router,\n// highlight-start\n}, new Configuration({\n    persistStorage: false,\n}));\n// highlight-end\n\nawait crawler.run(startUrls);\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Wrap the crawler call in a separate handler function. This function:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Can be asynchronous"}),"\n",(0,o.jsxs)(n.li,{children:["Takes two positional arguments - ",(0,o.jsx)(n.code,{children:"req"})," (containing details about the user-made request to your cloud function) and ",(0,o.jsx)(n.code,{children:"res"})," (response object you can modify).","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Call ",(0,o.jsx)(n.code,{children:"res.send(data)"})," to return any data from the cloud function."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Export this function from the ",(0,o.jsx)(n.code,{children:"src/main.js"})," module as a named export."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"import { CheerioCrawler, Configuration } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\n// highlight-next-line\nexport const handler = async (req, res) => {\n    const crawler = new CheerioCrawler({\n        requestHandler: router,\n    }, new Configuration({\n        persistStorage: false,\n    }));\n\n    await crawler.run(startUrls);\n    \n    // highlight-next-line\n    return res.send(await crawler.getData())\n// highlight-next-line\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"deploying-to-google-cloud-platform",children:"Deploying to Google Cloud Platform"}),"\n",(0,o.jsx)(n.p,{children:"In the Google Cloud dashboard, create a new function, allocate memory and CPUs to it, set region and function timeout."}),"\n",(0,o.jsxs)(n.p,{children:["When deploying, pick ",(0,o.jsx)(n.strong,{children:"ZIP Upload"}),". You have to create a new GCP storage bucket to store the zip packages in."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, for the package - you should zip all the contents of your project folder ",(0,o.jsxs)(n.strong,{children:["excluding the ",(0,o.jsx)(n.code,{children:"node_modules"})," folder"]})," - GCP doesn\u2019t have Layers like AWS Lambda does, but takes care of the project setup for us based on the ",(0,o.jsx)(n.code,{children:"package.json"})," file)."]}),"\n",(0,o.jsxs)(n.p,{children:["Also, make sure to set the ",(0,o.jsx)(n.strong,{children:"Entry point"})," to the name of the function you\u2019ve exported from the ",(0,o.jsx)(n.code,{children:"src/main.js"})," file. GCP takes the file from the ",(0,o.jsx)(n.code,{children:"package.json"}),"'s ",(0,o.jsx)(n.code,{children:"main"})," field."]}),"\n",(0,o.jsxs)(n.p,{children:["After the Function deploys, you can test it by clicking the \u201cTesting\u201d tab. This tab contains a ",(0,o.jsx)(n.code,{children:"curl"})," script that calls your new Cloud Function. To avoid having to install the ",(0,o.jsx)(n.code,{children:"gcloud"})," CLI application locally, you can also run this script in the Cloud Shell by clicking the link above the code block."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);