"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=u(n),c=r,m=f["".concat(s,".").concat(c)]||f[c]||p[c]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i="Webhook Notifier",l={unversionedId:"notifier/webhook",id:"version-v0.20.0/notifier/webhook",title:"Webhook Notifier",description:"The Webhook notifier will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected.",source:"@site/versioned_docs/version-v0.20.0/notifier/webhook.md",sourceDirName:"notifier",slug:"/notifier/webhook",permalink:"/docs/v0.20.0/notifier/webhook",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.20.0/notifier/webhook.md",tags:[],version:"v0.20.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack Notifier",permalink:"/docs/v0.20.0/notifier/slack"},next:{title:"Frequently Asked Questions",permalink:"/docs/v0.20.0/faq"}},s={},u=[{value:"Configure the webhook notifier",id:"configure-the-webhook-notifier",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:3},{value:"Signature",id:"signature",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhook-notifier"},"Webhook Notifier"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Webhook notifier")," will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected."),(0,r.kt)("p",null,"The format of the call is specified in the ",(0,r.kt)("a",{parentName:"p",href:"#format"},"format section")," and, you can ",(0,r.kt)("a",{parentName:"p",href:"#signature"},"sign the body")," to trust the data you are receiving. "),(0,r.kt)("h2",{id:"configure-the-webhook-notifier"},"Configure the webhook notifier"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ffclient.Config{ \n    // ...\n    Notifiers: []ffclient.NotifierConfig{\n        &ffclient.WebhookConfig{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n        // ...\n    },\n}\n')),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EndpointURL")),(0,r.kt)("td",{parentName:"tr",align:null},"The complete URL of your API ",(0,r.kt)("em",{parentName:"td"},"(we will send a POST request to this URL, ",(0,r.kt)("a",{parentName:"em",href:"#format"},"see format"),")"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Secret")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"A secret key you can share with your webhook. We will use this key to sign the request ",(0,r.kt)("em",{parentName:"td"},"(see ",(0,r.kt)("a",{parentName:"em",href:"#signature"},"signature section")," for more details)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"A list of key value that will be add in your request, this is super useful if you want to add information on the current running instance of your app.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"By default the hostname is always added in the meta information."))))),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"If you have configured a webhook, a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request will be sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EndpointURL")," with a body in this format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "hostname": "server01",\n        // ...\n    },\n    "flags": {\n        "deleted": {}, // map of your deleted flags\n        "added": {}, // map of your added flags\n        "updated": {\n            "flag-name": { // an object that contains old and new value\n                "old_value": {},\n                "new_value": {}\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "meta":{\n       "hostname": "server01"\n   },\n   "flags":{\n       "deleted": {\n           "test-flag": {\n               "rule": "key eq \\"random-key\\"",\n               "percentage": 100,\n               "true": true,\n               "false": false,\n               "default": false\n           }\n       },\n       "added": {\n           "test-flag3": {\n               "percentage": 5,\n               "true": "test",\n               "false": "false",\n               "default": "default"\n           }\n       },\n       "updated": {\n           "test-flag2": {\n               "old_value": {\n                   "rule": "key eq \\"not-a-key\\"",\n                   "percentage": 100,\n                   "true": true,\n                   "false": false,\n                   "default": false\n               },\n               "new_value": {\n                   "disable": true,\n                   "rule": "key eq \\"not-a-key\\"",\n                   "percentage": 100,\n                   "true": true,\n                   "false": false,\n                   "default": false\n               }\n           }\n       }\n   }\n}\n')),(0,r.kt)("h2",{id:"signature"},"Signature"),(0,r.kt)("p",null,"This header ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"X-Hub-Signature-256"))," is sent if the webhook is configured with a secret. This is the HMAC hex digest of the request body, and is generated using the SHA-256 hash function and the secret as the HMAC key."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The recommendation is to always use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," and on your API/webook always verify the signature key to be sure that you don't have a man in the middle attack.")))}p.isMDXComponent=!0}}]);