"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["130310"],{194594:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/str-to-date","title":"STR_TO_DATE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/str-to-date.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/str-to-date","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/str-to-date","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"STR_TO_DATE","language":"en"},"sidebar":"docs","previous":{"title":"MAKEDATE","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/makedate"},"next":{"title":"TIME_ROUND","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/time-round"}}'),i=n("785893"),r=n("250065");let o={title:"STR_TO_DATE",language:"en"},a=void 0,d={},l=[{value:"Str_to_date",id:"str_to_date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"str_to_date",children:"Str_to_date"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"DATETIME STR TWO DATES (VARCHAR STR, VARCHAR format)"})}),"\n",(0,i.jsxs)(t.p,{children:["Convert ",(0,i.jsx)(t.code,{children:"str"})," to ",(0,i.jsx)(t.code,{children:"DATETIME"})," in the manner specified by ",(0,i.jsx)(t.code,{children:"format"}),". If ",(0,i.jsx)(t.code,{children:"str"})," cannot be parsed in the format specified by ",(0,i.jsx)(t.code,{children:"format"}),", the result is unspecified."]}),"\n",(0,i.jsxs)(t.p,{children:["All formats in ",(0,i.jsx)(t.a,{href:"./date-format",children:"date_format"})," are supported. In addition, support auto completing the remainder of date part for '%Y' and '%Y-%m'."]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"mysql> select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n\nmysql> select str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n\nmysql> select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n\nmysql> select str_to_date(\"2020-09-01\", \"%Y-%m-%d %H:%i:%s\");\n+------------------------------------------------+\n| str_to_date('2020-09-01', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------+\n| 2020-09-01 00:00:00                            |\n+------------------------------------------------+\n\nmysql> select str_to_date('2023','%Y');\n+---------------------------+\n| str_to_date('2023', '%Y') |\n+---------------------------+\n| 2023-01-01                |\n+---------------------------+\n"})}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"STR_TO_DATE,STR,TO,DATE\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(667294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);