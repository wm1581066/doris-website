"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["814901"],{672385:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=a(397337),n=a(785893),s=a(250065);let r={title:"For entry-level data engineers: how to build a simple but solid data architecture",description:"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics.",date:"2023-07-31",author:"Zhenwei Liu",tags:["Best Practice"],image:"/images/how-to-build-a-simple-but-solid-data-architecture.png"},o=void 0,d={authorsImageUrls:[void 0]},l=[{value:"What You Need",id:"what-you-need",level:2},{value:"Simple Architecture",id:"simple-architecture",level:2},{value:"Data Update",id:"data-update",level:2},{value:"Layering of Data Warehouse",id:"layering-of-data-warehouse",level:2},{value:"Reporting",id:"reporting",level:2},{value:"Quick aggregation to produce reports on demand",id:"quick-aggregation-to-produce-reports-on-demand",level:3},{value:"Quick response to data queries",id:"quick-response-to-data-queries",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics. You will learn the basics about how to build an efficient and easy-to-use data system, and I will walk you through every aspect of it with a use case of Apache Doris, an MPP-based analytic data warehouse."}),"\n",(0,n.jsx)(t.h2,{id:"what-you-need",children:"What You Need"}),"\n",(0,n.jsx)(t.p,{children:"This case is about a ticketing service provider who want a data platform that boasts quick processing, low maintenance costs, and ease of use, and I think they speak for the majority of entry-level database users."}),"\n",(0,n.jsx)(t.p,{children:"A prominent feature of ticketing services is the periodic spikes in ticket orders, you know, before the shows go on. So from time to time, the company has a huge amount of new data rushing in and requires real-time processing of it, so they can make timely adjustments during the short sales window. But in other time, they don't want to spend too much energy and funds on maintaining the data system. Furthermore, for a beginner of digital operation who only require basic analytic functions, it is better to have a data architecture that is easy-to-grasp and user-friendly. After research and comparison, they came to the Apache Doris community and we help them build a Doris-based data architecture."}),"\n",(0,n.jsx)(t.h2,{id:"simple-architecture",children:"Simple Architecture"}),"\n",(0,n.jsx)(t.p,{children:"The building blocks of this architecture are simple. You only need Apache Flink and Apache Kafka for data ingestion, and Apache Doris as an analytic data warehouse."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"simple-data-architecture-with-Apache-Doris",src:a(773135).Z+"",width:"1280",height:"599"})}),"\n",(0,n.jsx)(t.p,{children:"Connecting data sources to the data warehouse is simple, too. The key component, Apache Doris, supports various data loading methods to fit with different data sources. You can perform column mapping, transforming, and filtering during data loading to avoid duplicate collection of data. To ingest a table, users only need to add the table name to the configurations, instead of writing a script themselves."}),"\n",(0,n.jsx)(t.h2,{id:"data-update",children:"Data Update"}),"\n",(0,n.jsx)(t.p,{children:"Flink CDC was found to be the optimal choice if you are looking for higher stability in data ingestion. It also allows you to update the dynamically changing tables in real time. The process includes the following steps:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Configure Flink CDC for the source MySQL database, so that it allows dynamic updating of the table management configurations (which you can think of as the "metadata").'}),"\n",(0,n.jsx)(t.li,{children:"Create two CDC jobs in Flink, one to capture the changed data (the Forward stream), the other to update the table management configurations (the Broadcast stream)."}),"\n",(0,n.jsx)(t.li,{children:'Configure all tables of the source database at the Sink end (the output end of Flink CDC). When there is newly added table in the source database, the Broadcast stream will be triggered to update the table management configurations. (You just need to configure the tables, instead of "creating" the tables.)'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"configure-Flink-CDC",src:a(253877).Z+"",width:"1280",height:"899"})}),"\n",(0,n.jsx)(t.h2,{id:"layering-of-data-warehouse",children:"Layering of Data Warehouse"}),"\n",(0,n.jsx)(t.p,{children:"Data flows from various sources into the data warehouse, where it is cleaned and organized before it is ready for queries and analysis. The data processing here is divided into five typical layers. Such layering simplifies the data cleaning process because it provides a clear division of labor and makes things easier to locate and comprehend."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ODS"}),": This is the prep zone of the data warehouse. The unprocessed original data is put in the ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/data-model/#unique-model",children:"Unique Key Model"})," of Apache Doris, which can avoid duplication of data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DWD"}),": This layer cleans, formats, and de-identifies data to produce fact tables. Every detailed data record is preserved. Data in this layer is also put into the Unique Key Model."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DWS"}),": This layer produces flat tables of a certain theme (order, user, etc.) based on data from the DWD layer."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ADS"}),": This layer auto-aggregates data, which is implemented by the ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/data-model/#aggregate-model",children:"Aggregate Key Model"})," of Apache Doris."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DIM"}),": The DIM layer accommodates dimension data (in this case, data about the theaters, projects, and show sessions, etc.), which is used in combination with the order details."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"After the original data goes through these layers, it is available for queries via one data export interface."}),"\n",(0,n.jsx)(t.h2,{id:"reporting",children:"Reporting"}),"\n",(0,n.jsx)(t.p,{children:"Like many non-tech business, the ticketing service provider needs a data warehouse mainly for reporting. They derive trends and patterns from all kinds of data reports, and then figure out ways towards efficient management and sales increase. Specifically, this is the information they are observing in their reports:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Statistical Reporting"}),": These are the most frequently used reports, including sales reports by theater, distribution channel, sales representative, and show."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Agile Reporting"}),": These are reports developed for specific purposes, such as daily and weekly project data reports, sales summary reports, GMV reports, and settlement reports."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Data Analysis"}),": This involves data such as membership orders, attendance rates, and user portraits."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Dashboarding"}),": This is to visually display sales data."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Real-Time-Data-Warehouse-and-Reporting",src:a(560650).Z+"",width:"1280",height:"584"})}),"\n",(0,n.jsxs)(t.p,{children:["These are all entry-level tasks in data analytics. One of the biggest burdens for the data engineers was to quickly develop new reports as the internal analysts required. The ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/data-model#aggregate-model",children:"Aggregate Key Model"})," of Apache Doris is designed for this."]}),"\n",(0,n.jsx)(t.h3,{id:"quick-aggregation-to-produce-reports-on-demand",children:"Quick aggregation to produce reports on demand"}),"\n",(0,n.jsx)(t.p,{children:"For example, supposing that analysts want a sales report by sales representatives, data engineers can produce that by simple configuration:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Put the original data in the Aggregate Key Model"}),"\n",(0,n.jsx)(t.li,{children:"Specify the sales representative ID column and the payment date column as the Key columns, and the order amount column as the Value column"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Then, order amounts of the same sale representative within the specified period of time will be auto-aggregated. Bam! That's the report you need!"}),"\n",(0,n.jsx)(t.p,{children:"According to the user, this whole process only takes them 10~30 minutes, depending on the complexity of the report required. So the Aggregate Key Model largely releases data engineers from the pressure of report development."}),"\n",(0,n.jsx)(t.h3,{id:"quick-response-to-data-queries",children:"Quick response to data queries"}),"\n",(0,n.jsx)(t.p,{children:"Most data analysts would just want their target data to be returned the second they need it. In this case, the user often leverages two capabilities of Apache Doris to realize quick query response."}),"\n",(0,n.jsxs)(t.p,{children:["Firstly, Apache Doris is famously fast in Join queries. So if you need to extract information across multiple tables, you are in good hands. Secondly, in data analysis, it often happens that analysts frequently input the same request. For example, they frequently want to check the sales data of different theaters. In this scenario, Apache Doris allows you to create a ",(0,n.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/query-acceleration/materialized-view/",children:"Materialized View"}),", which means you pre-aggregate the sales data of each theater, and store this table in isolation from the original tables. In this way, every time you need to check the sales data by theater, the system directly goes to the Materialized View and reads data from there, instead of scanning the original table all over again. This can increase query speed by orders of magnitudes."]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(t.p,{children:["This is the overview of a simple data architecture and how it can provide the data services you need. It ensures data ingestion stability and quality with Flink CDC, and quick data analysis with Apache Doris. The deployment of this architecture is simple, too. If you plan for a data analytic upgrade for your business, you might refer to this case. If you need advice and help, you may join our ",(0,n.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"community here"}),"."]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},773135:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/Poly_1-4657c20d910093fd2ab45c5355bf13dc.png"},253877:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/Poly_2-0bd77b804cf526923be9c603871a34e7.png"},560650:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/Poly_3-8dbc669ac5f492a38335618a36ef214f.png"},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var i=a(667294);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},397337:function(e){e.exports=JSON.parse('{"permalink":"/blog/For-Entry-Level-Data-Engineers-How-to-Build-a-Simple-but-Solid-Data-Architecture","source":"@site/blog/For-Entry-Level-Data-Engineers-How-to-Build-a-Simple-but-Solid-Data-Architecture.md","title":"For entry-level data engineers: how to build a simple but solid data architecture","description":"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics.","date":"2023-07-31T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Zhenwei Liu","key":null,"page":null}],"frontMatter":{"title":"For entry-level data engineers: how to build a simple but solid data architecture","description":"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics.","date":"2023-07-31","author":"Zhenwei Liu","tags":["Best Practice"],"image":"/images/how-to-build-a-simple-but-solid-data-architecture.png"},"unlisted":false,"prevItem":{"title":"Database in fintech: how to support 10,000 dashboards without causing a mess","permalink":"/blog/Database-in-Fintech-How-to-Support-ten-thousand-Dashboards-Without-Causing-a-Mess"},"nextItem":{"title":"Is your latest data really the latest? check the data update mechanism of your database","permalink":"/blog/Is-Your-Latest-Data-Really-the-Latest-Check-the-Data-Update-Mechanism-of-Your-Database"}}')}}]);