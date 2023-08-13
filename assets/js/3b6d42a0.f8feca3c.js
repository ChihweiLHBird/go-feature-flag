"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[88677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),g=n,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},11029:(e,t,r)=>{r.d(t,{o:()=>c});var a=r(87462),n=r(67294),o=r(39960);const s={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var i=r(86010),l=r(45697),d=r.n(l);function c(e){const t=e.cards.map(((e,t)=>n.createElement(p,(0,a.Z)({},e,{key:t}))));return n.createElement("div",{className:"grid grid-pad"},t)}function p(e){return n.createElement("div",{className:(0,i.Z)("col-1-3 mobile-col-1-1")},n.createElement(o.Z,{to:e.docLink,className:s.link},n.createElement("div",{className:s.card},n.createElement("div",{className:s.header},n.createElement("span",{className:s.socialIcon},e.logoCss&&n.createElement("i",{className:e.logoCss}),e.logoImg&&n.createElement("img",{src:e.logoImg,className:s.logoImg}))),n.createElement("div",null,n.createElement("p",{className:s.name},e.title)),n.createElement("p",{className:s.message},e.content),n.createElement("div",{className:s.badgeSection},e.badges&&e.badges.map(((e,t)=>n.createElement("span",{className:(0,i.Z)(s.badge,s.badgeInfo),key:e},e))),e.warningBadges&&e.warningBadges.map(((e,t)=>n.createElement("span",{className:(0,i.Z)(s.badge,s.badgeWarning),key:e},e)))))))}c.prototype={cards:d().array.isRequired},p.propTypes={title:d().string.isRequired,badges:d().array,warningBadges:d().array,logoCss:d().string,logoImg:d().string,docLink:d().string}},73822:(e,t,r)=>{r.d(t,{T:()=>l});var a=r(67294),n=r(86010);const o={green:"green_II7v",orange:"orange_ujtc"};var s=r(45697),i=r.n(s);function l(e){return a.createElement(a.Fragment,null,d(e.features,"remoteEval")," Remote evaluation ",a.createElement("br",null),d(e.features,"localCache")," Local cache",a.createElement("br",null),d(e.features,"dynamicRefresh")," Dynamic cache refresh",a.createElement("br",null))}function d(e,t){return e.includes(t)?a.createElement("i",{className:(0,n.Z)("fa-solid fa-circle-check",o.green)}):a.createElement("i",{className:(0,n.Z)("fa-solid fa-person-digging",o.orange)})}l.prototype={features:i().array.isRequired}},66169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(11029),s=r(73822);const i={sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},l="SDKs",d={unversionedId:"openfeature_sdk/sdk",id:"version-v1.15.0/openfeature_sdk/sdk",title:"SDKs",description:"Use GO Feature Flag with Openfeature SDKs",source:"@site/versioned_docs/version-v1.15.0/openfeature_sdk/sdk.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/sdk",permalink:"/docs/openfeature_sdk/sdk",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.0/openfeature_sdk/sdk.mdx",tags:[],version:"v1.15.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},sidebar:"tutorialSidebar",previous:{title:"How to export evaluation data",permalink:"/docs/configure_flag/export_flags_usage"},next:{title:"GO",permalink:"/docs/openfeature_sdk/server_providers/openfeature_go"}},c={},p=[{value:"Server Providers",id:"server-providers",level:2},{value:"Client Providers",id:"client-providers",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}],u={toc:p},g="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(g,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sdks"},"SDKs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," stands out as a feature flag solution, distinct from others, due to our decision to fully support the ",(0,n.kt)("a",{parentName:"p",href:"https://openfeature.dev"},(0,n.kt)("inlineCode",{parentName:"a"},"Openfeature"))," CNCF project."),(0,n.kt)("p",null,"The benefit of choosing OpenFeature lies in its framework-agnostic nature. When utilizing OpenFeature SDKs, you minimize the effort required for switching to a different feature flag provider. This flexibility empowers you to make changes without being tied down to a particular vendor."),(0,n.kt)("p",null,"To show our commitment to this initiative, ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag has opted not to develop any custom SDKs and instead relies entirely on OpenFeature SDKs"),".\nIn order to seamlessly integrate with our solution, we offer ",(0,n.kt)("a",{parentName:"p",href:"https://docs.openfeature.dev/docs/reference/concepts/provider"},(0,n.kt)("inlineCode",{parentName:"a"},"providers"))," for GO Feature Flag in multiple programming languages."),(0,n.kt)("p",null,"Rest assured, working with OpenFeature SDKs alongside GO Feature Flag providers is as straightforward as using any other feature flag solution. The added advantage is that you now adhere to a standard approach and avoid any vendor lock-in!"),(0,n.kt)("h2",{id:"server-providers"},"Server Providers"),(0,n.kt)(o.o,{cards:[{logoCss:"devicon-go-original-wordmark colored",title:"GO",badges:["Server"],docLink:"./server_providers/openfeature_go",content:(0,n.kt)(s.T,{features:["remoteEval","localCache"],mdxType:"SdkCardContent"})},{logoCss:"devicon-typescript-plain colored",title:"Typescript",badges:["Server"],docLink:"./server_providers/openfeature_javascript",content:(0,n.kt)(s.T,{features:["remoteEval","localCache"],mdxType:"SdkCardContent"})},{logoCss:"devicon-java-plain colored",title:"Java",badges:["Server"],docLink:"./server_providers/openfeature_java",content:(0,n.kt)(s.T,{features:["remoteEval","localCache"],mdxType:"SdkCardContent"})},{logoCss:"devicon-dot-net-plain-wordmark colored",title:".Net",badges:["Server"],docLink:"./server_providers/openfeature_javascript",content:(0,n.kt)(s.T,{features:["remoteEval"],mdxType:"SdkCardContent"})},{logoCss:"devicon-python-plain colored",title:"Python",badges:["Server"],warningBadges:["WIP"],docLink:"https://github.com/thomaspoignant/gofeatureflag-python-provider",content:(0,n.kt)(s.T,{features:["remoteEval"],mdxType:"SdkCardContent"})}],mdxType:"Cards"}),(0,n.kt)("h2",{id:"client-providers"},"Client Providers"),(0,n.kt)(o.o,{cards:[{logoCss:"devicon-typescript-plain colored",title:"Typescript",badges:["Client"],docLink:"./client_providers/openfeature_javascript",content:(0,n.kt)(s.T,{features:["remoteEval","localCache","dynamicRefresh"],mdxType:"SdkCardContent"})}],mdxType:"Cards"}),(0,n.kt)("h2",{id:"how-openfeature-and-go-feature-flag-are-working-together"},"How OpenFeature and GO Feature Flag are working together?"),(0,n.kt)("p",null,"To use the OpenFeature SDKs you need what we call a provider.\nA ",(0,n.kt)("strong",{parentName:"p"},"provider")," is responsible for performing flag evaluations. It provides an abstraction between ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," and the OpenFeature SDK."),(0,n.kt)("p",null,"A provider need a backend service to perform the flag evaluation. This is why we have introduced the ",(0,n.kt)("a",{parentName:"p",href:"../relay_proxy"},(0,n.kt)("strong",{parentName:"a"},"relay proxy")),".\nThis component retrieve your feature flag configuration file using the GO module and expose APIs to get your flags variations."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(30156).Z,width:"1740",height:"574"})),(0,n.kt)("p",null,"With this simple architecture you have a central component ",(0,n.kt)("em",{parentName:"p"},"(the relay proxy)")," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."),(0,n.kt)("p",null,"This supports different languages the same way and makes you able to use GO Feature Flag with all your favorite languages."))}m.isMDXComponent=!0},30156:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"}}]);