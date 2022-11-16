"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39180],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,m=c["".concat(d,".").concat(u)]||c[u]||h[u]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const o={title:"IOTA DID Method Specification",sidebar_label:"DID Method",description:"How IOTA Identity implements the Decentralized Identifiers Standard on the IOTA Tangle.",image:"/img/Identity_icon.png",keywords:["DID","specs","specifications","Decentralized Identifiers","Tangle","format"]},r="IOTA DID Method Specification",l={unversionedId:"specs/did/iota_did_method_spec",id:"specs/did/iota_did_method_spec",title:"IOTA DID Method Specification",description:"How IOTA Identity implements the Decentralized Identifiers Standard on the IOTA Tangle.",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/specs/did/iota_did_method_spec.md",sourceDirName:"specs/did",slug:"/specs/did/iota_did_method_spec",permalink:"/next/identity.rs/specs/did/iota_did_method_spec",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/specs/did/iota_did_method_spec.md",tags:[],version:"current",frontMatter:{title:"IOTA DID Method Specification",sidebar_label:"DID Method",description:"How IOTA Identity implements the Decentralized Identifiers Standard on the IOTA Tangle.",image:"/img/Identity_icon.png",keywords:["DID","specs","specifications","Decentralized Identifiers","Tangle","format"]},sidebar:"docs",previous:{title:"Overview",permalink:"/next/identity.rs/specs/did/overview"},next:{title:"Overview",permalink:"/next/identity.rs/specs/didcomm/overview"}},d={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Data Types &amp; Subschema Notation",id:"data-types--subschema-notation",level:2},{value:"Introduction",id:"introduction",level:2},{value:"UTXO Ledger",id:"utxo-ledger",level:3},{value:"Alias Output",id:"alias-output",level:3},{value:"Ledger and DID",id:"ledger-and-did",level:3},{value:"DID Method Name",id:"did-method-name",level:2},{value:"DID Format",id:"did-format",level:2},{value:"IOTA-Network",id:"iota-network",level:3},{value:"IOTA-Tag",id:"iota-tag",level:3},{value:"Anatomy of the State Metadata",id:"anatomy-of-the-state-metadata",level:3},{value:"Payload",id:"payload",level:4},{value:"Controllers",id:"controllers",level:2},{value:"CRUD Operations",id:"crud-operations",level:2},{value:"Create",id:"create",level:3},{value:"Read",id:"read",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"Deactivate",id:"deactivate",level:4},{value:"Destroy",id:"destroy",level:4},{value:"IOTA Identity standards",id:"iota-identity-standards",level:2},{value:"Standardized Verification Method Types",id:"standardized-verification-method-types",level:3},{value:"Revocation",id:"revocation",level:3},{value:"Standardized Services",id:"standardized-services",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Private Key Management",id:"private-key-management",level:3},{value:"Privacy Considerations",id:"privacy-considerations",level:2},{value:"Personal Identifiable Information",id:"personal-identifiable-information",level:3},{value:"Correlation Risks",id:"correlation-risks",level:3}],p={toc:s};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-did-method-specification"},"IOTA DID Method Specification"),(0,i.kt)("p",null,"Draft 11 August 2022"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"The IOTA DID Method Specification describes a method of implementing the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Decentralized Identifiers")," (DID) standard on ",(0,i.kt)("a",{parentName:"p",href:"https://iota.org"},"IOTA"),", a Distributed Ledger Technology (DLT). It conforms to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DID specification v1.0")," and describes how to perform Create, Read, Update and Delete (CRUD) operations for IOTA DID Documents using unspent transaction outputs (",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/IOTA-2.0-Research-Specifications/5.1UTXO"},"UTXO"),") on the IOTA and ",(0,i.kt)("a",{parentName:"p",href:"https://shimmer.network/"},"Shimmer")," networks, introduced with the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.shimmer.network/stardust-upgrade-in-a-nutshell/"},"Stardust upgrade"),"."),(0,i.kt)("h2",{id:"data-types--subschema-notation"},"Data Types & Subschema Notation"),(0,i.kt)("p",null,"Data types and subschemas used throughout this TIP are defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/pull/41"},"draft TIP-21"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("h3",{id:"utxo-ledger"},"UTXO Ledger"),(0,i.kt)("p",null,"The unspent transaction output (",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/IOTA-2.0-Research-Specifications/5.1UTXO"},"UTXO"),") model defines a ledger state where outputs are created by a transaction consuming outputs of previous transactions as inputs. IOTA and Shimmer have several output types, the relevant ones for the IOTA DID Method are: Basic Outputs for value transactions, and Alias Outputs for storage of DID Documents."),(0,i.kt)("p",null,"All outputs must hold a minimum amount of coins to be stored on the ledger. For output types that can hold arbitrary data, for instance the Alias Output, the amount of coins held by the output must cover the byte cost of the data stored. This helps control the ledger size from growing uncontrollably while guaranteeing that the data is not pruned from the nodes, which is important for resolving DID Documents. This deposit is fully refundable and can be reclaimed when the output is destroyed."),(0,i.kt)("p",null,"Data saved in an output and covered by the storage deposit will be stored in ",(0,i.kt)("em",{parentName:"p"},"all")," nodes on the network and can be retrieved from any node. This provides strong guarantees for any data stored in the ledger."),(0,i.kt)("h3",{id:"alias-output"},"Alias Output"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#alias-output"},"Alias Output")," is a specific implementation of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#chain-constraint-in-utxo"},"UTXO state machine"),". Some of its relevant properties are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Amount"),": the amount of IOTA coins held by the output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alias ID"),": 32 byte array, a unique identifier of the alias, which is the BLAKE2b-256 hash\nof the Output ID that created it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State Index"),": A counter that must increase by 1 every time the alias is state transitioned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State Metadata"),": Dynamically sized array of arbitrary bytes with a length up to ",(0,i.kt)("inlineCode",{parentName:"li"},"Max Metadata Length"),", as defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0022/tip-0022.md"},"TIP-22"),". Can only be changed by the state controller."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unlock Conditions"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"State Controller Address Unlock Condition"),(0,i.kt)("li",{parentName:"ul"},"Governor Address Unlock Condition")))),(0,i.kt)("p",null,"Consuming an Alias Output in a transaction means that the alias is transitioned into the next state. The current state is defined as the consumed Alias Output, while the next state is defined as the ",(0,i.kt)("strong",{parentName:"p"},"Alias Output with the same explicit ",(0,i.kt)("inlineCode",{parentName:"strong"},"Alias ID")," on the output side"),". There are two types of transitions: ",(0,i.kt)("inlineCode",{parentName:"p"},"state transition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"governance transition"),"."),(0,i.kt)("p",null,"All outputs include an ",(0,i.kt)("inlineCode",{parentName:"p"},"Unlock Conditions")," property. This feature defines how the output can be unlocked and spent. The Alias Output supports two types of unlock conditions that can be set: the state controller and governor. Each of these can be either an Ed25519 Address, Alias Address or an NFT Address. An Alias Output can have at most one of each unlock condition."),(0,i.kt)("p",null,"The state controller can unlock a state transition. It is identified by an incremented ",(0,i.kt)("inlineCode",{parentName:"p"},"State Index")," and can change the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"Amount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"State Index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"State Metadata")," among other properties."),(0,i.kt)("p",null,"The governor, on the other hand, can unlock a governance transition indicated by an unchanged ",(0,i.kt)("inlineCode",{parentName:"p"},"State Index"),". A governance transition can change the addresses of the state controller and governor. It also allows destroying the Alias Output."),(0,i.kt)("h3",{id:"ledger-and-did"},"Ledger and DID"),(0,i.kt)("p",null,"Storing DID Documents in the ledger state means they inherently benefit from the guarantees the ledger provides."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Conflicts among nodes are sorted out and dealt with by the ledger."),(0,i.kt)("li",{parentName:"ol"},"Replay attacks are not possible since transactions need to be confirmed by the ledger."),(0,i.kt)("li",{parentName:"ol"},"The Alias Output includes the ",(0,i.kt)("inlineCode",{parentName:"li"},"State Index")," which provides linear history for updates of a DID Document.")),(0,i.kt)("h2",{id:"did-method-name"},"DID Method Name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"method-name")," to identify this DID method is: ",(0,i.kt)("inlineCode",{parentName:"p"},"iota"),"."),(0,i.kt)("p",null,"A DID that uses this method MUST begin with the following prefix: ",(0,i.kt)("inlineCode",{parentName:"p"},"did:iota"),". Following the generic DID specification, this string MUST be lowercase."),(0,i.kt)("h2",{id:"did-format"},"DID Format"),(0,i.kt)("p",null,"The DIDs that follow this method have the following ABNF syntax. It uses the syntax in ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc5234"},"RFC5234")," and the corresponding definition for ",(0,i.kt)("inlineCode",{parentName:"p"},"digit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'iota-did = "did:iota:" iota-specific-idstring\niota-specific-idstring = [ iota-network ":" ] iota-tag \niota-network = 0*6lowercase-alpha\niota-tag = "0x" 64lowercase-hex\nlowercase-alpha = %x61-7A ; corresponds to the character range from "a" to "z".\nlowercase-hex = digit / "a" / "b" / "c" / "d" / "e" / "f"\n')),(0,i.kt)("p",null,'It starts with the string "did:iota:", followed by an optional network name (0 to 6 lowercase alpha characters) and a colon, then the tag.\nThe tag starts with "0x" followed by a hex-encoded ',(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID")," with lower case a-f."),(0,i.kt)("h3",{id:"iota-network"},"IOTA-Network"),(0,i.kt)("p",null,"The iota-network is an identifier of the network where the DID is stored. This network must be an IOTA Ledger, but can either be a public or private network, permissionless or permissioned."),(0,i.kt)("p",null,"The following values are reserved and cannot reference other networks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"iota")," references the main network which refers to the ledger known to host the IOTA cryptocurrency."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"atoi")," references the development network of IOTA."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"smr"),"  references the shimmer network."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"rms"),"  references the development network of Shimmer.")),(0,i.kt)("p",null,"When no IOTA network is specified, it is assumed that the DID is located on the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota")," network. This means that the following DIDs will resolve to the same DID Document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"did:iota:iota:0xe4edef97da1257e83cbeb49159cfdd2da6ac971ac447f233f8439cf29376ebfe\ndid:iota:0xe4edef97da1257e83cbeb49159cfdd2da6ac971ac447f233f8439cf29376ebfe\n")),(0,i.kt)("h3",{id:"iota-tag"},"IOTA-Tag"),(0,i.kt)("p",null,"An IOTA-tag is a hex-encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID")," itself is a unique identifier of the alias, which is the BLAKE2b-256 hash of the Output ID that created it.\nThis tag identifies the Alias Output where the DID Document is stored, and it will not be known before the generation of the DID since it will be assigned when the Alias Output is created."),(0,i.kt)("h3",{id:"anatomy-of-the-state-metadata"},"Anatomy of the State Metadata"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"State Metadata")," of the Alias Output must be a byte packed payload with header fields as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Document Type"),(0,i.kt)("td",{parentName:"tr",align:null},"ByteArray","[3]"),(0,i.kt)("td",{parentName:"tr",align:null},"Set to value ",(0,i.kt)("strong",{parentName:"td"},"DID")," to denote a DID Document.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Version"),(0,i.kt)("td",{parentName:"tr",align:null},"uint8"),(0,i.kt)("td",{parentName:"tr",align:null},"Set value ",(0,i.kt)("strong",{parentName:"td"},"1")," to denote the version number of this method")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Encoding"),(0,i.kt)("td",{parentName:"tr",align:null},"uint8"),(0,i.kt)("td",{parentName:"tr",align:null},"Set to value to ",(0,i.kt)("strong",{parentName:"td"},"0")," to denote JSON encoding without compression.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Payload"),(0,i.kt)("td",{parentName:"tr",align:null},"(uint16)ByteArray"),(0,i.kt)("td",{parentName:"tr",align:null},"A DID Document and its metadata, where every occurrence of the DID in the document is replaced by ",(0,i.kt)("inlineCode",{parentName:"td"},"did:0:0"),". It must be encoded according to ",(0,i.kt)("inlineCode",{parentName:"td"},"Encoding"),".")))),(0,i.kt)("p",null,"The types are defined in ",(0,i.kt)("a",{parentName:"p",href:"#data-types--subschema-notation"},"TIP-21"),"."),(0,i.kt)("h4",{id:"payload"},"Payload"),(0,i.kt)("p",null,"The payload must contain the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata"),": contains metadata about the DID Document. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"created")," to indicate the time of\ncreation, and ",(0,i.kt)("inlineCode",{parentName:"li"},"updated")," to indicate the time of the last update to the document. It can also include other properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document"),": which contains the DID Document. In the example below, the document only contains one verification method. The ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"controller")," is specified by ",(0,i.kt)("inlineCode",{parentName:"li"},"did:0:0")," which references the DID of the document itself, since the DID is unknown at the time of publishing. It also deduplicates the DID of the document to reduce the size of the state metadata, in turn reducing the required storage deposit.")),(0,i.kt)("p",null,"Example State Metadata Document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Json"},'{\n   "document":{\n      "id":"did:0:0",\n      "verificationMethod":[\n         {\n            "id":"did:0:0#key-1",\n            "controller":"did:0:0",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z6BNtMbKY78XDVuqfh4u15bZkByu94XNVr9RpqEGCNncn"\n         }\n      ]\n   },\n   "metadata":{\n      "created":"2022-08-02T21:39:48Z",\n      "updated":"2022-08-02T21:39:48Z"\n   }\n}\n')),(0,i.kt)("h2",{id:"controllers"},"Controllers"),(0,i.kt)("p",null,"A state controller can directly update the DID Document and the amount of coins held by the Alias Output, but it cannot destroy the output. A governor, on the other hand, can indirectly update the DID Document by updating the state controller. The governor can also destroy the output by performing a governance transition without producing an Alias Output with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID"),"."),(0,i.kt)("p",null,"As of now, only one state controller and one governor can be set for an Alias Output. Support for multiple controllers may be possible depending on future updates of the protocol."),(0,i.kt)("h2",{id:"crud-operations"},"CRUD Operations"),(0,i.kt)("p",null,"Create, Read, Update and Delete (CRUD) operations that change the DID Documents are done through state or governance transitions of the Alias Output."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"These operations require fund transfer to cover byte cost. Transactions must be carefully done in order to avoid fund loss.")," For example, the amount of funds in the inputs should equal these in the outputs. Additionally, private keys of controllers must be stored securely."),(0,i.kt)("h3",{id:"create"},"Create"),(0,i.kt)("p",null,"In order to create a simple self controlled DID two things are required:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Ed25519 Address for which the private key is available, or control over an Alias or NFT Output."),(0,i.kt)("li",{parentName:"ol"},"A Basic, Alias or NFT Output with enough coins to cover the byte cost.")),(0,i.kt)("p",null,"Creation steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the content of the DID Document like verification methods, services, etc."),(0,i.kt)("li",{parentName:"ol"},"Create the payload and the headers as described in the ",(0,i.kt)("a",{parentName:"li",href:"#anatomy-of-the-state-metadata"},"Anatomy of the State Metadata"),"."),(0,i.kt)("li",{parentName:"ol"},"Create a new Alias Output with the payload and the headers stored in its ",(0,i.kt)("inlineCode",{parentName:"li"},"State Metadata"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the state controller and the governor unlock conditions to the addresses that should control state and governance transitions, respectively."),(0,i.kt)("li",{parentName:"ol"},"Set enough coins in the output to cover the byte cost."),(0,i.kt)("li",{parentName:"ol"},"Publish a new transaction with an existing output that contains at least the storage deposit from step 6 as input, and the newly created Alias Output as output. ")),(0,i.kt)("p",null,"Once the transaction is confirmed, the DID is published and can be formatted by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID")," as the tag in ",(0,i.kt)("a",{parentName:"p",href:"#did-format"},"DID Format"),"."),(0,i.kt)("h3",{id:"read"},"Read"),(0,i.kt)("p",null,"The following steps can be used to read the latest DID Document associated with a DID."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Obtain the ",(0,i.kt)("inlineCode",{parentName:"li"},"Alias ID")," from the DID by extracting the ",(0,i.kt)("inlineCode",{parentName:"li"},"iota-tag")," from the DID, see ",(0,i.kt)("a",{parentName:"li",href:"#did-format"},"DID Format"),"."),(0,i.kt)("li",{parentName:"ol"},"Obtain the network of the DID by extracting the ",(0,i.kt)("inlineCode",{parentName:"li"},"iota-network")," from the DID, see ",(0,i.kt)("a",{parentName:"li",href:"#did-format"},"DID Format"),"."),(0,i.kt)("li",{parentName:"ol"},"Query the Alias Output corresponding to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Alias ID")," using a node running the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-indexer"},"inx indexer"),". Nodes usually include this indexer by default."),(0,i.kt)("li",{parentName:"ol"},"Assert that the extracted network matches the one returned from the node. Return an error otherwise."),(0,i.kt)("li",{parentName:"ol"},"Assert that the ",(0,i.kt)("inlineCode",{parentName:"li"},"Alias ID")," of the returned output matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"Alias ID")," extracted from the DID. Return an error otherwise."),(0,i.kt)("li",{parentName:"ol"},"Retrieve the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"State Metadata")," field from the returned output."),(0,i.kt)("li",{parentName:"ol"},"Validate the contents match the structure described in ",(0,i.kt)("a",{parentName:"li",href:"#anatomy-of-the-state-metadata"},"Anatomy of the State Metadata"),". Return an error otherwise."),(0,i.kt)("li",{parentName:"ol"},"Decode the DID Document from the ",(0,i.kt)("inlineCode",{parentName:"li"},"State Metadata"),"."),(0,i.kt)("li",{parentName:"ol"},"Replace the placeholder ",(0,i.kt)("inlineCode",{parentName:"li"},"did:0:0")," with the DID given as input.")),(0,i.kt)("h3",{id:"update"},"Update"),(0,i.kt)("p",null,"Updating a DID Document can be achieved by the state controller performing a state transition of the Alias Output with the updated content:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a copy of the Alias Output with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Alias ID")," set explicitly."),(0,i.kt)("li",{parentName:"ol"},"Pack the updated DID Document, as described in the ",(0,i.kt)("a",{parentName:"li",href:"#anatomy-of-the-state-metadata"},"Anatomy of the State Metadata"),", into the ",(0,i.kt)("inlineCode",{parentName:"li"},"State Metadata")," of the output."),(0,i.kt)("li",{parentName:"ol"},"Increment the ",(0,i.kt)("inlineCode",{parentName:"li"},"State Index"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," of coins sufficient to cover the byte cost."),(0,i.kt)("li",{parentName:"ol"},"Publish a new transaction that includes the current Alias Output as input (along with any required Basic Outputs to consume to cover the ",(0,i.kt)("inlineCode",{parentName:"li"},"amount"),", if increased) and the updated one as output. If the state controller unlock of the Alias Output references other Alias or NFT Outputs, those outputs must be unlocked in the same transaction, recursively.")),(0,i.kt)("h3",{id:"delete"},"Delete"),(0,i.kt)("h4",{id:"deactivate"},"Deactivate"),(0,i.kt)("p",null,"Temporarily deactivating a DID can be done by deleting the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"State Meadata")," in the Alias Output, setting it to an empty byte array, and publishing an ",(0,i.kt)("a",{parentName:"p",href:"#update"},"update"),"."),(0,i.kt)("p",null,"Another option is to ",(0,i.kt)("a",{parentName:"p",href:"#update"},"update")," the DID Document and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"deactivated")," property in its ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," to true. In both cases, the deactivated DID Document will be marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"deactivated")," when resolved."),(0,i.kt)("h4",{id:"destroy"},"Destroy"),(0,i.kt)("p",null,"In order to permanently destroy a DID, a new transaction can be published by the governor that consumes the Alias Output without having a corresponding Alias Output on the output side with the same explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID"),". This results in destroying the Alias Output and the DID."),(0,i.kt)("p",null,"Note that this operation irreversibly and irrecoverably deletes the DID. This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias ID")," from which an IOTA DID is derived (see ",(0,i.kt)("a",{parentName:"p",href:"#iota-tag"},"IOTA-Tag"),") is generated from the hash of the input transaction that created it, which cannot generally be replicated."),(0,i.kt)("h2",{id:"iota-identity-standards"},"IOTA Identity standards"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"did:iota")," method is implemented in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity framework"),". This framework supports a number of operations that are standardized, some are standardized across the SSI community, and some are the invention of the IOTA Foundation."),(0,i.kt)("h3",{id:"standardized-verification-method-types"},"Standardized Verification Method Types"),(0,i.kt)("p",null,"The IOTA Identity framework currently supports two Verification Method Types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519VerificationKey2018"),": can be used to sign DID Document updates, Verifiable Credentials, Verifiable Presentations, and arbitrary data with a ",(0,i.kt)("inlineCode",{parentName:"li"},"JcsEd25519Signature2020"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X25519KeyAgreementKey2019"),": can be used to perform ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie-Hellman key exchange")," operations to derive a shared secret between two parties.")),(0,i.kt)("h3",{id:"revocation"},"Revocation"),(0,i.kt)("p",null,"Revocation of Verifiable Credentials and signatures can be achieved using the ",(0,i.kt)("a",{parentName:"p",href:"/next/identity.rs/specs/revocation_bitmap_2022"},"Revocation Bitmap 2022")," where issuers store a bitmap of indices in the DID Document. These indices correspond to verifiable credentials they have issued. If the binary value of the index in the bitmap is 1 (one), the verifiable credential is revoked, if it is 0 (zero) it is not revoked."),(0,i.kt)("h3",{id:"standardized-services"},"Standardized Services"),(0,i.kt)("p",null,"The IOTA Identity framework also standardized certain ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," that are embedded in the DID Document. It is RECOMMENDED to implement these when implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"did:iota")," method."),(0,i.kt)("p",null,"Currently standardized ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/identity.rs/specs/revocation_bitmap_2022#revocation-bitmap-service"},"Revocation Bitmap Service"))),(0,i.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"did:iota")," method is implemented on the ",(0,i.kt)("a",{parentName:"p",href:"https://iota.org"},"IOTA"),", a public permissionless and feeless Distributed Ledger Technology (DLT), making it resistant against almost all censorship attack vectors. Up until the ",(0,i.kt)("inlineCode",{parentName:"p"},"Coordicide")," update for the IOTA network, a reliability on the coordinator exists for resolving ordering conflicts. This has a minor censorship possibility, that, in the wrost case, can prevent transactions from getting confirmed."),(0,i.kt)("h3",{id:"private-key-management"},"Private Key Management"),(0,i.kt)("p",null,"All private keys or seeds used for the ",(0,i.kt)("inlineCode",{parentName:"p"},"did:iota")," method should be equally well protected by the users. Private keys of the state controller and the governor are especially important as they control how keys are added or removed, providing full control over the identity. The IOTA Identity framework utilizes the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs"},"Stronghold project"),", a secure software implementation isolating digital secrets from exposure to hacks or leaks. Developers may choose to add other ways to manage the private keys in a different manner."),(0,i.kt)("h2",{id:"privacy-considerations"},"Privacy Considerations"),(0,i.kt)("h3",{id:"personal-identifiable-information"},"Personal Identifiable Information"),(0,i.kt)("p",null,"The public IOTA and Shimmer networks are immutable. This means that once something is included, it can never be completely removed. For example, destroying an Alias Output will remove it from the ledger state, but it can still be stored in permanodes or by any party that records historical ledger states."),(0,i.kt)("p",null,"That directly conflicts with certain privacy laws such as GDPR, which have a 'right-to-be-forgotten' for Personal Identifiable Information (PII). As such, users should NEVER upload any PII, including inside DID Documents. While Verifiable Credentials can be made public, this should only be utilized by Identity for Organisations and Identity for Things."),(0,i.kt)("h3",{id:"correlation-risks"},"Correlation Risks"),(0,i.kt)("p",null,"As with any DID method, identities can be linked if they are used too often and their usage somehow becomes public. See ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#did-correlation-risks"},"DID Correlation Risks"),". Additionally, a DID can be correlated with funds if the Alias Output used to store the DID Document or any of its controllers is used for holding, transferring or controlling coins or NFTs."))}h.isMDXComponent=!0}}]);