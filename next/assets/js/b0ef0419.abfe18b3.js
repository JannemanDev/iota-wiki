"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89203],{60680:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}s.isMDXComponent=!0},32286:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Iota.js",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,o.kt)("a",{href:t.exampleURL}," iota.js library"))))}s.isMDXComponent=!0},66575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>E,contentTitle:()=>N,default:()=>Z,frontMatter:()=>T,metadata:()=>C,toc:()=>M});var a=t(87462),o=(t(67294),t(3905)),r=t(34259),s=t(18679),i=t(69319);var c=t(60680);const l={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(i.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/09_transaction.js\n\n// In this example we will send a transaction\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n        localPow: true,\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n\n        // Configure your own mnemonic in \".env\". Since the output amount cannot be zero, the mnemonic must contain non-zero\n        // balance\n        const secretManager = {\n            mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        // We generate an address from our own mnemonic so that we send the funds to ourselves\n        const addresses = await client.generateAddresses(secretManager, {\n            range: {\n                start: 1,\n                end: 2,\n            },\n        });\n\n        // We prepare the transaction\n        // Insert the output address and amount to spend. The amount cannot be zero.\n        const blockIdAndBlock = await client.buildAndPostBlock(secretManager, {\n            output: {\n                address: addresses[0],\n                amount: '1000000',\n            },\n        });\n        console.log('Block: ', blockIdAndBlock, '\\n');\n\n        console.log(\n            `Transaction sent: ${process.env.EXPLORER_URL}/block/${blockIdAndBlock[0]}`,\n        );\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/09_transaction.ts"))}d.isMDXComponent=!0;const p={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Block:  [\n  '0x8c48950b2796c5d60e5aafd481c34ef6395d078f28b69c3001372b89142a729a',\n  {\n    protocolVersion: 2,\n    parents: [\n      '0x0b367672968b2ae56e2f8e90dc669489776a914e37f3c31f862cd61261ca58d5',\n      '0x72034b2c23c772af077dc3fba9d60eb6363efe18f1fe32292baa529867e41947',\n      '0x85f6b7ba90b46e706cba223142475a1b0da41a333ff2bc84b1031c093eebdecf',\n      '0xb365c2c7e05c9a0edc7c7a1351711cf09f92b3fdb09957b5e7cac5577b395f63'\n    ],\n    payload: { type: 6, essence: [Object], unlocks: [Array] },\n    nonce: '4611686018427398146'\n  }\n] \n\nTransaction sent: https://explorer.shimmer.network/testnet/block/0x8c48950b2796c5d60e5aafd481c34ef6395d078f28b69c3001372b89142a729a\n\n")))}u.isMDXComponent=!0;const m={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\nsecret_manager = MnemonicSecretManager(\"flame fever pig forward exact dash body idea link scrub tennis minute \" +\n                                       \"surge unaware prosper over waste kitten ceiling human knife arch situate civil\")\n\noptions = {\n    \"output\": {\n        \"address\": 'rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46',\n        \"amount\": '1000000',\n    }\n}\n\n# Create and post a block with a transaction\nblock = client.build_and_post_block(secret_manager, options)\nprint(f'{block}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 09_transaction.py"))}b.isMDXComponent=!0;const h={toc:[]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[\n  '0x1f275f75b31471ab88b12522c5d1bb8ae9294e7aa24fda5845272440d6cec151',\n  {\n    'protocolVersion': 2,\n    'parents': [\n      '0x29d95dae99c84a62a29939b0da590eea51d6eee69596ab9b8d7547b765c996a0',\n      '0x6c6a7909aa7075f69be9e1b86469dc54b37e446a31ad130ad96081a5eb1426a2',\n      '0x9898a2148e28caa76861f69cf8b044ab86f458ddea5b8378f43777410387ba3e',\n      '0xbcc5f3cab065451107b6df603e0d3d8a99a3627147cacba90ed7f260a635e4a4'\n    ],\n    'payload': {\n      'type': 6,\n      'essence': {\n        'type': 1,\n        'networkId': '8342982141227064571',\n        'inputs': [\n          {\n            'type': 0,\n            'transactionId': '0x3b6cba154609957899bbcaafafa4354b2207ab95ef27bdda92f86fbe06194c47',\n            'transactionOutputIndex': 0\n          },\n          {\n            'type': 0,\n            'transactionId': '0x3c0fc948789431e1a86b378fe3bd847f8c0634176e70986aa05a6dacba9a137a',\n            'transactionOutputIndex': 0\n          },\n          {\n            'type': 0,\n            'transactionId': '0x43380de68c5ca72f4ab2ee276c297d1ffb05330068373a9714d3a57a019a0cd3',\n            'transactionOutputIndex': 127\n          }\n        ],\n        'inputsCommitment': '0x5e3b2fa09083546c2218b3e56b1c35225ba8df0dc027ae62e70f44d3e09af919',\n        'outputs': [\n          {\n            'type': 3,\n            'amount': '1000000',\n            'unlockConditions': [\n              {\n                'type': 0,\n                'address': {\n                  'type': 0,\n                  'pubKeyHash': '0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                }\n              }\n            ]\n          },\n          {\n            'type': 3,\n            'amount': '97335202',\n            'unlockConditions': [\n              {\n                'type': 0,\n                'address': {\n                  'type': 0,\n                  'pubKeyHash': '0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                }\n              }\n            ]\n          }\n        ]\n      },\n      'unlocks': [\n        {\n          'type': 0,\n          'signature': {\n            'type': 0,\n            'publicKey': '0xe62838fda7e8b77bf80e49967f0f089ae2a7230547d5231649732952f6336fae',\n            'signature': '0x9bacfc3064e458994e19253eac4b1d299d0b1dc27ea7910228a6b8fe77022ed7a9296541ad9c159e688a9b7943eb5494d433e32eb56c7afbf14282a12a927d06'\n          }\n        },\n        {\n          'type': 1,\n          'reference': 0\n        },\n        {\n          'type': 1,\n          'reference': 0\n        }\n      ]\n    },\n    'nonce': '6148914691236584594'\n  }\n]\n")))}f.isMDXComponent=!0;const k={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example transaction --release\n\nuse iota_client::{\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\n\n/// In this example we will send a transaction\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    // Configure your own mnemonic in ".env". Since the output amount cannot be zero, the mnemonic must contain non-zero\n    // balance\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        // Insert the output address and amount to spent. The amount cannot be zero.\n        .with_output(\n            // We generate an address from our own mnemonic so that we send the funds to ourselves\n            &client.get_addresses(&secret_manager).with_range(1..2).finish().await?[0],\n            1_000_000,\n        )?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction sent: {}/block/{}",\n        std::env::var("EXPLORER_URL").unwrap(),\n        block.id()\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example transaction --release"))}y.isMDXComponent=!0;const g={toc:[]};function x(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction sent: https://explorer.shimmer.network/testnet/block/0x0e4c43eb9402aad8af70bbabfc4eb43ca4b603feb77d7bbcec43ccd06d9389bb\n")))}x.isMDXComponent=!0;var w=t(32286);const v={toc:[]};function _(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Wallet.rs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Though it is possible to send transactions with ",(0,o.kt)("inlineCode",{parentName:"p"},"iota.rs"),", we strongly recommend that you use the official\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/develop/welcome"},(0,o.kt)("inlineCode",{parentName:"a"},"wallet.rs"))," library together with the\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},(0,o.kt)("inlineCode",{parentName:"a"},"stronghold.rs"))," enclave for value-based transfers. This combination\nincorporates the best security practices while dealing with seeds, related addresses, and UTXO.")))}_.isMDXComponent=!0;const T={title:"Send a Transaction",description:"You can send a transaction by attaching an output with an address and amount to a block.",keywords:["how to","block","post transaction","build transaction","outputs","java","nodejs","python","rust"]},N=void 0,C={unversionedId:"how_tos/prepare_sign_transaction",id:"how_tos/prepare_sign_transaction",title:"Send a Transaction",description:"You can send a transaction by attaching an output with an address and amount to a block.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/10_prepare_sign_transaction.mdx",sourceDirName:"how_tos",slug:"/how_tos/prepare_sign_transaction",permalink:"/next/iota.rs/how_tos/prepare_sign_transaction",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/10_prepare_sign_transaction.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Send a Transaction",description:"You can send a transaction by attaching an output with an address and amount to a block.",keywords:["how to","block","post transaction","build transaction","outputs","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Get a Block",permalink:"/next/iota.rs/how_tos/get_block"},next:{title:"Build an NFT Output",permalink:"/next/iota.rs/how_tos/build_nft_output"}},E={},M=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],I={toc:M};function Z(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(_,{mdxType:"WalletRecommendation"}),(0,o.kt)("p",null,"The following code example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,o.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_addresses"},"Generate a public address"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/create_block"},"Build")," and ",(0,o.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/post_block"},"post a block")," with an output address and amount to send."),(0,o.kt)("li",{parentName:"ol"},"Log the transaction.")),(0,o.kt)(w.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/transaction",mdxType:"IotaJs"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"RustCode"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsCode"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonCode"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(x,{mdxType:"RustOutput"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonOutput"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"JavaOutput"}))))}Z.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),o=t(86010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),r=t(86010),s=t(51048),i=t(33609),c=t(1943),l=t(72957);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var n;const{lazy:t,block:s,defaultValue:u,values:m,groupId:b,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.l)(k,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:u??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,c.U)(),[v,_]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=b){const e=x[b];null!=e&&e!==v&&k.some((n=>n.value===e))&&_(e)}const C=e=>{const n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==v&&(N(n),_(a),null!=b&&w(b,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},h)},k.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>T.push(e),onKeyDown:E,onFocus:C,onClick:C},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,s.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}}}]);