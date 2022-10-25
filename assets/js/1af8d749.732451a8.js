"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=o.createContext({}),c=function(e){var t=o.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,f=s["".concat(g,".").concat(d)]||s[d]||u[d]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},67149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},l="Google Cloud Storage",i={unversionedId:"flag_file/google_cloud_storage",id:"version-v0.28.1/flag_file/google_cloud_storage",title:"Google Cloud Storage",description:"The Google Cloud Storage Retriever",source:"@site/versioned_docs/version-v0.28.1/flag_file/google_cloud_storage.md",sourceDirName:"flag_file",slug:"/flag_file/google_cloud_storage",permalink:"/docs/flag_file/google_cloud_storage",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.28.1/flag_file/google_cloud_storage.md",tags:[],version:"v0.28.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Github",permalink:"/docs/flag_file/github"},next:{title:"HTTP endpoint",permalink:"/docs/flag_file/http"}},g={},c=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gcstorageretriever/#Retriever"},(0,n.kt)("strong",{parentName:"a"},"Google Cloud Storage Retriever")),"\nwill use the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cloud.google.com/go/storage"},"google-cloud-storage package"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/google.golang.org/api/option"},"google-api-options package")," to access your flag in Google Cloud\nStorage."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gcstorageretriever.Retriever{\n        Options: []option.ClientOption{option.WithoutAuthentication()},\n        Bucket: "2093u4pkasjc3",\n        Object: "flags.yaml",\n    }\n})\ndefer ffclient.Close()\n')),(0,n.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,n.kt)("p",null,"To configure your Google Cloud Storage file location:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Bucket"))),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Object"))),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your object in your bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Option"))),(0,n.kt)("td",{parentName:"tr",align:null},"An instance of ",(0,n.kt)("inlineCode",{parentName:"td"},"option.ClientOption")," that configures your access to Google Cloud. ",(0,n.kt)("br",null)," Check ",(0,n.kt)("a",{parentName:"td",href:"https://cloud.google.com/docs/authentication"},"this documentation for more info"),".")))))}u.isMDXComponent=!0}}]);