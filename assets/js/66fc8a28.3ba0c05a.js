"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,f=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:40},o="Configure a flag",i={unversionedId:"flag_format",id:"version-v0.22.3/flag_format",title:"Configure a flag",description:"go-feature-flag core feature is to centralize all your feature flags in a source file, and to avoid hosting and maintaining a backend server to manage them.",source:"@site/versioned_docs/version-v0.22.3/flag_format.md",sourceDirName:".",slug:"/flag_format",permalink:"/docs/v0.22.3/flag_format",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.22.3/flag_format.md",tags:[],version:"v0.22.3",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"S3 Bucket",permalink:"/docs/v0.22.3/flag_file/s3"},next:{title:"Available rollout strategies",permalink:"/docs/v0.22.3/rollout/"}},p={},d=[{value:"Editor",id:"editor",level:2},{value:"Example",id:"example",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3},{value:"Format details",id:"format-details",level:2},{value:"Rule format",id:"rule-format",level:2},{value:"Examples",id:"examples",level:3},{value:"Advanced configurations",id:"advanced-configurations",level:2}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-a-flag"},"Configure a flag"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," core feature is to centralize all your feature flags in a source file, and to avoid hosting and maintaining a backend server to manage them.  "),(0,r.kt)("p",null,"Your file must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TOML")," file with a list of flags ",(0,r.kt)("em",{parentName:"p"},"(examples: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"YAML")),", ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.json"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON")),", ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.toml"},(0,r.kt)("inlineCode",{parentName:"a"},"TOML")),")"),"."),(0,r.kt)("p",null,"The easiest way to create your configuration file is to used ",(0,r.kt)("a",{parentName:"p",href:"https://thomaspoignant.github.io/go-feature-flag-editor/"},(0,r.kt)("strong",{parentName:"a"},"GO Feature Flag Editor")," available at https://thomaspoignant.github.io/go-feature-flag-editor/"),".",(0,r.kt)("br",{parentName:"p"}),"\n","If you prefer to do it manually please follow instruction bellow."),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)("p",null,"Creating the first version of the flag is not always pleasant, that's why we have created ",(0,r.kt)("a",{parentName:"p",href:"https://thomaspoignant.github.io/go-feature-flag-editor/"},(0,r.kt)("strong",{parentName:"a"},"GO Feature Flag Editor"))," a simple editor to create your files.  "),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"A flag configuration looks like:"),(0,r.kt)("h3",{id:"yaml"},"YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'test-flag:\n  percentage: 100\n  rule: key eq "random-key"\n  true: true\n  false: false\n  default: false\n  disable: false\n  trackEvents: true\n  version: 1\n  rollout:\n    experimentation:\n      start: 2021-03-20T00:00:00.10-05:00\n      end: 2021-03-21T00:00:00.10-05:00\n\ntest-flag2:\n  rule: key eq "not-a-key"\n  percentage: 100\n  true: true\n  false: false\n  default: false\n  version: 12\n')),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "test-flag": {\n    "percentage": 100,\n    "rule": "key eq \\"random-key\\"",\n    "true": true,\n    "false": false,\n    "default": false,\n    "disable": false,\n    "trackEvents": true,\n    "version": 1,\n    "rollout": {\n      "experimentation": {\n        "start": "2021-03-20T05:00:00.100Z",\n        "end": "2021-03-21T05:00:00.100Z"\n      }\n    }\n  },\n  "test-flag2": {\n    "rule": "key eq \\"not-a-key\\"",\n    "percentage": 100,\n    "true": true,\n    "false": false,\n    "default": false,\n    "version": 12\n  }\n}\n')),(0,r.kt)("h3",{id:"toml"},"TOML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[test-flag]\npercentage = 100.0\nrule = "key eq \\"random-key\\""\ntrue = true\nfalse = false\ndefault = false\ndisable = false\ntrackEvents = true\nversion = 1.0\n\n[test-flag.rollout]\n\n    [test-flag.rollout.experimentation]\n    start = 2021-03-20T05:00:00.100Z\n    end = 2021-03-21T05:00:00.100Z\n\n[test-flag2]\nrule = "key eq \\"not-a-key\\""\npercentage = 100.0\ntrue = true\nfalse = false\ndefault = false\nversion = 12.0\n')),(0,r.kt)("h2",{id:"format-details"},"Format details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"flag-key")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of your flag.",(0,r.kt)("br",null)," It must be unique.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"On the example the flag keys are ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("inlineCode",{parentName:"strong"},"test-flag"))," and ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("inlineCode",{parentName:"strong"},"test-flag2")),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Value returned by the flag if apply to the user ",(0,r.kt)("em",{parentName:"td"},"(rule is evaluated to true)")," and the user is in the active percentage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Value returned by the flag if apply to the user ",(0,r.kt)("em",{parentName:"td"},"(rule is evaluated to true)")," and the user is ",(0,r.kt)("strong",{parentName:"td"},"not")," in the active percentage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},"Value returned by the flag if not apply to the user ",(0,r.kt)("em",{parentName:"td"},"(rule is evaluated to false)."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"percentage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"Percentage of the users who should be affected by the flag.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: 0"),(0,r.kt)("br",null),(0,r.kt)("br",null),"The percentage is computed by calculating a hash of the user key ",(0,r.kt)("em",{parentName:"td"},"(100000 variations)"),", it means that you can have 3 numbers after the comma.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"rule")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"Condition to determine on which user the flag should be applied.",(0,r.kt)("br",null),"Rule format is described in the ",(0,r.kt)("a",{parentName:"td",href:"#rule-format"},"rule format section"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"If no rule is set, the flag applies to all users ",(0,r.kt)("em",{parentName:"strong"},"(percentage still apply)"),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"disable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"True if the flag is disabled.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: ",(0,r.kt)("inlineCode",{parentName:"strong"},"false")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"trackEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"False if you don't want to export the data in your data exporter.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: ",(0,r.kt)("inlineCode",{parentName:"strong"},"true")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"The version is the version of your flag.",(0,r.kt)("br",null),"This number is used to display the information in the notifiers and data collection, you have to update it your self.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: 0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"rollout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),(0,r.kt)("code",null,"rollout")," contains a specific rollout strategy you want to use.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"See ",(0,r.kt)("a",{parentName:"strong",href:"/docs/v0.22.3/rollout/"},"rollout section")," for more details."))))),(0,r.kt)("h2",{id:"rule-format"},"Rule format"),(0,r.kt)("p",null,"The rule format is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nikunjy/rules"},(0,r.kt)("inlineCode",{parentName:"a"},"nikunjy/rules"))," library."),(0,r.kt)("p",null,"All the operations can be written capitalized or lowercase (ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"eq")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EQ")," can be used).",(0,r.kt)("br",{parentName:"p"}),"\n","Logical Operations supported are ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"p"},"OR"),"."),(0,r.kt)("p",null,"Compare Expression and their definitions (",(0,r.kt)("inlineCode",{parentName:"p"},"a|b")," means you can use either one of the two ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"eq")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},"equals to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ne")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},"not equals to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"lt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},"less than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"gt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"le")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:null},"less than equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ge")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"co")),(0,r.kt)("td",{parentName:"tr",align:null},"contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sw")),(0,r.kt)("td",{parentName:"tr",align:null},"starts with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ew")),(0,r.kt)("td",{parentName:"tr",align:null},"ends with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"in")),(0,r.kt)("td",{parentName:"tr",align:null},"in a list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"pr")),(0,r.kt)("td",{parentName:"tr",align:null},"present")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"not")),(0,r.kt)("td",{parentName:"tr",align:null},"not of a logical expression")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a specific user: ",(0,r.kt)("inlineCode",{parentName:"li"},'key eq "example@example.com"')),(0,r.kt)("li",{parentName:"ul"},"Select all identified users: ",(0,r.kt)("inlineCode",{parentName:"li"},"anonymous ne true")),(0,r.kt)("li",{parentName:"ul"},"Select a user with a custom property: ",(0,r.kt)("inlineCode",{parentName:"li"},'userId eq "12345"')),(0,r.kt)("li",{parentName:"ul"},"Select on multiple criteria:",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"All users with ids finishing by ",(0,r.kt)("inlineCode",{parentName:"em"},"@test.com")," that have the role ",(0,r.kt)("inlineCode",{parentName:"em"},"backend engineer")," in the ",(0,r.kt)("inlineCode",{parentName:"em"},"pro")," environment for the\ncompany ",(0,r.kt)("inlineCode",{parentName:"em"},"go-feature-flag")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'(key ew "@test.com") and (role eq "backend engineer") and (env eq "pro") and (company eq "go-feature-flag")`\n')))),(0,r.kt)("h2",{id:"advanced-configurations"},"Advanced configurations"),(0,r.kt)("p",null,"You can have advanced configurations for your flag to have specific behavior for them, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.22.3/rollout/"},"Specific rollout strategies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.22.3/data_collection/#dont-track-a-flag"},"Don't track a flag"))))}s.isMDXComponent=!0}}]);