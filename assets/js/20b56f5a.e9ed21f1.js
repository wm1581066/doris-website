"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336807"],{497159:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/iceberg-meta","title":"ICEBERG_META","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/iceberg-meta.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/iceberg-meta","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/iceberg-meta","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ICEBERG_META","language":"en"},"sidebar":"docs","previous":{"title":"QUERY","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/query"},"next":{"title":"BACKENDS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/backends"}}'),a=t("785893"),l=t("250065");let i={title:"ICEBERG_META",language:"en"},r=void 0,c={},d=[{value:"iceberg_meta",id:"iceberg_meta",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"iceberg_meta",children:"iceberg_meta"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"iceberg_meta"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.p,{children:"iceberg_meta table-valued-function(tvf), Use for read iceberg metadata, operation history, snapshots of table, file metadata etc."}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'iceberg_meta(\n  "table" = "ctl.db.tbl", \n  "query_type" = "snapshots"\n  ...\n  );\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"parameter description"})}),"\n",(0,a.jsxs)(n.p,{children:["Each parameter in iceberg_meta tvf is a pair of ",(0,a.jsx)(n.code,{children:'"key"="value"'}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Related parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"table"}),"\uFF1A (required) Use iceberg table name the format ",(0,a.jsx)(n.code,{children:"catlog.database.table"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"query_type"}),"\uFF1A (required) The type of iceberg metadata. Only ",(0,a.jsx)(n.code,{children:"snapshots"})," is currently supported."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Read and access the iceberg tabular metadata for snapshots."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Can be used with ",(0,a.jsx)(n.code,{children:"desc function"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"iceberg_meta, table-valued-function, tvf\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-prac",children:"Best Prac"}),"\n",(0,a.jsx)(n.p,{children:"Inspect the iceberg table snapshots :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  | {"flink.job-id":"xxm1", ...} |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  | {"flink.job-id":"xxm3", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n'})}),"\n",(0,a.jsx)(n.p,{children:"Filtered by snapshot_id :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") \nwhere snapshot_id = 98865735822;\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);