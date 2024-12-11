"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["903895"],{105376:function(e,n,a){a.r(n),a.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return t},toc:function(){return d}});var t=a(172202),i=a(785893),s=a(250065);let o={title:"Auto-increment columns in databases: a simple magic that makes a big difference",description:"Auto-increment columns in Apache Doris accelerates dictionary encoding and pagination without damaging data writing performance. This is an introduction to its usage, applicable scenarios, and implementation details.",date:"2024-04-08",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/auto-increment-columns-in-databases.png"},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Syntax &amp; usage",id:"syntax--usage",level:2},{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"01 Dictionary encoding",id:"01-dictionary-encoding",level:3},{value:"02 Detailed data updates",id:"02-detailed-data-updates",level:3},{value:"03 Efficient pagination",id:"03-efficient-pagination",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Note",id:"note",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Auto-increment column is a bread-and-butter feature of single-node transactional databases. It assigns a unique identifier for each row in a way that requires the least manual effort from users. With an auto-increment column in the table, whenever a new row is inserted into the table, the new row will be assigned with the next available value from the auto-increment sequence. This is an automated mechanism that makes database maintenance easy and reliable."}),"\n",(0,i.jsx)(n.p,{children:"Auto-increment column is the bedrock of many features in databases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dictionary encoding"}),": User IDs and Order IDs are often stored as strings. However, strings are not friendly to precise deduplication query execution. So for optimal performance, a common practice is to perform dictionary encoding on the strings and then construct a bitmap for aggregation operations. The role of an auto-increment column in this process is that ",(0,i.jsx)(n.strong,{children:"it speeds up dictionary encoding and thus accelerates string deduplication"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Primary key generation"}),": An auto-increment column is the perfect candidate for the primary key of a table. Primary keys must be unique and not empty, while auto-increment columns guarantee a unique identifier for each row."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Detailed data updates"}),": Updating detail tables is tricky, but it can be easy if you add a auto-increment table to it. It gives each data record in the database a unique ID, which can work as the primary key, and then data updates can be done based on the primary key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Efficient pagination"}),": Pagination is often required in data display. It is typically implemented by the ",(0,i.jsx)(n.code,{children:"limit"})," or ",(0,i.jsx)(n.code,{children:"offset"})," + ",(0,i.jsx)(n.code,{children:"order by"})," statement in SQL queries. However, such implementation involves full data reading and sorting, which doesn't make so much sense in deep pagination queries (those with large offsets). This is when auto-increment columns come to the rescue. Like I said, it gives a unique identifier to each row, so the maximum identifier of the last page can be used as the filtering condition for the next page. Thus, it can avoid a lot of unnecessary data scanning and increase pagination efficiency."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The idea of auto-increment columns is intuitive, but when it comes to distributed databases, it becomes a different game, because it has to consider global transactions. As a distributed DBMS, Apache Doris provides an innovative and efficient auto-increment solution that does no harm to data writing performance."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To give AUTO_INCREMENT column a spin, follow this quick ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=FGVp2RQvGBo",children:"demo"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"syntax--usage",children:"Syntax & usage"}),"\n",(0,i.jsxs)(n.p,{children:["To enable an auto-increment column in Doris, add ",(0,i.jsx)(n.code,{children:"AUTO_INCREMENT"})," property to the column in the table creation statement (",(0,i.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE",children:"CREAT-TABLE"}),"). You can specify a starting value for the auto-increment column via ",(0,i.jsx)(n.code,{children:"AUTO_INCREMENT(start_value)"}),"; if not, the default starting value is 1."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can create a table in the ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/data-table/data-model#duplicate-model",children:"Duplicate Key model"}),", with one of the key columns being an auto-increment column."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n  // highlight-next-line\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Apart from a key column, you can also specify a value column as an auto-increment column (example below):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `uid` BIGINT NOT NULL,\n      `name` BIGINT NOT NULL,\n      // highlight-next-line\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`uid`, `name`)\nDISTRIBUTED BY HASH(`uid`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["AUTO_INCREMENT is supported in both the Duplicate Key model and the ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/data-table/data-model/#unique-model",children:"Unique Key model"}),". Usage in the latter is similar."]}),"\n",(0,i.jsx)(n.p,{children:"I will walk you down the rest of the road with the table below as an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `name` varchar(65533) NOT NULL,\n    `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When you ingest data into this table using an ",(0,i.jsx)(n.code,{children:"insert into"})," statement, if the ",(0,i.jsx)(n.code,{children:"id"})," column has no specified value in the original data file, it will be auto-filled with auto-increment values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl(name, value) values(\"Bob\", 10), (\"Alice\", 20), (\"Jack\", 30);\nQuery OK, 3 rows affected (0.09 sec)\n{'label':'label_183babcb84ad4023_a2d6266ab73fb5aa', 'status':'VISIBLE', 'txnId':'7'}\n\nmysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.05 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, when you ingest a data file ",(0,i.jsx)(n.code,{children:"test.csv"})," by Stream Load, the ",(0,i.jsx)(n.code,{children:"id"})," column will be auto-filled with auto-increment values, too."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'test.csv:\nTom,40\nJohn,50\ncurl --location-trusted -u user:passwd -H "columns:name,value" -H "column_separator:," -T ./test.csv http://{host}:{port}/api/{db}/tbl/_stream_load\nselect * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n|    4 | Tom   |    40 |\n|    5 | John  |    50 |\n+------+-------+-------+\n5 rows in set (0.04 sec)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,i.jsx)(n.h3,{id:"01-dictionary-encoding",children:"01 Dictionary encoding"}),"\n",(0,i.jsx)(n.p,{children:"In Apache Doris, the bitmap data type and the bitmap-related aggregations are implemented with RoaringBitmap, which can deliver high performance especially when dictionary encoding produces dense values."}),"\n",(0,i.jsx)(n.p,{children:"As is mentioned, auto-increment columns enable fast dictionary encoding. I will put you into the context of user profiling to show you how that works."}),"\n",(0,i.jsx)(n.p,{children:"For analysis of offline page views (PV) and unique visitors (UV), store the details in a user behavior table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dwd_dup_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `dim1` varchar(50) NOT NULL,\n    `dim2` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim4` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `visit_time` DATE NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Create a dictionary table as follows leveraging AUTO_INCREMENT:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dictionary_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `aid` BIGINT NOT NULL AUTO_INCREMENT\n) ENGINE=OLAP\nUNIQUE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Load the existing ",(0,i.jsx)(n.code,{children:"user_id"})," into the dictionary table, and create mappings from ",(0,i.jsx)(n.code,{children:"user_id"})," to integer values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into dictionary_tbl(user_id)\nselect user_id from dwd_dup_tbl group by user_id;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you only need to load the incremental ",(0,i.jsx)(n.code,{children:"user_id"})," into the dictionary table, you can use the following command. In practice, you can also use the ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/ecosystem/flink-doris-connector/",children:"Flink Doris Connector"})," for data writing."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into dictionary_tbl(user_id)\nselect dwd_dup_tbl.user_id from dwd_dup_tbl left join dictionary_tbl\non dwd_dup_tbl.user_id = dictionary_tbl.user_id where dwd_dup_tbl.visit_time  '2023-12-10' and dictionary_tbl.user_id is NULL;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose you have your analytic dimensions as ",(0,i.jsx)(n.code,{children:"dim1"}),",  ",(0,i.jsx)(n.code,{children:"dim3"}),",  ",(0,i.jsx)(n.code,{children:"dim5"}),", create a table in the ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model",children:"Aggregate Key model"})," to accommodate the results of data aggregation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dws_agg_tbl` (\n    `dim1` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `user_id_bitmap` BITMAP BITMAP_UNION NOT NULL,\n    `pv` BIGINT SUM NOT NULL \n) ENGINE=OLAP\nAGGREGATE KEY(`dim1`,`dim3`,`dim5`)\nDISTRIBUTED BY HASH(`dim1`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Load the aggregated results into the table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into dws_agg_tbl\nselect dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5, BITMAP_UNION(TO_BITMAP(dictionary_tbl.aid)), COUNT(1)\nfrom dwd_dup_tbl INNER JOIN dictionary_tbl on dwd_dup_tbl.user_id = dictionary_tbl.user_id\ngroup by dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then you query PV/UV using the following statement:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select dim1, dim3, dim5, bitmap_count(user_id_bitmap) as uv, pv from dws_agg_tbl;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"02-detailed-data-updates",children:"02 Detailed data updates"}),"\n",(0,i.jsx)(n.p,{children:"In Doris, the Unique Key model is applicable to use cases with frequent data updates, while the Duplicate Key model is designed for detailed data storage with no data updating requirements."}),"\n",(0,i.jsx)(n.p,{children:"However, in real life, users might need to update their detailed data sometimes, which can be hard to implement because the data tables don't come with unique key columns."}),"\n",(0,i.jsxs)(n.p,{children:["In this case, you can ",(0,i.jsx)(n.strong,{children:"use an auto-increment column as the primary key for the detailed data"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, a financial institution keeps record of customer loans and writes it into a Duplicate Key table, in which one single user might have multiple borrowing records."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"CREATE TABLE loan_records (\n    `user_id` VARCHAR(20) DEFAULT NULL COMMENT 'Customer ID',\n    `loan_amount` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of loan',\n    `interest_rate` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Interest rate',\n    `loan_start_date` DATE DEFAULT NULL COMMENT 'Start date of the loan',\n    `loan_end_date` DATE DEFAULT NULL COMMENT 'End date of the loan',\n    `total_debt` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of debt'\n) DUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 3\"\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose that in a promotional campaign, the institution offers a 10% discount on interest rates to its existing customers. Correspondingly, there is a need to update the ",(0,i.jsx)(n.code,{children:"interest_rate"})," and ",(0,i.jsx)(n.code,{children:"total_debt"})," in the table."]}),"\n",(0,i.jsxs)(n.p,{children:["For that sake, you can create a Unique Key table for the same data, but add an ",(0,i.jsx)(n.code,{children:"auto_id"})," field and set it as the primary key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"CREATE TABLE loan_records (\n    `auto_id` BIGINT NOT NULL AUTO_INCREMENT,\n    `user_id` VARCHAR(20) DEFAULT NULL COMMENT 'Customer ID',\n    `loan_amount` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of loan',\n    `interest_rate` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Interest rate',\n    `loan_start_date` DATE DEFAULT NULL COMMENT 'Start date of the loan',\n    `loan_end_date` DATE DEFAULT NULL COMMENT 'End date of the loan',\n    `total_debt` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of debt'\n) UNIQUE KEY(`auto_id`)\nDISTRIBUTED BY HASH(`auto_id`) BUCKETS 10\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 3\"\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, write a few new records into the table and see what happens. (Note that you don't have to write in the ",(0,i.jsx)(n.code,{children:"auto_id"})," field.)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"INSERT INTO loan_records (user_id, loan_amount, interest_rate, loan_start_date, loan_end_date, total_debt) VALUES\n('10001', 5000.00, 5.00, '2024-03-01', '2024-03-31', 5020.55),\n('10002', 10000.00, 5.00, '2024-03-01', '2024-05-01', 10082.56),\n('10003', 2000.00, 5.00, '2024-03-01', '2024-03-15', 2003.84),\n('10004', 7500.00, 5.00, '2024-03-01', '2024-04-15', 7546.23),\n('10005', 3000.00, 5.00, '2024-03-01', '2024-03-21', 3008.22),\n('10002', 8000.00, 5.00, '2024-03-01', '2024-06-01', 8100.82),\n('10007', 6000.00, 5.00, '2024-03-01', '2024-04-10', 6032.88),\n('10008', 4000.00, 5.00, '2024-03-01', '2024-03-26', 4013.70),\n('10001', 5500.00, 5.00, '2024-03-01', '2024-04-05', 5526.37),\n('10010', 9000.00, 5.00, '2024-03-01', '2024-05-10', 9086.30);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check with the ",(0,i.jsx)(n.code,{children:"select * from loan_records"})," statement, and you can see a unique ID is already in place for each newly-ingested record:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"mysql> select * from loan_records;\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n| auto_id | user_id | loan_amount | interest_rate | loan_start_date | loan_end_date | total_debt |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n|       1 | 10001   |     5000.00 |          5.00 | 2024-03-01      | 2024-03-31    |    5020.55 |\n|       4 | 10004   |     7500.00 |          5.00 | 2024-03-01      | 2024-04-15    |    7546.23 |\n|       2 | 10002   |    10000.00 |          5.00 | 2024-03-01      | 2024-05-01    |   10082.56 |\n|       3 | 10003   |     2000.00 |          5.00 | 2024-03-01      | 2024-03-15    |    2003.84 |\n|       6 | 10002   |     8000.00 |          5.00 | 2024-03-01      | 2024-06-01    |    8100.82 |\n|       8 | 10008   |     4000.00 |          5.00 | 2024-03-01      | 2024-03-26    |    4013.70 |\n|       7 | 10007   |     6000.00 |          5.00 | 2024-03-01      | 2024-04-10    |    6032.88 |\n|       9 | 10001   |     5500.00 |          5.00 | 2024-03-01      | 2024-04-05    |    5526.37 |\n|       5 | 10005   |     3000.00 |          5.00 | 2024-03-01      | 2024-03-21    |    3008.22 |\n|      10 | 10010   |     9000.00 |          5.00 | 2024-03-01      | 2024-05-10    |    9086.30 |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n10 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Execute these two SQL statements to update ",(0,i.jsx)(n.code,{children:"interest_rate"})," and ",(0,i.jsx)(n.code,{children:"total_debt"}),", respectively:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"update loan_records set interest_rate = interest_rate * 0.9 where user_id <= 10005;\nupdate loan_records set total_debt = loan_amount + (loan_amount * (interest_rate / 100) * DATEDIFF(loan_end_date, loan_start_date) / 365);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check again to see if the old records have been replaced by the new ones:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:"mysql> select * from loan_records order by auto_id;\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n| auto_id | user_id | loan_amount | interest_rate | loan_start_date | loan_end_date | total_debt |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n|       1 | 10001   |     5000.00 |          4.50 | 2024-03-01      | 2024-03-31    |    5018.49 |\n|       2 | 10002   |    10000.00 |          4.50 | 2024-03-01      | 2024-05-01    |   10075.21 |\n|       3 | 10003   |     2000.00 |          4.50 | 2024-03-01      | 2024-03-15    |    2003.45 |\n|       4 | 10004   |     7500.00 |          4.50 | 2024-03-01      | 2024-04-15    |    7541.61 |\n|       5 | 10005   |     3000.00 |          4.50 | 2024-03-01      | 2024-03-21    |    3007.40 |\n|       6 | 10002   |     8000.00 |          4.50 | 2024-03-01      | 2024-06-01    |    8090.74 |\n|       7 | 10007   |     6000.00 |          5.00 | 2024-03-01      | 2024-04-10    |    6032.88 |\n|       8 | 10008   |     4000.00 |          5.00 | 2024-03-01      | 2024-03-26    |    4013.70 |\n|       9 | 10001   |     5500.00 |          4.50 | 2024-03-01      | 2024-04-05    |    5523.73 |\n|      10 | 10010   |     9000.00 |          5.00 | 2024-03-01      | 2024-05-10    |    9086.30 |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n10 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"03-efficient-pagination",children:"03 Efficient pagination"}),"\n",(0,i.jsx)(n.p,{children:"Imagine that you need to sort the data in a specific order and then retrieve record No. 90,001 to record No. 90,010. This means you have a large offset of 90,000. This is what we call a deep pagination query. Even though you only require a result set of 10 rows, the database system still has to read the entire dataset into memory and perform a full sorting."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For higher execution efficiency in deep pagination queries, you can harness the power of auto-increment columns"}),". The main idea is to record the ",(0,i.jsx)(n.code,{children:"max_value"})," from the ",(0,i.jsx)(n.code,{children:"unique_value"})," column of the previous page, and push down predicates by ",(0,i.jsx)(n.code,{children:"where unique_value > max_value limit rows_per_page"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, during table creation, you enable an auto-increment column: ",(0,i.jsx)(n.code,{children:"unique_value"}),", which gives each row an identifier."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`records_tbl` (\n    `user_id` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT "",\n    `unique_value` BIGINT NOT NULL AUTO_INCREMENT\n) DUPLICATE KEY (`user_id`, `name`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"In pagination queries, suppose that each page displays 100 results, this is how you retrieve the first page of the result set."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl order by unique_value limit 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use programs to record the maximum ",(0,i.jsx)(n.code,{children:"unique_value"})," in the returned result. Suppose that the maximum is 99, you can query data from the second page using the following statement:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl where unique_value > 99 order by unique_value limit 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to query data from a deeper page, for example, page 101, which means it's hard to get the maximum ",(0,i.jsx)(n.code,{children:"unique_value"})," from the previous page directly, then you can use the statement as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select user_id, name, address, city, nation, region, phone, mktsegment\nfrom records_tbl, (select unique_value as max_value from records_tbl order by unique_value limit 1 offset 9999) as previous_data\nwhere records_tbl.unique_value > previous_data.max_value\norder by unique_value limit 100;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.p,{children:"Typical OLTP databases perform incremental ID matching by their transaction mechanisms. However, in an MPP-based distributed database system like Apache Doris, such an approach can easily suffocate data writing performance."}),"\n",(0,i.jsx)(n.p,{children:"That's why Apache Doris 2.1 innovates the implementation of auto-increment IDs. In a data ingestion task, one of the backend (BE) nodes will work as the coordinator, which is responsible for the allocation of auto-increment IDs. The coordinator BE requests a range of IDs in bulk from the frontend (FE). The FE makes sure that the ID ranges allocated to each BE do not overlap, thus guaranteeing the uniqueness of IDs."}),"\n",(0,i.jsx)(n.p,{children:"I illustrate the process with the figure below. StreamLoad1 has BE1 as the coordinator. BE1 requests a batch of IDs (range: 1-1000) from the FE and caches the IDs locally. Once all 1000 IDs are allocated, BE1 will request a new batch from the FE. At the same time, StreamLoad 2 selects BE3 as the coordinator, and BE3 also requests IDs from the FE. Since IDs 1-1000 have already been allocated to BE1, the FE assigns IDs 1001-2000 to BE3."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"the implementation of auto-increment IDs",src:a(554319).Z+"",width:"1280",height:"1100"})}),"\n",(0,i.jsx)(n.p,{children:"Suppose that StreamLoad1 and StreamLoad2 each write in 50 new data records, the auto-increment IDs assigned to them will be 1-50 and 1001-1050."}),"\n",(0,i.jsx)(n.p,{children:"Suppose that StreamLoad3 arises later and selects BE1 as the coordinator, BE1 will assign IDs starting from 51 to the data written by StreamLoad3. From the user's side, they will see that rows written by StreamLoad3 get smaller ID numbers than those by StreamLoad2, even though StreamLoad2 precedes StreamLoad3 in time."}),"\n",(0,i.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,i.jsx)(n.p,{children:"Attention is required regarding:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scope of uniqueness guarantee"}),": Doris ensures that the values generated on an auto-increment column are unique within the table, but this only applies to values auto-filled by Doris. If a user explicitly inserts values into the auto-increment column, Doris cannot guarantee the uniqueness of those values."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Density and continuity of values"}),": Doris ensures that the values generated by the auto-increment column are dense. However, for performance reasons, it cannot guarantee that the auto-filled values are continuous. This means there may be occurrences of value jumps in the auto-increment column. Additionally, since the auto-increment values are pre-allocated and cached in BE, the magnitude of the auto-increment values cannot reflect the order of data import."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["AUTO_INCREMENT brings higher stability and reliability for Doris in large-scale data processing. If it sounds like something you need, download ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Apache Doris"})," and try it out. For issues you come across along the way, join us in the ",(0,i.jsx)(n.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Apache Doris developer and user community"})," and we are happy to help."]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},554319:function(e,n,a){a.d(n,{Z:function(){return t}});let t=a.p+"assets/images/the-implementation-of-auto-increment-IDs-d48d7814da087bde1ef5fe3fbf0db7b5.png"},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return o}});var t=a(667294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}},172202:function(e){e.exports=JSON.parse('{"permalink":"/blog/auto-increment-columns-in-databases","source":"@site/blog/auto-increment-columns-in-databases.md","title":"Auto-increment columns in databases: a simple magic that makes a big difference","description":"Auto-increment columns in Apache Doris accelerates dictionary encoding and pagination without damaging data writing performance. This is an introduction to its usage, applicable scenarios, and implementation details.","date":"2024-04-08T00:00:00.000Z","tags":[{"inline":true,"label":"Tech Sharing","permalink":"/blog/tags/tech-sharing"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Auto-increment columns in databases: a simple magic that makes a big difference","description":"Auto-increment columns in Apache Doris accelerates dictionary encoding and pagination without damaging data writing performance. This is an introduction to its usage, applicable scenarios, and implementation details.","date":"2024-04-08","author":"Apache Doris","tags":["Tech Sharing"],"image":"/images/auto-increment-columns-in-databases.png"},"unlisted":false,"prevItem":{"title":"Apache Doris 2.0.8 just released","permalink":"/blog/release-note-2.0.8"},"nextItem":{"title":"Apache Doris 2.1.1 just released","permalink":"/blog/release-note-2.1.1"}}')}}]);