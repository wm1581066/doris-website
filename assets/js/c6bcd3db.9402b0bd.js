"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["923966"],{294005:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","title":"ADD BROKER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/ADD-BROKER","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ADD BROKER","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL DECOMMISSION BACKEND","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/CANCEL-DECOMMISSION-BACKEND"},"next":{"title":"DROP BROKER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-BROKER"}}'),a=t("785893"),r=t("250065");let l={title:"ADD BROKER",language:"en"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to add a BROKER node. (Administrator only!)"}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER broker_name "broker_host1:broker_ipc_port1","broker_host2:broker_ipc_port2",...;\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add two brokers"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:' ALTER SYSTEM ADD BROKER "host1:port", "host2:port";\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When fe enable fqdn(",(0,a.jsx)(n.a,{href:"../../../admin-manual/cluster-management/fqdn.md",children:"fqdn"}),"),add one Broker"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:' ALTER SYSTEM ADD BROKER "broker_fqdn1:port";\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ALTER, SYSTEM, ADD, FOLLOWER, ALTER SYSTEM\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);