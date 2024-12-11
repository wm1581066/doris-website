"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["752134"],{294059:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"data-operate/import/load-json-format","title":"Loading Data in JSON Format","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/data-operate/import/load-json-format.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/load-json-format","permalink":"/docs/2.0/data-operate/import/load-json-format","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Loading Data in JSON Format","language":"en"},"sidebar":"docs","previous":{"title":"MySQL Load","permalink":"/docs/2.0/data-operate/import/mysql-load-manual"},"next":{"title":"Migrating Data from Other OLAP","permalink":"/docs/2.0/data-operate/import/migrate-data-from-other-olap"}}'),s=a("785893"),i=a("250065");let r={title:"Loading Data in JSON Format",language:"en"},l=void 0,o={},d=[{value:"Supported import methods",id:"supported-import-methods",level:2},{value:"Supported JSON Formats",id:"supported-json-formats",level:2},{value:"streaming_load_json_max_mb parameters",id:"streaming_load_json_max_mb-parameters",level:3},{value:"fuzzy_parse parameters",id:"fuzzy_parse-parameters",level:3},{value:"JSON Path",id:"json-path",level:2},{value:"JSON Path and Columns",id:"json-path-and-columns",level:2},{value:"JSON root",id:"json-root",level:2},{value:"NULL and Default values",id:"null-and-default-values",level:2},{value:"Application example",id:"application-example",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Doris supports importing data in JSON format. This document mainly describes the precautions when importing data in JSON format."}),"\n",(0,s.jsx)(n.h2,{id:"supported-import-methods",children:"Supported import methods"}),"\n",(0,s.jsx)(n.p,{children:"Currently, only the following import methods support data import in JSON format:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Through ",(0,s.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-functions/table-valued-functions/s3",children:"S3 table function"})," import statement: insert into table select * from S3();"]}),"\n",(0,s.jsxs)(n.li,{children:["Import the local JSON format file through ",(0,s.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Subscribe and consume JSON format in Kafka via ",(0,s.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",children:"ROUTINE LOAD"})," information."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Other ways of importing data in JSON format are not currently supported."}),"\n",(0,s.jsx)(n.h2,{id:"supported-json-formats",children:"Supported JSON Formats"}),"\n",(0,s.jsx)(n.p,{children:"Currently only the following two JSON formats are supported:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Multiple rows of data represented by Array"}),"\n",(0,s.jsx)(n.p,{children:"JSON format with Array as root node. Each element in the Array represents a row of data to be imported, usually an Object. An example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"This method is typically used for Stream Load import methods to represent multiple rows of data in a batch of imported data."}),"\n",(0,s.jsxs)(n.p,{children:["This method must be used with the setting ",(0,s.jsx)(n.code,{children:"strip_outer_array=true"}),". Doris will expand the array when parsing, and then parse each Object in turn as a row of data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A single row of data represented by Object\nJSON format with Object as root node. The entire Object represents a row of data to be imported. An example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : "beijing"}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This method is usually used for the Routine Load import method, such as representing a message in Kafka, that is, a row of data."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Multiple lines of Object data separated by a fixed delimiter"}),"\n",(0,s.jsx)(n.p,{children:"A row of data represented by Object represents a row of data to be imported. The example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : "beijing"}\n{ "id": 456, "city" : "shanghai"}\n...\n'})}),"\n",(0,s.jsx)(n.p,{children:"This method is typically used for Stream Load import methods to represent multiple rows of data in a batch of imported data."}),"\n",(0,s.jsxs)(n.p,{children:["This method must be used with the setting ",(0,s.jsx)(n.code,{children:"read_json_by_line=true"}),", the special delimiter also needs to specify the ",(0,s.jsx)(n.code,{children:"line_delimiter"})," parameter, the default is ",(0,s.jsx)(n.code,{children:"\\n"}),". When Doris parses, it will be separated according to the delimiter, and then parse each line of Object as a line of data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"streaming_load_json_max_mb-parameters",children:"streaming_load_json_max_mb parameters"}),"\n",(0,s.jsx)(n.p,{children:"Some data formats, such as JSON, cannot be split. Doris must read all the data into the memory before parsing can begin. Therefore, this value is used to limit the maximum amount of data that can be loaded in a single Stream load."}),"\n",(0,s.jsxs)(n.p,{children:["The default value is 100, The unit is MB, modify this parameter by referring to the ",(0,s.jsx)(n.a,{href:"/docs/2.0/admin-manual/config/be-config",children:"BE configuration"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"fuzzy_parse-parameters",children:"fuzzy_parse parameters"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",children:"STREAM LOAD"})," ",(0,s.jsx)(n.code,{children:"fuzzy_parse"})," parameter can be added to speed up JSON Data import efficiency."]}),"\n",(0,s.jsxs)(n.p,{children:["This parameter is usually used to import the format of ",(0,s.jsx)(n.strong,{children:"multi-line data represented by Array"}),", so it is generally used with ",(0,s.jsx)(n.code,{children:"strip_outer_array=true"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This feature requires that each row of data in the Array has exactly the same order of fields. Doris will only parse according to the field order of the first row, and then access the subsequent data in the form of subscripts. This method can improve the import efficiency by 3-5X."}),"\n",(0,s.jsx)(n.h2,{id:"json-path",children:"JSON Path"}),"\n",(0,s.jsx)(n.p,{children:"Doris supports extracting data specified in JSON through JSON Path."}),"\n",(0,s.jsx)(n.p,{children:"**Note: Because for Array type data, Doris will expand the array first, and finally process it in a single line according to the Object format. So the examples later in this document are all explained with Json data in a single Object format. **"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"do not specify JSON Path"}),"\n",(0,s.jsx)(n.p,{children:"If JSON Path is not specified, Doris will use the column name in the table to find the element in Object by default. An example is as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["The table contains two columns: ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"city"})]}),"\n",(0,s.jsx)(n.p,{children:"The JSON data is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : "beijing"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then Doris will use ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"city"})," for matching, and get the final data ",(0,s.jsx)(n.code,{children:"123"})," and ",(0,s.jsx)(n.code,{children:"beijing"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If the JSON data is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "name" : "beijing"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then use ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"city"})," for matching, and get the final data ",(0,s.jsx)(n.code,{children:"123"})," and ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify JSON Path"}),"\n",(0,s.jsx)(n.p,{children:"Specify a set of JSON Path in the form of a JSON data. Each element in the array represents a column to extract. An example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'["$.id", "$.name"]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'["$.id.sub_id", "$.name[0]", "$.city[0]"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Doris will use the specified JSON Path for data matching and extraction."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"matches non-primitive types"}),"\n",(0,s.jsx)(n.p,{children:"The values that are finally matched in the preceding examples are all primitive types, such as integers, strings, and so on. Doris currently does not support composite types, such as Array, Map, etc. So when a non-basic type is matched, Doris will convert the type to a string in Json format and import it as a string type. An example is as follows:"}),"\n",(0,s.jsx)(n.p,{children:"The JSON data is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["JSON Path is ",(0,s.jsx)(n.code,{children:'["$.city"]'}),". The matched elements are:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "name" : "beijing", "region" : "haidian" }\n'})}),"\n",(0,s.jsx)(n.p,{children:"The element will be converted to a string for subsequent import operations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"\"{'name':'beijing','region':'haidian'}\"\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"match failed"}),"\n",(0,s.jsxs)(n.p,{children:["When the match fails, ",(0,s.jsx)(n.code,{children:"null"})," will be returned. An example is as follows:"]}),"\n",(0,s.jsx)(n.p,{children:"The JSON data is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "name" : "beijing"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["JSON Path is ",(0,s.jsx)(n.code,{children:'["$.id", "$.info"]'}),". The matched elements are ",(0,s.jsx)(n.code,{children:"123"})," and ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Doris currently does not distinguish between null values represented in JSON data and null values produced when a match fails. Suppose the JSON data is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "name" : null }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The same result would be obtained with the following two JSON Paths: ",(0,s.jsx)(n.code,{children:"123"})," and ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'["$.id", "$.name"]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'["$.id", "$.info"]\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Exact match failed"}),"\n",(0,s.jsx)(n.p,{children:"In order to prevent misoperation caused by some parameter setting errors. When Doris tries to match a row of data, if all columns fail to match, it considers this to be an error row. Suppose the Json data is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "city" : "beijing" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the JSON Path is written incorrectly as (or if the JSON Path is not specified, the columns in the table do not contain ",(0,s.jsx)(n.code,{children:"id"})," and ",(0,s.jsx)(n.code,{children:"city"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'["$.ad", "$.infa"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["would cause the exact match to fail, and the line would be marked as an error line instead of yielding ",(0,s.jsx)(n.code,{children:"null, null"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"json-path-and-columns",children:"JSON Path and Columns"}),"\n",(0,s.jsx)(n.p,{children:"JSON Path is used to specify how to extract data in JSON format, while Columns specifies the mapping and conversion relationship of columns. Both can be used together."}),"\n",(0,s.jsx)(n.p,{children:"In other words, it is equivalent to rearranging the columns of a JSON format data according to the column order specified in JSON Path through JSON Path. After that, you can map the rearranged source data to the columns of the table through Columns. An example is as follows:"}),"\n",(0,s.jsx)(n.p,{children:"Data content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"k1": 1, "k2": 2}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Table Structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"k2 int, k1 int\n"})}),"\n",(0,s.jsx)(n.p,{children:"Import statement 1 (take Stream Load as an example):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http:/ /127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"In import statement 1, only JSON Path is specified, and Columns is not specified. The role of JSON Path is to extract the JSON data in the order of the fields in the JSON Path, and then write it in the order of the table structure. The final imported data results are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1 | k2 |\n+------+------+\n| 2 | 1 |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.p,{children:'You can see that the actual k1 column imports the value of the "k2" column in the JSON data. This is because the field name in JSON is not equivalent to the field name in the table structure. We need to explicitly specify the mapping between the two.'}),"\n",(0,s.jsx)(n.p,{children:"Import statement 2:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1 " -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Compared with the import statement 1, the Columns field is added here to describe the mapping relationship of the columns, in the order of ",(0,s.jsx)(n.code,{children:"k2, k1"}),". That is, after extracting in the order of fields in JSON Path, specify the value of column k2 in the table for the first column, and the value of column k1 in the table for the second column. The final imported data results are as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1 | k2 |\n+------+------+\n| 1 | 2 |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Of course, as with other imports, column transformations can be performed in Columns. An example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1 , k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"The above example will import the value of k1 multiplied by 100. The final imported data results are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1 | k2 |\n+------+------+\n| 100 | 2 |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"json-root",children:"JSON root"}),"\n",(0,s.jsx)(n.p,{children:"Doris supports extracting data specified in JSON through JSON root."}),"\n",(0,s.jsx)(n.p,{children:"**Note: Because for Array type data, Doris will expand the array first, and finally process it in a single line according to the Object format. So the examples later in this document are all explained with Json data in a single Object format. **"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"do not specify JSON root"}),"\n",(0,s.jsx)(n.p,{children:"If JSON root is not specified, Doris will use the column name in the table to find the element in Object by default. An example is as follows:"}),"\n",(0,s.jsxs)(n.p,{children:["The table contains two columns: ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"city"})]}),"\n",(0,s.jsx)(n.p,{children:"The JSON data is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": 123, "name" : { "id" : "321", "city" : "shanghai" }}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then use ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"city"})," for matching, and get the final data ",(0,s.jsx)(n.code,{children:"123"})," and ",(0,s.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify JSON root"}),"\n",(0,s.jsx)(n.p,{children:"When the import data format is JSON, you can specify the root node of the JSON data through json_root. Doris will extract the elements of the root node through json_root for parsing. Default is empty."}),"\n",(0,s.jsxs)(n.p,{children:["Specify JSON root ",(0,s.jsx)(n.code,{children:'-H "json_root: $.name"'}),". The matched elements are:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id" : "321", "city" : "shanghai" }\n'})}),"\n",(0,s.jsx)(n.p,{children:"The element will be treated as new JSON for subsequent import operations,and get the final data 321 and shanghai"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"null-and-default-values",children:"NULL and Default values"}),"\n",(0,s.jsx)(n.p,{children:"Example data is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"}\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The table structure is: ",(0,s.jsx)(n.code,{children:'k1 int null, k2 varchar(32) null default "x"'})]}),"\n",(0,s.jsx)(n.p,{children:"The import statement is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"The import results that users may expect are as follows, that is, for missing columns, fill in the default values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1 | k2 |\n+------+------+\n| 1 | a |\n+------+------+\n| 2 | x |\n+------+------+\n|3|c|\n+------+------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"But the actual import result is as follows, that is, for the missing column, NULL is added."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+------+------+\n| k1 | k2 |\n+------+------+\n| 1 | a |\n+------+------+\n| 2 | NULL |\n+------+------+\n|3|c|\n+------+------+\n"})}),"\n",(0,s.jsx)(n.p,{children:'This is because Doris doesn\'t know "the missing column is column k2 in the table" from the information in the import statement. If you want to import the above data according to the expected result, the import statement is as follows:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]" - H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2, \'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.h2,{id:"application-example",children:"Application example"}),"\n",(0,s.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,s.jsx)(n.p,{children:"Because of the inseparability of the JSON format, when using Stream Load to import a JSON format file, the file content will be fully loaded into the memory before processing begins. Therefore, if the file is too large, it may take up more memory."}),"\n",(0,s.jsx)(n.p,{children:"Suppose the table structure is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"id INT NOT NULL,\ncity VARHCAR NULL,\ncode INT NULL\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import a single row of data 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"id": 100, "city": "beijing", "code" : 1}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"do not specify JSON Path"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"100 beijing 1\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify JSON Path"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" - T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"100 beijing 1\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import a single row of data 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"id": 100, "content": {"city": "beijing", "code": 1}}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify JSON Path"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\ "]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"100 beijing 1\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import multiple rows of data as Array"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        },\n        "code" : 6\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify JSON Path"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" - H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'100 beijing 1\n101 shanghai NULL\n102 tianjin 3\n103 chongqing 4\n104 ["zhejiang","guangzhou"] 5\n105 {"order1":["guangzhou"]} 6\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import multi-line data as multi-line Object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"id": 100, "city": "beijing", "code" : 1}\n{"id": 101, "city": "shanghai"}\n{"id": 102, "city": "tianjin", "code" : 3}\n{"id": 103, "city": "chongqing", "code" : 4}\n'})}),"\n",(0,s.jsx)(n.p,{children:"StreamLoad import:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd -H "format: json" -H "read_json_by_line: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"   Import result:\n\n100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n"})}),"\n",(0,s.jsx)(n.p,{children:"5. Transform the imported data"}),"\n",(0,s.jsxs)(n.p,{children:["The data is still the multi-line data in Example 3, and now it is necessary to add 1 to the ",(0,s.jsx)(n.code,{children:"code"})," column in the imported data before importing."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" - H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'100 beijing 2\n101 shanghai NULL\n102 tianjin 4\n103 chongqing 5\n104 ["zhejiang","guangzhou"] 6\n105 {"order1":["guangzhou"]} 7\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Import Array by JSON\nSince the Rapidjson handles decimal and largeint numbers which will cause precision problems,\nwe suggest you to use JSON string to import data to ",(0,s.jsx)(n.code,{children:"array<decimal>"})," or ",(0,s.jsx)(n.code,{children:"array<largeint>"})," column."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"k1": 39, "k2": ["-818.2173181"]}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"k1": 40, "k2": ["10000000000000000000.1111111222222222"]}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u root:  -H "max_filter_ratio:0.01" -H "format:json" -H "timeout:300" -T test_decimal.json http://localhost:8035/api/example_db/array_test_decimal/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MySQL > select * from array_test_decimal;\n+------+----------------------------------+\n| k1   | k2                               |\n+------+----------------------------------+\n|   39 | [-818.2173181]                   |\n|   40 | [100000000000000000.001111111]   |\n+------+----------------------------------+\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"k1": 999, "k2": ["76959836937749932879763573681792701709", "26017042825937891692910431521038521227"]}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u root:  -H "max_filter_ratio:0.01" -H "format:json" -H "timeout:300" -T test_largeint.json http://localhost:8035/api/example_db/array_test_largeint/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:"Import result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MySQL > select * from array_test_largeint;\n+------+------------------------------------------------------------------------------------+\n| k1   | k2                                                                                 |\n+------+------------------------------------------------------------------------------------+\n|  999 | [76959836937749932879763573681792701709, 26017042825937891692910431521038521227]   |\n+------+------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,s.jsx)(n.p,{children:"The processing principle of Routine Load for JSON data is the same as that of Stream Load. It is not repeated here."}),"\n",(0,s.jsx)(n.p,{children:"For Kafka data sources, the content in each Massage is treated as a complete JSON data. If there are multiple rows of data represented in Array format in a Massage, multiple rows will be imported, and the offset of Kafka will only increase by 1. If an Array format Json represents multiple lines of data, but the Json parsing fails due to the wrong Json format, the error line will only increase by 1 (because the parsing fails, in fact, Doris cannot determine how many lines of data are contained in it, and can only error by one line data record)"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return r}});var t=a(667294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);