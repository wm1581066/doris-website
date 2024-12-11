"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["140628"],{671793:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"ecosystem/dbt-doris-adapter","title":"DBT Doris Adapter","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/ecosystem/dbt-doris-adapter.md","sourceDirName":"ecosystem","slug":"/ecosystem/dbt-doris-adapter","permalink":"/docs/2.0/ecosystem/dbt-doris-adapter","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DBT Doris Adapter","language":"en"},"sidebar":"docs","previous":{"title":"DataX Doriswriter","permalink":"/docs/2.0/ecosystem/datax"},"next":{"title":"Seatunnel Doris Sink","permalink":"/docs/2.0/ecosystem/seatunnel"}}'),r=t("785893"),s=t("250065");let a={title:"DBT Doris Adapter",language:"en"},d="DBT Doris Adapter",l={},o=[{value:"version",id:"version",level:2},{value:"dbt-doris adapter Instructions",id:"dbt-doris-adapter-instructions",level:2},{value:"dbt-doris adapter install",id:"dbt-doris-adapter-install",level:3},{value:"dbt-doris adapter project init",id:"dbt-doris-adapter-project-init",level:3},{value:"dbt-doris adapter run",id:"dbt-doris-adapter-run",level:3},{value:"dbt-doris adapter Materialization",id:"dbt-doris-adapter-materialization",level:3},{value:"View",id:"view",level:4},{value:"Table",id:"table",level:4},{value:"Incremental",id:"incremental",level:4},{value:"dbt-doris adapter seed",id:"dbt-doris-adapter-seed",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"View Model Sample Reference",id:"view-model-sample-reference",level:3},{value:"Table Model Sample Reference",id:"table-model-sample-reference",level:3},{value:"Incremental model sample reference (duplicate mode)",id:"incremental-model-sample-reference-duplicate-mode",level:3},{value:"Incremental model sample reference (unique mode)",id:"incremental-model-sample-reference-unique-mode",level:3},{value:"Incremental model full refresh sample reference",id:"incremental-model-full-refresh-sample-reference",level:3},{value:"Example of setting bucketing rules",id:"example-of-setting-bucketing-rules",level:3},{value:"Setting the number of replicas example reference",id:"setting-the-number-of-replicas-example-reference",level:3},{value:"Dynamic partition sample reference",id:"dynamic-partition-sample-reference",level:3},{value:"Conventional partition sample reference",id:"conventional-partition-sample-reference",level:3},{value:"Batch date setting parameter sample reference",id:"batch-date-setting-parameter-sample-reference",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"dbt-doris-adapter",children:"DBT Doris Adapter"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.getdbt.com/docs/introduction",children:"DBT(Data Build Tool)"}),' is a component that focuses on doing T (Transform) in ELT (extraction, loading, transformation) - the "transformation data" link\nThe ',(0,r.jsx)(n.code,{children:"dbt-doris"})," adapter is developed based on ",(0,r.jsx)(n.code,{children:"dbt-core"})," 1.5.0 and relies on the ",(0,r.jsx)(n.code,{children:"mysql-connector-python"})," driver to convert data to doris."]}),"\n",(0,r.jsxs)(n.p,{children:["git: ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/extension/dbt-doris",children:"https://github.com/apache/doris/tree/master/extension/dbt-doris"})]}),"\n",(0,r.jsx)(n.h2,{id:"version",children:"version"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"doris"}),(0,r.jsx)(n.th,{children:"python"}),(0,r.jsx)(n.th,{children:"dbt-core"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:">=1.2.5"}),(0,r.jsx)(n.td,{children:">=3.8,<=3.10"}),(0,r.jsx)(n.td,{children:">=1.5.0"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"dbt-doris-adapter-instructions",children:"dbt-doris adapter Instructions"}),"\n",(0,r.jsx)(n.h3,{id:"dbt-doris-adapter-install",children:"dbt-doris adapter install"}),"\n",(0,r.jsx)(n.p,{children:"use pip install:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pip install dbt-doris\n"})}),"\n",(0,r.jsx)(n.p,{children:"check version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"dbt --version\n"})}),"\n",(0,r.jsx)(n.p,{children:"if command not found: dbt:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ln -s /usr/local/python3/bin/dbt /usr/bin/dbt\n"})}),"\n",(0,r.jsx)(n.h3,{id:"dbt-doris-adapter-project-init",children:"dbt-doris adapter project init"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"dbt init \n"})}),"\n",(0,r.jsx)(n.p,{children:"Users need to prepare the following information to init dbt project"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"name"}),(0,r.jsx)(n.th,{children:"default"}),(0,r.jsx)(n.th,{children:"meaning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"project"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"project name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"database"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Enter the corresponding number to select the adapter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"host"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"doris host"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"port"}),(0,r.jsx)(n.td,{children:"9030"}),(0,r.jsx)(n.td,{children:"doris MySQL Protocol Port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"schema"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"In dbt-doris, it is equivalent to database, Database name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"doris username"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"doris password"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"threads"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Parallelism in dbt-doris (setting a parallelism that does not match the cluster capability will increase the risk of dbt running failure)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"dbt-doris-adapter-run",children:"dbt-doris adapter run"}),"\n",(0,r.jsxs)(n.p,{children:["For dbt run documentation, please refer to ",(0,r.jsx)(n.a,{href:"https://docs.getdbt.com/docs/get-started/run-your-dbt-projects",children:"here"}),".\nGo to the project directory and execute the default dbt model:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"dbt run \n"})}),"\n",(0,r.jsxs)(n.p,{children:["model\uFF1A",(0,r.jsx)(n.code,{children:"my_first_dbt_model"}),"\u548C",(0,r.jsx)(n.code,{children:"my_second_dbt_model"})]}),"\n",(0,r.jsxs)(n.p,{children:["They are materialized ",(0,r.jsx)(n.code,{children:"table"})," and ",(0,r.jsx)(n.code,{children:"view"})," respectively.\nthen login to doris to view the data results and table creation statements of ",(0,r.jsx)(n.code,{children:"my_first_dbt_model"})," and ",(0,r.jsx)(n.code,{children:"my_second_dbt_model"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"dbt-doris-adapter-materialization",children:"dbt-doris adapter Materialization"}),"\n",(0,r.jsx)(n.p,{children:"dbt-doris Materialization support three:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"view"}),"\n",(0,r.jsx)(n.li,{children:"table"}),"\n",(0,r.jsx)(n.li,{children:"incremental"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"view",children:"View"}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"view"})," as the materialization, Models will be rebuilt as views each time they are run through the create view as statement. (By default, the materialization method of dbt is view)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Advantages: No extra data is stored, and views on top of the source data will always contain the latest records.\nDisadvantages: View queries that perform large transformations or are nested on top of other views are slow.\nRecommendation: Usually start with the view of the model and only change to another materialization if there are performance issues. Views are best suited for models that do not undergo major transformations, such as renaming, column changes.\n"})}),"\n",(0,r.jsx)(n.p,{children:"config\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"models:\n  <resource-path>:\n    +materialized: view\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or write in the model file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jinja",children:'{{ config(materialized = "view") }}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"table",children:"Table"}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"table"})," materialization mode, your model is rebuilt as a table at each run with a ",(0,r.jsx)(n.code,{children:"create table as select"})," statement.\nFor the tablet materialization of dbt, dbt-doris uses the following steps to ensure the atomicity of data changes:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["first create a temporary table: ",(0,r.jsx)(n.code,{children:"create table this_table_temp as {{ model sql}}"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Determine whether ",(0,r.jsx)(n.code,{children:"this_table"})," does not exist, that is, it is created for the first time, execute ",(0,r.jsx)(n.code,{children:"rename"}),", and change the temporary table to the final table."]}),"\n",(0,r.jsxs)(n.li,{children:["if already exists, then ",(0,r.jsx)(n.code,{children:"alter table this_table REPLACE WITH TABLE this_table_temp PROPERTIES('swap' = 'False')"}),"\uFF0CThis operation can exchange the table name and delete the ",(0,r.jsx)(n.code,{children:"this_table_temp"})," temporary table,",(0,r.jsx)(n.a,{href:"../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-REPLACE.md",children:"this"})," guarantees the atomicity of this operation through the transaction mechanism of the Doris."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Advantages: table query speed will be faster than view.\nDisadvantages: The table takes a long time to build or rebuild, additional data will be stored, and incremental data synchronization cannot be performed.\nRecommendation: It is recommended to use the table materialization method for models queried by BI tools or models with slow operations such as downstream queries and conversions.\n"})}),"\n",(0,r.jsx)(n.p,{children:"config:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"models:\n  <resource-path>:\n    +materialized: table\n    +duplicate_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or write in the model file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jinja",children:'{{ config(\n    materialized = "table",\n    duplicate_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    ]\n) }}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The details of the above configuration items are as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"item"}),(0,r.jsx)(n.th,{children:"description"}),(0,r.jsx)(n.th,{children:"Required?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"materialized"})}),(0,r.jsx)(n.td,{children:"The materialized form of the table (Doris Duplicate table)"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"duplicate_key"})}),(0,r.jsx)(n.td,{children:"Doris Duplicate key"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"replication_num"})}),(0,r.jsx)(n.td,{children:"Number of table replicas"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"partition_by"})}),(0,r.jsx)(n.td,{children:"Table partition column"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"partition_type"})}),(0,r.jsxs)(n.td,{children:["Table partition type, ",(0,r.jsx)(n.code,{children:"range"})," or ",(0,r.jsx)(n.code,{children:"list"}),".(default: ",(0,r.jsx)(n.code,{children:"RANGE"}),")"]}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"partition_by_init"})}),(0,r.jsx)(n.td,{children:"Initialized table partitions"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distributed_by"})}),(0,r.jsx)(n.td,{children:"Table distributed column"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"buckets"})}),(0,r.jsx)(n.td,{children:"Bucket size"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"properties"})}),(0,r.jsx)(n.td,{children:"Doris table properties"}),(0,r.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"incremental",children:"Incremental"}),"\n",(0,r.jsxs)(n.p,{children:["Based on the incremental model results of the last run of dbt, records are incrementally inserted or updated into the table.\nThere are two ways to realize the increment of doris. ",(0,r.jsx)(n.code,{children:"incremental_strategy"})," has two incremental strategies:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"insert_overwrite"}),": Depends on the doris ",(0,r.jsx)(n.code,{children:"unique"})," model. If there is an incremental requirement, specify the materialization as incremental when initializing the data of the model, and aggregate by specifying the aggregation column to achieve incremental data coverage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"append"}),": Depends on the doris ",(0,r.jsx)(n.code,{children:"duplicate"})," model, it only appends incremental data and does not involve modifying any historical data. So no need to specify unique_key."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Advantages: Significantly reduces build time by only converting new records.\nDisadvantages: incremental mode requires additional configuration, which is an advanced usage of dbt, and requires the support of complex scenarios and the adaptation of corresponding components.\nRecommendation: The incremental model is best for event-based scenarios or when dbt runs become too slow\n"})}),"\n",(0,r.jsx)(n.p,{children:"config:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"models:\n  <resource-path>:\n    +materialized: incremental\n    +incremental_strategy: <strategy>\n    +unique_key: [ <column-name>, ... ],\n    +replication_num: int,\n    +partition_by: [ <column-name>, ... ],\n    +partition_type: <engine-type>,\n    +partition_by_init: [<pertition-init>, ... ]\n    +distributed_by: [ <column-name>, ... ],\n    +buckets: int | 'auto',\n    +properties: {<key>:<value>,...}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or write in the model file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jinja",children:'{{ config(\n    materialized = "incremental",\n    incremental_strategy = "<strategy>"\n    unique_key = [ "<column-name>", ... ],\n    replication_num = "<int>"\n    partition_by = [ "<column-name>", ... ],\n    partition_type = "<engine-type>",\n    partition_by_init = ["<pertition-init>", ... ]\n    distributed_by = [ "<column-name>", ... ],\n    buckets = "<int>" | "auto",\n    properties = {"<key>":"<value>",...}\n      ...\n    ]\n) }}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The details of the above configuration items are as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"item"}),(0,r.jsx)(n.th,{children:"description"}),(0,r.jsx)(n.th,{children:"Required?"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"materialized"})}),(0,r.jsx)(n.td,{children:"The materialized form of the table (Doris Duplicate/Unique table)"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"incremental_strategy"})}),(0,r.jsx)(n.td,{children:"Incremental_strategy"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"unique_key"})}),(0,r.jsx)(n.td,{children:"Doris Unique key"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"replication_num"})}),(0,r.jsx)(n.td,{children:"Number of table replicas"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"partition_by"})}),(0,r.jsx)(n.td,{children:"Table partition column"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"partition_type"})}),(0,r.jsxs)(n.td,{children:["Table partition type, ",(0,r.jsx)(n.code,{children:"range"})," or ",(0,r.jsx)(n.code,{children:"list"}),".(default: ",(0,r.jsx)(n.code,{children:"RANGE"}),")"]}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"partition_by_init"})}),(0,r.jsx)(n.td,{children:"Initialized table partitions"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distributed_by"})}),(0,r.jsx)(n.td,{children:"Table distributed column"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"buckets"})}),(0,r.jsx)(n.td,{children:"Bucket size"}),(0,r.jsx)(n.td,{children:"Optional"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"properties"})}),(0,r.jsx)(n.td,{children:"Doris table properties"}),(0,r.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"dbt-doris-adapter-seed",children:"dbt-doris adapter seed"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.getdbt.com/faqs/seeds/build-one-seed",children:(0,r.jsx)(n.code,{children:"seed"})})," is a functional module used to load data files such as csv. It is a way to load files into the library and participate in model building, but there are the following precautions:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Seeds should not be used to load raw data (for example, large CSV exports from a production database)."}),"\n",(0,r.jsx)(n.li,{children:"Since seeds are version controlled, they are best suited to files that contain business-specific logic, for example a list of country codes or user IDs of employees."}),"\n",(0,r.jsxs)(n.li,{children:["Loading CSVs using dbt's seed functionality is not performant for large files. Consider using ",(0,r.jsx)(n.code,{children:"streamload"})," to load these CSVs into doris."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Users can see the seeds directory under the dbt project directory, upload the csv file and seed configuration file in it and run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:" dbt seed --select seed_name\n"})}),"\n",(0,r.jsx)(n.p,{children:"Common seed configuration file writing method supports the definition of column types:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"seeds:\n  seed_name: \n    config: \n      schema: demo_seed \n      full_refresh: true\n      replication_num: 1\n      column_types:\n        id: bigint\n        phone: varchar(32)\n        ip: varchar(15)\n        name: varchar(20)\n        cost: DecimalV3(19,10)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsx)(n.h3,{id:"view-model-sample-reference",children:"View Model Sample Reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(materialized='view') }}\n\nselect\n    u.user_id,\n    max(o.create_time) as create_time,\n    sum (o.cost) as balance\nfrom {{ ref('sell_order') }} as o\nleft join {{ ref('sell_user') }} as u\non u.account_id=o.account_id\ngroup by u.user_id\norder by u.user_id\n"})}),"\n",(0,r.jsx)(n.h3,{id:"table-model-sample-reference",children:"Table Model Sample Reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(materialized='table') }}\n\nselect\n    u.user_id,\n    max(o.create_time) as create_time,\n    sum (o.cost) as balance\nfrom {{ ref('sell_order') }} as o\nleft join {{ ref('sell_user') }} as u\non u.account_id=o.account_id\ngroup by u.user_id\norder by u.user_id\n"})}),"\n",(0,r.jsx)(n.h3,{id:"incremental-model-sample-reference-duplicate-mode",children:"Incremental model sample reference (duplicate mode)"}),"\n",(0,r.jsx)(n.p,{children:"Create a table in duplicate mode, without data aggregation, and without specifying unique_key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    replication_num=1\n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect * from source_data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"incremental-model-sample-reference-unique-mode",children:"Incremental model sample reference (unique mode)"}),"\n",(0,r.jsx)(n.p,{children:"Create a table in unique mode, data aggregation, unique_key must be specified"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(\nmaterialized='incremental', \nunique_key=['account_id','create_time']\n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect * from source_data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"incremental-model-full-refresh-sample-reference",children:"Incremental model full refresh sample reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    full_refresh = true\n)}}\n\nselect * from\n {{ source('dbt_source', 'sell_user') }}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-of-setting-bucketing-rules",children:"Example of setting bucketing rules"}),"\n",(0,r.jsx)(n.p,{children:"Here buckets can be filled with auto or a positive integer, representing automatic bucketing and setting a fixed number of buckets respectively."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    unique_key=['account_id',\"create_time\"], \n    distributed_by=['account_id'], \n    buckets='auto' \n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where\n    create_time > (select max(create_time) from {{this}})\n{% endif %}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-the-number-of-replicas-example-reference",children:"Setting the number of replicas example reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(\n    materialized='table', \n    replication_num=1\n)}}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect * from source_data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"dynamic-partition-sample-reference",children:"Dynamic partition sample reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'{{ config(\n    materialized=\'incremental\', \n    partition_by = \'create_time\',\n    partition_type = \'range\', \n        -- The properties here are the properties in the create table statement, which contains the configuration related to dynamic partitioning    \n    properties = {\n        "dynamic_partition.time_unit":"DAY",\n        "dynamic_partition.end":"8",\n        "dynamic_partition.prefix":"p",\n        "dynamic_partition.buckets":"4",\n        "dynamic_partition.create_history_partition":"true",\n        "dynamic_partition.history_partition_num":"3"\n    }\n) }}\n\nwith source_data as (\n    select\n        *\n    from {{ ref(\'sell_order2\') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where    \n    create_time = DATE_SUB(CURDATE(), INTERVAL 1 DAY)\n{% endif %}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"conventional-partition-sample-reference",children:"Conventional partition sample reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'{{ config(\n    materialized=\'incremental\', \n    partition_by = \'create_time\',\n    partition_type = \'range\',  \n        -- partition_by_init here refers to the historical partitions for creating partition tables. The historical partitions of the current doris version need to be manually specified.    \n    partition_by_init = [\n        "PARTITION `p20240601` VALUES [(\\"2024-06-01\\"),  (\\"2024-06-02\\"))",\n        "PARTITION `p20240602` VALUES [(\\"2024-06-02\\"),  (\\"2024-06-03\\"))"\n    ]\n )}}\n\nwith source_data as (\n    select\n        *\n    from {{ ref(\'sell_order2\') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where\n    -- If the my_date variable is provided, use this path (via the dbt run --vars \'{"my_date": "\\"2024-06-03\\""}\' command). If the my_date variable is not provided (directly using dbt run), use the day before the current date. For the incremental selection here, it is recommended to directly use doris\'s CURDATE() function, which is also a common path in production environments.\n    create_time = {{ var(\'my_date\' , \'DATE_SUB(CURDATE(), INTERVAL 1 DAY)\') }} \n\n{% endif %}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"batch-date-setting-parameter-sample-reference",children:"Batch date setting parameter sample reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"{{ config(\n    materialized='incremental', \n    partition_by = 'create_time',\n    partition_type = 'range',\n    ...\n)}}\n\nwith source_data as (\n    select\n        *\n    from {{ ref('sell_order2') }}\n)\n\nselect\n    *\n    from source_data\n\n{% if is_incremental() %}\n    where\n    -- If the my_date variable is provided, use this path (via the dbt run --vars '{\"my_date\": \"\\\"2024-06-03\\\"\"}' command). If the my_date variable is not provided (directly using dbt run), use the day before the current date. For the incremental selection here, it is recommended to directly use doris's CURDATE() function, which is also a common path in production environments.\n    create_time = {{ var('my_date' , 'DATE_SUB(CURDATE(), INTERVAL 1 DAY)') }} \n\n{% endif %}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var i=t(667294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);