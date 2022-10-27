"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,c=m["".concat(p,".").concat(s)]||m[s]||f[s]||o;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},l="HTTP endpoint",i={unversionedId:"flag_file/http",id:"version-v0.22.3/flag_file/http",title:"HTTP endpoint",description:"The HTTPRetriever will perform an HTTP Request with your configuration to get your flags.",source:"@site/versioned_docs/version-v0.22.3/flag_file/http.md",sourceDirName:"flag_file",slug:"/flag_file/http",permalink:"/docs/v0.22.3/flag_file/http",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.22.3/flag_file/http.md",tags:[],version:"v0.22.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/docs/v0.22.3/flag_file/google_cloud_storage"},next:{title:"S3 Bucket",permalink:"/docs/v0.22.3/flag_file/s3"}},p={},u=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],d={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-endpoint"},"HTTP endpoint"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#HTTPRetriever"},(0,a.kt)("strong",{parentName:"a"},"HTTPRetriever"))," will perform an HTTP Request with your configuration to get your flags."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &ffclient.HTTPRetriever{\n        URL:    "http://example.com/flag-config.yaml",\n        Timeout: 2 * time.Second,\n    },\n})\ndefer ffclient.Close()\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("p",null,"To configure your HTTP endpoint:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"URL"))),(0,a.kt)("td",{parentName:"tr",align:null},"location of your file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Method"))),(0,a.kt)("td",{parentName:"tr",align:null},"the HTTP method you want to use ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"(default is GET)"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Body"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"If you need a body to get the flags.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Header"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"Header you should pass while calling the endpoint ",(0,a.kt)("em",{parentName:"td"},"(useful for authorization)"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Timeout"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"Timeout for the HTTP call ",(0,a.kt)("br",null),"(default is 10 seconds).")))))}f.isMDXComponent=!0}}]);