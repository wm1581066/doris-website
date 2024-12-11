"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["911247"],{604153:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>s});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","title":"\u4F7F\u7528 Leading Hint \u63A7\u5236 Join \u987A\u5E8F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4F7F\u7528 Leading Hint \u63A7\u5236 Join \u987A\u5E8F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Hint \u63A7\u5236\u4EE3\u4EF7\u6539\u5199","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule"},"next":{"title":"\u4F7F\u7528 SQL Cache \u52A0\u901F\u67E5\u8BE2","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/accelerating-queries-with-sql-cache"}}'),l=i("785893"),c=i("250065");let s={title:"\u4F7F\u7528 Leading Hint \u63A7\u5236 Join \u987A\u5E8F",language:"zh-CN"},r=void 0,d={},a=[{value:"Leading Hint \u7B80\u4ECB",id:"leading-hint-\u7B80\u4ECB",level:2},{value:"\u8BED\u6CD5\u793A\u4F8B",id:"\u8BED\u6CD5\u793A\u4F8B",level:2},{value:"\u8C03\u4F18\u6848\u4F8B",id:"\u8C03\u4F18\u6848\u4F8B",level:2},{value:"\u4E0E ORDERED Hint \u6DF7\u7528",id:"\u4E0E-ordered-hint-\u6DF7\u7528",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function o(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"leading-hint-\u7B80\u4ECB",children:"Leading Hint \u7B80\u4ECB"}),"\n",(0,l.jsx)(e.p,{children:"Leading Hint \u662F\u4E00\u79CD\u5F3A\u5927\u7684\u67E5\u8BE2\u4F18\u5316\u6280\u672F\uFF0C\u5B83\u5141\u8BB8\u7528\u6237\u6307\u5BFC Doris \u4F18\u5316\u5668\u786E\u5B9A\u67E5\u8BE2\u8BA1\u5212\u4E2D\u7684\u8868\u8FDE\u63A5\u987A\u5E8F\u3002\u6B63\u786E\u4F7F\u7528 Leading Hint \u53EF\u4EE5\u663E\u8457\u63D0\u5347\u590D\u6742\u67E5\u8BE2\u7684\u6027\u80FD\u3002\u672C\u6587\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5728 Doris \u4E2D\u4F7F\u7528 Leading Hint \u6765\u63A7\u5236 Join \u7684\u987A\u5E8F\u3002"}),"\n",(0,l.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,l.jsxs)(e.p,{children:["\u8BE6\u7EC6\u4F7F\u7528\u8BF4\u660E\uFF0C\u53EF\u53C2\u8003 ",(0,l.jsx)(e.a,{href:"../../../query-acceleration/tuning/join-hint",children:"Hint"})," \u6587\u6863\u3002"]})}),"\n",(0,l.jsx)(e.h2,{id:"\u8BED\u6CD5\u793A\u4F8B",children:"\u8BED\u6CD5\u793A\u4F8B"}),"\n",(0,l.jsx)(e.p,{children:"\u67E5\u8BE2\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CDoris \u53EF\u80FD\u4F1A\u9009\u62E9 t1 \u4F5C\u4E3A\u9A71\u52A8\u8868\u3002\u5982\u679C\u6211\u4EEC\u60F3\u8981\u4EA4\u6362 join \u7684\u987A\u5E8F\uFF0C\u4F7F t2 \u6210\u4E3A\u9A71\u52A8\u8868\uFF0C\u53EF\u4EE5\u4F7F\u7528 Leading Hint\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING(t2 t1) */ * FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u9700\u8981\u9A8C\u8BC1 Hint \u662F\u5426\u751F\u6548\uFF0C\u53EF\u4EE5\u4F7F\u7528 EXPLAIN \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u67E5\u8BE2\u8BA1\u5212\u5E76\u9A8C\u8BC1\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"EXPLAIN SELECT /*+ LEADING(t2 t1) */ * FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,l.jsx)(e.p,{children:'\u5176\u4E2D\uFF0C\u5728 EXPLAIN \u7684\u7ED3\u679C\u4E2D\u4F1A\u6709\u4E00\u4E2A "Hint log" \u90E8\u5206\uFF0C\u663E\u793A\u4EE5\u4E0B\u5185\u5BB9\uFF1A'}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Used: \u8868\u793A\u6210\u529F\u5E94\u7528\u7684 ",(0,l.jsx)(e.code,{children:"hint"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Unused: \u8868\u793A\u672A\u4F7F\u7528\u7684 ",(0,l.jsx)(e.code,{children:"hint"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["SyntaxError: \u8868\u793A\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\u7684 ",(0,l.jsx)(e.code,{children:"hint"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8C03\u4F18\u6848\u4F8B",children:"\u8C03\u4F18\u6848\u4F8B"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"1. \u5DE6\u6DF1\u6811\uFF08\u9ED8\u8BA4\u884C\u4E3A\uFF09"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING(t1 t2 t3) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2 JOIN t3 ON t2.c2 = t3.c3;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6811\u5F62\u7ED3\u6784\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"      join  \n     /    \\  \n   join    t3  \n  /    \\  \nt1      t2\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2. \u53F3\u6DF1\u6811"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING(t1 {t2 t3}) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2 JOIN t3 ON t2.c2 = t3.c3;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6811\u5F62\u7ED3\u6784\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"  join  \n /    \\  \nt1    join  \n     /    \\  \n    t2     t3\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"3. Bushy \u6811"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING({t1 t2} {t3 t4}) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2   \nJOIN t3 ON t2.c2 = t3.c3   \nJOIN t4 ON t3.c3 = t4.c4;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6811\u5F62\u7ED3\u6784\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"      join  \n      /    \\  \n   join    join  \n  /    \\  /    \\  \n t1    t2 t3    t4\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"4. Zig-Zag \u6811"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING(t1 {t2 t3} t4) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2   \nJOIN t3 ON t2.c2 = t3.c3   \nJOIN t4 ON t3.c3 = t4.c4;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6811\u5F62\u7ED3\u6784\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"    join  \n   /    \\  \n join    t4  \n/    \\  \nt1   join  \n    /    \\  \n   t2     t3\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"5. \u7279\u6B8A\u60C5\u51B5\u5904\u7406"})}),"\n",(0,l.jsx)(e.p,{children:"\u5BF9\u4E8E\u975E\u5185\u8FDE\u63A5\uFF08\u5982 Outer Join\u3001Semi/Anti Join\uFF09\uFF0CLeading Hint \u4F1A\u6839\u636E\u539F\u59CB SQL \u8BED\u4E49\u81EA\u52A8\u63A8\u5BFC\u5404\u4E2A Join \u7684\u7C7B\u578B\u3002\u5982\u679C\u6307\u5B9A\u7684 Join \u987A\u5E8F\u4E0E\u539F SQL \u8BED\u4E49\u4E0D\u517C\u5BB9\uFF0CHint \u5C06\u88AB\u5FFD\u7565\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"6. \u89C6\u56FE\u548C\u5B50\u67E5\u8BE2"})}),"\n",(0,l.jsx)(e.p,{children:"\u53EF\u4EE5\u5C06\u89C6\u56FE\u6216\u5B50\u67E5\u8BE2\u7684\u522B\u540D\u4F5C\u4E3A\u4E00\u4E2A\u5B8C\u6574\u7684\u5B50\u6811\u8FDB\u884C\u6307\u5B9A\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ LEADING(alias t1) */ COUNT(*)   \nFROM t1 JOIN (SELECT c2 FROM t2 JOIN t3 ON t2.c2 = t3.c3) AS alias   \nON t1.c1 = alias.c2;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u6811\u5F62\u7ED3\u6784\uFF1A\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,l.jsx)(e.code,{children:"alias"})," \u88AB\u89C6\u4E3A\u4E00\u4E2A\u6574\u4F53\uFF0C\u5176\u5185\u90E8 Join \u987A\u5E8F\u7531\u5B50\u67E5\u8BE2\u672C\u8EAB\u51B3\u5B9A\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"       join  \n      /    \\  \n   alias    t1  \n   /    \\  \n  t2     t3\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4E0E-ordered-hint-\u6DF7\u7528",children:"\u4E0E ORDERED Hint \u6DF7\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u5F53 LEADING \u548C ORDERED Hint \u540C\u65F6\u4F7F\u7528\u65F6\uFF0CORDERED Hint \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ ORDERED */ t1.c1   \nFROM t2 JOIN t1 ON t1.c1 = t2.c2 JOIN t3 ON t2.c2 = t3.c3;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6811\u5F62\u7ED3\u6784\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"      join  \n     /    \\  \n   join    t3  \n  /    \\  \nt2      t1\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8FD9\u91CC\uFF0CORDERED Hint \u5F3A\u5236 Join \u987A\u5E8F\u5FC5\u987B\u4E25\u683C\u6309\u7167 FROM \u5B50\u53E5\u4E2D\u8868\u7684\u51FA\u73B0\u987A\u5E8F\u6765\u6267\u884C\u3002\u56E0\u6B64\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CORDERED Hint \u4F1A\u751F\u6548\uFF0C\u800C LEADING hint \u5219\u4F1A\u88AB\u5FFD\u7565\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,l.jsx)(e.p,{children:"\u901A\u8FC7\u5408\u7406\u4F7F\u7528 Leading Hint\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u6709\u6548\u5730\u63A7\u5236 Doris \u4E2D\u7684 Join \u987A\u5E8F\uFF0C\u8FDB\u800C\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002\u7136\u800C\u9700\u8C28\u8BB0\uFF0C\u8FD9\u662F\u4E00\u9879\u9AD8\u7EA7\u7279\u6027\uFF0C\u5E94\u5F53\u5728\u5145\u5206\u7406\u89E3\u67E5\u8BE2\u7279\u6027\u53CA\u6570\u636E\u5206\u5E03\u7684\u57FA\u7840\u4E0A\u8C28\u614E\u4F7F\u7528\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4F7F\u7528\u65F6\uFF0C\u9700\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8FC7\u5EA6\u4F9D\u8D56 Hint \u53EF\u80FD\u4F1A\u5BFC\u81F4\u4EA7\u751F\u6B21\u4F18\u7684\u6267\u884C\u8BA1\u5212\u3002\u56E0\u6B64\uFF0C\u5728\u4F7F\u7528\u524D\u8BF7\u786E\u4FDD\u5DF2\u5145\u5206\u7406\u89E3\u67E5\u8BE2\u53CA\u6570\u636E\u7684\u7279\u6027\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5F53\u5347\u7EA7 Doris \u7248\u672C\u65F6\uFF0C\u5E94\u91CD\u65B0\u8BC4\u4F30 Leading Hint \u7684\u6548\u679C\uFF0C\u56E0\u4E3A\u4F18\u5316\u5668\u7684\u7B56\u7565\u53EF\u80FD\u4F1A\u6709\u6240\u8C03\u6574\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5BF9\u4E8E\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u5EFA\u8BAE\u4F7F\u7528 EXPLAIN \u547D\u4EE4\u6765\u4ED4\u7EC6\u5206\u6790\u6267\u884C\u8BA1\u5212\uFF0C\u4EE5\u786E\u4FDD Leading Hint \u80FD\u8FBE\u5230\u9884\u671F\u7684\u6548\u679C\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return s}});var t=i(667294);let l={},c=t.createContext(l);function s(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);