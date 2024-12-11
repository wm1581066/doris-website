"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["620555"],{328830:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-with-constant","title":"ARRAY_WITH_CONSTANT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-with-constant.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-with-constant","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-with-constant","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_WITH_CONSTANT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_JOIN","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-join"},"next":{"title":"ARRAY_ENUMERATE","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-enumerate"}}'),r=t("785893"),s=t("250065");let l={title:"ARRAY_WITH_CONSTANT",language:"en"},i=void 0,o={},c=[{value:"array_with_constant",id:"array_with_constant",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"array_with_constant",children:"array_with_constant"}),"\n",(0,r.jsx)(e.p,{children:"array_with_constant"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ARRAY<T> array_with_constant(n, T)\nARRAY<T> array_repeat(T, n)\n"})}),"\n",(0,r.jsx)(e.p,{children:"get array of constants with n length, array_repeat has the same function as array_with_constant and is used to be compatible with the hive syntax format"}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select array_with_constant(2, \"hello\"), array_repeat(\"hello\", 2);\n+---------------------------------+--------------------------+\n| array_with_constant(2, 'hello') | array_repeat('hello', 2) |\n+---------------------------------+--------------------------+\n| ['hello', 'hello']              | ['hello', 'hello']       |\n+---------------------------------+--------------------------+\n1 row in set (0.04 sec)\n\nmysql> select array_with_constant(3, 12345), array_repeat(12345, 3);\n+-------------------------------+------------------------+\n| array_with_constant(3, 12345) | array_repeat(12345, 3) | \n+-------------------------------+------------------------+\n| [12345, 12345, 12345]         | [12345, 12345, 12345]  |\n+-------------------------------+------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(3, null), array_repeat(null, 3);\n+------------------------------+-----------------------+\n| array_with_constant(3, NULL) | array_repeat(NULL, 3) |\n+------------------------------+-----------------------+\n| [NULL, NULL, NULL]           |  [NULL, NULL, NULL]   |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(null, 3), array_repeat(3, null);\n+------------------------------+-----------------------+\n| array_with_constant(NULL, 3) | array_repeat(3, NULL) |\n+------------------------------+-----------------------+\n| []                           | []                    |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.p,{children:"ARRAY,WITH_CONSTANT,ARRAY_WITH_CONSTANT,ARRAY_REPEAT"})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var a=t(667294);let r={},s=a.createContext(r);function l(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);