"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=n.createContext({}),p=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(f,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Where to store my file?",l={unversionedId:"flag_file/index",id:"version-v0.25.2/flag_file/index",title:"Where to store my file?",description:"The module supports different ways of retrieving the flag file.",source:"@site/versioned_docs/version-v0.25.2/flag_file/index.md",sourceDirName:"flag_file",slug:"/flag_file/",permalink:"/docs/v0.25.2/flag_file/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/flag_file/index.md",tags:[],version:"v0.25.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/v0.25.2/configuration"},next:{title:"Custom Retriever",permalink:"/docs/v0.25.2/flag_file/custom"}},f={},p=[],c={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"where-to-store-my-file"},"Where to store my file?"),(0,a.kt)("p",null,"The module supports different ways of retrieving the flag file.",(0,a.kt)("br",{parentName:"p"}),"\n","Available retriever are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3"},"S3 Bucket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http"},"HTTP endpoint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"github"},"Github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"file"},"File"))),(0,a.kt)("p",null,"To retrieve a file you need to provide a ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Retriever"},"retriever")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"ffclient.Config{}")," during the initialization.",(0,a.kt)("br",{parentName:"p"}),"\n","If the existing retriever does not work with your system you can extend the system and use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.25.2/flag_file/custom"},"custom retriever"),"."))}s.isMDXComponent=!0}}]);