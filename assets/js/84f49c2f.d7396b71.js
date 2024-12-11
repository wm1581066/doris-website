"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["217205"],{752791:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>i,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-pushback","title":"ARRAY_PUSHBACK","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/array-functions/array-pushback.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-pushback","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-pushback","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_PUSHBACK","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHFRONT","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-pushfront"},"next":{"title":"ARRAY_COMPACT","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-compact"}}'),s=a("785893"),t=a("250065");let l={title:"ARRAY_PUSHBACK",language:"en"},c=void 0,o={},i=[{value:"array_pushback",id:"array_pushback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"array_pushback",children:"array_pushback"}),"\n",(0,s.jsx)(n.p,{children:"array_pushback"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Array<T> array_pushback(Array<T> arr, T value)"})}),"\n",(0,s.jsx)(n.p,{children:"Add the value to the end of the array."}),"\n",(0,s.jsx)(n.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,s.jsx)(n.p,{children:"The array after adding the value."}),"\n",(0,s.jsx)(n.p,{children:"Type: Array."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select array_pushback([1, 2], 3);\n+---------------------------------+\n| array_pushback(ARRAY(1, 2), 3)  |\n+---------------------------------+\n| [1, 2, 3]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushback(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushback(`col3`, 6)  |\n+-----------+----------------------------+\n| [3, 4, 5] | [3, 4, 5, 6]               |\n| [NULL]    | [NULL, 6]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushback(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushback(`col3`, `col1`)  |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [3, 4, 5, 0]                    |\n|    1 | [NULL]    | [NULL, 1]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY,PUSHBACK,ARRAY_PUSHBACK"})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return l}});var r=a(667294);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);