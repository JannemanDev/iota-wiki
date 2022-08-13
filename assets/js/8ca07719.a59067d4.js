"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12613],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56577:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},d="Interface: IGenerateAddressMetadata",c={unversionedId:"libraries/nodejs/references/interfaces/IGenerateAddressMetadata",id:"libraries/nodejs/references/interfaces/IGenerateAddressMetadata",title:"Interface: IGenerateAddressMetadata",description:"Metadata provided to Generate Address",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/IGenerateAddressMetadata.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/IGenerateAddressMetadata",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressMetadata",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/IGenerateAddressMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: IFoundryOutputBuilderOptions",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IFoundryOutputBuilderOptions"},next:{title:"Interface: IGenerateAddressesOptions",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressesOptions"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"syncing",id:"syncing",level:3},{value:"network",id:"network",level:3}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-igenerateaddressmetadata"},"Interface: IGenerateAddressMetadata"),(0,i.kt)("p",null,"Metadata provided to Generate Address"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressMetadata#syncing"},"syncing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressMetadata#network"},"network"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"syncing"},"syncing"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"syncing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Indicates that the address is being generated as part of the account syncing process.\nThis means that the account might not be saved.\nIf it is false, the prompt will be displayed on ledger devices."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"network"},"network"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"network"),": ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/develop/libraries/nodejs/references/enums/Network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network"))),(0,i.kt)("p",null,"The network which is used so the correct BIP32 path is used for the ledger. Debug mode starts with 44'/1' and\nin mainnet-mode it's 44'/4218'"))}f.isMDXComponent=!0}}]);