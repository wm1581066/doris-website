"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["187123"],{37998:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/set-config-action","title":"Set Config Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/fe-http/set-config-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/set-config-action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/set-config-action","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Set Config Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Row Count Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/row-count-action"},"next":{"title":"Show Data Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/show-data-action"}}'),i=s("785893"),r=s("250065");let c={title:"Set Config Action",language:"zh-CN"},o=void 0,a={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /api/_set_config"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u52A8\u6001\u8BBE\u7F6E FE \u7684\u53C2\u6570\u3002\u8BE5\u547D\u4EE4\u7B49\u540C\u4E8E\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"ADMIN SET FRONTEND CONFIG"})," \u547D\u4EE4\u3002\u4F46\u8BE5\u547D\u4EE4\u4EC5\u4F1A\u8BBE\u7F6E\u5BF9\u5E94 FE \u8282\u70B9\u7684\u914D\u7F6E\u3002\u5E76\u4E14\u4E0D\u4F1A\u81EA\u52A8\u8F6C\u53D1 ",(0,i.jsx)(n.code,{children:"MasterOnly"})," \u914D\u7F6E\u9879\u7ED9 Master FE \u8282\u70B9\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"confkey1=confvalue1"})}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u8BBE\u7F6E\u7684\u914D\u7F6E\u540D\u79F0\uFF0C\u5176\u503C\u4E3A\u8981\u4FEE\u6539\u7684\u914D\u7F6E\u503C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"persist"})}),"\n",(0,i.jsxs)(n.p,{children:["\u662F\u5426\u8981\u5C06\u4FEE\u6539\u7684\u914D\u7F6E\u6301\u4E45\u5316\u3002\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u4E0D\u6301\u4E45\u5316\u3002\u5982\u679C\u4E3A true\uFF0C\u8FD9\u4FEE\u6539\u540E\u7684\u914D\u7F6E\u9879\u4F1A\u5199\u5165 ",(0,i.jsx)(n.code,{children:"fe_custom.conf"})," \u6587\u4EF6\u4E2D\uFF0C\u5E76\u5728 FE \u91CD\u542F\u540E\u4ECD\u4F1A\u751F\u6548\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"reset_persist"})}),"\n",(0,i.jsxs)(n.p,{children:["\u662F\u5426\u8981\u6E05\u7A7A\u539F\u6765\u7684\u6301\u4E45\u5316\u914D\u7F6E\uFF0C\u53EA\u5728 persist \u53C2\u6570\u4E3A true \u65F6\u751F\u6548\u3002\u4E3A\u4E86\u517C\u5BB9\u539F\u6765\u7684\u7248\u672C\uFF0Creset_persist \u9ED8\u8BA4\u4E3A true\u3002",(0,i.jsx)(n.br,{}),"\n\u5982\u679C persist \u8BBE\u4E3A true\uFF0C\u4E0D\u8BBE\u7F6E reset_persist \u6216 reset_persist \u4E3A true\uFF0C\u5C06\u5148\u6E05\u7A7A",(0,i.jsx)(n.code,{children:"fe_custom.conf"}),"\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u518D\u5C06\u672C\u6B21\u4FEE\u6539\u7684\u914D\u7F6E\u5199\u5165",(0,i.jsx)(n.code,{children:"fe_custom.conf"}),"\uFF1B",(0,i.jsx)(n.br,{}),"\n\u5982\u679C persist \u8BBE\u4E3A true\uFF0Creset_persist \u4E3A false\uFF0C\u672C\u6B21\u4FEE\u6539\u7684\u914D\u7F6E\u9879\u5C06\u4F1A\u589E\u91CF\u6DFB\u52A0\u5230",(0,i.jsx)(n.code,{children:"fe_custom.conf"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"set": {\n			"key": "value"\n		},\n		"err": [\n			{\n		       "config_name": "",\n		       "config_value": "",\n		       "err_info": ""\n		    }\n		],\n		"persist":""\n	},\n	"count": 0\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set"})," \u5B57\u6BB5\u8868\u793A\u8BBE\u7F6E\u6210\u529F\u7684\u914D\u7F6E\u3002",(0,i.jsx)(n.code,{children:"err"})," \u5B57\u6BB5\u8868\u793A\u8BBE\u7F6E\u5931\u8D25\u7684\u914D\u7F6E\u3002 ",(0,i.jsx)(n.code,{children:"persist"})," \u5B57\u6BB5\u8868\u793A\u6301\u4E45\u5316\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"storage_min_left_capacity_bytes"})," \u3001 ",(0,i.jsx)(n.code,{children:"replica_ack_policy"})," \u548C ",(0,i.jsx)(n.code,{children:"agent_task_resend_wait_time_ms"}),"  \u4E09\u4E2A\u914D\u7F6E\u7684\u503C\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /api/_set_config?storage_min_left_capacity_bytes=1024&replica_ack_policy=SIMPLE_MAJORITY&agent_task_resend_wait_time_ms=true\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "storage_min_left_capacity_bytes": "1024"\n    },\n    "err": [\n        {\n            "config_name": "replica_ack_policy",\n            "config_value": "SIMPLE_MAJORITY",\n            "err_info": "Not support dynamic modification."\n        },\n        {\n            "config_name": "agent_task_resend_wait_time_ms",\n            "config_value": "true",\n            "err_info": "Unsupported configuration value type."\n        }\n    ],\n    "persist": ""\n},\n"count": 0\n}\n\nstorage_min_left_capacity_bytes \u8BBE\u7F6E\u6210\u529F\uFF1B  \nreplica_ack_policy \u8BBE\u7F6E\u5931\u8D25\uFF0C\u539F\u56E0\u662F\u8BE5\u914D\u7F6E\u9879\u4E0D\u652F\u6301\u52A8\u6001\u4FEE\u6539\uFF1B \nagent_task_resend_wait_time_ms \u8BBE\u7F6E\u5931\u8D25\uFF0C\u56E0\u4E3A\u8BE5\u914D\u7F6E\u9879\u7C7B\u578B\u4E3A long\uFF0C\u8BBE\u7F6E boolean \u7C7B\u578B\u5931\u8D25\u3002\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"max_bytes_per_broker_scanner"})," \u5E76\u6301\u4E45\u5316"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&persist=true&reset_persist=false\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "max_bytes_per_broker_scanner": "21474836480"\n    },\n    "err": [],\n    "persist": "ok"\n},\n"count": 0\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"fe/conf \u76EE\u5F55\u751F\u6210 fe_custom.conf\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"#THIS IS AN AUTO GENERATED CONFIG FILE.\n#You can modify this file manually, and the configurations in this file\n#will overwrite the configurations in fe.conf\n#Wed Jul 28 12:43:14 CST 2021\nmax_bytes_per_broker_scanner=21474836480\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let i={},r=t.createContext(i);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);