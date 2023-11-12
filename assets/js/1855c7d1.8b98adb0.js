"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[60251],{22949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(85893),a=n(11151),o=n(74866),i=n(85162);const s={sidebar_position:51,title:"Node.js",description:"How to use the OpenFeature Javascript SDK"},l="Node.js",u={id:"openfeature_sdk/server_providers/openfeature_javascript",title:"Node.js",description:"How to use the OpenFeature Javascript SDK",source:"@site/versioned_docs/version-v1.18.1/openfeature_sdk/server_providers/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_javascript",permalink:"/docs/openfeature_sdk/server_providers/openfeature_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.18.1/openfeature_sdk/server_providers/openfeature_javascript.mdx",tags:[],version:"v1.18.1",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"Node.js",description:"How to use the OpenFeature Javascript SDK"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/openfeature_sdk/server_providers/openfeature_java"},next:{title:"Python",permalink:"/docs/openfeature_sdk/server_providers/openfeature_python"}},c={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"nodejs",children:"Node.js"}),"\n",(0,r.jsx)(t.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["The first things we will do is install the ",(0,r.jsx)(t.strong,{children:"Open Feature SDK"})," and the ",(0,r.jsx)(t.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn add @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"})})}),(0,r.jsx)(i.Z,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npm i @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,r.jsx)(t.p,{children:"To evaluate the flags you need to have an Open Feature configured in your app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,r.jsxs)(o.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const {OpenFeature} = require(\"@openfeature/js-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import {EvaluationContext, OpenFeature} from \"@openfeature/js-sdk\";\nimport {GoFeatureFlagProvider} from  \"@openfeature/go-feature-flag-provider\";\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider: GoFeatureFlagProvider = new GoFeatureFlagProvider({\nendpoint: 'http://localhost:1031/'\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app');\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsxs)(t.p,{children:["This code block explains how you can create an ",(0,r.jsx)(t.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["In this example, we are evaluating a ",(0,r.jsx)(t.code,{children:"boolean"})," flag, but other types are available."]}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,r.jsxs)(o.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext: EvaluationContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n  // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,r.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,r.jsx)(t.a,{href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag",children:(0,r.jsx)(t.code,{children:"open-feature/js-sdk-contrib"})})," repository."]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>F});var r=n(67294),a=n(86010),o=n(12466),i=n(16550),s=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:n,groupId:a}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),m=(()=>{const e=u??v;return f({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=v(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function F(e){const t=(0,g.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(67294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);