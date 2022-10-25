"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||i;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a="Slack Notifier",l={unversionedId:"notifier/slack",id:"version-v0.23.0/notifier/slack",title:"Slack Notifier",description:"The Slack notifier allows you to get notification on your favorite slack channel when an instance of go-feature-flag is detecting changes in the configuration file.",source:"@site/versioned_docs/version-v0.23.0/notifier/slack.md",sourceDirName:"notifier",slug:"/notifier/slack",permalink:"/docs/v0.23.0/notifier/slack",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.23.0/notifier/slack.md",tags:[],version:"v0.23.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Notifier",permalink:"/docs/v0.23.0/notifier/custom"},next:{title:"Webhook Notifier",permalink:"/docs/v0.23.0/notifier/webhook"}},c={},s=[{value:"Configure Slack Notification",id:"configure-slack-notification",level:2},{value:"Configuration fields",id:"configuration-fields",level:3}],f={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack-notifier"},"Slack Notifier"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Slack")," notifier allows you to get notification on your favorite slack channel when an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," is detecting changes in the configuration file."),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/docs/notifier/slack_notification.png"})),(0,o.kt)("h2",{id:"configure-slack-notification"},"Configure Slack Notification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, you need to create an incoming webhook on your slack instance.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("em",{parentName:"li"},"You can follow this ",(0,o.kt)("a",{parentName:"em",href:"https://api.slack.com/messaging/webhooks#getting_started"},"documentation to see how to do it"))),(0,o.kt)("li",{parentName:"ol"},"Copy your webhook URL.",(0,o.kt)("br",{parentName:"li"}),"It should look like: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"),"."),(0,o.kt)("li",{parentName:"ol"},"In your init method add a slack notifier")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1" hl_lines="5"',linenums:'"1"',hl_lines:'"5"'},'ffclient.Config{ \n    // ...\n    Notifiers: []ffclient.NotifierConfig{\n        &ffclient.SlackNotifier{\n            SlackWebhookURL: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",\n        },\n        // ...\n    },\n}\n')),(0,o.kt)("h3",{id:"configuration-fields"},"Configuration fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SlackWebhookURL")),(0,o.kt)("td",{parentName:"tr",align:null},"The complete URL of your incoming webhook configured in Slack.")))))}u.isMDXComponent=!0}}]);