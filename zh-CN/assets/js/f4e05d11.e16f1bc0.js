"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["50668"],{602374:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG","title":"SHOW TABLETS BELONG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLETS-BELONG","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW TABLETS BELONG","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TABLET","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET"},"next":{"title":"SHOW TABLET STORAGE FORMAT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-STORAGE-FORMAT"}}'),s=t("785893"),l=t("250065");let i={title:"SHOW TABLETS BELONG",language:"en"},d=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"Used to show tablets and information of their belonging table"}),"\n",(0,s.jsx)(n.p,{children:"grammar\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLETS BELONG tablet-ids;\n"})}),"\n",(0,s.jsx)(n.p,{children:"illustrate\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"tablet-ids: one or more tablet-ids, with comma separated"}),"\n",(0,s.jsxs)(n.li,{children:["Columns of result keep same with result of ",(0,s.jsx)(n.code,{children:"SHOW-DATA"})," for the same table"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"show information of four tablet-ids (actually, three tablet-ids. Result will be deduplicated)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLETS BELONG 27028,78880,78382,27028;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n| DbName              | TableName | TableSize | PartitionNum | BucketNum | ReplicaCount | TabletIds      |\n+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n| default_cluster:db1 | kec       | 613.000 B | 379          | 604       | 604          | [78880, 78382] |\n| default_cluster:db1 | test      | 1.874 KB  | 1            | 1         | 1            | [27028]        |\n+---------------------+-----------+-----------+--------------+-----------+--------------+----------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, TABLETS, BELONG\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var a=t(667294);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);