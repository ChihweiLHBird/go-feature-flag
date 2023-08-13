"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[36734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:6},i="SQS Exporter",l={unversionedId:"go_module/data_collection/sqs",id:"version-v1.15.0/go_module/data_collection/sqs",title:"SQS Exporter",description:"The SQS exporter will collect the data and create an event in the queue for each evaluation we receive.",source:"@site/versioned_docs/version-v1.15.0/go_module/data_collection/sqs.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/sqs",permalink:"/docs/go_module/data_collection/sqs",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.0/go_module/data_collection/sqs.md",tags:[],version:"v1.15.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Log Exporter",permalink:"/docs/go_module/data_collection/log"},next:{title:"Custom exporter",permalink:"/docs/go_module/data_collection/custom"}},c={},s=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sqs-exporter"},"SQS Exporter"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"SQS exporter")," will collect the data and create an event in the queue for each evaluation we receive."),(0,o.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ffclient.Config{ \n   // ...\n     cfg, _ := config.LoadDefaultConfig(context.TODO())\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &sqsexporter.Exporter{\n                  QueueURL: "https://sqs.eu-west-1.amazonaws.com/XXX/test-queue",\n            AwsConfig: &cfg,\n        },\n    },\n    // ...\n}\n')),(0,o.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QueueURL ")),(0,o.kt)("td",{parentName:"tr",align:null},"URL of your SQS queue.",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"You can find it in your AWS console."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AwsConfig ")),(0,o.kt)("td",{parentName:"tr",align:null},"An instance of ",(0,o.kt)("inlineCode",{parentName:"td"},"aws.Config")," that configure your access to AWS ",(0,o.kt)("em",{parentName:"td"},"(see ",(0,o.kt)("a",{parentName:"em",href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html"},"this documentation for more info"),")"),".")))),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/sqsexporter"},"godoc for full details"),"."))}d.isMDXComponent=!0}}]);