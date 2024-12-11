"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["596667"],{988442:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/hdfs","title":"hdfs","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/table-functions/hdfs.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/hdfs","permalink":"/docs/1.2/sql-manual/sql-functions/table-functions/hdfs","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"hdfs","language":"en"},"sidebar":"docs","previous":{"title":"s3","permalink":"/docs/1.2/sql-manual/sql-functions/table-functions/s3"},"next":{"title":"iceberg_meta","permalink":"/docs/1.2/sql-manual/sql-functions/table-functions/iceberg_meta"}}'),l=s("785893"),r=s("250065");let d={title:"hdfs",language:"en"},t=void 0,c={},o=[{value:"HDFS",id:"hdfs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",version:"version",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"hdfs",children:"HDFS"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"hdfs"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["HDFS table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,l.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})," file format."]}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'hdfs(\n  "uri" = "..",\n  "fs.defaultFS" = "...",\n  "hadoop.username" = "...",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"parameter description"})}),"\n",(0,l.jsx)(n.p,{children:"Related parameters for accessing hdfs:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"uri"}),": (required) hdfs uri."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"fs.defaultFS"}),": (required)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.username"}),": (required) Can be any string, but cannot be empty."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.security.authentication"}),": (optional)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.username"}),": (optional)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.kerberos.principal"}),": (optional)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"hadoop.kerberos.keytab"}),": (optional)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.client.read.shortcircuit"}),": (optional)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dfs.domain.socket.path"}),": (optional)"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"File format parameters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"format"}),": (required) Currently support ",(0,l.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"column_separator"}),": (optional) default ",(0,l.jsx)(n.code,{children:","}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"line_delimiter"}),": (optional) default ",(0,l.jsx)(n.code,{children:"\\n"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,l.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-way/load-json-format",children:"Json Load"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"read_json_by_line"}),": (optional) default ",(0,l.jsx)(n.code,{children:'"true"'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"strip_outer_array"}),": (optional) default ",(0,l.jsx)(n.code,{children:'"false"'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"json_root"}),": (optional) default ",(0,l.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"json_paths"}),": (optional) default ",(0,l.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"num_as_string"}),": (optional) default ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"fuzzy_parse"}),": (optional) default ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.version,{since:"dev",children:"The following 2 parameters are used for loading in csv format"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"trim_double_quotes"}),": Boolean type (optional), the default value is ",(0,l.jsx)(n.code,{children:"false"}),". True means that the outermost double quotes of each field in the csv file are trimmed."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"skip_lines"}),": Integer type (optional), the default value is 0. It will skip some lines in the head of csv file. It will be disabled when the format is ",(0,l.jsx)(n.code,{children:"csv_with_names"})," or ",(0,l.jsx)(n.code,{children:"csv_with_names_and_types"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:"Read and access csv format files on hdfs storage."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Can be used with ",(0,l.jsx)(n.code,{children:"desc function"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> desc function hdfs(\n            "uri" = "hdfs://127.0.0.1:8424/user/doris/csv_format_test/student_with_names.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv_with_names");\n'})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"hdfs, table-valued-function, tvf\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,l.jsxs)(n.p,{children:["For more detailed usage of HDFS tvf, please refer to ",(0,l.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-functions/table-functions/s3",children:"S3"})," tvf, The only difference between them is the way of accessing the storage system."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var i=s(667294);let l={},r=i.createContext(l);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);