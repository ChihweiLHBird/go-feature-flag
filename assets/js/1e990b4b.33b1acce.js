"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,c=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="Webhook Notifier",l={unversionedId:"go_module/notifier/webhook",id:"version-v1.5.0/go_module/notifier/webhook",title:"Webhook Notifier",description:"The Webhook notifier will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected.",source:"@site/versioned_docs/version-v1.5.0/go_module/notifier/webhook.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/webhook",permalink:"/docs/v1.5.0/go_module/notifier/webhook",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.5.0/go_module/notifier/webhook.md",tags:[],version:"v1.5.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Slack Notifier",permalink:"/docs/v1.5.0/go_module/notifier/slack"},next:{title:"Custom Notifier",permalink:"/docs/v1.5.0/go_module/notifier/custom"}},s={},u=[{value:"Configure the webhook notifier",id:"configure-the-webhook-notifier",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:3},{value:"Signature",id:"signature",level:2}],d={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webhook-notifier"},"Webhook Notifier"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Webhook notifier")," will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected."),(0,a.kt)("p",null,"The format of the call is specified in the ",(0,a.kt)("a",{parentName:"p",href:"#format"},"format section")," and, you can ",(0,a.kt)("a",{parentName:"p",href:"#signature"},"sign the body")," to trust the data you are receiving. "),(0,a.kt)("h2",{id:"configure-the-webhook-notifier"},"Configure the webhook notifier"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'ffclient.Config{ \n    // ...\n    Notifiers: []notifier.Notifier{\n        &webhooknotifier.Notifier{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n        // ...\n    },\n}\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"EndpointURL")),(0,a.kt)("td",{parentName:"tr",align:null},"The complete URL of your API ",(0,a.kt)("em",{parentName:"td"},"(we will send a POST request to this URL, ",(0,a.kt)("a",{parentName:"em",href:"#format"},"see format"),")"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Secret")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"A secret key you can share with your webhook. We will use this key to sign the request ",(0,a.kt)("em",{parentName:"td"},"(see ",(0,a.kt)("a",{parentName:"em",href:"#signature"},"signature section")," for more details)"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Meta")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"A list of key value that will be add in your request, this is super useful if you want to add information on the current running instance of your app.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"By default the hostname is always added in the meta information."))))),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"If you have configured a webhook, a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request will be sent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EndpointURL")," with a body in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "hostname": "server01",\n        // ...\n    },\n    "flags": {\n        "deleted": {}, // map of your deleted flags\n        "added": {}, // map of your added flags\n        "updated": {\n            "flag-name": { // an object that contains old and new value\n                "old_value": {},\n                "new_value": {}\n            }\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "meta":{\n       "hostname": "server01"\n   },\n   "flags":{\n       "deleted": {\n           "test-flag": {\n               "rule": "key eq \\"random-key\\"",\n               "percentage": 100,\n               "true": true,\n               "false": false,\n               "default": false\n           }\n       },\n       "added": {\n           "test-flag3": {\n               "percentage": 5,\n               "true": "test",\n               "false": "false",\n               "default": "default"\n           }\n       },\n       "updated": {\n           "test-flag2": {\n               "old_value": {\n                   "rule": "key eq \\"not-a-key\\"",\n                   "percentage": 100,\n                   "true": true,\n                   "false": false,\n                   "default": false\n               },\n               "new_value": {\n                   "disable": true,\n                   "rule": "key eq \\"not-a-key\\"",\n                   "percentage": 100,\n                   "true": true,\n                   "false": false,\n                   "default": false\n               }\n           }\n       }\n   }\n}\n')),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("p",null,"This header ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"X-Hub-Signature-256"))," is sent if the webhook is configured with a secret. This is the HMAC hex digest of the request body, and is generated using the SHA-256 hash function and the secret as the HMAC key."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The recommendation is to always use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," and on your API/webook always verify the signature key to be sure that you don't have a man in the middle attack.")))}f.isMDXComponent=!0}}]);