"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[36287],{12965:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=i(85893),r=i(11151);const n={sidebar_position:7},l="File",s={id:"go_module/store_file/file",title:"File",description:"The File Retriever will read a local file to get your flags.",source:"@site/versioned_docs/version-v1.20.0/go_module/store_file/file.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/file",permalink:"/docs/v1.20.0/go_module/store_file/file",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.20.0/go_module/store_file/file.md",tags:[],version:"v1.20.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/docs/v1.20.0/go_module/store_file/gitlab"},next:{title:"Custom Retriever",permalink:"/docs/v1.20.0/go_module/store_file/custom"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"file",children:"File"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/fileretriever/#Retriever",children:(0,o.jsx)(t.strong,{children:"File Retriever"})})," will read a local file to get your flags."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Using a file to store your flags is not recommend, except if it is in a shared folder for all your services."})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'import \t"github.com/thomaspoignant/go-feature-flag/retriever/file"\n// ...\n\nerr := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &fileretriever.Retriever{\n        Path: "file-example.yaml",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,o.jsx)(t.p,{children:"To configure your File retriever:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Path"})})}),(0,o.jsx)(t.td,{children:"location of your file on the file system."})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>l});var o=i(67294);const r={},n=o.createContext(r);function l(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);