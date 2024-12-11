"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["297687"],{30410:function(t,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>l,assets:()=>o,toc:()=>p,frontMatter:()=>m});var a=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-and","title":"BITMAP_AND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-and.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-and","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-and","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_AND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_OR","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-or"},"next":{"title":"BITMAP_UNION","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-union"}}'),e=i("785893"),s=i("250065");let m={title:"BITMAP_AND",language:"zh-CN"},r=void 0,o={},p=[{value:"bitmap_and",id:"bitmap_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function _(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"bitmap_and",children:"bitmap_and"}),"\n",(0,e.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,e.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.code,{children:"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs)"})}),"\n",(0,e.jsx)(n.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u8F93\u5165bitmap\u7684\u4EA4\u96C6\uFF0C\u8FD4\u56DE\u65B0\u7684bitmap."}),"\n",(0,e.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"mysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(2)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(2))) |\n+----------------------------------------------------------+\n|                                                          |\n+----------------------------------------------------------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nMySQL> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1))) |\n+----------------------------------------------------------+\n| 1                                                        |\n+----------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+-----------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------------------+\n| 1,2                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                       |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                        |\n+-----------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,e.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"BITMAP_AND,BITMAP\n"})})]})}function l(t={}){let{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(_,{...t})}):_(t)}},250065:function(t,n,i){i.d(n,{Z:function(){return r},a:function(){return m}});var a=i(667294);let e={},s=a.createContext(e);function m(t){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:m(t.components),a.createElement(s.Provider,{value:n},t.children)}}}]);