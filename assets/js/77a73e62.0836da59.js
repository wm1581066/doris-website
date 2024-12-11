"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["358092"],{628902:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-range","title":"ARRAY_RANGE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-range.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-range","permalink":"/docs/sql-manual/sql-functions/array-functions/array-range","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_RANGE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_INTERSECT","permalink":"/docs/sql-manual/sql-functions/array-functions/array-intersect"},"next":{"title":"ARRAY_DISTINCT","permalink":"/docs/sql-manual/sql-functions/array-functions/array-distinct"}}'),r=a("785893"),s=a("250065");let i={title:"ARRAY_RANGE",language:"en"},l=void 0,d={},o=[{value:"array_range",id:"array_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"array_range",children:"array_range"}),"\n",(0,r.jsx)(n.p,{children:"array_range"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ARRAY<Int> array_range(Int end)\nARRAY<Int> array_range(Int start, Int end)\nARRAY<Int> array_range(Int start, Int end, Int step)\nARRAY<Datetime> array_range(Datetime start_datetime, Datetime end_datetime)\nARRAY<Datetime> array_range(Datetime start_datetime, Datetime end_datetime, INTERVAL Int interval_step UNIT)\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To generate array of int:\nThe parameters are all positive integers.\nstart default value is 0, and step default value is 1.\nReturn the array which numbers from start to end - 1 by step."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To generate array of datetime:\nAt least taking two parameters.\nThe first two parameters are all datetimev2, the third is positive integer.\nIf the third part is missing, ",(0,r.jsx)(n.code,{children:"INTERVAL 1 DAY"})," will be default value.\nUNIT supports YEAR/MONTH/WEEK/DAY/HOUR/MINUTE/SECOND.\nReturn the array of datetimev2 between start_datetime and closest to end_datetime by interval_step UNIT."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"notice",children:"notice"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"if the 3rd parameter step/interval_step is negative or zero, the function will return NULL"})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select array_range(10);\n+--------------------------------+\n| array_range(10)                |\n+--------------------------------+\n| [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |\n+--------------------------------+\n\nmysql> select array_range(10,20);\n+------------------------------------------+\n| array_range(10, 20)                      |\n+------------------------------------------+\n| [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] |\n+------------------------------------------+\n\nmysql> select array_range(0,20,2);\n+-------------------------------------+\n| array_range(0, 20, 2)               |\n+-------------------------------------+\n| [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] |\n+-------------------------------------+\n\nmysql> select array_range(cast('2022-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0))) AS array_range_default;\n+------------------------------------------------+\n| array_range_default                            |\n+------------------------------------------------+\n| [\"2022-05-15 12:00:00\", \"2022-05-16 12:00:00\"] |\n+------------------------------------------------+\n\nmysql> select array_range(cast('2019-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0)), interval 2 year) as array_range_2_year;\n+------------------------------------------------+\n| array_range_2_year                             |\n+------------------------------------------------+\n| [\"2019-05-15 12:00:00\", \"2021-05-15 12:00:00\"] |\n+------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"ARRAY, RANGE, ARRAY_RANGE"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var t=a(667294);let r={},s=t.createContext(r);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);