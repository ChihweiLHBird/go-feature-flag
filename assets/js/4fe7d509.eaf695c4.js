"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[2934],{72976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),l=n(74866),o=n(85162);const i={},s="Progressive rollout",c={id:"configure_flag/rollout/progressive",title:"Progressive rollout",description:"A progressive rollout allows you to increase the percentage of your flag over time.",source:"@site/docs/configure_flag/rollout/progressive.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/progressive",permalink:"/docs/next/configure_flag/rollout/progressive",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/configure_flag/rollout/progressive.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/next/configure_flag/rollout/experimentation"},next:{title:"Scheduled rollout",permalink:"/docs/next/configure_flag/rollout/scheduled"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"progressive-rollout",children:"Progressive rollout"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.strong,{children:"progressive rollout"})," allows you to increase the percentage of your flag over time."]}),"\n",(0,r.jsxs)(t.p,{children:["You can select a ",(0,r.jsx)(t.strong,{children:"release ramp"})," where the percentage of your flag will increase progressively between the start date\nand the end date."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(l.Z,{groupId:"code",children:[(0,r.jsx)(o.Z,{value:"yaml",label:"YAML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"progressive-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n# highlight-start\n    progressiveRollout:\n      initial:\n        variation: variationB\n        percentage: 0\n        date: 2021-03-20T00:00:00.1-05:00\n      end:\n        variation: variationB\n        percentage: 100\n        date: 2021-03-21T00:00:00.1-05:00\n# highlight-end\n"})})}),(0,r.jsx)(o.Z,{value:"json",label:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "progressive-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n# highlight-start\n      "progressiveRollout": {\n        "initial": {\n          "variation": "variationB",\n          "percentage": 0,\n          "date": "2021-03-20T05:00:00.100Z"\n        },\n        "end": {\n          "variation": "variationB",\n          "percentage": 100,\n          "date": "2021-03-21T05:00:00.100Z"\n        }\n      },\n# highlight-end\n    }\n  }\n}\n'})})}),(0,r.jsx)(o.Z,{value:"toml",label:"TOML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[progressive-flag.variations]\nvariationA = "A"\nvariationB = "B"\n# highlight-start\n[progressive-flag.defaultRule.progressiveRollout.initial]\nvariation = "variationB"\npercentage = 0\ndate = 2021-03-20T05:00:00.100Z\n\n[progressive-flag.defaultRule.progressiveRollout.end]\nvariation = "variationB"\npercentage = 100\ndate = 2021-03-21T05:00:00.100Z\n# highlight-end\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"The dates are in the format supported natively by your flag file format."})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"releaseRamp"})})}),(0,r.jsxs)(t.td,{children:["It contains the time slot where we will progressively increase the percentage of the flag.",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Before"})," the ",(0,r.jsx)(t.code,{children:"start"})," date we will serve the ",(0,r.jsx)(t.code,{children:"percentage.initial"})," percentage of the flag."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"Between"})," ",(0,r.jsx)(t.code,{children:"start"})," and ",(0,r.jsx)(t.code,{children:"end"})," we will serve a percentage of the flag corresponding to the actual time."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.strong,{children:"After"})," the ",(0,r.jsx)(t.code,{children:"end"})," date we will serve the ",(0,r.jsx)(t.code,{children:"percentage.end"})," percentage of the flag."]})]}),(0,r.jsxs)("p",{children:["If you have no date in your ",(0,r.jsx)(t.code,{children:"releaseRamp"})," we will not do any progressive rollout and use the top level percentage you have configured ",(0,r.jsx)(t.em,{children:"(0% in our example)"}),"."]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"percentage"})})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"It represents the ramp of progress, at which level the flag starts (",(0,r.jsx)(t.code,{children:"initial"}),") and ends (",(0,r.jsx)(t.code,{children:"end"}),").",(0,r.jsx)("br",{}),(0,r.jsxs)(t.strong,{children:["Default: ",(0,r.jsx)(t.code,{children:"initial"})," = ",(0,r.jsx)(t.code,{children:"0"})," and ",(0,r.jsx)(t.code,{children:"end"})," = ",(0,r.jsx)(t.code,{children:"100"})]})]})]})]})]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),l=n(12466),o=n(16550),i=n(20469),s=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=c??p;return g({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function b(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),a=i[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(b,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,v.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const a={},l=r.createContext(a);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);