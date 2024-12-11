"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["795291"],{688760:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/DROP-FOLLOWER","title":"DROP FOLLOWER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/DROP-FOLLOWER.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/DROP-FOLLOWER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-FOLLOWER","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP FOLLOWER","language":"en"},"sidebar":"docs","previous":{"title":"ADD FOLLOWER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/ADD-FOLLOWER"},"next":{"title":"ADD OBSERVER","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/ADD-OBSERVER"}}'),a=t("785893"),l=t("250065");let i={title:"DROP FOLLOWER",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is to delete the node of the FOLLOWER role of FRONTEND, (only for administrators!)"}),"\n",(0,a.jsx)(n.p,{children:"Grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP FOLLOWER "follower_host:edit_log_port"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Illustration:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"host can be a hostname or an ip address"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"edit_log_port : edit_log_port in its configuration file fe.conf"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Delete a FOLLOWER node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM DROP FOLLOWER "host_ip:9010"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"ALTER, SYSTEM, DROP, FOLLOWER, ALTER SYSTEM"})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);