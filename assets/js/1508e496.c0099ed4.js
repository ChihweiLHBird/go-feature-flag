"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:f,groupId:m,className:g}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=f??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,n.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,a=E.indexOf(t),r=y[a].value;r!==O&&(x(t),T(r),null!=m&&w(m,String(r)))},_=e=>{var t;let a=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:_,onClick:N},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},25414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={},s="Canary Release",u={unversionedId:"configure_flag/rollout/canary",id:"version-v1.0.0/configure_flag/rollout/canary",title:"Canary Release",description:"Canary release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody.",source:"@site/versioned_docs/version-v1.0.0/configure_flag/rollout/canary.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/canary",permalink:"/docs/configure_flag/rollout/canary",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.0/configure_flag/rollout/canary.mdx",tags:[],version:"v1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rollout strategies",permalink:"/docs/category/rollout-strategies"},next:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/configure_flag/rollout/experimentation"}},c={},p=[{value:"Example",id:"example",level:2}],d={toc:p};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"canary-release"},"Canary Release"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Canary release")," is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody."),(0,n.kt)("p",null,"This is the easiest rollout strategy available.\nYou just have to select a percentage of your users in your flag, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"True")," behavior will apply to them."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"canary-flag:\n  variations:\n    oldBehavior: false\n    canary: true\n  defaultRule:\n  # highlight-start\n    percentage:\n      oldBehavior: 99\n      canary: 1\n  # highlight-end\n"))),(0,n.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},' {\n  "canary-flag": {\n    "variations": {\n      "oldBehavior": false,\n      "canary": true\n    },\n    "defaultRule": {\n# highlight-start\n      "percentage": {\n        "oldBehavior": 99,\n        "canary": 1\n      }\n# highlight-end\n    }\n  }\n}\n'))),(0,n.kt)(o.Z,{value:"toml",label:"TOML",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},"[canary-flag.variations]\noldBehavior = false\ncanary = true\n\n# highlight-start\n[canary-flag.defaultRule.percentage]\noldBehavior = 99\ncanary = 1\n# highlight-end\n")))))}f.isMDXComponent=!0}}]);