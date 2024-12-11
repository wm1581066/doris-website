"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["645011"],{226008:function(e,n,o){o.r(n),o.d(n,{metadata:()=>l,contentTitle:()=>t,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/floor","title":"FLOOR","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/numeric-functions/floor.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/floor","permalink":"/docs/3.0/sql-manual/sql-functions/numeric-functions/floor","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FLOOR","language":"en"},"sidebar":"docs","previous":{"title":"CEIL","permalink":"/docs/3.0/sql-manual/sql-functions/numeric-functions/ceil"},"next":{"title":"PMOD","permalink":"/docs/3.0/sql-manual/sql-functions/numeric-functions/pmod"}}'),r=o("785893"),s=o("250065");let i={title:"FLOOR",language:"en"},t=void 0,c={},d=[{value:"floor",id:"floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"floor",children:"floor"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"T floor(T x[, d])"})}),"\n",(0,r.jsxs)(n.p,{children:["If not specified ",(0,r.jsx)(n.code,{children:"d"}),": returns the largest integer value less than or equal to ",(0,r.jsx)(n.code,{children:"x"}),", which is ",(0,r.jsx)(n.strong,{children:"the most common usage"}),".\nOtherwise, returns the largest round number that is less than or equal to ",(0,r.jsx)(n.code,{children:"x"})," and flowing the rules:"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"d"})," is specified as literal:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"d"})," = 0: just like without ",(0,r.jsx)(n.code,{children:"d"}),"\n",(0,r.jsx)(n.code,{children:"d"})," > 0 or ",(0,r.jsx)(n.code,{children:"d"})," < 0: the round number would be a multiple of ",(0,r.jsx)(n.code,{children:"1/(10^d)"}),", or the nearest number of the appropriate data type if ",(0,r.jsx)(n.code,{children:"1/(10^d)"})," isn't exact."]}),"\n",(0,r.jsxs)(n.p,{children:["Else if ",(0,r.jsx)(n.code,{children:"d"})," is a column, and ",(0,r.jsx)(n.code,{children:"x"})," has Decimal type, scale of result Decimal will always be same with input Decimal."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Another alias for this function is ",(0,r.jsx)(n.code,{children:"dfloor"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select floor(1);\n+------------+\n| floor(1.0) |\n+------------+\n|          1 |\n+------------+\nmysql> select floor(2.4);\n+------------+\n| floor(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select floor(-10.3);\n+--------------+\n| floor(-10.3) |\n+--------------+\n|          -11 |\n+--------------+\nmysql> select floor(123.45, 1), floor(123.45), floor(123.45, 0), floor(123.45, -1);\n+------------------+---------------+------------------+-------------------+\n| floor(123.45, 1) | floor(123.45) | floor(123.45, 0) | floor(123.45, -1) |\n+------------------+---------------+------------------+-------------------+\n|            123.4 |           123 |              123 |               120 |\n+------------------+---------------+------------------+-------------------+\nmysql> SELECT number\n    -> , floor(number * 2.5, number - 1) AS f_decimal_column\n    -> , floor(number * 2.5, 0) AS f_decimal_literal\n    -> , floor(cast(number * 2.5 AS DOUBLE), number - 1) AS f_double_column\n    -> , floor(cast(number * 2.5 AS DOUBLE), 0) AS f_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+------------------+-------------------+-----------------+------------------+\n| number | f_decimal_column | f_decimal_literal | f_double_column | f_double_literal |\n+--------+------------------+-------------------+-----------------+------------------+\n|      1 |              2.0 |                 2 |               2 |                2 |\n+--------+------------------+-------------------+-----------------+------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FLOOR, DFLOOR\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return i}});var l=o(667294);let r={},s=l.createContext(r);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);