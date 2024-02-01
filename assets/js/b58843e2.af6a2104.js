"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[26776],{13283:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(85893),r=o(11151);const a={sidebar_position:6},s="Kafka Exporter",i={id:"go_module/data_collection/kafka",title:"Kafka Exporter",description:"The Kafka exporter produces messages to a Kafka topic for each event generated.",source:"@site/docs/go_module/data_collection/kafka.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/kafka",permalink:"/docs/next/go_module/data_collection/kafka",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/data_collection/kafka.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Log Exporter",permalink:"/docs/next/go_module/data_collection/log"},next:{title:"SQS Exporter",permalink:"/docs/next/go_module/data_collection/sqs"}},d={},c=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"kafka-exporter",children:"Kafka Exporter"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Kafka exporter"})," produces messages to a Kafka topic for each event generated."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'ffclient.Config{ \n   // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &kafkaexporter.Exporter{\n\t\t\tSettings: kafkaexporter.Settings{\n\t\t\t\tTopic: "go-feature-flag-events",\n                Addresses: []string{"cluster1", "cluster2"},\n            },\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Topic "})}),(0,n.jsx)(t.td,{children:"Name of the topic on which to publish messages"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Addresses "})}),(0,n.jsx)(t.td,{children:"The list of addressed for the Kafka boostrap servers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Config "})}),(0,n.jsxs)(t.td,{children:["(Optional) An instance of ",(0,n.jsx)(t.code,{children:"*sarama.Config"})," that holds additional settings for the producer, such as timeouts, TLS settings, etc. If not populated a default will be used by calling ",(0,n.jsx)(t.code,{children:"sarama.NewConfig()"})]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/kafkaexporter",children:"godoc for full details"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var n=o(67294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);