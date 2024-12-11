"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["538835"],{958489:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"gettingStarted/tutorials/building-lakehouse/doris-iceberg","title":"\u4F7F\u7528 Doris \u548C Iceberg","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/gettingStarted/tutorials/building-lakehouse/doris-iceberg.md","sourceDirName":"gettingStarted/tutorials/building-lakehouse","slug":"/gettingStarted/tutorials/building-lakehouse/doris-iceberg","permalink":"/zh-CN/docs/3.0/gettingStarted/tutorials/building-lakehouse/doris-iceberg","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4F7F\u7528 Doris \u548C Iceberg","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Doris \u548C Paimon","permalink":"/zh-CN/docs/3.0/gettingStarted/tutorials/building-lakehouse/doris-paimon"},"next":{"title":"\u4F7F\u7528 Doris \u548C LakeSoul","permalink":"/zh-CN/docs/3.0/gettingStarted/tutorials/building-lakehouse/doris-lakesoul"}}'),i=s("785893"),t=s("250065");let a={title:"\u4F7F\u7528 Doris \u548C Iceberg",language:"zh-CN"},d=void 0,c={},l=[{value:"Apache Doris &amp; Iceberg",id:"apache-doris--iceberg",level:2},{value:"\u4F7F\u7528\u6307\u5357",id:"\u4F7F\u7528\u6307\u5357",level:2},{value:"01 \u73AF\u5883\u51C6\u5907",id:"01-\u73AF\u5883\u51C6\u5907",level:3},{value:"02 \u73AF\u5883\u90E8\u7F72",id:"02-\u73AF\u5883\u90E8\u7F72",level:3},{value:"03 \u521B\u5EFA Iceberg \u8868",id:"03-\u521B\u5EFA-iceberg-\u8868",level:3},{value:"04 \u6570\u636E\u5199\u5165",id:"04-\u6570\u636E\u5199\u5165",level:3},{value:"05 \u6570\u636E\u67E5\u8BE2",id:"05-\u6570\u636E\u67E5\u8BE2",level:3},{value:"06 Time Travel",id:"06-time-travel",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u4F5C\u4E3A\u4E00\u79CD\u5168\u65B0\u7684\u5F00\u653E\u5F0F\u7684\u6570\u636E\u7BA1\u7406\u67B6\u6784\uFF0C\u6E56\u4ED3\u4E00\u4F53\uFF08Data Lakehouse\uFF09\u878D\u5408\u4E86\u6570\u636E\u4ED3\u5E93\u7684\u9AD8\u6027\u80FD\u3001\u5B9E\u65F6\u6027\u4EE5\u53CA\u6570\u636E\u6E56\u7684\u4F4E\u6210\u672C\u3001\u7075\u6D3B\u6027\u7B49\u4F18\u52BF\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u52A0\u4FBF\u6377\u5730\u6EE1\u8DB3\u5404\u79CD\u6570\u636E\u5904\u7406\u5206\u6790\u7684\u9700\u6C42\uFF0C\u5728\u4F01\u4E1A\u7684\u5927\u6570\u636E\u4F53\u7CFB\u4E2D\u5DF2\u7ECF\u5F97\u5230\u8D8A\u6765\u8D8A\u591A\u7684\u5E94\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8FC7\u53BB\u591A\u4E2A\u7248\u672C\u4E2D\uFF0CApache Doris \u6301\u7EED\u52A0\u6DF1\u4E0E\u6570\u636E\u6E56\u7684\u878D\u5408\uFF0C\u5F53\u524D\u5DF2\u6F14\u8FDB\u51FA\u4E00\u5957\u6210\u719F\u7684\u6E56\u4ED3\u4E00\u4F53\u89E3\u51B3\u65B9\u6848\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u81EA 0.15 \u7248\u672C\u8D77\uFF0CApache Doris \u5F15\u5165 Hive \u548C Iceberg \u5916\u90E8\u8868\uFF0C\u5C1D\u8BD5\u5728 Apache Iceberg \u4E4B\u4E0A\u63A2\u7D22\u4E0E\u6570\u636E\u6E56\u7684\u80FD\u529B\u7ED3\u5408\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u81EA 1.2 \u7248\u672C\u8D77\uFF0CApache Doris \u6B63\u5F0F\u5F15\u5165 Multi-Catalog \u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u591A\u79CD\u6570\u636E\u6E90\u7684\u81EA\u52A8\u5143\u6570\u636E\u6620\u5C04\u548C\u6570\u636E\u8BBF\u95EE\u3001\u5E76\u5BF9\u5916\u90E8\u6570\u636E\u8BFB\u53D6\u548C\u67E5\u8BE2\u6267\u884C\u7B49\u65B9\u9762\u505A\u4E86\u8BF8\u591A\u6027\u80FD\u4F18\u5316\uFF0C\u5B8C\u5168\u5177\u5907\u4E86\u6784\u5EFA\u6781\u901F\u6613\u7528 Lakehouse \u67B6\u6784\u7684\u80FD\u529B\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728 2.1 \u7248\u672C\u4E2D\uFF0CApache Doris \u6E56\u4ED3\u4E00\u4F53\u67B6\u6784\u5F97\u5230\u5168\u9762\u52A0\u5F3A\uFF0C\u4E0D\u4EC5\u589E\u5F3A\u4E86\u4E3B\u6D41\u6570\u636E\u6E56\u683C\u5F0F\uFF08Hudi\u3001Iceberg\u3001Paimon \u7B49\uFF09\u7684\u8BFB\u53D6\u548C\u5199\u5165\u80FD\u529B\uFF0C\u8FD8\u5F15\u5165\u4E86\u591A SQL \u65B9\u8A00\u517C\u5BB9\u3001\u53EF\u4ECE\u539F\u6709\u7CFB\u7EDF\u65E0\u7F1D\u5207\u6362\u81F3 Apache Doris\u3002\u5728\u6570\u636E\u79D1\u5B66\u53CA\u5927\u89C4\u6A21\u6570\u636E\u8BFB\u53D6\u573A\u666F\u4E0A\uFF0CDoris \u96C6\u6210\u4E86 Arrow Flight \u9AD8\u901F\u8BFB\u53D6\u63A5\u53E3\uFF0C\u4F7F\u5F97\u6570\u636E\u4F20\u8F93\u6548\u7387\u5B9E\u73B0 100 \u500D\u7684\u63D0\u5347\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u4F7F\u7528 Doris \u548C Iceberg \u6784\u5EFA Lakehouse",src:s(317610).Z+"",width:"2560",height:"1280"})}),"\n",(0,i.jsx)(n.h2,{id:"apache-doris--iceberg",children:"Apache Doris & Iceberg"}),"\n",(0,i.jsx)(n.p,{children:"Apache Iceberg \u662F\u4E00\u79CD\u5F00\u6E90\u3001\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u9760\u7684\u6570\u636E\u6E56\u8868\u683C\u5F0F\uFF0C\u53EF\u5B9E\u73B0\u8D85\u5927\u89C4\u6A21\u6570\u636E\u7684\u5206\u6790\u4E0E\u7BA1\u7406\u3002\u5B83\u652F\u6301 Apache Doris \u5728\u5185\u7684\u591A\u79CD\u4E3B\u6D41\u67E5\u8BE2\u5F15\u64CE\uFF0C\u517C\u5BB9 HDFS \u4EE5\u53CA\u5404\u79CD\u5BF9\u8C61\u4E91\u5B58\u50A8\uFF0C\u5177\u5907 ACID\u3001Schema \u6F14\u8FDB\u3001\u9AD8\u7EA7\u8FC7\u6EE4\u3001\u9690\u85CF\u5206\u533A\u548C\u5206\u533A\u5E03\u5C40\u6F14\u8FDB\u7B49\u7279\u6027\uFF0C\u53EF\u786E\u4FDD\u9AD8\u6027\u80FD\u67E5\u8BE2\u4EE5\u53CA\u6570\u636E\u7684\u53EF\u9760\u6027\u53CA\u4E00\u81F4\u6027\uFF0C\u5176\u65F6\u95F4\u65C5\u884C\u548C\u7248\u672C\u56DE\u6EDA\u529F\u80FD\u4E5F\u4E3A\u6570\u636E\u7BA1\u7406\u5E26\u6765\u8F83\u9AD8\u7684\u7075\u6D3B\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Apache Doris \u5BF9 Iceberg \u591A\u9879\u6838\u5FC3\u7279\u6027\u63D0\u4F9B\u4E86\u539F\u751F\u652F\u6301\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u652F\u6301 Hive Metastore\u3001Hadoop\u3001REST\u3001Glue\u3001Google Dataproc Metastore\u3001DLF \u7B49\u591A\u79CD Iceberg Catalog \u7C7B\u578B\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u539F\u751F\u652F\u6301 Iceberg V1/V2 \u8868\u683C\u5F0F\uFF0C\u4EE5\u53CA  Position Delete\u3001Equality Delete \u6587\u4EF6\u7684\u8BFB\u53D6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u652F\u6301\u901A\u8FC7\u8868\u51FD\u6570\u67E5\u8BE2 Iceberg \u8868\u5FEB\u7167\u5386\u53F2\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u652F\u6301\u65F6\u95F4\u65C5\u884C\uFF08Time Travel\uFF09\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u539F\u751F\u652F\u6301 Iceberg \u8868\u5F15\u64CE\u3002\u53EF\u4EE5\u901A\u8FC7 Apache Doris \u76F4\u63A5\u521B\u5EFA\u3001\u7BA1\u7406\u4EE5\u53CA\u5C06\u6570\u636E\u5199\u5165\u5230 Iceberg \u8868\u3002\u652F\u6301\u5B8C\u5584\u7684\u5206\u533A Transform \u51FD\u6570\uFF0C\u4ECE\u800C\u63D0\u4F9B\u9690\u85CF\u5206\u533A\u548C\u5206\u533A\u5E03\u5C40\u6F14\u8FDB\u7B49\u80FD\u529B\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u57FA\u4E8E Apache Doris + Apache Iceberg \u5FEB\u901F\u6784\u5EFA\u9AD8\u6548\u7684\u6E56\u4ED3\u4E00\u4F53\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u7075\u6D3B\u5E94\u5BF9\u5B9E\u65F6\u6570\u636E\u5206\u6790\u4E0E\u5904\u7406\u7684\u5404\u79CD\u9700\u6C42\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 Doris \u9AD8\u6027\u80FD\u67E5\u8BE2\u5F15\u64CE\u5BF9 Iceberg \u8868\u6570\u636E\u548C\u5176\u4ED6\u6570\u636E\u6E90\u8FDB\u884C\u5173\u8054\u6570\u636E\u5206\u6790\uFF0C\u6784\u5EFA",(0,i.jsx)(n.strong,{children:"\u7EDF\u4E00\u7684\u8054\u90A6\u6570\u636E\u5206\u6790\u5E73\u53F0"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 Doris \u76F4\u63A5\u7BA1\u7406\u548C\u6784\u5EFA Iceberg \u8868\uFF0C\u5728 Doris \u4E2D\u5B8C\u6210\u5BF9\u6570\u636E\u7684\u6E05\u6D17\u3001\u52A0\u5DE5\u5E76\u5199\u5165\u5230 Iceberg \u8868\uFF0C\u6784\u5EFA",(0,i.jsx)(n.strong,{children:"\u7EDF\u4E00\u7684\u6E56\u4ED3\u6570\u636E\u5904\u7406\u5E73\u53F0"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 Iceberg \u8868\u5F15\u64CE\uFF0C\u5C06 Doris \u6570\u636E\u5171\u4EAB\u7ED9\u5176\u4ED6\u4E0A\u4E0B\u6E38\u7CFB\u7EDF\u505A\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u6784\u5EFA",(0,i.jsx)(n.strong,{children:"\u7EDF\u4E00\u7684\u5F00\u653E\u6570\u636E\u5B58\u50A8\u5E73\u53F0"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672A\u6765\uFF0CApache Iceberg \u5C06\u4F5C\u4E3A Apache Doris \u7684\u539F\u751F\u8868\u5F15\u64CE\u4E4B\u4E00\uFF0C\u63D0\u4F9B\u66F4\u52A0\u5B8C\u5584\u7684\u6E56\u683C\u5F0F\u6570\u636E\u7684\u5206\u6790\u3001\u7BA1\u7406\u529F\u80FD\u3002Apache Doris \u4E5F\u5C06\u9010\u6B65\u652F\u6301\u5305\u62EC Update/Delete/Merge\u3001\u5199\u56DE\u65F6\u6392\u5E8F\u3001\u589E\u91CF\u6570\u636E\u8BFB\u53D6\u3001\u5143\u6570\u636E\u7BA1\u7406\u7B49 Apache Iceberg \u66F4\u591A\u9AD8\u7EA7\u7279\u6027\uFF0C\u5171\u540C\u6784\u5EFA\u7EDF\u4E00\u3001\u9AD8\u6027\u80FD\u3001\u5B9E\u65F6\u7684\u6E56\u4ED3\u5E73\u53F0\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4E8E\u66F4\u591A\u8BF4\u660E\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/3.0/lakehouse/datalake-analytics/iceberg",children:"Iceberg Catalog"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u6307\u5357",children:"\u4F7F\u7528\u6307\u5357"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u8BB2\u89E3\u5982\u4F55\u5728 Docker \u73AF\u5883\u4E0B\u5FEB\u901F\u642D\u5EFA Apache Doris + Apache Iceberg \u6D4B\u8BD5 & \u6F14\u793A\u73AF\u5883\uFF0C\u5E76\u5C55\u793A\u5404\u529F\u80FD\u7684\u4F7F\u7528\u64CD\u4F5C\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u672C\u6587\u6D89\u53CA\u6240\u6709\u811A\u672C\u548C\u4EE3\u7801\u53EF\u4EE5\u4ECE\u8BE5\u5730\u5740\u83B7\u53D6\uFF1A",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon",children:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"})]}),"\n",(0,i.jsx)(n.h3,{id:"01-\u73AF\u5883\u51C6\u5907",children:"01 \u73AF\u5883\u51C6\u5907"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u6587\u793A\u4F8B\u91C7\u7528 Docker Compose \u90E8\u7F72\uFF0C\u7EC4\u4EF6\u53CA\u7248\u672C\u53F7\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7EC4\u4EF6\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u7248\u672C"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Doris"}),(0,i.jsx)(n.td,{children:"\u9ED8\u8BA4 2.1.5\uFF0C\u53EF\u4FEE\u6539"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Iceberg"}),(0,i.jsx)(n.td,{children:"1.4.3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MinIO"}),(0,i.jsx)(n.td,{children:"RELEASE.2024-04-29T09-56-05Z"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"02-\u73AF\u5883\u90E8\u7F72",children:"02 \u73AF\u5883\u90E8\u7F72"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u6240\u6709\u7EC4\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"bash ./start_all.sh"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u811A\u672C\uFF0C\u767B\u9646 Doris \u547D\u4EE4\u884C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- login doris\nbash ./start_doris_client.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"03-\u521B\u5EFA-iceberg-\u8868",children:"03 \u521B\u5EFA Iceberg \u8868"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\u767B\u9646 Doris \u547D\u4EE4\u884C\u540E\uFF0CDoris \u96C6\u7FA4\u4E2D\u5DF2\u7ECF\u521B\u5EFA\u4E86\u540D\u4E3A Iceberg \u7684 Catalog\uFF08\u53EF\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"SHOW CATALOGS"}),"/",(0,i.jsx)(n.code,{children:"SHOW CREATE CATALOG iceberg"})," \u67E5\u770B\uFF09\u3002\u4EE5\u4E0B\u4E3A\u8BE5 Catalog \u7684\u521B\u5EFA\u8BED\u53E5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'-- \u5DF2\u521B\u5EFA\uFF0C\u65E0\u9700\u6267\u884C\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "warehouse" = "s3://warehouse/",\n    "uri" = "http://rest:8181",\n    "s3.access_key" = "admin",\n    "s3.secret_key" = "password",\n    "s3.endpoint" = "http://minio:9000"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Iceberg Catalog \u521B\u5EFA\u6570\u636E\u5E93\u548C Iceberg \u8868\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> SWITCH iceberg;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> CREATE DATABASE nyc;\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> CREATE TABLE iceberg.nyc.taxis\n       (\n           vendor_id BIGINT,\n           trip_id BIGINT,\n           trip_distance FLOAT,\n           fare_amount DOUBLE,\n           store_and_fwd_flag STRING,\n           ts DATETIME\n       )\n       PARTITION BY LIST (vendor_id, DAY(ts)) ()\n       PROPERTIES (\n           "compression-codec" = "zstd",\n           "write-format" = "parquet"\n       );\nQuery OK, 0 rows affected (0.15 sec)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"04-\u6570\u636E\u5199\u5165",children:"04 \u6570\u636E\u5199\u5165"}),"\n",(0,i.jsx)(n.p,{children:"\u5411 Iceberg \u8868\u4E2D\u63D2\u5165\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO iceberg.nyc.taxis\n       VALUES\n        (1, 1000371, 1.8, 15.32, 'N', '2024-01-01 9:15:23'),\n        (2, 1000372, 2.5, 22.15, 'N', '2024-01-02 12:10:11'),\n        (2, 1000373, 0.9, 9.01, 'N', '2024-01-01 3:25:15'),\n        (1, 1000374, 8.4, 42.13, 'Y', '2024-01-03 7:12:33');\nQuery OK, 4 rows affected (1.61 sec)\n{'status':'COMMITTED', 'txnId':'10085'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"CREATE TABLE AS SELECT"})," \u6765\u521B\u5EFA\u4E00\u5F20 Iceberg \u8868\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> CREATE TABLE iceberg.nyc.taxis2 AS SELECT * FROM iceberg.nyc.taxis;\nQuery OK, 6 rows affected (0.25 sec)\n{'status':'COMMITTED', 'txnId':'10088'}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"05-\u6570\u636E\u67E5\u8BE2",children:"05 \u6570\u636E\u67E5\u8BE2"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7B80\u5355\u67E5\u8BE2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.37 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis2;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.35 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5206\u533A\u526A\u88C1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n1 row in set (0.06 sec)\n\nmysql> EXPLAIN VERBOSE SELECT * FROM iceberg.nyc.taxis where vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02';\n                                                                                                                                                             \n....                                                                                                                                                                                  \n|   0:VICEBERG_SCAN_NODE(71)                                                                                                                                                          \n|      table: taxis                                                                                                                                                                   \n|      predicates: (ts[#5] < '2024-01-02 00:00:00'), (vendor_id[#0] = 2), (ts[#5] >= '2024-01-01 00:00:00')                                                                           \n|      inputSplitNum=1, totalFileSize=3539, scanRanges=1                                                                                                                              \n|      partition=1/0                                                                                                                                                                  \n|      backends:                                                                                                                                                                      \n|        10002                                                                                                                                                                        \n|          s3://warehouse/wh/nyc/taxis/data/vendor_id=2/ts_day=2024-01-01/40e6ca404efa4a44-b888f23546d3a69c_5708e229-2f3d-4b68-a66b-44298a9d9815-0.zstd.parquet start: 0 length: 3539 \n|      cardinality=6, numNodes=1                                                                                                                                                      \n|      pushdown agg=NONE                                                                                                                                                              \n|      icebergPredicatePushdown=                                                                                                                                                      \n|           ref(name=\"ts\") < 1704153600000000                                                                                                                                         \n|           ref(name=\"vendor_id\") == 2                                                                                                                                                \n|           ref(name=\"ts\") >= 1704067200000000                                                                                                                                        \n....\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"EXPLAIN VERBOSE"})," \u8BED\u53E5\u7684\u7ED3\u679C\u53EF\u77E5\uFF0C",(0,i.jsx)(n.code,{children:"vendor_id = 2 and ts >= '2024-01-01' and ts < '2024-01-02'"})," \u8C13\u8BCD\u6761\u4EF6\uFF0C\u6700\u7EC8\u53EA\u547D\u4E2D\u4E00\u4E2A\u5206\u533A\uFF08",(0,i.jsx)(n.code,{children:"partition=1/0"}),"\uFF09\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u65F6\u4E5F\u53EF\u77E5\uFF0C\u56E0\u4E3A\u5728\u5EFA\u8868\u65F6\u6307\u5B9A\u4E86\u5206\u533A Transform \u51FD\u6570 ",(0,i.jsx)(n.code,{children:"DAY(ts)"}),"\uFF0C\u539F\u59CB\u6570\u636E\u4E2D\u7684\u7684\u503C ",(0,i.jsx)(n.code,{children:"2024-01-01 03:25:15.000000"})," \u4F1A\u88AB\u8F6C\u6362\u6210\u6587\u4EF6\u76EE\u5F55\u4E2D\u7684\u5206\u533A\u4FE1\u606F ",(0,i.jsx)(n.code,{children:"ts_day=2024-01-01"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"06-time-travel",children:"06 Time Travel"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u5148\u518D\u6B21\u63D2\u5165\u51E0\u884C\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO iceberg.nyc.taxis VALUES (1, 1000375, 8.8, 55.55, 'Y', '2024-01-01 8:10:22'), (3, 1000376, 7.4, 32.35, 'N', '2024-01-02  1:14:45');\nQuery OK, 2 rows affected (0.17 sec)\n{'status':'COMMITTED', 'txnId':'10086'}\n\nmysql> SELECT * FROM iceberg.nyc.taxis;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.11 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"iceberg_meta"})," \u8868\u51FD\u6570\u67E5\u8BE2\u8868\u7684\u5FEB\u7167\u4FE1\u606F\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> select * from iceberg_meta("table" = "iceberg.nyc.taxis", "query_type" = "snapshots");\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| committed_at        | snapshot_id         | parent_id           | operation | manifest_list                                                                                             | summary                                                                                                                                                                                                                                                        |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 2024-07-29 03:38:22 | 8483933166442433486 |                  -1 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-8483933166442433486-1-5f7b7736-8022-4ba1-9db2-51ae7553be4d.avro | {"added-data-files":"4","added-records":"4","added-files-size":"14156","changed-partition-count":"4","total-records":"4","total-files-size":"14156","total-data-files":"4","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"} |\n| 2024-07-29 03:40:23 | 4726331391239920914 | 8483933166442433486 | append    | s3://warehouse/wh/nyc/taxis/metadata/snap-4726331391239920914-1-6aa3d142-6c9c-4553-9c04-08ad4d49a4ea.avro | {"added-data-files":"2","added-records":"2","added-files-size":"7078","changed-partition-count":"2","total-records":"6","total-files-size":"21234","total-data-files":"6","total-delete-files":"0","total-position-deletes":"0","total-equality-deletes":"0"}  |\n+---------------------+---------------------+---------------------+-----------+-----------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n2 rows in set (0.07 sec)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"FOR VERSION AS OF"})," \u8BED\u53E5\u67E5\u8BE2\u6307\u5B9A\u5FEB\u7167\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 8483933166442433486;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR VERSION AS OF 4726331391239920914;\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000375 |           8.8 |       55.55 | Y                  | 2024-01-01 08:10:22.000000 |\n|         3 | 1000376 |           7.4 |       32.35 | N                  | 2024-01-02 01:14:45.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n6 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"FOR TIME AS OF"})," \u8BED\u53E5\u67E5\u8BE2\u6307\u5B9A\u5FEB\u7167\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:38:23";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.04 sec)\n\nmysql> SELECT * FROM iceberg.nyc.taxis FOR TIME AS OF "2024-07-29 03:40:22";\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n| vendor_id | trip_id | trip_distance | fare_amount | store_and_fwd_flag | ts                         |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n|         2 | 1000373 |           0.9 |        9.01 | N                  | 2024-01-01 03:25:15.000000 |\n|         1 | 1000374 |           8.4 |       42.13 | Y                  | 2024-01-03 07:12:33.000000 |\n|         2 | 1000372 |           2.5 |       22.15 | N                  | 2024-01-02 12:10:11.000000 |\n|         1 | 1000371 |           1.8 |       15.32 | N                  | 2024-01-01 09:15:23.000000 |\n+-----------+---------+---------------+-------------+--------------------+----------------------------+\n4 rows in set (0.05 sec)\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},317610:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/lakehouse-architecture-for-doris-and-iceberg-f68e6dce7852461952c5bf7ba5efae25.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var r=s(667294);let i={},t=r.createContext(i);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);