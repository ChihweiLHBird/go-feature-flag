"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),c=a,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},94627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="Progressive rollout",i={unversionedId:"rollout/progressive",id:"version-v0.26.1/rollout/progressive",title:"Progressive rollout",description:"A progressive rollout allows you to increase the percentage of your flag over time.",source:"@site/versioned_docs/version-v0.26.1/rollout/progressive.md",sourceDirName:"rollout",slug:"/rollout/progressive",permalink:"/docs/v0.26.1/rollout/progressive",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.26.1/rollout/progressive.md",tags:[],version:"v0.26.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/v0.26.1/rollout/experimentation"},next:{title:"Scheduled rollout",permalink:"/docs/v0.26.1/rollout/scheduled"}},s={},p=[{value:"Example",id:"example",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3},{value:"Configuration fields",id:"configuration-fields",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"progressive-rollout"},"Progressive rollout"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"progressive rollout")," allows you to increase the percentage of your flag over time."),(0,a.kt)("p",null,"You can select a ",(0,a.kt)("strong",{parentName:"p"},"release ramp")," where the percentage of your flag will increase progressively between the start date and the end date."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"yaml"},"YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'progressive-flag:\n  true: "B"\n  false: "A"\n  default: "Default"\n  # highlight-start\n  rollout:\n    progressive:\n      percentage:\n        initial: 0\n        end: 100\n      releaseRamp:\n        start: 2021-03-20T00:00:00.10-05:00\n        end: 2021-03-21T00:00:00.10-05:00\n  # highlight-end\n')),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "progressive-flag": {\n    "true": "B",\n    "false": "A",\n    "default": "Default",\n    # highlight-start\n    "rollout": {\n      "progressive": {\n        "percentage": {\n          "initial": 0,\n          "end": 100\n        },\n        "releaseRamp": {\n          "start": "2021-03-20T05:00:00.100Z",\n          "end": "2021-03-21T05:00:00.100Z"\n        }\n      }\n    }\n    # highlight-end\n  }\n}\n')),(0,a.kt)("h3",{id:"toml"},"TOML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[progressive-flag]\ntrue = "B"\nfalse = "A"\ndefault = "Default"\n# highlight-start\n  [progressive-flag.rollout]\n\n    [progressive-flag.rollout.progressive]\n\n      [progressive-flag.rollout.progressive.percentage]\n      initial = 0.0\n      end = 100.0\n\n      [progressive-flag.rollout.progressive.releaseRamp]\n      start = 2021-03-20T05:00:00.100Z\n      end = 2021-03-21T05:00:00.100Z\n# highlight-end\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The dates are in the format supported natively by your flag file format.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"releaseRamp"))),(0,a.kt)("td",{parentName:"tr",align:null},"It contains the time slot where we will progressively increase the percentage of the flag.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("strong",{parentName:"td"},"Before")," the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," date we will serve the ",(0,a.kt)("inlineCode",{parentName:"td"},"percentage.initial")," percentage of the flag."),(0,a.kt)("li",null,(0,a.kt)("strong",{parentName:"td"},"Between")," ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," we will serve a percentage of the flag corresponding of the actual time."),(0,a.kt)("li",null,(0,a.kt)("strong",{parentName:"td"},"After")," the ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," date we will serve the ",(0,a.kt)("inlineCode",{parentName:"td"},"percentage.end")," percentage of the flag.")),(0,a.kt)("p",null,"If you have no date in your ",(0,a.kt)("inlineCode",{parentName:"td"},"releaseRamp")," we will not do any progressive rollout and use the top level percentage you have configured ",(0,a.kt)("em",{parentName:"td"},"(0% in our example)"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"percentage"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"It represents the ramp of progress, at which level the flag starts (",(0,a.kt)("inlineCode",{parentName:"td"},"initial"),") and at which level it ends (",(0,a.kt)("inlineCode",{parentName:"td"},"end"),").",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default: ",(0,a.kt)("inlineCode",{parentName:"strong"},"initial")," = ",(0,a.kt)("inlineCode",{parentName:"strong"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"end")," = ",(0,a.kt)("inlineCode",{parentName:"strong"},"100")))))))}d.isMDXComponent=!0}}]);