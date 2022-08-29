"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89140],{2418:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return f}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=o(69319),s=o(50504),d=["components"],p={title:"How To Get Node Info"},l=void 0,u={unversionedId:"libraries/python/how_to/get_node_info",id:"libraries/python/how_to/get_node_info",title:"How To Get Node Info",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/0_get_node_info.mdx",sourceDirName:"libraries/python/how_to",slug:"/libraries/python/how_to/get_node_info",permalink:"/iota.rs/develop/libraries/python/how_to/get_node_info",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/0_get_node_info.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How To Get Node Info"},sidebar:"docs",previous:{title:"Getting Started with IOTA Client Python Binding",permalink:"/iota.rs/develop/libraries/python/getting_started"},next:{title:"How To Build An Output",permalink:"/iota.rs/develop/libraries/python/how_to/build_output"}},c={},f=[],m={toc:f};function h(t){var e=t.components,o=(0,i.Z)(t,d);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Get the node info\nnode_info = client.get_info()\nprint(f'{node_info}')\n"),(0,r.kt)(s.ZP,{mdxType:"MoreExamples"}))}h.isMDXComponent=!0},50504:function(t,e,o){o.d(e,{ZP:function(){return d}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],s={toc:[]};function d(t){var e=t.components,o=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/native/examples"},"examples")," folder."))}d.isMDXComponent=!0}}]);