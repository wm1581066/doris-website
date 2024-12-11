"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["641482"],{664771:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"data-operate/import/import-scenes/load-strict-mode","title":"import strict mode","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/data-operate/import/import-scenes/load-strict-mode.md","sourceDirName":"data-operate/import/import-scenes","slug":"/data-operate/import/import-scenes/load-strict-mode","permalink":"/docs/1.2/data-operate/import/import-scenes/load-strict-mode","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"import strict mode","language":"en"},"sidebar":"docs","previous":{"title":"Data transformation, column mapping and filtering","permalink":"/docs/1.2/data-operate/import/import-scenes/load-data-convert"},"next":{"title":"Binlog Load","permalink":"/docs/1.2/data-operate/import/import-way/binlog-load-manual"}}'),r=t("785893"),s=t("250065");let l={title:"import strict mode",language:"en"},d="import strict mode",o={},c=[{value:"How to set",id:"how-to-set",level:2},{value:"The role of strict mode",id:"the-role-of-strict-mode",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"import-strict-mode",children:"import strict mode"})}),"\n",(0,r.jsx)(n.p,{children:"Strict mode (strict_mode) is configured as a parameter in the import operation. This parameter affects the import behavior of certain values and the final imported data."}),"\n",(0,r.jsx)(n.p,{children:"This document mainly explains how to set strict mode, and the impact of strict mode."}),"\n",(0,r.jsx)(n.h2,{id:"how-to-set",children:"How to set"}),"\n",(0,r.jsx)(n.p,{children:"Strict mode is all False by default, i.e. off."}),"\n",(0,r.jsx)(n.p,{children:"Different import methods set strict mode in different ways."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",children:"BROKER LOAD"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://my_bucket/input/file.txt")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n)\nWITH BROKER bos\n(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyyyyyy"\n)\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD",children:"STREAM LOAD"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd \\\n-H "strict_mode: true" \\\n-T 1.txt \\\nhttp://host:port/api/example_db/my_table/_stream_load\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",children:"ROUTINE LOAD"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test_job ON my_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",children:"INSERT"})}),"\n",(0,r.jsxs)(n.p,{children:["Set via ",(0,r.jsx)(n.a,{href:"/docs/1.2/advanced/variables",children:"session variables"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET enable_insert_strict = true;\nINSERT INTO my_table ...;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"the-role-of-strict-mode",children:"The role of strict mode"}),"\n",(0,r.jsx)(n.p,{children:"Strict mode means strict filtering of column type conversions during import."}),"\n",(0,r.jsx)(n.p,{children:"The strict filtering strategy is as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["For column type conversion, if strict mode is turned on, the wrong data will be filtered. The wrong data here refers to: the original data is not ",(0,r.jsx)(n.code,{children:"null"}),", but the result is ",(0,r.jsx)(n.code,{children:"null"})," after column type conversion."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"column type conversion"})," mentioned here does not include the ",(0,r.jsx)(n.code,{children:"null"})," value calculated by the function."]}),"\n",(0,r.jsxs)(n.p,{children:["For an imported column type that contains range restrictions, if the original data can pass the type conversion normally, but cannot pass the range restrictions, strict mode will not affect it. For example: if the type is ",(0,r.jsx)(n.code,{children:"decimal(1,0)"})," and the original data is 10, it belongs to the range that can be converted by type but is not within the scope of the column declaration. This kind of data strict has no effect on it."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Take the column type as TinyInt as an example:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Primitive data type"}),(0,r.jsx)(n.th,{children:"Primitive data example"}),(0,r.jsx)(n.th,{children:"Converted value to TinyInt"}),(0,r.jsx)(n.th,{children:"Strict mode"}),(0,r.jsx)(n.th,{children:"Result"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsx)(n.td,{children:"\\N"}),(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsx)(n.td,{children:"ON or OFF"}),(0,r.jsx)(n.td,{children:"NULL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Non-null value"}),(0,r.jsx)(n.td,{children:'"abc" or 2000'}),(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsx)(n.td,{children:"On"}),(0,r.jsx)(n.td,{children:"Illegal value (filtered)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"non-null value"}),(0,r.jsx)(n.td,{children:'"abc"'}),(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsx)(n.td,{children:"off"}),(0,r.jsx)(n.td,{children:"NULL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"non-null value"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"on or off"}),(0,r.jsx)(n.td,{children:"import correctly"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Description:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Columns in the table allow to import null values"}),"\n",(0,r.jsxs)(n.li,{children:["After ",(0,r.jsx)(n.code,{children:"abc"})," and ",(0,r.jsx)(n.code,{children:"2000"})," are converted to TinyInt, they will become NULL due to type or precision issues. When strict mode is on, this data will be filtered. And if it is closed, ",(0,r.jsx)(n.code,{children:"null"})," will be imported."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Take the column type as Decimal(1,0) as an example"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Primitive Data Types"}),(0,r.jsx)(n.th,{children:"Examples of Primitive Data"}),(0,r.jsx)(n.th,{children:"Converted to Decimal"}),(0,r.jsx)(n.th,{children:"Strict Mode"}),(0,r.jsx)(n.th,{children:"Result"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Null"}),(0,r.jsx)(n.td,{children:"\\N"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"On or Off"}),(0,r.jsx)(n.td,{children:"NULL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"non-null value"}),(0,r.jsx)(n.td,{children:"aaa"}),(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsx)(n.td,{children:"on"}),(0,r.jsx)(n.td,{children:"illegal value (filtered)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"non-null value"}),(0,r.jsx)(n.td,{children:"aaa"}),(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsx)(n.td,{children:"off"}),(0,r.jsx)(n.td,{children:"NULL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"non-null value"}),(0,r.jsx)(n.td,{children:"1 or 10"}),(0,r.jsx)(n.td,{children:"1 or 10"}),(0,r.jsx)(n.td,{children:"on or off"}),(0,r.jsx)(n.td,{children:"import correctly"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Description:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Columns in the table allow to import null values"}),"\n",(0,r.jsxs)(n.li,{children:["After ",(0,r.jsx)(n.code,{children:"abc"})," is converted to Decimal, it will become NULL due to type problem. When strict mode is on, this data will be filtered. And if it is closed, ",(0,r.jsx)(n.code,{children:"null"})," will be imported."]}),"\n",(0,r.jsxs)(n.li,{children:["Although ",(0,r.jsx)(n.code,{children:"10"})," is an out-of-range value, because its type conforms to the requirements of decimal, strict mode does not affect it. ",(0,r.jsx)(n.code,{children:"10"})," will eventually be filtered in other import processing flows. But not filtered by strict mode."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var i=t(667294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);