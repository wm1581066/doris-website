"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["6511"],{510606:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>o,assets:()=>h,toc:()=>a,frontMatter:()=>c});var i=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.2","title":"Release 1.2.2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/v1.2/release-1.2.2.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.2","permalink":"/zh-CN/docs/dev/releasenotes/v1.2/release-1.2.2","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release 1.2.2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 1.2.3","permalink":"/zh-CN/docs/dev/releasenotes/v1.2/release-1.2.3"},"next":{"title":"Release 1.2.1","permalink":"/zh-CN/docs/dev/releasenotes/v1.2/release-1.2.1"}}'),l=s("785893"),r=s("250065");let c={title:"Release 1.2.2",language:"zh-CN"},d="New Feature",h={},a=[{value:"\u6570\u636E\u6E56\u5206\u6790",id:"\u6570\u636E\u6E56\u5206\u6790",level:3},{value:"\u81EA\u52A8\u5206\u6876\u63A8\u7B97",id:"\u81EA\u52A8\u5206\u6876\u63A8\u7B97",level:3},{value:"\u65B0\u589E\u51FD\u6570",id:"\u65B0\u589E\u51FD\u6570",level:3},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7981\u7528 BE \u7684 Page Cache",id:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7981\u7528-be-\u7684-page-cache",level:3},{value:"\u589E\u52A0\u65B0 Session \u53D8\u91CF <code>group_by_and_having_use_alias_first</code>",id:"\u589E\u52A0\u65B0-session-\u53D8\u91CF-group_by_and_having_use_alias_first",level:3},{value:"Compaction \u4F18\u5316",id:"compaction-\u4F18\u5316",level:3},{value:"\u6570\u636E\u6E56\u5206\u6790",id:"\u6570\u636E\u6E56\u5206\u6790-1",level:3},{value:"\u5176\u4ED6",id:"\u5176\u4ED6",level:3}];function t(e){let n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5728 1.2.2 \u7248\u672C\u4E2D\uFF0CDoris \u56E2\u961F\u5DF2\u7ECF\u4FEE\u590D\u4E86\u81EA 1.2.1 \u7248\u672C\u53D1\u5E03\u4EE5\u6765\u8D85\u8FC7 200 \u4E2A\u95EE\u9898\u6216\u6027\u80FD\u6539\u8FDB\u9879\u3002\u540C\u65F6\uFF0C1.2.2 \u7248\u672C\u4E5F\u4F5C\u4E3A 1.2.1 \u7684\u8FED\u4EE3\u7248\u672C\uFF0C\u5177\u5907\u66F4\u9AD8\u7684\u7A33\u5B9A\u6027\uFF0C\u5EFA\u8BAE\u6240\u6709\u7528\u6237\u5347\u7EA7\u5230\u8FD9\u4E2A\u7248\u672C\u3002"}),"\n",(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"new-feature",children:"New Feature"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636E\u6E56\u5206\u6790",children:"\u6570\u636E\u6E56\u5206\u6790"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u652F\u6301\u81EA\u52A8\u540C\u6B65 Hive Metastore \u5143\u6570\u636E\u4FE1\u606F\u3002"})," \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5916\u90E8\u6570\u636E\u6E90\u7684\u5143\u6570\u636E\u53D8\u66F4\uFF0C\u5982\u521B\u5EFA\u6216\u5220\u9664\u8868\u3001\u52A0\u51CF\u5217\u7B49\u64CD\u4F5C\u4E0D\u4F1A\u540C\u6B65\u7ED9 Doris\uFF0C\u7528\u6237\u9700\u8981\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"REFRESH CATALOG"})," \u547D\u4EE4\u624B\u52A8\u5237\u65B0\u5143\u6570\u636E\u3002\u5728 1.2.2 \u7248\u672C\u4E2D\u652F\u6301\u81EA\u52A8\u5237\u65B0 Hive Metastore \u5143\u6570\u636E\u4FE1\u606F\uFF0C\u901A\u8FC7\u8BA9 FE \u8282\u70B9\u5B9A\u65F6\u8BFB\u53D6 HMS \u7684 notification event \u6765\u611F\u77E5 Hive \u8868\u5143\u6570\u636E\u7684\u53D8\u66F4\u60C5\u51B5\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u652F\u6301\u8BFB\u53D6 Iceberg Snapshot \u4EE5\u53CA\u67E5\u8BE2 Snapshot \u5386\u53F2\u3002"}),"  \u5728\u6267\u884C Iceberg \u6570\u636E\u5199\u5165\u65F6\uFF0C\u6BCF\u4E00\u6B21\u5199\u64CD\u4F5C\u90FD\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u5FEB\u7167\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u901A\u8FC7 Apache Doris \u8BFB\u53D6 Iceberg \u8868\u4EC5\u4F1A\u8BFB\u53D6\u6700\u65B0\u7248\u672C\u7684\u5FEB\u7167\u3002\u5728 1.2.2 \u7248\u672C\u4E2D\u53EF\u4EE5\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"FOR TIME AS OF"})," \u548C ",(0,l.jsx)(n.code,{children:"FOR VERSION AS OF"})," \u8BED\u53E5\uFF0C\u6839\u636E\u5FEB\u7167 ID \u6216\u8005\u5FEB\u7167\u4EA7\u751F\u7684\u65F6\u95F4\u8BFB\u53D6\u5386\u53F2\u7248\u672C\u7684\u6570\u636E\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 iceberg_meta \u8868\u51FD\u6570\u67E5\u8BE2\u6307\u5B9A\u8868\u7684\u5FEB\u7167\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/iceberg",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/iceberg"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"JDBC Catalog \u652F\u6301 PostgreSQL\u3001Clickhouse\u3001Oracle\u3001SQLServer\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"JDBC Catalog \u652F\u6301 insert into \u64CD\u4F5C\u3002"})," \u5728 Doris \u4E2D\u5EFA\u7ACB JDBC Catalog \u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 insert into \u8BED\u53E5\u76F4\u63A5\u5199\u5165\u6570\u636E\uFF0C\u4E5F\u53EF\u4EE5\u5C06 Doris \u6267\u884C\u5B8C\u67E5\u8BE2\u4E4B\u540E\u7684\u7ED3\u679C\u5199\u5165 JDBC Catalog\uFF0C\u6216\u8005\u662F\u4ECE\u4E00\u4E2A JDBC \u5916\u8868\u5C06\u6570\u636E\u5BFC\u5165\u53E6\u4E00\u4E2A JDBC \u5916\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u81EA\u52A8\u5206\u6876\u63A8\u7B97",children:"\u81EA\u52A8\u5206\u6876\u63A8\u7B97"}),"\n",(0,l.jsxs)(n.p,{children:["\u652F\u6301\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"DISTRIBUTED BY HASH(\u2026\u2026) BUCKETS AUTO"})," \u8BED\u53E5\u8BBE\u7F6E\u81EA\u52A8\u5206\u6876\uFF0C\u7CFB\u7EDF\u5E2E\u52A9\u7528\u6237\u8BBE\u5B9A\u4EE5\u53CA\u4F38\u7F29\u4E0D\u540C\u5206\u533A\u7684\u5206\u6876\u6570\uFF0C\u4F7F\u5206\u6876\u6570\u4FDD\u6301\u5728\u4E00\u4E2A\u76F8\u5BF9\u5408\u9002\u7684\u8303\u56F4\u5185\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/DSyZGJtjQZUYUsvfK0IcCg",children:"https://mp.weixin.qq.com/s/DSyZGJtjQZUYUsvfK0IcCg"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u65B0\u589E\u51FD\u6570",children:"\u65B0\u589E\u51FD\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["\u589E\u52A0\u5F52\u7C7B\u5206\u6790\u51FD\u6570 ",(0,l.jsx)(n.code,{children:"width_bucket"})," \u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description",children:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description"})]}),"\n",(0,l.jsx)(n.h1,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,l.jsx)(n.h3,{id:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7981\u7528-be-\u7684-page-cache",children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7981\u7528 BE \u7684 Page Cache"}),"\n",(0,l.jsxs)(n.p,{children:["\u5173\u95ED\u6B64\u914D\u7F6E\u4EE5\u4F18\u5316\u5185\u5B58\u4F7F\u7528\u5E76\u964D\u4F4E\u5185\u5B58 OOM \u7684\u98CE\u9669\uFF0C\u4F46\u6709\u53EF\u80FD\u589E\u52A0\u4E00\u4E9B\u5C0F\u67E5\u8BE2\u7684\u67E5\u8BE2\u5EF6\u8FDF\u3002\u5982\u679C\u60A8\u5BF9\u67E5\u8BE2\u5EF6\u8FDF\u654F\u611F\uFF0C\u6216\u8005\u5177\u6709\u9AD8\u5E76\u53D1\u5C0F\u67E5\u8BE2\u573A\u666F\uFF0C\u53EF\u4EE5\u914D\u7F6E ",(0,l.jsx)(n.code,{children:"disable_storage_page_cache=false"})," \u4EE5\u518D\u6B21\u542F\u7528 Page Cache\u3002"]}),"\n",(0,l.jsxs)(n.h3,{id:"\u589E\u52A0\u65B0-session-\u53D8\u91CF-group_by_and_having_use_alias_first",children:["\u589E\u52A0\u65B0 Session \u53D8\u91CF ",(0,l.jsx)(n.code,{children:"group_by_and_having_use_alias_first"})]}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u4E8E\u63A7\u5236 group by \u548C having \u8BED\u53E5\u662F\u5426\u4F18\u5148\u4F7F\u7528\u5217\u7684\u522B\u540D\uFF0C\u800C\u975E\u4ECE From \u8BED\u53E5\u91CC\u5BFB\u627E\u5217\u7684\u540D\u5B57\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002"}),"\n",(0,l.jsx)(n.h1,{id:"improvement",children:"Improvement"}),"\n",(0,l.jsx)(n.h3,{id:"compaction-\u4F18\u5316",children:"Compaction \u4F18\u5316"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u652F\u6301 Vetical Compaction"}),"\u3002\u5728\u8FC7\u53BB\u7248\u672C\u4E2D\uFF0C\u5BBD\u5217\u573A\u666F Compaction \u5F80\u5F80\u4F1A\u5E26\u6765\u5927\u91CF\u7684\u5185\u5B58\u5F00\u9500\u3002\u5728 1.2.2 \u7248\u672C\u4E2D\uFF0CVertical Compaction \u91C7\u7528\u4E86\u6309\u5217\u7EC4\u7684\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u5408\u5E76\uFF0C\u5355\u6B21\u5408\u5E76\u53EA\u9700\u8981\u52A0\u8F7D\u90E8\u5206\u5217\u7684\u6570\u636E\uFF0C\u80FD\u591F\u6781\u5927\u51CF\u5C11\u5408\u5E76\u8FC7\u7A0B\u4E2D\u7684\u5185\u5B58\u5360\u7528\u3002\u5728\u5B9E\u9645\u6D4B\u8BD5\u4E2D\uFF0CVertical compaction \u4F7F\u7528\u5185\u5B58\u4EC5\u4E3A\u539F\u6709 compaction \u7B97\u6CD5\u7684 1/10\uFF0C\u540C\u65F6 Compaction \u901F\u7387\u63D0\u534715%\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u652F\u6301 ",(0,l.jsx)(n.strong,{children:"Segment Compaction"}),"\u3002\u5728\u8FC7\u53BB\u7248\u672C\u4E2D\uFF0C\u5F53\u7528\u6237\u5927\u6570\u636E\u91CF\u9AD8\u9891\u5BFC\u5165\u65F6\u53EF\u80FD\u4F1A\u9047\u5230 -238 \u4EE5\u53CA -235 \u95EE\u9898\uFF0CSegment Compaction \u5141\u8BB8\u5728\u5BFC\u5165\u6570\u636E\u7684\u540C\u65F6\u8FDB\u884C\u6570\u636E\u7684\u5408\u5E76\uFF0C\u4EE5\u6709\u6548\u63A7\u5236 Segment \u6587\u4EF6\u7684\u6570\u91CF\uFF0C\u63D0\u5347\u9AD8\u9891\u5BFC\u5165\u7684\u7CFB\u7EDF\u7A33\u5B9A\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/advanced/best-practice/compaction",children:"https://doris.apache.org/docs/dev/advanced/best-practice/compaction"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636E\u6E56\u5206\u6790-1",children:"\u6570\u636E\u6E56\u5206\u6790"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Hive Catalog \u652F\u6301\u8BBF\u95EE Hive 1/2/3 \u7248\u672C\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Hive Catalog \u53EF\u4EE5\u4F7F\u7528 Broker \u8BBF\u95EE\u6570\u636E\u5B58\u50A8\u5728 JuiceFS \u7684 Hive\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Iceberg Catalog \u652F\u6301 Hive Metastore \u548C Rest \u4F5C\u4E3A\u5143\u6570\u636E\u670D\u52A1\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"ES Catalog \u652F\u6301 \u5143\u6570\u636E\u5B57\u6BB5 _id \u5217\u6620\u5C04\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/hive",children:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/hive"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F18\u5316 Iceberg V2 \u8868\u6709\u5927\u91CF\u5220\u9664\u884C\u8BD7\u65F6\u7684\u8BFB\u53D6\u6027\u80FD\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u652F\u6301\u8BFB\u53D6 Schema Evolution \u540E Iceberg \u8868\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Parquet Reader \u6B63\u786E\u5904\u7406\u5217\u540D\u5927\u5C0F\u5199\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5176\u4ED6",children:"\u5176\u4ED6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u652F\u6301\u8BBF\u95EE Hadoop KMS \u52A0\u5BC6\u7684 HDFS \u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u652F\u6301\u53D6\u6D88\u6B63\u5728\u6267\u884C\u7684\u5BFC\u51FA\u4EFB\u52A1\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,l.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",children:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06",(0,l.jsx)(n.code,{children:"explode_split"})," \u51FD\u6570\u6267\u884C\u6548\u7387\u4F18\u5316 1 \u500D\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C06 nullable \u5217\u7684\u8BFB\u53D6\u6027\u80FD\u4F18\u5316 3 \u500D\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4F18\u5316 Memtracker \u7684\u90E8\u5206\u95EE\u9898\uFF0C\u63D0\u9AD8\u5185\u5B58\u7BA1\u7406\u7CBE\u5EA6\uFF0C\u4F18\u5316\u5185\u5B58\u5E94\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"bugfix",children:"BugFix"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4FEE\u590D\u4E86\u4F7F\u7528 Doris-Flink-Connector \u5BFC\u5165\u6570\u636E\u65F6\u7684\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\uFF1B",(0,l.jsx)(n.a,{href:"https://github.com/apache/doris/pull/16430",children:"#16430"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 BE \u53EF\u80FD\u7684\u7EBF\u7A0B\u8C03\u5EA6\u95EE\u9898\uFF0C\u5E76\u51CF\u5C11\u4E86 BE \u7EBF\u7A0B\u8017\u5C3D\u5BFC\u81F4\u7684 Fragment_sent_timeout\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 datetimev2/decivalv3 \u7684\u90E8\u5206\u6B63\u786E\u6027\u548C\u7CBE\u5EA6\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 Light Schema Change \u529F\u80FD\u7684\u5404\u79CD\u5DF2\u77E5\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 bitmap \u7C7B\u578B Runtime Filter \u7684\u5404\u79CD\u6570\u636E\u6B63\u786E\u6027\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 1.2.1 \u7248\u672C\u4E2D\u5F15\u5165\u7684 CSV \u8BFB\u53D6\u6027\u80FD\u5DEE\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 Spark Load \u6570\u636E\u4E0B\u8F7D\u9636\u6BB5\u5BFC\u81F4\u7684 BE OOM \u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86\u4ECE 1.1.x \u7248\u5347\u7EA7\u5230 1.2.x \u7248\u65F6\u53EF\u80FD\u51FA\u73B0\u7684\u5143\u6570\u636E\u517C\u5BB9\u6027\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86\u521B\u5EFA JDBC Catalog \u65F6\u7684\u5143\u6570\u636E\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86\u7531\u4E8E\u5BFC\u5165\u64CD\u4F5C\u5BFC\u81F4\u7684 CPU \u4F7F\u7528\u7387\u9AD8\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86\u5927\u91CF\u5931\u8D25 Broker Load \u4F5C\u4E1A\u5BFC\u81F4\u7684 FE OOM \u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86\u52A0\u8F7D\u6D6E\u70B9\u7C7B\u578B\u65F6\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u590D\u4E86 Stream Load \u4F7F\u7528\u4E24\u9636\u6BB5\u63D0\u4EA4\u65F6\u51FA\u73B0\u7684\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"\u5176\u4ED6-1",children:"\u5176\u4ED6"}),"\n",(0,l.jsxs)(n.p,{children:["\u6DFB\u52A0\u6307\u6807\u4EE5\u67E5\u770B BE \u4E0A\u7684 Rowset \u548C Segment \u603B\u6570\u5B57 ",(0,l.jsx)(n.code,{children:"doris_be_all_rowsets_num"})," \u548C ",(0,l.jsx)(n.code,{children:"doris_be_all_segments_num"})]}),"\n",(0,l.jsx)(n.h1,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,l.jsx)(n.p,{children:"\u6709 53 \u4F4D\u8D21\u732E\u8005\u53C2\u4E0E\u5230 1.2.2 \u7248\u672C\u7684\u5F00\u53D1\u4E0E\u5B8C\u5584\u4E2D\uFF0C\u611F\u8C22\u4ED6\u4EEC\u7684\u4ED8\u51FA\uFF0C\u4ED6\u4EEC\u5206\u522B\u662F\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"@adonis0147"}),"\n",(0,l.jsx)(n.p,{children:"@AshinGau"}),"\n",(0,l.jsx)(n.p,{children:"@BePPPower"}),"\n",(0,l.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,l.jsx)(n.p,{children:"@ByteYue"}),"\n",(0,l.jsx)(n.p,{children:"@caiconghui"}),"\n",(0,l.jsx)(n.p,{children:"@cambyzju"}),"\n",(0,l.jsx)(n.p,{children:"@chenlinzhong"}),"\n",(0,l.jsx)(n.p,{children:"@DarvenDuan"}),"\n",(0,l.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,l.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,l.jsx)(n.p,{children:"@dutyu"}),"\n",(0,l.jsx)(n.p,{children:"@englefly"}),"\n",(0,l.jsx)(n.p,{children:"@freemandealer"}),"\n",(0,l.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,l.jsx)(n.p,{children:"@HappenLee"}),"\n",(0,l.jsx)(n.p,{children:"@Henry2SS"}),"\n",(0,l.jsx)(n.p,{children:"@htyoung"}),"\n",(0,l.jsx)(n.p,{children:"@isHuangXin"}),"\n",(0,l.jsx)(n.p,{children:"@JackDrogon"}),"\n",(0,l.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,l.jsx)(n.p,{children:"@Jibing-Li"}),"\n",(0,l.jsx)(n.p,{children:"@kaka11chen"}),"\n",(0,l.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,l.jsx)(n.p,{children:"@Lchangliang"}),"\n",(0,l.jsx)(n.p,{children:"@LemonLiTree"}),"\n",(0,l.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,l.jsx)(n.p,{children:"@liqing-coder"}),"\n",(0,l.jsx)(n.p,{children:"@luozenglin"}),"\n",(0,l.jsx)(n.p,{children:"@morningman"}),"\n",(0,l.jsx)(n.p,{children:"@morrySnow"}),"\n",(0,l.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,l.jsx)(n.p,{children:"@nextdreamblue"}),"\n",(0,l.jsx)(n.p,{children:"@qidaye"}),"\n",(0,l.jsx)(n.p,{children:"@qzsee"}),"\n",(0,l.jsx)(n.p,{children:"@spaces-X"}),"\n",(0,l.jsx)(n.p,{children:"@stalary"}),"\n",(0,l.jsx)(n.p,{children:"@starocean999"}),"\n",(0,l.jsx)(n.p,{children:"@weizuo93"}),"\n",(0,l.jsx)(n.p,{children:"@wsjz"}),"\n",(0,l.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,l.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,l.jsx)(n.p,{children:"@xy720"}),"\n",(0,l.jsx)(n.p,{children:"@yangzhg"}),"\n",(0,l.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,l.jsx)(n.p,{children:"@yixiutt"}),"\n",(0,l.jsx)(n.p,{children:"@Yukang-Lian"}),"\n",(0,l.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,l.jsx)(n.p,{children:"@zclllyybb"}),"\n",(0,l.jsx)(n.p,{children:"@zddr"}),"\n",(0,l.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,l.jsx)(n.p,{children:"@zhannngchen"}),"\n",(0,l.jsx)(n.p,{children:"@zy-kkk"})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var i=s(667294);let l={},r=i.createContext(l);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);