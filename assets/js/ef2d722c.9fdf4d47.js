"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["333931"],{746308:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>r,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/months-add","title":"MONTHS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/months-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/months-add","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/months-add","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MONTHS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"WEEKS_SUB","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/weeks-sub"},"next":{"title":"MONTHS_DIFF","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/months-diff"}}'),i=t("785893"),d=t("250065");let o={title:"MONTHS_ADD",language:"en"},a=void 0,l={},r=[{value:"months_add",id:"months_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"months_add",children:"months_add"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME MONTHS_ADD(DATETIME date, INT months)"})}),"\n",(0,i.jsx)(n.p,{children:"Add the specified month from the date"}),"\n",(0,i.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select months_add(\"2020-01-31 02:02:02\", 1);\n+--------------------------------------+\n| months_add('2020-01-31 02:02:02', 1) |\n+--------------------------------------+\n| 2020-02-29 02:02:02                  |\n+--------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MONTHS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let i={},d=s.createContext(i);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);