"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["898725"],{640189:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-pushback","title":"ARRAY_PUSHBACK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-pushback.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-pushback","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushback","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_PUSHBACK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHFRONT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushfront"},"next":{"title":"ARRAY_COMPACY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-compact"}}'),s=a("785893"),l=a("250065");let t={title:"ARRAY_PUSHBACK",language:"zh-CN"},c=void 0,i={},o=[{value:"array_pushback",id:"array_pushback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"array_pushback",children:"array_pushback"}),"\n",(0,s.jsx)(e.p,{children:"array_pushback"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"Array<T> array_pushback(Array<T> arr, T value)"})}),"\n",(0,s.jsx)(e.p,{children:"\u5C06 value \u6DFB\u52A0\u5230\u6570\u7EC4\u7684\u5C3E\u90E8\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u6DFB\u52A0 value \u540E\u7684\u6570\u7EC4"}),"\n",(0,s.jsx)(e.p,{children:"\u7C7B\u578B\uFF1AArray."}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select array_pushback([1, 2], 3);\n+---------------------------------+\n| array_pushback(ARRAY(1, 2), 3)  |\n+---------------------------------+\n| [1, 2, 3]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushback(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushback(`col3`, 6)  |\n+-----------+----------------------------+\n| [3, 4, 5] | [3, 4, 5, 6]               |\n| [NULL]    | [NULL, 6]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushback(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushback(`col3`, `col1`)  |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [3, 4, 5, 0]                    |\n|    1 | [NULL]    | [NULL, 1]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.p,{children:"ARRAY,PUSHBACK,ARRAY_PUSHBACK"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return c},a:function(){return t}});var r=a(667294);let s={},l=r.createContext(s);function t(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);