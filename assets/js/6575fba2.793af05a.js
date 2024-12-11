"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["913144"],{816198:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/collect-set","title":"COLLECT_SET","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/collect-set.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/collect-set","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/collect-set","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"COLLECT_SET","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_AGG","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-agg"},"next":{"title":"COLLECT_LIST","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/collect-list"}}'),s=t("785893"),c=t("250065");let o={title:"COLLECT_SET",language:"en"},i=void 0,r={},a=[{value:"COLLECT_SET",id:"collect_set",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"collect_set",children:"COLLECT_SET"}),"\n",(0,s.jsx)(n.p,{children:"COLLECT_SET"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ARRAY<T> collect_set(expr[,max_size])"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates an array containing distinct elements from ",(0,s.jsx)(n.code,{children:"expr"}),",with the optional ",(0,s.jsx)(n.code,{children:"max_size"})," parameter limits the size of the resulting array to ",(0,s.jsx)(n.code,{children:"max_size"})," elements. It has an alias ",(0,s.jsx)(n.code,{children:"group_uniq_array"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select k1,k2,k3 from collect_set_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-01 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | doris |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n\nmysql> select collect_set(k1),collect_set(k1,2) from collect_set_test;\n+-------------------------+--------------------------+\n| collect_set(`k1`)       | collect_set(`k1`,2)      |\n+-------------------------+--------------------------+\n| [4,3,2,1]               | [1,2]                    |\n+----------------------------------------------------+\n\nmysql> select k1,collect_set(k2),collect_set(k3,1) from collect_set_test group by k1 order by k1;\n+------+-------------------------+--------------------------+\n| k1   | collect_set(`k2`)       | collect_set(`k3`,1)      |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-01,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"COLLECT_SET,GROUP_UNIQ_ARRAY,COLLECT_LIST,ARRAY"})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var l=t(667294);let s={},c=l.createContext(s);function o(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);