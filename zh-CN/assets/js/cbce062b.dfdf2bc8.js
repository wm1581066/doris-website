"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["836091"],{312472:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>x,assets:()=>c,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"table-design/data-partitioning/auto-bucket","title":"\u81EA\u52A8\u5206\u6876","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/table-design/data-partitioning/auto-bucket.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/auto-bucket","permalink":"/zh-CN/docs/2.0/table-design/data-partitioning/auto-bucket","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u81EA\u52A8\u5206\u6876","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u624B\u52A8\u5206\u6876","permalink":"/zh-CN/docs/2.0/table-design/data-partitioning/manual-bucketing"},"next":{"title":"\u5E38\u89C1\u95EE\u9898","permalink":"/zh-CN/docs/2.0/table-design/data-partitioning/common-issues"}}'),s=i("785893"),a=i("250065");let l={title:"\u81EA\u52A8\u5206\u6876",language:"zh-CN"},r=void 0,c={},d=[{value:"\u521D\u59CB\u5206\u6876\u63A8\u7B97",id:"\u521D\u59CB\u5206\u6876\u63A8\u7B97",level:2},{value:"\u540E\u7EED\u5206\u6876\u63A8\u7B97",id:"\u540E\u7EED\u5206\u6876\u63A8\u7B97",level:2},{value:"\u8BF4\u660E",id:"\u8BF4\u660E",level:2}];function o(n){let e={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u7528\u6237\u7ECF\u5E38\u8BBE\u7F6E\u4E0D\u5408\u9002\u7684 bucket\uFF0C\u5BFC\u81F4\u5404\u79CD\u95EE\u9898\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6765\u81EA\u52A8\u8BBE\u7F6E\u5206\u6876\u6570\u3002\u5F53\u524D\u53EA\u5BF9 OLAP \u8868\u751F\u6548\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:["\u6CE8\u610F\uFF1A\u8FD9\u4E2A\u529F\u80FD\u5728\u88AB CCR \u540C\u6B65\u65F6\u5C06\u4F1A\u5931\u6548\u3002\u5982\u679C\u8FD9\u4E2A\u8868\u662F\u88AB CCR \u590D\u5236\u800C\u6765\u7684\uFF0C\u5373 PROPERTIES \u4E2D\u5305\u542B",(0,s.jsx)(e.code,{children:"is_being_synced = true"}),"\u65F6\uFF0C\u5728",(0,s.jsx)(e.code,{children:"show create table"}),"\u4E2D\u4F1A\u663E\u793A\u5F00\u542F\u72B6\u6001\uFF0C\u4F46\u4E0D\u4F1A\u5B9E\u9645\u751F\u6548\u3002\u5F53",(0,s.jsx)(e.code,{children:"is_being_synced"}),"\u88AB\u8BBE\u7F6E\u4E3A ",(0,s.jsx)(e.code,{children:"false"})," \u65F6\uFF0C\u8FD9\u4E9B\u529F\u80FD\u5C06\u4F1A\u6062\u590D\u751F\u6548\uFF0C\u4F46",(0,s.jsx)(e.code,{children:"is_being_synced"}),"\u5C5E\u6027\u4EC5\u4F9B CCR \u5916\u56F4\u6A21\u5757\u4F7F\u7528\uFF0C\u5728 CCR \u540C\u6B65\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u8981\u624B\u52A8\u8BBE\u7F6E\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:'\u4EE5\u5F80\u521B\u5EFA\u5206\u6876\u65F6\u9700\u8981\u624B\u52A8\u8BBE\u5B9A\u5206\u6876\u6570\uFF0C\u800C\u81EA\u52A8\u5206\u6876\u63A8\u7B97\u529F\u80FD\u662F Apache Doris \u53EF\u4EE5\u52A8\u6001\u5730\u63A8\u7B97\u5206\u6876\u4E2A\u6570\uFF0C\u4F7F\u5F97\u5206\u6876\u6570\u59CB\u7EC8\u4FDD\u6301\u5728\u4E00\u4E2A\u5408\u9002\u8303\u56F4\u5185\uFF0C\u8BA9\u7528\u6237\u4E0D\u518D\u64CD\u5FC3\u6876\u6570\u7684\u7EC6\u679D\u672B\u8282\u3002\u9996\u5148\u8BF4\u660E\u4E00\u70B9\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u9610\u8FF0\u8BE5\u529F\u80FD\uFF0C\u8BE5\u90E8\u5206\u4F1A\u5C06\u6876\u62C6\u5206\u4E3A\u4E24\u4E2A\u65F6\u671F\u7684\u6876\uFF0C\u5373\u521D\u59CB\u5206\u6876\u4EE5\u53CA\u540E\u7EED\u5206\u6876\uFF1B\u8FD9\u91CC\u7684\u521D\u59CB\u548C\u540E\u7EED\u53EA\u662F\u672C\u6587\u4E3A\u4E86\u63CF\u8FF0\u6E05\u695A\u8BE5\u529F\u80FD\u800C\u91C7\u7528\u7684\u672F\u8BED\uFF0CApache Doris \u5206\u6876\u672C\u8EAB\u6CA1\u6709\u521D\u59CB\u548C\u540E\u7EED\u4E4B\u5206\u3002\u4ECE\u4E0A\u6587\u4E2D\u521B\u5EFA\u5206\u6876\u4E00\u8282\u6211\u4EEC\u77E5\u9053\uFF0CBUCKET_DESC \u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u662F\u9700\u8981\u6307\u5B9A\u5206\u6876\u4E2A\u6570\uFF1B\u800C\u5728\u81EA\u52A8\u5206\u6876\u63A8\u7B97\u529F\u80FD\u4E0A\uFF0CBUCKET_DESC \u7684\u8BED\u6CD5\u76F4\u63A5\u5C06\u5206\u6876\u6570\u6539\u6210"Auto"\uFF0C\u5E76\u65B0\u589E\u4E00\u4E2A Properties \u914D\u7F6E\u5373\u53EF\uFF1A'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'-- \u65E7\u7248\u672C\u6307\u5B9A\u5206\u6876\u4E2A\u6570\u7684\u521B\u5EFA\u8BED\u6CD5\nDISTRIBUTED BY HASH(site) BUCKETS 20\n\n-- \u65B0\u7248\u672C\u4F7F\u7528\u81EA\u52A8\u5206\u6876\u63A8\u7B97\u7684\u521B\u5EFA\u8BED\u6CD5\nDISTRIBUTED BY HASH(site) BUCKETS AUTO\nproperties("estimate_partition_size" = "2G")\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u65B0\u589E\u7684\u914D\u7F6E\u53C2\u6570 estimate_partition_size \u8868\u793A\u4E00\u4E2A\u5355\u5206\u533A\u7684\u6570\u636E\u91CF\u3002\u8BE5\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u7ED9\u51FA\u5219 Doris \u4F1A\u5C06 estimate_partition_size \u7684\u9ED8\u8BA4\u503C\u53D6\u4E3A 10GB\u3002\u4ECE\u4E0A\u6587\u4E2D\u5DF2\u7ECF\u5F97\u77E5\uFF0C\u4E00\u4E2A\u5206\u6876\u5728\u7269\u7406\u5C42\u9762\u5C31\u662F\u4E00\u4E2A Tablet\uFF0C\u4E3A\u4E86\u83B7\u5F97\u6700\u597D\u7684\u6027\u80FD\uFF0C\u5EFA\u8BAE Tablet \u7684\u5927\u5C0F\u5728 1GB - 10GB \u7684\u8303\u56F4\u5185\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u90A3\u4E48\u81EA\u52A8\u5206\u6876\u63A8\u7B97\u662F\u5982\u4F55\u4FDD\u8BC1 Tablet \u5927\u5C0F\u5904\u4E8E\u8FD9\u4E2A\u8303\u56F4\u5185\u7684\u5462\uFF1F"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u82E5\u662F\u6574\u4F53\u6570\u636E\u91CF\u8F83\u5C0F\uFF0C\u5219\u5206\u6876\u6570\u4E0D\u8981\u8BBE\u7F6E\u8FC7\u591A"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u82E5\u662F\u6574\u4F53\u6570\u636E\u91CF\u8F83\u5927\uFF0C\u5219\u5E94\u4F7F\u6876\u6570\u8DDF\u603B\u7684\u78C1\u76D8\u5757\u6570\u76F8\u5173\uFF0C\u5145\u5206\u5229\u7528\u6BCF\u53F0 BE \u673A\u5668\u548C\u6BCF\u5757\u78C1\u76D8\u7684\u80FD\u529B"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u521D\u59CB\u5206\u6876\u63A8\u7B97",children:"\u521D\u59CB\u5206\u6876\u63A8\u7B97"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u5148\u6839\u636E\u6570\u636E\u91CF\u5F97\u51FA\u4E00\u4E2A\u6876\u6570 N\u3002\u9996\u5148\u4F7F\u7528 estimate_partition_size \u7684\u503C\u9664\u4EE5 5\uFF08\u6309\u6587\u672C\u683C\u5F0F\u5B58\u5165 Doris \u4E2D\u6709 5 \u6BD4 1 \u7684\u6570\u636E\u538B\u7F29\u6BD4\u8BA1\u7B97\uFF09\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u4E3A\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"(, 100MB)\uFF0C\u5219\u53D6 N=1\n[100MB, 1GB)\uFF0C\u5219\u53D6 N=2\n[1GB, )\uFF0C\u5219\u6BCF GB \u4E00\u4E2A\u5206\u6876\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u6839\u636E BE \u8282\u70B9\u6570\u4EE5\u53CA\u6BCF\u4E2A BE \u8282\u70B9\u7684\u78C1\u76D8\u5BB9\u91CF\uFF0C\u8BA1\u7B97\u51FA\u6876\u6570 M\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"\u5176\u4E2D\u6BCF\u4E2A BE \u8282\u70B9\u7B97 1\uFF0C\u6BCF 50G \u7684\u78C1\u76D8\u5BB9\u91CF\u7B97 1\uFF0C\nM \u7684\u8BA1\u7B97\u89C4\u5219\u4E3A\uFF1AM = BE \u8282\u70B9\u6570 * ( \u4E00\u5757\u78C1\u76D8\u5757\u5927\u5C0F / 50GB) *\u78C1\u76D8\u5757\u6570 \n\u4E3E\u4F8B\uFF1A\u6709 3 \u53F0 BE\uFF0C\u6BCF\u53F0 BE \u90FD\u6709 4 \u5757 500GB \u7684\u78C1\u76D8\uFF0C\u90A3\u4E48 M = 3 (500GB / 50GB) 4 = 120\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u5F97\u5230\u6700\u7EC8\u7684\u5206\u6876\u4E2A\u6570\u8BA1\u7B97\u903B\u8F91\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"\u5148\u8BA1\u7B97\u4E00\u4E2A\u4E2D\u95F4\u503C x = min(M, N, 128)\uFF0C \n\u5982\u679C x < N \u5E76\u4E14 x < BE \u8282\u70B9\u4E2A\u6570\uFF0C\u5219\u6700\u7EC8\u5206\u6876\u4E3A y \u5373 BE \u8282\u70B9\u4E2A\u6570\uFF1B\n\u5426\u5219\u6700\u7EC8\u5206\u6876\u6570\u4E3A x\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"x = max(x, autobucket_min_buckets), \u8FD9\u91CC autobucket_min_buckets \u662F\u5728 Config \u4E2D\u914D\u7F6E\u7684\uFF0C\u9ED8\u8BA4\u662F 1"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4E0A\u8FF0\u8FC7\u7A0B\u4F2A\u4EE3\u7801\u8868\u73B0\u5F62\u5F0F\u4E3A\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"int N = \u8BA1\u7B97 N \u503C;\nint M = \u8BA1\u7B97 M \u503C;\n\nint y = BE \u8282\u70B9\u4E2A\u6570;\nint x = min(M, N, 128);\n\nif (x < N && x < y) {\n  return y;\n}\nreturn x;\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"5",children:["\n",(0,s.jsx)(e.li,{children:"\u793A\u4F8B\uFF1A\u6709\u4E86\u4E0A\u8FF0\u7B97\u6CD5\uFF0C\u54B1\u4EEC\u518D\u5F15\u5165\u4E00\u4E9B\u4F8B\u5B50\u6765\u66F4\u597D\u5730\u7406\u89E3\u8FD9\u90E8\u5206\u903B\u8F91\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"case1:\n\u6570\u636E\u91CF 100 MB\uFF0C10 \u53F0 BE \u673A\u5668\uFF0C2TB *3 \u5757\u76D8\n\u6570\u636E\u91CF N = 1\nBE \u78C1\u76D8 M = 10* (2TB/50GB) * 3 = 1230\nx = min(M, N, 128) =  1\n\u6700\u7EC8\uFF1A1\n\ncase2:\n\u6570\u636E\u91CF 1GB, 3 \u53F0 BE \u673A\u5668\uFF0C500GB *2 \u5757\u76D8\u76D8\n\u6570\u636E\u91CF N = 2\nBE \u78C1\u76D8 M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) =  2\n\u6700\u7EC8\uFF1A2\n\ncase3:\n\u6570\u636E\u91CF 100GB\uFF0C3 \u53F0 BE \u673A\u5668\uFF0C500GB *2 \u5757\u76D8\n\u6570\u636E\u91CF N = 20\nBE \u78C1\u76D8 M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) =  20\n\u6700\u7EC8\uFF1A20\n\ncase4:\n\u6570\u636E\u91CF 500GB\uFF0C3 \u53F0 BE \u673A\u5668\uFF0C1TB *1 \u5757\u76D8\n\u6570\u636E\u91CF N = 100\nBE \u78C1\u76D8 M = 3* (1TB /50GB) * 1 = 6060\nx = min(M, N, 128) =  63\n\u6700\u7EC8\uFF1A63\n\ncase5:\n\u6570\u636E\u91CF 500GB\uFF0C10 \u53F0 BE \u673A\u5668\uFF0C2TB *3 \u5757\u76D8*3 \u5757\u76D8\n\u6570\u636E\u91CF N =  100\nBE \u78C1\u76D8 M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) =  100\n\u6700\u7EC8\uFF1A100\n\ncase 6:\n\u6570\u636E\u91CF 1TB\uFF0C10 \u53F0 BE \u673A\u5668\uFF0C2TB *3 \u5757\u76D8\n\u6570\u636E\u91CF N =  205\nBE \u78C1\u76D8 M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) =  128\n\u6700\u7EC8\uFF1A128\n\ncase 7:\n\u6570\u636E\u91CF 500GB\uFF0C1 \u53F0 BE \u673A\u5668\uFF0C100TB *1 \u5757\u76D8\n\u6570\u636E\u91CF N = 100\nBE \u78C1\u76D8 M =  1* (100TB / 50GB) * 1 = 2048\nx = min(M, N, 128) =  100\n\u6700\u7EC8\uFF1A100\n\ncase 8:\n\u6570\u636E\u91CF 1TB, 200 \u53F0 BE \u673A\u5668\uFF0C4TB *7 \u5757\u76D8\n\u6570\u636E\u91CF N = 205\nBE \u78C1\u76D8 M = 200* (4TB / 50GB) * 7 = 114800\nx = min(M, N, 128) =  128\n\u6700\u7EC8\uFF1A200\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u540E\u7EED\u5206\u6876\u63A8\u7B97",children:"\u540E\u7EED\u5206\u6876\u63A8\u7B97"}),"\n",(0,s.jsx)(e.p,{children:"\u4E0A\u8FF0\u662F\u5173\u4E8E\u521D\u59CB\u5206\u6876\u7684\u8BA1\u7B97\u903B\u8F91\uFF0C\u540E\u7EED\u5206\u6876\u6570\u56E0\u4E3A\u5DF2\u7ECF\u6709\u4E86\u4E00\u5B9A\u7684\u5206\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u6839\u636E\u5DF2\u6709\u7684\u5206\u533A\u6570\u636E\u91CF\u6765\u8FDB\u884C\u8BC4\u4F30\u3002\u540E\u7EED\u5206\u6876\u6570\u4F1A\u6839\u636E\u6700\u591A\u524D 7 \u4E2A\u5206\u533A\u6570\u636E\u91CF\u7684 EMA\uFF08\u77ED\u671F\u6307\u6570\u79FB\u52A8\u5E73\u5747\u7EBF\uFF09\u503C\uFF0C\u4F5C\u4E3A estimate_partition_size \u8FDB\u884C\u8BC4\u4F30\u3002\u6B64\u65F6\u8BA1\u7B97\u5206\u6876\u6709\u4E24\u79CD\u8BA1\u7B97\u65B9\u5F0F\uFF0C\u5047\u8BBE\u4EE5\u5929\u6765\u5206\u533A\uFF0C\u5F80\u524D\u6570\u7B2C\u4E00\u5929\u5206\u533A\u5927\u5C0F\u4E3A S7\uFF0C\u5F80\u524D\u6570\u7B2C\u4E8C\u5929\u5206\u533A\u5927\u5C0F\u4E3A S6\uFF0C\u4F9D\u6B21\u7C7B\u63A8\u5230 S1\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u679C 7 \u5929\u5185\u7684\u5206\u533A\u6570\u636E\u6BCF\u65E5\u4E25\u683C\u9012\u589E\uFF0C\u5219\u6B64\u65F6\u4F1A\u53D6\u8D8B\u52BF\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u6709 6 \u4E2A delta \u503C\uFF0C\u5206\u522B\u662F"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"S7 - S6 = delta1,\nS6 - S5 = delta2,\n...\nS2 - S1 = delta6\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u6B64\u5F97\u5230 ema(delta) \u503C\uFF1A\u90A3\u4E48\uFF0C\u4ECA\u5929\u7684 estimate_partition_size = S7 + ema(delta)\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u975E\u7B2C\u4E00\u79CD\u7684\u60C5\u51B5\uFF0C\u6B64\u65F6\u76F4\u63A5\u53D6\u524D\u51E0\u5929\u7684 EMA \u5E73\u5747\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u4ECA\u5929\u7684 estimate_partition_size = EMA(S1, ..., S7)\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BF4\u660E",children:"\u8BF4\u660E"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636E\u4E0A\u8FF0\u7B97\u6CD5\uFF0C\u521D\u59CB\u5206\u6876\u4E2A\u6570\u4EE5\u53CA\u540E\u7EED\u5206\u6876\u4E2A\u6570\u90FD\u80FD\u88AB\u8BA1\u7B97\u51FA\u6765\u3002\u8DDF\u4E4B\u524D\u53EA\u80FD\u6307\u5B9A\u56FA\u5B9A\u5206\u6876\u6570\u4E0D\u540C\uFF0C\u7531\u4E8E\u4E1A\u52A1\u6570\u636E\u7684\u53D8\u5316\uFF0C\u6709\u53EF\u80FD\u524D\u9762\u5206\u533A\u7684\u5206\u6876\u6570\u548C\u540E\u9762\u5206\u533A\u7684\u5206\u6876\u6570\u4E0D\u4E00\u6837\uFF0C\u8FD9\u5BF9\u7528\u6237\u662F\u900F\u660E\u7684\uFF0C\u7528\u6237\u65E0\u9700\u5173\u5FC3\u6BCF\u4E00\u5206\u533A\u5177\u4F53\u7684\u5206\u6876\u6570\u662F\u591A\u5C11\uFF0C\u800C\u8FD9\u4E00\u81EA\u52A8\u63A8\u7B97\u7684\u529F\u80FD\u4F1A\u8BA9\u5206\u6876\u6570\u66F4\u52A0\u5408\u7406\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5F00\u542F autobucket \u4E4B\u540E\uFF0C\u5728",(0,s.jsx)(e.code,{children:"show create table"}),"\u7684\u65F6\u5019\u770B\u5230\u7684 schema \u4E5F\u662F",(0,s.jsx)(e.code,{children:"BUCKETS AUTO"}),".\u5982\u679C\u60F3\u8981\u67E5\u770B\u786E\u5207\u7684 bucket \u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7",(0,s.jsx)(e.code,{children:"show partitions from ${table};"}),"\u6765\u67E5\u770B\u3002"]})]})}function x(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return l}});var t=i(667294);let s={},a=t.createContext(s);function l(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);