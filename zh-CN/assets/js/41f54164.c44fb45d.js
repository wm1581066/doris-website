"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["273792"],{710736:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>o,assets:()=>c,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION","title":"ALTER-TABLE-PARTITION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ALTER-TABLE-PARTITION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER-TABLE-BITMAP","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"},"next":{"title":"ALTER-TABLE-COLUMN","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}}'),s=l("785893"),r=l("250065");let a={title:"ALTER-TABLE-PARTITION",language:"zh-CN"},t=void 0,c={},d=[{value:"ALTER-TABLE-PARTITION",id:"alter-table-partition",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function T(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"alter-table-partition",children:"ALTER-TABLE-PARTITION"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ALTER TABLE PARTITION"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5BF9\u5DF2\u6709 table \u7684 partition \u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u4E2A\u64CD\u4F5C\u662F\u540C\u6B65\u7684\uFF0C\u547D\u4EE4\u8FD4\u56DE\u8868\u793A\u6267\u884C\u5B8C\u6BD5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,s.jsx)(n.p,{children:"partition \u7684 alter_clause \u652F\u6301\u5982\u4E0B\u51E0\u79CD\u4FEE\u6539\u65B9\u5F0F"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u589E\u52A0\u5206\u533A"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADD PARTITION [IF NOT EXISTS] partition_name \npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["partition_desc \u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u5199\u6CD5\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'VALUES LESS THAN [MAXVALUE|("value1", ...)]'}),"\n",(0,s.jsx)(n.li,{children:'VALUES [("value1", ...), ("value1", ...))'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u533A\u4E3A\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4\uFF0C\u5982\u679C\u7528\u6237\u4EC5\u6307\u5B9A\u53F3\u8FB9\u754C\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u786E\u5B9A\u5DE6\u8FB9\u754C"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5206\u6876\u65B9\u5F0F\uFF0C\u5219\u81EA\u52A8\u4F7F\u7528\u5EFA\u8868\u4F7F\u7528\u7684\u5206\u6876\u65B9\u5F0F\u548C\u5206\u6876\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u6307\u5B9A\u5206\u6876\u65B9\u5F0F\uFF0C\u53EA\u80FD\u4FEE\u6539\u5206\u6876\u6570\uFF0C\u4E0D\u53EF\u4FEE\u6539\u5206\u6876\u65B9\u5F0F\u6216\u5206\u6876\u5217\u3002\u5982\u679C\u6307\u5B9A\u4E86\u5206\u6876\u65B9\u5F0F\uFF0C\u4F46\u662F\u6CA1\u6709\u6307\u5B9A\u5206\u6876\u6570\uFF0C\u5219\u5206\u6876\u6570\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C10\uFF0C\u4E0D\u4F1A\u4F7F\u7528\u5EFA\u8868\u65F6\u6307\u5B9A\u7684\u5206\u6876\u6570\u3002\u5982\u679C\u8981\u6307\u5B9A\u5206\u6876\u6570\uFF0C\u5219\u5FC5\u987B\u6307\u5B9A\u5206\u6876\u65B9\u5F0F\u3002"}),"\n",(0,s.jsxs)(n.li,{children:['["key"="value"] \u90E8\u5206\u53EF\u4EE5\u8BBE\u7F6E\u5206\u533A\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u5177\u4F53\u8BF4\u660E\u89C1 ',(0,s.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",children:"CREATE TABLE"})]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u5EFA\u8868\u65F6\u7528\u6237\u672A\u663E\u5F0F\u521B\u5EFAPartition,\u5219\u4E0D\u652F\u6301\u901A\u8FC7ALTER\u7684\u65B9\u5F0F\u589E\u52A0\u5206\u533A"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u7528\u6237\u4F7F\u7528\u7684\u662FList Partition\u5219\u53EF\u4EE5\u589E\u52A0default partition\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ALTER TABLE ADD PARTITION DEFAULT"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5220\u9664\u5206\u533A"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP PARTITION [IF EXISTS] partition_name [FORCE]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u5206\u533A\u65B9\u5F0F\u7684\u8868\u81F3\u5C11\u8981\u4FDD\u7559\u4E00\u4E2A\u5206\u533A\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884C DROP PARTITION \u4E00\u6BB5\u65F6\u95F4\u5185\uFF0C\u53EF\u4EE5\u901A\u8FC7 RECOVER \u8BED\u53E5\u6062\u590D\u88AB\u5220\u9664\u7684\u5206\u533A\u3002\u8BE6\u89C1 SQL\u624B\u518C-\u6570\u636E\u5E93\u7BA1\u7406-RECOVER \u8BED\u53E5"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u6267\u884C DROP PARTITION FORCE\uFF0C\u5219\u7CFB\u7EDF\u4E0D\u4F1A\u68C0\u67E5\u8BE5\u5206\u533A\u662F\u5426\u5B58\u5728\u672A\u5B8C\u6210\u7684\u4E8B\u52A1\uFF0C\u5206\u533A\u5C06\u76F4\u63A5\u88AB\u5220\u9664\u5E76\u4E14\u4E0D\u80FD\u88AB\u6062\u590D\uFF0C\u4E00\u822C\u4E0D\u5EFA\u8BAE\u6267\u884C\u6B64\u64CD\u4F5C"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539\u5206\u533A\u5C5E\u6027"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5F53\u524D\u652F\u6301\u4FEE\u6539\u5206\u533A\u7684\u4E0B\u5217\u5C5E\u6027\uFF1A\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"storage_medium"}),"\n",(0,s.jsx)(n.li,{children:"storage_cooldown_time"}),"\n",(0,s.jsx)(n.li,{children:"replication_num"}),"\n",(0,s.jsx)(n.li,{children:"in_memory"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u5BF9\u4E8E\u5355\u5206\u533A\u8868\uFF0Cpartition_name \u540C\u8868\u540D\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u589E\u52A0\u5206\u533A, \u73B0\u6709\u5206\u533A [MIN, 2013-01-01)\uFF0C\u589E\u52A0\u5206\u533A [2013-01-01, 2014-01-01)\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u5206\u6876\u65B9\u5F0F"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u589E\u52A0\u5206\u533A\uFF0C\u4F7F\u7528\u65B0\u7684\u5206\u6876\u6570"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1) BUCKETS 20;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u589E\u52A0\u5206\u533A\uFF0C\u4F7F\u7528\u65B0\u7684\u526F\u672C\u6570"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539\u5206\u533A\u526F\u672C\u6570"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"\u6279\u91CF\u4FEE\u6539\u6307\u5B9A\u5206\u533A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("replication_num"="1");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"\u6279\u91CF\u4FEE\u6539\u6240\u6709\u5206\u533A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"\u5220\u9664\u5206\u533A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"\u589E\u52A0\u4E00\u4E2A\u6307\u5B9A\u4E0A\u4E0B\u754C\u7684\u5206\u533A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01")); \n'})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, PARTITION, ALTER TABLE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(T,{...e})}):T(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return a}});var i=l(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);