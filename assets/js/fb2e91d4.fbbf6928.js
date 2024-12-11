"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644435"],{711624:function(n,e,r){r.r(e),r.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-position","title":"ARRAY_POSITION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/array-functions/array-position.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-position","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-position","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_POSITION","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_REVERSE_SPLIT","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-reverse-split"},"next":{"title":"ARRAY_CONTAINS","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-contains"}}'),a=r("785893"),t=r("250065");let s={title:"ARRAY_POSITION",language:"en"},o=void 0,l={},c=[{value:"array_position",id:"array_position",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"array_position",children:"array_position"}),"\n",(0,a.jsx)(e.p,{children:"array_position"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"BIGINT array_position(ARRAY<T> arr, T value)"})}),"\n",(0,a.jsxs)(e.p,{children:["Returns a position/index of first occurrence of the ",(0,a.jsx)(e.code,{children:"value"})," in the given array."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"position - value position in array (starts with 1);\n0        - if value does not present in the array;\nNULL     - when array is NULL.\n"})}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> SELECT id,c_array,array_position(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_position(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            5 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_position([1, null], null);\n+--------------------------------------+\n| array_position(ARRAY(1, NULL), NULL) |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"ARRAY,POSITION,ARRAY_POSITION"})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return s}});var i=r(667294);let a={},t=i.createContext(a);function s(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);