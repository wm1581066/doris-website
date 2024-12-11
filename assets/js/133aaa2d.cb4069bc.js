"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["761414"],{960412:function(e,r,t){t.r(r),t.d(r,{metadata:()=>u,contentTitle:()=>i,default:()=>d,assets:()=>a,toc:()=>l,frontMatter:()=>o});var u=JSON.parse('{"id":"query/query-data/subquery","title":"Subquery","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/query/query-data/subquery.md","sourceDirName":"query/query-data","slug":"/query/query-data/subquery","permalink":"/docs/2.0/query/query-data/subquery","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Subquery","language":"en"},"sidebar":"docs","previous":{"title":"Complex Type","permalink":"/docs/2.0/query/query-data/complex-type"},"next":{"title":"Common Table Expressions","permalink":"/docs/2.0/query/query-data/cte"}}'),n=t("785893"),s=t("250065");let o={title:"Subquery",language:"en"},i=void 0,a={},l=[{value:"Subquery example in Where clause",id:"subquery-example-in-where-clause",level:2},{value:"Subquery example in Join clause",id:"subquery-example-in-join-clause",level:2}];function c(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["A subquery is a ",(0,n.jsx)(r.code,{children:"SELECT"})," statement that is nested within another ",(0,n.jsx)(r.code,{children:"SELECT"})," statement. The nested subquery is often referred to as the inner query, while the containing query is known as the outer query or the outer query block. The subquery returns data that is used as a condition by the outer query to determine which data needs to be retrieved. There is no limit to the number of nested subqueries you can create."]}),"\n",(0,n.jsx)(r.p,{children:"Like any query, a subquery can return records from a table as single-column single-record, single-column multiple-record, or multi-column multiple-record."}),"\n",(0,n.jsx)(r.h2,{id:"subquery-example-in-where-clause",children:"Subquery example in Where clause"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"SELECT * FROM sub_query_correlated_subquery1 WHERE k1 > (SELECT AVG(k1) FROM sub_query_correlated_subquery3) OR k1 < 10 order by k1, k2;\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"select * from sub_query_correlated_subquery1 where sub_query_correlated_subquery1.k1 not in (select sub_query_correlated_subquery3.k3 from sub_query_correlated_subquery3 where sub_query_correlated_subquery3.v2 = sub_query_correlated_subquery1.k2) or k1 < 10 order by k1, k2\n"})}),"\n",(0,n.jsx)(r.h2,{id:"subquery-example-in-join-clause",children:"Subquery example in Join clause"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"select t1.* from t1 left join t2 on t1.k2 = t2.k3 and t1.k1 in ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\nselect t1.* from t1 left join t2 on t1.k2 = t2.k3 and exists ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\n"})})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return o}});var u=t(667294);let n={},s=u.createContext(n);function o(e){let r=u.useContext(s);return u.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),u.createElement(s.Provider,{value:r},e.children)}}}]);