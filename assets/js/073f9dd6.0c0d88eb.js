"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["106040"],{41217:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>j,assets:()=>o,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"sql-manual/sql-statements/catalog/CREATE-CATALOG","title":"CREATE CATALOG","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/catalog/CREATE-CATALOG.md","sourceDirName":"sql-manual/sql-statements/catalog","slug":"/sql-manual/sql-statements/catalog/CREATE-CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/CREATE-CATALOG","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE CATALOG","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TRANSACTION","permalink":"/docs/3.0/sql-manual/sql-statements/transaction/SHOW-TRANSACTION"},"next":{"title":"ALTER CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/ALTER-CATALOG"}}'),l=s("785893"),a=s("250065");let c={title:"CREATE CATALOG",language:"en"},t=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function i(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to create an external catalog"}),"\n",(0,l.jsx)(n.p,{children:"Syntax:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG [IF NOT EXISTS] catalog_name [comment]\n	PROPERTIES ("key"="value", ...);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create catalog hive"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive comment 'hive catalog' PROPERTIES (\n	'type'='hms',\n	'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n	'dfs.nameservices'='HANN',\n	'dfs.ha.namenodes.HANN'='nn1,nn2',\n	'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n	'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n	'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create catalog es"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG es PROPERTIES (\n	"type"="es",\n	"hosts"="http://127.0.0.1:9200"\n);\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create catalog jdbc"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"mysql"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="root",\n	"password"="123456",\n	"jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n	"driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n	"driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"postgresql"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="postgres",\n	"password"="123456",\n	"jdbc_url" = "jdbc:postgresql://127.0.0.1:5432/demo",\n	"driver_url" = "file:///path/to/postgresql-42.5.1.jar",\n	"driver_class" = "org.postgresql.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"clickhouse"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="default",\n	"password"="123456",\n	"jdbc_url" = "jdbc:clickhouse://127.0.0.1:8123/demo",\n	"driver_url" = "file:///path/to/clickhouse-jdbc-0.3.2-patch11-all.jar",\n	"driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"oracle"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG jdbc PROPERTIES (\n	"type"="jdbc",\n	"user"="doris",\n	"password"="123456",\n	"jdbc_url" = "jdbc:oracle:thin:@127.0.0.1:1521:helowin",\n	"driver_url" = "file:///path/to/ojdbc8.jar",\n	"driver_class" = "oracle.jdbc.driver.OracleDriver"\n);	\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"SQLServer"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG sqlserver_catalog PROPERTIES (\n	"type"="jdbc",\n	"user"="SA",\n	"password"="Doris123456",\n	"jdbc_url" = "jdbc:sqlserver://localhost:1433;DataBaseName=doris_test",\n	"driver_url" = "file:///path/to/mssql-jdbc-11.2.3.jre8.jar",\n	"driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n);	\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"SAP HANA"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG saphana_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="SYSTEM",\n   "password"="SAPHANA",\n   "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n   "driver_url" = "file:///path/to/ngdbc.jar",\n   "driver_class" = "com.sap.db.jdbc.Driver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Trino"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG trino_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="hadoop",\n   "password"="",\n   "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n   "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n   "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"OceanBase"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG oceanbase_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="",\n   "jdbc_url" = "jdbc:oceanbase://localhost:2881/demo",\n   "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n   "driver_class" = "com.oceanbase.jdbc.Driver"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.p,{children:"CREATE, CATALOG"}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function j(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var r=s(667294);let l={},a=r.createContext(l);function c(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);