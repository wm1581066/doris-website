"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["305524"],{33378:function(e,a,t){t.r(a),t.d(a,{metadata:()=>n,contentTitle:()=>o,default:()=>m,assets:()=>i,toc:()=>s,frontMatter:()=>d});var n=JSON.parse('{"id":"admin-manual/data-admin/delete-recover","title":"Data Recover","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/data-admin/delete-recover.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/delete-recover","permalink":"/docs/1.2/admin-manual/data-admin/delete-recover","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Data Recover","language":"en"},"sidebar":"docs","previous":{"title":"Data Restore","permalink":"/docs/1.2/admin-manual/data-admin/restore"},"next":{"title":"Sql Interception","permalink":"/docs/1.2/admin-manual/sql-interception"}}'),r=t("785893"),l=t("250065");let d={title:"Data Recover",language:"en"},o="Data Deletion Recovery",i={},s=[{value:"Start Data Recovery",id:"start-data-recovery",level:2},{value:"More Help",id:"more-help",level:2}];function c(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"data-deletion-recovery",children:"Data Deletion Recovery"})}),"\n",(0,r.jsxs)(a.p,{children:["In order to avoid disasters caused by misoperation, Doris supports data recovery of accidentally deleted databases/tables/partitions. After dropping table or database, Doris will not physically delete the data immediately, but will keep it in Trash for a period of time ( The default is 1 day, which can be configured through the ",(0,r.jsx)(a.code,{children:"catalog_trash_expire_second"})," parameter in fe.conf). The administrator can use the RECOVER command to restore accidentally deleted data."]}),"\n",(0,r.jsx)(a.h2,{id:"start-data-recovery",children:"Start Data Recovery"}),"\n",(0,r.jsx)(a.p,{children:"1.restore the database named example_db"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,r.jsx)(a.p,{children:"2.restore the table named example_tbl"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,r.jsx)(a.p,{children:"3.restore partition named p1 in table example_tbl"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"more-help",children:"More Help"}),"\n",(0,r.jsxs)(a.p,{children:["For more detailed syntax and best practices used by RECOVER, please refer to the ",(0,r.jsx)(a.a,{href:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",children:"RECOVER"})," command manual, You can also type ",(0,r.jsx)(a.code,{children:"HELP RECOVER"})," on the MySql client command line for more help."]})]})}function m(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return o},a:function(){return d}});var n=t(667294);let r={},l=n.createContext(r);function d(e){let a=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);