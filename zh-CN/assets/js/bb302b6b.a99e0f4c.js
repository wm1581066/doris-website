"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["947082"],{878855:function(e,a,n){n.r(a),n.d(a,{metadata:()=>r,contentTitle:()=>o,default:()=>d,assets:()=>s,toc:()=>t,frontMatter:()=>c});var r=JSON.parse('{"id":"admin-manual/memory-management/memory-feature/memory-control-strategy","title":"\u5185\u5B58\u63A7\u5236\u7B56\u7565","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-feature/memory-control-strategy.md","sourceDirName":"admin-manual/memory-management/memory-feature","slug":"/admin-manual/memory-management/memory-feature/memory-control-strategy","permalink":"/zh-CN/docs/admin-manual/memory-management/memory-feature/memory-control-strategy","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5185\u5B58\u63A7\u5236\u7B56\u7565","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5185\u5B58\u8DDF\u8E2A\u5668","permalink":"/zh-CN/docs/admin-manual/memory-management/memory-feature/memory-tracker"},"next":{"title":"FE \u65E5\u5FD7\u7BA1\u7406","permalink":"/zh-CN/docs/admin-manual/log-management/fe-log"}}'),l=n("785893"),i=n("250065");let c={title:"\u5185\u5B58\u63A7\u5236\u7B56\u7565",language:"zh-CN"},o=void 0,s={},t=[{value:"Doris Allocator",id:"doris-allocator",level:2},{value:"Arena",id:"arena",level:3},{value:"HashTable",id:"hashtable",level:3},{value:"PODArray",id:"podarray",level:3},{value:"\u5185\u5B58\u590D\u7528",id:"\u5185\u5B58\u590D\u7528",level:3},{value:"\u5185\u5B58 GC",id:"\u5185\u5B58-gc",level:2},{value:"\u5185\u5B58\u9650\u5236\u548C\u6C34\u4F4D\u7EBF\u8BA1\u7B97\u65B9\u6CD5",id:"\u5185\u5B58\u9650\u5236\u548C\u6C34\u4F4D\u7EBF\u8BA1\u7B97\u65B9\u6CD5",level:2},{value:"\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u8BA1\u7B97",id:"\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u8BA1\u7B97",level:2}];function m(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.p,{children:"Doris Allocator \u4F5C\u4E3A\u7CFB\u7EDF\u4E2D\u5927\u5757\u5185\u5B58\u7533\u8BF7\u7684\u7EDF\u4E00\u5165\u53E3\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u5E72\u9884\u9650\u5236\u5185\u5B58\u5206\u914D\u7684\u8FC7\u7A0B\uFF0C\u786E\u4FDD\u5185\u5B58\u7533\u8BF7\u7684\u9AD8\u6548\u53EF\u63A7\u3002"}),"\n",(0,l.jsx)(a.p,{children:"Doris MemoryArbitrator \u4F5C\u4E3A\u5185\u5B58\u4EF2\u88C1\u5668\uFF0C\u5B9E\u65F6\u76D1\u63A7 Doris BE \u8FDB\u7A0B\u7684\u5185\u5B58\u4F7F\u7528\uFF0C\u5E76\u5B9A\u65F6\u66F4\u65B0\u5185\u5B58\u72B6\u6001\u548C\u6536\u96C6\u5185\u5B58\u76F8\u5173\u7EDF\u8BA1\u4FE1\u606F\u7684\u5FEB\u7167\u3002"}),"\n",(0,l.jsx)(a.p,{children:"Doris MemoryReclamation \u4F5C\u4E3A\u5185\u5B58\u56DE\u6536\u5668\uFF0C\u5728\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\u65F6\u89E6\u53D1\u5185\u5B58 GC \u56DE\u6536\u90E8\u5206\u5185\u5B58\uFF0C\u4FDD\u8BC1\u96C6\u7FA4\u4E0A\u5927\u90E8\u5206\u4EFB\u52A1\u6267\u884C\u7684\u7A33\u5B9A\u6027\u3002"}),"\n",(0,l.jsx)(a.h2,{id:"doris-allocator",children:"Doris Allocator"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Memory Management Overview",src:n(30295).Z+"",width:"1080",height:"500"})}),"\n",(0,l.jsx)(a.p,{children:"Allocator\u4ECE\u7CFB\u7EDF\u7533\u8BF7\u5185\u5B58\uFF0C\u5E76\u5728\u7533\u8BF7\u8FC7\u7A0B\u4E2D\u4F7F\u7528 MemTracker \u8DDF\u8E2A\u5185\u5B58\u7533\u8BF7\u548C\u91CA\u653E\u7684\u5927\u5C0F\uFF0C\u6267\u884C\u7B97\u5B50\u6240\u9700\u6279\u91CF\u7533\u8BF7\u7684\u5927\u5185\u5B58\u5C06\u4EA4\u7531\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u7BA1\u7406\u3002"}),"\n",(0,l.jsx)(a.p,{children:"\u67E5\u8BE2\u6267\u884C\u8FC7\u7A0B\u4E2D\u5927\u5757\u5185\u5B58\u7684\u5206\u914D\u4E3B\u8981\u4F7F\u7528 Arena\u3001HashTable\u3001PODArray \u8FD9\u4E09\u4E2A\u6570\u636E\u7ED3\u6784\u7BA1\u7406\uFF0CAllocator \u4F5C\u4E3A Arena\u3001PODArray\u3001HashTable \u7684\u7EDF\u4E00\u5185\u5B58\u63A5\u53E3\uFF0C\u5B9E\u73B0\u5185\u5B58\u7EDF\u4E00\u7BA1\u7406\u548C\u5C40\u90E8\u7684\u5185\u5B58\u590D\u7528\u3002"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Memory Allocator",src:n(420438).Z+"",width:"1080",height:"670"})}),"\n",(0,l.jsx)(a.p,{children:"Allocator \u4F7F\u7528\u901A\u7528\u5185\u5B58\u5206\u914D\u5668\u7533\u8BF7\u5185\u5B58\uFF0C\u5728 Jemalloc \u548C TCMalloc \u7684\u9009\u62E9\u4E0A\uFF0CDoris \u4E4B\u524D\u5728\u9AD8\u5E76\u53D1\u6D4B\u8BD5\u65F6 TCMalloc \u4E2D CentralFreeList \u7684 Spin Lock \u80FD\u5360\u5230\u67E5\u8BE2\u603B\u8017\u65F6\u7684 40%\uFF0C\u867D\u7136\u5173\u95ED aggressive memory decommit \u80FD\u6709\u6548\u63D0\u5347\u6027\u80FD\uFF0C\u4F46\u8FD9\u4F1A\u6D6A\u8D39\u975E\u5E38\u591A\u7684\u5185\u5B58\uFF0C\u4E3A\u6B64\u4E0D\u5F97\u4E0D\u5355\u72EC\u7528\u4E00\u4E2A\u7EBF\u7A0B\u5B9A\u671F\u56DE\u6536 TCMalloc \u7684\u7F13\u5B58\u3002Jemalloc \u5728\u9AD8\u5E76\u53D1\u4E0B\u6027\u80FD\u4F18\u4E8E TCMalloc \u4E14\u6210\u719F\u7A33\u5B9A\uFF0C\u5728 Doris 1.2.2 \u7248\u672C\u4E2D\u5207\u6362\u4E3A Jemalloc\uFF0C\u8C03\u4F18\u540E\u5728\u5927\u591A\u6570\u573A\u666F\u4E0B\u6027\u80FD\u548C TCMalloc \u6301\u5E73\uFF0C\u5E76\u4F7F\u7528\u66F4\u5C11\u7684\u5185\u5B58\uFF0C\u9AD8\u5E76\u53D1\u573A\u666F\u7684\u6027\u80FD\u4E5F\u6709\u660E\u663E\u63D0\u5347\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"arena",children:"Arena"}),"\n",(0,l.jsx)(a.p,{children:"Arena \u662F\u4E00\u4E2A\u5185\u5B58\u6C60\uFF0C\u7EF4\u62A4\u4E00\u4E2A\u5185\u5B58\u5757\u5217\u8868\uFF0C\u5E76\u4ECE\u4E2D\u5206\u914D\u5185\u5B58\u4EE5\u54CD\u5E94 alloc \u8BF7\u6C42\uFF0C\u4ECE\u800C\u51CF\u5C11\u4ECE\u7CFB\u7EDF\u7533\u8BF7\u5185\u5B58\u7684\u6B21\u6570\u4EE5\u63D0\u5347\u6027\u80FD\uFF0C\u5185\u5B58\u5757\u88AB\u79F0\u4E3A Chunk\uFF0C\u5728\u5185\u5B58\u6C60\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u5185\u5B58\u5728\uFF0C\u5728\u6790\u6784\u65F6\u7EDF\u4E00\u91CA\u653E\uFF0C\u8FD9\u901A\u5E38\u548C\u67E5\u8BE2\u751F\u547D\u5468\u671F\u76F8\u540C\uFF0C\u5E76\u652F\u6301\u5185\u5B58\u5BF9\u9F50\uFF0C\u4E3B\u8981\u7528\u4E8E\u4FDD\u5B58 Shuffle \u8FC7\u7A0B\u4E2D\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u6570\u636E\u3001HashTable \u4E2D\u5E8F\u5217\u5316 Key \u7B49\u3002"}),"\n",(0,l.jsx)(a.p,{children:"Chunk \u521D\u59CB 4096 \u5B57\u8282\uFF0C\u5185\u90E8\u4F7F\u7528\u6E38\u6807\u8BB0\u5F55\u5206\u914D\u8FC7\u7684\u5185\u5B58\u4F4D\u7F6E\uFF0C\u5982\u679C\u5F53\u524D Chunk \u5269\u4F59\u5927\u5C0F\u65E0\u6CD5\u6EE1\u8DB3\u5F53\u524D\u5185\u5B58\u7533\u8BF7\uFF0C\u5219\u7533\u8BF7\u4E00\u4E2A\u65B0\u7684 Chunk \u6DFB\u52A0\u5230\u5217\u8868\u4E2D\uFF0C\u4E3A\u51CF\u5C11\u4ECE\u7CFB\u7EDF\u7533\u8BF7\u5185\u5B58\u7684\u6B21\u6570\uFF0C\u5728\u5F53\u524D Chunk \u5C0F\u4E8E 128M \u65F6\uFF0C\u6BCF\u6B21\u65B0\u7533\u8BF7\u7684 Chunk \u5927\u5C0F\u52A0\u500D\uFF0C\u5728\u5F53\u524D Chunk \u5927\u4E8E 128M \u65F6\uFF0C\u65B0\u7533\u8BF7\u7684 Chunk \u5927\u5C0F\u5728\u6EE1\u8DB3\u672C\u6B21\u5185\u5B58\u7533\u8BF7\u7684\u524D\u63D0\u4E0B\u81F3\u591A\u989D\u5916\u5206\u914D 128M\uFF0C\u907F\u514D\u6D6A\u8D39\u8FC7\u591A\u5185\u5B58\uFF0C\u9ED8\u8BA4\u4E4B\u524D\u7684 Chunk \u4E0D\u4F1A\u518D\u53C2\u4E0E\u540E\u7EED alloc\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"hashtable",children:"HashTable"}),"\n",(0,l.jsx)(a.p,{children:"Doris \u4E2D\u7684 HashTable \u4E3B\u8981\u5728 Hash Join\u3001\u805A\u5408\u3001\u96C6\u5408\u8FD0\u7B97\u3001\u7A97\u53E3\u51FD\u6570\u4E2D\u5E94\u7528\uFF0C\u4E3B\u8981\u4F7F\u7528\u7684 PartitionedHashTable \u6700\u591A\u5305\u542B 16 \u4E2A\u5B50 HashTable\uFF0C\u652F\u6301\u4E24\u4E2A HashTable \u7684\u5E76\u884C\u5316\u5408\u5E76\uFF0C\u6BCF\u4E2A\u5B50 Hash Join \u72EC\u7ACB\u6269\u5BB9\uFF0C\u9884\u671F\u53EF\u51CF\u5C11\u603B\u5185\u5B58\u7684\u4F7F\u7528\uFF0C\u6269\u5BB9\u671F\u95F4\u7684\u5EF6\u8FDF\u4E5F\u5C06\u88AB\u5206\u644A\u3002"}),"\n",(0,l.jsx)(a.p,{children:"\u5728 HashTable \u5C0F\u4E8E 8M \u65F6\u5C06\u4EE5 4 \u7684\u500D\u6570\u6269\u5BB9\uFF0C\u5728 HashTable \u5927\u4E8E 8M \u65F6\u5C06\u4EE5 2 \u7684\u500D\u6570\u6269\u5BB9\uFF0C\u5728 HashTable \u5C0F\u4E8E 2G \u65F6\u6269\u5BB9\u56E0\u5B50\u4E3A 50%\uFF0C\u5373\u5728 HashTable \u88AB\u586B\u5145\u5230 50% \u65F6\u89E6\u53D1\u6269\u5BB9\uFF0C\u5728 HashTable \u5927\u4E8E 2G \u540E\u6269\u5BB9\u56E0\u5B50\u88AB\u8C03\u6574\u4E3A 75%\uFF0C\u4E3A\u4E86\u907F\u514D\u6D6A\u8D39\u8FC7\u591A\u5185\u5B58\uFF0C\u5728\u6784\u5EFA HashTable \u524D\u901A\u5E38\u4F1A\u4F9D\u636E\u6570\u636E\u91CF\u9884\u6269\u5BB9\u3002\u6B64\u5916 Doris \u4E3A\u4E0D\u540C\u573A\u666F\u8BBE\u8BA1\u4E86\u4E0D\u540C\u7684 HashTable\uFF0C\u6BD4\u5982\u805A\u5408\u573A\u666F\u4F7F\u7528 PHmap \u4F18\u5316\u5E76\u53D1\u6027\u80FD\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"podarray",children:"PODArray"}),"\n",(0,l.jsx)(a.p,{children:"PODArray \u662F\u4E00\u4E2A POD \u7C7B\u578B\u7684\u52A8\u6001\u6570\u7EC4\uFF0C\u4E0E std::vector \u7684\u533A\u522B\u5728\u4E8E\u4E0D\u4F1A\u521D\u59CB\u5316\u5143\u7D20\uFF0C\u652F\u6301\u90E8\u5206 std::vector \u7684\u63A5\u53E3\uFF0C\u540C\u6837\u652F\u6301\u5185\u5B58\u5BF9\u9F50\u5E76\u4EE5 2 \u7684\u500D\u6570\u6269\u5BB9\uFF0CPODArray \u6790\u6784\u65F6\u4E0D\u4F1A\u8C03\u7528\u6BCF\u4E2A\u5143\u7D20\u7684\u6790\u6784\u51FD\u6570\uFF0C\u800C\u662F\u76F4\u63A5\u91CA\u653E\u6389\u6574\u5757\u5185\u5B58\uFF0C\u4E3B\u8981\u7528\u4E8E\u4FDD\u5B58 String \u7B49 Column \u4E2D\u7684\u6570\u636E\uFF0C\u6B64\u5916\u5728\u51FD\u6570\u8BA1\u7B97\u548C\u8868\u8FBE\u5F0F\u8FC7\u6EE4\u4E2D\u4E5F\u88AB\u5927\u91CF\u4F7F\u7528\u3002"}),"\n",(0,l.jsx)(a.h3,{id:"\u5185\u5B58\u590D\u7528",children:"\u5185\u5B58\u590D\u7528"}),"\n",(0,l.jsx)(a.p,{children:"Doris \u5728\u6267\u884C\u5C42\u505A\u4E86\u5927\u91CF\u5185\u5B58\u590D\u7528\uFF0C\u53EF\u89C1\u7684\u5185\u5B58\u70ED\u70B9\u57FA\u672C\u90FD\u88AB\u5C4F\u853D\u3002\u6BD4\u5982\u5BF9\u6570\u636E\u5757 Block \u7684\u590D\u7528\u8D2F\u7A7F Query \u6267\u884C\u7684\u59CB\u7EC8\uFF1B\u6BD4\u5982 Shuffle \u7684 Sender \u7AEF\u59CB\u7EC8\u4FDD\u6301\u4E00\u4E2A Block \u63A5\u6536\u6570\u636E\uFF0C\u4E00\u4E2A Block \u5728 RPC \u4F20\u8F93\u4E2D\uFF0C\u4E24\u4E2A Block \u4EA4\u66FF\u4F7F\u7528\uFF1B\u8FD8\u6709\u5B58\u50A8\u5C42\u5728\u8BFB\u4E00\u4E2A Tablet \u65F6\u590D\u7528\u8C13\u8BCD\u5217\u5FAA\u73AF\u8BFB\u6570\u3001\u8FC7\u6EE4\u3001\u62F7\u8D1D\u5230\u4E0A\u5C42 Block\u3001Clear\uFF1B\u5BFC\u5165 Aggregate Key \u8868\u65F6\u7F13\u5B58\u6570\u636E\u7684 MemTable \u5230\u8FBE\u4E00\u5B9A\u5927\u5C0F\u9884\u805A\u5408\u6536\u7F29\u540E\u7EE7\u7EED\u5199\u5165\u7B49\u7B49\u3002"}),"\n",(0,l.jsx)(a.p,{children:"\u6B64\u5916 Doris \u4F1A\u5728\u6570\u636E Scan \u5F00\u59CB\u524D\u4F9D\u636E Scanner \u4E2A\u6570\u548C\u7EBF\u7A0B\u6570\u9884\u5206\u914D\u4E00\u6279 Free Block\uFF0C\u6BCF\u6B21\u8C03\u5EA6 Scanner \u65F6\u4F1A\u4ECE\u4E2D\u83B7\u53D6\u4E00\u4E2A Block \u5E76\u4F20\u9012\u5230\u5B58\u50A8\u5C42\u8BFB\u53D6\u6570\u636E\uFF0C\u8BFB\u53D6\u5B8C\u6210\u540E\u4F1A\u5C06 Block \u653E\u5230\u751F\u4EA7\u8005\u961F\u5217\u4E2D\uFF0C\u4F9B\u4E0A\u5C42\u7B97\u5B50\u6D88\u8D39\u5E76\u8FDB\u884C\u540E\u7EED\u8BA1\u7B97\uFF0C\u4E0A\u5C42\u7B97\u5B50\u5C06\u6570\u636E\u62F7\u8D70\u540E\u4F1A\u5C06 Block \u91CD\u65B0\u653E\u56DE Free Block \u4E2D\uFF0C\u7528\u4E8E\u4E0B\u6B21 Scanner \u8C03\u5EA6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5185\u5B58\u590D\u7528\uFF0C\u6570\u636E Scan \u5B8C\u6210\u540E Free Block \u4F1A\u5728\u4E4B\u524D\u9884\u5206\u914D\u7684\u7EBF\u7A0B\u7EDF\u4E00\u91CA\u653E\uFF0C\u907F\u514D\u5185\u5B58\u7533\u8BF7\u548C\u91CA\u653E\u4E0D\u5728\u540C\u4E00\u4E2A\u7EBF\u7A0B\u800C\u5BFC\u81F4\u7684\u989D\u5916\u5F00\u9500\uFF0CFree Block \u7684\u4E2A\u6570\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u8FD8\u63A7\u5236\u7740\u6570\u636E Scan \u7684\u5E76\u53D1\u3002"}),"\n",(0,l.jsx)(a.h2,{id:"\u5185\u5B58-gc",children:"\u5185\u5B58 GC"}),"\n",(0,l.jsx)(a.p,{children:"Doris BE \u4F1A\u5B9A\u65F6\u4ECE\u7CFB\u7EDF\u83B7\u53D6\u8FDB\u7A0B\u7684\u7269\u7406\u5185\u5B58\u548C\u7CFB\u7EDF\u5F53\u524D\u5269\u4F59\u53EF\u7528\u5185\u5B58\uFF0C\u5E76\u6536\u96C6\u6240\u6709\u67E5\u8BE2\u3001\u5BFC\u5165\u3001Compaction \u4EFB\u52A1 MemTracker \u7684\u5FEB\u7167\uFF0C\u5F53 BE \u8FDB\u7A0B\u5185\u5B58\u8D85\u9650\u6216\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0CDoris \u5C06\u91CA\u653E Cache \u548C\u7EC8\u6B62\u90E8\u5206\u67E5\u8BE2\u6216\u5BFC\u5165\u6765\u91CA\u653E\u5185\u5B58\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u7531\u4E00\u4E2A\u5355\u72EC\u7684 GC \u7EBF\u7A0B\u5B9A\u65F6\u6267\u884C\u3002"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Memory GC",src:n(129043).Z+"",width:"1080",height:"515"})}),"\n",(0,l.jsx)(a.p,{children:"\u82E5 Doris BE \u8FDB\u7A0B\u5185\u5B58\u8D85\u8FC7 SoftMemLimit\uFF08\u9ED8\u8BA4\u7CFB\u7EDF\u603B\u5185\u5B58\u7684 81%\uFF09\u6216\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u4F4E\u4E8E Warning \u6C34\u4F4D\u7EBF\uFF08\u901A\u5E38\u4E0D\u5927\u4E8E 3.2GB\uFF09\u65F6\u89E6\u53D1 Minor GC\uFF0C\u6B64\u65F6\u67E5\u8BE2\u4F1A\u5728 Allocator \u5206\u914D\u5185\u5B58\u65F6\u6682\u505C\uFF0C\u540C\u65F6\u5BFC\u5165\u5F3A\u5236\u4E0B\u5237\u7F13\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u91CA\u653E\u90E8\u5206 Data Page Cache \u4EE5\u53CA\u8FC7\u671F\u7684 Segment Cache \u7B49\uFF0C\u82E5\u91CA\u653E\u7684\u5185\u5B58\u4E0D\u8DB3\u8FDB\u7A0B\u5185\u5B58\u7684 10%\uFF0C\u82E5\u542F\u7528\u4E86\u67E5\u8BE2\u5185\u5B58\u8D85\u53D1\uFF0C\u5219\u4ECE\u5185\u5B58\u8D85\u53D1\u6BD4\u4F8B\u5927\u7684\u67E5\u8BE2\u5F00\u59CB Cancel\uFF0C\u76F4\u5230\u91CA\u653E 10% \u7684\u8FDB\u7A0B\u5185\u5B58\u6216\u6CA1\u6709\u67E5\u8BE2\u53EF\u88AB Cancel\uFF0C\u7136\u540E\u8C03\u4F4E\u7CFB\u7EDF\u5185\u5B58\u72B6\u6001\u83B7\u53D6\u95F4\u9694\u548C GC \u95F4\u9694\uFF0C\u5176\u4ED6\u67E5\u8BE2\u5728\u53D1\u73B0\u5269\u4F59\u5185\u5B58\u540E\u5C06\u7EE7\u7EED\u6267\u884C\u3002"}),"\n",(0,l.jsx)(a.p,{children:"\u82E5 BE \u8FDB\u7A0B\u5185\u5B58\u8D85\u8FC7 MemLimit\uFF08\u9ED8\u8BA4\u7CFB\u7EDF\u603B\u5185\u5B58\u7684 90%\uFF09\u6216\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u4F4E\u4E8E Low \u6C34\u4F4D\u7EBF\uFF08\u901A\u5E38\u4E0D\u5927\u4E8E 1.6GB\uFF09\u65F6\u89E6\u53D1 Full GC\uFF0C\u6B64\u65F6\u9664\u4E0A\u8FF0\u64CD\u4F5C\u5916\uFF0C\u5BFC\u5165\u5728\u5F3A\u5236\u4E0B\u5237\u7F13\u5B58\u6570\u636E\u65F6\u4E5F\u5C06\u6682\u505C\uFF0C\u5E76\u91CA\u653E\u5168\u90E8 Data Page Cache \u548C\u5927\u90E8\u5206\u5176\u4ED6 Cache\uFF0C\u5982\u679C\u91CA\u653E\u7684\u5185\u5B58\u4E0D\u8DB3 20%\uFF0C\u5C06\u5F00\u59CB\u6309\u4E00\u5B9A\u7B56\u7565\u5728\u6240\u6709\u67E5\u8BE2\u548C\u5BFC\u5165\u7684 MemTracker \u5217\u8868\u4E2D\u67E5\u627E\uFF0C\u4F9D\u6B21 Cancel \u5185\u5B58\u5360\u7528\u5927\u7684\u67E5\u8BE2\u3001\u5185\u5B58\u8D85\u53D1\u6BD4\u4F8B\u5927\u7684\u5BFC\u5165\u3001\u5185\u5B58\u5360\u7528\u5927\u7684\u5BFC\u5165\uFF0C\u76F4\u5230\u91CA\u653E 20% \u7684\u8FDB\u7A0B\u5185\u5B58\u540E\uFF0C\u8C03\u9AD8\u7CFB\u7EDF\u5185\u5B58\u72B6\u6001\u83B7\u53D6\u95F4\u9694\u548C GC \u95F4\u9694\uFF0C\u5176\u4ED6\u67E5\u8BE2\u548C\u5BFC\u5165\u4E5F\u5C06\u7EE7\u7EED\u6267\u884C\uFF0CGC \u7684\u8017\u65F6\u901A\u5E38\u5728\u51E0\u767E us \u5230\u51E0\u5341 ms \u4E4B\u95F4\u3002"}),"\n",(0,l.jsx)(a.h2,{id:"\u5185\u5B58\u9650\u5236\u548C\u6C34\u4F4D\u7EBF\u8BA1\u7B97\u65B9\u6CD5",children:"\u5185\u5B58\u9650\u5236\u548C\u6C34\u4F4D\u7EBF\u8BA1\u7B97\u65B9\u6CD5"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\u8FDB\u7A0B\u5185\u5B58\u4E0A\u9650 MemLimit = ",(0,l.jsx)(a.code,{children:"be.conf/mem_limit * PhysicalMemory"}),", \u9ED8\u8BA4\u7CFB\u7EDF\u603B\u5185\u5B58\u7684 90%\uFF0C\u5177\u4F53\u53C2\u8003 \u3002"]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\u8FDB\u7A0B\u5185\u5B58\u8F6F\u9650 SoftMemLimit = ",(0,l.jsx)(a.code,{children:"be.conf/mem_limit * PhysicalMemory * be.conf/soft_mem_limit_frac"}),", \u9ED8\u8BA4\u7CFB\u7EDF\u603B\u5185\u5B58\u7684 81%\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u4F4E\u6C34\u4F4D\u7EBF LowWaterMark = ",(0,l.jsx)(a.code,{children:"be.conf/max_sys_mem_available_low_water_mark_bytes"}),"\uFF0C\u9ED8\u8BA4\u7B49\u4E8E -1\uFF0C\u6B64\u65F6 LowWaterMark = ",(0,l.jsx)(a.code,{children:"min(PhysicalMemory - MemLimit, PhysicalMemory * 0.05)"}),", \u5728 64G \u5185\u5B58\u7684\u673A\u5668\u4E0A LowWaterMark \u7684\u503C\u7565\u5C0F\u4E8E 3.2 GB\uFF08\u56E0\u4E3A ",(0,l.jsx)(a.code,{children:"PhysicalMemory"})," \u7684\u771F\u5B9E\u503C\u5F80\u5F80\u5C0F\u4E8E 64G\uFF09\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u8B66\u544A\u6C34\u4F4D\u7EBF WarningWaterMark = ",(0,l.jsx)(a.code,{children:"2 * LowWaterMark"})," \uFF0C\u5728 64G \u5185\u5B58\u7684\u673A\u5668\u4E0A ",(0,l.jsx)(a.code,{children:"WarningWaterMark"})," \u9ED8\u8BA4\u7565\u5C0F\u4E8E 6.4 GB\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u8BA1\u7B97",children:"\u7CFB\u7EDF\u5269\u4F59\u53EF\u7528\u5185\u5B58\u8BA1\u7B97"}),"\n",(0,l.jsxs)(a.p,{children:["\u5F53\u9519\u8BEF\u4FE1\u606F\u4E2D\u7CFB\u7EDF\u53EF\u7528\u5185\u5B58\u5C0F\u4E8E\u4F4E\u6C34\u4F4D\u7EBF\u65F6\uFF0C\u540C\u6837\u5F53\u4F5C\u8FDB\u7A0B\u5185\u5B58\u8D85\u9650\u5904\u7406\uFF0C\u5176\u4E2D\u7CFB\u7EDF\u53EF\u7528\u5185\u5B58\u7684\u503C\u6765\u81EA\u4E8E",(0,l.jsx)(a.code,{children:"/proc/meminfo"}),"\u4E2D\u7684",(0,l.jsx)(a.code,{children:"MemAvailable"}),"\uFF0C\u5F53",(0,l.jsx)(a.code,{children:"MemAvailable"}),"\u4E0D\u8DB3\u65F6\u7EE7\u7EED\u5185\u5B58\u7533\u8BF7\u53EF\u80FD\u8FD4\u56DE std::bad_alloc \u6216\u8005\u5BFC\u81F4 BE \u8FDB\u7A0B OOM\uFF0C\u56E0\u4E3A\u5237\u65B0\u8FDB\u7A0B\u5185\u5B58\u7EDF\u8BA1\u548C BE \u5185\u5B58 GC \u90FD\u5177\u6709\u4E00\u5B9A\u7684\u6EDE\u540E\u6027\uFF0C\u6240\u4EE5\u9884\u7559\u5C0F\u90E8\u5206\u5185\u5B58 buffer \u4F5C\u4E3A\u4F4E\u6C34\u4F4D\u7EBF\uFF0C\u5C3D\u53EF\u80FD\u907F\u514D OOM\u3002"]}),"\n",(0,l.jsxs)(a.p,{children:["\u5176\u4E2D",(0,l.jsx)(a.code,{children:"MemAvailable"}),"\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7EFC\u5408\u8003\u8651\u5F53\u524D\u7A7A\u95F2\u7684\u5185\u5B58\u3001buffer\u3001cache\u3001\u5185\u5B58\u788E\u7247\u7B49\u56E0\u7D20\u7ED9\u51FA\u7684\u4E00\u4E2A\u5728\u5C3D\u53EF\u80FD\u4E0D\u89E6\u53D1 swap \u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u63D0\u4F9B\u7ED9\u7528\u6237\u8FDB\u7A0B\u4F7F\u7528\u7684\u5185\u5B58\u603B\u91CF\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u7B97\u516C\u5F0F\uFF1A",(0,l.jsx)(a.code,{children:"MemAvailable = MemFree - LowWaterMark + (PageCache - min(PageCache / 2, LowWaterMark))"}),"\uFF0C\u548C cmd ",(0,l.jsx)(a.code,{children:"free"}),"\u770B\u5230\u7684",(0,l.jsx)(a.code,{children:"available"}),"\u503C\u76F8\u540C\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\uFF1A"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"https://serverfault.com/questions/940196/why-is-memavailable-a-lot-less-than-memfreebufferscached",children:"why-is-memavailable-a-lot-less-than-memfreebufferscached"})}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773",children:"Linux MemAvailable"})}),"\n",(0,l.jsxs)(a.p,{children:["\u4F4E\u6C34\u4F4D\u7EBF\u9ED8\u8BA4\u6700\u5927 3.2G\uFF082.1.5 \u4E4B\u524D\u9ED8\u8BA4 1.6G\uFF09\uFF0C\u6839\u636E ",(0,l.jsx)(a.code,{children:"MemTotal"}),"\u3001",(0,l.jsx)(a.code,{children:"vm/min_free_kbytes"}),"\u3001",(0,l.jsx)(a.code,{children:"confg::mem_limit"}),"\u3001",(0,l.jsx)(a.code,{children:"config::max_sys_mem_available_low_water_mark_bytes"}),"\u5171\u540C\u7B97\u51FA\uFF0C\u5E76\u907F\u514D\u6D6A\u8D39\u8FC7\u591A\u5185\u5B58\u3002\u5176\u4E2D",(0,l.jsx)(a.code,{children:"MemTotal"}),"\u662F\u7CFB\u7EDF\u603B\u5185\u5B58\uFF0C\u53D6\u503C\u540C\u6837\u6765\u81EA",(0,l.jsx)(a.code,{children:"/proc/meminfo"}),"\uFF1B",(0,l.jsx)(a.code,{children:"vm/min_free_kbytes"}),"\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7ED9\u5185\u5B58 GC \u8FC7\u7A0B\u9884\u7559\u7684 buffer\uFF0C\u53D6\u503C\u901A\u5E38\u5728 0.4% \u5230 5% \u4E4B\u95F4\uFF0C\u67D0\u4E9B\u4E91\u670D\u52A1\u5668\u4E0A",(0,l.jsx)(a.code,{children:"vm/min_free_kbytes"}),"\u53EF\u80FD\u4E3A 5%\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u76F4\u89C2\u4E0A\u7CFB\u7EDF\u53EF\u7528\u5185\u5B58\u6BD4\u771F\u5B9E\u503C\u5C11\uFF1B\u8C03\u5927",(0,l.jsx)(a.code,{children:"config::max_sys_mem_available_low_water_mark_bytes"}),"\u5C06\u5728\u5927\u4E8E 64G \u5185\u5B58\u7684\u673A\u5668\u4E0A\uFF0C\u4E3A Full GC \u9884\u7559\u66F4\u591A\u7684\u5185\u5B58 buffer\uFF0C\u53CD\u4E4B\u8C03\u5C0F\u5C06\u5C3D\u53EF\u80FD\u5145\u5206\u4F7F\u7528\u5185\u5B58\u3002"]})]})}function d(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},420438:function(e,a,n){n.d(a,{Z:function(){return r}});let r=n.p+"assets/images/memory-allocator-e75cd4ce675cb9429bb949a249c50b9e.png"},129043:function(e,a,n){n.d(a,{Z:function(){return r}});let r=n.p+"assets/images/memory-gc-8b3c593fff57871d8d78efe9d7e94aea.png"},30295:function(e,a,n){n.d(a,{Z:function(){return r}});let r=n.p+"assets/images/memory-management-overview-18bdce4244c3b30be40154a1c9031cf1.png"},250065:function(e,a,n){n.d(a,{Z:function(){return o},a:function(){return c}});var r=n(667294);let l={},i=r.createContext(l);function c(e){let a=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);