"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["737713"],{317012:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>f,assets:()=>d,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/frontends","title":"FRONTENDS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-valued-functions/frontends.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/frontends","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/frontends","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"FRONTENDS","language":"en"},"sidebar":"docs","previous":{"title":"BACKENDS","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/backends"},"next":{"title":"FRONTENDS_DISKS","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/frontends-disks"}}'),o=s("785893"),r=s("250065");let l={title:"FRONTENDS",language:"en"},i=void 0,d={},a=[{value:"<code>frontends</code>",id:"frontends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"frontends",children:(0,o.jsx)(n.code,{children:"frontends"})}),"\n",(0,o.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,o.jsx)(n.p,{children:"frontends"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsxs)(n.p,{children:["Table-Value-Function, generate a temporary table named ",(0,o.jsx)(n.code,{children:"frontends"}),". This tvf is used to view the information of BE nodes in the doris cluster."]}),"\n",(0,o.jsxs)(n.p,{children:["This function is used in ",(0,o.jsx)(n.code,{children:"FROM"})," clauses."]}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"frontends()"})}),"\n",(0,o.jsxs)(n.p,{children:["The table schema of ",(0,o.jsx)(n.code,{children:"frontends()"})," tvf\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> desc function frontends();\n+-------------------+------+------+-------+---------+-------+\n| Field             | Type | Null | Key   | Default | Extra |\n+-------------------+------+------+-------+---------+-------+\n| Name              | TEXT | No   | false | NULL    | NONE  |\n| Host              | TEXT | No   | false | NULL    | NONE  |\n| EditLogPort       | TEXT | No   | false | NULL    | NONE  |\n| HttpPort          | TEXT | No   | false | NULL    | NONE  |\n| QueryPort         | TEXT | No   | false | NULL    | NONE  |\n| RpcPort           | TEXT | No   | false | NULL    | NONE  |\n| ArrowFlightSqlPort| TEXT | No   | false | NULL    | NONE  |\n| Role              | TEXT | No   | false | NULL    | NONE  |\n| IsMaster          | TEXT | No   | false | NULL    | NONE  |\n| ClusterId         | TEXT | No   | false | NULL    | NONE  |\n| Join              | TEXT | No   | false | NULL    | NONE  |\n| Alive             | TEXT | No   | false | NULL    | NONE  |\n| ReplayedJournalId | TEXT | No   | false | NULL    | NONE  |\n| LastHeartbeat     | TEXT | No   | false | NULL    | NONE  |\n| IsHelper          | TEXT | No   | false | NULL    | NONE  |\n| ErrMsg            | TEXT | No   | false | NULL    | NONE  |\n| Version           | TEXT | No   | false | NULL    | NONE  |\n| CurrentConnected  | TEXT | No   | false | NULL    | NONE  |\n+-------------------+------+------+-------+---------+-------+\n17 rows in set (0.022 sec)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The information displayed by the ",(0,o.jsx)(n.code,{children:"frontends"})," tvf is basically consistent with the information displayed by the ",(0,o.jsx)(n.code,{children:"show frontends"})," statement. However, the types of each field in the ",(0,o.jsx)(n.code,{children:"frontends"})," tvf are more specific, and you can use the ",(0,o.jsx)(n.code,{children:"frontends"})," tvf to perform operations such as filtering and joining."]}),"\n",(0,o.jsxs)(n.p,{children:["The information displayed by the ",(0,o.jsx)(n.code,{children:"frontends"})," tvf is authenticated, which is consistent with the behavior of ",(0,o.jsx)(n.code,{children:"show frontends"}),", user must have ADMIN/OPERATOR privelege."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> select * from frontends()\\G\n*************************** 1. row ***************************\n             Name: fe_5fa8bf19_fd6b_45cb_89c5_25a5ebc45582\n               IP: 10.xx.xx.14\n      EditLogPort: 9013\n         HttpPort: 8034\n        QueryPort: 9033\n          RpcPort: 9023\nArrowFlightSqlPort: 9040\n             Role: FOLLOWER\n         IsMaster: true\n        ClusterId: 1258341841\n             Join: true\n            Alive: true\nReplayedJournalId: 186\n    LastHeartbeat: 2023-06-15 16:53:12\n         IsHelper: true\n           ErrMsg: \n          Version: doris-0.0.0-trunk-4b18cde0c7\n CurrentConnected: Yes\n1 row in set (0.060 sec)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"frontends\n"})})]})}function f(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let o={},r=t.createContext(o);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);