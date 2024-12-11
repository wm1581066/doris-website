"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["743149"],{165759:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>u,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/struct-functions/struct","title":"STRUCT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/struct-functions/struct.md","sourceDirName":"sql-manual/sql-functions/struct-functions","slug":"/sql-manual/sql-functions/struct-functions/struct","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/struct-functions/struct","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"STRUCT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP_REPLACE_ONE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one"},"next":{"title":"NAMED_STRUCT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/struct-functions/named-struct"}}'),c=e("785893"),r=e("250065");let l={title:"STRUCT",language:"zh-CN"},i=void 0,u={},o=[{value:"struct()",id:"struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"struct",children:"struct()"}),"\n",(0,c.jsx)(t.p,{children:"struct()"}),"\n",(0,c.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:"STRUCT<T1, T2, T3, ...> struct(T1, T2, T3, ...)"})}),"\n",(0,c.jsx)(t.p,{children:"\u6839\u636E\u7ED9\u5B9A\u7684\u503C\u6784\u9020\u5E76\u8FD4\u56DEstruct\uFF0C\u53C2\u6570\u53EF\u4EE5\u662F\u591A\u5217\u6216\u5E38\u91CF"}),"\n",(0,c.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"mysql> select struct(1, 'a', \"abc\");\n+-----------------------+\n| struct(1, 'a', 'abc') |\n+-----------------------+\n| {1, 'a', 'abc'}       |\n+-----------------------+\n1 row in set (0.03 sec)\n\nmysql> select struct(null, 1, null);\n+-----------------------+\n| struct(NULL, 1, NULL) |\n+-----------------------+\n| {NULL, 1, NULL}       |\n+-----------------------+\n1 row in set (0.02 sec)\n\nmysql> select struct(cast('2023-03-16' as datetime));\n+----------------------------------------+\n| struct(CAST('2023-03-16' AS DATETIME)) |\n+----------------------------------------+\n| {2023-03-16 00:00:00}                  |\n+----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select struct(k1, k2, null) from test_tb;\n+--------------------------+\n| struct(`k1`, `k2`, NULL) |\n+--------------------------+\n| {1, 'a', NULL}           |\n+--------------------------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,c.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(t.p,{children:"STRUCT, CONSTRUCTOR"})]})}function d(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return i},a:function(){return l}});var s=e(667294);let c={},r=s.createContext(c);function l(n){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);