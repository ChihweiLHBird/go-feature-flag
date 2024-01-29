"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[1176],{70715:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=o(85893),r=o(11151);const i={sidebar_position:20,title:"GO",description:"How to use the OpenFeature GO SDK"},a="GO SDK usage",s={id:"openfeature_sdk/server_providers/openfeature_go",title:"GO",description:"How to use the OpenFeature GO SDK",source:"@site/versioned_docs/version-v1.21.0/openfeature_sdk/server_providers/openfeature_go.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_go",permalink:"/docs/v1.21.0/openfeature_sdk/server_providers/openfeature_go",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.21.0/openfeature_sdk/server_providers/openfeature_go.mdx",tags:[],version:"v1.21.0",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"GO",description:"How to use the OpenFeature GO SDK"},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/docs/v1.21.0/openfeature_sdk/sdk"},next:{title:"Java",permalink:"/docs/v1.21.0/openfeature_sdk/server_providers/openfeature_java"}},l={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature provider",id:"initialize-your-open-feature-provider",level:2},{value:"Using the relay proxy",id:"using-the-relay-proxy",level:3},{value:"Example",id:"example",level:4},{value:"Using the GO module <em>(standalone version)</em>",id:"using-the-go-module-standalone-version",level:3},{value:"Example",id:"example-1",level:4},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"go-sdk-usage",children:"GO SDK usage"}),"\n",(0,t.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["The first things we will do is install the ",(0,t.jsx)(n.strong,{children:"Open Feature SDK"})," and the ",(0,t.jsx)(n.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"go get github.com/open-feature/go-sdk\ngo get github.com/open-feature/go-sdk-contrib/providers/go-feature-flag\n"})}),"\n",(0,t.jsx)(n.h2,{id:"initialize-your-open-feature-provider",children:"Initialize your Open Feature provider"}),"\n",(0,t.jsxs)(n.p,{children:["Despite other providers, this GO provider can be used with the ",(0,t.jsx)(n.strong,{children:"relay proxy"})," or used standalone\nusing the ",(0,t.jsx)(n.strong,{children:"GO Feature Flag module"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-relay-proxy",children:"Using the relay proxy"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use the provider with the ",(0,t.jsx)(n.strong,{children:"relay proxy"})," you should set the field ",(0,t.jsx)(n.code,{children:"Endpoint"})," in the options.\nBy default it will use a default ",(0,t.jsx)(n.code,{children:"HTTPClient"})," with a ",(0,t.jsx)(n.strong,{children:"timeout"})," configured at ",(0,t.jsx)(n.strong,{children:"10000"})," milliseconds. You can change\nthis configuration by providing your own configuration of the ",(0,t.jsx)(n.code,{children:"HTTPClient"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'options := gofeatureflag.ProviderOptions{\n  Endpoint: "http://localhost:1031",\n  HTTPClient: &http.Client{\n    Timeout:   1 * time.Second,\n  },\n}\nprovider, _ := gofeatureflag.NewProvider(options)\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"using-the-go-module-standalone-version",children:["Using the GO module ",(0,t.jsx)(n.em,{children:"(standalone version)"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use the provider in standalone mode using the GO module, you should set the field ",(0,t.jsx)(n.code,{children:"GOFeatureFlagConfig"}),"\nin the options."]}),"\n",(0,t.jsxs)(n.p,{children:["You can check the ",(0,t.jsx)(n.a,{href:"https://docs.gofeatureflag.org",children:"GO Feature Flag documentation website"})," to look how to configure the\nGO module."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'options := gofeatureflag.ProviderOptions{\n  GOFeatureFlagConfig: &ffclient.Config{\n      PollingInterval: 10 * time.Second,\n      Context:         context.Background(),\n      Retriever: &fileretriever.Retriever{\n        Path: "../testutils/module/flags.yaml",\n      },\n    },\n}\nprovider, _ := gofeatureflag.NewProvider(options)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,t.jsx)(n.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n  // ...\n  gofeatureflag "github.com/open-feature/go-sdk-contrib/providers/go-feature-flag/pkg"\n  of "github.com/open-feature/go-sdk/pkg/openfeature"\n)\n\n// ...\n\noptions := gofeatureflag.ProviderOptions{\n    Endpoint: "http://localhost:1031",\n}\nprovider, err := gofeatureflag.NewProvider(options)\nof.SetProvider(provider)\nclient := of.NewClient("my-app")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,t.jsxs)(n.p,{children:["This code block explain how you can create an ",(0,t.jsx)(n.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In this example we are evaluating a ",(0,t.jsx)(n.code,{children:"boolean"})," flag, but other types are available."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'evaluationCtx := of.NewEvaluationContext(\n    "1d1b9238-2591-4a47-94cf-d2bc080892f1",\n    map[string]interface{}{\n      "firstname", "john",\n      "lastname", "doe",\n      "email", "john.doe@gofeatureflag.org",\n      "admin", true,\n      "anonymous", false,\n    })\nadminFlag, _ := client.BoolValue(context.TODO(), "flag-only-for-admin", false, evaluationCtx)\nif adminFlag {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,t.jsxs)(n.p,{children:["You can find the source of the provider in the ",(0,t.jsx)(n.a,{href:"https://github.com/open-feature/go-sdk-contrib/tree/main/providers/go-feature-flag",children:(0,t.jsx)(n.code,{children:"open-feature/go-sdk-contrib"})})," repository."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);