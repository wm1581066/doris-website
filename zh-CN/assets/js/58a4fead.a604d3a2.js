"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["450684"],{513551:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>_,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-join","title":"ARRAY_JOIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-join.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-join","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-join","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_JOIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_UNION","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-union"},"next":{"title":"ARRAY_WITH_CONSTANT","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-with-constant"}}'),l=r("785893"),t=r("250065");let s={title:"ARRAY_JOIN",language:"zh-CN"},i=void 0,_={},o=[{value:"array_join",id:"array_join",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"array_join",children:"array_join"}),"\n",(0,l.jsx)(e.p,{children:"array_join"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"VARCHAR array_join(ARRAY<T> arr, VARCHAR sep[, VARCHAR null_replace])"})}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E\u5206\u9694\u7B26(sep)\u548C\u66FF\u6362NULL\u7684\u5B57\u7B26\u4E32(null_replace), \u5C06\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u7EC4\u5408\u6210\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\u3002\n\u82E5sep\u4E3ANULL\uFF0C\u5219\u8FD4\u56DE\u503C\u4E3ANULL\u3002\n\u82E5null_replace\u4E3ANULL\uFF0C\u5219\u8FD4\u56DE\u503C\u4E5F\u4E3ANULL\u3002\n\u82E5sep\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5219\u4E0D\u5E94\u7528\u4EFB\u4F55\u5206\u9694\u7B26\u3002\n\u82E5null_replace\u4E3A\u7A7A\u5B57\u7B26\u4E32\u6216\u8005\u4E0D\u6307\u5B9A\uFF0C\u5219\u76F4\u63A5\u4E22\u5F03\u6570\u7EC4\u4E2D\u7684NULL\u5143\u7D20\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test order by k1;\n+------+-----------------------------+------------------------------------+\n| k1   | k2                          | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------+------------------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                          |\n|  2   | [6, 7, 8]                   | 6_7_8                              |\n|  3   | []                          |                                    |\n|  4   | NULL                        | NULL                               |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1                  |\n|  6   | [1, 2, 3, NULL]             | 1_2_3_null                         |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6_null_null                    |\n+------+-----------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test01 order by k1;\n+------+-----------------------------------+------------------------------------+\n| k1   | k2                                | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------------+------------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                            |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                            |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | null_a_null_b_null_c               |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_null_                          |\n|  5   | [' ', NULL, 'f', 'g']             |  _null_f_g                         |\n+------+-----------------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test order by k1;\n+------+-----------------------------+----------------------------+\n| k1   | k2                          | array_join(`k2`, '_')      |\n+------+-----------------------------+----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                  |\n|  2   | [6, 7, 8]                   | 6_7_8                      |\n|  3   | []                          |                            |\n|  4   | NULL                        | NULL                       |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1          |\n|  6   | [1, 2, 3, NULL]             | 1_2_3                      |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6                      |\n+------+-----------------------------+----------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test01 order by k1;\n+------+-----------------------------------+----------------------------+\n| k1   | k2                                | array_join(`k2`, '_')      |\n+------+-----------------------------------+----------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                    |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                    |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | a_b_c                      |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_                       |\n|  5   | [' ', NULL, 'f', 'g']             |  _f_g                      |\n+------+-----------------------------------+----------------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"ARRAY, JOIN, ARRAY_JOIN"})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return s}});var a=r(667294);let l={},t=a.createContext(l);function s(n){let e=a.useContext(t);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);