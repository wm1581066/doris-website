"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["874791"],{738538:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>s});var t=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.1","title":"Release 1.1.1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/releasenotes/v1.1/release-1.1.1.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.1","permalink":"/zh-CN/docs/1.2/releasenotes/v1.1/release-1.1.1","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Release 1.1.1","language":"zh-CN"}}'),i=r("785893"),l=r("250065");let s={title:"Release 1.1.1",language:"zh-CN"},a=void 0,c={},o=[{value:"\u65B0\u589E\u529F\u80FD",id:"\u65B0\u589E\u529F\u80FD",level:2},{value:"\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u652F\u6301 ODBC Sink\u3002",id:"\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u652F\u6301-odbc-sink",level:3},{value:"\u589E\u52A0\u7B80\u6613\u7248 MemTracker",id:"\u589E\u52A0\u7B80\u6613\u7248-memtracker",level:3},{value:"\u6539\u8FDB",id:"\u6539\u8FDB",level:2},{value:"\u652F\u6301\u5728 Page Cache \u4E2D\u7F13\u5B58\u89E3\u538B\u540E\u6570\u636E\u3002",id:"\u652F\u6301\u5728-page-cache-\u4E2D\u7F13\u5B58\u89E3\u538B\u540E\u6570\u636E",level:3},{value:"Bug \u4FEE\u590D",id:"bug-\u4FEE\u590D",level:2},{value:"\u4FEE\u590D\u65E0\u6CD5\u4ECE 1.0 \u7248\u672C\u8FDB\u884C\u6EDA\u52A8\u5347\u7EA7\u7684\u95EE\u9898\u3002",id:"\u4FEE\u590D\u65E0\u6CD5\u4ECE-10-\u7248\u672C\u8FDB\u884C\u6EDA\u52A8\u5347\u7EA7\u7684\u95EE\u9898",level:3},{value:"\u4FEE\u590D\u67D0\u4E9B\u67E5\u8BE2\u4E0D\u80FD\u56DE\u9000\u5230\u975E\u5411\u91CF\u5316\u5F15\u64CE\u7684\u95EE\u9898\uFF0C\u5E76\u5BFC\u81F4 BE Core\u3002",id:"\u4FEE\u590D\u67D0\u4E9B\u67E5\u8BE2\u4E0D\u80FD\u56DE\u9000\u5230\u975E\u5411\u91CF\u5316\u5F15\u64CE\u7684\u95EE\u9898\u5E76\u5BFC\u81F4-be-core",level:3},{value:"\u4FEE\u590D Compaction \u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u5BFC\u81F4\u7684 -235 \u9519\u8BEF\u3002",id:"\u4FEE\u590D-compaction-\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u5BFC\u81F4\u7684--235-\u9519\u8BEF",level:3},{value:"\u4FEE\u590D\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u90E8\u5206 Segment fault\u3002",id:"\u4FEE\u590D\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u90E8\u5206-segment-fault",level:3}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u65B0\u589E\u529F\u80FD",children:"\u65B0\u589E\u529F\u80FD"}),"\n",(0,i.jsx)(n.h3,{id:"\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u652F\u6301-odbc-sink",children:"\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u652F\u6301 ODBC Sink\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 1.1.0 \u7248\u672C\u7684\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u4E2D ODBC Sink \u662F\u4E0D\u652F\u6301\u7684\uFF0C\u800C\u8FD9\u4E00\u529F\u80FD\u5728\u4E4B\u524D\u7248\u672C\u7684\u884C\u5B58\u5F15\u64CE\u662F\u652F\u6301\u7684\uFF0C\u56E0\u6B64\u5728 1.1.1 \u7248\u672C\u4E2D\u6211\u4EEC\u91CD\u65B0\u5B8C\u5584\u4E86\u8FD9\u4E00\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u589E\u52A0\u7B80\u6613\u7248-memtracker",children:"\u589E\u52A0\u7B80\u6613\u7248 MemTracker"}),"\n",(0,i.jsx)(n.p,{children:"MemTracker \u662F\u4E00\u4E2A\u7528\u4E8E\u5206\u6790\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u7684\u7EDF\u8BA1\u5DE5\u5177\uFF0C\u5728 1.1.0 \u7248\u672C\u7684\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u4E2D\uFF0C\u7531\u4E8E BE \u4FA7\u6CA1\u6709 MemTracker\uFF0C\u53EF\u80FD\u51FA\u73B0\u56E0\u5185\u5B58\u5931\u63A7\u5BFC\u81F4\u7684 OOM \u95EE\u9898\u3002\u5728 1.1.1 \u7248\u672C\u4E2D\uFF0CBE \u4FA7\u589E\u52A0\u4E86\u4E00\u4E2A\u7B80\u6613\u7248 MemTracker\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u63A7\u5236\u5185\u5B58\uFF0C\u5E76\u5728\u5185\u5B58\u8D85\u51FA\u65F6\u53D6\u6D88\u67E5\u8BE2\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5B8C\u6574\u7248 MemTracker \u5C06\u5728 1.1.2 \u7248\u672C\u4E2D\u6B63\u5F0F\u53D1\u5E03\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6539\u8FDB",children:"\u6539\u8FDB"}),"\n",(0,i.jsx)(n.h3,{id:"\u652F\u6301\u5728-page-cache-\u4E2D\u7F13\u5B58\u89E3\u538B\u540E\u6570\u636E",children:"\u652F\u6301\u5728 Page Cache \u4E2D\u7F13\u5B58\u89E3\u538B\u540E\u6570\u636E\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Page Cache \u4E2D\u6709\u4E9B\u6570\u636E\u662F\u7528 bitshuffle \u7F16\u7801\u65B9\u5F0F\u538B\u7F29\u7684\uFF0C\u5728\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u9700\u8981\u82B1\u8D39\u5927\u91CF\u7684\u65F6\u95F4\u6765\u89E3\u538B\u3002\u5728 1.1.1 \u7248\u672C\u4E2D\uFF0CDoris \u5C06\u7F13\u5B58\u89E3\u538B\u7531 bitshuffle \u7F16\u7801\u7684\u6570\u636E\u4EE5\u52A0\u901F\u67E5\u8BE2\uFF0C\u6211\u4EEC\u53D1\u73B0\u5728 ssb-flat \u7684\u4E00\u4E9B\u67E5\u8BE2\u4E2D\uFF0C\u53EF\u4EE5\u51CF\u5C11 30% \u7684\u5EF6\u65F6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"bug-\u4FEE\u590D",children:"Bug \u4FEE\u590D"}),"\n",(0,i.jsx)(n.h3,{id:"\u4FEE\u590D\u65E0\u6CD5\u4ECE-10-\u7248\u672C\u8FDB\u884C\u6EDA\u52A8\u5347\u7EA7\u7684\u95EE\u9898",children:"\u4FEE\u590D\u65E0\u6CD5\u4ECE 1.0 \u7248\u672C\u8FDB\u884C\u6EDA\u52A8\u5347\u7EA7\u7684\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u4E2A\u95EE\u9898\u662F\u5728 1.1.0 \u7248\u672C\u4E2D\u51FA\u73B0\u7684\uFF0C\u5F53\u5347\u7EA7 BE \u800C\u4E0D\u5347\u7EA7 FE \u65F6\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4 BE Core\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u9047\u5230\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u7528 ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/10833",children:"#10833"})," \u6765\u4FEE\u590D\u5B83\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4FEE\u590D\u67D0\u4E9B\u67E5\u8BE2\u4E0D\u80FD\u56DE\u9000\u5230\u975E\u5411\u91CF\u5316\u5F15\u64CE\u7684\u95EE\u9898\u5E76\u5BFC\u81F4-be-core",children:"\u4FEE\u590D\u67D0\u4E9B\u67E5\u8BE2\u4E0D\u80FD\u56DE\u9000\u5230\u975E\u5411\u91CF\u5316\u5F15\u64CE\u7684\u95EE\u9898\uFF0C\u5E76\u5BFC\u81F4 BE Core\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u76EE\u524D\uFF0C\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u4E0D\u80FD\u5904\u7406\u6240\u6709\u7684 SQL \u67E5\u8BE2\uFF0C\u4E00\u4E9B\u67E5\u8BE2\uFF08\u5982 left outer join\uFF09\u5C06\u4F7F\u7528\u975E\u5411\u91CF\u5316\u5F15\u64CE\u6765\u8FD0\u884C\u3002\u4F46\u90E8\u5206\u573A\u666F\u5728 1.1.0 \u7248\u672C\u4E2D\u672A\u88AB\u8986\u76D6\u5230\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4 BE \u6302\u6389\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4FEE\u590D-compaction-\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u5BFC\u81F4\u7684--235-\u9519\u8BEF",children:"\u4FEE\u590D Compaction \u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u5BFC\u81F4\u7684 -235 \u9519\u8BEF\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Unique Key \u6A21\u578B\u4E2D\uFF0C\u5F53\u4E00\u4E2A Rowset \u6709\u591A\u4E2A Segment \u65F6\uFF0C\u5728\u505A Compaction \u8FC7\u7A0B\u4E2D\u7531\u4E8E\u6CA1\u6709\u6B63\u786E\u7684\u7EDF\u8BA1\u884C\u6570\uFF0C\u4F1A\u5BFC\u81F4Compaction \u5931\u8D25\u5E76\u4E14\u4EA7\u751F Tablet \u7248\u672C\u8FC7\u591A\u800C\u5BFC\u81F4\u7684 -235 \u9519\u8BEF\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4FEE\u590D\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u90E8\u5206-segment-fault",children:"\u4FEE\u590D\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u90E8\u5206 Segment fault\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/10961",children:"#10961"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/10954",children:"#10954"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/10962",children:"#10962"})]}),"\n",(0,i.jsx)(n.h1,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,i.jsx)(n.p,{children:"\u611F\u8C22\u6240\u6709\u53C2\u4E0E\u8D21\u732E 1.1.1 \u7248\u672C\u7684\u5F00\u53D1\u8005:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"@jacktengg\n@mrhhsg\n@xinyiZzz\n@yixiutt\n@starocean999\n@morrySnow\n@morningman\n@HappenLee\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var t=r(667294);let i={},l=t.createContext(i);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);