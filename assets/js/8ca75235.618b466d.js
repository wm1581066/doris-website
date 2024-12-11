"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["396783"],{788511:function(e,t,o){o.r(t),o.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"faq/bi-faq","title":"BI FAQ","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/faq/bi-faq.md","sourceDirName":"faq","slug":"/faq/bi-faq","permalink":"/docs/1.2/faq/bi-faq","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"BI FAQ","language":"en"},"sidebar":"docs","previous":{"title":"Data Lakehouse FAQ","permalink":"/docs/1.2/faq/lakehouse-faq"},"next":{"title":"Release 1.2.8","permalink":"/docs/1.2/releasenotes/v1.2/release-1.2.8"}}'),n=o("785893"),i=o("250065");let a={title:"BI FAQ",language:"en"},s=void 0,c={},d=[{value:"Power BI",id:"power-bi",level:2},{value:"Q1. An error occurs when you use JDBC to pull data into  Desktop Power BI. &quot;Timeout expired. The timeout period elapsed prior to completion of the operation or the server is not responding&quot;.",id:"q1-an-error-occurs-when-you-use-jdbc-to-pull-data-into--desktop-power-bi-timeout-expired-the-timeout-period-elapsed-prior-to-completion-of-the-operation-or-the-server-is-not-responding",level:3},{value:"Q2. When the 2.1.x version uses JDBC to connect to Power BI, an error occurs &quot;An error happened while reading data from the provider: the given key was not present in the dictionary&quot;.",id:"q2-when-the-21x-version-uses-jdbc-to-connect-to-power-bi-an-error-occurs-an-error-happened-while-reading-data-from-the-provider-the-given-key-was-not-present-in-the-dictionary",level:3},{value:"Q3. Connection Doris Times error &quot;Reading data from the provider times error index and count must refer to the location within the string&quot;.",id:"q3-connection-doris-times-error-reading-data-from-the-provider-times-error-index-and-count-must-refer-to-the-location-within-the-string",level:3},{value:"Q4. JDBC connection version 2.1.x error message &quot;Character set &#39;utf8mb3&#39; is not supported by.net.Framework&quot;.",id:"q4-jdbc-connection-version-21x-error-message-character-set-utf8mb3-is-not-supported-bynetframework",level:3},{value:"Tableau",id:"tableau",level:2},{value:"Q1. Version 2.0.x reports that Tableau cannot connect to the data source with error code 37CE01A3.",id:"q1-version-20x-reports-that-tableau-cannot-connect-to-the-data-source-with-error-code-37ce01a3",level:3},{value:"Q2. SSL connection error version mismatch Failed to connect to the MySQL server",id:"q2-ssl-connection-error-version-mismatch-failed-to-connect-to-the-mysql-server",level:3},{value:"Q3. Connection error Unsupported command(COM_STMT_PREPARED)",id:"q3-connection-error-unsupported-commandcom_stmt_prepared",level:3}];function h(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"power-bi",children:"Power BI"}),"\n",(0,n.jsx)(t.h3,{id:"q1-an-error-occurs-when-you-use-jdbc-to-pull-data-into--desktop-power-bi-timeout-expired-the-timeout-period-elapsed-prior-to-completion-of-the-operation-or-the-server-is-not-responding",children:'Q1. An error occurs when you use JDBC to pull data into  Desktop Power BI. "Timeout expired. The timeout period elapsed prior to completion of the operation or the server is not responding".'}),"\n",(0,n.jsx)(t.p,{children:"Usually, this is Power BI pulling the time timeout of the data source. When filling in the data source server and database, click the advanced option, which has a timeout time, set the time higher."}),"\n",(0,n.jsx)(t.h3,{id:"q2-when-the-21x-version-uses-jdbc-to-connect-to-power-bi-an-error-occurs-an-error-happened-while-reading-data-from-the-provider-the-given-key-was-not-present-in-the-dictionary",children:'Q2. When the 2.1.x version uses JDBC to connect to Power BI, an error occurs "An error happened while reading data from the provider: the given key was not present in the dictionary".'}),"\n",(0,n.jsx)(t.p,{children:'Run "show collation" in the database first. Generally, only utf8mb4_900_bin is displayed, and the charset is utf8mb4. The main reason for this error is that ID 33 needs to be found when connecting to Power BI. That is, rows with 33ids in the table need to be upgraded to version 2.1.5 or later.'}),"\n",(0,n.jsx)(t.h3,{id:"q3-connection-doris-times-error-reading-data-from-the-provider-times-error-index-and-count-must-refer-to-the-location-within-the-string",children:'Q3. Connection Doris Times error "Reading data from the provider times error index and count must refer to the location within the string".'}),"\n",(0,n.jsx)(t.p,{children:"The cause of the problem is that global parameters are loaded during the connection process, and the SQL column names and values are the same"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"SELECT\n@@max_allowed_packet  as max_allowed_packet, @@character_set_client ,@@character_set_connection ,\n@@license,@@sql_mode ,@@lower_case_table_names , @@autocommit ;\n"})}),"\n",(0,n.jsx)(t.p,{children:"The new optimizer can be turned off in the current version or upgraded to version 2.0.7 or 2.1.6 or later."}),"\n",(0,n.jsx)(t.h3,{id:"q4-jdbc-connection-version-21x-error-message-character-set-utf8mb3-is-not-supported-bynetframework",children:"Q4. JDBC connection version 2.1.x error message \"Character set 'utf8mb3' is not supported by.net.Framework\"."}),"\n",(0,n.jsx)(t.p,{children:"This problem is easily encountered in version 2.1.x. If this problem occurs, you need to upgrade the JDBC Driver to 8.0.32."}),"\n",(0,n.jsx)(t.h2,{id:"tableau",children:"Tableau"}),"\n",(0,n.jsx)(t.h3,{id:"q1-version-20x-reports-that-tableau-cannot-connect-to-the-data-source-with-error-code-37ce01a3",children:"Q1. Version 2.0.x reports that Tableau cannot connect to the data source with error code 37CE01A3."}),"\n",(0,n.jsx)(t.p,{children:"Turn off the new optimizer in the current version or upgrade to 2.0.7 or later"}),"\n",(0,n.jsx)(t.h3,{id:"q2-ssl-connection-error-version-mismatch-failed-to-connect-to-the-mysql-server",children:"Q2. SSL connection error:protocol version mismatch Failed to connect to the MySQL server"}),"\n",(0,n.jsx)(t.p,{children:"The cause of this error is that SSL authentication is enabled on Doris, but SSL connections are not used during the connection. You need to disable the enable_ssl variable in fe.conf."}),"\n",(0,n.jsx)(t.h3,{id:"q3-connection-error-unsupported-commandcom_stmt_prepared",children:"Q3. Connection error Unsupported command(COM_STMT_PREPARED)"}),"\n",(0,n.jsx)(t.p,{children:"The MySQL driver version is improperly installed. Install the MySQL 5.1.x connection driver instead."})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return s},a:function(){return a}});var r=o(667294);let n={},i=r.createContext(n);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);