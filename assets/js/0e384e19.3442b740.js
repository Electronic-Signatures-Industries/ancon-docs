"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},s="Ancon Protocol",l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Ancon Protocol",description:"Hybrid Smart Contracts protocol for secure offchain data economy",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ancon-docs/docs/intro",editUrl:"https://github.com/Electronic-Signatures-Industries/ancon-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/ancon-docs/docs/api/reference"}},u=[{value:"Hybrid Smart Contracts protocol for secure offchain data economy",id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy",children:[],level:3},{value:"API Reference",id:"api-reference",children:[],level:2},{value:"API - Core Features",id:"api---core-features",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ancon-protocol"},"Ancon Protocol"),(0,a.kt)("h3",{id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy"},"Hybrid Smart Contracts protocol for secure offchain data economy"),(0,a.kt)("p",null,"Ancon protocol is a new kind of SDK and technology that can be used to implement secure offchain data integrations using best of breed offchain protocols like ipfs and any blockchain with smart contracts support ."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/reference"},"Ancon IPLD router sync"))),(0,a.kt)("h2",{id:"api---core-features"},"API - Core Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/metadata"},"DAG compatible schema onchain metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/durin"},"Cross chain transactions with trusted offchain gateways")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/ipld"},"Developing IPLD operations with GraphQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/graphsync"},"Working with subgraphs using Graphsync protocol"))),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership"},"EVM to EVM cross ownership metadata transfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership-flow"},"EVM to Flow cross ownership metadata transfer"))),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/data-unions"},"Data unions"))))}f.isMDXComponent=!0}}]);