"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["481842"],{331499:function(e,r,s){s.r(r),s.d(r,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.5","title":"Release 1.1.5","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/releasenotes/v1.1/release-1.1.5.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.5","permalink":"/zh-CN/docs/1.2/releasenotes/v1.1/release-1.1.5","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Release 1.1.5","language":"zh-CN"}}'),n=s("785893"),h=s("250065");let i={title:"Release 1.1.5",language:"zh-CN"},a="Behavior Changes",l={},c=[];function o(e){let r={a:"a",h1:"h1",header:"header",p:"p",...(0,h.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"\u5728 1.1.5 \u7248\u672C\u4E2D\uFF0CDoris \u56E2\u961F\u5DF2\u7ECF\u4FEE\u590D\u4E86\u81EA 1.1.4 \u7248\u672C\u53D1\u5E03\u4EE5\u6765\u7EA6 36 \u4E2A\u95EE\u9898\u6216\u6027\u80FD\u6539\u8FDB\u9879\u3002\u540C\u65F6\uFF0C1.1.5 \u7248\u672C\u4E5F\u662F\u4F5C\u4E3A 1.1 LTS \u7248\u672C\u7684\u9519\u8BEF\u4FEE\u590D\u7248\u672C\uFF0C\u5EFA\u8BAE\u6240\u6709\u7528\u6237\u5347\u7EA7\u5230\u8FD9\u4E2A\u7248\u672C\u3002"}),"\n",(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"behavior-changes",children:"Behavior Changes"})}),"\n",(0,n.jsx)(r.p,{children:'\u5F53\u522B\u540D\u4E0E\u539F\u59CB\u5217\u540D\u76F8\u540C\u65F6\uFF0C\u4F8B\u5982 "select year(birthday) as birthday"\uFF0C\u5728 group by\u3001order by\u3001having \u5B50\u53E5\u4E2D\u4F7F\u7528\u522B\u540D\u65F6\u5C06\u4E0E MySQL \u4E2D\u4FDD\u6301\u4E00\u81F4\uFF0CGroup by \u548C having \u5C06\u9996\u5148\u4F7F\u7528\u539F\u59CB\u5217\uFF0Corder by \u5C06\u9996\u5148\u4F7F\u7528\u522B\u540D\u3002\u8FD9\u91CC\u53EF\u80FD\u4F1A\u5BF9\u7528\u6237\u5E26\u6765\u7591\u60D1\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u6700\u597D\u4E0D\u8981\u4F7F\u7528\u4E0E\u539F\u59CB\u5217\u540D\u76F8\u540C\u7684\u522B\u540D\u3002'}),"\n",(0,n.jsx)(r.h1,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(r.p,{children:["\u652F\u6301 Hash \u51FD\u6570 murmur_hash3_64\u3002",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14636",children:"#14636"})]}),"\n",(0,n.jsx)(r.h1,{id:"improvements",children:"Improvements"}),"\n",(0,n.jsxs)(r.p,{children:["\u4E3A\u65E5\u671F\u51FD\u6570 convert_tz \u6DFB\u52A0\u65F6\u533A\u7F13\u5B58\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14616",children:"#14616"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u5F53\u8C03\u7528 show \u5B50\u53E5\u65F6\uFF0C\u6309 tablename \u5BF9\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14492",children:"#14492"})]}),"\n",(0,n.jsx)(r.h1,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,n.jsxs)(r.p,{children:["\u4FEE\u590D if \u8BED\u53E5\u4E2D\u5E26\u6709\u5E38\u91CF\u65F6\u5BFC\u81F4 BE \u53EF\u80FD Coredump \u7684\u95EE\u9898\u3002",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14858",children:"#14858"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4FEE\u590D ColumnVector::insert_date_column \u53EF\u80FD\u5D29\u6E83\u7684\u95EE\u9898 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14839",children:"#14839"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u66F4\u65B0 high_priority_flush_thread_num_per_store \u9ED8\u8BA4\u503C\u4E3A 6\uFF0C\u5C06\u63D0\u9AD8\u8D1F\u8F7D\u6027\u80FD\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14775",children:"#14775"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4F18\u5316 quick compaction core\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14731",children:"#14731"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4FEE\u590D\u5206\u533A\u5217\u975E duplicate key \u65F6 Spark Load \u629B\u51FA IndexOutOfBounds \u9519\u8BEF\u7684\u95EE\u9898\u3002\n",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14661",children:"#14661"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4FEE\u6B63 VCollectorIterator \u4E2D\u7684\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14549",children:"#14549"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4FEE\u590D\u4E86\u5B58\u5728 Sequence \u5217\u65F6\u53EF\u80FD\u5B58\u5728\u7684\u5EFA\u8868\u95EE\u9898\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14511",children:"#14511"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4F7F\u7528 avg rowset \u6765\u8BA1\u7B97\u6279\u91CF\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528 total_bytes\uFF0C\u56E0\u4E3A\u5B83\u8981\u82B1\u8D39\u5927\u91CF\u7684 Cpu\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14273",children:"#14273"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4FEE\u590D\u4E86 right outer join \u53EF\u80FD\u5BFC\u81F4 core \u7684\u95EE\u9898\u3002",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14821",children:"#14821"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4F18\u5316\u4E86 TCMalloc gc \u7684\u7B56\u7565\u3002 ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14777",children:"#14777"})," ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14738",children:"#14738"})," ",(0,n.jsx)(r.a,{href:"https://github.com/apache/doris/pull/14374",children:"#14374"})]})]})}function p(e={}){let{wrapper:r}={...(0,h.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return i}});var t=s(667294);let n={},h=t.createContext(n);function i(e){let r=t.useContext(h);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(h.Provider,{value:r},e.children)}}}]);