"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[32147],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),u=a(7094),s=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:f,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,u.U)(),[T,F]=(0,r.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=f){const e=k[f];null!=e&&e!==T&&b.some((t=>t.value===e))&&F(e)}const x=e=>{const t=e.currentTarget,a=N.indexOf(t),n=b[a].value;n!==T&&(w(t),F(n),null!=f&&O(f,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:P,onClick:x},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},72117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={sidebar_position:52,description:"How to use the OpenFeature .Net SDK"},u=".Net SDK usage",s={unversionedId:"openfeature_sdk/openfeature_dotnet",id:"openfeature_sdk/openfeature_dotnet",title:".Net SDK usage",description:"How to use the OpenFeature .Net SDK",source:"@site/docs/openfeature_sdk/openfeature_dotnet.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/openfeature_dotnet",permalink:"/docs/next/openfeature_sdk/openfeature_dotnet",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/openfeature_sdk/openfeature_dotnet.mdx",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52,description:"How to use the OpenFeature .Net SDK"},sidebar:"tutorialSidebar",previous:{title:"Javascript / Typescript SDK usage",permalink:"/docs/next/openfeature_sdk/openfeature_javascript"},next:{title:"Use the relay proxy",permalink:"/docs/next/category/use-the-relay-proxy"}},p={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"net-sdk-usage"},".Net SDK usage"),(0,r.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"The first things we will do is install the ",(0,r.kt)("strong",{parentName:"p"},"Open Feature SDK")," and the ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag provider"),"."),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"netcli",label:".NET CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package OpenFeature.Contrib.Providers.GOFeatureFlag\n"))),(0,r.kt)(l.Z,{value:"pm",label:"Package Manager",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NuGet\\Install-Package OpenFeature.Contrib.Providers.GOFeatureFlag\n"))),(0,r.kt)(l.Z,{value:"pr",label:"Package Reference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="OpenFeature.Contrib.Providers.GOFeatureFlag" />\n'))),(0,r.kt)(l.Z,{value:"pc",label:"Packet cli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"paket add OpenFeature.Contrib.Providers.GOFeatureFlag\n"))),(0,r.kt)(l.Z,{value:"cake",label:"Cake",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"// Install OpenFeature.Contrib.Providers.GOFeatureFlag as a Cake Addin\n#addin nuget:?package=OpenFeature.Contrib.Providers.GOFeatureFlag\n\n// Install OpenFeature.Contrib.Providers.GOFeatureFlag as a Cake Tool\n#tool nuget:?package=OpenFeature.Contrib.Providers.GOFeatureFlag\n")))),(0,r.kt)("h2",{id:"initialize-your-open-feature-client"},"Initialize your Open Feature client"),(0,r.kt)("p",null,"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using OpenFeature;\nusing OpenFeature.Contrib.Providers.GOFeatureFlag;\n\n// ...\n\nvar goFeatureFlagProvider = new GoFeatureFlagProvider(new GoFeatureFlagProviderOptions\n{\n    Endpoint = "http://localhost:1031/",\n    Timeout = new TimeSpan(1000 * TimeSpan.TicksPerMillisecond)\n});\nApi.Instance.SetProvider(goFeatureFlagProvider);\nvar client = Api.Instance.GetClient("my-app");\n')))),(0,r.kt)("h2",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,r.kt)("p",null,"This code block explain how you can create an ",(0,r.kt)("inlineCode",{parentName:"p"},"EvaluationContext")," and use it to evaluate your flag."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this example we are evaluating a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," flag, but other types are available."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation"},"Open Feature documentation")," to know more about it."))),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nvar userContext = EvaluationContext.Builder()\n    .Set("targetingKey", "1d1b9238-2591-4a47-94cf-d2bc080892f1") // user unique identifier (mandatory)\n    .Set("firstname", "john")\n    .Set("lastname", "doe")\n    .Set("email", "john.doe@gofeatureflag.org")\n    .Set("admin", true) // this field is used in the targeting rule of the flag "flag-only-for-admin"\n    .Set("anonymous", false)\n    .Build();\n\nvar adminFlag = await client.GetBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n')))))}m.isMDXComponent=!0}}]);