"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["234181"],{974147:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return n},toc:function(){return c}});var n=i(618748),a=i(785893),o=i(250065);let r={title:"A/B Testing was a handful, until we found the replacement for Druid",description:"The recipe for successful A/B testing is quick computation, no duplication, and no data loss. For that, we used Apache Flink and Apache Doris to build our data platform.",date:"2023-06-01",author:"Heyu Dou, Xinxin Wang",tags:["Best Practice"],image:"/images/ab-testing-was-a-handful-until-we-found-the-replacement-for-druid.png"},s=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Platform Architecture 1.0",id:"platform-architecture-10",level:2},{value:"Platform Architecture 2.0",id:"platform-architecture-20",level:2},{value:"Platform Architecture 3.0",id:"platform-architecture-30",level:2},{value:"Quick Computation",id:"quick-computation",level:2},{value:"Data Integrity Guarantee",id:"data-integrity-guarantee",level:2},{value:"Develop a Sink-to-Doris Component",id:"develop-a-sink-to-doris-component",level:3},{value:"Application Display",id:"application-display",level:3},{value:"Cluster Monitoring",id:"cluster-monitoring",level:3},{value:"Key Takeaways",id:"key-takeaways",level:2}];function d(e){let t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Unlike normal reporting, A/B testing collects data of a different combination of dimensions every time. It is also a complicated kind of analysis of immense data. In our case, we have a real-time data volume of millions of OPS (Operations Per Second), with each operation involving around 20 data tags and over a dozen dimensions."}),"\n",(0,a.jsx)(t.p,{children:"For effective A/B testing, as data engineers, we must ensure quick computation as well as high data integrity (which means no duplication and no data loss). I'm sure I'm not the only one to say this: it is hard!"}),"\n",(0,a.jsx)(t.p,{children:"Let me show you our long-term struggle with our previous Druid-based data platform."}),"\n",(0,a.jsx)(t.h2,{id:"platform-architecture-10",children:"Platform Architecture 1.0"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Components"}),": Apache Storm + Apache Druid + MySQL"]}),"\n",(0,a.jsx)(t.p,{children:'This was our real-time datawarehouse, where Apache Storm was the real-time data processing engine and Apache Druid pre-aggregated the data. However, Druid did not support certain paging and join queries, so we wrote data from Druid to MySQL regularly, making MySQL the "materialized view" of Druid. But that was only a duct tape solution as it couldn\'t support our ever enlarging real-time data size. So data timeliness was unattainable.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Apache-Storm-Apache-Druid-MySQL",src:i(894892).Z+"",width:"1709",height:"960"})}),"\n",(0,a.jsx)(t.h2,{id:"platform-architecture-20",children:"Platform Architecture 2.0"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Components"}),": Apache Flink + Apache Druid + TiDB"]}),"\n",(0,a.jsx)(t.p,{children:"This time, we replaced Storm with Flink, and MySQL with TiDB. Flink was more powerful in terms of semantics and features, while TiDB, with its distributed capability, was more maintainable than MySQL. But architecture 2.0 was nowhere near our goal of end-to-end data consistency, either, because when processing huge data, enabling TiDB transactions largely slowed down data writing. Plus, Druid itself did not support standard SQL, so there were some learning costs and frictions in usage."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Apache-Flink-Apache-Druid-TiDB",src:i(836829).Z+"",width:"1592",height:"1083"})}),"\n",(0,a.jsx)(t.h2,{id:"platform-architecture-30",children:"Platform Architecture 3.0"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Components"}),": Apache Flink + ",(0,a.jsx)(t.a,{href:"https://github.com/apache/doris",children:"Apache Doris"})]}),"\n",(0,a.jsx)(t.p,{children:"We replaced Apache Druid with Apache Doris as the OLAP engine, which could also serve as a unified data serving gateway. So in Architecture 3.0, we only need to maintain one set of query logic. And we layered our real-time datawarehouse to increase reusability of real-time data."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Apache-Flink-Apache-Doris",src:i(879082).Z+"",width:"1340",height:"1101"})}),"\n",(0,a.jsx)(t.p,{children:"Turns out the combination of Flink and Doris was the answer. We can exploit their features to realize quick computation and data consistency. Keep reading and see how we make it happen."}),"\n",(0,a.jsx)(t.h2,{id:"quick-computation",children:"Quick Computation"}),"\n",(0,a.jsx)(t.p,{children:"As one piece of operation data can be attached to 20 tags, in A/B testing, we compare two groups of data centering only one tag each time. At first, we thought about splitting one piece of operation data (with 20 tags) into 20 pieces of data of only one tag upon data ingestion, and then importing them into Doris for analysis, but that could cause a data explosion and thus huge pressure on our clusters."}),"\n",(0,a.jsx)(t.p,{children:'Then we tried moving part of such workload to the computation engine. So we tried and "exploded" the data in Flink, but soon regretted it, because when we aggregated the data using the global hash windows in Flink jobs, the network and CPU usage also "exploded".'}),"\n",(0,a.jsxs)(t.p,{children:["Our third shot was to aggregate data locally in Flink right after we split it. As is shown below, we create a window in the memory of one operator for local aggregation; then we further aggregate it using the global hash windows. Since two operators chained together are in one thread, transferring data between operators consumes much less network resources. ",(0,a.jsx)(t.strong,{children:"The two-step aggregation method, combined with the"})," ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/data-model",children:"Aggregate model"})})," ",(0,a.jsx)(t.strong,{children:"of Apache Doris, can keep data explosion in a manageable range."})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Apache-Flink-Apache-Doris-2",src:i(934350).Z+"",width:"1642",height:"624"})}),"\n",(0,a.jsx)(t.p,{children:"For convenience in A/B testing, we make the test tag ID the first sorted field in Apache Doris, so we can quickly locate the target data using sorted indexes. To further minimize data processing in queries, we create materialized views with the frequently used dimensions. With constant modification and updates, the materialized views are applicable in 80% of our queries."}),"\n",(0,a.jsx)(t.p,{children:"To sum up, with the application of sorted index and materialized views, we reduce our query response time to merely seconds in A/B testing."}),"\n",(0,a.jsx)(t.h2,{id:"data-integrity-guarantee",children:"Data Integrity Guarantee"}),"\n",(0,a.jsx)(t.p,{children:"Imagine that your algorithm designers worked sweat and tears trying to improve the business, only to find their solution unable to be validated by A/B testing due to data loss. This is an unbearable situation, and we make every effort to avoid it."}),"\n",(0,a.jsx)(t.h3,{id:"develop-a-sink-to-doris-component",children:"Develop a Sink-to-Doris Component"}),"\n",(0,a.jsx)(t.p,{children:"To ensure end-to-end data integrity, we developed a Sink-to-Doris component. It is built on our own Flink Stream API scaffolding and realized by the idempotent writing of Apache Doris and the two-stage commit mechanism of Apache Flink. On top of it, we have a data protection mechanism against anomalies."}),"\n",(0,a.jsx)(t.p,{children:'It is the result of our long-term evolution. We used to ensure data consistency by implementing "one writing for one tag ID". Then we realized we could make good use of the transactions in Apache Doris and the two-stage commit of Apache Flink.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"idempotent-writing-two-stage-commit",src:i(945849).Z+"",width:"3380",height:"3334"})}),"\n",(0,a.jsx)(t.p,{children:"As is shown above, this is how two-stage commit works to guarantee data consistency:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Write data into local files;"}),"\n",(0,a.jsx)(t.li,{children:"Stage One: pre-commit data to Apache Doris. Save the Doris transaction ID into status;"}),"\n",(0,a.jsx)(t.li,{children:"If checkpoint fails, manually abandon the transaction; if checkpoint succeeds, commit the transaction in Stage Two;"}),"\n",(0,a.jsx)(t.li,{children:"If the commit fails after multiple retries, the transaction ID and the relevant data will be saved in HDFS, and we can restore the data via Broker Load."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We make it possible to split a single checkpoint into multiple transactions, so that we can prevent one Stream Load from taking more time than a Flink checkpoint in the event of large data volumes."}),"\n",(0,a.jsx)(t.h3,{id:"application-display",children:"Application Display"}),"\n",(0,a.jsx)(t.p,{children:"This is how we implement Sink-to-Doris. The component has blocked API calls and topology assembly. With simple configuration, we can write data into Apache Doris via Stream Load."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Sink-to-Doris",src:i(605138).Z+"",width:"3289",height:"1077"})}),"\n",(0,a.jsx)(t.h3,{id:"cluster-monitoring",children:"Cluster Monitoring"}),"\n",(0,a.jsx)(t.p,{children:"For cluster and host monitoring, we adopted the metrics templates provided by the Apache Doris community. For data monitoring, in addition to the template metrics, we added Stream Load request numbers and loading rates."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"stream-load-cluster-monitoring",src:i(865967).Z+"",width:"2001",height:"832"})}),"\n",(0,a.jsx)(t.p,{children:"Other metrics of our concerns include data writing speed and task processing time. In the case of anomalies, we will receive notifications in the form of phone calls, messages, and emails."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cluster-monitoring",src:i(640530).Z+"",width:"1280",height:"888"})}),"\n",(0,a.jsx)(t.h2,{id:"key-takeaways",children:"Key Takeaways"}),"\n",(0,a.jsx)(t.p,{children:"The recipe for successful A/B testing is quick computation and high data integrity. For this purpose, we implement a two-step aggregation method in Apache Flink, utilize the Aggregate model, materialized view, and short indexes of Apache Doris. Then we develop a Sink-to-Doris component, which is realized by the idempotent writing of Apache Doris and the two-stage commit mechanism of Apache Flink."})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},894892:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_1-8cb2f7a87f8ce60f9da14e0ec0ea7bb5.png"},836829:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_2-d32b762837d3788bdc43f0370fbf8199.png"},879082:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_3-c04ebf18268d873153f0365681d2a5d0.png"},934350:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_4-b4cad8ba4f8625718a23e7297885c40d.png"},945849:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_5-b5f8490ad14a1b485d4472b3db36e9d6.png"},605138:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_6-9d94599760bc55e52be086ec6d44cc69.png"},865967:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_7-a8f9f0c95e96e136b287be46bdbc4add.png"},640530:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/360_8-e02d4bf0c8cfab543e5693216fee6357.png"},250065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return r}});var n=i(667294);let a={},o=n.createContext(a);function r(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}},618748:function(e){e.exports=JSON.parse('{"permalink":"/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid","source":"@site/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid.md","title":"A/B Testing was a handful, until we found the replacement for Druid","description":"The recipe for successful A/B testing is quick computation, no duplication, and no data loss. For that, we used Apache Flink and Apache Doris to build our data platform.","date":"2023-06-01T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Heyu Dou, Xinxin Wang","key":null,"page":null}],"frontMatter":{"title":"A/B Testing was a handful, until we found the replacement for Druid","description":"The recipe for successful A/B testing is quick computation, no duplication, and no data loss. For that, we used Apache Flink and Apache Doris to build our data platform.","date":"2023-06-01","author":"Heyu Dou, Xinxin Wang","tags":["Best Practice"],"image":"/images/ab-testing-was-a-handful-until-we-found-the-replacement-for-druid.png"},"unlisted":false,"prevItem":{"title":"Apache Doris announced the official release of version 1.2.4","permalink":"/blog/release-note-1.2.4"},"nextItem":{"title":"Building a log analytics solution 10 times more cost-effective than Elasticsearch","permalink":"/blog/Building-A-Log-Analytics-Solution-10-Times-More-Cost-Effective-Than-Elasticsearch"}}')}}]);