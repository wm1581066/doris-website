"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["883002"],{967118:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>i,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-concat","title":"ARRAY_CONCAT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-concat.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-concat","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-concat","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_CONCAT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_COMPACT","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-compact"},"next":{"title":"ARRAY_ZIP","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-zip"}}'),t=a("785893"),c=a("250065");let s={title:"ARRAY_CONCAT",language:"en"},l=void 0,o={},i=[{value:"array_concat",id:"array_concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_concat",children:"array_concat"}),"\n",(0,t.jsx)(e.p,{children:"array_concat"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.p,{children:"Concat all arrays passed in the arguments"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"Array<T> array_concat(Array<T>, ...)"})}),"\n",(0,t.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,t.jsx)(e.p,{children:"The concated array."}),"\n",(0,t.jsx)(e.p,{children:"Type: Array."}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select array_concat([1, 2], [7, 8], [5, 6]);\n+-----------------------------------------------------+\n| array_concat(ARRAY(1, 2), ARRAY(7, 8), ARRAY(5, 6)) |\n+-----------------------------------------------------+\n| [1, 2, 7, 8, 5, 6]                                  |\n+-----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select col2, col3, array_concat(col2, col3) from array_test;\n+--------------+-----------+------------------------------+\n| col2         | col3      | array_concat(`col2`, `col3`) |\n+--------------+-----------+------------------------------+\n| [1, 2, 3]    | [3, 4, 5] | [1, 2, 3, 3, 4, 5]           |\n| [1, NULL, 2] | [NULL]    | [1, NULL, 2, NULL]           |\n| [1, 2, 3]    | NULL      | NULL                         |\n| []           | []        | []                           |\n+--------------+-----------+------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,CONCAT,ARRAY_CONCAT"})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return s}});var r=a(667294);let t={},c=r.createContext(t);function s(n){let e=r.useContext(c);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);