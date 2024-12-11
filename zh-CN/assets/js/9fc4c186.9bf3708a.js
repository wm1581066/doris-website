"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["280215"],{666821:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-avg","title":"ARRAY_AVG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-avg.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-avg","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-avg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_AVG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_FILTER","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-filter"},"next":{"title":"ARRAY_SUM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-sum"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_AVG",language:"zh-CN"},i=void 0,c={},o=[{value:"array_avg",id:"array_avg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_avg",children:"array_avg"}),"\n",(0,t.jsx)(n.p,{children:"array_avg"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u7684\u5E73\u5747\u503C\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,t.jsx)(n.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,t.jsx)(n.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,t.jsx)(n.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Array<T> array_avg(arr)"})}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_avg(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_avg(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               2 |\n| [1, NULL, 3] |               2 |\n+--------------+-----------------+\n4 rows in set (0.01 sec)\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,AVG,ARRAY_AVG"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);