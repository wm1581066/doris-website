"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["332124"],{853297:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>m,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/from_unixtime","title":"from_unixtime","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/from_unixtime.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/from_unixtime","permalink":"/docs/1.2/sql-manual/sql-functions/date-time-functions/from_unixtime","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"from_unixtime","language":"en"},"sidebar":"docs","previous":{"title":"to_monday","permalink":"/docs/1.2/sql-manual/sql-functions/date-time-functions/to_monday"},"next":{"title":"unix_timestamp","permalink":"/docs/1.2/sql-manual/sql-functions/date-time-functions/unix_timestamp"}}'),s=t("785893"),r=t("250065");let o={title:"from_unixtime",language:"en"},l=void 0,m={},d=[{value:"from_unixtime",id:"from_unixtime",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"from_unixtime",children:"from_unixtime"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DATETIME FROM UNIXTIME (INT unix timestamp [, VARCHAR string format]"})}),"\n",(0,s.jsxs)(n.p,{children:["Convert the UNIX timestamp to the corresponding time format of bits, and the format returned is specified by ",(0,s.jsx)(n.code,{children:"string_format"})]}),"\n",(0,s.jsx)(n.p,{children:"Input is an integer and return is a string type"}),"\n",(0,s.jsxs)(n.p,{children:["Support ",(0,s.jsx)(n.code,{children:"date_format"}),"'s format, and default is ",(0,s.jsx)(n.code,{children:"%Y-%m-%d %H:%i:%s"})]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n|From unixtime (1196440219,'%Y-%m-%d %H:%i:%s')    |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"FROM_UNIXTIME,FROM,UNIXTIME\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);