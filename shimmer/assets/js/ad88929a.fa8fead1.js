"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74960],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||n;return o?r.createElement(m,s(s({ref:t},l),{},{components:o})):r.createElement(m,s({ref:t},l))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<n;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62985:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var r=o(87462),a=(o(67294),o(3905));const n={description:"How to back up your account, restore an account from a backup, export a user's Stronghold, and rekey Stronghold.",image:"/img/logo/preview.png",keywords:["stronghold","checklist","backup","DMZ","account","restore","export","rekey","how to"]},s="Backup and Security",c={unversionedId:"how_tos/backup_security",id:"how_tos/backup_security",title:"Backup and Security",description:"How to back up your account, restore an account from a backup, export a user's Stronghold, and rekey Stronghold.",source:"@site/shimmer/external/introduction-docs/docs/how_tos/backup_security.md",sourceDirName:"how_tos",slug:"/how_tos/backup_security",permalink:"/shimmer/introduction/how_tos/backup_security",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/how_tos/backup_security.md",tags:[],version:"current",frontMatter:{description:"How to back up your account, restore an account from a backup, export a user's Stronghold, and rekey Stronghold.",image:"/img/logo/preview.png",keywords:["stronghold","checklist","backup","DMZ","account","restore","export","rekey","how to"]},sidebar:"mySidebar",previous:{title:"IOTA Stardust Guides",permalink:"/shimmer/introduction/how_tos/overview"},next:{title:"Firefly Shimmer",permalink:"/shimmer/introduction/how_tos/verify_download"}},i={},u=[{value:"Security Checklist",id:"security-checklist",level:2},{value:"How to Backup Your Account",id:"how-to-backup-your-account",level:2},{value:"How to Restore From a Backup",id:"how-to-restore-from-a-backup",level:2},{value:"How to Export a User&#39;s Stronghold",id:"how-to-export-a-users-stronghold",level:2},{value:"How to Rekey a Stronghold/Password Rotation",id:"how-to-rekey-a-strongholdpassword-rotation",level:2}],l={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup-and-security"},"Backup and Security"),(0,a.kt)("h2",{id:"security-checklist"},"Security Checklist"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I use Stronghold."),(0,a.kt)("li",{parentName:"ul"},"I use a strong password (32 character length, Shannon Entropy ~ 4.0) for encrypting the stronghold."),(0,a.kt)("li",{parentName:"ul"},"I rotate the stronghold password on a regular basis."),(0,a.kt)("li",{parentName:"ul"},"I create a daily backup of the stronghold.snapshot file."),(0,a.kt)("li",{parentName:"ul"},"I keep a secure history of passwords used for recovery."),(0,a.kt)("li",{parentName:"ul"},"I use a secure password management service that integrates with the server."),(0,a.kt)("li",{parentName:"ul"},"I use a linux based server (best memory security)."),(0,a.kt)("li",{parentName:"ul"},"I have isolated my server behind a DMZ."),(0,a.kt)("li",{parentName:"ul"},"Don't use SQLite."),(0,a.kt)("li",{parentName:"ul"},"Don't store passwords and backups on the same device.")),(0,a.kt)("h2",{id:"how-to-backup-your-account"},"How to Backup Your Account"),(0,a.kt)("p",null,"You can use a copy of the ",(0,a.kt)("inlineCode",{parentName:"p"},"stronghold.snapshot")," file as a backup. You can implement a  ",(0,a.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/crontab"},(0,a.kt)("em",{parentName:"a"},"cronjob")),", ",(0,a.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/rsync"},(0,a.kt)("em",{parentName:"a"},"rsync"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/scp"},(0,a.kt)("em",{parentName:"a"},"scp"))," with a date-time suffix to periodically back up your account."),(0,a.kt)("h2",{id:"how-to-restore-from-a-backup"},"How to Restore From a Backup"),(0,a.kt)("p",null,"Place a snapshot file in the directory that wallet.rs expects."),(0,a.kt)("h2",{id:"how-to-export-a-users-stronghold"},"How to Export a User's Stronghold"),(0,a.kt)("p",null,"You can create a new Stronghold snapshot on the fly to allow a user to leave your service and retain their key."),(0,a.kt)("h2",{id:"how-to-rekey-a-strongholdpassword-rotation"},"How to Rekey a Stronghold/Password Rotation"),(0,a.kt)("p",null,"To change a Stronghold password, you read a snapshot into a vault and then write it out with a new encryption password. You can view this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/d1b8893d73aae35dfcf7c5c8006e2177988d25d0/src/stronghold.rs#L436-L451"},"code")," for the source."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'Old snapshot backups will not be "rekeyed", so you have to track your old passwords. ')))}p.isMDXComponent=!0}}]);