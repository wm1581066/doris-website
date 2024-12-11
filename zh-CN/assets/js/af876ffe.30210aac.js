"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["44430"],{846290:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.6","title":"Release 2.0.6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/v2.0/release-2.0.6.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.6","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.6","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.0.6","language":"zh-CN"}}'),l=i("785893"),r=i("250065");let a={title:"Release 2.0.6",language:"zh-CN"},t=void 0,o={},c=[{value:"\u884C\u4E3A\u53D8\u66F4",id:"\u884C\u4E3A\u53D8\u66F4",level:2},{value:"\u65B0\u529F\u80FD",id:"\u65B0\u529F\u80FD",level:2},{value:"\u6539\u8FDB\u548C\u4F18\u5316",id:"\u6539\u8FDB\u548C\u4F18\u5316",level:2},{value:"\u81F4\u8C22",id:"\u81F4\u8C22",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0C",(0,l.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Apache Doris 2.0.6"})," \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 3 \u6708 12 \u65E5\u6B63\u5F0F\u4E0E\u5927\u5BB6\u89C1\u9762\u3002\u672C\u6B21\u7248\u672C\u4E2D\uFF0C\u6709 51 \u4F4D\u8D21\u732E\u8005\u63D0\u4EA4\u4E86\u7EA6 114 \u4E2A\u529F\u80FD\u6539\u8FDB\u4EE5\u53CA\u95EE\u9898\u4FEE\u590D\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4E86\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u6027\u80FD\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\uFF1A"})," ",(0,l.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"GitHub \u4E0B\u8F7D\uFF1A"})," ",(0,l.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u884C\u4E3A\u53D8\u66F4",children:"\u884C\u4E3A\u53D8\u66F4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u65E0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65B0\u529F\u80FD",children:"\u65B0\u529F\u80FD"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u81EA\u52A8\u9009\u62E9\u7269\u5316\u89C6\u56FE\u65F6\u652F\u6301\u5339\u914D\u5E26\u522B\u540D\u7684\u51FD\u6570"}),"\n",(0,l.jsx)(n.li,{children:"\u589E\u52A0\u5B89\u5168\u4E0B\u7EBF\u4E00\u4E2A tablet \u526F\u672C\u7684\u547D\u4EE4"}),"\n",(0,l.jsx)(n.li,{children:"\u5916\u8868\u7EDF\u8BA1\u4FE1\u606F\u589E\u52A0\u884C\u6570\u7EDF\u8BA1\u7F13\u5B58"}),"\n",(0,l.jsx)(n.li,{children:"\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\u652F\u6301 Rollup"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6539\u8FDB\u548C\u4F18\u5316",children:"\u6539\u8FDB\u548C\u4F18\u5316"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4F7F\u7528 protobuf \u7A33\u5B9A\u5E8F\u5217\u5316\u51CF\u5C11 Tablet Schema \u7F13\u5B58\u5185\u5B58\u5360\u7528"}),"\n",(0,l.jsxs)(n.li,{children:["\u63D0\u5347 ",(0,l.jsx)(n.code,{children:"show column stats"})," \u7684\u6027\u80FD"]}),"\n",(0,l.jsx)(n.li,{children:"\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\u548C\u4F18\u5316\u5668\u652F\u6301 Iceberg \u548C Paimon \u7684\u884C\u6570\u4F30\u8BA1"}),"\n",(0,l.jsx)(n.li,{children:"JDBC Catalog\u652F\u6301\u8BFB\u53D6 SQL Server \u7684 Timestamp \u7C7B\u578B"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u540E\uFF0C\u8877\u5FC3\u611F\u8C22 51 \u4F4D\u5F00\u53D1\u8005\u4E3A Apache Doris 2.0.6 \u7248\u672C\u505A\u51FA\u4E86\u91CD\u8981\u8D21\u732E:"}),"\n",(0,l.jsx)(n.p,{children:"924060929, AshinGau, BePPPower, BiteTheDDDDt, CalvinKirs, cambyzju, deardeng, DongLiang-0, eldenmoon, englefly, feelshana, feiniaofeiafei, felixwluo, HappenLee, hust-hhb, iwanttobepowerful, ixzc, JackDrogon, Jibing-Li, KassieZ, larshelge, liaoxin01, LiBinfeng-01, liutang123, luennng, morningman, morrySnow, mrhhsg, qidaye, starocean999, TangSiyang2001, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xuwei0912, xy720, xzj7019, yiguolei, yujun777, Yukang-Lian, Yulei-Yang, zclllyybb, zddr, zhangstar333, zhannngchen, zhiqiang-hhhh, zy-kkk, zzzxl1993"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return a}});var s=i(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);