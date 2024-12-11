"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["49025"],{409845:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>a,assets:()=>o,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/degrees","title":"DEGREES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/degrees.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/degrees","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/degrees","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DEGREES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"POW","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/pow"},"next":{"title":"RADIANS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/radians"}}'),i=s("785893"),r=s("250065");let l={title:"DEGREES",language:"zh-CN"},c=void 0,o={},d=[{value:"degrees",id:"degrees",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"degrees",children:"degrees"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DOUBLE degrees(DOUBLE x)"}),"\n\u8FD4\u56DE",(0,i.jsx)(n.code,{children:"x"}),"\u7684\u5EA6, \u4ECE\u5F27\u5EA6\u8F6C\u6362\u4E3A\u5EA6."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select degrees(0);\n+--------------+\n| degrees(0.0) |\n+--------------+\n|            0 |\n+--------------+\nmysql> select degrees(2);\n+--------------------+\n| degrees(2.0)       |\n+--------------------+\n| 114.59155902616465 |\n+--------------------+\nmysql> select degrees(Pi());\n+---------------+\n| degrees(pi()) |\n+---------------+\n|           180 |\n+---------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DEGREES\n"})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);