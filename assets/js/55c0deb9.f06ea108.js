"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[96308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,d=p["".concat(m,".").concat(f)]||p[f]||c[f]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:90,description:"How to migrate from v0.x.x to v1.x.x"},o="Migrate from v0.x.x to v1.x.x",l={unversionedId:"migrate_v0_v1",id:"version-v1.15.0/migrate_v0_v1",title:"Migrate from v0.x.x to v1.x.x",description:"How to migrate from v0.x.x to v1.x.x",source:"@site/versioned_docs/version-v1.15.0/migrate_v0_v1.md",sourceDirName:".",slug:"/migrate_v0_v1",permalink:"/docs/v1.15.0/migrate_v0_v1",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.0/migrate_v0_v1.md",tags:[],version:"v1.15.0",sidebarPosition:90,frontMatter:{sidebar_position:90,description:"How to migrate from v0.x.x to v1.x.x"},sidebar:"tutorialSidebar",previous:{title:"Custom Notifier",permalink:"/docs/v1.15.0/go_module/notifier/custom"},next:{title:"Lint your config",permalink:"/docs/v1.15.0/linter"}},m={},u=[{value:"Install the migration command line",id:"install-the-migration-command-line",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the migration command line",id:"use-the-migration-command-line",level:2},{value:"Update your flag file",id:"update-your-flag-file",level:2}],s={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrate-from-v0xx-to-v1xx"},"Migrate from v0.x.x to v1.x.x"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Version ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.0.0")," has introduced a new flag format that push the limits of ",(0,i.kt)("strong",{parentName:"p"},"GO Feature Flag")," even further.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"BUT")," the flag format from all the versions ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.x.x")," are still compatible and supported by the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.0.0"),".")),(0,i.kt)("p",null,"A command line is available to help you to convert your actual configuration file to the version ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.x.x"),"."),(0,i.kt)("h2",{id:"install-the-migration-command-line"},"Install the migration command line"),(0,i.kt)("h3",{id:"install-using-homebrew-mac-and-linux"},"Install using Homebrew (mac and linux)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-migration-cli\n")),(0,i.kt)("h3",{id:"install-using-scoop-windows"},"Install using Scoop (windows)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket add org https://github.com/go-feature-flag/scoop.git\nscoop install go-feature-flag-migration-cli\n")),(0,i.kt)("h3",{id:"install-using-docker"},"Install using Docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull thomaspoignant/go-feature-flag-migration-cli:latest\n")),(0,i.kt)("h2",{id:"use-the-migration-command-line"},"Use the migration command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./go-feature-flag-migration-cli \\\n  --input-format=yaml \\\n  --input-file=/config/my-go-feature-flag-config-v0.x.x.yaml \\\n  --output-format=yaml \\\n  --output-file=/config/my-go-feature-flag-config-v1.x.x.yaml\n")),(0,i.kt)("p",null,"The command line has 4 arguments you should specify."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input-format"),": Format of your input file (",(0,i.kt)("inlineCode",{parentName:"li"},"YAML"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"TOML"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input-file"),": Location of the flag file you want to convert."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output-format"),": Format of your output file (",(0,i.kt)("inlineCode",{parentName:"li"},"YAML"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"TOML"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output-file"),": Location of the converted flag file.")),(0,i.kt)("h2",{id:"update-your-flag-file"},"Update your flag file"),(0,i.kt)("p",null,"When your file is ready, you just have to replace your file in the location where GO Feature Flag is retrieving it."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If for any reason your file is not readable by GO Feature Flag, it will not break anything, we will keep the latest version we have in memory. ")))}c.isMDXComponent=!0}}]);