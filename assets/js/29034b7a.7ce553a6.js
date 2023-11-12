"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[87210],{17103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),o=t(74866),l=t(85162);const i={sidebar_position:52,title:".NET",description:"How to use the OpenFeature .Net SDK"},s=".Net SDK usage",u={id:"openfeature_sdk/server_providers/openfeature_dotnet",title:".NET",description:"How to use the OpenFeature .Net SDK",source:"@site/versioned_docs/version-v1.18.1/openfeature_sdk/server_providers/openfeature_dotnet.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_dotnet",permalink:"/docs/openfeature_sdk/server_providers/openfeature_dotnet",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.18.1/openfeature_sdk/server_providers/openfeature_dotnet.mdx",tags:[],version:"v1.18.1",sidebarPosition:52,frontMatter:{sidebar_position:52,title:".NET",description:"How to use the OpenFeature .Net SDK"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/openfeature_sdk/server_providers/openfeature_python"},next:{title:"Android / Kotlin",permalink:"/docs/openfeature_sdk/client_providers/openfeature_android"}},c={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"net-sdk-usage",children:".Net SDK usage"}),"\n",(0,a.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,a.jsxs)(n.p,{children:["The first things we will do is install the ",(0,a.jsx)(n.strong,{children:"Open Feature SDK"})," and the ",(0,a.jsx)(n.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(l.Z,{value:"netcli",label:".NET CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"dotnet add package OpenFeature.Contrib.GOFeatureFlag\n"})})}),(0,a.jsx)(l.Z,{value:"pm",label:"Package Manager",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"NuGet\\Install-Package OpenFeature.Contrib.GOFeatureFlag\n"})})}),(0,a.jsx)(l.Z,{value:"pr",label:"Package Reference",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<PackageReference Include="OpenFeature.Contrib.GOFeatureFlag" />\n'})})}),(0,a.jsx)(l.Z,{value:"pc",label:"Packet cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"paket add OpenFeature.Contrib.GOFeatureFlag\n"})})}),(0,a.jsx)(l.Z,{value:"cake",label:"Cake",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"// Install OpenFeature.Contrib.GOFeatureFlag as a Cake Addin\n#addin nuget:?package=OpenFeature.Contrib.GOFeatureFlag\n\n// Install OpenFeature.Contrib.GOFeatureFlag as a Cake Tool\n#tool nuget:?package=OpenFeature.Contrib.GOFeatureFlag\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,a.jsx)(n.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,a.jsx)(o.Z,{groupId:"code",children:(0,a.jsx)(l.Z,{value:"csharp",label:"C#",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'using OpenFeature;\nusing OpenFeature.Contrib.GOFeatureFlag;\n\n// ...\n\nvar goFeatureFlagProvider = new GoFeatureFlagProvider(new GoFeatureFlagProviderOptions\n{\n    Endpoint = "http://localhost:1031/",\n    Timeout = new TimeSpan(1000 * TimeSpan.TicksPerMillisecond)\n});\nApi.Instance.SetProvider(goFeatureFlagProvider);\nvar client = Api.Instance.GetClient("my-app");\n'})})})}),"\n",(0,a.jsx)(n.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,a.jsxs)(n.p,{children:["This code block explain how you can create an ",(0,a.jsx)(n.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["In this example we are evaluating a ",(0,a.jsx)(n.code,{children:"boolean"})," flag, but other types are available."]}),(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Refer to the ",(0,a.jsx)(n.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,a.jsx)(o.Z,{groupId:"code",children:(0,a.jsx)(l.Z,{value:"csharp",label:"C#",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nvar userContext = EvaluationContext.Builder()\n    .Set("targetingKey", "1d1b9238-2591-4a47-94cf-d2bc080892f1") // user unique identifier (mandatory)\n    .Set("firstname", "john")\n    .Set("lastname", "doe")\n    .Set("email", "john.doe@gofeatureflag.org")\n    .Set("admin", true) // this field is used in the targeting rule of the flag "flag-only-for-admin"\n    .Set("anonymous", false)\n    .Build();\n\nvar adminFlag = await client.GetBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n'})})})}),"\n",(0,a.jsx)(n.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,a.jsxs)(n.p,{children:["You can find the source of the provider in the ",(0,a.jsx)(n.a,{href:"https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.GOFeatureFlag",children:(0,a.jsx)(n.code,{children:"open-feature/dotnet-sdk-contrib"})})," repository."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>F});var a=t(67294),r=t(86010),o=t(12466),l=t(16550),i=t(20469),s=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:t,groupId:r}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=u??g;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(x,{...e,...n}),(0,m.jsx)(j,{...e,...n})]})}function F(e){const n=(0,v.Z)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(67294);const r={},o=a.createContext(r);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);