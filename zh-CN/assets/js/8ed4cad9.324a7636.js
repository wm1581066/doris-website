"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["135409"],{621660:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"table-design/data-partitioning/manual-bucketing","title":"\u624B\u52A8\u5206\u6876","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/data-partitioning/manual-bucketing.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/manual-bucketing","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/manual-bucketing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u624B\u52A8\u5206\u6876","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u81EA\u52A8\u5206\u533A","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/auto-partitioning"},"next":{"title":"\u81EA\u52A8\u5206\u6876","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/auto-bucket"}}'),l=i("785893"),s=i("250065");let r={title:"\u624B\u52A8\u5206\u6876",language:"zh-CN"},a=void 0,c={},d=[{value:"Bucket \u7684\u6570\u91CF\u548C\u6570\u636E\u91CF\u7684\u5EFA\u8BAE",id:"bucket-\u7684\u6570\u91CF\u548C\u6570\u636E\u91CF\u7684\u5EFA\u8BAE",level:2},{value:"Random Distribution",id:"random-distribution",level:2}];function o(n){let e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["\u5982\u679C\u4F7F\u7528\u4E86\u5206\u533A\uFF0C\u5219 ",(0,l.jsx)(e.code,{children:"DISTRIBUTED ..."})," \u8BED\u53E5\u63CF\u8FF0\u7684\u662F\u6570\u636E\u5728\u5404\u4E2A\u5206\u533A\u5185\u7684\u5212\u5206\u89C4\u5219\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u4E0D\u4F7F\u7528\u5206\u533A\uFF0C\u5219\u63CF\u8FF0\u7684\u662F\u5BF9\u6574\u4E2A\u8868\u7684\u6570\u636E\u7684\u5212\u5206\u89C4\u5219\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4E5F\u53EF\u4EE5\u5BF9\u6BCF\u4E2A\u5206\u533A\u5355\u72EC\u6307\u5B9A\u5206\u6876\u65B9\u5F0F\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5206\u6876\u5217\u53EF\u4EE5\u662F\u591A\u5217\uFF0CAggregate \u548C Unique \u6A21\u578B\u5FC5\u987B\u4E3A Key \u5217\uFF0CDuplicate \u6A21\u578B\u53EF\u4EE5\u662F key \u5217\u548C value \u5217\u3002\u5206\u6876\u5217\u53EF\u4EE5\u548C Partition \u5217\u76F8\u540C\u6216\u4E0D\u540C\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5206\u6876\u5217\u7684\u9009\u62E9\uFF0C\u662F\u5728 \u67E5\u8BE2\u541E\u5410 \u548C \u67E5\u8BE2\u5E76\u53D1 \u4E4B\u95F4\u7684\u4E00\u79CD\u6743\u8861\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u9009\u62E9\u591A\u4E2A\u5206\u6876\u5217\uFF0C\u5219\u6570\u636E\u5206\u5E03\u66F4\u5747\u5300\u3002\u5982\u679C\u4E00\u4E2A\u67E5\u8BE2\u6761\u4EF6\u4E0D\u5305\u542B\u6240\u6709\u5206\u6876\u5217\u7684\u7B49\u503C\u6761\u4EF6\uFF0C\u90A3\u4E48\u8BE5\u67E5\u8BE2\u4F1A\u89E6\u53D1\u6240\u6709\u5206\u6876\u540C\u65F6\u626B\u63CF\uFF0C\u8FD9\u6837\u67E5\u8BE2\u7684\u541E\u5410\u4F1A\u589E\u52A0\uFF0C\u5355\u4E2A\u67E5\u8BE2\u7684\u5EF6\u8FDF\u968F\u4E4B\u964D\u4F4E\u3002\u8FD9\u4E2A\u65B9\u5F0F\u9002\u5408\u5927\u541E\u5410\u4F4E\u5E76\u53D1\u7684\u67E5\u8BE2\u573A\u666F\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u4EC5\u9009\u62E9\u4E00\u4E2A\u6216\u5C11\u6570\u5206\u6876\u5217\uFF0C\u5219\u5BF9\u5E94\u7684\u70B9\u67E5\u8BE2\u53EF\u4EE5\u4EC5\u89E6\u53D1\u4E00\u4E2A\u5206\u6876\u626B\u63CF\u3002\u6B64\u65F6\uFF0C\u5F53\u591A\u4E2A\u70B9\u67E5\u8BE2\u5E76\u53D1\u65F6\uFF0C\u8FD9\u4E9B\u67E5\u8BE2\u6709\u8F83\u5927\u7684\u6982\u7387\u5206\u522B\u89E6\u53D1\u4E0D\u540C\u7684\u5206\u6876\u626B\u63CF\uFF0C\u5404\u4E2A\u67E5\u8BE2\u4E4B\u95F4\u7684 IO \u5F71\u54CD\u8F83\u5C0F\uFF08\u5C24\u5176\u5F53\u4E0D\u540C\u6876\u5206\u5E03\u5728\u4E0D\u540C\u78C1\u76D8\u4E0A\u65F6\uFF09\uFF0C\u6240\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u9002\u5408\u9AD8\u5E76\u53D1\u7684\u70B9\u67E5\u8BE2\u573A\u666F\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"bucket-\u7684\u6570\u91CF\u548C\u6570\u636E\u91CF\u7684\u5EFA\u8BAE",children:"Bucket \u7684\u6570\u91CF\u548C\u6570\u636E\u91CF\u7684\u5EFA\u8BAE"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E00\u4E2A\u8868\u7684 Tablet \u603B\u6570\u91CF\u7B49\u4E8E (Partition num * Bucket num)\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E00\u4E2A\u8868\u7684 Tablet \u6570\u91CF\uFF0C\u5728\u4E0D\u8003\u8651\u6269\u5BB9\u7684\u60C5\u51B5\u4E0B\uFF0C\u63A8\u8350\u7565\u591A\u4E8E\u6574\u4E2A\u96C6\u7FA4\u7684\u78C1\u76D8\u6570\u91CF\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5355\u4E2A Tablet \u7684\u6570\u636E\u91CF\u7406\u8BBA\u4E0A\u6CA1\u6709\u4E0A\u4E0B\u754C\uFF0C\u4F46\u5EFA\u8BAE\u5728 1G - 10G \u7684\u8303\u56F4\u5185\u3002\u5982\u679C\u5355\u4E2A Tablet \u6570\u636E\u91CF\u8FC7\u5C0F\uFF0C\u5219\u6570\u636E\u7684\u805A\u5408\u6548\u679C\u4E0D\u4F73\uFF0C\u4E14\u5143\u6570\u636E\u7BA1\u7406\u538B\u529B\u5927\u3002\u5982\u679C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u5219\u4E0D\u5229\u4E8E\u526F\u672C\u7684\u8FC1\u79FB\u3001\u8865\u9F50\uFF0C\u4E14\u4F1A\u589E\u52A0 Schema Change \u6216\u8005 Rollup \u64CD\u4F5C\u5931\u8D25\u91CD\u8BD5\u7684\u4EE3\u4EF7\uFF08\u8FD9\u4E9B\u64CD\u4F5C\u5931\u8D25\u91CD\u8BD5\u7684\u7C92\u5EA6\u662F Tablet\uFF09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5F53 Tablet \u7684\u6570\u636E\u91CF\u539F\u5219\u548C\u6570\u91CF\u539F\u5219\u51B2\u7A81\u65F6\uFF0C\u5EFA\u8BAE\u4F18\u5148\u8003\u8651\u6570\u636E\u91CF\u539F\u5219\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u5EFA\u8868\u65F6\uFF0C\u6BCF\u4E2A\u5206\u533A\u7684 Bucket \u6570\u91CF\u7EDF\u4E00\u6307\u5B9A\u3002\u4F46\u662F\u5728\u52A8\u6001\u589E\u52A0\u5206\u533A\u65F6\uFF08",(0,l.jsx)(e.code,{children:"ADD PARTITION"}),"\uFF09\uFF0C\u53EF\u4EE5\u5355\u72EC\u6307\u5B9A\u65B0\u5206\u533A\u7684 Bucket \u6570\u91CF\u3002\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u529F\u80FD\u65B9\u4FBF\u7684\u5E94\u5BF9\u6570\u636E\u7F29\u5C0F\u6216\u81A8\u80C0\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E00\u4E2A Partition \u7684 Bucket \u6570\u91CF\u4E00\u65E6\u6307\u5B9A\uFF0C\u4E0D\u53EF\u66F4\u6539\u3002\u6240\u4EE5\u5728\u786E\u5B9A Bucket \u6570\u91CF\u65F6\uFF0C\u9700\u8981\u9884\u5148\u8003\u8651\u96C6\u7FA4\u6269\u5BB9\u7684\u60C5\u51B5\u3002\u6BD4\u5982\u5F53\u524D\u53EA\u6709 3 \u53F0 host\uFF0C\u6BCF\u53F0 host \u6709 1 \u5757\u76D8\u3002\u5982\u679C Bucket \u7684\u6570\u91CF\u53EA\u8BBE\u7F6E\u4E3A 3 \u6216\u66F4\u5C0F\uFF0C\u90A3\u4E48\u540E\u671F\u5373\u4F7F\u518D\u589E\u52A0\u673A\u5668\uFF0C\u4E5F\u4E0D\u80FD\u63D0\u9AD8\u5E76\u53D1\u5EA6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4E3E\u4E00\u4E9B\u4F8B\u5B50\uFF1A\u5047\u8BBE\u5728\u6709 10 \u53F0 BE\uFF0C\u6BCF\u53F0 BE \u4E00\u5757\u78C1\u76D8\u7684\u60C5\u51B5\u4E0B\u3002\u5982\u679C\u4E00\u4E2A\u8868\u603B\u5927\u5C0F\u4E3A 500MB\uFF0C\u5219\u53EF\u4EE5\u8003\u8651 4-8 \u4E2A\u5206\u7247\u30025GB\uFF1A8-16 \u4E2A\u5206\u7247\u300250GB\uFF1A32 \u4E2A\u5206\u7247\u3002500GB\uFF1A\u5EFA\u8BAE\u5206\u533A\uFF0C\u6BCF\u4E2A\u5206\u533A\u5927\u5C0F\u5728 50GB \u5DE6\u53F3\uFF0C\u6BCF\u4E2A\u5206\u533A 16-32 \u4E2A\u5206\u7247\u30025TB\uFF1A\u5EFA\u8BAE\u5206\u533A\uFF0C\u6BCF\u4E2A\u5206\u533A\u5927\u5C0F\u5728 50GB \u5DE6\u53F3\uFF0C\u6BCF\u4E2A\u5206\u533A 16-32 \u4E2A\u5206\u7247\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.p,{children:["\u8868\u7684\u6570\u636E\u91CF\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"SHOW DATA"})," \u547D\u4EE4\u67E5\u770B\uFF08\u8BE5\u547D\u4EE4\u7684\u7EDF\u8BA1\u7ED3\u679C\u4F1A\u6709\u5EF6\u8FDF\uFF09\uFF0C\u7ED3\u679C\u9664\u4EE5\u526F\u672C\u6570\uFF0C\u5373\u8868\u7684\u6570\u636E\u91CF\u3002"]})}),"\n",(0,l.jsx)(e.h2,{id:"random-distribution",children:"Random Distribution"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679C OLAP \u8868\u6CA1\u6709\u66F4\u65B0\u7C7B\u578B\u7684\u5B57\u6BB5\uFF0C\u5C06\u8868\u7684\u6570\u636E\u5206\u6876\u6A21\u5F0F\u8BBE\u7F6E\u4E3A RANDOM\uFF0C\u5219\u53EF\u4EE5\u907F\u514D\u4E25\u91CD\u7684\u6570\u636E\u503E\u659C (\u6570\u636E\u5728\u5BFC\u5165\u8868\u5BF9\u5E94\u7684\u5206\u533A\u7684\u65F6\u5019\uFF0C\u5355\u6B21\u5BFC\u5165\u4F5C\u4E1A\u6BCF\u4E2A batch \u7684\u6570\u636E\u5C06\u968F\u673A\u9009\u62E9\u4E00\u4E2A tablet \u8FDB\u884C\u5199\u5165)\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5F53\u8868\u7684\u5206\u6876\u6A21\u5F0F\u88AB\u8BBE\u7F6E\u4E3A RANDOM \u65F6\uFF0C\u56E0\u4E3A\u6CA1\u6709\u5206\u6876\u5217\uFF0C\u65E0\u6CD5\u6839\u636E\u5206\u6876\u5217\u7684\u503C\u4EC5\u5BF9\u51E0\u4E2A\u5206\u6876\u67E5\u8BE2\uFF0C\u5BF9\u8868\u8FDB\u884C\u67E5\u8BE2\u7684\u65F6\u5019\u5C06\u5BF9\u547D\u4E2D\u5206\u533A\u7684\u5168\u90E8\u5206\u6876\u540C\u65F6\u626B\u63CF\uFF0C\u8BE5\u8BBE\u7F6E\u9002\u5408\u5BF9\u8868\u6570\u636E\u6574\u4F53\u7684\u805A\u5408\u67E5\u8BE2\u5206\u6790\u800C\u4E0D\u9002\u5408\u9AD8\u5E76\u53D1\u7684\u70B9\u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5982\u679C OLAP \u8868\u7684\u662F Random Distribution \u7684\u6570\u636E\u5206\u5E03\uFF0C\u90A3\u4E48\u5728\u6570\u636E\u5BFC\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u8BBE\u7F6E\u5355\u5206\u7247\u5BFC\u5165\u6A21\u5F0F\uFF08\u5C06 ",(0,l.jsx)(e.code,{children:"load_to_single_tablet"})," \u8BBE\u7F6E\u4E3A true\uFF09\uFF0C\u90A3\u4E48\u5728\u5927\u6570\u636E\u91CF\u7684\u5BFC\u5165\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u4EFB\u52A1\u5728\u5C06\u6570\u636E\u5199\u5165\u5BF9\u5E94\u7684\u5206\u533A\u65F6\u5C06\u53EA\u5199\u5165\u4E00\u4E2A\u5206\u7247\uFF0C\u8FD9\u6837\u5C06\u80FD\u63D0\u9AD8\u6570\u636E\u5BFC\u5165\u7684\u5E76\u53D1\u5EA6\u548C\u541E\u5410\u91CF\uFF0C\u51CF\u5C11\u6570\u636E\u5BFC\u5165\u548C Compaction \u5BFC\u81F4\u7684\u5199\u653E\u5927\u95EE\u9898\uFF0C\u4FDD\u969C\u96C6\u7FA4\u7684\u7A33\u5B9A\u6027\u3002"]}),"\n"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return r}});var t=i(667294);let l={},s=t.createContext(l);function r(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);