"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["618938"],{123966:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/count-by-enum","title":"COUNT_BY_ENUM","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/count-by-enum.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/count-by-enum","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/count-by-enum","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"COUNT_BY_ENUM","language":"en"},"sidebar":"docs","previous":{"title":"COUNT","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/count"},"next":{"title":"APPROX_COUNT_DISTINCT","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"}}'),u=t("785893"),s=t("250065");let a={title:"COUNT_BY_ENUM",language:"en"},r=void 0,i={},o=[{value:"COUNT_BY_ENUM",id:"count_by_enum",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.h2,{id:"count_by_enum",children:"COUNT_BY_ENUM"}),"\n",(0,u.jsx)(e.p,{children:"COUNT_BY_ENUM"}),"\n",(0,u.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,u.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,u.jsx)(e.p,{children:(0,u.jsx)(e.code,{children:"count_by_enum(expr1, expr2, ... , exprN);"})}),"\n",(0,u.jsx)(e.p,{children:"Treats the data in a column as an enumeration and counts the number of values in each enumeration. Returns the number of enumerated values for each column, and the number of non-null values versus the number of null values."}),"\n",(0,u.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,u.jsxs)(e.p,{children:[(0,u.jsx)(e.code,{children:"expr1"})," \u2014 At least one input must be specified. The value is a column of type ",(0,u.jsx)(e.code,{children:"STRING"}),"."]}),"\n",(0,u.jsx)(e.h5,{id:"returned-value",children:"Returned value"}),"\n",(0,u.jsx)(e.p,{children:"Returns a JSONArray string."}),"\n",(0,u.jsx)(e.p,{children:"For example:"}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-json",children:'[{\n  "cbe": {\n    "F": 100,\n    "M": 99\n  },\n  "notnull": 199,\n  "null": 1,\n  "all": 200\n}, {\n  "cbe": {\n    "20": 10,\n    "30": 5,\n    "35": 1\n  },\n  "notnull": 16,\n  "null": 184,\n  "all": 200\n}, {\n  "cbe": {\n    "China": 10,\n    "United States": 9,\n    "England": 20,\n    "Germany": 30\n  },\n  "notnull": 69,\n  "null": 131,\n  "all": 200\n}]\n'})}),"\n",(0,u.jsx)(e.p,{children:"Description: The return value is a JSON array string and the order of the internal objects is the order of the input parameters."}),"\n",(0,u.jsxs)(e.ul,{children:["\n",(0,u.jsx)(e.li,{children:"cbe: count of non-null values based on enumeration values"}),"\n",(0,u.jsx)(e.li,{children:"notnull: number of non-null values."}),"\n",(0,u.jsx)(e.li,{children:"null: number of null values"}),"\n",(0,u.jsx)(e.li,{children:"all: total number, including both null and non-null values."}),"\n"]}),"\n",(0,u.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-sql",children:'DROP TABLE IF EXISTS count_by_enum_test;\n\nCREATE TABLE count_by_enum_test(\n                                   `id` varchar(1024) NULL,\n                                   `f1` text REPLACE_IF_NOT_NULL NULL,\n                                   `f2` text REPLACE_IF_NOT_NULL NULL,\n                                   `f3` text REPLACE_IF_NOT_NULL NULL\n)\nAGGREGATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    "replication_num" = "1"\n);\n\nINSERT into count_by_enum_test (id, f1, f2, f3) values\n                                                    (1, "F", "10", "China"),\n                                                    (2, "F", "20", "China"),\n                                                    (3, "M", NULL, "United States"),\n                                                    (4, "M", NULL, "United States"),\n                                                    (5, "M", NULL, "England");\n\nSELECT * from count_by_enum_test;\n\n+------+------+------+---------------+\n| id   | f1   | f2   | f3            |\n+------+------+------+---------------+\n| 1    | F    | 10   | China         |\n| 2    | F    | 20   | China         |\n| 3    | M    | NULL | United States |\n| 4    | M    | NULL | United States |\n| 5    | M    | NULL | England       |\n+------+------+------+---------------+\n\nselect count_by_enum(f1) from count_by_enum_test;\n\n+------------------------------------------------------+\n| count_by_enum(`f1`)                                  |\n+------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5}] |\n+------------------------------------------------------+\n\nselect count_by_enum(f2) from count_by_enum_test;\n\n+--------------------------------------------------------+\n| count_by_enum(`f2`)                                    |\n+--------------------------------------------------------+\n| [{"cbe":{"10":1,"20":1},"notnull":2,"null":3,"all":5}] |\n+--------------------------------------------------------+\n\nselect count_by_enum(f1,f2,f3) from count_by_enum_test;\n\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| count_by_enum(`f1`, `f2`, `f3`)                                                                                                                                                          |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [{"cbe":{"M":3,"F":2},"notnull":5,"null":0,"all":5},{"cbe":{"20":1,"10":1},"notnull":2,"null":3,"all":5},{"cbe":{"England":1,"United States":2,"China":2},"notnull":5,"null":0,"all":5}] |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n    \n'})}),"\n",(0,u.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,u.jsx)(e.p,{children:"COUNT_BY_ENUM"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,u.jsx)(e,{...n,children:(0,u.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var l=t(667294);let u={},s=l.createContext(u);function a(n){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(u):n.components||u:a(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);