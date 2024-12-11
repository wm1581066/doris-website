"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["726681"],{36241:function(e,n,c){c.r(n),c.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/grouping","title":"GROUPING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/grouping.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/grouping","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/grouping","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GROUPING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HLL_UNION_AGG","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/hll-union-agg"},"next":{"title":"GROUPING_ID","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/grouping-id"}}'),s=c("785893"),l=c("250065");let r={title:"GROUPING",language:"zh-CN"},o=void 0,a={},d=[{value:"GROUPING",id:"grouping",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function t(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"grouping",children:"GROUPING"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"GROUPING"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u5728\u542B\u6709 CUBE\u3001ROLLUP \u6216 GROUPING SETS \u7684 SQL \u8BED\u53E5\u4E2D\uFF0C\u7528\u4E8E\u8868\u793A\u8FDB\u884C CUBE\u3001ROLLUP \u6216 GROUPING SETS \u64CD\u4F5C\u7684\u5217\u662F\u5426\u6C47\u603B\u3002\u5F53\u7ED3\u679C\u96C6\u4E2D\u7684\u6570\u636E\u884C\u662F CUBE\u3001ROLLUP \u6216 GROUPING SETS \u64CD\u4F5C\u4EA7\u751F\u7684\u6C47\u603B\u7ED3\u679C\u65F6\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE 1\uFF0C\u5426\u5219\u8FD4\u56DE 0\u3002GROUPING \u51FD\u6570\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.code,{children:"SELECT"}),"\u3001",(0,s.jsx)(n.code,{children:"HAVING"})," \u548C ",(0,s.jsx)(n.code,{children:"ORDER BY"})," \u5B50\u53E5\u5F53\u4E2D\u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ROLLUP"}),"\u3001",(0,s.jsx)(n.code,{children:"CUBE"})," \u6216 ",(0,s.jsx)(n.code,{children:"GROUPING SETS"})," \u64CD\u4F5C\u8FD4\u56DE\u7684\u6C47\u603B\u7ED3\u679C\uFF0C\u4F1A\u7528 NULL \u5145\u5F53\u88AB\u5206\u7EC4\u7684\u5B57\u6BB5\u7684\u503C\u3002\u56E0\u6B64\uFF0C",(0,s.jsx)(n.code,{children:"GROUPING"})," \u901A\u5E38\u7528\u4E8E\u533A\u5206 ",(0,s.jsx)(n.code,{children:"ROLLUP"}),"\u3001",(0,s.jsx)(n.code,{children:"CUBE"})," \u6216 ",(0,s.jsx)(n.code,{children:"GROUPING SETS"})," \u8FD4\u56DE\u7684\u7A7A\u503C\u4E0E\u8868\u4E2D\u7684\u7A7A\u503C\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GROUPING( <column_expression> )\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<column_expression>"}),"\n\u662F\u5728 ",(0,s.jsx)(n.code,{children:"GROUP BY"})," \u5B50\u53E5\u4E2D\u5305\u542B\u7684\u5217\u6216\u8868\u8FBE\u5F0F\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u503C\uFF1ABIGINT"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["\u4E0B\u9762\u7684\u4F8B\u5B50\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"camp"})," \u5217\u8FDB\u884C\u5206\u7EC4\u64CD\u4F5C\uFF0C\u5E76\u5BF9 ",(0,s.jsx)(n.code,{children:"occupation"})," \u7684\u6570\u91CF\u8FDB\u884C\u6C47\u603B\uFF0C",(0,s.jsx)(n.code,{children:"GROUPING"})," \u51FD\u6570\u4F5C\u7528\u4E8E ",(0,s.jsx)(n.code,{children:"camp"})," \u5217\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `roles` (\n  role_id       INT,\n  occupation    VARCHAR(32),\n  camp          VARCHAR(32),\n  register_time DATE\n)\nUNIQUE KEY(role_id)\nDISTRIBUTED BY HASH(role_id) BUCKETS 1\nPROPERTIES (\n  \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\nINSERT INTO `roles` VALUES\n(0, 'who am I', NULL, NULL),\n(1, 'mage', 'alliance', '2018-12-03 16:11:28'),\n(2, 'paladin', 'alliance', '2018-11-30 16:11:28'),\n(3, 'rogue', 'horde', '2018-12-01 16:11:28'),\n(4, 'priest', 'alliance', '2018-12-02 16:11:28'),\n(5, 'shaman', 'horde', NULL),\n(6, 'warrior', 'alliance', NULL),\n(7, 'warlock', 'horde', '2018-12-04 16:11:28'),\n(8, 'hunter', 'horde', NULL);\n\nSELECT \n  camp, \n  COUNT(occupation) AS 'occ_cnt',\n  GROUPING(camp)    AS 'grouping'\nFROM\n   `roles`\nGROUP BY\n  ROLLUP(camp); -- CUBE(camp) \u548C GROUPING SETS((camp)) \u540C\u6837\u4E5F\u6709\u6548;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7ED3\u679C\u96C6\u5728 ",(0,s.jsx)(n.code,{children:"camp"})," \u5217\u4E0B\u6709\u4E24\u4E2A NULL \u503C\uFF0C\u7B2C\u4E00\u4E2A NULL \u503C\u8868\u793A ",(0,s.jsx)(n.code,{children:"ROLLUP"})," \u64CD\u4F5C\u7684\u5217\u7684\u6C47\u603B\u7ED3\u679C\uFF0C\u8FD9\u4E00\u884C\u7684 ",(0,s.jsx)(n.code,{children:"occ_cnt"})," \u5217\u8868\u793A\u6240\u6709 ",(0,s.jsx)(n.code,{children:"camp"})," \u7684 ",(0,s.jsx)(n.code,{children:"occupation"})," \u7684\u8BA1\u6570\u7ED3\u679C\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"grouping"})," \u51FD\u6570\u4E2D\u8FD4\u56DE 1\u3002\u7B2C\u4E8C\u4E2A NULL \u8868\u793A ",(0,s.jsx)(n.code,{children:"camp"})," \u5217\u4E2D\u672C\u6765\u5C31\u5B58\u5728\u7684 NULL \u503C\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C\u96C6\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:"+----------+---------+----------+\n| camp     | occ_cnt | grouping |\n+----------+---------+----------+\n| NULL     |       9 |        1 |\n| NULL     |       1 |        0 |\n| alliance |       4 |        0 |\n| horde    |       4 |        0 |\n+----------+---------+----------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"GROUPING"}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD8\u53EF\u53C2\u9605 ",(0,s.jsx)(n.a,{href:"./grouping_id.md",children:"GROUPING_ID"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return o},a:function(){return r}});var i=c(667294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);