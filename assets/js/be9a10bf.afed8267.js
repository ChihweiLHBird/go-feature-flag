"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[76823],{19659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(85893),r=t(11151),i=t(74866),s=t(85162);const l={sidebar_position:20,description:"What is a flag and how you can create them."},o="How to configure a flag",d={id:"configure_flag/flag_format",title:"How to configure a flag",description:"What is a flag and how you can create them.",source:"@site/versioned_docs/version-v1.18.0/configure_flag/flag_format.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/flag_format",permalink:"/docs/v1.18.0/configure_flag/flag_format",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.18.0/configure_flag/flag_format.mdx",tags:[],version:"v1.18.0",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"What is a flag and how you can create them."},sidebar:"tutorialSidebar",previous:{title:"Where to store your configuration flag",permalink:"/docs/v1.18.0/configure_flag/store_your_flags"},next:{title:"How to target specific users",permalink:"/docs/v1.18.0/configure_flag/rule_format"}},c={},u=[{value:"Editor",id:"editor",level:2},{value:"Example",id:"example",level:2},{value:"Format details",id:"format-details",level:2},{value:"Advanced configurations",id:"advanced-configurations",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-configure-a-flag",children:"How to configure a flag"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"GO Feature Flag"})," core feature is to centralize all your feature flags in a source file, and to avoid hosting and maintaining a backend server to manage them."]}),"\n",(0,a.jsxs)(n.p,{children:["Your file must be a valid ",(0,a.jsx)(n.code,{children:"YAML"}),", ",(0,a.jsx)(n.code,{children:"JSON"})," or ",(0,a.jsx)(n.code,{children:"TOML"})," file with a list of flags\n",(0,a.jsxs)(n.em,{children:["(examples: ",(0,a.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.yaml",children:(0,a.jsx)(n.code,{children:"YAML"})}),",\n",(0,a.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.json",children:(0,a.jsx)(n.code,{children:"JSON"})}),",\n",(0,a.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.toml",children:(0,a.jsx)(n.code,{children:"TOML"})}),")"]}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["The easiest way to create your configuration file is to used\n[",(0,a.jsx)(n.strong,{children:"GO Feature Flag Editor"})," available at ",(0,a.jsx)(n.a,{href:"https://editor.gofeatureflag.org",children:"https://editor.gofeatureflag.org"}),"."]}),(0,a.jsx)(n.p,{children:"If you prefer to do it manually please follow instruction bellow."})]}),"\n",(0,a.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,a.jsxs)(n.p,{children:["Creating the first version of the flag is not always pleasant, that's why we have created\n",(0,a.jsx)(n.a,{href:"https://editor.gofeatureflag.org",children:(0,a.jsx)(n.strong,{children:"GO Feature Flag Editor"})})," a simple editor to create your files."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"A flag configuration looks like:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"code",children:[(0,a.jsx)(s.Z,{value:"yaml",label:"YAML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# This is your configuration for your first flag\nfirst-flag:\n  variations: # All possible return value for your feature flag\n    A: false\n    B: true\n  targeting: # If you want to target a subset of your users in particular\n    - query: key eq "random-key"\n      percentage:\n        A: 0\n        B: 100\n  defaultRule: # When no targeting match we use the defaultRule\n    variation: A\n  metadata:\n    issue_link: https://github.com/thomaspoignant/go-feature-flag/issues/XXX\n    description: this is my first feature flag\n\n# A second example of a flag configuration\nsecond-flag:\n  variations:\n    A: "valueA"\n    B: "valueB"\n    defaultValue: "a default value"\n  targeting:\n    - name: legacyRuleV0\n      query: key eq "not-a-key"\n      percentage:\n        A: 10\n        B: 90\n  defaultRule:\n    name: legacyDefaultRule\n    variation: defaultValue\n  version: "12"\n  experimentation:\n    start: 2021-03-20T00:00:00.1-05:00\n    end: 2021-03-21T00:00:00.1-05:00\n'})})}),(0,a.jsx)(s.Z,{value:"json",label:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "first-flag": {\n    "variations": {\n      "A": false,\n      "B": true\n    },\n    "targeting": [\n      {\n        "query": "key eq \\"random-key\\"",\n        "percentage": {\n          "A": 0,\n          "B": 100\n        }\n      }\n    ],\n    "defaultRule": {\n      "variation": "A"\n    },\n    "metadata": {\n      "issue_link": "https://github.com/thomaspoignant/go-feature-flag/issues/XXX",\n      "description": "this is my first feature flag"\n    }\n  },\n\n  "second-flag": {\n    "variations": {\n      "A": "valueA",\n      "B": "valueB",\n      "defaultValue": "a default value"\n    },\n    "targeting": [\n      {\n        "name": "legacyRuleV0",\n        "query": "key eq \\"not-a-key\\"",\n        "percentage": {\n          "A": 10,\n          "B": 90\n        }\n      }\n    ],\n    "defaultRule": {\n      "name": "legacyDefaultRule",\n      "variation": "defaultValue"\n    },\n    "version": "12",\n    "experimentation": {\n      "start": "2021-03-20T05:00:00.100Z",\n      "end": "2021-03-21T05:00:00.100Z"\n    }\n  }\n}\n'})})}),(0,a.jsx)(s.Z,{value:"toml",label:"TOML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[first-flag.variations]\nA = false\nB = true\n\n[[first-flag.targeting]]\nquery = \'key eq "random-key"\'\n\n  [first-flag.targeting.percentage]\n  A = 0\n  B = 100\n\n[first-flag.defaultRule]\nvariation = "A"\n\n[first-flag.metadata]\nissue_link = "https://github.com/thomaspoignant/go-feature-flag/issues/XXX"\ndescription = "this is my first feature flag"\n\n[second-flag]\nversion = "12"\n\n  [second-flag.variations]\n  A = "valueA"\n  B = "valueB"\n  defaultValue = "a default value"\n\n  [[second-flag.targeting]]\n  name = "legacyRuleV0"\n  query = \'key eq "not-a-key"\'\n\n    [second-flag.targeting.percentage]\n    A = 10\n    B = 90\n\n  [second-flag.defaultRule]\n  name = "legacyDefaultRule"\n  variation = "defaultValue"\n\n  [second-flag.experimentation]\n  start = 2021-03-20T05:00:00.100Z\n  end = 2021-03-21T05:00:00.100Z\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"format-details",children:"Format details"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Field"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"20%",children:(0,a.jsx)("strong",{children:"flag-key"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)(n.p,{children:"Name of your flag."}),(0,a.jsx)("br",{}),(0,a.jsxs)("i",{children:[(0,a.jsx)(n.p,{children:"It must be unique."}),(0,a.jsx)("br",{}),(0,a.jsxs)(n.p,{children:["On the example the flag keys are ",(0,a.jsx)("code",{children:"test-flag"})," and"," ","\n",(0,a.jsx)("code",{children:"test-flag2"}),"."]})]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"variations"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:"Variations are all the variations available for this flag."}),(0,a.jsx)("p",{children:(0,a.jsxs)(n.p,{children:["It is represented as a key/value element. The key is the name of the\nvariation and the value could be any types available (\n",(0,a.jsx)("code",{children:"string"}),", ",(0,a.jsx)("code",{children:"float"}),", ",(0,a.jsx)("code",{children:"int"}),","," ","\n",(0,a.jsx)("code",{children:"map"}),", ",(0,a.jsx)("code",{children:"array"}),", ",(0,a.jsx)("code",{children:"bool"}),")."]})}),(0,a.jsx)("p",{children:"You can have as many variation as needed."}),(0,a.jsxs)("pre",{children:[(0,a.jsx)(n.h1,{id:"some-examples",children:"Some examples"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.p,{children:"variationString: test"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.p,{children:"variationBool: true"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.p,{children:"variationInt: 1000"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.p,{children:"variationFloat: 1000.23"}),(0,a.jsx)("br",{}),(0,a.jsxs)(n.p,{children:["variationArray: ",(0,a.jsx)("br",{})," - item1\n",(0,a.jsx)("br",{})," - item2"]}),(0,a.jsx)("br",{}),(0,a.jsxs)(n.p,{children:["variationObj:\n",(0,a.jsx)("br",{})," item1: 123\n",(0,a.jsx)("br",{})," item2: this is a string\n",(0,a.jsx)("br",{})," item3: false"]}),(0,a.jsx)("br",{})]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"targeting"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsxs)("td",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)(n.p,{children:"Targeting contains the list of rules you have to target a subset of\nyour users."}),(0,a.jsx)("br",{}),(0,a.jsx)(n.p,{children:"You can have as many target as needed."})]}),(0,a.jsx)("p",{children:(0,a.jsxs)(n.p,{children:["This field is an ",(0,a.jsx)("code",{children:"array"})," and contains a list of rules."]})}),(0,a.jsx)("p",{children:(0,a.jsx)("i",{children:(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)("a",{href:"./rule_format",children:"rules format"})," to have more info on\nhow to write a rule."]})})})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"defaultRule"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)(n.p,{children:"DefaultRule is the rule that is applied if the user does not match in\nany targeting."})}),(0,a.jsx)("p",{children:(0,a.jsx)("i",{children:(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)("a",{href:"./rule_format",children:"rules format"})," to have more info on\nhow to write a rule."]})})})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"trackEvents"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("code",{children:"false"})," if you don't want to export the data in your data\nexporter."]})}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Default:"}),(0,a.jsx)("code",{children:"true"})]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"disable"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("code",{children:"true"})," if the flag is disabled."]})}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Default:"}),(0,a.jsx)("code",{children:"false"})]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"version"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsxs)("td",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)(n.p,{children:"The version is the version of your flag."}),(0,a.jsx)("br",{}),(0,a.jsx)(n.p,{children:"This string is used to display the information in the notifiers and\ndata collection, you have to update it your self."})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Default:"}),(0,a.jsx)("code",{children:'""'})]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"metadata"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsx)("td",{children:(0,a.jsx)("p",{children:(0,a.jsx)(n.p,{children:"This field allows adding a wealth of information about a particular\nfeature flag, such as a configuration URL or the originating Jira\nissue."})})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"scheduledRollout"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:"Scheduled allow to patch your flag over time."}),(0,a.jsx)("p",{children:(0,a.jsx)(n.p,{children:"You can add several steps that updates the flag, this is typically\nused if you want to gradually add more user in your flag."})}),(0,a.jsx)("p",{children:(0,a.jsx)("i",{children:(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)("a",{href:"./rollout/scheduled/",children:"Scheduled rollout"})," to have\nmore info on how to use it."]})})})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"experimentation"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{children:"(optional)"})]}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)(n.p,{children:"Experimentation allow you to configure a start date and an end date\nfor your flag. When the experimentation is not running, the flag will\nserve the default value."})}),(0,a.jsx)("p",{children:(0,a.jsx)("i",{children:(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)("a",{href:"./rollout/experimentation/",children:"Experimentation rollout"})," ","\nto have more info on how to use it."]})})})]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"advanced-configurations",children:"Advanced configurations"}),"\n",(0,a.jsx)(n.p,{children:"You can have advanced configurations for your flag to have specific behavior for them, such as:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../category/rollout-strategies/",children:"Specific rollout strategies"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/v1.18.0/go_module/data_collection/#dont-track-a-flag",children:"Don't track a flag"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(86010),i=t(12466),s=t(16550),l=t(20469),o=t(91980),d=t(67392),c=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,u]=g({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),p=(()=>{const e=d??x;return f({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(d(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",p.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(b,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(67294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);