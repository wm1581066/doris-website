"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["461930"],{902005:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"table-design/index/prefix-index","title":"Sort Key and Prefix Index","description":"\x3c!--","source":"@site/docs/table-design/index/prefix-index.md","sourceDirName":"table-design/index","slug":"/table-design/index/prefix-index","permalink":"/docs/dev/table-design/index/prefix-index","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sort Key and Prefix Index","language":"en"},"sidebar":"docs","previous":{"title":"Index Overview","permalink":"/docs/dev/table-design/index/index-overview"},"next":{"title":"Inverted Index","permalink":"/docs/dev/table-design/index/inverted-index"}}'),r=t("785893"),s=t("250065");let d={title:"Sort Key and Prefix Index",language:"en"},l=void 0,a={},o=[{value:"Index Principles",id:"index-principles",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example Usage",id:"example-usage",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"index-principles",children:"Index Principles"}),"\n",(0,r.jsx)(n.p,{children:"Doris stores data in a structure similar to SSTable (Sorted String Table). This structure is an ordered data structure that can be sorted and stored according to one or more specified columns. In such a data structure, looking up conditions on all or part of the sorted columns is highly efficient."}),"\n",(0,r.jsx)(n.p,{children:"In the Aggregate, Unique, and Duplicate data models, the underlying data storage is sorted according to the columns specified in the CREATE TABLE statement under AGGREGATE KEY, UNIQUE KEY, and DUPLICATE KEY respectively. These keys are referred to as sort keys. With sort keys, Doris can quickly locate the required data without scanning the entire table by specifying conditions on the sorted columns during a query, thereby reducing search complexity and speeding up the query."}),"\n",(0,r.jsx)(n.p,{children:"Based on the sort keys, Doris introduces a prefix index. The prefix index is a sparse index. The data in the table forms a logical data block (Data Block) according to the corresponding number of rows. Each logical data block stores an index entry in the prefix index table, where the length of the index entry does not exceed 36 bytes. The entry content is the prefix composed of the sorted columns of the first row in the data block. When looking up the prefix index table, it helps determine the starting row number of the logical data block where the row data is located. Because the prefix index is relatively small, it can be fully cached in memory, allowing for quick data block location and significantly improving query efficiency."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The first 36 bytes of a row in a data block are used as the prefix index for that row. When encountering a VARCHAR type, the prefix index is directly truncated. If the first column is VARCHAR, even if it does not reach 36 bytes, it will be directly truncated, and the subsequent columns will not be included in the prefix index."})}),"\n",(0,r.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(n.p,{children:"Prefix indexes can speed up equality queries and range queries."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Since the KEY definition of a table is unique, a table can only have one type of prefix index. For queries using other columns that cannot hit the prefix index as conditions, the efficiency might not meet the requirements. There are two solutions:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create an inverted index on the columns that require accelerated queries, as a table can have many inverted indexes."}),"\n",(0,r.jsx)(n.li,{children:"For DUPLICATE tables, multi-prefix indexes can be indirectly achieved by creating corresponding strongly consistent materialized views with adjusted column orders. For more details, refer to query acceleration/materialized views."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:"There is no specific syntax for defining a prefix index. When creating a table, the first 36 bytes of the table's KEY are automatically taken as the prefix index."}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Suppose the sorted columns of a table are as follows, then the prefix index would be: user_id (8 Bytes) + age (4 Bytes) + message (prefix 20 Bytes)."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ColumnName"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user_id"}),(0,r.jsx)(n.td,{children:"BIGINT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"age"}),(0,r.jsx)(n.td,{children:"INT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"VARCHAR(100)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max_dwell_time"}),(0,r.jsx)(n.td,{children:"DATETIME"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min_dwell_time"}),(0,r.jsx)(n.td,{children:"DATETIME"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Suppose the sorted columns of a table are as follows, then the prefix index would be user_name (20 Bytes). Even if it does not reach 36 bytes, it is directly truncated due to encountering VARCHAR, and subsequent columns are not included."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"ColumnName"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user_name"}),(0,r.jsx)(n.td,{children:"VARCHAR(20)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"age"}),(0,r.jsx)(n.td,{children:"INT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"VARCHAR(100)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max_dwell_time"}),(0,r.jsx)(n.td,{children:"DATETIME"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min_dwell_time"}),(0,r.jsx)(n.td,{children:"DATETIME"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When our query condition is the prefix of the prefix index, it can significantly speed up the query. For example, in the first example, executing the following query:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM table WHERE user_id = 1829239 AND age = 20;\n"})}),"\n",(0,r.jsx)(n.p,{children:"This query will be much more efficient than the following query:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM table WHERE age = 20;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Therefore, choosing the correct column order when creating a table can greatly improve query efficiency."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var i=t(667294);let r={},s=i.createContext(r);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);