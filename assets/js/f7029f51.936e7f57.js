"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["141494"],{66606:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>o,default:()=>d,assets:()=>i,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-pushfront","title":"ARRAY_PUSHFRONT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-pushfront.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-pushfront","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-pushfront","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_PUSHFRONT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_POPFRONT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-popfront"},"next":{"title":"ARRAY_PUSHBACK","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-pushback"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_PUSHFRONT",language:"en"},o=void 0,i={},c=[{value:"array_pushfront",id:"array_pushfront",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_pushfront",children:"array_pushfront"}),"\n",(0,t.jsx)(e.p,{children:"array_pushfront"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"Array<T> array_pushfront(Array<T> arr, T value)"})}),"\n",(0,t.jsx)(e.p,{children:"Add the value to the beginning of the array."}),"\n",(0,t.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,t.jsx)(e.p,{children:"The array after adding the value."}),"\n",(0,t.jsx)(e.p,{children:"Type: Array."}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select array_pushfront([1, 2], 3);\n+---------------------------------+\n| array_pushfront(ARRAY(1, 2), 3) |\n+---------------------------------+\n| [3, 1, 2]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushfront(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushfront(`col3`, 6) |\n+-----------+----------------------------+\n| [3, 4, 5] | [6, 3, 4, 5]               |\n| [NULL]    | [6, NULL]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushfront(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushfront(`col3`, `col1`) |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [0, 3, 4, 5]                    |\n|    1 | [NULL]    | [1, NULL]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,PUSHFRONT,ARRAY_PUSHFRONT"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);