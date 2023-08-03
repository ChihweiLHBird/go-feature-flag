"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[53720],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>f});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),d=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),g=n,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return a?t.createElement(f,i(i({ref:r},c),{},{components:a})):t.createElement(f,i({ref:r},c))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},11029:(e,r,a)=>{a.d(r,{o:()=>c});var t=a(87462),n=a(67294),o=a(39960);const i={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",green:"green_ZxVI",orange:"orange_SLaa",socialIcon:"socialIcon_AyL5"};var s=a(86010),l=a(45697),d=a.n(l);function c(e){const r=e.cards.map(((e,r)=>n.createElement(p,(0,t.Z)({},e,{key:r}))));return n.createElement("div",{className:"grid grid-pad"},r)}function p(e){return n.createElement("div",{className:(0,s.Z)("col-1-3 mobile-col-1-1")},n.createElement(o.Z,{to:e.docLink,className:i.link},n.createElement("div",{className:i.card},n.createElement("div",{className:i.header},n.createElement("span",{className:i.socialIcon},n.createElement("i",{className:e.logo}))),n.createElement("div",null,n.createElement("p",{className:i.name},e.language)),n.createElement("p",{className:i.message},u(e.features,"remoteEval")," Remote evaluation ",n.createElement("br",null),u(e.features,"localCache")," Local cache",n.createElement("br",null),u(e.features,"dynamicRefresh")," Dynamic cache refresh",n.createElement("br",null)),n.createElement("div",{className:i.badgeSection},e.badges.map(((e,r)=>n.createElement("span",{className:(0,s.Z)(i.badge,i.badgeInfo),key:e},e))),e.warningBadges&&e.warningBadges.map(((e,r)=>n.createElement("span",{className:(0,s.Z)(i.badge,i.badgeWarning),key:e},e)))))))}function u(e,r){return e.includes(r)?n.createElement("i",{className:(0,s.Z)("fa-solid fa-circle-check",i.green)}):n.createElement("i",{className:(0,s.Z)("fa-solid fa-person-digging",i.orange)})}c.prototype={cards:d().array.isRequired},p.propTypes={language:d().string.isRequired,badges:d().array.isRequired,warningBadges:d().array,features:d().array.isRequired,logo:d().string.isRequired,docLink:d().string.isRequired}},61933:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(87462),n=(a(67294),a(3905)),o=a(11029);const i={sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},s="SDKs",l={unversionedId:"openfeature_sdk/sdk",id:"openfeature_sdk/sdk",title:"SDKs",description:"Use GO Feature Flag with Openfeature SDKs",source:"@site/docs/openfeature_sdk/sdk.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/sdk",permalink:"/docs/next/openfeature_sdk/sdk",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/openfeature_sdk/sdk.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},sidebar:"tutorialSidebar",previous:{title:"How to export evaluation data",permalink:"/docs/next/configure_flag/export_flags_usage"},next:{title:"GO SDK usage",permalink:"/docs/next/openfeature_sdk/server_providers/openfeature_go"}},d={},c=[{value:"Server Providers",id:"server-providers",level:2},{value:"Client Providers",id:"client-providers",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}],p={toc:c},u="wrapper";function g(e){let{components:r,...i}=e;return(0,n.kt)(u,(0,t.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sdks"},"SDKs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," stands out as a feature flag solution, distinct from others, due to our decision to fully support the ",(0,n.kt)("a",{parentName:"p",href:"https://openfeature.dev"},(0,n.kt)("inlineCode",{parentName:"a"},"Openfeature"))," CNCF project."),(0,n.kt)("p",null,"The benefit of choosing OpenFeature lies in its framework-agnostic nature. When utilizing OpenFeature SDKs, you minimize the effort required for switching to a different feature flag provider. This flexibility empowers you to make changes without being tied down to a particular vendor."),(0,n.kt)("p",null,"To show our commitment to this initiative, ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag has opted not to develop any custom SDKs and instead relies entirely on OpenFeature SDKs"),".\nIn order to seamlessly integrate with our solution, we offer ",(0,n.kt)("a",{parentName:"p",href:"https://docs.openfeature.dev/docs/reference/concepts/provider"},(0,n.kt)("inlineCode",{parentName:"a"},"providers"))," for GO Feature Flag in multiple programming languages."),(0,n.kt)("p",null,"Rest assured, working with OpenFeature SDKs alongside GO Feature Flag providers is as straightforward as using any other feature flag solution. The added advantage is that you now adhere to a standard approach and avoid any vendor lock-in!"),(0,n.kt)("h2",{id:"server-providers"},"Server Providers"),(0,n.kt)(o.o,{cards:[{logo:"devicon-go-original-wordmark colored",language:"GO",badges:["Server"],features:["remoteEval","localCache"],docLink:"./server_providers/openfeature_go"},{logo:"devicon-typescript-plain colored",language:"Typescript",badges:["Server"],features:["remoteEval","localCache"],docLink:"./server_providers/openfeature_javascript"},{logo:"devicon-java-plain colored",language:"Java",badges:["Server"],features:["remoteEval"],docLink:"./server_providers/openfeature_java"},{logo:"devicon-dot-net-plain-wordmark colored",language:".Net",badges:["Server"],features:["remoteEval"],docLink:"./server_providers/openfeature_javascript"},{logo:"devicon-python-plain colored",language:"Python",badges:["Server"],warningBadges:["WIP"],features:["remoteEval"],docLink:"https://github.com/thomaspoignant/gofeatureflag-python-provider"}],mdxType:"Cards"}),(0,n.kt)("h2",{id:"client-providers"},"Client Providers"),(0,n.kt)(o.o,{cards:[{logo:"devicon-typescript-plain colored",language:"Typescript",badges:["Client"],features:["remoteEval","localCache","dynamicRefresh"],docLink:"./client_providers/openfeature_javascript"}],mdxType:"Cards"}),(0,n.kt)("h2",{id:"how-openfeature-and-go-feature-flag-are-working-together"},"How OpenFeature and GO Feature Flag are working together?"),(0,n.kt)("p",null,"To use the OpenFeature SDKs you need what we call a provider.\nA ",(0,n.kt)("strong",{parentName:"p"},"provider")," is responsible for performing flag evaluations. It provides an abstraction between ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," and the OpenFeature SDK."),(0,n.kt)("p",null,"A provider need a backend service to perform the flag evaluation. This is why we have introduced the ",(0,n.kt)("a",{parentName:"p",href:"../relay_proxy"},(0,n.kt)("strong",{parentName:"a"},"relay proxy")),".\nThis component retrieve your feature flag configuration file using the GO module and expose APIs to get your flags variations."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(30156).Z,width:"1740",height:"574"})),(0,n.kt)("p",null,"With this simple architecture you have a central component ",(0,n.kt)("em",{parentName:"p"},"(the relay proxy)")," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."),(0,n.kt)("p",null,"This supports different languages the same way and makes you able to use GO Feature Flag with all your favorite languages."))}g.isMDXComponent=!0},30156:(e,r,a)=>{a.d(r,{Z:()=>t});const t=a.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"}}]);