"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["386586"],{478100:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN","title":"SHOW-CATALOG-RECYCLE-BIN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-CATALOG-RECYCLE-BIN","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-STORAGE-POLICY-USING","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING"},"next":{"title":"SHOW-QUERY-STATS","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-QUERY-STATS"}}'),s=n("785893"),i=n("250065");let l={title:"SHOW-CATALOG-RECYCLE-BIN",language:"en"},r=void 0,o={},d=[{value:"SHOW-CATALOG-RECYCLE-BIN",id:"show-catalog-recycle-bin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"show-catalog-recycle-bin",children:"SHOW-CATALOG-RECYCLE-BIN"}),"\n",(0,s.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(t.p,{children:"SHOW CATALOG RECYCLE BIN"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to display the dropped meta informations that can be recovered"}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n'})}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"The meaning of each column is as follows:\n        Type\uFF1A                type of meta information:Database\u3001Table\u3001Partition\n        Name\uFF1A                name of meta information\n        DbId\uFF1A                id of database\n        TableId\uFF1A             id of table\n        PartitionId\uFF1A         id of partition\n        DropTime\uFF1A            drop time of meta information\n        DataSize\uFF1A            the amount of data. If the type is database, this value includes the data size of the recycled tables and partitions in the database\n        RemoteDataSize\uFF1A      the amount of data on remote storage(hdfs or object storage). If the type is database, this value includes the remote data size of the recycled tables and partitions in the database\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Display all meta informations that can be recovered"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:" SHOW CATALOG RECYCLE BIN;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Display meta informations with name 'test'"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:" SHOW CATALOG RECYCLE BIN WHERE NAME = 'test';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SHOW, CATALOG RECYCLE BIN\n"})}),"\n",(0,s.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var a=n(667294);let s={},i=a.createContext(s);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);