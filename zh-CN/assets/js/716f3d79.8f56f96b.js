"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["447353"],{180328:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>t});var i=JSON.parse('{"id":"data-operate/delete/table-temp-partition","title":"\u4E34\u65F6\u5206\u533A","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/delete/table-temp-partition.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/table-temp-partition","permalink":"/zh-CN/docs/2.0/data-operate/delete/table-temp-partition","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u4E34\u65F6\u5206\u533A","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8868\u539F\u5B50\u66FF\u6362","permalink":"/zh-CN/docs/2.0/data-operate/delete/atomicity-replace"},"next":{"title":"\u901A\u8FC7 Export \u5BFC\u51FA\u6570\u636E","permalink":"/zh-CN/docs/2.0/data-operate/export/export-manual"}}'),l=s("785893"),r=s("250065");let t={title:"\u4E34\u65F6\u5206\u533A",language:"zh-CN"},d=void 0,c={},a=[{value:"\u6DFB\u52A0\u4E34\u65F6\u5206\u533A",id:"\u6DFB\u52A0\u4E34\u65F6\u5206\u533A",level:2},{value:"\u5220\u9664\u4E34\u65F6\u5206\u533A",id:"\u5220\u9664\u4E34\u65F6\u5206\u533A",level:2},{value:"\u66FF\u6362\u6B63\u5F0F\u5206\u533A",id:"\u66FF\u6362\u6B63\u5F0F\u5206\u533A",level:2},{value:"\u5BFC\u5165\u4E34\u65F6\u5206\u533A",id:"\u5BFC\u5165\u4E34\u65F6\u5206\u533A",level:2},{value:"\u67E5\u8BE2\u4E34\u65F6\u5206\u533A",id:"\u67E5\u8BE2\u4E34\u65F6\u5206\u533A",level:2},{value:"\u548C\u5176\u4ED6\u64CD\u4F5C\u7684\u5173\u7CFB",id:"\u548C\u5176\u4ED6\u64CD\u4F5C\u7684\u5173\u7CFB",level:2}];function p(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Doris \u652F\u6301\u5728\u5206\u533A\u8868\u4E2D\u6DFB\u52A0\u4E34\u65F6\u5206\u533A\uFF0C\u4E34\u65F6\u5206\u533A\u548C\u6B63\u5F0F\u5206\u533A\u4E0D\u540C\u7684\u662F\uFF0C\u4E34\u65F6\u5206\u533A\u4E0D\u4F1A\u88AB\u6B63\u5F0F\u67E5\u8BE2\u67E5\u8BE2\u5230\uFF0C\u53EA\u6709\u901A\u8FC7\u7279\u6B8A\u7684\u67E5\u8BE2\u8BED\u53E5\u624D\u80FD\u67E5\u8BE2\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E34\u65F6\u5206\u533A\u7684\u5206\u533A\u5217\u548C\u6B63\u5F0F\u5206\u533A\u76F8\u540C\uFF0C\u4E14\u4E0D\u53EF\u4FEE\u6539\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E00\u5F20\u8868\u6240\u6709\u4E34\u65F6\u5206\u533A\u4E4B\u95F4\u7684\u5206\u533A\u8303\u56F4\u4E0D\u53EF\u91CD\u53E0\uFF0C\u4F46\u4E34\u65F6\u5206\u533A\u7684\u8303\u56F4\u548C\u6B63\u5F0F\u5206\u533A\u8303\u56F4\u53EF\u4EE5\u91CD\u53E0\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E34\u65F6\u5206\u533A\u7684\u5206\u533A\u540D\u79F0\u4E0D\u80FD\u548C\u6B63\u5F0F\u5206\u533A\u4EE5\u53CA\u5176\u4ED6\u4E34\u65F6\u5206\u533A\u91CD\u590D\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u4E34\u65F6\u5206\u533A\u4E3B\u8981\u7528\u5230\u5982\u4E0B\u573A\u666F\uFF1A"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u539F\u5B50\u7684\u8986\u76D6\u5199\u64CD\u4F5C"}),"\n",(0,l.jsxs)(e.p,{children:["\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u5E0C\u671B\u80FD\u591F\u91CD\u5199\u67D0\u4E00\u5206\u533A\u7684\u6570\u636E\uFF0C\u4F46\u5982\u679C\u91C7\u7528\u5148\u5220\u9664\u518D\u5BFC\u5165\u7684\u65B9\u5F0F\u8FDB\u884C\uFF0C\u5728\u4E2D\u95F4\u4F1A\u6709\u4E00\u6BB5\u65F6\u95F4\u65E0\u6CD5\u67E5\u770B\u6570\u636E\u3002\u8FD9\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684\u4E34\u65F6\u5206\u533A\uFF0C\u5C06\u65B0\u7684\u6570\u636E\u5BFC\u5165\u5230\u4E34\u65F6\u5206\u533A\u540E\uFF0C\u901A\u8FC7\u66FF\u6362\u64CD\u4F5C\uFF0C\u539F\u5B50\u7684\u66FF\u6362\u539F\u6709\u5206\u533A\uFF0C\u4EE5\u8FBE\u5230\u76EE\u7684\u3002\u5BF9\u4E8E\u975E\u5206\u533A\u8868\u7684\u539F\u5B50\u8986\u76D6\u5199\u64CD\u4F5C\uFF0C\u8BF7\u53C2\u9605",(0,l.jsx)(e.a,{href:"../../data-operate/delete/atomicity-replace",children:"\u66FF\u6362\u8868\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4FEE\u6539\u5206\u6876\u6570"}),"\n",(0,l.jsxs)(e.p,{children:["\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u5728\u521B\u5EFA\u5206\u533A\u65F6\u4F7F\u7528\u4E86\u4E0D\u5408\u9002\u7684\u5206\u6876\u6570\u3002\u5219\u7528\u6237\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u5206\u533A\u8303\u56F4\u7684\u4E34\u65F6\u5206\u533A\uFF0C\u5E76\u6307\u5B9A\u65B0\u7684\u5206\u6876\u6570\u3002\u7136\u540E\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"INSERT INTO"})," \u547D\u4EE4\u5C06\u6B63\u5F0F\u5206\u533A\u7684\u6570\u636E\u5BFC\u5165\u5230\u4E34\u65F6\u5206\u533A\u4E2D\uFF0C\u901A\u8FC7\u66FF\u6362\u64CD\u4F5C\uFF0C\u539F\u5B50\u7684\u66FF\u6362\u539F\u6709\u5206\u533A\uFF0C\u4EE5\u8FBE\u5230\u76EE\u7684\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5408\u5E76\u6216\u5206\u5272\u5206\u533A"}),"\n",(0,l.jsxs)(e.p,{children:["\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u5E0C\u671B\u5BF9\u5206\u533A\u7684\u8303\u56F4\u8FDB\u884C\u4FEE\u6539\uFF0C\u6BD4\u5982\u5408\u5E76\u4E24\u4E2A\u5206\u533A\uFF0C\u6216\u5C06\u4E00\u4E2A\u5927\u5206\u533A\u5206\u5272\u6210\u591A\u4E2A\u5C0F\u5206\u533A\u3002\u5219\u7528\u6237\u53EF\u4EE5\u5148\u5EFA\u7ACB\u5BF9\u5E94\u5408\u5E76\u6216\u5206\u5272\u540E\u8303\u56F4\u7684\u4E34\u65F6\u5206\u533A\uFF0C\u7136\u540E\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"INSERT INTO"})," \u547D\u4EE4\u5C06\u6B63\u5F0F\u5206\u533A\u7684\u6570\u636E\u5BFC\u5165\u5230\u4E34\u65F6\u5206\u533A\u4E2D\uFF0C\u901A\u8FC7\u66FF\u6362\u64CD\u4F5C\uFF0C\u539F\u5B50\u7684\u66FF\u6362\u539F\u6709\u5206\u533A\uFF0C\u4EE5\u8FBE\u5230\u76EE\u7684\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6DFB\u52A0\u4E34\u65F6\u5206\u533A",children:"\u6DFB\u52A0\u4E34\u65F6\u5206\u533A"}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"ALTER TABLE ADD TEMPORARY PARTITION"})," \u8BED\u53E5\u5BF9\u4E00\u4E2A\u8868\u6DFB\u52A0\u4E34\u65F6\u5206\u533A\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai");\n\nALTER TABLE tbl4 ADD TEMPORARY PARTITION tp1 VALUES IN ((1, "Beijing"), (1, "Shanghai"));\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"HELP ALTER TABLE;"})," \u67E5\u770B\u66F4\u591A\u5E2E\u52A9\u548C\u793A\u4F8B\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u6DFB\u52A0\u64CD\u4F5C\u7684\u4E00\u4E9B\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E34\u65F6\u5206\u533A\u7684\u6DFB\u52A0\u548C\u6B63\u5F0F\u5206\u533A\u7684\u6DFB\u52A0\u64CD\u4F5C\u76F8\u4F3C\u3002\u4E34\u65F6\u5206\u533A\u7684\u5206\u533A\u8303\u56F4\u72EC\u7ACB\u4E8E\u6B63\u5F0F\u5206\u533A\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E34\u65F6\u5206\u533A\u53EF\u4EE5\u72EC\u7ACB\u6307\u5B9A\u4E00\u4E9B\u5C5E\u6027\u3002\u5305\u62EC\u5206\u6876\u6570\u3001\u526F\u672C\u6570\u3001\u5B58\u50A8\u4ECB\u8D28\u7B49\u4FE1\u606F\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5220\u9664\u4E34\u65F6\u5206\u533A",children:"\u5220\u9664\u4E34\u65F6\u5206\u533A"}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"ALTER TABLE DROP TEMPORARY PARTITION"})," \u8BED\u53E5\u5220\u9664\u4E00\u4E2A\u8868\u7684\u4E34\u65F6\u5206\u533A\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"HELP ALTER TABLE;"})," \u67E5\u770B\u66F4\u591A\u5E2E\u52A9\u548C\u793A\u4F8B\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5220\u9664\u64CD\u4F5C\u7684\u4E00\u4E9B\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5220\u9664\u4E34\u65F6\u5206\u533A\uFF0C\u4E0D\u5F71\u54CD\u6B63\u5F0F\u5206\u533A\u7684\u6570\u636E\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u66FF\u6362\u6B63\u5F0F\u5206\u533A",children:"\u66FF\u6362\u6B63\u5F0F\u5206\u533A"}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"ALTER TABLE REPLACE PARTITION"})," \u8BED\u53E5\u5C06\u4E00\u4E2A\u8868\u7684\u6B63\u5F0F\u5206\u533A\u66FF\u6362\u4E3A\u4E34\u65F6\u5206\u533A\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:'ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"HELP ALTER TABLE;"})," \u67E5\u770B\u66F4\u591A\u5E2E\u52A9\u548C\u793A\u4F8B\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u66FF\u6362\u64CD\u4F5C\u6709\u4E24\u4E2A\u7279\u6B8A\u7684\u53EF\u9009\u53C2\u6570\uFF1A"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1. ",(0,l.jsx)(e.code,{children:"strict_range"})]})}),"\n",(0,l.jsx)(e.p,{children:"\u9ED8\u8BA4\u4E3A true\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5BF9\u4E8E Range \u5206\u533A\uFF0C\u5F53\u8BE5\u53C2\u6570\u4E3A true \u65F6\uFF0C\u8868\u793A\u8981\u88AB\u66FF\u6362\u7684\u6240\u6709\u6B63\u5F0F\u5206\u533A\u7684\u8303\u56F4\u5E76\u96C6\u9700\u8981\u548C\u66FF\u6362\u7684\u4E34\u65F6\u5206\u533A\u7684\u8303\u56F4\u5E76\u96C6\u5B8C\u5168\u76F8\u540C\u3002\u5F53\u7F6E\u4E3A false \u65F6\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1\u66FF\u6362\u540E\uFF0C\u65B0\u7684\u6B63\u5F0F\u5206\u533A\u95F4\u7684\u8303\u56F4\u4E0D\u91CD\u53E0\u5373\u53EF\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5BF9\u4E8E List \u5206\u533A\uFF0C\u8BE5\u53C2\u6570\u6052\u4E3A true\u3002\u8981\u88AB\u66FF\u6362\u7684\u6240\u6709\u6B63\u5F0F\u5206\u533A\u7684\u679A\u4E3E\u503C\u5FC5\u987B\u548C\u66FF\u6362\u7684\u4E34\u65F6\u5206\u533A\u679A\u4E3E\u503C\u5B8C\u5168\u76F8\u540C\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793A\u4F8B 1"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"\u5F85\u66FF\u6362\u7684\u5206\u533A p1, p2, p3 \u7684\u8303\u56F4 (=> \u5E76\u96C6)\uFF1A\n[10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n\n\u66FF\u6362\u5206\u533A tp1, tp2 \u7684\u8303\u56F4(=> \u5E76\u96C6)\uFF1A\n[10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n\n\u8303\u56F4\u5E76\u96C6\u76F8\u540C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 tp1 \u548C tp2 \u66FF\u6362 p1, p2, p3\u3002\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793A\u4F8B 2"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"\u5F85\u66FF\u6362\u7684\u5206\u533A p1 \u7684\u8303\u56F4 (=> \u5E76\u96C6)\uFF1A\n[10, 50) => [10, 50)\n\n\u66FF\u6362\u5206\u533A tp1, tp2 \u7684\u8303\u56F4(=> \u5E76\u96C6)\uFF1A\n[10, 30), [40, 50) => [10, 30), [40, 50)\n\n\u8303\u56F4\u5E76\u96C6\u4E0D\u76F8\u540C\uFF0C\u5982\u679C strict_range \u4E3A true\uFF0C\u5219\u4E0D\u53EF\u4EE5\u4F7F\u7528 tp1 \u548C tp2 \u66FF\u6362 p1\u3002\u5982\u679C\u4E3A false\uFF0C\u4E14\u66FF\u6362\u540E\u7684\u4E24\u4E2A\u5206\u533A\u8303\u56F4 [10, 30), [40, 50) \u548C\u5176\u4ED6\u6B63\u5F0F\u5206\u533A\u4E0D\u91CD\u53E0\uFF0C\u5219\u53EF\u4EE5\u66FF\u6362\u3002\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793A\u4F8B 3"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"\u5F85\u66FF\u6362\u7684\u5206\u533A p1, p2 \u7684\u679A\u4E3E\u503C(=> \u5E76\u96C6)\uFF1A\n(1, 2, 3), (4, 5, 6) => (1, 2, 3, 4, 5, 6)\n\n\u66FF\u6362\u5206\u533A tp1, tp2, tp3 \u7684\u679A\u4E3E\u503C(=> \u5E76\u96C6)\uFF1A\n(1, 2, 3), (4), (5, 6) => (1, 2, 3, 4, 5, 6)\n\n\u679A\u4E3E\u503C\u5E76\u96C6\u76F8\u540C\uFF0C\u53EF\u4EE5\u4F7F\u7528 tp1\uFF0Ctp2\uFF0Ctp3 \u66FF\u6362 p1\uFF0Cp2\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793A\u4F8B 4"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:'\u5F85\u66FF\u6362\u7684\u5206\u533A p1, p2\uFF0Cp3 \u7684\u679A\u4E3E\u503C(=> \u5E76\u96C6)\uFF1A\n(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai")), (("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n\n\u66FF\u6362\u5206\u533A tp1, tp2 \u7684\u679A\u4E3E\u503C(=> \u5E76\u96C6)\uFF1A\n(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n\n\u679A\u4E3E\u503C\u5E76\u96C6\u76F8\u540C\uFF0C\u53EF\u4EE5\u4F7F\u7528 tp1\uFF0Ctp2 \u66FF\u6362 p1\uFF0Cp2\uFF0Cp3\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["2. ",(0,l.jsx)(e.code,{children:"use_temp_partition_name"})]})}),"\n",(0,l.jsx)(e.p,{children:"\u9ED8\u8BA4\u4E3A false\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5F53\u8BE5\u53C2\u6570\u4E3A false\uFF0C\u5E76\u4E14\u5F85\u66FF\u6362\u7684\u5206\u533A\u548C\u66FF\u6362\u5206\u533A\u7684\u4E2A\u6570\u76F8\u540C\u65F6\uFF0C\u5219\u66FF\u6362\u540E\u7684\u6B63\u5F0F\u5206\u533A\u540D\u79F0\u7EF4\u6301\u4E0D\u53D8\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u4E3A true\uFF0C\u5219\u66FF\u6362\u540E\uFF0C\u6B63\u5F0F\u5206\u533A\u7684\u540D\u79F0\u4E3A\u66FF\u6362\u5206\u533A\u7684\u540D\u79F0\u3002\u4E0B\u9762\u4E3E\u4F8B\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793A\u4F8B 1"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"use_temp_partition_name"})," \u9ED8\u8BA4\u4E3A false\uFF0C\u5219\u5728\u66FF\u6362\u540E\uFF0C\u5206\u533A\u7684\u540D\u79F0\u4F9D\u7136\u4E3A p1\uFF0C\u4F46\u662F\u76F8\u5173\u7684\u6570\u636E\u548C\u5C5E\u6027\u90FD\u66FF\u6362\u4E3A tp1 \u7684\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5982\u679C ",(0,l.jsx)(e.code,{children:"use_temp_partition_name"})," \u9ED8\u8BA4\u4E3A true\uFF0C\u5219\u5728\u66FF\u6362\u540E\uFF0C\u5206\u533A\u7684\u540D\u79F0\u4E3A tp1\u3002p1 \u5206\u533A\u4E0D\u518D\u5B58\u5728\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793A\u4F8B 2"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"use_temp_partition_name"})," \u9ED8\u8BA4\u4E3A false\uFF0C\u4F46\u56E0\u4E3A\u5F85\u66FF\u6362\u5206\u533A\u7684\u4E2A\u6570\u548C\u66FF\u6362\u5206\u533A\u7684\u4E2A\u6570\u4E0D\u540C\uFF0C\u5219\u8BE5\u53C2\u6570\u65E0\u6548\u3002\u66FF\u6362\u540E\uFF0C\u5206\u533A\u540D\u79F0\u4E3A tp1\uFF0Cp1 \u548C p2 \u4E0D\u518D\u5B58\u5728\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u66FF\u6362\u64CD\u4F5C\u7684\u4E00\u4E9B\u8BF4\u660E\uFF1A"})}),(0,l.jsx)(e.p,{children:"\u5206\u533A\u66FF\u6362\u6210\u529F\u540E\uFF0C\u88AB\u66FF\u6362\u7684\u5206\u533A\u5C06\u88AB\u5220\u9664\u4E14\u4E0D\u53EF\u6062\u590D\u3002"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u5BFC\u5165\u4E34\u65F6\u5206\u533A",children:"\u5BFC\u5165\u4E34\u65F6\u5206\u533A"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E\u5BFC\u5165\u65B9\u5F0F\u7684\u4E0D\u540C\uFF0C\u6307\u5B9A\u5BFC\u5165\u4E34\u65F6\u5206\u533A\u7684\u8BED\u6CD5\u7A0D\u6709\u5DEE\u522B\u3002\u8FD9\u91CC\u901A\u8FC7\u793A\u4F8B\u8FDB\u884C\u7B80\u5355\u8BF4\u660E"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:'INSERT INTO tbl TEMPORARY PARTITION(tp1, tp2, ...) SELECT ....\ncurl --location-trusted -u root: -H "label:123" -H "temporary_partitions: tp1, tp2, ..." -T testData http://host:port/api/testDb/testTbl/_stream_load    \nLOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE my_table\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS(tp1, tp2, ...),\nWHERE k1 > 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u67E5\u8BE2\u4E34\u65F6\u5206\u533A",children:"\u67E5\u8BE2\u4E34\u65F6\u5206\u533A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"SELECT ... FROM\ntbl1 TEMPORARY PARTITION(tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION(tp1, tp2, ...)\nON ...\nWHERE ...;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u548C\u5176\u4ED6\u64CD\u4F5C\u7684\u5173\u7CFB",children:"\u548C\u5176\u4ED6\u64CD\u4F5C\u7684\u5173\u7CFB"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"DROP"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 Drop \u64CD\u4F5C\u76F4\u63A5\u5220\u9664\u6570\u636E\u5E93\u6216\u8868\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 Recover \u547D\u4EE4\u6062\u590D\u6570\u636E\u5E93\u6216\u8868\uFF08\u9650\u5B9A\u65F6\u95F4\u5185\uFF09\uFF0C\u4F46\u4E34\u65F6\u5206\u533A\u4E0D\u4F1A\u88AB\u6062\u590D\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 Alter \u547D\u4EE4\u5220\u9664\u6B63\u5F0F\u5206\u533A\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 Recover \u547D\u4EE4\u6062\u590D\u5206\u533A\uFF08\u9650\u5B9A\u65F6\u95F4\u5185\uFF09\u3002\u64CD\u4F5C\u6B63\u5F0F\u5206\u533A\u548C\u4E34\u65F6\u5206\u533A\u65E0\u5173\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 Alter \u547D\u4EE4\u5220\u9664\u4E34\u65F6\u5206\u533A\u540E\uFF0C\u65E0\u6CD5\u901A\u8FC7 Recover \u547D\u4EE4\u6062\u590D\u4E34\u65F6\u5206\u533A\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"TRUNCATE"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 Truncate \u547D\u4EE4\u6E05\u7A7A\u8868\uFF0C\u8868\u7684\u4E34\u65F6\u5206\u533A\u4F1A\u88AB\u5220\u9664\uFF0C\u4E14\u4E0D\u53EF\u6062\u590D\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 Truncate \u547D\u4EE4\u6E05\u7A7A\u6B63\u5F0F\u5206\u533A\u65F6\uFF0C\u4E0D\u5F71\u54CD\u4E34\u65F6\u5206\u533A\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E0D\u53EF\u4F7F\u7528 Truncate \u547D\u4EE4\u6E05\u7A7A\u4E34\u65F6\u5206\u533A\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"ALTER"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5F53\u8868\u5B58\u5728\u4E34\u65F6\u5206\u533A\u65F6\uFF0C\u65E0\u6CD5\u4F7F\u7528 Alter \u547D\u4EE4\u5BF9\u8868\u8FDB\u884C Schema Change\u3001Rollup \u7B49\u53D8\u66F4\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5F53\u8868\u5728\u8FDB\u884C\u53D8\u66F4\u64CD\u4F5C\u65F6\uFF0C\u65E0\u6CD5\u5BF9\u8868\u6DFB\u52A0\u4E34\u65F6\u5206\u533A\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(p,{...n})}):p(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return t}});var i=s(667294);let l={},r=i.createContext(l);function t(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);