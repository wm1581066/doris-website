"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["565136"],{671055:function(n,e,a){a.r(e),a.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/array-agg","title":"ARRAY_AGG","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/array-agg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/array-agg","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/array-agg","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_AGG","language":"en"},"sidebar":"docs","previous":{"title":"ANY_VALUE","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/any-value"},"next":{"title":"FOREACH","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/foreach"}}'),r=a("785893"),s=a("250065");let l={title:"ARRAY_AGG",language:"en"},i=void 0,o={},c=[{value:"ARRAY_AGG",id:"array_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"array_agg",children:"ARRAY_AGG"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"ARRAY_AGG(col)"})}),"\n",(0,r.jsx)(e.p,{children:"Concatenation of values in a column (including the null value) into an array can be used for multiple rows to one row (row to column)."}),"\n",(0,r.jsx)(e.h3,{id:"notice",children:"notice"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"The order of the elements in an array is not guaranteed."}),"\n",(0,r.jsx)(e.li,{children:"Returns the array generated by the transformation. The element type in the array is the same as the col type."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'mysql> select * from test_doris_array_agg;\n\n+------+------+\n\n| c1   | c2   |\n\n+------+------+\n\n|    1 | a    |\n\n|    1 | b    |\n\n|    2 | c    |\n\n|    2 | NULL |\n\n|    3 | NULL |\n\n+------+------+\n\nmysql> select c1, array_agg(c2) from test_doris_array_agg group by c1;\n\n+------+-----------------+\n\n| c1   | array_agg(`c2`) |\n\n+------+-----------------+\n\n|    1 | ["a","b"]       |\n\n|    2 | [NULL,"c"]      |\n\n|    3 | [NULL]          |\n\n+------+-----------------+\n'})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.p,{children:"ARRAY_AGG"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return i},a:function(){return l}});var t=a(667294);let r={},s=t.createContext(r);function l(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);