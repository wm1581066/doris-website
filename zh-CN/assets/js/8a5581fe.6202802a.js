"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["913906"],{621500:function(e,r,i){i.r(r),i.d(r,{metadata:()=>l,contentTitle:()=>c,default:()=>o,assets:()=>a,toc:()=>t,frontMatter:()=>h});var l=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.2","title":"Release 1.1.2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/v1.1/release-1.1.2.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.2","permalink":"/zh-CN/docs/2.0/releasenotes/v1.1/release-1.1.2","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 1.1.2","language":"zh-CN"}}'),s=i("785893"),n=i("250065");let h={title:"Release 1.1.2",language:"zh-CN"},c="\u65B0\u589E\u529F\u80FD",a={},t=[{value:"MemTracker",id:"memtracker",level:3},{value:"\u589E\u52A0\u5C55\u793A\u548C\u53D6\u6D88\u6B63\u5728\u6267\u884C Query \u7684 API",id:"\u589E\u52A0\u5C55\u793A\u548C\u53D6\u6D88\u6B63\u5728\u6267\u884C-query-\u7684-api",level:3},{value:"\u652F\u6301\u8BFB\u5199 Emoji \u8868\u60C5\u901A\u8FC7 ODBC \u5916\u8868",id:"\u652F\u6301\u8BFB\u5199-emoji-\u8868\u60C5\u901A\u8FC7-odbc-\u5916\u8868",level:3},{value:"\u6570\u636E\u6E56\u76F8\u5173\u6539\u8FDB",id:"\u6570\u636E\u6E56\u76F8\u5173\u6539\u8FDB",level:3},{value:"\u5728 Spark Load \u4E2D\u589E\u52A0\u5BF9 String \u5B57\u7B26\u4E32\u7C7B\u578B\u548C Text \u6587\u672C\u7C7B\u578B\u7684\u652F\u6301",id:"\u5728-spark-load-\u4E2D\u589E\u52A0\u5BF9-string-\u5B57\u7B26\u4E32\u7C7B\u578B\u548C-text-\u6587\u672C\u7C7B\u578B\u7684\u652F\u6301",level:3},{value:"\u5728\u975E\u5411\u91CF\u5316\u5F15\u64CE\u652F\u6301\u590D\u7528 Block\uFF0C\u5728\u67D0\u4E9B\u573A\u666F\u4E2D\u6709 50%\u6027\u80FD\u63D0\u5347\u3002#11392",id:"\u5728\u975E\u5411\u91CF\u5316\u5F15\u64CE\u652F\u6301\u590D\u7528-block\u5728\u67D0\u4E9B\u573A\u666F\u4E2D\u6709-50\u6027\u80FD\u63D0\u534711392",level:3},{value:"\u63D0\u5347 Like \u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6027\u80FD",id:"\u63D0\u5347-like-\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6027\u80FD",level:3},{value:"\u7981\u7528 TCMalloc \u7684 aggressive_memory_decommit\u3002",id:"\u7981\u7528-tcmalloc-\u7684-aggressive_memory_decommit",level:3},{value:"\u4FEE\u590D\u90E8\u5206\u53EF\u80FD\u5BFC\u81F4 FE \u5931\u8D25\u6216\u8005\u6570\u636E\u635F\u574F\u7684\u95EE\u9898",id:"\u4FEE\u590D\u90E8\u5206\u53EF\u80FD\u5BFC\u81F4-fe-\u5931\u8D25\u6216\u8005\u6570\u636E\u635F\u574F\u7684\u95EE\u9898",level:3},{value:"\u4FEE\u590D FE \u5728\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u4F1A\u5728 waitFor_rpc \u4E0A Hang \u4F4F\u4EE5\u53CA BE \u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u4F1A Hang \u4F4F\u7684\u95EE\u9898\u3002",id:"\u4FEE\u590D-fe-\u5728\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u4F1A\u5728-waitfor_rpc-\u4E0A-hang-\u4F4F\u4EE5\u53CA-be-\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u4F1A-hang-\u4F4F\u7684\u95EE\u9898",level:3},{value:"\u4FEE\u590D\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u67E5\u8BE2\u65F6\u5F97\u5230\u9519\u8BEF\u7ED3\u679C\u7684\u95EE\u9898\u3002",id:"\u4FEE\u590D\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u67E5\u8BE2\u65F6\u5F97\u5230\u9519\u8BEF\u7ED3\u679C\u7684\u95EE\u9898",level:3},{value:"\u4FEE\u590D\u8BB8\u591A Planner \u5BFC\u81F4 BE Core \u6216\u8005\u5904\u4E8E\u4E0D\u6B63\u5E38\u72B6\u6001\u7684\u95EE\u9898\u3002",id:"\u4FEE\u590D\u8BB8\u591A-planner-\u5BFC\u81F4-be-core-\u6216\u8005\u5904\u4E8E\u4E0D\u6B63\u5E38\u72B6\u6001\u7684\u95EE\u9898",level:3}];function d(e){let r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"\u5728 Apache Doris 1.1.2 \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u65B0\u7684 Memtracker\u3001\u6781\u5927\u7A0B\u5EA6\u4E0A\u907F\u514D OOM \u7C7B\u95EE\u9898\u7684\u53D1\u751F\uFF0C\u63D0\u5347\u4E86\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u5728\u591A\u6570\u67E5\u8BE2\u573A\u666F\u7684\u6027\u80FD\u8868\u73B0\uFF0C\u4FEE\u590D\u4E86\u8BF8\u591A\u5BFC\u81F4 BE \u548C FE \u53D1\u751F\u5F02\u5E38\u7684\u95EE\u9898\uFF0C\u4F18\u5316\u4E86\u5728\u6E56\u4ED3\u8054\u90A6\u67E5\u8BE2\u573A\u666F\u7684\u90E8\u5206\u4F53\u9A8C\u95EE\u9898\u5E76\u63D0\u5347\u8BBF\u95EE\u5916\u90E8\u6570\u636E\u7684\u6027\u80FD\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u76F8\u8F83\u4E8E 1.1.1 \u7248\u672C\uFF0C\u5728 1.1.2 \u7248\u672C\u4E2D\u6709\u8D85\u8FC7 170 \u4E2A Issue \u548C\u6027\u80FD\u4F18\u5316\u9879\u88AB\u5408\u5165\uFF0C\u7CFB\u7EDF\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u90FD\u5F97\u5230\u8FDB\u4E00\u6B65\u52A0\u5F3A\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C1.1.2 \u7248\u672C\u8FD8\u5C06\u4F5C\u4E3A Apache Doris \u9996\u4E2A LTS \uFF08Long-term Support\uFF09\u957F\u5468\u671F\u652F\u6301\u7248\u672C\uFF0C\u540E\u7EED\u957F\u671F\u7EF4\u62A4\u548C\u652F\u6301\uFF0C\u63A8\u8350\u6240\u6709\u7528\u6237\u4E0B\u8F7D\u548C\u5347\u7EA7\u3002"}),"\n",(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"\u65B0\u589E\u529F\u80FD",children:"\u65B0\u589E\u529F\u80FD"})}),"\n",(0,s.jsx)(r.h3,{id:"memtracker",children:"MemTracker"}),"\n",(0,s.jsx)(r.p,{children:"MemTracker \u662F\u4E00\u4E2A\u7528\u4E8E\u5206\u6790\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u7684\u7EDF\u8BA1\u5DE5\u5177\uFF0C\u5728 1.1.1 \u7248\u672C\u4E2D\u6211\u4EEC\u5F15\u5165\u4E86\u7B80\u6613\u7248 Memtracker \u7528\u4EE5\u63A7\u5236 BE \u4FA7\u5185\u5B58\u3002\u5728 1.1.2 \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u65B0\u7684 MemTracker\uFF0C\u5728\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u548C\u975E\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u4E2D\u90FD\u66F4\u4E3A\u51C6\u786E\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u589E\u52A0\u5C55\u793A\u548C\u53D6\u6D88\u6B63\u5728\u6267\u884C-query-\u7684-api",children:"\u589E\u52A0\u5C55\u793A\u548C\u53D6\u6D88\u6B63\u5728\u6267\u884C Query \u7684 API"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"GET /rest/v2/manager/query/current_queries"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"GET /rest/v2/manager/query/kill/{query_id}"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5177\u4F53\u4F7F\u7528\u53C2\u8003\u6587\u6863 ",(0,s.jsx)(r.a,{href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/http-actions/fe/manager/query-profile-action?_highlight=current&_highlight=query#request",children:"Query Profile Action"})]}),"\n",(0,s.jsx)(r.h3,{id:"\u652F\u6301\u8BFB\u5199-emoji-\u8868\u60C5\u901A\u8FC7-odbc-\u5916\u8868",children:"\u652F\u6301\u8BFB\u5199 Emoji \u8868\u60C5\u901A\u8FC7 ODBC \u5916\u8868"}),"\n",(0,s.jsx)(r.h1,{id:"\u4F18\u5316\u6539\u8FDB",children:"\u4F18\u5316\u6539\u8FDB"}),"\n",(0,s.jsx)(r.h3,{id:"\u6570\u636E\u6E56\u76F8\u5173\u6539\u8FDB",children:"\u6570\u636E\u6E56\u76F8\u5173\u6539\u8FDB"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u626B\u63CF HDFS ORC \u6587\u4EF6\u65F6\u6027\u80FD\u63D0\u5347\u7EA6 300%\u3002",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11501",children:"#11501"})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u67E5\u8BE2 Iceberg \u8868\u652F\u6301 HDFS \u7684 HA \u6A21\u5F0F\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u652F\u6301\u67E5\u8BE2\u7531 ",(0,s.jsx)(r.a,{href:"https://tez.apache.org/",children:"Apache Tez"})," \u521B\u5EFA\u7684 Hive \u6570\u636E"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u6DFB\u52A0\u963F\u91CC\u4E91 OSS \u4F5C\u4E3A Hive \u5916\u90E8\u652F\u6301"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u5728-spark-load-\u4E2D\u589E\u52A0\u5BF9-string-\u5B57\u7B26\u4E32\u7C7B\u578B\u548C-text-\u6587\u672C\u7C7B\u578B\u7684\u652F\u6301",children:"\u5728 Spark Load \u4E2D\u589E\u52A0\u5BF9 String \u5B57\u7B26\u4E32\u7C7B\u578B\u548C Text \u6587\u672C\u7C7B\u578B\u7684\u652F\u6301"}),"\n",(0,s.jsxs)(r.h3,{id:"\u5728\u975E\u5411\u91CF\u5316\u5F15\u64CE\u652F\u6301\u590D\u7528-block\u5728\u67D0\u4E9B\u573A\u666F\u4E2D\u6709-50\u6027\u80FD\u63D0\u534711392",children:["\u5728\u975E\u5411\u91CF\u5316\u5F15\u64CE\u652F\u6301\u590D\u7528 Block\uFF0C\u5728\u67D0\u4E9B\u573A\u666F\u4E2D\u6709 50%\u6027\u80FD\u63D0\u5347\u3002",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11392",children:"#11392"})]}),"\n",(0,s.jsx)(r.h3,{id:"\u63D0\u5347-like-\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6027\u80FD",children:"\u63D0\u5347 Like \u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6027\u80FD"}),"\n",(0,s.jsx)(r.h3,{id:"\u7981\u7528-tcmalloc-\u7684-aggressive_memory_decommit",children:"\u7981\u7528 TCMalloc \u7684 aggressive_memory_decommit\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u67E5\u8BE2\u6216\u5BFC\u5165\u65F6\u5C06\u4F1A\u6709 40% \u6027\u80FD\u63D0\u5347\uFF0C\u4E5F\u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"tc_enable_aggressive_memory_decommit"}),"\u6765\u4FEE\u6539"]}),"\n",(0,s.jsx)(r.h1,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,s.jsx)(r.h3,{id:"\u4FEE\u590D\u90E8\u5206\u53EF\u80FD\u5BFC\u81F4-fe-\u5931\u8D25\u6216\u8005\u6570\u636E\u635F\u574F\u7684\u95EE\u9898",children:"\u4FEE\u590D\u90E8\u5206\u53EF\u80FD\u5BFC\u81F4 FE \u5931\u8D25\u6216\u8005\u6570\u636E\u635F\u574F\u7684\u95EE\u9898"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u5728 HA \u73AF\u5883\u4E2D\uFF0CBDBJE \u5C06\u4FDD\u7559\u5C3D\u53EF\u80FD\u591A\u7684\u6587\u4EF6\uFF0C\u901A\u8FC7\u589E\u52A0\u914D\u7F6E ",(0,s.jsx)(r.code,{children:"bdbje_reserved_disk_bytes "}),"\u4EE5\u907F\u514D\u4EA7\u751F\u592A\u591A\u7684 BDBJE \u6587\u4EF6\uFF0CBDBJE \u65E5\u5FD7\u53EA\u6709\u5728\u63A5\u8FD1\u78C1\u76D8\u9650\u5236\u65F6\u624D\u4F1A\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u4FEE\u590D\u4E86 BDBJE \u4E2D\u7684\u91CD\u8981\u9519\u8BEF\uFF0C\u8BE5\u9519\u8BEF\u5C06\u5BFC\u81F4 FE \u526F\u672C\u65E0\u6CD5\u6B63\u786E\u542F\u52A8\u6216\u6570\u636E\u635F\u574F\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u4FEE\u590D-fe-\u5728\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u4F1A\u5728-waitfor_rpc-\u4E0A-hang-\u4F4F\u4EE5\u53CA-be-\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u4F1A-hang-\u4F4F\u7684\u95EE\u9898",children:"\u4FEE\u590D FE \u5728\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\u4F1A\u5728 waitFor_rpc \u4E0A Hang \u4F4F\u4EE5\u53CA BE \u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u4F1A Hang \u4F4F\u7684\u95EE\u9898\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12459",children:"#12459"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12458",children:"#12458"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12392",children:"#12392"})]}),"\n",(0,s.jsx)(r.h3,{id:"\u4FEE\u590D\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u67E5\u8BE2\u65F6\u5F97\u5230\u9519\u8BEF\u7ED3\u679C\u7684\u95EE\u9898",children:"\u4FEE\u590D\u5411\u91CF\u5316\u6267\u884C\u5F15\u64CE\u67E5\u8BE2\u65F6\u5F97\u5230\u9519\u8BEF\u7ED3\u679C\u7684\u95EE\u9898\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11754",children:"#11754"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11694",children:"#11694"})]}),"\n",(0,s.jsx)(r.h3,{id:"\u4FEE\u590D\u8BB8\u591A-planner-\u5BFC\u81F4-be-core-\u6216\u8005\u5904\u4E8E\u4E0D\u6B63\u5E38\u72B6\u6001\u7684\u95EE\u9898",children:"\u4FEE\u590D\u8BB8\u591A Planner \u5BFC\u81F4 BE Core \u6216\u8005\u5904\u4E8E\u4E0D\u6B63\u5E38\u72B6\u6001\u7684\u95EE\u9898\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12080",children:"#12080"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12075",children:"#12075"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12040",children:"#12040"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12003",children:"#12003"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/12007",children:"#12007"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11971",children:"#11971"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11933",children:"#11933"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11861",children:"#11861"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11859",children:"#11859"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11855",children:"#11855"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11837",children:"#11837"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11834",children:"#11834"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11821",children:"#11821"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11782",children:"#11782"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11723",children:"#11723"})," ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/11569",children:"#11569"})]})]})}function o(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,r,i){i.d(r,{Z:function(){return c},a:function(){return h}});var l=i(667294);let s={},n=l.createContext(s);function h(e){let r=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:h(e.components),l.createElement(n.Provider,{value:r},e.children)}}}]);