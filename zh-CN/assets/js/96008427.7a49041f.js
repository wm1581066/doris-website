"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["30511"],{951061:function(n,e,s){s.r(e),s.d(e,{metadata:()=>c,contentTitle:()=>l,default:()=>d,assets:()=>r,toc:()=>a,frontMatter:()=>o});var c=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/acos","title":"ACOS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/acos.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/acos","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/acos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ACOS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ASIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/asin"},"next":{"title":"ATAN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/atan"}}'),t=s("785893"),i=s("250065");let o={title:"ACOS",language:"zh-CN"},l=void 0,r={},a=[{value:"acos",id:"acos",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"acos",children:"acos"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"DOUBLE acos(DOUBLE x)"}),"\n\u8FD4\u56DE",(0,t.jsx)(e.code,{children:"x"}),"\u7684\u53CD\u4F59\u5F26\u503C\uFF0C\u82E5 ",(0,t.jsx)(e.code,{children:"x"}),"\u4E0D\u5728",(0,t.jsx)(e.code,{children:"-1"}),"\u5230 ",(0,t.jsx)(e.code,{children:"1"}),"\u7684\u8303\u56F4\u4E4B\u5185\uFF0C\u5219\u8FD4\u56DE ",(0,t.jsx)(e.code,{children:"nan"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select acos(1);\n+-----------+\n| acos(1.0) |\n+-----------+\n|         0 |\n+-----------+\nmysql> select acos(0);\n+--------------------+\n| acos(0.0)          |\n+--------------------+\n| 1.5707963267948966 |\n+--------------------+\nmysql> select acos(-2);\n+------------+\n| acos(-2.0) |\n+------------+\n|        nan |\n+------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"ACOS\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return o}});var c=s(667294);let t={},i=c.createContext(t);function o(n){let e=c.useContext(i);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);