"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["526544"],{398303:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>s});var l=JSON.parse('{"id":"table-design/data-partitioning/auto-partitioning","title":"\u81EA\u52A8\u5206\u533A","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/data-partitioning/auto-partitioning.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/auto-partitioning","permalink":"/zh-CN/docs/table-design/data-partitioning/auto-partitioning","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u81EA\u52A8\u5206\u533A","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u52A8\u6001\u5206\u533A","permalink":"/zh-CN/docs/table-design/data-partitioning/dynamic-partitioning"},"next":{"title":"\u624B\u52A8\u5206\u6876","permalink":"/zh-CN/docs/table-design/data-partitioning/manual-bucketing"}}'),t=i("785893"),a=i("250065");let s={title:"\u81EA\u52A8\u5206\u533A",language:"zh-CN"},r=void 0,c={},o=[{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u7528\u6CD5\u793A\u4F8B",id:"\u7528\u6CD5\u793A\u4F8B",level:3},{value:"\u7EA6\u675F",id:"\u7EA6\u675F",level:3},{value:"NULL \u503C\u5206\u533A",id:"null-\u503C\u5206\u533A",level:3},{value:"\u573A\u666F\u793A\u4F8B",id:"\u573A\u666F\u793A\u4F8B",level:2},{value:"\u4E0E\u52A8\u6001\u5206\u533A\u8054\u7528",id:"\u4E0E\u52A8\u6001\u5206\u533A\u8054\u7528",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u5206\u533A\u7BA1\u7406",id:"\u5206\u533A\u7BA1\u7406",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function T(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,t.jsx)(e.p,{children:"\u81EA\u52A8\u5206\u533A\u529F\u80FD\u4E3B\u8981\u89E3\u51B3\u4E86\u7528\u6237\u9884\u671F\u57FA\u4E8E\u67D0\u5217\u5BF9\u8868\u8FDB\u884C\u5206\u533A\u64CD\u4F5C\uFF0C\u4F46\u8BE5\u5217\u7684\u6570\u636E\u5206\u5E03\u6BD4\u8F83\u96F6\u6563\u6216\u8005\u96BE\u4EE5\u9884\u6D4B\uFF0C\u5728\u5EFA\u8868\u6216\u8C03\u6574\u8868\u7ED3\u6784\u65F6\u96BE\u4EE5\u51C6\u786E\u521B\u5EFA\u6240\u9700\u5206\u533A\uFF0C\u6216\u8005\u5206\u533A\u6570\u91CF\u8FC7\u591A\u4EE5\u81F3\u4E8E\u624B\u52A8\u521B\u5EFA\u8FC7\u4E8E\u7E41\u7410\u7684\u95EE\u9898\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u65F6\u95F4\u7C7B\u578B\u5206\u533A\u5217\u4E3A\u4F8B\uFF0C\u5728\u52A8\u6001\u5206\u533A\u529F\u80FD\u4E2D\uFF0C\u6211\u4EEC\u652F\u6301\u4E86\u6309\u7279\u5B9A\u65F6\u95F4\u5468\u671F\u81EA\u52A8\u521B\u5EFA\u65B0\u5206\u533A\u4EE5\u5BB9\u7EB3\u5B9E\u65F6\u6570\u636E\u3002\u5BF9\u4E8E\u5B9E\u65F6\u7684\u7528\u6237\u884C\u4E3A\u65E5\u5FD7\u7B49\u573A\u666F\u8BE5\u529F\u80FD\u57FA\u672C\u80FD\u591F\u6EE1\u8DB3\u9700\u6C42\u3002\u4F46\u5728\u4E00\u4E9B\u66F4\u590D\u6742\u7684\u573A\u666F\u4E0B\uFF0C\u4F8B\u5982\u5904\u7406\u975E\u5B9E\u65F6\u6570\u636E\u65F6\uFF0C\u5206\u533A\u5217\u4E0E\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\u65E0\u5173\uFF0C\u4E14\u5305\u542B\u5927\u91CF\u79BB\u6563\u503C\u3002\u6B64\u65F6\u4E3A\u63D0\u9AD8\u6548\u7387\u6211\u4EEC\u5E0C\u671B\u4F9D\u636E\u6B64\u5217\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u533A\uFF0C\u4F46\u6570\u636E\u5B9E\u9645\u53EF\u80FD\u6D89\u53CA\u7684\u5206\u533A\u65E0\u6CD5\u9884\u5148\u638C\u63E1\uFF0C\u6216\u8005\u9884\u671F\u6240\u9700\u5206\u533A\u6570\u91CF\u8FC7\u5927\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u52A8\u6001\u5206\u533A\u6216\u8005\u624B\u52A8\u521B\u5EFA\u5206\u533A\u65E0\u6CD5\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u81EA\u52A8\u5206\u533A\u529F\u80FD\u5F88\u597D\u5730\u8986\u76D6\u4E86\u6B64\u7C7B\u9700\u6C42\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8BBE\u6211\u4EEC\u7684\u8868 DDL \u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `DAILY_TRADE_VALUE`\n(\n    `TRADE_DATE`              datev2 NOT NULL COMMENT '\u4EA4\u6613\u65E5\u671F',\n    `TRADE_ID`                varchar(40) NOT NULL COMMENT '\u4EA4\u6613\u7F16\u53F7',\n    ......\n)\nUNIQUE KEY(`TRADE_DATE`, `TRADE_ID`)\nPARTITION BY RANGE(`TRADE_DATE`)\n(\n    PARTITION p_2000 VALUES [('2000-01-01'), ('2001-01-01')),\n    PARTITION p_2001 VALUES [('2001-01-01'), ('2002-01-01')),\n    PARTITION p_2002 VALUES [('2002-01-01'), ('2003-01-01')),\n    PARTITION p_2003 VALUES [('2003-01-01'), ('2004-01-01')),\n    PARTITION p_2004 VALUES [('2004-01-01'), ('2005-01-01')),\n    PARTITION p_2005 VALUES [('2005-01-01'), ('2006-01-01')),\n    PARTITION p_2006 VALUES [('2006-01-01'), ('2007-01-01')),\n    PARTITION p_2007 VALUES [('2007-01-01'), ('2008-01-01')),\n    PARTITION p_2008 VALUES [('2008-01-01'), ('2009-01-01')),\n    PARTITION p_2009 VALUES [('2009-01-01'), ('2010-01-01')),\n    PARTITION p_2010 VALUES [('2010-01-01'), ('2011-01-01')),\n    PARTITION p_2011 VALUES [('2011-01-01'), ('2012-01-01')),\n    PARTITION p_2012 VALUES [('2012-01-01'), ('2013-01-01')),\n    PARTITION p_2013 VALUES [('2013-01-01'), ('2014-01-01')),\n    PARTITION p_2014 VALUES [('2014-01-01'), ('2015-01-01')),\n    PARTITION p_2015 VALUES [('2015-01-01'), ('2016-01-01')),\n    PARTITION p_2016 VALUES [('2016-01-01'), ('2017-01-01')),\n    PARTITION p_2017 VALUES [('2017-01-01'), ('2018-01-01')),\n    PARTITION p_2018 VALUES [('2018-01-01'), ('2019-01-01')),\n    PARTITION p_2019 VALUES [('2019-01-01'), ('2020-01-01')),\n    PARTITION p_2020 VALUES [('2020-01-01'), ('2021-01-01')),\n    PARTITION p_2021 VALUES [('2021-01-01'), ('2022-01-01'))\n)\nDISTRIBUTED BY HASH(`TRADE_DATE`) BUCKETS 10\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8BE5\u8868\u5185\u5B58\u50A8\u4E86\u5927\u91CF\u4E1A\u52A1\u5386\u53F2\u6570\u636E\uFF0C\u4F9D\u636E\u4EA4\u6613\u53D1\u751F\u7684\u65E5\u671F\u8FDB\u884C\u5206\u533A\u3002\u53EF\u4EE5\u770B\u5230\u5728\u5EFA\u8868\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u9884\u5148\u624B\u52A8\u521B\u5EFA\u5206\u533A\u3002\u5982\u679C\u5206\u533A\u5217\u7684\u6570\u636E\u8303\u56F4\u53D1\u751F\u53D8\u5316\uFF0C\u4F8B\u5982\u4E0A\u8868\u4E2D\u589E\u52A0\u4E86 2022 \u5E74\u7684\u6570\u636E\uFF0C\u5219\u6211\u4EEC\u9700\u8981\u901A\u8FC7",(0,t.jsx)(e.a,{href:"../../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION",children:"ALTER-TABLE-PARTITION"}),"\u5BF9\u8868\u7684\u5206\u533A\u8FDB\u884C\u66F4\u6539\u3002\u5982\u679C\u8FD9\u79CD\u5206\u533A\u9700\u8981\u53D8\u66F4\uFF0C\u6216\u8005\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u7EC6\u5206\uFF0C\u4FEE\u6539\u8D77\u6765\u975E\u5E38\u7E41\u7410\u3002\u6B64\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528 AUTO PARTITION \u6539\u5199\u8BE5\u8868 DDL\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,t.jsxs)(e.p,{children:["\u5EFA\u8868\u65F6\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u8BED\u6CD5\u586B\u5145",(0,t.jsx)(e.a,{href:"../../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE-TABLE"}),"\u65F6\u7684 ",(0,t.jsx)(e.code,{children:"partition_info"})," \u90E8\u5206\uFF1A"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"AUTO RANGE PARTITION:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"   AUTO PARTITION BY RANGE (FUNC_CALL_EXPR)\n   ()\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u4E2D"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"   FUNC_CALL_EXPR ::= date_trunc ( <partition_column>, '<interval>' )\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"AUTO LIST PARTITION:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"    AUTO PARTITION BY LIST(`partition_col1`[, `partition_col2`, ...])\n    ()\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u7528\u6CD5\u793A\u4F8B",children:"\u7528\u6CD5\u793A\u4F8B"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"AUTO RANGE PARTITION"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"   CREATE TABLE `date_table` (\n       `TIME_STAMP` datev2 NOT NULL COMMENT '\u91C7\u96C6\u65E5\u671F'\n   ) ENGINE=OLAP\n   DUPLICATE KEY(`TIME_STAMP`)\n   AUTO PARTITION BY RANGE (date_trunc(`TIME_STAMP`, 'month'))\n   (\n   )\n   DISTRIBUTED BY HASH(`TIME_STAMP`) BUCKETS 10\n   PROPERTIES (\n   \"replication_allocation\" = \"tag.location.default: 1\"\n   );\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"AUTO LIST PARTITION"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'   CREATE TABLE `str_table` (\n       `str` varchar not null\n   ) ENGINE=OLAP\n   DUPLICATE KEY(`str`)\n   AUTO PARTITION BY LIST (`str`)\n   (\n   )\n   DISTRIBUTED BY HASH(`str`) BUCKETS 10\n   PROPERTIES (\n   "replication_allocation" = "tag.location.default: 1"\n   );\n'})}),"\n",(0,t.jsxs)(e.p,{children:["LIST \u81EA\u52A8\u5206\u533A\u652F\u6301\u591A\u4E2A\u5206\u533A\u5217\uFF0C\u5206\u533A\u5217\u5199\u6CD5\u540C\u666E\u901A LIST \u5206\u533A\u4E00\u6837\uFF1A ",(0,t.jsx)(e.code,{children:"AUTO PARTITION BY LIST (`col1`, `col2`, ...)"})]}),"\n",(0,t.jsx)(e.h3,{id:"\u7EA6\u675F",children:"\u7EA6\u675F"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5728 AUTO LIST PARTITION \u4E2D\uFF0C",(0,t.jsx)(e.strong,{children:"\u5206\u533A\u540D\u957F\u5EA6\u4E0D\u5F97\u8D85\u8FC7 50"}),". \u8BE5\u957F\u5EA6\u6765\u81EA\u4E8E\u5BF9\u5E94\u6570\u636E\u884C\u4E0A\u5404\u5206\u533A\u5217\u5185\u5BB9\u7684\u62FC\u63A5\u4E0E\u8F6C\u4E49\uFF0C\u56E0\u6B64\u5B9E\u9645\u5BB9\u8BB8\u957F\u5EA6\u53EF\u80FD\u66F4\u77ED\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728 AUTO RANGE PARTITION \u4E2D\uFF0C\u5206\u533A\u51FD\u6570\u4EC5\u652F\u6301 ",(0,t.jsx)(e.code,{children:"date_trunc"}),"\uFF0C\u5206\u533A\u5217\u4EC5\u652F\u6301 ",(0,t.jsx)(e.code,{children:"DATE"})," \u6216\u8005 ",(0,t.jsx)(e.code,{children:"DATETIME"})," \u7C7B\u578B\uFF1B"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728 AUTO LIST PARTITION \u4E2D\uFF0C\u4E0D\u652F\u6301\u51FD\u6570\u8C03\u7528\uFF0C\u5206\u533A\u5217\u652F\u6301 ",(0,t.jsx)(e.code,{children:"BOOLEAN"}),", ",(0,t.jsx)(e.code,{children:"TINYINT"}),", ",(0,t.jsx)(e.code,{children:"SMALLINT"}),", ",(0,t.jsx)(e.code,{children:"INT"}),", ",(0,t.jsx)(e.code,{children:"BIGINT"}),", ",(0,t.jsx)(e.code,{children:"LARGEINT"}),", ",(0,t.jsx)(e.code,{children:"DATE"}),", ",(0,t.jsx)(e.code,{children:"DATETIME"}),", ",(0,t.jsx)(e.code,{children:"CHAR"}),", ",(0,t.jsx)(e.code,{children:"VARCHAR"})," \u6570\u636E\u7C7B\u578B\uFF0C\u5206\u533A\u503C\u4E3A\u679A\u4E3E\u503C\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u5728 AUTO LIST PARTITION \u4E2D\uFF0C\u5206\u533A\u5217\u7684\u6BCF\u4E2A\u5F53\u524D\u4E0D\u5B58\u5728\u5BF9\u5E94\u5206\u533A\u7684\u53D6\u503C\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u65B0 PARTITION\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"null-\u503C\u5206\u533A",children:"NULL \u503C\u5206\u533A"}),"\n",(0,t.jsxs)(e.p,{children:["\u5F53\u5F00\u542F session variable ",(0,t.jsx)(e.code,{children:"allow_partition_column_nullable"})," \u540E\uFF1A"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u5BF9\u4E8E AUTO LIST PARTITION\uFF0C\u53EF\u4EE5\u4F7F\u7528 NULLABLE \u5217\u4F5C\u4E3A\u5206\u533A\u5217\uFF0C\u4F1A\u6B63\u5E38\u521B\u5EFA\u5BF9\u5E94\u7684 NULL \u503C\u5206\u533A\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> create table auto_null_list(\n    -> k0 varchar null\n    -> )\n    -> auto partition by list (k0)\n    -> (\n    -> )\n    -> DISTRIBUTED BY HASH(`k0`) BUCKETS 1\n    -> properties("replication_num" = "1");\nQuery OK, 0 rows affected (0.10 sec)\n\nmysql> insert into auto_null_list values (null);\nQuery OK, 1 row affected (0.28 sec)\n\nmysql> select * from auto_null_list;\n+------+\n| k0   |\n+------+\n| NULL |\n+------+\n1 row in set (0.20 sec)\n\nmysql> select * from auto_null_list partition(pX);\n+------+\n| k0   |\n+------+\n| NULL |\n+------+\n1 row in set (0.20 sec)\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["\u5BF9\u4E8E AUTO RANGE PARTITION\uFF0C",(0,t.jsx)(e.strong,{children:"\u4E0D\u652F\u6301 NULLABLE \u5217\u4F5C\u4E3A\u5206\u533A\u5217"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql>  CREATE TABLE `range_table_nullable` (\n    ->      `k1` INT,\n    ->      `k2` DATETIMEV2(3),\n    ->      `k3` DATETIMEV2(6)\n    ->  ) ENGINE=OLAP\n    ->  DUPLICATE KEY(`k1`)\n    ->  AUTO PARTITION BY RANGE (date_trunc(`k2`, \'day\'))\n    ->  (\n    ->  )\n    ->  DISTRIBUTED BY HASH(`k1`) BUCKETS 16\n    ->  PROPERTIES (\n    ->  "replication_allocation" = "tag.location.default: 1"\n    ->  );\nERROR 1105 (HY000): errCode = 2, detailMessage = AUTO RANGE PARTITION doesn\'t support NULL column\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u573A\u666F\u793A\u4F8B",children:"\u573A\u666F\u793A\u4F8B"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4F7F\u7528\u573A\u666F\u4E00\u8282\u4E2D\u7684\u793A\u4F8B\uFF0C\u5728\u4F7F\u7528 AUTO PARTITION \u540E\uFF0C\u8BE5\u8868 DDL \u53EF\u4EE5\u6539\u5199\u4E3A\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `DAILY_TRADE_VALUE`\n(\n    `TRADE_DATE`              datev2 NOT NULL COMMENT '\u4EA4\u6613\u65E5\u671F',\n    `TRADE_ID`                varchar(40) NOT NULL COMMENT '\u4EA4\u6613\u7F16\u53F7',\n    ......\n)\nUNIQUE KEY(`TRADE_DATE`, `TRADE_ID`)\nAUTO PARTITION BY RANGE (date_trunc(`TRADE_DATE`, 'year'))\n(\n)\nDISTRIBUTED BY HASH(`TRADE_DATE`) BUCKETS 10\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u6B64\u8868\u53EA\u6709\u4E24\u5217\u4E3A\u4F8B\uFF0C\u6B64\u65F6\u65B0\u8868\u6CA1\u6709\u9ED8\u8BA4\u5206\u533A\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"mysql> show partitions from `DAILY_TRADE_VALUE`;\nEmpty set (0.12 sec)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u7ECF\u8FC7\u63D2\u5165\u6570\u636E\u540E\u518D\u67E5\u770B\uFF0C\u53D1\u73B0\u8BE5\u8868\u5DF2\u7ECF\u521B\u5EFA\u4E86\u5BF9\u5E94\u7684\u5206\u533A\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"mysql> insert into `DAILY_TRADE_VALUE` values ('2012-12-13', 1), ('2008-02-03', 2), ('2014-11-11', 3);\nQuery OK, 3 rows affected (0.88 sec)\n\nmysql> show partitions from `DAILY_TRADE_VALUE`;\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n| PartitionId | PartitionName   | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n| 180060      | p20080101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2008-01-01]; ..types: [DATEV2]; keys: [2009-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n| 180039      | p20120101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2012-01-01]; ..types: [DATEV2]; keys: [2013-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n| 180018      | p20140101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2014-01-01]; ..types: [DATEV2]; keys: [2015-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n3 rows in set (0.12 sec)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u7ECF\u8FC7\u81EA\u52A8\u5206\u533A\u529F\u80FD\u6240\u521B\u5EFA\u7684 PARTITION\uFF0C\u4E0E\u624B\u52A8\u521B\u5EFA\u7684 PARTITION \u5177\u6709\u5B8C\u5168\u4E00\u81F4\u7684\u529F\u80FD\u6027\u8D28\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4E0E\u52A8\u6001\u5206\u533A\u8054\u7528",children:"\u4E0E\u52A8\u6001\u5206\u533A\u8054\u7528"}),"\n",(0,t.jsx)(e.p,{children:"\u81EA 2.1.7 \u8D77\uFF0CDoris \u652F\u6301\u81EA\u52A8\u5206\u533A\u548C\u52A8\u6001\u5206\u533A\u540C\u65F6\u4F7F\u7528\u3002\u6B64\u65F6\uFF0C\u4E8C\u8005\u7684\u529F\u80FD\u90FD\u751F\u6548\uFF1A"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u81EA\u52A8\u5206\u533A\u5C06\u4F1A\u81EA\u52A8\u5728\u6570\u636E\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u6309\u9700\u521B\u5EFA\u5206\u533A\uFF1B"}),"\n",(0,t.jsx)(e.li,{children:"\u52A8\u6001\u5206\u533A\u5C06\u4F1A\u81EA\u52A8\u521B\u5EFA\u3001\u56DE\u6536\u3001\u8F6C\u50A8\u5206\u533A\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4E8C\u8005\u8BED\u6CD5\u529F\u80FD\u4E0D\u5B58\u5728\u51B2\u7A81\uFF0C\u540C\u65F6\u8BBE\u7F6E\u5BF9\u5E94\u7684\u5B50\u53E5/\u5C5E\u6027\u5373\u53EF\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,t.jsxs)(e.p,{children:["\u9700\u8981\u5BF9\u5206\u533A\u751F\u547D\u5468\u671F\u8BBE\u9650\u7684\u573A\u666F\uFF0C\u53EF\u4EE5",(0,t.jsx)(e.strong,{children:"\u5C06 Dynamic Partition \u7684\u521B\u5EFA\u529F\u80FD\u5173\u95ED\uFF0C\u521B\u5EFA\u5206\u533A\u5B8C\u5168\u4EA4\u7531 Auto Partition \u5B8C\u6210"}),"\uFF0C\u901A\u8FC7 Dynamic Partition \u52A8\u6001\u56DE\u6536\u5206\u533A\u7684\u529F\u80FD\u5B8C\u6210\u5206\u533A\u751F\u547D\u5468\u671F\u7684\u7BA1\u7406\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'create table auto_dynamic(\n    k0 datetime(6) NOT NULL\n)\nauto partition by range (date_trunc(k0, \'year\'))\n(\n)\nDISTRIBUTED BY HASH(`k0`) BUCKETS 2\nproperties(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.start" = "-50",\n    "dynamic_partition.end" = "0", --- Dynamic Partition \u4E0D\u521B\u5EFA\u5206\u533A\n    "dynamic_partition.time_unit" = "year",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8FD9\u6837\u6211\u4EEC\u540C\u65F6\u5177\u6709\u4E86 Auto Partition \u7684\u7075\u6D3B\u6027\uFF0C\u4E14\u5206\u533A\u540D\u4E0A\u4FDD\u6301\u4E86\u4E00\u81F4\u6027\u3002"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u5728 2.1.7 \u4E4B\u524D\u7684\u67D0\u4E9B\u65E9\u671F\u7248\u672C\uFF0C\u8BE5\u529F\u80FD\u672A\u7981\u6B62\u4F46\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5206\u533A\u7BA1\u7406",children:"\u5206\u533A\u7BA1\u7406"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["\u81EA 2.1.6 \u8D77\uFF0CDoris \u652F\u6301 ",(0,t.jsx)(e.code,{children:"partitions"})," \u8868\u51FD\u6570\u548C ",(0,t.jsx)(e.code,{children:"auto_partition_name"})," \u51FD\u6570\uFF0C\u7528\u4E8E\u65B9\u4FBF\u5730\u5BF9\u6570\u636E\u627E\u5230\u5BF9\u5E94\u5206\u533A\uFF0C\u5E76\u8FDB\u884C\u7BA1\u7406\u3002"]})}),"\n",(0,t.jsxs)(e.p,{children:["\u5F53\u542F\u7528\u81EA\u52A8\u5206\u533A\u540E\uFF0C\u5206\u533A\u540D\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(e.code,{children:"auto_partition_name"})," \u51FD\u6570\u6620\u5C04\u5230\u5206\u533A\u3002",(0,t.jsx)(e.code,{children:"partitions"})," \u8868\u51FD\u6570\u53EF\u4EE5\u901A\u8FC7\u5206\u533A\u540D\u4EA7\u751F\u8BE6\u7EC6\u7684\u5206\u533A\u4FE1\u606F\u3002\u4ECD\u7136\u4EE5 ",(0,t.jsx)(e.code,{children:"DAILY_TRADE_VALUE"})," \u8868\u4E3A\u4F8B\uFF0C\u5728\u6211\u4EEC\u63D2\u5165\u6570\u636E\u540E\uFF0C\u67E5\u770B\u5176\u5F53\u524D\u5206\u533A\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> select * from partitions("catalog"="internal","database"="optest","table"="DAILY_TRADE_VALUE") where PartitionName = auto_partition_name(\'range\', \'year\', \'2008-02-03\');\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n| PartitionId | PartitionName   | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize  | IsInMemory | ReplicaAllocation       | IsMutable | SyncWithBaseTables | UnsyncTables |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n|      127095 | p20080101000000 |              2 | 2024-11-14 17:29:02 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2008-01-01]; ..types: [DATEV2]; keys: [2009-01-01]; ) | TRADE_DATE      |      10 |              1 | HDD           | 9999-12-31 23:59:59 |                     | \\N                       | 985.000 B |          0 | tag.location.default: 1 |         1 |                  1 | \\N           |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+-----------+------------+-------------------------+-----------+--------------------+--------------+\n1 row in set (0.18 sec)\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u8FD9\u6837\u6BCF\u4E2A\u5206\u533A\u7684 ID \u548C\u53D6\u503C\u5C31\u53EF\u4EE5\u7CBE\u51C6\u5730\u88AB\u7B5B\u9009\u51FA\uFF0C\u7528\u4E8E\u540E\u7EED\u9488\u5BF9\u5206\u533A\u7684\u5177\u4F53\u64CD\u4F5C\uFF08\u4F8B\u5982 ",(0,t.jsx)(e.code,{children:"insert overwrite partition"}),"\uFF09\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8BE6\u7EC6\u8BED\u6CD5\u8BF4\u660E\u8BF7\u89C1\uFF1A",(0,t.jsx)(e.a,{href:"../../sql-manual/sql-functions/string-functions/auto-partition-name",children:"auto_partition_name\u51FD\u6570\u6587\u6863"}),"\uFF0C",(0,t.jsx)(e.a,{href:"../../sql-manual/sql-functions/table-valued-functions/partitions",children:"partitions\u8868\u51FD\u6570\u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5982\u540C\u666E\u901A\u5206\u533A\u8868\u4E00\u6837\uFF0CAUTO LIST PARTITION \u652F\u6301\u591A\u5217\u5206\u533A\uFF0C\u8BED\u6CD5\u5E76\u65E0\u533A\u522B\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5728\u6570\u636E\u7684\u63D2\u5165\u6216\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u5982\u679C\u521B\u5EFA\u4E86\u5206\u533A\uFF0C\u800C\u6574\u4E2A\u5BFC\u5165\u8FC7\u7A0B\u6CA1\u6709\u5B8C\u6210\uFF08\u5931\u8D25\u6216\u88AB\u53D6\u6D88\uFF09\uFF0C\u88AB\u521B\u5EFA\u7684\u5206\u533A\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u4F7F\u7528 AUTO PARTITION \u7684\u8868\uFF0C\u53EA\u662F\u5206\u533A\u521B\u5EFA\u65B9\u5F0F\u4E0A\u7531\u624B\u52A8\u8F6C\u4E3A\u4E86\u81EA\u52A8\u3002\u8868\u53CA\u5176\u6240\u521B\u5EFA\u5206\u533A\u7684\u539F\u672C\u4F7F\u7528\u65B9\u6CD5\u90FD\u4E0E\u975E AUTO PARTITION \u7684\u8868\u6216\u5206\u533A\u76F8\u540C\u3002"}),"\n",(0,t.jsxs)(e.li,{children:["\u4E3A\u9632\u6B62\u610F\u5916\u521B\u5EFA\u8FC7\u591A\u5206\u533A\uFF0C\u6211\u4EEC\u901A\u8FC7",(0,t.jsx)(e.a,{href:"../../admin-manual/config/fe-config",children:"FE \u914D\u7F6E\u9879"}),"\u4E2D\u7684",(0,t.jsx)(e.code,{children:"max_auto_partition_num"}),"\u63A7\u5236\u4E86\u4E00\u4E2A AUTO PARTITION \u8868\u6700\u5927\u5BB9\u7EB3\u5206\u533A\u6570\u3002\u5982\u6709\u9700\u8981\u53EF\u4EE5\u8C03\u6574\u8BE5\u503C"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5411\u5F00\u542F\u4E86 AUTO PARTITION \u7684\u8868\u5BFC\u5165\u6570\u636E\u65F6\uFF0CCoordinator \u53D1\u9001\u6570\u636E\u7684\u8F6E\u8BE2\u95F4\u9694\u4E0E\u666E\u901A\u8868\u6709\u6240\u4E0D\u540C\u3002\u5177\u4F53\u8BF7\u89C1",(0,t.jsx)(e.a,{href:"../../admin-manual/config/be-config",children:"BE \u914D\u7F6E\u9879"}),"\u4E2D\u7684",(0,t.jsx)(e.code,{children:"olap_table_sink_send_interval_auto_partition_factor"}),"\u3002\u5F00\u542F\u524D\u79FB\uFF08",(0,t.jsx)(e.code,{children:"enable_memtable_on_sink_node = true"}),"\uFF09\u540E\u8BE5\u53D8\u91CF\u4E0D\u4EA7\u751F\u5F71\u54CD\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728\u4F7F\u7528",(0,t.jsx)(e.a,{href:"../../sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE",children:"insert-overwrite"}),"\u63D2\u5165\u6570\u636E\u65F6 AUTO PARTITION \u8868\u7684\u884C\u4E3A\u8BE6\u89C1 INSERT OVERWRITE \u6587\u6863\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u5BFC\u5165\u521B\u5EFA\u5206\u533A\u65F6\uFF0C\u8BE5\u8868\u6D89\u53CA\u5176\u4ED6\u5143\u6570\u636E\u64CD\u4F5C\uFF08\u5982 Schema Change\u3001Rebalance\uFF09\uFF0C\u5219\u5BFC\u5165\u53EF\u80FD\u5931\u8D25\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(e.p,{children:"AUTO, PARTITION, AUTO_PARTITION"})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(T,{...n})}):T(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return s}});var l=i(667294);let t={},a=l.createContext(t);function s(n){let e=l.useContext(a);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);