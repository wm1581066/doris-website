"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["576846"],{848403:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"lakehouse/database/oracle","title":"Oracle","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/lakehouse/database/oracle.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/oracle","permalink":"/docs/3.0/lakehouse/database/oracle","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Oracle","language":"en"},"sidebar":"docs","previous":{"title":"PostgreSQL","permalink":"/docs/3.0/lakehouse/database/postgresql"},"next":{"title":"SQL Server","permalink":"/docs/3.0/lakehouse/database/sqlserver"}}'),s=r("785893"),i=r("250065");let a={title:"Oracle",language:"en"},d=void 0,c={},l=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to Oracle",id:"connect-to-oracle",level:2},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"Oracle to Doris type mapping",id:"oracle-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Doris JDBC Catalog supports connecting to Oracle databases through the standard JDBC interface. This document describes how to configure an Oracle database connection."}),"\n",(0,s.jsx)(n.h2,{id:"terms-and-conditions",children:"Terms and Conditions"}),"\n",(0,s.jsx)(n.p,{children:"To connect to an Oracle database, you need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Oracle 19c, 18c, 12c, 11g or 10g."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["JDBC driver for Oracle database, you can download the Oracle JDBC driver for Ojdbc8 and above versions from ",(0,s.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc",children:"Maven repository"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Doris Network connection between each FE and BE node and Oracle server, default port is 1521."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-oracle",children:"Connect to Oracle"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG oracle PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:oracle:thin:@example.net:1521:orcl",\n    "driver_url" = "ojdbc8.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n)\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"jdbc_url"})," defines the connection information and parameters to be passed to the JDBC driver.\nWhen using the Oracle JDBC Thin driver, the syntax of the URL may vary depending on your Oracle configuration.\nFor example, if you are connecting to an Oracle SID or Oracle service name, the connection URL will be different.\nFor more information, see ",(0,s.jsx)(n.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/jjdbc/data-sources-and-URLs.html",children:"Oracle Database JDBC Driver Documentation"})," .\nThe above example URL connects to an Oracle SID named ",(0,s.jsx)(n.code,{children:"orcl"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"hierarchical-mapping",children:"Hierarchical mapping"}),"\n",(0,s.jsx)(n.p,{children:"When mapping Oracle, a Database in Doris corresponds to a User in Oracle. The Table under Doris's Database corresponds to the Table that the User has permission to access in Oracle. That is, the mapping relationship is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Doris"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Oracle"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Catalog"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Database"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Database"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"User"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Table"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-mapping",children:"Type mapping"}),"\n",(0,s.jsx)(n.h3,{id:"oracle-to-doris-type-mapping",children:"Oracle to Doris type mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Oracle Type"}),(0,s.jsx)(n.th,{children:"Doris Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number(p) / number(p,0)"}),(0,s.jsx)(n.td,{children:"TINYINT/SMALLINT/INT/BIGINT/LARGEINT"}),(0,s.jsxs)(n.td,{children:["Doris will select the corresponding type according to the size of p: ",(0,s.jsx)(n.code,{children:"p < 3"})," -> ",(0,s.jsx)(n.code,{children:"TINYINT"}),"; ",(0,s.jsx)(n.code,{children:"p < 5 "})," -> ",(0,s.jsx)(n.code,{children:"SMALLINT"}),"; ",(0,s.jsx)(n.code,{children:"p < 10"})," -> ",(0,s.jsx)(n.code,{children:"INT"}),"; ",(0,s.jsx)(n.code,{children:"p < 19"})," -> ",(0,s.jsx)(n.code,{children:"BIGINT"}),"; ",(0,s.jsx)(n.code,{children:"p > 19"})," -> ",(0,s.jsx)(n.code,{children:"LARGEINT"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number(p,s), [ if(s>0 && p>s) ]"}),(0,s.jsx)(n.td,{children:"DECIMAL(p,s)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number(p,s), [ if(s>0 && p < s) ]"}),(0,s.jsx)(n.td,{children:"DECIMAL(s,s)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number(p,s), [ if(s<0) ]"}),(0,s.jsx)(n.td,{children:"TINYINT/SMALLINT/INT/BIGINT/LARGEINT"}),(0,s.jsx)(n.td,{children:"If s<0, Doris will set p to p+|s|, and perform the sum The same mapping as number(p) / number(p,0)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Doris currently does not support oracle types that do not specify p and s"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"decimal"}),(0,s.jsx)(n.td,{children:"DECIMAL"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"float/real"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DATE"}),(0,s.jsx)(n.td,{children:"DATETIME"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TIMESTAMP"}),(0,s.jsx)(n.td,{children:"DATETIME"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CHAR/NCHAR"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VARCHAR2/NVARCHAR2"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LONG/ RAW/ LONG RAW/ INTERVAL"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Other"}),(0,s.jsx)(n.td,{children:"UNSUPPORTED"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"query-optimization",children:"Query optimization"}),"\n",(0,s.jsx)(n.h3,{id:"predicate-pushdown",children:"Predicate pushdown"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When executing a query like ",(0,s.jsx)(n.code,{children:"where dt = '2022-01-01'"}),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing unnecessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When the variable ",(0,s.jsx)(n.code,{children:"enable_ext_func_pred_pushdown"})," is set to true, the function conditions after where will also be pushed down to the external data source."]}),"\n",(0,s.jsx)(n.p,{children:"The functions that currently support push down to Oracle include:"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Function"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"NVL"})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"row-limit",children:"Row limit"}),"\n",(0,s.jsxs)(n.p,{children:["If you have the limit keyword in the query, Doris will escape the limit to Oracle's ",(0,s.jsx)(n.code,{children:"rownum"})," syntax to reduce the amount of data transfer."]}),"\n",(0,s.jsx)(n.h3,{id:"escape-characters",children:"Escape characters"}),"\n",(0,s.jsx)(n.p,{children:'Doris will automatically add the escape character ("") to the field names and table names in the query statements sent to Oracle to avoid conflicts between the field names and table names and Oracle\'s internal keywords.'}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ONS configuration failed"})," occurs when creating or querying Oracle Catalog"]}),"\n",(0,s.jsxs)(n.p,{children:["Add -Doracle.jdbc.fanEnabled=false to JAVA_OPTS in be.conf and upgrade the driver to ",(0,s.jsx)(n.a,{href:"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.23.0.0/ojdbc8-19.23.0.0.jar",children:"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.23.0.0/ojdbc8-19.23.0.0.jar"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Non supported character set (add orai18n.jar in your classpath): ZHS16GBK"})," exception occurs when creating or querying Oracle Catalog"]}),"\n",(0,s.jsxs)(n.p,{children:["Download ",(0,s.jsx)(n.a,{href:"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html",children:"orai18n.jar"})," and put it in the ",(0,s.jsx)(n.code,{children:"custom_lib/"})," directory under each FE and BE directory (if not exists, just create it manually) and restart each FE and BE."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);