"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["548090"],{22316:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>x,assets:()=>o,toc:()=>d,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-first-index","title":"ARRAY_FIRST_INDEX","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/array-functions/array-first-index.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-first-index","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-first-index","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_FIRST_INDEX","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_EXISTS","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-exists"},"next":{"title":"ARRAY_LAST_INDEX","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-last-index"}}'),t=r("785893"),s=r("250065");let i={title:"ARRAY_FIRST_INDEX",language:"en"},l=void 0,o={},d=[{value:"array_first_index",id:"array_first_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_first_index",children:"array_first_index"}),"\n",(0,t.jsx)(e.p,{children:"array_first_index"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"ARRAY<T> array_first_index(lambda, ARRAY<T> array1, ...)"})}),"\n",(0,t.jsxs)(e.p,{children:["Use an lambda expression as an input parameter to perform corresponding expression calculations on the internal data of other input ARRAY parameters. Returns the first index such that the return value of ",(0,t.jsx)(e.code,{children:"lambda(array1[i], ...)"})," is not 0. Return 0 if such index is not found."]}),"\n",(0,t.jsx)(e.p,{children:"There are one or more parameters input in the lambda expression, and the number of elements of all input arrays must be the same. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"array_first_index(x->x>1, array1);\narray_first_index(x->(x%2 = 0), array1);\narray_first_index(x->(abs(x)-1), array1);\narray_first_index((x,y)->(x = y), array1, array2);\n"})}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select array_first_index(x->x+1>3, [2, 3, 4]);\n+-------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 2 |\n+-------------------------------------------------------------------+\n\nmysql> select array_first_index(x -> x is null, [null, 1, 2]);\n+----------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n\nmysql> select array_first_index(x->power(x,2)>10, [1, 2, 3, 4]);\n+---------------------------------------------------------------------------------+\n| array_first_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n\nmysql> select col2, col3, array_first_index((x,y)->x>y, col2, col3) from array_test;\n+--------------+--------------+---------------------------------------------------------------------+\n| col2         | col3         | array_first_index(array_map([x, y] -> x(0) > y(1), `col2`, `col3`)) |\n+--------------+--------------+---------------------------------------------------------------------+\n| [1, 2, 3]    | [3, 4, 5]    |                                                                   0 |\n| [1, NULL, 2] | [NULL, 3, 1] |                                                                   3 |\n| [1, 2, 3]    | [9, 8, 7]    |                                                                   0 |\n| NULL         | NULL         |                                                                   0 |\n+--------------+--------------+---------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,FIRST_INDEX,ARRAY_FIRST_INDEX"})]})}function x(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);