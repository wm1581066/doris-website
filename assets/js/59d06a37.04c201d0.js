"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["909874"],{904061:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"data-operate/export/outfile","title":"Export Query Result","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/data-operate/export/outfile.md","sourceDirName":"data-operate/export","slug":"/data-operate/export/outfile","permalink":"/docs/1.2/data-operate/export/outfile","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Export Query Result","language":"en"},"sidebar":"docs","previous":{"title":"Data export","permalink":"/docs/1.2/data-operate/export/export-manual"},"next":{"title":"Use mysqldump data to export table structure or data","permalink":"/docs/1.2/data-operate/export/export_with_mysql_dump"}}'),o=n("785893"),l=n("250065");let s={title:"Export Query Result",language:"en"},i="Export Query Result",a={},c=[{value:"Example",id:"example",level:2},{value:"Export to HDFS",id:"export-to-hdfs",level:3},{value:"Export to local file",id:"export-to-local-file",level:3},{value:"Concurrent export",id:"concurrent-export",level:2},{value:"How to verify that the result set is exported concurrently",id:"how-to-verify-that-the-result-set-is-exported-concurrently",level:3},{value:"Usage example",id:"usage-example",level:2},{value:"Return result",id:"return-result",level:2},{value:"Notice",id:"notice",level:2},{value:"More Help",id:"more-help",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"export-query-result",children:"Export Query Result"})}),"\n",(0,o.jsxs)(t.p,{children:["This document describes how to use the  ",(0,o.jsx)(t.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",children:"SELECT INTO OUTFILE"}),"  command to export query results."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.h3,{id:"export-to-hdfs",children:"Export to HDFS"}),"\n",(0,o.jsxs)(t.p,{children:["Export simple query results to the file ",(0,o.jsx)(t.code,{children:"hdfs://path/to/result.txt"}),", specifying the export format as CSV."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n"\n);\n'})}),"\n",(0,o.jsx)(t.h3,{id:"export-to-local-file",children:"Export to local file"}),"\n",(0,o.jsxs)(t.p,{children:["When exporting to a local file, you need to configure ",(0,o.jsx)(t.code,{children:"enable_outfile_to_local=true"})," in fe.conf first"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'select * from tbl1 limit 10 \nINTO OUTFILE "file:///home/work/path/result_";\n'})}),"\n",(0,o.jsxs)(t.p,{children:["For more usage, see ",(0,o.jsx)(t.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",children:"OUTFILE documentation"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"concurrent-export",children:"Concurrent export"}),"\n",(0,o.jsx)(t.p,{children:"By default, the export of the query result set is non-concurrent, that is, a single point of export. If the user wants the query result set to be exported concurrently, the following conditions need to be met:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["session variable 'enable_parallel_outfile' to enable concurrent export: ",(0,o.jsx)(t.code,{children:"set enable_parallel_outfile = true;"})]}),"\n",(0,o.jsx)(t.li,{children:"The export method is S3, HDFS instead of using a broker"}),"\n",(0,o.jsx)(t.li,{children:"The query can meet the needs of concurrent export, for example, the top level does not contain single point nodes such as sort. (I will give an example later, which is a query that does not export the result set concurrently)"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If the above three conditions are met, the concurrent export query result set can be triggered. Concurrency = ",(0,o.jsx)(t.code,{children:"be_instacne_num * parallel_fragment_exec_instance_num"})]}),"\n",(0,o.jsx)(t.h3,{id:"how-to-verify-that-the-result-set-is-exported-concurrently",children:"How to verify that the result set is exported concurrently"}),"\n",(0,o.jsx)(t.p,{children:"After the user enables concurrent export through the session variable setting, if you want to verify whether the current query can be exported concurrently, you can use the following method."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'explain select xxx from xxx where xxx into outfile "s3://xxx" format as csv properties ("AWS_ENDPOINT" = "xxx", ...);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["After explaining the query, Doris will return the plan of the query. If you find that ",(0,o.jsx)(t.code,{children:"RESULT FILE SINK"})," appears in ",(0,o.jsx)(t.code,{children:"PLAN FRAGMENT 1"}),", it means that the export concurrency has been opened successfully.\nIf ",(0,o.jsx)(t.code,{children:"RESULT FILE SINK"})," appears in ",(0,o.jsx)(t.code,{children:"PLAN FRAGMENT 0"}),", it means that the current query cannot be exported concurrently (the current query does not satisfy the three conditions of concurrent export at the same time)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Planning example for concurrent export:\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,o.jsxs)(t.p,{children:["For details, please refer to ",(0,o.jsx)(t.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",children:"OUTFILE Document"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"return-result",children:"Return result"}),"\n",(0,o.jsx)(t.p,{children:"The command is a synchronization command. The command returns, which means the operation is over.\nAt the same time, a row of results will be returned to show the exported execution result."}),"\n",(0,o.jsx)(t.p,{children:"If it exports and returns normally, the result is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n1 row in set (0.05 sec)\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"FileNumber: The number of files finally generated."}),"\n",(0,o.jsx)(t.li,{children:"TotalRows: The number of rows in the result set."}),"\n",(0,o.jsx)(t.li,{children:"FileSize: The total size of the exported file. Unit byte."}),"\n",(0,o.jsx)(t.li,{children:"URL: If it is exported to a local disk, the Compute Node to which it is exported is displayed here."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If a concurrent export is performed, multiple rows of data will be returned."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         3 |        7 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n|          1 |         2 |        4 | file:///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n2 rows in set (2.218 sec)\n"})}),"\n",(0,o.jsx)(t.p,{children:"If the execution is incorrect, an error message will be returned, such as:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notice",children:"Notice"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The CSV format does not support exporting binary types, such as BITMAP and HLL types. These types will be output as ",(0,o.jsx)(t.code,{children:"\\N"}),", which is null."]}),"\n",(0,o.jsx)(t.li,{children:"If you do not enable concurrent export, the query result is exported by a single BE node in a single thread. Therefore, the export time and the export result set size are positively correlated. Turning on concurrent export can reduce the export time."}),"\n",(0,o.jsx)(t.li,{children:"The export command does not check whether the file and file path exist. Whether the path will be automatically created or whether the existing file will be overwritten is entirely determined by the semantics of the remote storage system."}),"\n",(0,o.jsx)(t.li,{children:"If an error occurs during the export process, the exported file may remain on the remote storage system. Doris will not clean these files. The user needs to manually clean up."}),"\n",(0,o.jsxs)(t.li,{children:["The timeout of the export command is the same as the timeout of the query. It can be set by ",(0,o.jsx)(t.code,{children:"SET query_timeout = xxx"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"For empty result query, there will be an empty file."}),"\n",(0,o.jsxs)(t.li,{children:["File spliting will ensure that a row of data is stored in a single file. Therefore, the size of the file is not strictly equal to ",(0,o.jsx)(t.code,{children:"max_file_size"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["For functions whose output is invisible characters, such as BITMAP and HLL types, the output is ",(0,o.jsx)(t.code,{children:"\\N"}),", which is NULL."]}),"\n",(0,o.jsxs)(t.li,{children:["At present, the output type of some geo functions, such as ",(0,o.jsx)(t.code,{children:"ST_Point"})," is VARCHAR, but the actual output value is an encoded binary character. Currently these functions will output garbled characters. For geo functions, use ",(0,o.jsx)(t.code,{children:"ST_AsText"})," for output."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"more-help",children:"More Help"}),"\n",(0,o.jsxs)(t.p,{children:["For more detailed syntax and best practices for using OUTFILE, please refer to the ",(0,o.jsx)(t.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",children:"OUTFILE"})," command manual, you can also More help information can be obtained by typing ",(0,o.jsx)(t.code,{children:"HELP OUTFILE"})," at the command line of the MySql client."]})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var r=n(667294);let o={},l=r.createContext(o);function s(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);