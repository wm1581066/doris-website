"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["734057"],{128460:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-has-all","title":"BITMAP_HAS_ALL","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-has-all.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-has-all","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-has-all","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_HAS_ALL","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_CONTAINS","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-contains"},"next":{"title":"BITMAP_HAS_ANY","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-has-any"}}'),s=t("785893"),a=t("250065");let l={title:"BITMAP_HAS_ALL",language:"en"},r=void 0,o={},c=[{value:"bitmap_has_all",id:"bitmap_has_all",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function m(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"bitmap_has_all",children:"bitmap_has_all"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BOOLEAN BITMAP_HAS_ALL(BITMAP lhs, BITMAP rhs)"})}),"\n",(0,s.jsx)(e.p,{children:"Returns true if the first bitmap contains all the elements of the second bitmap.\nReturns true if the second bitmap contains an empty element."}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select bitmap_has_all(bitmap_from_string(\"0, 1, 2\"), bitmap_from_string(\"1, 2\"));\n+---------------------------------------------------------------------------+\n| bitmap_has_all(bitmap_from_string('0, 1, 2'), bitmap_from_string('1, 2')) |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n\nmysql> select bitmap_has_all(bitmap_empty(), bitmap_from_string(\"1, 2\"));\n+------------------------------------------------------------+\n| bitmap_has_all(bitmap_empty(), bitmap_from_string('1, 2')) |\n+------------------------------------------------------------+\n|                                                          0 |\n+------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"BITMAP_HAS_ALL,BITMAP\n"})})]})}function p(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);