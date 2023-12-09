"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5694],{8598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),o=n(1151);const r={id:"deployment",title:"Running your crawler in the Cloud",sidebar_label:"Running in the Cloud",description:"Deploying Crawlee projects to the Apify Platform"},l=void 0,a={id:"introduction/deployment",title:"Running your crawler in the Cloud",description:"Deploying Crawlee projects to the Apify Platform",source:"@site/../docs/introduction/09-deployment.mdx",sourceDirName:"introduction",slug:"/introduction/deployment",permalink:"/crawlee-cn/docs/next/introduction/deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"deployment",title:"Running your crawler in the Cloud",sidebar_label:"Running in the Cloud",description:"Deploying Crawlee projects to the Apify Platform"},sidebar:"docs",previous:{title:"Refactoring",permalink:"/crawlee-cn/docs/next/introduction/refactoring"},next:{title:"Guides",permalink:"/crawlee-cn/docs/next/guides"}},s={},c=[{value:"Apify Platform",id:"apify-platform",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Logging in to the Apify Platform",id:"logging-in-to-the-apify-platform",level:2},{value:"Adjusting the code",id:"adjusting-the-code",level:2},{value:"Initializing the project",id:"initializing-the-project",level:2},{value:"Ship it!",id:"ship-it",level:2},{value:"Learning more about web scraping",id:"learning-more-about-web-scraping",level:2},{value:"Thank you! \ud83c\udf89",id:"thank-you-",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"apify-platform",children:"Apify Platform"}),"\n",(0,i.jsxs)(t.p,{children:["Crawlee is developed by ",(0,i.jsx)(t.a,{href:"https://apify.com",target:"_blank",rel:"noopener",children:(0,i.jsx)(t.strong,{children:"Apify"})}),", the web scraping and automation platform. You could say it is the ",(0,i.jsx)(t.strong,{children:"home of Crawlee projects"}),". In this section we will show you how to deploy the crawler there with just a few simple steps. You can deploy a ",(0,i.jsx)(t.strong,{children:"Crawlee"})," project wherever you want, but using the ",(0,i.jsx)(t.a,{href:"https://console.apify.com",target:"_blank",rel:"noopener",children:(0,i.jsx)(t.strong,{children:"Apify Platform"})})," will give you the best experience."]}),"\n",(0,i.jsxs)(t.p,{children:["In case you want to deploy your Crawlee project to other platforms, check out the ",(0,i.jsx)(t.a,{href:"../deployment",children:(0,i.jsx)(t.strong,{children:"Deployment"})})," section of the documentation instead."]}),"\n",(0,i.jsxs)(t.p,{children:["With a few simple steps, you can convert your Crawlee project into a so-called ",(0,i.jsx)(t.strong,{children:"Actor"}),". Actors are serverless micro-apps that are easy to develop, run, share, and integrate. The infra, proxies, and storages are ready to go. ",(0,i.jsx)(t.a,{href:"https://apify.com/actors",target:"_blank",rel:"noopener",children:"Learn more about Actors"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["We started this guide by using the Crawlee CLI to bootstrap the project - it offers the basic Crawlee templates, including a ready-made ",(0,i.jsx)(t.code,{children:"Dockerfile"}),". If you know you will be deploying your project to the Apify Platform, you might want to start with the Apify CLI instead. It also offers several project templates, and those are all set up to be used on the Apify Platform right ahead."]})}),"\n",(0,i.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(t.p,{children:"The first step will be installing two new dependencies:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Apify SDK, a toolkit for working with the Apify Platform. This will allow us to wire the storages (e.g. ",(0,i.jsx)(t.code,{children:"RequestQueue"})," and ",(0,i.jsx)(t.code,{children:"Dataset"}),") to the Apify cloud products. This will be a dependency of our Node.js project."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install apify\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Apify CLI, a command-line tool that will help us with authentication and deployment. This will be a globally installed tool, you will install it only once and use it in all your Crawlee/Apify projects."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install -g apify-cli\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"logging-in-to-the-apify-platform",children:"Logging in to the Apify Platform"}),"\n",(0,i.jsxs)(t.p,{children:["The next step will be ",(0,i.jsx)(t.a,{href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener",children:"creating your Apify account"}),". Don't worry, we have a ",(0,i.jsx)(t.strong,{children:"free tier"}),", so you can try things out before you buy in! Once you have that, it's time to log in with the just-installed ",(0,i.jsx)(t.a,{href:"https://docs.apify.com/cli/",target:"_blank",rel:"noopener",children:"Apify CLI"}),". You will need your personal access token, which you can find at ",(0,i.jsx)(t.a,{href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener",children:"https://console.apify.com/account#/integrations"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"apify login\n"})}),"\n",(0,i.jsx)(t.h2,{id:"adjusting-the-code",children:"Adjusting the code"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have your account set up, you will need to adjust the code a tiny bit. We will use the ",(0,i.jsx)(t.a,{href:"https://docs.apify.com/sdk/js/",target:"_blank",rel:"noopener",children:"Apify SDK"}),", which will help us to wire the Crawlee storages (like the ",(0,i.jsx)(t.code,{children:"RequestQueue"}),") to their Apify Platform counterparts - otherwise Crawlee would keep things only in memory."]}),"\n",(0,i.jsxs)(t.p,{children:["Open your ",(0,i.jsx)(t.code,{children:"src/main.js"})," file (or ",(0,i.jsx)(t.code,{children:"src/main.ts"})," if you used a TypeScript template), and add ",(0,i.jsx)(t.code,{children:"Actor.init()"})," to the beginning of your main script and ",(0,i.jsx)(t.code,{children:"Actor.exit()"})," to the end of it. Don't forget to ",(0,i.jsx)(t.code,{children:"await"})," those calls, as both functions are async. Your code should look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.js"',children:"// highlight-next-line\nimport { Actor } from 'apify';\nimport { PlaywrightCrawler, log } from 'crawlee';\nimport { router } from './routes.mjs';\n\n// highlight-next-line\nawait Actor.init();\n\n// This is better set with CRAWLEE_LOG_LEVEL env var\n// or a configuration option. This is just for show \ud83d\ude08\nlog.setLevel(log.LEVELS.DEBUG);\n\nlog.debug('Setting up crawler.');\nconst crawler = new PlaywrightCrawler({\n    // Instead of the long requestHandler with\n    // if clauses we provide a router instance.\n    requestHandler: router,\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n\n// highlight-next-line\nawait Actor.exit();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Actor.init()"})," call will configure Crawlee to use the Apify API instead of its default memory storage interface. It also sets up few other things, like listening to the platform events via websockets. The ",(0,i.jsx)(t.code,{children:"Actor.exit()"})," call then handles graceful shutdown - it will close the open handles created by the ",(0,i.jsx)(t.code,{children:"Actor.init()"})," call, as without that, the Node.js process would be stuck."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Actor.init()"})," call works conditionally based on the environment variables, namely based on the ",(0,i.jsx)(t.code,{children:"APIFY_IS_AT_HOME"})," env var, which is set to ",(0,i.jsx)(t.code,{children:"true"})," on the Apify Platform. This means that your project will remain working the same locally, but will use the Apify API when deployed to the Apify Platform."]})}),"\n",(0,i.jsx)(t.h2,{id:"initializing-the-project",children:"Initializing the project"}),"\n",(0,i.jsx)(t.p,{children:"We will also need to initialize the project for Apify, to do that, let's use the Apify CLI again:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"apify init\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will create a folder called ",(0,i.jsx)(t.code,{children:".actor"}),", and an ",(0,i.jsx)(t.code,{children:"actor.json"})," file inside it - this file contains the configuration relevant to the Apify Platform, namely the Actor name, version, build tag, and few other things. Check out the ",(0,i.jsx)(t.a,{href:"https://docs.apify.com/platform/actors/development/actor-definition/actor-json",target:"_blank",rel:"noopener",children:"relevant documentation"})," to see all the different things you can set there up."]}),"\n",(0,i.jsx)(t.h2,{id:"ship-it",children:"Ship it!"}),"\n",(0,i.jsx)(t.p,{children:"And that's all, our project is now ready to be published on the Apify Platform. We will use the Apify CLI once more to do that:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"apify push\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command will create an archive from your project, upload it to the Apify Platform and initiate a Docker build. Once finished, you will get a link to your new Actor on the platform."}),"\n",(0,i.jsx)(t.h2,{id:"learning-more-about-web-scraping",children:"Learning more about web scraping"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you want to learn more about web scraping and browser automation, check out the ",(0,i.jsx)(t.a,{href:"https://developers.apify.com/academy",target:"_blank",rel:"noopener",children:"Apify Academy"}),". It's full of courses and tutorials on the topic. From beginner to advanced. And the best thing: ",(0,i.jsx)(t.strong,{children:"It's free and open source"})," \u2764\ufe0f"]})}),"\n",(0,i.jsx)(t.h2,{id:"thank-you-",children:"Thank you! \ud83c\udf89"}),"\n",(0,i.jsxs)(t.p,{children:["That's it! Thanks for reading the whole introduction and if there's anything wrong, please \ud83d\ude4f let us know on ",(0,i.jsx)(t.a,{href:"https://github.com/apify/crawlee",target:"_blank",rel:"noopener",children:"GitHub"})," or in our ",(0,i.jsx)(t.a,{href:"https://discord.com/invite/jyEM2PRvMU",target:"_blank",rel:"noopener",children:"Discord community"}),". Happy scraping! \ud83d\udc4b"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(7294);const o={},r=i.createContext(o);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);