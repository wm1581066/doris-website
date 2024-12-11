"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["251981"],{781375:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-distribution","title":"View Tablet Distribution","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/be-http/tablet-distribution.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-distribution","permalink":"/docs/admin-manual/open-api/be-http/tablet-distribution","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"View Tablet Distribution","language":"en"},"sidebar":"docs","previous":{"title":"Metrics","permalink":"/docs/admin-manual/open-api/be-http/metrics"},"next":{"title":"Migration Tablet","permalink":"/docs/admin-manual/open-api/be-http/tablet-migration"}}'),s=t("785893"),r=t("250065");let a={title:"View Tablet Distribution",language:"en"},l="View Tablet Distribution",o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"view-tablet-distribution",children:"View Tablet Distribution"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/tablets_distribution?group_by={enum}&partition_id={int}"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the distribution of tablets under each partition between different disks on BE node"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"group_by"}),"\nonly supports ",(0,s.jsx)(n.code,{children:"partition"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"partition_id"}),"\nID of the specified partition\uFF0COptional with default all partition\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'```\n{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n```\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'```\ncurl "http://127.0.0.1:8040/api/tablets_distribution?group_by=partition&partition_id=123"\n\n```\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);