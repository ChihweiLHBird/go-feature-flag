"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[57060],{86834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(85893),r=t(11151);const a={sidebar_position:51,title:"Python",description:"How to use the OpenFeature Python SDK with GO Feature Flag"},i="Python Provider",s={id:"openfeature_sdk/server_providers/openfeature_python",title:"Python",description:"How to use the OpenFeature Python SDK with GO Feature Flag",source:"@site/versioned_docs/version-v1.20.2/openfeature_sdk/server_providers/openfeature_python.md",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_python",permalink:"/docs/v1.20.2/openfeature_sdk/server_providers/openfeature_python",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.20.2/openfeature_sdk/server_providers/openfeature_python.md",tags:[],version:"v1.20.2",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"Python",description:"How to use the OpenFeature Python SDK with GO Feature Flag"},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/docs/v1.20.2/openfeature_sdk/server_providers/openfeature_javascript"},next:{title:".NET",permalink:"/docs/v1.20.2/openfeature_sdk/server_providers/openfeature_dotnet"}},l={},u=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"python-provider",children:"Python Provider"}),"\n",(0,o.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,o.jsxs)(n.p,{children:["The first things we will do is install the ",(0,o.jsx)(n.strong,{children:"Open Feature SDK"})," and the ",(0,o.jsx)(n.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"pip install gofeatureflag-python-provider\n"})}),"\n",(0,o.jsx)(n.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,o.jsx)(n.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from gofeatureflag_python_provider.provider import GoFeatureFlagProvider\nfrom gofeatureflag_python_provider.options import GoFeatureFlagOptions\nfrom openfeature import api\nfrom openfeature.evaluation_context import EvaluationContext\n\n// ...\n\ngoff_provider = GoFeatureFlagProvider(\n    options=GoFeatureFlagOptions(endpoint="https://gofeatureflag.org/")\n)\napi.set_provider(goff_provider)\nclient = api.get_client(name="test-client")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,o.jsxs)(n.p,{children:["This code block explain how you can create an ",(0,o.jsx)(n.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["In this example we are evaluating a ",(0,o.jsx)(n.code,{children:"boolean"})," flag, but other types are available."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nevaluation_ctx = EvaluationContext(\n    targeting_key="d45e303a-38c2-11ed-a261-0242ac120002",\n    attributes={\n        "email": "john.doe@gofeatureflag.org",\n        "firstname": "john",\n        "lastname": "doe",\n        "anonymous": False,\n        "professional": True,\n        "rate": 3.14,\n        "age": 30,\n        "company_info": {"name": "my_company", "size": 120},\n        "labels": ["pro", "beta"],\n    },\n)\n\nadmin_flag = client.get_boolean_value(\n          flag_key=flag_key,\n          default_value=default_value,\n          evaluation_context=ctx,\n      )\n\nif admin_flag:\n  # flag "flag-only-for-admin" is true for the user\nelse:\n  # flag "flag-only-for-admin" is false for the user\n'})}),"\n",(0,o.jsx)(n.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,o.jsxs)(n.p,{children:["You can find the source of the provider in the ",(0,o.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/openfeature/providers/python-provider",children:(0,o.jsx)(n.code,{children:"repository"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(67294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);