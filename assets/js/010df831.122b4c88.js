"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["920430"],{419816:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>c,assets:()=>l,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"data-operate/update/update-of-unique-model","title":"Updating Data on Unique Key Model","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/update/update-of-unique-model.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-of-unique-model","permalink":"/docs/data-operate/update/update-of-unique-model","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Updating Data on Unique Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Updating Data with UPDATE Command","permalink":"/docs/data-operate/update/unique-update"},"next":{"title":"Updating Data on Aggregate Key Model","permalink":"/docs/data-operate/update/update-of-aggregate-model"}}'),i=t("785893"),r=t("250065");let s={title:"Updating Data on Unique Key Model",language:"en"},o=void 0,l={},d=[{value:"Updates on All Columns",id:"updates-on-all-columns",level:2},{value:"Partial Update",id:"partial-update",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:3},{value:"Notes",id:"notes",level:3}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This document primarily introduces the updates based on the load data on the Doris Unique Key model."}),"\n",(0,i.jsx)(n.h2,{id:"updates-on-all-columns",children:"Updates on All Columns"}),"\n",(0,i.jsx)(n.p,{children:'When load data into the primary key model (Unique model) in Doris using supported load methods such as Stream Load, Broker Load, Routine Load, Insert Into, etc., if there are no corresponding data rows with the primary key, new data will be inserted. If there are corresponding data rows with the primary key, the data will be updated. In other words, load data into the Doris primary key model follows an "upsert" mode. Based on the import, updating existing records is by default the same as load a new record. Therefore, you can refer to the data load documentation section for more details.'}),"\n",(0,i.jsx)(n.h2,{id:"partial-update",children:"Partial Update"}),"\n",(0,i.jsx)(n.p,{children:"Updating partial columns mainly refers to directly updating certain field values in a table instead of updating all field values. This can be done using the Update statement, which typically involves reading the entire row data, updating specific field values, and then writing it back. This read-write transaction is time-consuming and not suitable for writing large amounts of data. In the context of load updates on the primary key model, Doris provides a functionality to directly insert or update partial column data without reading the entire row data, significantly improving the update efficiency."}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Note:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Partial updates are only supported in the Merge-on-Write implementation of the Unique Key starting from version 2.0."}),"\n",(0,i.jsx)(n.li,{children:"Starting from version 2.0.2, partial updates are supported using INSERT INTO."}),"\n",(0,i.jsx)(n.li,{children:"Partial updates are not supported on tables with materialized views."}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Real-time dynamic column updates that require high-frequency updates on certain fields in the table. For example, in a user tag table, there are fields containing the latest user behavior information that needs real-time updates to enable real-time analysis and decision-making in advertising/recommendation systems."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Combining multiple source tables into a large denormalized table."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Data correction."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Table Creation"})}),"\n",(0,i.jsx)(n.p,{children:"When creating the table, the following property needs to be specified to enable the Merge-on-Write implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"enable_unique_key_merge_on_write = true\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"StreamLoad/BrokerLoad/RoutineLoad"})}),"\n",(0,i.jsx)(n.p,{children:"If you are using Stream Load/Broker Load/Routine Load, add the following header during the load:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"partial_columns: true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, specify the columns to be loaded in the ",(0,i.jsx)(n.code,{children:"columns"})," section (all key columns must be included, otherwise updates won't be possible)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flink Connector"})}),"\n",(0,i.jsx)(n.p,{children:"If you are using the Flink Connector, add the following configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"'sink.properties.partial_columns' = 'true',\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, specify the columns to be loaded in ",(0,i.jsx)(n.code,{children:"sink.properties.column"})," (all key columns must be included, otherwise updates won't be possible)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"INSERT INTO"})}),"\n",(0,i.jsxs)(n.p,{children:["In all data models, when using ",(0,i.jsx)(n.code,{children:"INSERT INTO"})," with a subset of columns, the default behavior is to insert the entire row. To enable partial column updates in the Merge-on-Write implementation, the following session variable needs to be set:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set enable_unique_key_partial_update=true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the default value for the session variable ",(0,i.jsx)(n.code,{children:"enable_insert_strict"}),", which controls whether the insert statement operates in strict mode, is true. In strict mode, updating non-existing keys during partial column updates is not allowed. So, if you want to insert non-existing keys during partial column updates using the insert statement, you need to set ",(0,i.jsx)(n.code,{children:"enable_unique_key_partial_update"})," to true and also set ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," to false."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Suppose there is an order table named ",(0,i.jsx)(n.code,{children:"order_tbl"})," in Doris, where the order ID is a key column, and the order status and order amount are value columns. The data is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Order ID"}),(0,i.jsx)(n.th,{children:"Order Amount"}),(0,i.jsx)(n.th,{children:"Order Status"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"Pending"})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        | 100          | Pending      |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, when a user clicks on payment, the Doris system needs to update the order status of the order with ID '1' to 'To be shipped'."}),"\n",(0,i.jsx)(n.p,{children:"If you are using Stream Load, you can update as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'$ cat update.csv\n\n1,To be shipped\n\n$ curl --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.code,{children:"INSERT INTO"}),", you can update as following methods:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) values (1,'To be shipped');\n"})}),"\n",(0,i.jsx)(n.p,{children:"The translated version in English:"}),"\n",(0,i.jsx)(n.p,{children:"After the update, the result is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | To be shipped |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.p,{children:"Due to the Merge-on-Write implementation requiring data completion during data writing to ensure optimal query performance, performing partial column updates using the Merge-on-Write implementation may result in a decrease in load performance."}),"\n",(0,i.jsx)(n.p,{children:"Suggestions for improving load performance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use SSDs equipped with NVMe or high-speed SSD cloud disks. Reading historical data in large quantities during data completion will generate high read IOPS and read throughput."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enabling row storage can significantly reduce the IOPS generated during data completion, resulting in noticeable improvements in load performance. Users can enable row storage by using the following property when creating the table:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'"store_row_column" = "true"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now, all rows in a batch write task (whether it is an load task or ",(0,i.jsx)(n.code,{children:"INSERT INTO"}),") can only update the same columns. If you need to update different columns, you will need to perform separate batch writes."]}),"\n",(0,i.jsx)(n.p,{children:"In the future, flexible column updates will be supported, allowing users to update different columns for each row within the same batch load."})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(667294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);