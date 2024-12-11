"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["796189"],{206458:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>x,assets:()=>o,toc:()=>h,frontMatter:()=>r});var s=JSON.parse('{"id":"lakehouse/compute-node","title":"\u5F39\u6027\u8BA1\u7B97\u8282\u70B9","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/compute-node.md","sourceDirName":"lakehouse","slug":"/lakehouse/compute-node","permalink":"/zh-CN/docs/3.0/lakehouse/compute-node","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5F39\u6027\u8BA1\u7B97\u8282\u70B9","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5143\u6570\u636E\u7F13\u5B58","permalink":"/zh-CN/docs/3.0/lakehouse/metacache"},"next":{"title":"\u5916\u8868\u7EDF\u8BA1\u4FE1\u606F","permalink":"/zh-CN/docs/3.0/lakehouse/external-statistics"}}'),i=l("785893"),c=l("250065");let r={title:"\u5F39\u6027\u8BA1\u7B97\u8282\u70B9",language:"zh-CN"},d=void 0,o={},h=[{value:"\u8BA1\u7B97\u8282\u70B9\u7684\u4F7F\u7528",id:"\u8BA1\u7B97\u8282\u70B9\u7684\u4F7F\u7528",level:2},{value:"\u6DFB\u52A0\u8BA1\u7B97\u8282\u70B9",id:"\u6DFB\u52A0\u8BA1\u7B97\u8282\u70B9",level:3},{value:"\u4F7F\u7528\u8BA1\u7B97\u8282\u70B9",id:"\u4F7F\u7528\u8BA1\u7B97\u8282\u70B9",level:3},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u8054\u90A6\u67E5\u8BE2\u7684\u8D1F\u8F7D\u9694\u79BB\u548C\u5F39\u6027\u4F38\u7F29",id:"\u8054\u90A6\u67E5\u8BE2\u7684\u8D1F\u8F7D\u9694\u79BB\u548C\u5F39\u6027\u4F38\u7F29",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function t(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u81EA 1.2.1 \u7248\u672C\u5F00\u59CB\uFF0CDoris \u652F\u6301\u4E86\u8BA1\u7B97\u8282\u70B9\uFF08Compute Node\uFF09\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u8FD9\u4E2A\u7248\u672C\u5F00\u59CB\uFF0CBE \u8282\u70B9\u53EF\u4EE5\u5206\u4E3A\u4E24\u7C7B\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mix"}),"\n",(0,i.jsx)(n.p,{children:"\u6DF7\u5408\u8282\u70B9\u3002\u5373 BE \u8282\u70B9\u7684\u9ED8\u8BA4\u7C7B\u578B\u3002\u8BE5\u7C7B\u578B\u7684\u8282\u70B9\u65E2\u53EF\u4EE5\u53C2\u4E0E\u8BA1\u7B97\uFF0C\u4E5F\u8D1F\u8D23 Doris \u6570\u636E\u7684\u5B58\u50A8\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Computation"}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u3002\u4E0D\u8D1F\u8D23\u6570\u636E\u7684\u5B58\u50A8\uFF0C\u53EA\u8D1F\u8D23\u6570\u636E\u8BA1\u7B97\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u4F5C\u4E3A\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u7684 BE \u8282\u70B9\uFF0C\u6CA1\u6709\u6570\u636E\u5B58\u50A8\u80FD\u529B\uFF0C\u53EA\u8D1F\u8D23\u6570\u636E\u8BA1\u7B97\u3002\n\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5C06\u8BA1\u7B97\u8282\u70B9\u770B\u505A\u662F\u65E0\u72B6\u6001\u7684 BE \u8282\u70B9\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C\u8282\u70B9\u7684\u589E\u52A0\u548C\u5220\u9664\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6E56\u4ED3\u4E00\u4F53\u89E3\u51B3\u65B9\u6848\u4E2D\uFF0C\u8BA1\u7B97\u8282\u70B9\u53EF\u4EE5\u4F5C\u4E3A\u5F39\u6027\u8282\u70B9\uFF0C\u7528\u4E8E",(0,i.jsx)(n.strong,{children:"\u67E5\u8BE2\u5916\u90E8\u6570\u636E\u6E90"}),"\uFF0C\u5982 Hive\u3001Iceberg\u3001JDBC \u7B49\u3002Doris \u4E0D\u8D1F\u8D23\u5916\u90E8\u6570\u636E\u6E90\u6570\u636E\u7684\u5B58\u50A8\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BA1\u7B97\u8282\u70B9\u65B9\u4FBF\u7684\u6269\u5C55\u5BF9\u5916\u90E8\u6570\u636E\u6E90\u7684\u8BA1\u7B97\u80FD\u529B\u3002\u540C\u65F6\uFF0C\u8BA1\u7B97\u8282\u70B9\u4E5F\u53EF\u4EE5\u914D\u7F6E\u7F13\u5B58\u76EE\u5F55\uFF0C\u7528\u4E8E\u7F13\u5B58\u5916\u90E8\u6570\u636E\u6E90\u7684\u70ED\u70B9\u6570\u636E\uFF0C\u8FDB\u4E00\u6B65\u52A0\u901F\u6570\u636E\u8BFB\u53D6\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u9002\u7528\u4E8E\u5728 Doris \u5B58\u7B97\u4E00\u4F53\u7684\u90E8\u7F72\u65B9\u5F0F\uFF0C\u8FDB\u884C\u5F39\u6027\u8D44\u6E90\u63A7\u5236\u3002\u5728 Doris 3.0 \u7248\u672C\u7684\u5B58\u7B97\u5206\u79BB\u67B6\u6784\u4E0B\uFF0CBE \u8282\u70B9\u90FD\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u56E0\u6B64\u4E0D\u518D\u9700\u8981\u5355\u72EC\u7684\u8BA1\u7B97\u8282\u70B9\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8BA1\u7B97\u8282\u70B9\u7684\u4F7F\u7528",children:"\u8BA1\u7B97\u8282\u70B9\u7684\u4F7F\u7528"}),"\n",(0,i.jsx)(n.h3,{id:"\u6DFB\u52A0\u8BA1\u7B97\u8282\u70B9",children:"\u6DFB\u52A0\u8BA1\u7B97\u8282\u70B9"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 BE \u7684 ",(0,i.jsx)(n.code,{children:"be.conf"})," \u914D\u7F6E\u6587\u4EF6\u4E2D\u589E\u52A0\u914D\u7F6E\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"be_node_role=computation"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E4B\u540E\u542F\u52A8 BE \u8282\u70B9\uFF0C\u8BE5\u8282\u70B9\u5C31\u4F1A\u4EE5 \u8BA1\u7B97\u8282\u70B9 \u7C7B\u578B\u8FD0\u884C\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4E4B\u540E\u53EF\u4EE5\u901A\u8FC7 MySQL \u5BA2\u6237\u7AEF\u94FE\u63A5 Doris \u5E76\u6267\u884C\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ALTER SYSTEM ADD BACKEND"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6DFB\u52A0\u8FD9\u4E2A BE \u8282\u70B9\u3002\u6DFB\u52A0\u6210\u529F\u540E\uFF0C\u5728 ",(0,i.jsx)(n.code,{children:"SHOW BACKENDS"})," \u7684 ",(0,i.jsx)(n.code,{children:"NodeRole"})," \u5217\u53EF\u4EE5\u770B\u5230\u8282\u70B9\u7C7B\u578B\u4E3A ",(0,i.jsx)(n.code,{children:"computation"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4F7F\u7528\u8BA1\u7B97\u8282\u70B9",children:"\u4F7F\u7528\u8BA1\u7B97\u8282\u70B9"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u9700\u4F7F\u7528\u8BA1\u7B97\u8282\u70B9\uFF0C\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u96C6\u7FA4\u5185\u5305\u542B \u8BA1\u7B97\u8282\u70B9\u3002"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u6DFB\u52A0\u4E86\u914D\u7F6E\u9879\uFF1A",(0,i.jsx)(n.code,{children:"prefer_compute_node_for_external_table = true"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u65F6\uFF0C\u4EE5\u4E0B FE \u914D\u7F6E\u9879\uFF0C\u4F1A\u5F71\u54CD\u8BA1\u7B97\u8282\u70B9\u7684\u4F7F\u7528\u7B56\u7565\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"min_backend_num_for_external_table"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Doris 2.0\uFF08\u542B\uFF09\u7248\u672C\u4E4B\u524D\uFF0C\u8BE5\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\u4E3A 3\u30022.1 \u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A -1\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u53C2\u6570\u8868\u793A\uFF1A\u671F\u671B\u53EF\u53C2\u4E0E\u5916\u8868\u6570\u636E\u67E5\u8BE2\u7684 BE \u8282\u70B9\u7684\u6700\u5C0F\u6570\u91CF\u3002",(0,i.jsx)(n.code,{children:"-1"})," \u8868\u793A\u8BE5\u503C\u7B49\u540C\u4E8E\u5F53\u524D\u96C6\u7FA4\u5185\u8BA1\u7B97\u8282\u70B9\u7684\u6570\u91CF\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E3E\u4F8B\u8BF4\u660E\u3002\u5047\u8BBE\u96C6\u7FA4\u5185\u6709 3 \u4E2A\u8BA1\u7B97\u8282\u70B9\uFF0C5 \u4E2A\u6DF7\u5408\u8282\u70B9\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"min_backend_num_for_external_table"})," \u8BBE\u7F6E\u5C0F\u4E8E\u7B49\u4E8E 3\u3002\u5219\u5916\u8868\u67E5\u8BE2\u53EA\u4F1A\u4F7F\u7528 3 \u4E2A\u8BA1\u7B97\u8282\u70B9\u3002\u5982\u679C\u8BBE\u7F6E\u5927\u4E8E 3\uFF0C\u5047\u8BBE\u4E3A 6\uFF0C\u5219\u5916\u8868\u67E5\u8BE2\u9664\u4E86\u4F7F\u7528 3 \u4E2A\u8BA1\u7B97\u8282\u70B9\u5916\uFF0C\u8FD8\u4F1A\u989D\u5916\u9009\u62E9 3 \u4E2A\u6DF7\u5408\u8282\u70B9\u53C2\u4E0E\u8BA1\u7B97\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7EFC\u4E0A\uFF0C\u8BE5\u53C2\u6570\u4E3B\u8981\u7528\u4E8E\u53EF\u53C2\u4E0E\u5916\u8868\u8BA1\u7B97\u7684\u6700\u5C11 BE \u8282\u70B9\u6570\u91CF\uFF0C\u5E76\u4E14\u4F1A\u4F18\u5148\u9009\u62E9\u8BA1\u7B97\u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6CE8\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["2.1 \u7248\u672C\u4E4B\u540E\uFF0C\u624D\u652F\u6301 ",(0,i.jsx)(n.code,{children:"min_backend_num_for_external_table"})," \u8BBE\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"-1"}),"\u3002\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u8BE5\u53C2\u6570\u5FC5\u987B\u4E3A\u6B63\u6570\u3002\u4E14\u8BE5\u53C2\u6570\u53EA\u6709\u5728 ",(0,i.jsx)(n.code,{children:"prefer_compute_node_for_external_table = true"})," \u7684\u60C5\u51B5\u4E0B\u624D\u751F\u6548\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"prefer_compute_node_for_external_table"})," \u4E3A ",(0,i.jsx)(n.code,{children:"false"}),"\u3002\u5219\u5916\u8868\u67E5\u8BE2\u4F1A\u9009\u62E9\u4EFB\u610F BE \u8282\u70B9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u96C6\u7FA4\u4E2D\u6CA1\u6709\u8BA1\u7B97\u8282\u70B9\uFF0C\u5219\u4EE5\u4E0A\u53C2\u6570\u5747\u4E0D\u751F\u6548\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"min_backend_num_for_external_table"})," \u503C\u5927\u4E8E\u603B\u7684 BE \u8282\u70B9\u6570\u91CF\uFF0C\u5219\u6700\u591A\u53EA\u4F1A\u9009\u62E9\u5168\u90E8\u7684 BE\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0A\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"ADMIN SET FRONTEND CONFIG"})," \u547D\u4EE4\u52A8\u6001\u4FEE\u6539\uFF0C\u4E0D\u9700\u8981\u91CD\u542F FE \u8282\u70B9\u3002\u4E14\u6240\u6709 FE \u8282\u70B9\u90FD\u9700\u914D\u7F6E\u3002\u6216\u8005\u5728 ",(0,i.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u6DFB\u52A0\u914D\u7F6E\u5E76\u91CD\u542F FE \u8282\u70B9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsx)(n.h3,{id:"\u8054\u90A6\u67E5\u8BE2\u7684\u8D1F\u8F7D\u9694\u79BB\u548C\u5F39\u6027\u4F38\u7F29",children:"\u8054\u90A6\u67E5\u8BE2\u7684\u8D1F\u8F7D\u9694\u79BB\u548C\u5F39\u6027\u4F38\u7F29"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8054\u90A6\u67E5\u8BE2\u573A\u666F\u4E0B\uFF0C\u7528\u6237\u53EF\u4EE5\u4E13\u95E8\u90E8\u7F72\u4E00\u7EC4\u8BA1\u7B97\u8282\u70B9\uFF0C\u7528\u4E8E\u5916\u8868\u6570\u636E\u7684\u67E5\u8BE2\u3002\u8FD9\u6837\u53EF\u4EE5\u5C06\u5916\u8868\u7684\u67E5\u8BE2\u8D1F\u8F7D\uFF08\u5982\u5728 hive \u4E0A\u8FDB\u884C\u5927\u6570\u91CF\u5206\u6790\uFF09\u548C\u5185\u8868\u7684\u67E5\u8BE2\u8D1F\u8F7D\uFF08\u5982\u4F4E\u5EF6\u8FDF\u7684\u5FEB\u901F\u6570\u636E\u5206\u6790\uFF09\u8FDB\u884C\u9694\u79BB\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u65F6\uFF0C\u8BA1\u7B97\u8282\u70B9\u4F5C\u4E3A\u65E0\u72B6\u6001\u7684 BE \u8282\u70B9\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C\u6269\u5BB9\u548C\u7F29\u5BB9\u3002\u6BD4\u5982\u53EF\u4EE5\u4F7F\u7528 k8s \u90E8\u7F72\u4E00\u7EC4\u5F39\u6027\u8BA1\u7B97\u8282\u70B9\u96C6\u7FA4\uFF0C\u5728\u4E1A\u52A1\u9AD8\u5CF0\u671F\u5229\u7528\u66F4\u591A\u7684\u8BA1\u7B97\u8282\u70B9\u8FDB\u884C\u6570\u636E\u6E56\u5206\u6790\uFF0C\u4F4E\u8C37\u671F\u53EF\u4EE5\u8FDB\u884C\u5FEB\u901F\u7F29\u5BB9\u4EE5\u964D\u4F4E\u6210\u672C\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6DF7\u5408\u8282\u70B9\u548C\u8BA1\u7B97\u8282\u70B9\u80FD\u5426\u76F8\u4E92\u8F6C\u6362"}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u53EF\u4EE5\u8F6C\u6362\u4E3A\u6DF7\u5408\u8282\u70B9\u3002\u4F46\u6DF7\u5408\u8282\u70B9\u4E0D\u53EF\u4EE5\u8F6C\u6362\u4E3A\u8BA1\u7B97\u8282\u70B9\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u8F6C\u6DF7\u5408\u8282\u70B9"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u505C\u6B62 BE \u8282\u70B9"}),"\n",(0,i.jsxs)(n.li,{children:["\u5220\u9664 ",(0,i.jsx)(n.code,{children:"be.conf"})," \u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"be_node_role"})," \u914D\u7F6E\uFF0C\u6216\u914D\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"be_node_role=mix"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u914D\u7F6E\u6B63\u786E\u7684 ",(0,i.jsx)(n.code,{children:"storage_root_path"})," \u6570\u636E\u5B58\u50A8\u76EE\u5F55\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u542F\u52A8 BE \u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6DF7\u5408\u8282\u70B9\u8F6C\u8BA1\u7B97\u8282\u70B9"}),"\n",(0,i.jsx)(n.p,{children:"\u539F\u5219\u4E0A\u4E0D\u652F\u6301\u8FD9\u79CD\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u6DF7\u5408\u8282\u70B9\u672C\u8EAB\u5B58\u50A8\u4E86\u6570\u636E\u3002\u5982\u9700\u8F6C\u6362\uFF0C\u8BF7\u5148\u6267\u884C\u8282\u70B9\u5B89\u5168\u4E0B\u7EBF\uFF08Decommission\uFF09\u540E\uFF0C\u5728\u4EE5\u65B0\u8282\u70B9\u7684\u65B9\u5F0F\u8BBE\u7F6E\u4E3A\u8BA1\u7B97\u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u662F\u5426\u9700\u8981\u914D\u7F6E\u6570\u636E\u5B58\u50A8\u76EE\u5F55"}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u3002\u8BA1\u7B97\u8282\u70B9\u7684\u6570\u636E\u5B58\u50A8\u76EE\u5F55\u4E0D\u4F1A\u5B58\u653E\u7528\u6237\u6570\u636E\uFF0C\u53EA\u4F1A\u5B58\u653E\u4E00\u4E9B BE \u8282\u70B9\u81EA\u8EAB\u7684\u4FE1\u606F\u6587\u4EF6\uFF0C\u5982 ",(0,i.jsx)(n.code,{children:"cluster_id"})," \u7B49\u3002\u4EE5\u53CA\u4E00\u4E9B\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u7684\u4E34\u65F6\u6587\u4EF6\u7B49\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u7684\u5B58\u50A8\u76EE\u5F55\u53EA\u9700\u8981\u5F88\u5C11\u7684\u78C1\u76D8\u7A7A\u95F4\u5373\u53EF\uFF08MB \u7EA7\u522B\uFF09\uFF0C\u5E76\u4E14\u53EF\u4EE5\u968F\u65F6\u548C\u8282\u70B9\u4E00\u8D77\u9500\u6BC1\uFF0C\u4E0D\u4F1A\u5BF9\u7528\u6237\u6570\u636E\u9020\u6210\u5F71\u54CD\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u548C\u6DF7\u5408\u8282\u70B9\u662F\u5426\u53EF\u4EE5\u914D\u7F6E\u6587\u4EF6\u7F13\u5B58\u76EE\u5F55"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../lakehouse/filecache",children:"\u6587\u4EF6\u7F13\u5B58"})," \u901A\u8FC7\u7F13\u5B58\u6700\u8FD1\u8BBF\u95EE\u7684\u8FDC\u7AEF\u5B58\u50A8\u7CFB\u7EDF (HDFS \u6216\u5BF9\u8C61\u5B58\u50A8) \u7684\u6570\u636E\u6587\u4EF6\uFF0C\u52A0\u901F\u540E\u7EED\u8BBF\u95EE\u76F8\u540C\u6570\u636E\u7684\u67E5\u8BE2\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u548C\u6DF7\u5408\u8282\u70B9\u5747\u53EF\u8BBE\u7F6E\u6587\u4EF6\u7F13\u5B58\u76EE\u5F55\u3002\u6587\u4EF6\u7F13\u5B58\u76EE\u5F55\u9700\u4E8B\u5148\u521B\u5EFA\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u65F6\uFF0CDoris \u4E5F\u91C7\u7528\u4E86\u4E00\u81F4\u6027\u54C8\u5E0C\u7B49\u7B56\u7565\u6765\u5C3D\u53EF\u80FD\u964D\u4F4E\u5728\u8282\u70B9\u6269\u7F29\u5BB9\u60C5\u51B5\u4E0B\u7684\u7F13\u5B58\u5931\u6548\u7684\u6982\u7387\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u8282\u70B9\u662F\u5426\u9700\u8981\u901A\u8FC7 DECOMMISION \u64CD\u4F5C\u4E0B\u7EBF"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E0D\u9700\u8981\u3002\u8BA1\u7B97\u8282\u70B9\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"DROP BACKEND"})," \u64CD\u4F5C\u5220\u9664\u3002"]}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return r}});var s=l(667294);let i={},c=s.createContext(i);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);