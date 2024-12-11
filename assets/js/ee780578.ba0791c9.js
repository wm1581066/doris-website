"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["598939"],{657680:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"advanced/alter-table/schema-change","title":"Schema Change","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/alter-table/schema-change.md","sourceDirName":"advanced/alter-table","slug":"/advanced/alter-table/schema-change","permalink":"/docs/1.2/advanced/alter-table/schema-change","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Schema Change","language":"en"},"sidebar":"docs","previous":{"title":"Sequence Column","permalink":"/docs/1.2/data-operate/update-delete/sequence-column-manual"},"next":{"title":"Replace Table","permalink":"/docs/1.2/advanced/alter-table/replace-table"}}'),i=a("785893"),o=a("250065");let l={title:"Schema Change",language:"en"},s="Schema Change",r={},c=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Create Job",id:"create-job",level:2},{value:"View Job",id:"view-job",level:2},{value:"Cancel Job",id:"cancel-job",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"Modify Key column",id:"modify-key-column",level:3},{value:"Notice",id:"notice",level:2},{value:"FAQ",id:"faq",level:2},{value:"Configurations",id:"configurations",level:2},{value:"FE Configurations",id:"fe-configurations",level:3},{value:"BE Configurations",id:"be-configurations",level:3},{value:"More Help",id:"more-help",level:2}];function d(e){let n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"schema-change",children:"Schema Change"})}),"\n",(0,i.jsx)(n.p,{children:"Users can modify the schema of existing tables through the Schema Change operation. Doris currently supports the following modifications:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add and delete columns"}),"\n",(0,i.jsx)(n.li,{children:"Modify column type"}),"\n",(0,i.jsx)(n.li,{children:"Adjust column order"}),"\n",(0,i.jsx)(n.li,{children:"Add and modify Bloom Filter"}),"\n",(0,i.jsx)(n.li,{children:"Add and delete bitmap index"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This document mainly describes how to create a Schema Change job, as well as some considerations and frequently asked questions about Schema Change."}),"\n",(0,i.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Base Table: When each table is created, it corresponds to a base table. The base table stores the complete data of this table. Rollups are usually created based on the data in the base table (and can also be created from other rollups)."}),"\n",(0,i.jsx)(n.li,{children:"Index: Materialized index. Rollup or Base Table are both called materialized indexes."}),"\n",(0,i.jsx)(n.li,{children:"Transaction: Each import task is a transaction, and each transaction has a unique incrementing Transaction ID."}),"\n",(0,i.jsx)(n.li,{children:"Rollup: Roll-up tables based on base tables or other rollups."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-principles",children:"Basic Principles"}),"\n",(0,i.jsx)(n.p,{children:"The basic process of executing a Schema Change is to generate a copy of the index data of the new schema from the data of the original index. Among them, two parts of data conversion are required. One is the conversion of existing historical data, and the other is the conversion of newly arrived imported data during the execution of Schema Change."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Before starting the conversion of historical data, Doris will obtain a latest transaction ID. And wait for all import transactions before this Transaction ID to complete. This Transaction ID becomes a watershed. This means that Doris guarantees that all import tasks after the watershed will generate data for both the original Index and the new Index. In this way, when the historical data conversion is completed, the data in the new Index can be guaranteed to be complete."}),"\n",(0,i.jsx)(n.h2,{id:"create-job",children:"Create Job"}),"\n",(0,i.jsxs)(n.p,{children:["The specific syntax for creating a Schema Change can be found in the help ",(0,i.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",children:"ALTER TABLE COLUMN"})," for the description of the Schema Change section ."]}),"\n",(0,i.jsxs)(n.p,{children:["The creation of Schema Change is an asynchronous process. After the job is submitted successfully, the user needs to view the job progress through the ",(0,i.jsx)(n.code,{children:"SHOW ALTER TABLE COLUMN"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"view-job",children:"View Job"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SHOW ALTER TABLE COLUMN"})," You can view the Schema Change jobs that are currently executing or completed. When multiple indexes are involved in a Schema Change job, the command displays multiple lines, each corresponding to an index. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW ALTER TABLE COLUMN\\G;\n*************************** 1. row ***************************\n        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg: \n     Progress: NULL\n      Timeout: 86400\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JobId: A unique ID for each Schema Change job."}),"\n",(0,i.jsx)(n.li,{children:"TableName: The table name of the base table corresponding to Schema Change."}),"\n",(0,i.jsx)(n.li,{children:"CreateTime: Job creation time."}),"\n",(0,i.jsx)(n.li,{children:'FinishedTime: The end time of the job. If it is not finished, "N/A" is displayed.'}),"\n",(0,i.jsx)(n.li,{children:"IndexName: The name of an Index involved in this modification."}),"\n",(0,i.jsx)(n.li,{children:"IndexId: The unique ID of the new Index."}),"\n",(0,i.jsx)(n.li,{children:"OriginIndexId: The unique ID of the old Index."}),"\n",(0,i.jsx)(n.li,{children:"SchemaVersion: Displayed in M: N format. M is the version of this Schema Change, and N is the corresponding hash value. With each Schema Change, the version is incremented."}),"\n",(0,i.jsx)(n.li,{children:"TransactionId: the watershed transaction ID of the conversion history data."}),"\n",(0,i.jsxs)(n.li,{children:["State: The phase of the operation.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PENDING: The job is waiting in the queue to be scheduled."}),"\n",(0,i.jsx)(n.li,{children:"WAITING_TXN: Wait for the import task before the watershed transaction ID to complete."}),"\n",(0,i.jsx)(n.li,{children:"RUNNING: Historical data conversion."}),"\n",(0,i.jsx)(n.li,{children:"FINISHED: The operation was successful."}),"\n",(0,i.jsx)(n.li,{children:"CANCELLED: The job failed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Msg: If the job fails, a failure message is displayed here."}),"\n",(0,i.jsx)(n.li,{children:"Progress: operation progress. Progress is displayed only in the RUNNING state. Progress is displayed in M/N. Where N is the total number of copies involved in the Schema Change. M is the number of copies of historical data conversion completed."}),"\n",(0,i.jsx)(n.li,{children:"Timeout: Job timeout time. Unit of second."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cancel-job",children:"Cancel Job"}),"\n",(0,i.jsxs)(n.p,{children:["In the case that the job status is not FINISHED or CANCELLED, you can cancel the Schema Change job with the following command:\n",(0,i.jsx)(n.code,{children:"CANCEL ALTER TABLE COLUMN FROM tbl_name;"})]}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsx)(n.p,{children:"Schema Change can make multiple changes to multiple indexes in one job. For example:\nSource Schema:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can add a row k4 to both rollup1 and rollup2 by adding the following k5 to rollup2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'ALTER TABLE tbl1\nADD COLUMN k4 INT default "1" to rollup1,\nADD COLUMN k4 INT default "1" to rollup2,\nADD COLUMN k5 INT default "1" to rollup2;\n'})}),"\n",(0,i.jsx)(n.p,{children:"When completion, the Schema becomes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"As you can see, the base table tbl1 also automatically added k4, k5 columns. That is, columns added to any rollup are automatically added to the Base table."}),"\n",(0,i.jsx)(n.p,{children:"At the same time, columns that already exist in the Base table are not allowed to be added to Rollup. If you need to do this, you can re-create a Rollup with the new columns and then delete the original Rollup."}),"\n",(0,i.jsx)(n.h3,{id:"modify-key-column",children:"Modify Key column"}),"\n",(0,i.jsxs)(n.p,{children:["Modifying the Key column of a table is done through the ",(0,i.jsx)(n.code,{children:"key"})," keyword. Let's take a look at an example below."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"This usage is only for the key column of the duplicate key table"})}),"\n",(0,i.jsx)(n.p,{children:"Source Schema :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-----------+-------+-------------+------+------+---------+-------+\n| IndexName | Field | Type        | Null | Key  | Default | Extra |\n+-----------+-------+-------------+------+------+---------+-------+\n| tbl1      | k1    | INT         | No   | true | N/A     |       |\n|           | k2    | INT         | No   | true | N/A     |       |\n|           | k3    | varchar(20) | No   | true | N/A     |       |\n|           | k4    | INT         | No   | false| N/A     |       |\n+-----------+-------+-------------+------+------+---------+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"The modification statement is as follows, we will change the degree of the k3 column to 50"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"alter table example_tbl modify column k3 varchar(50) key null comment 'to 50'\n"})}),"\n",(0,i.jsx)(n.p,{children:"When done, the Schema becomes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"+-----------+-------+-------------+------+------+---------+-------+\n| IndexName | Field | Type        | Null | Key  | Default | Extra |\n+-----------+-------+-------------+------+------+---------+-------+\n| tbl1      | k1    | INT         | No   | true | N/A     |       |\n|           | k2    | INT         | No   | true | N/A     |       |\n|           | k3    | varchar(50) | No   | true | N/A     |       |\n|           | k4    | INT         | No   | false| N/A     |       |\n+-----------+-------+-------------+------+------+---------+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Because the Schema Chanage job is an asynchronous operation, only one Schema chanage job can be performed on the same table at the same time. To check the operation status of the job, you can use the following command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN\\G;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notice",children:"Notice"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Only one Schema Change job can be running on a table at a time."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Schema Change operation does not block import and query operations."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The partition column and bucket column cannot be modified."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If there is a value column aggregated by REPLACE in the schema, the Key column is not allowed to be deleted."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\xa0\xa0\xa0\xa0 If the Key column is deleted, Doris cannot determine the value of the REPLACE column.\n\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0 All non-Key columns of the Unique data model table are REPLACE aggregated.\n\xa0\xa0\xa0\xa0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When adding a value column whose aggregation type is SUM or REPLACE, the default value of this column has no meaning to historical data."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\xa0\xa0\xa0\xa0 Because the historical data has lost the detailed information, the default value cannot actually reflect the aggregated value.\n\xa0\xa0\xa0\xa0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When modifying the column type, fields other than Type need to be completed according to the information on the original column."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\xa0\xa0\xa0\xa0 If you modify the column ",(0,i.jsx)(n.code,{children:'k1 INT SUM NULL DEFAULT" 1 "'})," as type BIGINT, you need to execute the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```ALTER TABLE tbl1 MODIFY COLUMN `k1` BIGINT SUM NULL DEFAULT "1"; ```\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note that in addition to the new column types, such as the aggregation mode, Nullable attributes, and default values must be completed according to the original information."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Modifying column names, aggregation types, nullable attributes, default values, and column comments is not supported."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"the execution speed of Schema Change"}),"\n",(0,i.jsx)(n.p,{children:"At present, the execution speed of Schema Change is estimated to be about 10MB / s according to the worst efficiency. To be conservative, users can set the timeout for jobs based on this rate."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Submit job error ",(0,i.jsx)(n.code,{children:"Table xxx is not stable. ..."})]}),"\n",(0,i.jsxs)(n.p,{children:["Schema Change can only be started when the table data is complete and unbalanced. If some data shard copies of the table are incomplete, or if some copies are undergoing an equalization operation, the submission is rejected.\n\xa0\xa0\xa0\xa0\nWhether the data shard copy is complete can be checked with the following command:\n",(0,i.jsx)(n.code,{children:'ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";'})]}),"\n",(0,i.jsxs)(n.p,{children:["If a result is returned, there is a problem with the copy. These problems are usually fixed automatically by the system. You can also use the following commands to repair this table first:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"ADMIN REPAIR TABLE tbl1;"})]}),"\n",(0,i.jsx)(n.p,{children:"You can check if there are running balancing tasks with the following command:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'SHOW PROC "/cluster_balance/pending_tablets";'})}),"\n",(0,i.jsx)(n.p,{children:"You can wait for the balancing task to complete, or temporarily disable the balancing operation with the following command:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,i.jsx)(n.h3,{id:"fe-configurations",children:"FE Configurations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alter_table_timeout_second"}),": The default timeout for the job is 86400 seconds."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"be-configurations",children:"BE Configurations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alter_tablet_worker_count"}),": Number of threads used to perform historical data conversion on the BE side. The default is 3. If you want to speed up the Schema Change job, you can increase this parameter appropriately and restart the BE. But too many conversion threads can cause increased IO pressure and affect other operations. This thread is shared with the Rollup job."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"more-help",children:"More Help"}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed syntax and best practices used by Schema Change, see ",(0,i.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",children:"ALTER TABLE COLUMN"})," command manual, you can also enter ",(0,i.jsx)(n.code,{children:"HELP ALTER TABLE COLUMN"})," in the MySql client command line for more help information."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return l}});var t=a(667294);let i={},o=t.createContext(i);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);