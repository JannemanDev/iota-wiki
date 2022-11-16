"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials",image:"/img/Identity_icon.png",keywords:["Identity","verifiable","credentials","Rust","WASM","reference"]},o="Overview",s={unversionedId:"getting_started/overview",id:"getting_started/overview",title:"Overview",description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials",source:"@site/iota/external/identity.rs/v0.6.0/documentation/docs/getting_started/overview.md",sourceDirName:"getting_started",slug:"/getting_started/overview",permalink:"/identity.rs/getting_started/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/iota/external/identity.rs/v0.6.0/documentation/docs/getting_started/overview.md",tags:[],version:"current",frontMatter:{description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials",image:"/img/Identity_icon.png",keywords:["Identity","verifiable","credentials","Rust","WASM","reference"]},sidebar:"docs",previous:{title:"Introduction to Decentralized Identity",permalink:"/identity.rs/decentralized_identity"},next:{title:"Install the Library",permalink:"/identity.rs/getting_started/install"}},l={},c=[{value:"Implementations",id:"implementations",level:2},{value:"Applications",id:"applications",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity getting started",src:n(93652).Z,width:"862",height:"200"})),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"standards proposed by W3C"),", this section explains the IOTA Identity implementation. You can use this implementation to create a new digital identity for anyone or anything at any time. To do so, you must first generate a ",(0,r.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/overview"},"Decentralized Identifier (DID)")," that will serve as a reference to the ",(0,r.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/overview#did-documents"},"DID Document"),". The DID Document contains public keys and other mechanisms to enable the subject to prove their association with the DID."),(0,r.kt)("p",null,"However, you cannot tell much about the subject from a DID. You need to combine the DID with ",(0,r.kt)("a",{parentName:"p",href:"../concepts/verifiable_credentials/overview"},"Verifiable Credentials"),'. Verifiable Credentials are statements about the creator of the DID. They can be shared and verified online in a "Bring Your Own Identity" (BYOI) manner, and the DID creator remains in complete control of the process.'),(0,r.kt)("p",null,"You can use this framework in processes such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address validation: Customers can prove where they live for shipping and billing addresses."),(0,r.kt)("li",{parentName:"ul"},"Age verification: Customers can prove they are 18+ for online purchases."),(0,r.kt)("li",{parentName:"ul"},"(Authority) Login: Customers can prove who they are and gain access to their account,\nwithout passwords. This can be useful for many websites, including eGovernment and\nbanking.")),(0,r.kt)("h2",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,'The IOTA Identity framework is developed in the Rust programming language. We also provide bindings, or "Foreign Function Interfaces" (FFI), to other languages. The full set of language bindings currently available is:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../libraries/rust/getting_started"},"Rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../libraries/wasm/getting_started"},"WASM"))),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("p",null,"The following applications are currently utilizing the IOTA Identity framework:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://selv.iota.org/"},"Selv app"))))}p.isMDXComponent=!0},93652:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/banner_identity_getting_started-7265e89b117ac26b806a76fcfc033dae.svg"}}]);