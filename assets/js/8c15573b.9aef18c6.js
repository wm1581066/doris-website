"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["656762"],{569412:function(e,t,a){a.r(t),a.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>n});var i=JSON.parse('{"id":"data-operate/import/migrate-data-from-other-olap","title":"Migrating Data from Other OLAP","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/data-operate/import/migrate-data-from-other-olap.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/migrate-data-from-other-olap","permalink":"/docs/2.0/data-operate/import/migrate-data-from-other-olap","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Migrating Data from Other OLAP","language":"en"},"sidebar":"docs","previous":{"title":"Loading Data in JSON Format","permalink":"/docs/2.0/data-operate/import/load-json-format"},"next":{"title":"Loading Transaction and Atomicity","permalink":"/docs/2.0/data-operate/import/load-atomicity"}}'),o=a("785893"),r=a("250065");let n={title:"Migrating Data from Other OLAP",language:"en"},s=void 0,l={},d=[{value:"X2Doris",id:"x2doris",level:2},{value:"Support multiple data sources",id:"support-multiple-data-sources",level:3},{value:"Auto table creation",id:"auto-table-creation",level:3},{value:"High speed &amp; stability",id:"high-speed--stability",level:3}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"To migrate data from other OLAP systems to Doris, you have a variety of options:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'For systems like Hive/Iceberg/Hudi, you can leverage Multi-Catalog to map them as external tables and then use "Insert Into" to import the data into Doris.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You can export data from the OLAP system into formats like CSV, and then import the data files into Doris."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You can also leverage the connectors of the OLAP systems, use tools like Spark / Flink, and then call the corresponding Doris Connector to write data into Doris."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In addition to the three methods mentioned above, VeloDB offers a free visual data migration tool called ",(0,o.jsx)(t.a,{href:"https://www.velodb.io/download/tools",children:"X2Doris"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["X2Doris is a core tool specifically for migrating various offline data to Apache Doris. This tool integrates ",(0,o.jsx)(t.code,{children:"automatic Doris table creation"})," and ",(0,o.jsx)(t.code,{children:"data migration"}),". Currently, it supports the migration of data from Apache Doris/Hive/Kudu, and StarRocks databases to Doris. The entire process is visualized on a platform, making it very simple and easy to use, thereby lowering the threshold for synchronizing data to Doris."]}),"\n",(0,o.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,o.jsx)(t.p,{children:"X2Doris are not maintained or endorsed by the Apache Doris, which is overseen by the Committers and the Doris PMC. Their use is entirely at your discretion, and the community is not responsible for verifying the licenses or validity of these tools."})}),"\n",(0,o.jsx)(t.h2,{id:"x2doris",children:"X2Doris"}),"\n",(0,o.jsx)(t.h3,{id:"support-multiple-data-sources",children:"Support multiple data sources"}),"\n",(0,o.jsx)(t.p,{children:"As a one-stop data migration tool, X2Doris supports Apache Hive, Apache Kudu, StarRocks, and Apache Doris itself as data source. What's more, there are more data sources such as Greenplum and Druid that are under development and will be released subsequently. Among them, the Hive version already supports Hive 1.x and 2.x, while Doris, StarRocks, Kudu, and other data sources also support multiple different versions."}),"\n",(0,o.jsx)(t.p,{children:"With X2Doris, users can build a complete database migration link from other OLAP systems to Apache Doris, and can also achieve data backup and recovery between different Doris clusters."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"x2doris-Support multiple data sources",src:a(158317).Z+"",width:"3600",height:"2016"})}),"\n",(0,o.jsx)(t.h3,{id:"auto-table-creation",children:"Auto table creation"}),"\n",(0,o.jsx)(t.p,{children:"One of the biggest challenges in data migration is how to create corresponding target tables in Apache Doris for the source tables that need to be migrated. In real business scenarios, there are often thousands of tables stored in Hive, and it would be extremely inefficient and impractical for users to manually create tables and convert corresponding DDL statements."}),"\n",(0,o.jsx)(t.p,{children:"X2Doris has been adapted for this scenario. Taking Hive table migration as an example, when migrating Hive tables, X2Doris automatically creates Duplicate Key model tables (which can also be manually modified) in Apache Doris and reads the metadata information of Hive tables. It automatically identifies partition fields based on field names and types, and if partitions are detected, it prompts for partition mapping. Finally, it directly generates the corresponding Doris target table DDL."}),"\n",(0,o.jsx)(t.p,{children:"When the upstream data source is Doris/StarRocks, X2Doris automatically parses the table model based on the source table information, maps the source table field types to the corresponding target field types, and identifies and processes upstream properties parameters, converting them into attribute parameters for the corresponding target table. In addition, X2Doris has also enhanced support for complex types, enabling data migration for Array, Map, and Bitmap types."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Auto table creation",src:a(473587).Z+"",width:"2546",height:"1642"})}),"\n",(0,o.jsx)(t.h3,{id:"high-speed--stability",children:"High speed & stability"}),"\n",(0,o.jsx)(t.p,{children:"For data writing, X2Doris has specifically optimized the reading process. By optimizing the data batching logic, it further reduces memory usage. Additionally, significant improvements and enhancements have been made to Stream Load write requests, optimizing memory usage and release, further enhancing the speed and stability of data migration."}),"\n",(0,o.jsx)(t.p,{children:"Compared to other similar migration tools, X2Doris offers a performance advantage of approximately 2-10 times. For example, when using a single machine with 1G of memory, other tools take approximately 90 seconds to synchronize 50 million rows of data in full, while X2Doris completes the task in less than 50 seconds, achieving a nearly 100% performance improvement."}),"\n",(0,o.jsx)(t.p,{children:"In a practical large-scale log data migration scenario, with individual data records averaging 1KB in size, a single table containing nearly 100 million records, and a total storage space of approximately 90 GB, X2Doris can complete the full table migration in just 2 minutes, with an average write speed of nearly 800 MB/s."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"High speed &amp; stability",src:a(665132).Z+"",width:"2552",height:"1722"})})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},473587:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/auto-table-creation-ac06668f030ba1420b2f8ef996d50836.jpeg"},665132:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/high-speed-stability-189feb02fa1647afc592b5ed6a98ec59.jpeg"},158317:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/x2doris-22675e76bb657219b9ba926061ec38e5.jpg"},250065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return n}});var i=a(667294);let o={},r=i.createContext(o);function n(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);