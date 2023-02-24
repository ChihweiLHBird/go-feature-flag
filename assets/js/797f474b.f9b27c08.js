"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[94498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,m=p["".concat(u,".").concat(g)]||p[g]||c[g]||n;return r?o.createElement(m,i(i({ref:t},f),{},{components:r})):o.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},80945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={sidebar_position:10,description:"Where to store your configuration flag?"},i="Where to store your configuration flag",l={unversionedId:"configure_flag/store_your_flags",id:"version-v1.3.0/configure_flag/store_your_flags",title:"Where to store your configuration flag",description:"Where to store your configuration flag?",source:"@site/versioned_docs/version-v1.3.0/configure_flag/store_your_flags.md",sourceDirName:"configure_flag",slug:"/configure_flag/store_your_flags",permalink:"/docs/configure_flag/store_your_flags",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.3.0/configure_flag/store_your_flags.md",tags:[],version:"v1.3.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Where to store your configuration flag?"},sidebar:"tutorialSidebar",previous:{title:"Configure your feature flags",permalink:"/docs/category/configure-your-feature-flags"},next:{title:"How to configure a flag",permalink:"/docs/configure_flag/flag_format"}},u={},s=[{value:"AWS S3",id:"aws-s3",level:2},{value:"Google Cloud Storage",id:"google-cloud-storage",level:2},{value:"Kubernetes Configmaps",id:"kubernetes-configmaps",level:2},{value:"HTTP",id:"http",level:2},{value:"GitHub",id:"github",level:2},{value:"Local file",id:"local-file",level:2},{value:"Custom",id:"custom",level:2}],f={toc:s},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"where-to-store-your-configuration-flag"},"Where to store your configuration flag"),(0,a.kt)("p",null,"To work ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," is using a configuration file to store your feature flags configuration."),(0,a.kt)("p",null,"Ideally this file should be placed somewhere accessible by all your app that are using the GO Feature Flag module.",(0,a.kt)("br",{parentName:"p"}),"\n","In the solution there is a system we call ",(0,a.kt)("inlineCode",{parentName:"p"},"retriever")," that is in charge of reading the file remotely."),(0,a.kt)("p",null,"GO Feature Flag supports different ways to retrieve the configuration file ",(0,a.kt)("em",{parentName:"p"},"(see list bellow)"),"."),(0,a.kt)("h2",{id:"aws-s3"},"AWS S3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AWS S3")," is the object store of AWS, you can add your GO Feature Flag configuration file in any bucket and reference it in your configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/go_module/store_file/s3"},"Configure the GO module")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../relay_proxy/configure_relay_proxy#s3"},"Configure the relay proxy"))),(0,a.kt)("h2",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Google Cloud Storage")," is a RESTful online file storage web service for storing and accessing data on Google Cloud Platform infrastructure.",(0,a.kt)("br",{parentName:"p"}),"\n","You can add your GO Feature Flag configuration file in any bucket and reference it."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/go_module/store_file/google_cloud_storage"},"Configure the GO module")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../relay_proxy/configure_relay_proxy#google-storage"},"Configure the relay proxy"))),(0,a.kt)("h2",{id:"kubernetes-configmaps"},"Kubernetes Configmaps"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"ConfigMap")," is an API object used to store non-confidential data in key-value pairs inside kubernetes.",(0,a.kt)("br",{parentName:"p"}),"\n","GO Feature Flag can read directly in a ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap")," in your namespace."),(0,a.kt)("p",null,"When your feature flags file is ready you can store it directly in your kubernetes instance by using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create configmap goff --from-file=examples/retriever_configmap/flags.yaml\n")),(0,a.kt)("p",null,"It will allow your file to be available inside Kubernetes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/go_module/store_file/kubernetes_configmaps"},"Configure the GO module")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../relay_proxy/configure_relay_proxy#kubernetes-configmap"},"Configure the relay proxy"))),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("p",null,"Serving file with an ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," server is probably something you are already doing, ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," can retrieve your configuration file, from\nany HTTP endpoint and read it from there."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/go_module/store_file/http"},"Configure the GO module")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../relay_proxy/configure_relay_proxy#http"},"Configure the relay proxy"))),(0,a.kt)("h2",{id:"github"},"GitHub"),(0,a.kt)("p",null,"Reading the file from ",(0,a.kt)("strong",{parentName:"p"},"GitHub")," is pretty straight forward.",(0,a.kt)("br",{parentName:"p"}),"\n","You commit your file into your favorite repository ",(0,a.kt)("em",{parentName:"p"},"(it can be public or private)")," and ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," can retrieve your configuration file and use it."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/go_module/store_file/github"},"Configure the GO module")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../relay_proxy/configure_relay_proxy#github"},"Configure the relay proxy"))),(0,a.kt)("h2",{id:"local-file"},"Local file"),(0,a.kt)("p",null,"You can store your feature flags configuration in your hard drive directly."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using a file is great for local testing, but in production it is recommended to use a distributed system instead.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/go_module/store_file/file"},"Configure the GO module")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../relay_proxy/configure_relay_proxy#file"},"Configure the relay proxy"))),(0,a.kt)("h2",{id:"custom"},"Custom"),(0,a.kt)("p",null,"If you are using the ",(0,a.kt)("strong",{parentName:"p"},"GO module"),", you can also implement your own retriever.",(0,a.kt)("br",{parentName:"p"}),"\n","For this look at this ",(0,a.kt)("a",{parentName:"p",href:"/docs/go_module/store_file/custom"},"documentation")," to start building your own ",(0,a.kt)("inlineCode",{parentName:"p"},"retriever"),"."))}c.isMDXComponent=!0}}]);