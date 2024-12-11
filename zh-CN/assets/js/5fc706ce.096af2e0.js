"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["734028"],{922782:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>t,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.5","title":"Release 2.0.5","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/v2.0/release-2.0.5.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.5","permalink":"/zh-CN/docs/releasenotes/v2.0/release-2.0.5","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.0.5","language":"zh-CN"}}'),s=i("785893"),r=i("250065");let a={title:"Release 2.0.5",language:"zh-CN"},t=void 0,o={},c=[{value:"\u884C\u4E3A\u53D8\u66F4",id:"\u884C\u4E3A\u53D8\u66F4",level:2},{value:"\u65B0\u529F\u80FD",id:"\u65B0\u529F\u80FD",level:2},{value:"\u6539\u8FDB\u548C\u4F18\u5316",id:"\u6539\u8FDB\u548C\u4F18\u5316",level:2},{value:"\u81F4\u8C22",id:"\u81F4\u8C22",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0C",(0,s.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Apache Doris 2.0.5"})," \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 2 \u6708 27 \u65E5\u6B63\u5F0F\u4E0E\u5927\u5BB6\u89C1\u9762\u3002\u8FD9\u6B21\u66F4\u65B0\u5E26\u6765\u4E00\u7CFB\u5217\u884C\u4E3A\u53D8\u66F4\u548C\u529F\u80FD\u66F4\u65B0\uFF0C\u5E76\u8FDB\u884C\u4E86\u82E5\u5E72\u7684\u6539\u8FDB\u4E0E\u4F18\u5316\uFF0C\u65E8\u5728\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u4E3A\u7A33\u5B9A\u9AD8\u6548\u7684\u6570\u636E\u67E5\u8BE2\u4E0E\u5206\u6790\u4F53\u9A8C\u3002\u65B0\u7248\u672C\u5DF2\u7ECF\u4E0A\u7EBF\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\uFF01"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\uFF1A"})," ",(0,s.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GitHub \u4E0B\u8F7D\uFF1A"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u884C\u4E3A\u53D8\u66F4",children:"\u884C\u4E3A\u53D8\u66F4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"select char(0) = '\\0'"}),"  \u8FD4\u56DE true\uFF0C\u8DDF MySQL \u7684\u884C\u4E3A\u4FDD\u6301\u4E00\u81F4\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/30034",children:"https://github.com/apache/doris/pull/30034"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Export \u5BFC\u51FA\u6570\u636E\u652F\u6301\u7A7A\u8868\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/30703",children:"https://github.com/apache/doris/pull/30703"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u65B0\u529F\u80FD",children:"\u65B0\u529F\u80FD"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5229\u7528\u8FC7\u6EE4\u6761\u4EF6\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"is null"})," \u8C13\u8BCD\uFF0C\u5C06 OUTER JOIN \u8F6C\u6362\u4E3A ANTI JOIN"]}),"\n",(0,s.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"SHOW TABLETS BELONG"})," \u8BED\u6CD5\u7528\u4E8E\u83B7\u53D6 tablet \u5C5E\u4E8E\u54EA\u4E2A table"]}),"\n",(0,s.jsxs)(n.li,{children:["InferPredicates \u652F\u6301 ",(0,s.jsx)(n.code,{children:"IN"}),"\uFF0C\u4F8B\u5982\uFF1A",(0,s.jsx)(n.code,{children:"a = b & a in [1, 2] -> b in [1, 2]"})]}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u5BF9\u7269\u5316\u89C6\u56FE\u6536\u96C6\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SHOW PROCESSLIST"})," \u652F\u6301\u8F93\u51FA\u8FDE\u63A5\u5BF9\u5E94\u7684 FE"]}),"\n",(0,s.jsxs)(n.li,{children:["Export \u5BFC\u51FA CSV \u6587\u4EF6\u652F\u6301\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"with_bom"})," \u53C2\u6570\u63A7\u5236\u662F\u5426\u5E26\u6709 Windows BOM"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6539\u8FDB\u548C\u4F18\u5316",children:"\u6539\u8FDB\u548C\u4F18\u5316"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u65E0\u7EDF\u8BA1\u4FE1\u606F\u65F6\u4F18\u5316 Query Plan"}),"\n",(0,s.jsx)(n.li,{children:"\u57FA\u4E8E Rollup \u7684\u7EDF\u8BA1\u4FE1\u606F\u4F18\u5316 Query Plan"}),"\n",(0,s.jsx)(n.li,{children:"\u7528\u6237\u505C\u6B62 Auto Analyze \u540E\u5C3D\u5FEB\u505C\u6B62\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\u4EFB\u52A1"}),"\n",(0,s.jsx)(n.li,{children:"\u7F13\u5B58\u7EDF\u8BA1\u4FE1\u606F\u6536\u96C6\u5F02\u5E38\uFF0C\u907F\u514D\u5927\u7EA6\u592A\u591A\u5F02\u5E38\u6808"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u5728 SQL \u4E2D\u81EA\u5B9A\u4F7F\u7528\u67D0\u4E2A\u7269\u5316\u89C6\u56FE"}),"\n",(0,s.jsx)(n.li,{children:"JDBC Catalog \u8C13\u8BCD\u4E0B\u63A8\u5217\u540D\u5B57\u7B26\u8F6C\u4E49"}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D MySQL Catalog \u4E2D ",(0,s.jsx)(n.code,{children:"to_date"})," \u51FD\u6570\u4E0B\u63A8\u7684\u95EE\u9898"]}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316 JDBC \u5BA2\u6237\u7AEF\u8FDE\u63A5\u5173\u95ED\u7684\u903B\u8F91\uFF0C\u5728\u5F02\u5E38\u65F6\u6B63\u5E38\u53D6\u6D88\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316 JDBC \u8FDE\u63A5\u6C60\u7684\u53C2\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u901A\u8FC7 HMS API \u83B7\u53D6 Hudi \u5916\u8868\u7684\u5206\u533A\u4FE1\u606F"}),"\n",(0,s.jsx)(n.li,{children:"\u4F18\u5316 Routine Load \u7684\u5185\u5B58\u5360\u7528\u548C\u9519\u8BEF\u4FE1\u606F"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C ",(0,s.jsx)(n.code,{children:"max_backup_restore_job_num_per_db"})," \u53C2\u6570\u4E3A 0\uFF0C\u8DF3\u8FC7\u6240\u6709\u5907\u4EFD\u6062\u590D\u4EFB\u52A1"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u540E\uFF0C\u8877\u5FC3\u611F\u8C22 59 \u4F4D\u5F00\u53D1\u8005\u4E3A Apache Doris 2.0.5 \u7248\u672C\u505A\u51FA\u4E86\u91CD\u8981\u8D21\u732E:"}),"\n",(0,s.jsx)(n.p,{children:"airborne12, alexxing662, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, ByteYue, caiconghui, cambyzju, catpineapple, dataroaring, eldenmoon, Emor-nj, englefly, felixwluo, GoGoWen, HappenLee, hello-stephen, HHoflittlefish777, HowardQin, JackDrogon, jacktengg, jackwener, Jibing-Li, KassieZ, LemonLiTree, liaoxin01, liugddx, LuGuangming, morningman, morrySnow, mrhhsg, Mryange, mymeiyi, nextdreamblue, qidaye, ryanzryu, seawinde,starocean999, TangSiyang2001, vinlee19, w41ter, wangbo, wsjz, wuwenchi, xiaokang, XieJiann, xingyingone, xy720,xzj7019, yujun777, zclllyybb, zhangstar333, zhannngchen, zhiqiang-hhhh, zxealous, zy-kkk, zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return a}});var l=i(667294);let s={},r=l.createContext(s);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);