"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["326627"],{775466:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>a,assets:()=>o,toc:()=>h,frontMatter:()=>d});var r=JSON.parse('{"id":"releasenotes/v2.1/release-2.1.3","title":"Release 2.1.3","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/v2.1/release-2.1.3.md","sourceDirName":"releasenotes/v2.1","slug":"/releasenotes/v2.1/release-2.1.3","permalink":"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.3","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release 2.1.3","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 2.1.4","permalink":"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.4"},"next":{"title":"Release 2.1.2","permalink":"/zh-CN/docs/dev/releasenotes/v2.1/release-2.1.2"}}'),i=s("785893"),l=s("250065");let d={title:"Release 2.1.3",language:"zh-CN"},c=void 0,o={},h=[{value:"\u529F\u80FD\u7279\u6027",id:"\u529F\u80FD\u7279\u6027",level:2},{value:"\u4F18\u5316\u6539\u8FDB",id:"\u4F18\u5316\u6539\u8FDB",level:2},{value:"\u884C\u4E3A\u53D8\u66F4",id:"\u884C\u4E3A\u53D8\u66F4",level:2},{value:"\u5347\u7EA7\u95EE\u9898",id:"\u5347\u7EA7\u95EE\u9898",level:2},{value:"\u95EE\u9898\u4FEE\u590D",id:"\u95EE\u9898\u4FEE\u590D",level:2}];function t(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Apache Doris 2.1.3 \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 5 \u6708 21 \u65E5\u6B63\u5F0F\u53D1\u5E03"}),"\u3002\u8BE5\u7248\u672C\u66F4\u65B0\u5E26\u6765\u4E86\u82E5\u5E72\u6539\u8FDB\u9879\uFF0C\u5305\u62EC\u652F\u6301\u5411 Hive \u56DE\u5199\u6570\u636E\u3001\u7269\u5316\u89C6\u56FE\u3001\u65B0\u51FD\u6570\u7B49\u529F\u80FD\uFF0C\u540C\u65F6\u6539\u5584\u6743\u9650\u7BA1\u7406\u5E76\u4FEE\u590D\u82E5\u5E72\u95EE\u9898\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4E86\u7CFB\u7EDF\u7684\u6027\u80FD\u53CA\u7A33\u5B9A\u6027\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\uFF1A"})," ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GitHub \u4E0B\u8F7D\uFF1A"})," ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u529F\u80FD\u7279\u6027",children:"\u529F\u80FD\u7279\u6027"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u652F\u6301\u901A\u8FC7 Hive Catalog \u5411 Hive \u8868\u4E2D\u56DE\u5199\u6570\u636E"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ECE 2.1.3 \u7248\u672C\u5F00\u59CB\uFF0CApache Doris \u652F\u6301\u5BF9 Hive \u7684 DDL \u548C DML \u64CD\u4F5C\u3002\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 Apache Doris \u5728 Hive \u4E2D\u521B\u5EFA\u5E93\u8868\uFF0C\u901A\u8FC7\u6267\u884C",(0,i.jsx)(n.code,{children:"INSERT INTO"}),"\u8BED\u53E5\u6765\u5411 Hive \u8868\u4E2D\u5199\u5165\u6570\u636E\u3002\u901A\u8FC7\u8BE5\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 Apache Doris \u5BF9 Hive \u8FDB\u884C\u5B8C\u6574\u7684\u6570\u636E\u67E5\u8BE2\u548C\u5199\u5165\u64CD\u4F5C\uFF0C\u8FDB\u4E00\u6B65\u5E2E\u52A9\u7528\u6237\u7B80\u5316\u6E56\u4ED3\u4E00\u4F53\u67B6\u6784\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53C2\u8003\u6587\u6863\uFF1A",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/",children:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. \u652F\u6301\u5728\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4E4B\u4E0A\u6784\u5EFA\u65B0\u7684\u5F02\u6B65\u7269\u5316\u89C6\u56FE"})}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u5728\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4E4B\u4E0A\u6765\u521B\u5EFA\u65B0\u7684\u5F02\u6B65\u7269\u5316\u89C6\u56FE\uFF0C\u76F4\u63A5\u590D\u7528\u8BA1\u7B97\u597D\u7684\u4E2D\u95F4\u7ED3\u679C\u8FDB\u884C\u6570\u636E\u52A0\u5DE5\u5904\u7406\uFF0C\u7B80\u5316\u590D\u6742\u7684\u805A\u5408\u548C\u8BA1\u7B97\u64CD\u4F5C\u5E26\u6765\u7684\u8D44\u6E90\u6D88\u8017\u548C\u7EF4\u62A4\u6210\u672C\uFF0C\u8FDB\u4E00\u6B65\u52A0\u901F\u67E5\u8BE2\u6027\u80FD\u3001\u63D0\u5347\u6570\u636E\u53EF\u7528\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. \u652F\u6301\u901A\u8FC7\u7269\u5316\u89C6\u56FE\u5D4C\u5957\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u91CD\u5199"})}),"\n",(0,i.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\uFF08Materialized View\uFF0CMV\uFF09\u662F\u7528\u4E8E\u5B58\u50A8\u67E5\u8BE2\u7ED3\u679C\u7684\u6570\u636E\u5E93\u5BF9\u8C61\u3002\u73B0\u5728\uFF0CApache Doris \u652F\u6301\u901A\u8FC7 MV \u5D4C\u5957\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u91CD\u5199\uFF0C\u8FD9\u6709\u52A9\u4E8E\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. \u65B0\u589E SHOW VIEWS \u8BED\u53E5"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528",(0,i.jsx)(n.code,{children:"SHOW VIEWS"}),"\u8BED\u53E5\u6765\u67E5\u8BE2\u6570\u636E\u5E93\u4E2D\u7684\u89C6\u56FE\uFF0C\u6709\u52A9\u4E8E\u66F4\u597D\u5730\u7BA1\u7406\u548C\u7406\u89E3\u6570\u636E\u5E93\u4E2D\u7684\u89C6\u56FE\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"5. Workload Group \u652F\u6301\u7ED1\u5B9A\u5230\u7279\u5B9A\u7684 BE \u8282\u70B9"})}),"\n",(0,i.jsx)(n.p,{children:"Workload Group \u53EF\u4EE5\u7ED1\u5B9A\u5230\u7279\u5B9A\u7684 BE \u8282\u70B9\uFF0C\u5B9E\u73B0\u67E5\u8BE2\u6267\u884C\u7684\u66F4\u7CBE\u7EC6\u5316\u63A7\u5236\uFF0C\u4EE5\u4F18\u5316\u8D44\u6E90\u4F7F\u7528\u548C\u63D0\u9AD8\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"6. Broker Load \u652F\u6301\u538B\u7F29\u7684 JSON \u683C\u5F0F"})}),"\n",(0,i.jsx)(n.p,{children:"Broker Load \u652F\u6301\u5BFC\u5165\u538B\u7F29\u7684 JSON \u683C\u5F0F\u6570\u636E\uFF0C\u53EF\u4EE5\u663E\u8457\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u7684\u5E26\u5BBD\u9700\u6C42\u3001\u52A0\u901F\u6570\u636E\u5BFC\u5165\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"7. TRUNCATE \u51FD\u6570\u53EF\u4EE5\u4F7F\u7528\u5217\u4F5C\u4E3A scale \u53C2\u6570"})}),"\n",(0,i.jsx)(n.p,{children:"TRUNCATE \u51FD\u6570\u73B0\u5728\u53EF\u4EE5\u63A5\u53D7\u5217\u4F5C\u4E3A scale \u53C2\u6570\uFF0C\u8FD9\u4F7F\u5F97\u5728\u5904\u7406\u6570\u503C\u6570\u636E\u65F6\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["8. \u6DFB\u52A0\u65B0\u7684\u51FD\u6570 ",(0,i.jsx)(n.code,{children:"uuid_to_int"})," \u548C ",(0,i.jsx)(n.code,{children:"int_to_uuid"})]})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u4E24\u4E2A\u51FD\u6570\u5141\u8BB8\u7528\u6237\u5728 UUID \u548C\u6574\u6570\u4E4B\u95F4\u8FDB\u884C\u8F6C\u6362\uFF0C\u5BF9\u4E8E\u9700\u8981\u5904\u7406 UUID \u6570\u636E\u7684\u573A\u666F\u6709\u660E\u663E\u5E2E\u52A9\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["9. \u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"bypass_workload_group"})," Session Variable \u4EE5\u7ED5\u8FC7\u67E5\u8BE2\u961F\u5217"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F1A\u8BDD\u53D8\u91CF ",(0,i.jsx)(n.code,{children:"bypass_workload_group"})," \u5141\u8BB8\u67D0\u4E9B\u67E5\u8BE2\u7ED5\u8FC7 Workload Group \u961F\u5217\u76F4\u63A5\u6267\u884C\uFF0C\u8FD9\u53EF\u4EE5\u7528\u4E8E\u5904\u7406\u9700\u8981\u5FEB\u901F\u54CD\u5E94\u7684\u5173\u952E\u67E5\u8BE2\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"10. \u6DFB\u52A0 strcmp \u51FD\u6570"})}),"\n",(0,i.jsx)(n.p,{children:"strcmp \u51FD\u6570\u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6BD4\u8F83\u7ED3\u679C\uFF0C\u5E2E\u52A9\u6587\u672C\u6570\u636E\u7684\u5904\u7406\u66F4\u52A0\u7B80\u6613\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["11. \u652F\u6301 HLL \u51FD\u6570 ",(0,i.jsx)(n.code,{children:"hll_from_base64"})," \u548C ",(0,i.jsx)(n.code,{children:"hll_to_base64"})]})}),"\n",(0,i.jsx)(n.p,{children:"HLL\uFF08HyperLogLog\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u57FA\u6570\u4F30\u8BA1\u7684\u7B97\u6CD5\uFF0C\u4EE5\u4E0A\u4E24\u4E2A\u51FD\u6570\u5141\u8BB8\u7528\u6237\u5C06 HLL \u6570\u636E\u4ECE Base64 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\u4E2D\u89E3\u7801\uFF0C\u6216\u5C06 HLL \u6570\u636E\u7F16\u7801\u4E3A Base64 \u5B57\u7B26\u4E32\uFF0C\u8FD9\u5BF9\u4E8E\u5B58\u50A8\u548C\u4F20\u8F93 HLL \u6570\u636E\u975E\u5E38\u6709\u7528\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4F18\u5316\u6539\u8FDB",children:"\u4F18\u5316\u6539\u8FDB"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u66FF\u6362 SipHash \u4E3A XXHash \u4EE5\u6539\u5584 Shuffle \u6027\u80FD"})}),"\n",(0,i.jsx)(n.p,{children:"SipHash \u548C XXHash \u90FD\u662F\u54C8\u5E0C\u51FD\u6570\uFF0C\u4F46 XXHash \u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u53EF\u80FD\u63D0\u4F9B\u66F4\u5FEB\u7684\u54C8\u5E0C\u901F\u5EA6\u548C\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u6B64\u4F18\u5316\u65E8\u5728\u901A\u8FC7\u91C7\u7528 XXHash \u6765\u63D0\u9AD8\u6570\u636E Shuffle \u8FC7\u7A0B\u4E2D\u7684\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. \u5F02\u6B65\u7269\u5316\u89C6\u56FE\u652F\u6301 OLAP \u8868\u5206\u533A\u5217\u4E3A\u53EF\u4EE5\u4E3A NULL\uFF1A"})}),"\n",(0,i.jsx)(n.p,{children:"\u5141\u8BB8\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u652F\u6301 OLAP \u8868\u7684\u5206\u533A\u5217\u53EF\u4EE5\u4E3A NULL\uFF0C\u4ECE\u800C\u589E\u5F3A\u4E86\u6570\u636E\u5904\u7406\u7684\u7075\u6D3B\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. \u6536\u96C6\u5217\u7EDF\u8BA1\u4FE1\u606F\u65F6\u9650\u5236\u6700\u5927\u5B57\u7B26\u4E32\u957F\u5EA6\u4E3A 1024 \u4EE5\u63A7\u5236 BE \u5185\u5B58\u4F7F\u7528"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6536\u96C6\u5217\u7EDF\u8BA1\u4FE1\u606F\u65F6\uFF0C\u9650\u5236\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u53EF\u4EE5\u9632\u6B62\u8FC7\u5927\u7684\u6570\u636E\u6D88\u8017\u8FC7\u591A\u7684 BE \u5185\u5B58\uFF0C\u6709\u52A9\u4E8E\u4FDD\u6301\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. \u652F\u6301\u52A8\u6001\u5220\u9664 Bitmap Cache \u4EE5\u63D0\u9AD8\u6027\u80FD"})}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u652F\u6301\u52A8\u6001\u5220\u9664\u4E0D\u518D\u9700\u8981\u7684 Bitmap Cache\uFF0C\u53EF\u4EE5\u91CA\u653E\u5185\u5B58\u5E76\u6539\u5584\u7CFB\u7EDF\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"5. \u5728 ALTER \u64CD\u4F5C\u4E2D\u51CF\u5C11\u5185\u5B58\u4F7F\u7528"})}),"\n",(0,i.jsx)(n.p,{children:"\u51CF\u5C11 ALTER \u64CD\u4F5C\u4E2D\u7684\u5185\u5B58\u4F7F\u7528\uFF0C\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u8D44\u6E90\u7684\u5229\u7528\u6548\u7387\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"6. \u652F\u6301\u590D\u6742\u7C7B\u578B\u7684\u5E38\u91CF\u6298\u53E0"})}),"\n",(0,i.jsx)(n.p,{children:"\u652F\u6301 Array/Map/Struct \u590D\u6742\u7C7B\u578B\u7684\u5E38\u91CF\u6298\u53E0\uFF1B"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"7. \u5728 Aggregate Key \u805A\u5408\u6A21\u578B\u4E2D\u589E\u52A0\u5BF9 Variant \u7C7B\u578B\u7684\u652F\u6301"})}),"\n",(0,i.jsx)(n.p,{children:"Variant \u6570\u636E\u7C7B\u578B\u80FD\u591F\u5B58\u50A8\u591A\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5728\u6B64\u4F18\u5316\u4E2D\u5141\u8BB8\u5BF9 Variant \u7C7B\u578B\u7684\u6570\u636E\u8FDB\u884C\u805A\u5408\u64CD\u4F5C\uFF0C\u4ECE\u800C\u589E\u5F3A\u4E86\u534A\u7ED3\u6784\u5316\u6570\u636E\u5206\u6790\u7684\u7075\u6D3B\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"8. \u5728 CCR \u4E2D\u652F\u6301\u65B0\u7684\u5012\u6392\u7D22\u5F15\u683C\u5F0F"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"9. \u4F18\u5316\u5D4C\u5957\u7269\u5316\u89C6\u56FE\u7684\u91CD\u5199\u6027\u80FD"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"10. \u652F\u6301 decimal256 \u7C7B\u578B\u7684\u884C\u5B58\u683C\u5F0F"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u884C\u5B58\u683C\u5F0F\u4E2D\u652F\u6301 decimal 256 \u7C7B\u578B\uFF0C\u4EE5\u4EE5\u6269\u5C55\u7CFB\u7EDF\u5BF9\u9AD8\u7CBE\u5EA6\u6570\u503C\u6570\u636E\u7684\u5904\u7406\u80FD\u529B\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u884C\u4E3A\u53D8\u66F4",children:"\u884C\u4E3A\u53D8\u66F4"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u6388\u6743\uFF08Authorization\uFF09"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Grant_priv \u6743\u9650\u66F4\u6539"}),"\uFF1A",(0,i.jsx)(n.code,{children:"Grant_priv"}),"\u4E0D\u80FD\u518D\u88AB\u4EFB\u610F\u6388\u4E88\u3002\u6267\u884C ",(0,i.jsx)(n.code,{children:"GRANT"})," \u64CD\u4F5C\u65F6\uFF0C\u7528\u6237\u4E0D\u4EC5\u9700\u8981\u5177\u6709",(0,i.jsx)(n.code,{children:"Grant_priv"}),"\uFF0C\u8FD8\u9700\u8981\u5177\u6709\u8981\u6388\u4E88\u7684\u6743\u9650\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60F3\u8981\u6388\u4E88\u5BF9",(0,i.jsx)(n.code,{children:"table1"}),"\u7684 ",(0,i.jsx)(n.code,{children:"SELECT"})," \u6743\u9650\uFF0C\u90A3\u4E48\u8BE5\u7528\u6237\u4E0D\u4EC5\u9700\u8981\u5177\u6709 ",(0,i.jsx)(n.code,{children:"GRANT"})," \u6743\u9650\uFF0C\u8FD8\u9700\u8981\u5177\u6709\u5BF9",(0,i.jsx)(n.code,{children:"table1"}),"\u7684 ",(0,i.jsx)(n.code,{children:"SELECT"})," \u6743\u9650\uFF0C\u8FD9\u589E\u52A0\u4E86\u6743\u9650\u7BA1\u7406\u7684\u5B89\u5168\u6027\u548C\u4E00\u81F4\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Workload Group \u548C Resource \u7684 Usage_priv"}),"\uFF1A",(0,i.jsx)(n.code,{children:"Usage_priv"})," \u5BF9 Workload Group \u548C Resource \u7684\u6743\u9650\u4E0D\u518D\u662F\u5168\u5C40\u7EA7\u522B\u7684\uFF0C\u800C\u662F\u4EC5\u9650\u4E8E Resource \u548C Workload Group \u5185\uFF0C\u6743\u9650\u7684\u6388\u4E88\u548C\u4F7F\u7528\u5C06\u66F4\u52A0\u5177\u4F53\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u64CD\u4F5C\u7684\u6388\u6743"}),"\uFF1A\u4E4B\u524D\u672A\u88AB\u6388\u6743\u7684\u64CD\u4F5C\u73B0\u5728\u90FD\u6709\u4E86\u76F8\u5E94\u7684\u6388\u6743\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u52A0\u7EC6\u81F4\u548C\u5168\u9762\u5730\u64CD\u4F5C\u6743\u9650\u63A7\u5236\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. LOG \u76EE\u5F55\u914D\u7F6E"})}),"\n",(0,i.jsxs)(n.p,{children:["FE \u548C BE \u7684\u65E5\u5FD7\u76EE\u5F55\u914D\u7F6E\u73B0\u5728\u7EDF\u4E00\u4F7F\u7528",(0,i.jsx)(n.code,{children:"LOG_DIR"}),"\u73AF\u5883\u53D8\u91CF\uFF0C\u6240\u6709\u5176\u4ED6\u4E0D\u540C\u7C7B\u578B\u7684\u65E5\u5FD7\u90FD\u5C06\u4EE5",(0,i.jsx)(n.code,{children:"LOG_DIR"}),"\u4F5C\u4E3A\u6839\u76EE\u5F55\u8FDB\u884C\u5B58\u50A8\u3002\u540C\u65F6\u4E3A\u4E86\u4FDD\u6301\u7248\u672C\u95F4\u7684\u517C\u5BB9\u6027\uFF0C\u4EE5\u524D\u7684\u914D\u7F6E\u9879",(0,i.jsx)(n.code,{children:"sys_log_dir"}),"\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. S3 \u8868\u51FD\u6570\uFF08TVF\uFF09"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4E8E\u4E4B\u524D\u7684\u89E3\u6790\u65B9\u5F0F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u65E0\u6CD5\u6B63\u786E\u8BC6\u522B\u6216\u5904\u7406 S3 \u7684 URL\uFF0C\u56E0\u6B64\u5C06\u5BF9\u8C61\u5B58\u50A8\u8DEF\u5F84\u7684\u89E3\u6790\u903B\u8F91\u8FDB\u884C\u91CD\u6784\u3002\u5BF9\u4E8E S3 \u8868\u51FD\u6570\u4E2D\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u9700\u8981\u4F20\u9012",(0,i.jsx)(n.code,{children:"force_parsing_by_standard_uri"}),"\u53C2\u6570\u6765\u786E\u4FDD\u88AB\u6B63\u786E\u89E3\u6790\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5347\u7EA7\u95EE\u9898",children:"\u5347\u7EA7\u95EE\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4E8E\u8BB8\u591A\u7528\u6237\u5C06\u67D0\u4E9B\u5173\u952E\u5B57\u7528\u4F5C\u5217\u540D\u6216\u5C5E\u6027\u503C\uFF0C\u56E0\u6B64\u5C06\u5982\u4E0B\u5173\u952E\u5B57\u8BBE\u7F6E\u4E3A\u975E\u4FDD\u7559\u5173\u952E\u5B57\uFF0C\u5141\u8BB8\u7528\u6237\u5C06\u5176\u7528\u4F5C\u6807\u8BC6\u7B26\u4F7F\u7528\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u95EE\u9898\u4FEE\u590D",children:"\u95EE\u9898\u4FEE\u590D"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. \u4FEE\u590D\u5728\u817E\u8BAF\u4E91 COSN \u4E0A\u8BFB\u53D6 Hive \u8868\u65F6\u7684\u65E0\u6570\u636E\u9519\u8BEF"})}),"\n",(0,i.jsx)(n.p,{children:"\u89E3\u51B3\u4E86\u5728\u817E\u8BAF\u4E91 COSN \u5B58\u50A8\u4E0A\u8BFB\u53D6 Hive \u8868\u65F6\u53EF\u80FD\u9047\u5230\u7684\u65E0\u6570\u636E\u9519\u8BEF\uFF0C\u589E\u5F3A\u4E86\u4E0E\u817E\u8BAF\u4E91\u5B58\u50A8\u670D\u52A1\u7684\u517C\u5BB9\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. \u4FEE\u590D milliseconds_diff \u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u7ED3\u679C"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u590D",(0,i.jsx)(n.code,{children:"milliseconds_diff"}),"\u51FD\u6570\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u8FD4\u56DE\u9519\u8BEF\u7ED3\u679C\u7684\u95EE\u9898\uFF0C\u786E\u4FDD\u4E86\u65F6\u95F4\u5DEE\u8BA1\u7B97\u7684\u51C6\u786E\u6027\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. \u7528\u6237\u5B9A\u4E49\u53D8\u91CF\u5E94\u8F6C\u53D1\u5230 Master \u8282\u70B9"})}),"\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u7528\u6237\u5B9A\u4E49\u7684\u53D8\u91CF\u80FD\u591F\u6B63\u786E\u5730\u4F20\u9012\u5230 Master \u8282\u70B9\uFF0C\u4EE5\u4FBF\u5728\u6574\u4E2A\u7CFB\u7EDF\u4E2D\u4FDD\u6301\u4E00\u81F4\u6027\u548C\u6B63\u786E\u7684\u6267\u884C\u903B\u8F91\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. \u4FEE\u590D\u6DFB\u52A0\u590D\u6742\u7C7B\u578B\u5217\u65F6\u9047\u5230\u7684 Schema Change \u95EE\u9898"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6DFB\u52A0\u590D\u6742\u7C7B\u578B\u5217\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230 Schema Change \u95EE\u9898\uFF0C\u6B64\u4FEE\u590D\u786E\u4FDD\u4E86 Schema Change \u7684\u6B63\u786E\u6027\u3002"}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u4FEE\u590D FE master \u8282\u70B9\u66F4\u6539\u65F6 Routine Load \u7684\u6570\u636E\u4E22\u5931\u95EE\u9898"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Routine Load"}),"\u5E38\u7528\u4E8E\u8BA2\u9605 Kafka \u6D88\u606F\u961F\u5217\u4E2D\u7684\u6570\u636E\uFF0C\u6B64\u4FEE\u590D\u89E3\u51B3\u4E86\u5728 FE Master \u8282\u70B9\u66F4\u6539\u65F6\u53EF\u80FD\u5BFC\u81F4\u7684\u6570\u636E\u4E22\u5931\u95EE\u9898\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"6. \u4FEE\u590D\u5F53\u627E\u4E0D\u5230 Workload Group \u65F6 Routine Load \u5931\u8D25\u7684\u95EE\u9898"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u590D\u4E86\u5F53",(0,i.jsx)(n.code,{children:"Routine Load"}),"\u627E\u4E0D\u5230\u6307\u5B9A Workload Group \u65F6\u5BFC\u81F4\u7684\u5931\u8D25\u95EE\u9898\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"7. \u652F\u6301 column string64\uFF0C\u4EE5\u907F\u514D\u5728 string size \u6EA2\u51FA unit32 \u65F6 Join \u5931\u8D25\u7684\u95EE\u9898"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B57\u7B26\u4E32\u7684\u5927\u5C0F\u53EF\u80FD\u4F1A\u8D85\u8FC7 unit32 \u7684\u9650\u5236\uFF0C\u652F\u6301",(0,i.jsx)(n.code,{children:"string64"}),"\u7C7B\u578B\u53EF\u4EE5\u786E\u4FDD\u5B57\u7B26\u4E32 JOIN \u64CD\u4F5C\u7684\u6B63\u786E\u6267\u884C\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"8. \u5141\u8BB8 Hadoop \u7528\u6237\u521B\u5EFA Paimon Catalog"})}),"\n",(0,i.jsx)(n.p,{children:"\u5141\u8BB8\u5177\u6709\u6743\u9650\u7684\u5BF9\u5E94 Hadoop \u7528\u6237\u6765\u521B\u5EFA Paimon Catalog\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"9. \u4FEE\u590D function_ipxx_cidr \u51FD\u6570\u4E0E\u5E38\u91CF\u53C2\u6570\u7684\u95EE\u9898"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u590D\u4E86",(0,i.jsx)(n.code,{children:"function_ipxx_cidr"}),"\u51FD\u6570\u5728\u5904\u7406\u5E38\u91CF\u53C2\u6570\u65F6\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\uFF0C\u4FDD\u8BC1\u51FD\u6570\u6267\u884C\u7684\u6B63\u786E\u6027\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"10. \u4FEE\u590D\u4F7F\u7528 HDFS \u8FDB\u884C\u8FD8\u539F\u65F6\u7684\u6587\u4EF6\u4E0B\u8F7D\u9519\u8BEF"})}),"\n",(0,i.jsx)(n.p,{children:"\u89E3\u51B3\u4E86\u5728\u4F7F\u7528 HDFS \u8FDB\u884C\u6570\u636E\u8FD8\u539F\u65F6\u9047\u5230\u7684\u201Cfailed to download\u201D\u9519\u8BEF\uFF0C\u786E\u4FDD\u4E86\u6570\u636E\u6062\u590D\u7684\u6B63\u786E\u6027\u548C\u53EF\u9760\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"11. \u4FEE\u590D\u9690\u85CF\u5217\u76F8\u5173\u7684\u5217\u6743\u9650\u95EE\u9898"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u9690\u85CF\u5217\u7684\u6743\u9650\u8BBE\u7F6E\u53EF\u80FD\u4E0D\u6B63\u786E\uFF0C\u6B64\u4FEE\u590D\u786E\u4FDD\u4E86\u5217\u6743\u9650\u8BBE\u7F6E\u7684\u6B63\u786E\u6027\u548C\u5B89\u5168\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"12. \u4FEE\u590D\u5728 K8s \u90E8\u7F72\u4E2D Arrow Flight \u65E0\u6CD5\u83B7\u53D6\u6B63\u786E IP \u7684\u95EE\u9898"})}),"\n",(0,i.jsx)(n.p,{children:"\u6B64\u4FEE\u590D\u89E3\u51B3\u4E86\u5728 Kubernetes \u90E8\u7F72\u73AF\u5883\u4E2D Arrow Flight \u65E0\u6CD5\u6B63\u786E\u83B7\u53D6 IP \u5730\u5740\u7684\u95EE\u9898\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let i={},l=r.createContext(i);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);