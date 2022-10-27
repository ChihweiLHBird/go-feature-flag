"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||n;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={},l="Available rollout strategies",i={unversionedId:"rollout/index",id:"version-v0.25.2/rollout/index",title:"Available rollout strategies",description:"A critical part of every new feature release is orchestrating the actual launch schedule between Product, Engineering, and Marketing teams.",source:"@site/versioned_docs/version-v0.25.2/rollout/index.md",sourceDirName:"rollout",slug:"/rollout/",permalink:"/docs/v0.25.2/rollout/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/rollout/index.md",tags:[],version:"v0.25.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure a flag",permalink:"/docs/v0.25.2/flag_format"},next:{title:"Canary Release",permalink:"/docs/v0.25.2/rollout/canary"}},u={},s=[{value:"Complex rollout strategy available",id:"complex-rollout-strategy-available",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"available-rollout-strategies"},"Available rollout strategies"),(0,o.kt)("p",null,"A critical part of every new feature release is orchestrating the actual launch schedule between Product, Engineering, and Marketing teams."),(0,o.kt)("p",null,"Delivering powerful user experiences typically requires software teams to manage complex releases and make manual updates at inconvenient times."),(0,o.kt)("p",null,"But it doesn\u2019t have to, having a complex ",(0,o.kt)("strong",{parentName:"p"},"rollout")," strategy allows you to have lifecycle for your flags."),(0,o.kt)("h2",{id:"complex-rollout-strategy-available"},"Complex rollout strategy available"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.25.2/rollout/canary"},"Canary releases")," - impact randomly a subset of your users. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.25.2/rollout/progressive"},"Progressive rollout")," - increase the percentage of your flag over time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.25.2/rollout/scheduled"},"Scheduled rollout")," - update your flag over time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.25.2/rollout/experimentation"},"Experimentation rollout")," - serve your feature only for a determined time ",(0,o.kt)("em",{parentName:"li"},"(perfect for A/B testing)"),".")))}p.isMDXComponent=!0}}]);