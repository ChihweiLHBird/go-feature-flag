"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[80261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},y=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(m,l(l({ref:t},y),{},{components:r})):a.createElement(m,l({ref:t},y))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:70,title:"Deployment",description:"Deploy the relay proxy."},l="Deploy the relay proxy",i={unversionedId:"relay_proxy/deploy_relay_proxy",id:"version-v1.15.0/relay_proxy/deploy_relay_proxy",title:"Deployment",description:"Deploy the relay proxy.",source:"@site/versioned_docs/version-v1.15.0/relay_proxy/deploy_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/deploy_relay_proxy",permalink:"/docs/v1.15.0/relay_proxy/deploy_relay_proxy",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.0/relay_proxy/deploy_relay_proxy.md",tags:[],version:"v1.15.0",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Deployment",description:"Deploy the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"API endpoints",permalink:"/docs/v1.15.0/relay_proxy/relay_proxy_endpoints"},next:{title:"Monitoring",permalink:"/docs/v1.15.0/relay_proxy/monitor_relay_proxy"}},p={},s=[{value:"Deploy in Kubernetes using Helm",id:"deploy-in-kubernetes-using-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Prepare and Configure the Repository",id:"step-1-prepare-and-configure-the-repository",level:3},{value:"Step 2: Install the Chart",id:"step-2-install-the-chart",level:3},{value:"Step 3: Verify The Chart Installation",id:"step-3-verify-the-chart-installation",level:3},{value:"Deploy as AWS Lambda",id:"deploy-as-aws-lambda",level:2}],y={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-the-relay-proxy"},"Deploy the relay proxy"),(0,n.kt)("h2",{id:"deploy-in-kubernetes-using-helm"},"Deploy in Kubernetes using Helm"),(0,n.kt)("p",null,"The relay proxy can be deployed in Kubernetes using a helm chart.",(0,n.kt)("br",{parentName:"p"}),"\n","Helm is an invaluable tool for configuring and deploying applications to a Kubernetes environment."),(0,n.kt)("p",null,"Below are the steps for installing a Helm Chart from a ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," Helm repository."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access to a Kubernetes cluster"),(0,n.kt)("li",{parentName:"ul"},"Helm CLI installed on the client machine")),(0,n.kt)("h3",{id:"step-1-prepare-and-configure-the-repository"},"Step 1: Prepare and Configure the Repository"),(0,n.kt)("p",null,"Add the repository to Helm with the Helm repository add command and provide a name and the repository URL. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add go-feature-flag https://charts.gofeatureflag.org/\n")),(0,n.kt)("h3",{id:"step-2-install-the-chart"},"Step 2: Install the Chart"),(0,n.kt)("p",null,"Install the Helm Chart with the Helm install command and provide the custom repository name, the chart name and any necessary values files.",(0,n.kt)("br",{parentName:"p"}),"\n","You can look at the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/cmd/relayproxy/helm-charts/relay-proxy/README.md"},"helm doc")," to know exactly what you can change in the values.yaml file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install go-feature-flag/relay-proxy -f values.yaml\n")),(0,n.kt)("h3",{id:"step-3-verify-the-chart-installation"},"Step 3: Verify The Chart Installation"),(0,n.kt)("p",null,"Verify the Helm Chart installation with the Helm list command. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm list\n")),(0,n.kt)("h2",{id:"deploy-as-aws-lambda"},"Deploy as AWS Lambda"),(0,n.kt)("p",null,"The GO Feature Flag relay proxy can easily be launched as an AWS Lambda function.\nTo do this, simply set the ",(0,n.kt)("inlineCode",{parentName:"p"},"startAsAwsLambda")," option in your configuration file to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nstartAsAwsLambda: true\n")),(0,n.kt)("p",null,"Once you've updated your configuration file, you can deploy your function in AWS and configure it to be accessible\nvia HTTP. This can be achieved by creating an API Gateway or an Application Load Balancer (ALB) and linking it to\nyour Lambda function."),(0,n.kt)("p",null,"By configuring your GO Feature Flag relay proxy to run as an AWS Lambda function, you can take advantage of the many\nbenefits of serverless computing, including automatic scaling, reduced infrastructure costs, and simplified\ndeployment and management."))}c.isMDXComponent=!0}}]);