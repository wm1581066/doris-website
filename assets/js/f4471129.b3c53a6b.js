"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["268989"],{304258:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/seconds-add","title":"SECONDS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/seconds-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/seconds-add","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-add","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SECONDS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"MINUTES_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/minutes-sub"},"next":{"title":"SECONDS_DIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-diff"}}'),d=s("785893"),i=s("250065");let o={title:"SECONDS_ADD",language:"en"},a=void 0,c={},l=[{value:"seconds_add",id:"seconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"seconds_add",children:"seconds_add"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,d.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"DATETIME SECONDS_ADD(DATETIME date, INT seconds)"})}),"\n",(0,d.jsx)(n.p,{children:"ADD a specified number of seconds from a datetime or date"}),"\n",(0,d.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is DATETIME."}),"\n",(0,d.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mysql> select seconds_add(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| seconds_add('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:02:03                   |\n+---------------------------------------+\n"})}),"\n",(0,d.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"SECONDS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(667294);let d={},i=t.createContext(d);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);