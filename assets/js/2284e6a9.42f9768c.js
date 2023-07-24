"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[23526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),f=r,d=c["".concat(u,".").concat(f)]||c[f]||g[f]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},31084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Add Feature Flags in your Node.JS application using GO Feature Flag and Open Feature SDK",description:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time.",authors:["thomaspoignant"],tags:["openfeature","nodeJS"],image:"http://gofeatureflag.org/assets/images/banner-819d71b94352213afa22d2b53f376cab.png"},i=void 0,l={permalink:"/blog/2023/07/24/nodejs-tutorial",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-07-24-nodejs-tutorial/index.md",source:"@site/blog/2023-07-24-nodejs-tutorial/index.md",title:"Add Feature Flags in your Node.JS application using GO Feature Flag and Open Feature SDK",description:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time.",date:"2023-07-24T00:00:00.000Z",formattedDate:"July 24, 2023",tags:[{label:"openfeature",permalink:"/blog/tags/openfeature"},{label:"nodeJS",permalink:"/blog/tags/node-js"}],readingTime:2.85,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"Add Feature Flags in your Node.JS application using GO Feature Flag and Open Feature SDK",description:"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time.",authors:["thomaspoignant"],tags:["openfeature","nodeJS"],image:"http://gofeatureflag.org/assets/images/banner-819d71b94352213afa22d2b53f376cab.png"},nextItem:{title:"Enhancing Flag Configuration with Flag Metadata",permalink:"/blog/2023/06/09/flag-metadata"}},u={authorsImageUrls:[void 0]},s=[{value:"Setup GO Feature Flag",id:"setup-go-feature-flag",level:2},{value:"Create our first flag",id:"create-our-first-flag",level:2},{value:"Start GO Feature Flag",id:"start-go-feature-flag",level:2},{value:"Create Node.JS application using OpenFeature",id:"create-nodejs-application-using-openfeature",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:s},c="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/ascFFZqjQAI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"Welcome to this tutorial on using feature flags in Node js with GO Feature Flag and Open Feature SDKs."),(0,r.kt)("p",null,"In this video, we'll walk you through the process of implementing feature flags in your Node js applications, allowing you to roll out new features gradually and control their visibility in real-time."),(0,r.kt)("h2",{id:"setup-go-feature-flag"},"Setup GO Feature Flag"),(0,r.kt)("p",null,"Before we proceed with the implementation, it's essential to set up GO Feature Flag to efficiently evaluate our flags.\nTo achieve this, we will create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"goff-proxy.yaml")," that will contain the configuration on how to retrieve our feature flags' configuration file."),(0,r.kt)("p",null,"In this file, we will first configure where to retrieve the flags and also a polling interval ",(0,r.kt)("em",{parentName:"p"},"(here 5000 milliseconds)"),".",(0,r.kt)("br",{parentName:"p"}),"\n","It means that GO Feature Flag will read the file every 5 seconds to check if your configuration has changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"retriever:\n  kind: github  # type of retriever we are using\n  repositorySlug: thomaspoignant/demo-goff  # repository we are retrieving\n  path: flags.yaml  # location of the file in the repository\npollingInterval: 5000  # Time in milliseconds we wait before trying to check for changes\n")),(0,r.kt)("h2",{id:"create-our-first-flag"},"Create our first flag"),(0,r.kt)("p",null,"To create our flag we start by using the ",(0,r.kt)("a",{parentName:"p",href:"https://editor.gofeatureflag.org"},"GO Feature Flag editor"),", for our test we will create a flag\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"my-new-feature")," and it will use a type ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"editor.png",src:a(27966).Z,width:"1439",height:"885"})),(0,r.kt)("p",null,"When it is ready you can  copy/paste the flag definition and commit it in GitHub."),(0,r.kt)("h2",{id:"start-go-feature-flag"},"Start GO Feature Flag"),(0,r.kt)("p",null,"We will now start GO Feature Flag, for this we gonna use the docker image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 1031:1031 -e RETRIEVER_TOKEN=$GITHUB_TOKEN -v $(pwd):/goff thomaspoignant/go-feature-flag\n")),(0,r.kt)("p",null,"With this command we launch GO Feature Flag on the port 1031 and with the configuration file we just created, you can also see that we provide a GitHub Token, this is to avoid being rate limited by the Github API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"terminal.png",src:a(59376).Z,width:"1316",height:"217"})),(0,r.kt)("p",null,"GO Feature Flag is now started, and we can see that our flag is loaded."),(0,r.kt)("h2",{id:"create-nodejs-application-using-openfeature"},"Create Node.JS application using OpenFeature"),(0,r.kt)("p",null,"Now let's start to create our Node JS application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { GoFeatureFlagProvider } from "@openfeature/go-feature-flag-provider"\nimport { EvaluationContext, OpenFeature } from "@openfeature/js-sdk"\n\nasync function main(){\n  // We start by creating an instance of the Go Feature Flag Provider\n  // We are just setting the endpoint to connect to our instance of GO Feature Flag\n  const provider = new GoFeatureFlagProvider({\n     endpoint: \'http://localhost:1031\'\n  })\n\n  // We associate the provider to the SDK\n  // It means that now when we call OpenFeature it will rely on GO Feature Flag as a backend.\n  OpenFeature.setProvider(provider)\n  \n  // We need to ask for a client to evaluate the flags.\n  const client = OpenFeature.getClient()\n\n  // We create a context for our evaluation.\n  const ctx: EvaluationContext = {\n     targetingKey: \'aae1cb41-c3cb-4753-a117-031ddc958f82\'\n  }\n\n  // We evaluate the flag.\n  const myNewFeature = await client.getBooleanValue("my-new-feature", false, ctx)\n\n  if (myNewFeature) {\n    // the new feature is available\n  } else {\n    // apply the old feature\n  }\n}\n\nmain()\n')),(0,r.kt)("p",null,"You are now ready to use GO Feature Flag in your application."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial we've seen how simple it is to use GO Feature Flag in your Node.JS application using the OpenFeature SDK."),(0,r.kt)("p",null,"I encourage you to read our documentation to see all the amazing possibility that you will have."),(0,r.kt)("p",null,"And please provide us ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@gofeatureflag.org"},"feedbacks")," on how we can make your experience even better."))}g.isMDXComponent=!0},27966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editor-78f4f0d3bcefb410bc09d5a338d0252c.png"},59376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terminal-0db207eb433127d3176598bee06805ce.png"}}]);