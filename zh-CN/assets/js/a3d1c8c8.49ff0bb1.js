"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["591940"],{53034:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>t});var i=JSON.parse('{"id":"data-operate/delete/delete-manual","title":"Delete \u64CD\u4F5C","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/delete/delete-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/delete-manual","permalink":"/zh-CN/docs/3.0/data-operate/delete/delete-manual","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Delete \u64CD\u4F5C","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u66F4\u65B0\u4E8B\u52A1","permalink":"/zh-CN/docs/3.0/data-operate/update/unique-update-transaction"},"next":{"title":"\u6279\u91CF\u5220\u9664","permalink":"/zh-CN/docs/3.0/data-operate/delete/batch-delete-manual"}}'),s=l("785893"),d=l("250065");let t={title:"Delete \u64CD\u4F5C",language:"zh-CN"},r=void 0,c={},a=[{value:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u6765\u5220\u9664",id:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u6765\u5220\u9664",level:2},{value:"\u5FC5\u987B\u7684\u53C2\u6570",id:"\u5FC5\u987B\u7684\u53C2\u6570",level:3},{value:"\u53EF\u9009\u7684\u53C2\u6570",id:"\u53EF\u9009\u7684\u53C2\u6570",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:3},{value:"\u901A\u8FC7\u4F7F\u7528 Using \u5B50\u53E5\u6765\u5220\u9664",id:"\u901A\u8FC7\u4F7F\u7528-using-\u5B50\u53E5\u6765\u5220\u9664",level:2},{value:"\u5FC5\u987B\u7684\u53C2\u6570",id:"\u5FC5\u987B\u7684\u53C2\u6570-1",level:3},{value:"\u53EF\u9009\u7684\u53C2\u6570",id:"\u53EF\u9009\u7684\u53C2\u6570-1",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879-1",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B-1",level:3},{value:"\u7ED3\u679C\u8FD4\u56DE",id:"\u7ED3\u679C\u8FD4\u56DE",level:2},{value:"\u6267\u884C\u6210\u529F",id:"\u6267\u884C\u6210\u529F",level:3},{value:"\u63D0\u4EA4\u6210\u529F\uFF0C\u4F46\u672A\u53EF\u89C1",id:"\u63D0\u4EA4\u6210\u529F\u4F46\u672A\u53EF\u89C1",level:3},{value:"\u63D0\u4EA4\u5931\u8D25\uFF0C\u4E8B\u52A1\u53D6\u6D88",id:"\u63D0\u4EA4\u5931\u8D25\u4E8B\u52A1\u53D6\u6D88",level:3},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:3},{value:"\u76F8\u5173 FE \u914D\u7F6E",id:"\u76F8\u5173-fe-\u914D\u7F6E",level:2},{value:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55",id:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Delete \u64CD\u4F5C\u8BED\u53E5\u901A\u8FC7 MySQL \u534F\u8BAE\uFF0C\u5BF9\u6307\u5B9A\u7684 table \u6216\u8005 partition \u4E2D\u7684\u6570\u636E\u8FDB\u884C\u6309\u6761\u4EF6\u5220\u9664\u3002Delete \u5220\u9664\u64CD\u4F5C\u4E0D\u540C\u4E8E\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664\uFF0C\u5B83\u7C7B\u4F3C Insert into \u8BED\u53E5\uFF0C\u662F\u4E00\u4E2A\u540C\u6B65\u8FC7\u7A0B\u3002\u6240\u6709\u7684 Delete \u64CD\u4F5C\u5728 Doris \u4E2D\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BFC\u5165\u4F5C\u4E1A\uFF0C\u4E00\u822C Delete \u8BED\u53E5\u9700\u8981\u6307\u5B9A\u8868\u548C\u5206\u533A\u4EE5\u53CA\u5220\u9664\u7684\u6761\u4EF6\u6765\u7B5B\u9009\u8981\u5220\u9664\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u4F1A\u540C\u65F6\u5220\u9664 base \u8868\u548C rollup \u8868\u7684\u6570\u636E\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Delete \u64CD\u4F5C\u7684\u8BED\u6CD5\u8BE6\u89C1 ",(0,s.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-modification/DML/DELETE",children:"DELETE"})," \u8BED\u6CD5\u3002\u4E0D\u540C\u4E8E Insert into \u547D\u4EE4\uFF0Cdelete \u4E0D\u80FD\u624B\u52A8\u6307\u5B9A",(0,s.jsx)(n.code,{children:"label"}),"\uFF0C\u6709\u5173 label \u7684\u6982\u5FF5\u53EF\u4EE5\u67E5\u770B ",(0,s.jsx)(n.a,{href:"../../data-operate/import/insert-into-manual",children:"Insert Into"})," \u6587\u6863\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u6765\u5220\u9664",children:"\u901A\u8FC7\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD\u6765\u5220\u9664"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5FC5\u987B\u7684\u53C2\u6570",children:"\u5FC5\u987B\u7684\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table_name: \u6307\u5B9A\u9700\u8981\u5220\u9664\u6570\u636E\u7684\u8868"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"column_name: \u5C5E\u4E8E table_name \u7684\u5217"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"op: \u903B\u8F91\u6BD4\u8F83\u64CD\u4F5C\u7B26\uFF0C\u53EF\u9009\u7C7B\u578B\u5305\u62EC\uFF1A=, >, <, >=, <=, !=, in, not in"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"value | value_list: \u505A\u903B\u8F91\u6BD4\u8F83\u7684\u503C\u6216\u503C\u5217\u8868"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53EF\u9009\u7684\u53C2\u6570",children:"\u53EF\u9009\u7684\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name]): \u6307\u5B9A\u6267\u884C\u5220\u9664\u6570\u636E\u7684\u5206\u533A\u540D\uFF0C\u5982\u679C\u8868\u4E0D\u5B58\u5728\u6B64\u5206\u533A\uFF0C\u5219\u62A5\u9519"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table_alias: \u8868\u7684\u522B\u540D"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u8868\u6A21\u578B Aggregate \u65F6\uFF0C\u53EA\u80FD\u6307\u5B9A Key \u5217\u4E0A\u7684\u6761\u4EF6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5F53\u9009\u5B9A\u7684 Key \u5217\u4E0D\u5B58\u5728\u4E8E\u67D0\u4E2A Rollup \u4E2D\u65F6\uFF0C\u65E0\u6CD5\u8FDB\u884C Delete\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6761\u4EF6\u4E4B\u95F4\u53EA\u80FD\u662F\u201C\u4E0E\u201D\u7684\u5173\u7CFB\u3002\u82E5\u5E0C\u671B\u8FBE\u6210\u201C\u6216\u201D\u7684\u5173\u7CFB\uFF0C\u9700\u8981\u5C06\u6761\u4EF6\u5206\u5199\u5728\u4E24\u4E2A DELETE \u8BED\u53E5\u4E2D\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4E3A\u5206\u533A\u8868\uFF0C\u9700\u8981\u6307\u5B9A\u5206\u533A\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0CDoris \u4F1A\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u51FA\u5206\u533A\u3002\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0CDoris \u65E0\u6CD5\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u51FA\u5206\u533A\uFF1A1) \u6761\u4EF6\u4E2D\u4E0D\u5305\u542B\u5206\u533A\u5217\uFF1B2) \u5206\u533A\u5217\u7684 op \u4E3A not in\u3002\u5F53\u5206\u533A\u8868\u672A\u6307\u5B9A\u5206\u533A\uFF0C\u6216\u8005\u65E0\u6CD5\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u5206\u533A\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8BBE\u7F6E\u4F1A\u8BDD\u53D8\u91CF delete_without_partition \u4E3A true\uFF0C\u6B64\u65F6 Delete \u4F1A\u5E94\u7528\u5230\u6240\u6709\u5206\u533A\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u53EF\u80FD\u4F1A\u964D\u4F4E\u6267\u884C\u540E\u4E00\u6BB5\u65F6\u95F4\u5185\u7684\u67E5\u8BE2\u6548\u7387\u3002\u5F71\u54CD\u7A0B\u5EA6\u53D6\u51B3\u4E8E\u8BED\u53E5\u4E2D\u6307\u5B9A\u7684\u5220\u9664\u6761\u4EF6\u7684\u6570\u91CF\u3002\u6307\u5B9A\u7684\u6761\u4EF6\u8D8A\u591A\uFF0C\u5F71\u54CD\u8D8A\u5927\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. \u5220\u9664 my_table partition p1 \u4E2D k1 \u5217\u503C\u4E3A 3 \u7684\u6570\u636E\u884C"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'2. \u5220\u9664 my_table partition p1 \u4E2D k1 \u5217\u503C\u5927\u4E8E\u7B49\u4E8E 3 \u4E14 k2 \u5217\u503C\u4E3A "abc" \u7684\u6570\u636E\u884C'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 = 3 AND k2 = "abc";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'3. \u5220\u9664 my_table partition p1, p2 \u4E2D k1 \u5217\u503C\u5927\u4E8E\u7B49\u4E8E 3 \u4E14 k2 \u5217\u503C\u4E3A "abc" \u7684\u6570\u636E\u884C'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 = 3 AND k2 = "abc";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u901A\u8FC7\u4F7F\u7528-using-\u5B50\u53E5\u6765\u5220\u9664",children:"\u901A\u8FC7\u4F7F\u7528 Using \u5B50\u53E5\u6765\u5220\u9664"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5FC5\u987B\u7684\u53C2\u6570-1",children:"\u5FC5\u987B\u7684\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table_name: \u6307\u5B9A\u9700\u8981\u5220\u9664\u6570\u636E\u7684\u8868"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"WHERE condition: \u6307\u5B9A\u4E00\u4E2A\u7528\u4E8E\u9009\u62E9\u5220\u9664\u884C\u7684\u6761\u4EF6"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53EF\u9009\u7684\u53C2\u6570-1",children:"\u53EF\u9009\u7684\u53C2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name]): \u6307\u5B9A\u6267\u884C\u5220\u9664\u6570\u636E\u7684\u5206\u533A\u540D\uFF0C\u5982\u679C\u8868\u4E0D\u5B58\u5728\u6B64\u5206\u533A\uFF0C\u5219\u62A5\u9519"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table_alias: \u8868\u7684\u522B\u540D"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879-1",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsx)(n.p,{children:"\u6B64\u79CD\u5F62\u5F0F\u53EA\u80FD\u5728 UNIQUE KEY \u6A21\u578B\u8868\u4E0A\u4F7F\u7528"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53EA\u80FD\u5728\u8868\u6A21\u578B UNIQUE Key \u8868\u6A21\u578B\u4E0A\u4F7F\u7528\uFF0C\u53EA\u80FD\u6307\u5B9A key \u5217\u4E0A\u7684\u6761\u4EF6\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u793A\u4F8B-1",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528",(0,s.jsx)(n.code,{children:"t2"}),"\u548C",(0,s.jsx)(n.code,{children:"t3"}),"\u8868\u8FDE\u63A5\u7684\u7ED3\u679C\uFF0C\u5220\u9664",(0,s.jsx)(n.code,{children:"t1"}),"\u4E2D\u7684\u6570\u636E\uFF0C\u5220\u9664\u7684\u8868\u53EA\u652F\u6301 unique \u6A21\u578B"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u521B\u5EFAt1, t2, t3\u4E09\u5F20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63D2\u5165\u6570\u636E\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u5220\u9664 t1 \u4E2D\u7684\u6570\u636E\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9884\u671F\u7ED3\u679C\u4E3A\uFF0C\u5220\u9664\u4E86",(0,s.jsx)(n.code,{children:"t1"}),"\u8868",(0,s.jsx)(n.code,{children:"id"}),"\u4E3A",(0,s.jsx)(n.code,{children:"1"}),"\u7684\u5217"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ED3\u679C\u8FD4\u56DE",children:"\u7ED3\u679C\u8FD4\u56DE"}),"\n",(0,s.jsx)(n.p,{children:"Delete \u547D\u4EE4\u662F\u4E00\u4E2A SQL \u547D\u4EE4\uFF0C\u8FD4\u56DE\u7ED3\u679C\u662F\u540C\u6B65\u7684\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\uFF1A"}),"\n",(0,s.jsx)(n.h3,{id:"\u6267\u884C\u6210\u529F",children:"\u6267\u884C\u6210\u529F"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C Delete \u987A\u5229\u6267\u884C\u5B8C\u6210\u5E76\u53EF\u89C1\uFF0C\u5C06\u8FD4\u56DE\u4E0B\u5217\u7ED3\u679C\uFF0C",(0,s.jsx)(n.code,{children:"Query OK"}),"\u8868\u793A\u6210\u529F"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u63D0\u4EA4\u6210\u529F\u4F46\u672A\u53EF\u89C1",children:"\u63D0\u4EA4\u6210\u529F\uFF0C\u4F46\u672A\u53EF\u89C1"}),"\n",(0,s.jsx)(n.p,{children:"Doris \u7684\u4E8B\u52A1\u63D0\u4EA4\u5206\u4E3A\u4E24\u6B65\uFF1A\u63D0\u4EA4\u548C\u53D1\u5E03\u7248\u672C\uFF0C\u53EA\u6709\u5B8C\u6210\u4E86\u53D1\u5E03\u7248\u672C\u6B65\u9AA4\uFF0C\u7ED3\u679C\u624D\u5BF9\u7528\u6237\u662F\u53EF\u89C1\u7684\u3002\u82E5\u5DF2\u7ECF\u63D0\u4EA4\u6210\u529F\u4E86\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u6700\u7EC8\u4E00\u5B9A\u4F1A\u53D1\u5E03\u6210\u529F\uFF0CDoris \u4F1A\u5C1D\u8BD5\u5728\u63D0\u4EA4\u5B8C\u540E\u7B49\u5F85\u53D1\u5E03\u4E00\u6BB5\u65F6\u95F4\uFF0C\u5982\u679C\u8D85\u65F6\u540E\u5373\u4F7F\u53D1\u5E03\u7248\u672C\u8FD8\u672A\u5B8C\u6210\u4E5F\u4F1A\u4F18\u5148\u8FD4\u56DE\u7ED9\u7528\u6237\uFF0C\u63D0\u793A\u7528\u6237\u63D0\u4EA4\u5DF2\u7ECF\u5B8C\u6210\u3002\u82E5\u5982\u679C Delete \u5DF2\u7ECF\u63D0\u4EA4\u5E76\u6267\u884C\uFF0C\u4F46\u662F\u4ECD\u672A\u53D1\u5E03\u7248\u672C\u548C\u53EF\u89C1\uFF0C\u5C06\u8FD4\u56DE\u4E0B\u5217\u7ED3\u679C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C\u4F1A\u540C\u65F6\u8FD4\u56DE\u4E00\u4E2A json \u5B57\u7B26\u4E32\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"affected rows"}),"\uFF1A\u8868\u793A\u6B64\u6B21\u5220\u9664\u5F71\u54CD\u7684\u884C\uFF0C\u7531\u4E8E Doris \u7684\u5220\u9664\u76EE\u524D\u662F\u903B\u8F91\u5220\u9664\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u8FD9\u4E2A\u503C\u662F\u6052\u4E3A 0\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"label"}),"\uFF1A\u81EA\u52A8\u751F\u6210\u7684 label\uFF0C\u662F\u8BE5\u5BFC\u5165\u4F5C\u4E1A\u7684\u6807\u8BC6\u3002\u6BCF\u4E2A\u5BFC\u5165\u4F5C\u4E1A\uFF0C\u90FD\u6709\u4E00\u4E2A\u5728\u5355 Database \u5185\u90E8\u552F\u4E00\u7684 Label\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"status"}),"\uFF1A\u8868\u793A\u6570\u636E\u5220\u9664\u662F\u5426\u53EF\u89C1\uFF0C\u5982\u679C\u53EF\u89C1\u5219\u663E\u793A",(0,s.jsx)(n.code,{children:"VISIBLE"}),"\uFF0C\u5982\u679C\u4E0D\u53EF\u89C1\u5219\u663E\u793A",(0,s.jsx)(n.code,{children:"COMMITTED"}),"\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"txnId"}),"\uFF1A\u8FD9\u4E2A Delete job \u5BF9\u5E94\u7684\u4E8B\u52A1 id\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"err"}),"\uFF1A\u5B57\u6BB5\u4F1A\u663E\u793A\u4E00\u4E9B\u672C\u6B21\u5220\u9664\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u63D0\u4EA4\u5931\u8D25\u4E8B\u52A1\u53D6\u6D88",children:"\u63D0\u4EA4\u5931\u8D25\uFF0C\u4E8B\u52A1\u53D6\u6D88"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C Delete \u8BED\u53E5\u6CA1\u6709\u63D0\u4EA4\u6210\u529F\uFF0C\u5C06\u4F1A\u88AB Doris \u81EA\u52A8\u4E2D\u6B62\uFF0C\u8FD4\u56DE\u4E0B\u5217\u7ED3\u679C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {\u9519\u8BEF\u539F\u56E0}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6BD4\u5982\u8BF4\u4E00\u4E2A\u8D85\u65F6\u7684\u5220\u9664\uFF0C\u5C06\u4F1A\u8FD4\u56DE ",(0,s.jsx)(n.code,{children:"timeout"})," \u65F6\u95F4\u548C\u672A\u5B8C\u6210\u7684",(0,s.jsx)(n.code,{children:"(tablet=replica)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E Delete \u64CD\u4F5C\u8FD4\u56DE\u7ED3\u679C\u7684\u6B63\u786E\u5904\u7406\u903B\u8F91\u4E3A\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u8FD4\u56DE\u7ED3\u679C\u4E3A",(0,s.jsx)(n.code,{children:"ERROR 1064 (HY000)"}),"\uFF0C\u5219\u8868\u793A\u5220\u9664\u5931\u8D25\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u8FD4\u56DE\u7ED3\u679C\u4E3A",(0,s.jsx)(n.code,{children:"Query OK"}),"\uFF0C\u5219\u8868\u793A\u5220\u9664\u6267\u884C\u6210\u529F\uFF1B"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C",(0,s.jsx)(n.code,{children:"status"}),"\u4E3A",(0,s.jsx)(n.code,{children:"COMMITTED"}),"\uFF0C\u8868\u793A\u6570\u636E\u4ECD\u4E0D\u53EF\u89C1\uFF0C\u7528\u6237\u53EF\u4EE5\u7A0D\u7B49\u4E00\u6BB5\u65F6\u95F4\u518D\u7528",(0,s.jsx)(n.code,{children:"show delete"}),"\u547D\u4EE4\u67E5\u770B\u7ED3\u679C\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C",(0,s.jsx)(n.code,{children:"status"}),"\u4E3A",(0,s.jsx)(n.code,{children:"VISIBLE"}),"\uFF0C\u8868\u793A\u6570\u636E\u5220\u9664\u6210\u529F\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5173-fe-\u914D\u7F6E",children:"\u76F8\u5173 FE \u914D\u7F6E"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TIMEOUT \u914D\u7F6E"})}),"\n",(0,s.jsx)(n.p,{children:"\u603B\u4F53\u6765\u8BF4\uFF0CDoris \u7684\u5220\u9664\u4F5C\u4E1A\u7684\u8D85\u65F6\u65F6\u95F4\u8BA1\u7B97\u89C4\u5219\u4E3A\u5982\u4E0B\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"TIMEOUT = MIN(delete_job_max_timeout_second, MAX(30, tablet_delete_timeout_second * tablet_num))\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tablet_delete_timeout_second"}),"\n",(0,s.jsxs)(n.p,{children:["Delete \u81EA\u8EAB\u7684\u8D85\u65F6\u65F6\u95F4\u662F\u53D7\u6307\u5B9A\u5206\u533A\u4E0B Tablet \u7684\u6570\u91CF\u5F39\u6027\u6539\u53D8\u7684\uFF0C\u6B64\u9879\u914D\u7F6E\u4E3A\u5E73\u5747\u4E00\u4E2A Tablet \u6240\u8D21\u732E\u7684 ",(0,s.jsx)(n.code,{children:"timeout"})," \u65F6\u95F4\uFF0C\u9ED8\u8BA4\u503C\u4E3A 2\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8BBE\u6B64\u6B21\u5220\u9664\u6240\u6307\u5B9A\u5206\u533A\u4E0B\u6709 5 \u4E2A tablet\uFF0C\u90A3\u4E48\u53EF\u63D0\u4F9B\u7ED9 delete \u7684 timeout \u65F6\u95F4\u4E3A 10 \u79D2\uFF0C\u7531\u4E8E\u4F4E\u4E8E\u6700\u4F4E\u8D85\u65F6\u65F6\u95F4 30 \u79D2\uFF0C\u56E0\u6B64\u6700\u7EC8\u8D85\u65F6\u65F6\u95F4\u4E3A 30 \u79D2\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"query_timeout"}),"\n",(0,s.jsxs)(n.p,{children:["\u56E0\u4E3A Delete \u672C\u8EAB\u662F\u4E00\u4E2A SQL \u547D\u4EE4\uFF0C\u56E0\u6B64\u5220\u9664\u8BED\u53E5\u4E5F\u4F1A\u53D7 Session \u9650\u5236\uFF0C",(0,s.jsx)(n.code,{children:"timeout"})," \u8FD8\u53D7 Session \u4E2D\u7684",(0,s.jsx)(n.code,{children:"query_timeout"}),"\u503C\u5F71\u54CD\uFF0C\u53EF\u4EE5\u901A\u8FC7",(0,s.jsx)(n.code,{children:"SET query_timeout = xxx"}),"\u6765\u589E\u52A0\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"IN \u8C13\u8BCD\u914D\u7F6E"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"max_allowed_in_element_num_of_delete"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u7528\u6237\u5728\u4F7F\u7528 in \u8C13\u8BCD\u65F6\u9700\u8981\u5360\u7528\u7684\u5143\u7D20\u6BD4\u8F83\u591A\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u6B64\u9879\u8C03\u6574\u5141\u8BB8\u643A\u5E26\u7684\u5143\u7D20\u4E0A\u9650\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1024\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55",children:"\u67E5\u770B\u5386\u53F2\u8BB0\u5F55"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 show delete \u8BED\u53E5\u67E5\u770B\u5386\u53F2\u4E0A\u5DF2\u6267\u884C\u5B8C\u6210\u7684\u5220\u9664\u8BB0\u5F55\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\u5982\u4E0B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW DELETE [FROM db_name]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n'})})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return t}});var i=l(667294);let s={},d=i.createContext(s);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);