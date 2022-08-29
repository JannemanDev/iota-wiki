"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21496],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),g=r,k=m["".concat(d,".").concat(g)]||m[g]||s[g]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3517:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={description:"This section describes the configuration parameters and their types for INX-Dashboard.",keywords:["IOTA Node","Hornet Node","Dashboard","Configuration","JSON","Customize","Config","reference"]},d="Core Configuration",p={unversionedId:"configuration",id:"configuration",title:"Core Configuration",description:"This section describes the configuration parameters and their types for INX-Dashboard.",source:"@site/content/build/inx-dashboard/develop/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/inx-dashboard/develop/configuration",draft:!1,editUrl:"https://github.com/iotaledger/inx-dashboard/edit/develop/documentation/docs/content/build/inx-dashboard/develop/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"This section describes the configuration parameters and their types for INX-Dashboard.",keywords:["IOTA Node","Hornet Node","Dashboard","Configuration","JSON","Customize","Config","reference"]},sidebar:"mySidebar",previous:{title:"Welcome to INX-Dashboard",permalink:"/inx-dashboard/develop/welcome"}},u={},s=[{value:'<a id="app"></a> 1. Application',id:"-1-application",level:2},{value:'<a id="inx"></a> 2. INX',id:"-2-inx",level:2},{value:'<a id="dashboard"></a> 3. Dashboard',id:"-3-dashboard",level:2},{value:'<a id="dashboard_auth"></a> Auth',id:"-auth",level:3},{value:'<a id="profiling"></a> 4. Profiling',id:"-4-profiling",level:2},{value:'<a id="prometheus"></a> 5. Prometheus',id:"-5-prometheus",level:2}],m={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"core-configuration"},"Core Configuration"),(0,l.kt)("p",null,"INX-Dashboard uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.json.org"},"official JSON specs"),"."),(0,l.kt)("p",null,"You can change the path of the config file by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," argument while executing ",(0,l.kt)("inlineCode",{parentName:"p"},"inx-dashboard")," executable."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-dashboard -c config_defaults.json\n")),(0,l.kt)("p",null,"You can always get the most up-to-date description of the config parameters by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-dashboard -h --full\n")),(0,l.kt)("h2",{id:"-1-application"},(0,l.kt)("a",{id:"app"})," 1. Application"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkForUpdates"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to check for updates of the application or not"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopGracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time to wait for background processes to finish during shutdown before terminating the app"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5m"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "app": {\n      "checkForUpdates": true,\n      "stopGracePeriod": "5m"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-2-inx"},(0,l.kt)("a",{id:"inx"})," 2. INX"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The INX address to which to connect to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9029"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inx": {\n      "address": "localhost:9029"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-3-dashboard"},(0,l.kt)("a",{id:"dashboard"})," 3. Dashboard"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the dashboard can be accessed from"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:8081"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"developerMode"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to run the dashboard in dev mode"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"developerModeURL"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL to use for dev mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"',(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:9090%22"},'http://127.0.0.1:9090"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dashboard_auth"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for auth"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debugRequestLoggerEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the debug logging for requests should be enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"-auth"},(0,l.kt)("a",{id:"dashboard_auth"})," Auth"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the auth session should last before expiring"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"72h"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"The auth username (max 25 chars)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"admin"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passwordHash"),(0,l.kt)("td",{parentName:"tr",align:null},"The auth password+salt as a scrypt hash"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"0000000000000000000000000000000000000000000000000000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passwordSalt"),(0,l.kt)("td",{parentName:"tr",align:null},"The auth salt used for hashing the password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"0000000000000000000000000000000000000000000000000000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identityFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the identity file used for JWT"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"identity.key"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identityPrivateKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Private key used to sign the JWT tokens (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "dashboard": {\n      "bindAddress": "localhost:8081",\n      "developerMode": false,\n      "developerModeURL": "http://127.0.0.1:9090",\n      "auth": {\n        "sessionTimeout": "72h",\n        "username": "admin",\n        "passwordHash": "0000000000000000000000000000000000000000000000000000000000000000",\n        "passwordSalt": "0000000000000000000000000000000000000000000000000000000000000000",\n        "identityFilePath": "identity.key",\n        "identityPrivateKey": ""\n      },\n      "debugRequestLoggerEnabled": false\n    }\n  }\n')),(0,l.kt)("h2",{id:"-4-profiling"},(0,l.kt)("a",{id:"profiling"})," 4. Profiling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the profiling plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the profiler listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:6060"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "profiling": {\n      "enabled": false,\n      "bindAddress": "localhost:6060"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-5-prometheus"},(0,l.kt)("a",{id:"prometheus"})," 5. Prometheus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the prometheus plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the Prometheus HTTP server listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9312"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include go metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"processMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include process metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promhttpMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include promhttp metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "prometheus": {\n      "enabled": false,\n      "bindAddress": "localhost:9312",\n      "goMetrics": false,\n      "processMetrics": false,\n      "promhttpMetrics": false\n    }\n  }\n')))}g.isMDXComponent=!0}}]);