"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["927673"],{890509:function(n,e,l){l.r(e),l.d(e,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv","title":"\u4F7F\u7528\u591A\u8868\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4F7F\u7528\u591A\u8868\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528\u5355\u8868\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv"},"next":{"title":"\u4F7F\u7528\u5217\u7EDF\u8BA1\u4FE1\u606F\u4F18\u5316\u8BA1\u5212","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/tuning-plan-with-statistics"}}'),i=l("785893"),s=l("250065");let t={title:"\u4F7F\u7528\u591A\u8868\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199",language:"zh-CN"},d=void 0,a={},c=[{value:"\u5DE5\u4F5C\u539F\u7406",id:"\u5DE5\u4F5C\u539F\u7406",level:2},{value:"\u8C03\u4F18\u6848\u4F8B",id:"\u8C03\u4F18\u6848\u4F8B",level:2},{value:"1 \u521B\u5EFA\u57FA\u7840\u8868\u4E0E\u6570\u636E\u63D2\u5165",id:"1-\u521B\u5EFA\u57FA\u7840\u8868\u4E0E\u6570\u636E\u63D2\u5165",level:3},{value:"2 \u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE",id:"2-\u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE",level:3},{value:"3 \u67E5\u770B\u7269\u5316\u89C6\u56FE\u5143\u4FE1\u606F",id:"3-\u67E5\u770B\u7269\u5316\u89C6\u56FE\u5143\u4FE1\u606F",level:3},{value:"4 \u5237\u65B0\u7269\u5316\u89C6\u56FE",id:"4-\u5237\u65B0\u7269\u5316\u89C6\u56FE",level:3},{value:"5 \u4EFB\u52A1\u7BA1\u7406",id:"5-\u4EFB\u52A1\u7BA1\u7406",level:3},{value:"6 \u4FEE\u6539\u7269\u5316\u89C6\u56FE",id:"6-\u4FEE\u6539\u7269\u5316\u89C6\u56FE",level:3},{value:"7 \u5220\u9664\u7269\u5316\u89C6\u56FE",id:"7-\u5220\u9664\u7269\u5316\u89C6\u56FE",level:3},{value:"8 \u4F7F\u7528\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2",id:"8-\u4F7F\u7528\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2",level:3},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function o(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u5DE5\u4F5C\u539F\u7406",children:"\u5DE5\u4F5C\u539F\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u591A\u8868\u7269\u5316\u89C6\u56FE\u91C7\u7528\u7684\u662F\u57FA\u4E8E SPJG\uFF08SELECT-PROJECT-JOIN-GROUP-BY\uFF09\u6A21\u5F0F\u7684\u900F\u660E\u6539\u5199\u7B97\u6CD5\u3002\u8BE5\u7B97\u6CD5\u80FD\u591F\u5206\u6790\u67E5\u8BE2 SQL \u7684\u7ED3\u6784\u4FE1\u606F\uFF0C\u81EA\u52A8\u5BFB\u627E\u5408\u9002\u7684\u7269\u5316\u89C6\u56FE\uFF0C\u5E76\u5C1D\u8BD5\u8FDB\u884C\u900F\u660E\u6539\u5199\uFF0C\u4EE5\u5229\u7528\u6700\u4F18\u7684\u7269\u5316\u89C6\u56FE\u6765\u8868\u8FBE\u67E5\u8BE2 SQL\u3002\u901A\u8FC7\u4F7F\u7528\u9884\u8BA1\u7B97\u7684\u7269\u5316\u89C6\u56FE\u7ED3\u679C\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\uFF0C\u5E76\u964D\u4F4E\u8BA1\u7B97\u6210\u672C\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8C03\u4F18\u6848\u4F8B",children:"\u8C03\u4F18\u6848\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u63A5\u4E0B\u6765\uFF0C\u5C06\u4F1A\u901A\u8FC7\u793A\u4F8B\uFF0C\u8BE6\u7EC6\u5C55\u793A\u5982\u4F55\u5229\u7528\u591A\u8868\u7269\u5316\u89C6\u56FE\u6765\u4F18\u5316\u67E5\u8BE2\u3002\u6B64\u793A\u4F8B\u6DB5\u76D6\u7269\u5316\u89C6\u56FE\u7684\u521B\u5EFA\u3001\u5143\u4FE1\u606F\u67E5\u770B\u3001\u6570\u636E\u5237\u65B0\u3001\u4EFB\u52A1\u7BA1\u7406\u3001\u4FEE\u6539\u4EE5\u53CA\u5220\u9664\u7B49\u4E00\u7CFB\u5217\u64CD\u4F5C\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u521B\u5EFA\u57FA\u7840\u8868\u4E0E\u6570\u636E\u63D2\u5165",children:"1 \u521B\u5EFA\u57FA\u7840\u8868\u4E0E\u6570\u636E\u63D2\u5165"}),"\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\uFF0C\u521B\u5EFA tpch \u6570\u636E\u5E93\u5E76\u5728\u5176\u4E2D\u521B\u5EFA ",(0,i.jsx)(e.code,{children:"orders"})," \u548C ",(0,i.jsx)(e.code,{children:"lineitem"})," \u4E24\u5F20\u8868\uFF0C\u5E76\u63D2\u5165\u76F8\u5E94\u7684\u6570\u636E\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE DATABASE IF NOT EXISTS tpch;\nUSE tpch;\n\n-- \u521B\u5EFA orders \u8868\nCREATE TABLE IF NOT EXISTS orders (\n    o_orderkey       integer not null,\n    o_custkey        integer not null,\n    o_orderstatus    char(1) not null,\n    o_totalprice     decimalv3(15,2) not null,\n    o_orderdate      date not null,\n    o_orderpriority  char(15) not null,\n    o_clerk          char(15) not null,\n    o_shippriority   integer not null,\n    o_comment        varchar(79) not null\n)\nDUPLICATE KEY(o_orderkey, o_custkey)\nPARTITION BY RANGE(o_orderdate)(\n    FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY\n)\nDISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\nPROPERTIES (\"replication_num\" = \"1\");\n\n-- \u63D2\u5165\u6570\u636E\u5230 orders \u8868\nINSERT INTO orders VALUES\n    (1, 1, 'o', 99.5, '2023-10-17', 'a', 'b', 1, 'yy'),\n    (2, 2, 'o', 109.2, '2023-10-18', 'c','d',2, 'mm'),\n    (3, 3, 'o', 99.5, '2023-10-19', 'a', 'b', 1, 'yy');\n\n-- \u521B\u5EFA lineitem \u8868\nCREATE TABLE IF NOT EXISTS lineitem (\n    l_orderkey    integer not null,\n    l_partkey     integer not null,\n    l_suppkey     integer not null,\n    l_linenumber  integer not null,\n    l_quantity    decimalv3(15,2) not null,\n    l_extendedprice  decimalv3(15,2) not null,\n    l_discount    decimalv3(15,2) not null,\n    l_tax         decimalv3(15,2) not null,\n    l_returnflag  char(1) not null,\n    l_linestatus  char(1) not null,\n    l_shipdate    date not null,\n    l_commitdate  date not null,\n    l_receiptdate date not null,\n    l_shipinstruct char(25) not null,\n    l_shipmode     char(10) not null,\n    l_comment      varchar(44) not null\n)\nDUPLICATE KEY(l_orderkey, l_partkey, l_suppkey, l_linenumber)\nPARTITION BY RANGE(l_shipdate)\n(FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\nDISTRIBUTED BY HASH(l_orderkey) BUCKETS 3\nPROPERTIES (\"replication_num\" = \"1\");\n\n-- \u63D2\u5165\u6570\u636E\u5230 lineitem \u8868\nINSERT INTO lineitem VALUES\n    (1, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-17', '2023-10-17', '2023-10-17', 'a', 'b', 'yyyyyyyyy'),\n    (2, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-18', '2023-10-18', '2023-10-18', 'a', 'b', 'yyyyyyyyy'),\n    (3, 2, 3, 6, 7.5, 8.5, 9.5, 10.5, 'k', 'o', '2023-10-19', '2023-10-19', '2023-10-19', 'c', 'd', 'xxxxxxxxx');\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-\u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE",children:"2 \u521B\u5EFA\u5F02\u6B65\u7269\u5316\u89C6\u56FE"}),"\n",(0,i.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5F02\u6B65\u7269\u5316\u89C6\u56FE",(0,i.jsx)(e.code,{children:"mv1"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW mv1   \nBUILD DEFERRED REFRESH AUTO ON MANUAL  \nPARTITION BY(l_shipdate)  \nDISTRIBUTED BY RANDOM BUCKETS 2  \nPROPERTIES ('replication_num' = '1')   \nAS   \nSELECT l_shipdate, o_orderdate, l_partkey, l_suppkey, SUM(o_totalprice) AS sum_total  \nFROM lineitem  \nLEFT JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate  \nGROUP BY  \nl_shipdate,  \no_orderdate,  \nl_partkey,  \nl_suppkey;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"3-\u67E5\u770B\u7269\u5316\u89C6\u56FE\u5143\u4FE1\u606F",children:"3 \u67E5\u770B\u7269\u5316\u89C6\u56FE\u5143\u4FE1\u606F"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT * FROM mv_infos("database"="tpch") WHERE Name="mv1";\n'})}),"\n",(0,i.jsx)(e.h3,{id:"4-\u5237\u65B0\u7269\u5316\u89C6\u56FE",children:"4 \u5237\u65B0\u7269\u5316\u89C6\u56FE"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u67E5\u770B\u5206\u533A\u5217\u8868\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW PARTITIONS FROM mv1;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u540E\u5237\u65B0\u7279\u5B9A\u5206\u533A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW mv1 PARTITIONS(p_20231017_20231018);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"5-\u4EFB\u52A1\u7BA1\u7406",children:"5 \u4EFB\u52A1\u7BA1\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u7BA1\u7406\u7269\u5316\u89C6\u56FE\u7684\u4F5C\u4E1A\uFF0C\u5305\u62EC\u67E5\u770B\u4F5C\u4E1A\u3001\u6682\u505C\u5B9A\u65F6\u8C03\u5EA6\u3001\u6062\u590D\u5B9A\u65F6\u8C03\u5EA6\u4EE5\u53CA\u67E5\u770B\u548C\u53D6\u6D88\u4EFB\u52A1\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B\u7269\u5316\u89C6\u56FE Job"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT * FROM jobs("type"="mv") ORDER BY CreateTime;\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6682\u505C\u7269\u5316\u89C6\u56FE Job \u5B9A\u65F6\u8C03\u5EA6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"PAUSE MATERIALIZED VIEW JOB ON mv1;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6062\u590D\u7269\u5316\u89C6\u56FE Job \u5B9A\u65F6\u8C03\u5EA6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"RESUME MATERIALIZED VIEW JOB ON mv1;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B\u7269\u5316\u89C6\u56FE\u7684 Task"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'SELECT * FROM tasks("type"="mv");\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u53D6\u6D88\u7269\u5316\u89C6\u56FE\u7684 Task\uFF1A\u5047\u8BBE ",(0,i.jsx)(e.code,{children:"realTaskId"})," \u4E3A 123"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CANCEL MATERIALIZED VIEW TASK 123 ON mv1;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"6-\u4FEE\u6539\u7269\u5316\u89C6\u56FE",children:"6 \u4FEE\u6539\u7269\u5316\u89C6\u56FE"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER MATERIALIZED VIEW mv1 SET("grace_period"="3333");\n'})}),"\n",(0,i.jsx)(e.h3,{id:"7-\u5220\u9664\u7269\u5316\u89C6\u56FE",children:"7 \u5220\u9664\u7269\u5316\u89C6\u56FE"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW mv1;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"8-\u4F7F\u7528\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2",children:"8 \u4F7F\u7528\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u76F4\u63A5\u67E5\u8BE2"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT l_shipdate, sum_total \nFROM mv1 \nWHERE l_partkey = 2 AND l_suppkey = 3;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u900F\u660E\u6539\u5199\u67E5\u8BE2\uFF08\u67E5\u8BE2\u4F18\u5316\u5668\u4F1A\u81EA\u52A8\u4F7F\u7528\u7269\u5316\u89C6\u56FE\uFF09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT l_shipdate, SUM(o_totalprice) AS total_price\nFROM lineitem\nLEFT JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nWHERE l_partkey = 2 AND l_suppkey = 3\nGROUP BY l_shipdate;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u5B8C\u6574\u5C55\u793A\u4E86\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u7684\u751F\u547D\u5468\u671F\uFF0C\u5305\u62EC\u521B\u5EFA\u3001\u7BA1\u7406\u3001\u4F7F\u7528\u548C\u5220\u9664\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u4F7F\u7528\u7269\u5316\u89C6\u56FE\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u590D\u6742\u7684\u805A\u5408\u67E5\u8BE2\u3002\u5728\u4F7F\u7528\u7684\u65F6\u5019\u9700\u8981\u6CE8\u610F\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9884\u8BA1\u7B97\u7ED3\u679C\uFF1A\u7269\u5316\u89C6\u56FE\u5C06\u67E5\u8BE2\u7ED3\u679C\u9884\u5148\u8BA1\u7B97\u5E76\u5B58\u50A8\uFF0C\u907F\u514D\u4E86\u6BCF\u6B21\u67E5\u8BE2\u65F6\u91CD\u590D\u8BA1\u7B97\u7684\u5F00\u9500\u3002\u8FD9\u5BF9\u4E8E\u9700\u8981\u9891\u7E41\u6267\u884C\u7684\u590D\u6742\u67E5\u8BE2\u5C24\u5176\u6709\u6548\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u51CF\u5C11\u8054\u63A5\u64CD\u4F5C\uFF1A\u7269\u5316\u89C6\u56FE\u53EF\u4EE5\u5C06\u591A\u4E2A\u8868\u7684\u6570\u636E\u5408\u5E76\u5230\u4E00\u4E2A\u89C6\u56FE\u4E2D\uFF0C\u51CF\u5C11\u4E86\u67E5\u8BE2\u65F6\u7684\u8054\u63A5\u64CD\u4F5C\uFF0C\u4ECE\u800C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u81EA\u52A8\u66F4\u65B0\uFF1A\u5F53\u57FA\u8868\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u7269\u5316\u89C6\u56FE\u53EF\u4EE5\u81EA\u52A8\u66F4\u65B0\uFF0C\u4EE5\u4FDD\u6301\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002\u8FD9\u786E\u4FDD\u4E86\u67E5\u8BE2\u7ED3\u679C\u59CB\u7EC8\u53CD\u6620\u6700\u65B0\u7684\u6570\u636E\u72B6\u6001\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7A7A\u95F4\u5F00\u9500\uFF1A\u7269\u5316\u89C6\u56FE\u9700\u8981\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\u6765\u4FDD\u5B58\u9884\u8BA1\u7B97\u7684\u7ED3\u679C\u3002\u5728\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u65F6\uFF0C\u9700\u8981\u6743\u8861\u67E5\u8BE2\u6027\u80FD\u63D0\u5347\u548C\u5B58\u50A8\u7A7A\u95F4\u6D88\u8017\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7EF4\u62A4\u6210\u672C\uFF1A\u7269\u5316\u89C6\u56FE\u7684\u7EF4\u62A4\u9700\u8981\u4E00\u5B9A\u7684\u7CFB\u7EDF\u8D44\u6E90\u548C\u65F6\u95F4\u3002\u9891\u7E41\u66F4\u65B0\u7684\u57FA\u8868\u53EF\u80FD\u5BFC\u81F4\u7269\u5316\u89C6\u56FE\u7684\u66F4\u65B0\u5F00\u9500\u8F83\u5927\u3002\u56E0\u6B64\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u5237\u65B0\u7B56\u7565\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9002\u7528\u573A\u666F\uFF1A\u7269\u5316\u89C6\u56FE\u9002\u7528\u4E8E\u6570\u636E\u53D8\u5316\u9891\u7387\u8F83\u4F4E\u3001\u67E5\u8BE2\u9891\u7387\u8F83\u9AD8\u7684\u573A\u666F\u3002\u5BF9\u4E8E\u7ECF\u5E38\u53D8\u5316\u7684\u6570\u636E\uFF0C\u5B9E\u65F6\u8BA1\u7B97\u53EF\u80FD\u66F4\u4E3A\u5408\u9002\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5408\u7406\u5229\u7528\u7269\u5316\u89C6\u56FE\uFF0C\u53EF\u4EE5\u663E\u8457\u6539\u5584\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u6027\u80FD\uFF0C\u7279\u522B\u662F\u5728\u590D\u6742\u67E5\u8BE2\u548C\u5927\u6570\u636E\u91CF\u7684\u60C5\u51B5\u4E0B\u3002\u540C\u65F6\uFF0C\u4E5F\u9700\u8981\u7EFC\u5408\u8003\u8651\u5B58\u50A8\u3001\u7EF4\u62A4\u7B49\u56E0\u7D20\uFF0C\u4EE5\u5B9E\u73B0\u6027\u80FD\u548C\u6210\u672C\u7684\u5E73\u8861\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return d},a:function(){return t}});var r=l(667294);let i={},s=r.createContext(i);function t(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);