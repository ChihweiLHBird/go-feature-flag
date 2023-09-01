"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4187],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),f=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=f(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=f(r),m=n,d=l["".concat(u,".").concat(m)]||l[m]||p[m]||i;return r?o.createElement(d,a(a({ref:t},s),{},{components:r})):o.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:n,a[1]=c;for(var f=2;f<i;f++)a[f]=r[f];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:30},a="Custom Notifier",c={unversionedId:"go_module/notifier/custom",id:"version-v1.15.1/go_module/notifier/custom",title:"Custom Notifier",description:"To create a custom notifier you must have a struct that implements the",source:"@site/versioned_docs/version-v1.15.1/go_module/notifier/custom.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/custom",permalink:"/docs/go_module/notifier/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.1/go_module/notifier/custom.md",tags:[],version:"v1.15.1",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Webhook Notifier",permalink:"/docs/go_module/notifier/webhook"},next:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/migrate_v0_v1"}},u={},f=[],s={toc:f},l="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-notifier"},"Custom Notifier"),(0,n.kt)("p",null,"To create a custom notifier you must have a ",(0,n.kt)("inlineCode",{parentName:"p"},"struct")," that implements the\n",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/notifier/notifier"},(0,n.kt)("inlineCode",{parentName:"a"},"notifier.Notifier"))," interface."),(0,n.kt)("p",null,"In parameter you will receive a ",(0,n.kt)("inlineCode",{parentName:"p"},"notifier.DiffCache")," struct that will tell you what has changed in your flag configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    ffclient "github.com/thomaspoignant/go-feature-flag"\n    "github.com/thomaspoignant/go-feature-flag/notifier/notifier"\n    "sync"\n)\n\ntype Notifier struct{}\nfunc (c *Notifier) Notify(diff notifier.DiffCache) error {\n    // ...\n    // do whatever you want here\n}\n')))}p.isMDXComponent=!0}}]);