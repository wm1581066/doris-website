"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["983171"],{81541:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"admin-manual/http-actions/fe/show-meta-info-action","title":"Show Meta Info Action","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/show-meta-info-action.md","sourceDirName":"admin-manual/http-actions/fe","slug":"/admin-manual/http-actions/fe/show-meta-info-action","permalink":"/docs/1.2/admin-manual/http-actions/fe/show-meta-info-action","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Show Meta Info Action","language":"en"},"sidebar":"docs","previous":{"title":"Show Data Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/show-data-action"},"next":{"title":"Show Proc Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/show-proc-action"}}'),i=t("785893"),a=t("250065");let o={title:"Show Meta Info Action",language:"en"},r="Show Meta Info Action",c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"show-meta-info-action",children:"Show Meta Info Action"})}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /api/show_meta_info"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Used to display some metadata information"}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"action"}),"\n",(0,i.jsx)(n.p,{children:"Specify the type of metadata information to be obtained. Currently supports the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SHOW_DB_SIZE"})}),"\n",(0,i.jsx)(n.p,{children:"Get the data size of the specified database, in bytes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SHOW_HA"})}),"\n",(0,i.jsx)(n.p,{children:"Obtain the playback status of FE metadata logs and the status of electable groups."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SHOW_DB_SIZE"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:information_schema": 0,\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SHOW_HA"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"can_read": "true",\n		"role": "MASTER",\n		"is_ready": "true",\n		"last_checkpoint_version": "1492",\n		"last_checkpoint_time": "1596465109000",\n		"current_journal_id": "1595",\n		"electable_nodes": "",\n		"observer_nodes": "",\n		"master": "10.81.85.89"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the data size of each database in the cluster"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /api/show_meta_info?action=show_db_size\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:information_schema": 0,\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the FE election group situation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /api/show_meta_info?action=show_ha\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"can_read": "true",\n		"role": "MASTER",\n		"is_ready": "true",\n		"last_checkpoint_version": "1492",\n		"last_checkpoint_time": "1596465109000",\n		"current_journal_id": "1595",\n		"electable_nodes": "",\n		"observer_nodes": "",\n		"master": "10.81.85.89"\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let i={},a=s.createContext(i);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);