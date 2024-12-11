"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["105254"],{735527:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>E,assets:()=>c,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW","title":"SHOW-CREATE-MATERIALIZED-VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-CREATE-MATERIALIZED-VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-CREATE-DATABASE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE"},"next":{"title":"SHOW-CREATE-LOAD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD"}}'),s=l("785893"),r=l("250065");let a={title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,c={},o=[{value:"SHOW-CREATE-MATERIALIZED-VIEW",id:"show-create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"show-create-materialized-view",children:"SHOW-CREATE-MATERIALIZED-VIEW"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"SHOW CREATE MATERIALIZED VIEW"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u8BE2\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u7684\u8BED\u53E5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE MATERIALIZED VIEW mv_name ON table_name\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"mv_name:\n\u7269\u5316\u89C6\u56FE\u7684\u540D\u79F0\u3002\u5FC5\u586B\u9879\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table_name:\n\u7269\u5316\u89C6\u56FE\u6240\u5C5E\u7684\u8868\u540D\u3002\u5FC5\u586B\u9879\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u7684\u8BED\u53E5\u4E3A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"create materialized view id_col1 as select id,col1 from table3;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u8BE2\u540E\u8FD4\u56DE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> show create materialized view id_col1 on table3;\n+-----------+----------+----------------------------------------------------------------+\n| TableName | ViewName | CreateStmt                                                     |\n+-----------+----------+----------------------------------------------------------------+\n| table3    | id_col1  | create materialized view id_col1 as select id,col1 from table3 |\n+-----------+----------+----------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, MATERIALIZED, VIEW\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return a}});var t=l(667294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);