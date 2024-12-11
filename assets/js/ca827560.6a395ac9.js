"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["85426"],{327540:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","title":"Reordering Join with Leading Hint","description":"\x3c!--","source":"@site/docs/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Reordering Join with Leading Hint","language":"en"},"sidebar":"docs","previous":{"title":"Controlling Hints with CBO Rule","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule"},"next":{"title":"Accelerating Queries with SQL Cache","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/accelerating-queries-with-sql-cache"}}'),r=i("785893"),s=i("250065");let l={title:"Reordering Join with Leading Hint",language:"en"},c=void 0,a={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Examples",id:"examples",level:2},{value:"Tuning Cases",id:"tuning-cases",level:2},{value:"Combining with ORDERED Hint",id:"combining-with-ordered-hint",level:2},{value:"Summary",id:"summary",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Leading Hint is a powerful query optimization technique that allows users to guide the Doris optimizer in determining the table join order in a query plan. Proper use of Leading Hint can significantly enhance the performance of complex queries."}),"\n",(0,r.jsx)(n.p,{children:"This documentation will provide a detailed introduction on how to use Leading Hint in Doris to control the order of joins."}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(n.p,{children:["For detailed usage instructions, please refer to the ",(0,r.jsx)(n.a,{href:"../../../query-acceleration/tuning/join-hint",children:"Hint"})," documentation."]})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Here is a query example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,r.jsx)(n.p,{children:"By default, Doris may choose t1 as the driving table. If we want to swap the join order to make t2 the driving table, we can use Leading Hint:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ LEADING(t2 t1) */ * FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,r.jsx)(n.p,{children:"To verify whether the Hint is effective, you can use the EXPLAIN command to view the query plan and validate:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT /*+ LEADING(t2 t1) */ * FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,r.jsx)(n.p,{children:'In the result of EXPLAIN, there will be a "Hint log" section, showing the following:'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Used: Indicates successfully applied ",(0,r.jsx)(n.code,{children:"hint"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Unused: Indicates unused ",(0,r.jsx)(n.code,{children:"hint"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["SyntaxError: Indicates ",(0,r.jsx)(n.code,{children:"hint"})," with syntax errors"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tuning-cases",children:"Tuning Cases"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Left-Deep Tree (Default Behavior)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ LEADING(t1 t2 t3) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2 JOIN t3 ON t2.c2 = t3.c3;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tree Structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"      join  \n     /    \\  \n   join    t3  \n  /    \\  \nt1      t2\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Right-Deep Tree"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ LEADING(t1 {t2 t3}) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2 JOIN t3 ON t2.c2 = t3.c3;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tree Structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"  join  \n /    \\  \nt1    join  \n     /    \\  \n    t2     t3\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. Bushy Tree"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ LEADING({t1 t2} {t3 t4}) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2   \nJOIN t3 ON t2.c2 = t3.c3   \nJOIN t4 ON t3.c3 = t4.c4;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tree Structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"      join  \n      /    \\  \n   join    join  \n  /    \\  /    \\  \n t1    t2 t3    t4\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. Zig-Zag Tree"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ LEADING(t1 {t2 t3} t4) */ *   \nFROM t1 JOIN t2 ON t1.c1 = t2.c2   \nJOIN t3 ON t2.c2 = t3.c3   \nJOIN t4 ON t3.c3 = t4.c4;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tree Structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"    join  \n   /    \\  \n join    t4  \n/    \\  \nt1   join  \n    /    \\  \n   t2     t3\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"5. Special Case"})}),"\n",(0,r.jsx)(n.p,{children:"For non-inner joins (such as Outer Join, Semi/Anti Join), Leading Hint will automatically derive the type of each join based on the original SQL semantics. If the specified join order is incompatible with the original SQL semantics, the Hint will be ignored."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"6. Views and Subqueries"})}),"\n",(0,r.jsx)(n.p,{children:"Aliases of views or subqueries can be specified as a complete subtree."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ LEADING(alias t1) */ COUNT(*)   \nFROM t1 JOIN (SELECT c2 FROM t2 JOIN t3 ON t2.c2 = t3.c3) AS alias   \nON t1.c1 = alias.c2;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Tree Structure: In this example, ",(0,r.jsx)(n.code,{children:"alias"})," is treated as a whole, and its internal join order is determined by the subquery itself."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"       join  \n      /    \\  \n   alias    t1  \n   /    \\  \n  t2     t3\n"})}),"\n",(0,r.jsx)(n.h2,{id:"combining-with-ordered-hint",children:"Combining with ORDERED Hint"}),"\n",(0,r.jsx)(n.p,{children:"When both LEADING and ORDERED Hints are used, the ORDERED Hint has higher priority."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT /*+ ORDERED */ t1.c1   \nFROM t2 JOIN t1 ON t1.c1 = t2.c2 JOIN t3 ON t2.c2 = t3.c3;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tree Structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"      join  \n     /    \\  \n   join    t3  \n  /    \\  \nt2      t1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here, the ORDERED Hint forces the join order to strictly follow the order of table appearance in the FROM clause. Therefore, in this case, the ORDERED Hint will take effect, while the LEADING hint will be ignored."}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"By using Leading Hint appropriately, we can more effectively control the join order in Doris, thereby optimizing query performance. However, it should be remembered that this is an advanced feature and should be used cautiously with a thorough understanding of query characteristics and data distribution."}),"\n",(0,r.jsx)(n.p,{children:"When using it, please note the following points:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Excessive dependence on Hints may lead to suboptimal execution plans. Therefore, please ensure a full understanding of query and data characteristics before use."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When upgrading Doris versions, the effect of Leading Hint should be re-evaluated, as optimizer strategies may be adjusted."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For complex queries, it is recommended to use the EXPLAIN command to carefully analyze the execution plan to ensure that Leading Hint can achieve the expected effect."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var t=i(667294);let r={},s=t.createContext(r);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);