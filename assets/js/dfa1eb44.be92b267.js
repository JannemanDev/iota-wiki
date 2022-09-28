"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80484],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(i),y=n,m=u["".concat(s,".").concat(y)]||u[y]||c[y]||r;return i?a.createElement(m,o(o({ref:t},p),{},{components:i})):a.createElement(m,o({ref:t},p))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},29746:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={image:"/img/integration-services/use-case-1.png",description:"IOTA Identity provides a digital identity anchored on the Tangle and verifiable credentials (VC) that are attachable to said identity.",keywords:["explanation","IOTA Identity basics","validate university degree","validate patient data"]},o="IOTA Identity",l={unversionedId:"explanations/identity",id:"explanations/identity",title:"IOTA Identity",description:"IOTA Identity provides a digital identity anchored on the Tangle and verifiable credentials (VC) that are attachable to said identity.",source:"@site/iota/external/integration-services/production/documentation/docs/explanations/identity.md",sourceDirName:"explanations",slug:"/explanations/identity",permalink:"/integration-services/explanations/identity",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/explanations/identity.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/use-case-1.png",description:"IOTA Identity provides a digital identity anchored on the Tangle and verifiable credentials (VC) that are attachable to said identity.",keywords:["explanation","IOTA Identity basics","validate university degree","validate patient data"]},sidebar:"docs",previous:{title:"Local Setup",permalink:"/integration-services/getting_started/installation/docker_compose_setup"},next:{title:"IOTA Streams",permalink:"/integration-services/explanations/streams"}},s={},d=[{value:"Wiki",id:"wiki",level:2},{value:"Blogposts",id:"blogposts",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iota-identity"},"IOTA Identity"),(0,n.kt)("p",null,"IOTA Identity provides a digital identity anchored on the Tangle and verifiable credentials (VC)\nthat are attachable to said identity. For example, a university student could use this to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/tutorials/validate_university_degree"},"validate his degree"),", or it could be applied in combination with ",(0,n.kt)("a",{parentName:"p",href:"/integration-services/explanations/streams"},"IOTA Streams")," to validate a patient's prescriptions and medical data as illustrated bellow."),(0,n.kt)("p",null,"[",(0,n.kt)("img",{alt:"Validate patient data",src:i(17802).Z,title:"Validate patient data",width:"2100",height:"1148"})),(0,n.kt)("p",null,"The concepts of decentralized identities will not be explained in depth in this wiki. You can find more information on IOTA Identity in the following resources:"),(0,n.kt)("h2",{id:"wiki"},"Wiki"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/identity.rs/decentralized_identifiers/overview"},"Decentralized Identifier")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/identity.rs/verifiable_credentials/overview"},"Verifiable Credentials"),"  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/identity.rs/did_communications/overview"},"DID Communication"))),(0,n.kt)("h2",{id:"blogposts"},"Blogposts"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://blog.iota.org/the-iota-identity-actor-explained/"},"Explaining the IOTA Identity Actor")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://blog.iota.org/releasing-iota-identity-alpha-a-standard-framework-for-digital-identity-cebabd108b4f/"},"Releasing IOTA Identity Alpha: A Standard Framework for Digital Identity")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://blog.iota.org/iota-identity-beta-release/"},"IOTA Identity: Beta Release"))))}c.isMDXComponent=!0},17802:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/use-case-1-0ce9345200d67b98fa30d0e22a956f52.png"}}]);