"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[50326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:91,description:"Lint your config"},o="Lint your config",l={unversionedId:"linter",id:"version-v1.3.0/linter",title:"Lint your config",description:"Lint your config",source:"@site/versioned_docs/version-v1.3.0/linter.md",sourceDirName:".",slug:"/linter",permalink:"/docs/v1.3.0/linter",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.3.0/linter.md",tags:[],version:"v1.3.0",sidebarPosition:91,frontMatter:{sidebar_position:91,description:"Lint your config"},sidebar:"tutorialSidebar",previous:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/v1.3.0/migrate_v0_v1"},next:{title:"Frequently Asked Questions",permalink:"/docs/v1.3.0/faq"}},s={},u=[{value:"Install the linter",id:"install-the-linter",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the linter",id:"use-the-linter",level:2},{value:"GitHub Actions",id:"github-actions",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lint-your-config"},"Lint your config"),(0,r.kt)("p",null,"A faulty configuration could make ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," not the way you expect.",(0,r.kt)("br",{parentName:"p"}),"\n","This is why we have introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag-lint")," a command line tool validates that a flags file can be parsed by ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend you to use this command line in your CI/CD pipelines to avoid any disappointment.")),(0,r.kt)("h2",{id:"install-the-linter"},"Install the linter"),(0,r.kt)("h3",{id:"install-using-homebrew-mac-and-linux"},"Install using Homebrew (mac and linux)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-lint\n")),(0,r.kt)("h3",{id:"install-using-scoop-windows"},"Install using Scoop (windows)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket add org https://github.com/thomaspoignant/scoop.git\nscoop install go-feature-flag-lint\n")),(0,r.kt)("h3",{id:"install-using-docker"},"Install using Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull thomaspoignant/go-feature-flag-lint:latest\n")),(0,r.kt)("h2",{id:"use-the-linter"},"Use the linter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./go-feature-flag-lint \\\n  --input-format=yaml \\\n  --input-file=/input/my-go-feature-flag-config.yaml\n")),(0,r.kt)("p",null,"The command line has 2 arguments you should specify."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--input-file")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(mandatory)")," The location of your configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--input-format")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(mandatory)")," The format of your current configuration file. ",(0,r.kt)("br",null),"Available formats are ",(0,r.kt)("inlineCode",{parentName:"td"},"yaml"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"toml"),".")))),(0,r.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag-lint")," using GitHub actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: docker://thomaspoignant/go-feature-flag-lint:latest\n        with:\n          args: --input-file=/github/workspace/path/to/your/config.yaml --input-format=yaml\n")))}d.isMDXComponent=!0}}]);