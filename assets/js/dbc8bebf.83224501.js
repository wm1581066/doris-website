"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["206918"],{178029:function(e,i,a){a.r(i),a.d(i,{metadata:()=>n,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var n=JSON.parse('{"id":"releasenotes/v2.1/release-2.1.0","title":"Release 2.1.0","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/releasenotes/v2.1/release-2.1.0.md","sourceDirName":"releasenotes/v2.1","slug":"/releasenotes/v2.1/release-2.1.0","permalink":"/docs/3.0/releasenotes/v2.1/release-2.1.0","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 2.1.0","language":"en"}}'),t=a("785893"),r=a("250065");let o={title:"Release 2.1.0",language:"en"},s=void 0,l={},c=[{value:"Performance improvement",id:"performance-improvement",level:2},{value:"Smarter optimizer",id:"smarter-optimizer",level:3},{value:"Better heuristic optimization",id:"better-heuristic-optimization",level:3},{value:"Parallel adaptive scan",id:"parallel-adaptive-scan",level:3},{value:"Local shuffle",id:"local-shuffle",level:3},{value:"Faster INSERT INTO SELECT",id:"faster-insert-into-select",level:3},{value:"Data lake analytic performance",id:"data-lake-analytic-performance",level:2},{value:"TPC-DS Benchmark",id:"tpc-ds-benchmark",level:3},{value:"SQL dialects compatibility",id:"sql-dialects-compatibility",level:3},{value:"Arrow Flight SQL protocol",id:"arrow-flight-sql-protocol",level:3},{value:"Asynchronous materialized view",id:"asynchronous-materialized-view",level:2},{value:"Enhanced storage",id:"enhanced-storage",level:2},{value:"Auto-increment column",id:"auto-increment-column",level:3},{value:"Auto partition",id:"auto-partition",level:3},{value:"High-concurrency real-time data ingestion",id:"high-concurrency-real-time-data-ingestion",level:3},{value:"Semi-structured data analysis",id:"semi-structured-data-analysis",level:2},{value:"A new data type: Variant",id:"a-new-data-type-variant",level:3},{value:"IP types",id:"ip-types",level:3},{value:"More powerful functions for compound data types",id:"more-powerful-functions-for-compound-data-types",level:3},{value:"Workload Management",id:"workload-management",level:2},{value:"Hard isolation of resources",id:"hard-isolation-of-resources",level:3},{value:"TopSQL",id:"topsql",level:3},{value:"Others",id:"others",level:2},{value:"Decimal 256",id:"decimal-256",level:3},{value:"Job scheduler",id:"job-scheduler",level:3},{value:"Support Docker fast start to experience the new version",id:"support-docker-fast-start-to-experience-the-new-version",level:3},{value:"Behavior changed",id:"behavior-changed",level:2},{value:"Credits",id:"credits",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Dear community, we are pleased to share with you the official release of Apache Doris 2.1.0, now available for download and use as of March 8th. This latest version marks a significant milestone in our journey towards enhancing data analysis capabilities, particularly for handling massive and complex datasets."}),"\n",(0,t.jsx)(i.p,{children:"With Doris 2.1.0, our primary focus has been on optimizing analysis performance, and the results speak for themselves. We have achieved an impressive performance improvement of over 100% on the TPC-DS 1TB test dataset, making Apache Doris more capable of challenging real-world business scenarios."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Quick Download:"})," ",(0,t.jsx)(i.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"GitHub\uFF1A"})," ",(0,t.jsx)(i.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"performance-improvement",children:"Performance improvement"}),"\n",(0,t.jsx)(i.h3,{id:"smarter-optimizer",children:"Smarter optimizer"}),"\n",(0,t.jsx)(i.p,{children:"On the basis of V2.0, the query optimizer in Doris V2.1 comes with enhanced statistics-based inference and enumeration framework. We have upgraded the cost model and expanded the optimization rules to serve the needs of more use cases"}),"\n",(0,t.jsx)(i.h3,{id:"better-heuristic-optimization",children:"Better heuristic optimization"}),"\n",(0,t.jsx)(i.p,{children:"For data analytics at scale or data lake scenarios, Doris V2.1 provides better heuristic query plans. Meanwhile, the RuntimeFilter is more self-adaptive to enable higher performance even without statistical information."}),"\n",(0,t.jsx)(i.h3,{id:"parallel-adaptive-scan",children:"Parallel adaptive scan"}),"\n",(0,t.jsx)(i.p,{children:"Doris V2.1 has adopted parallel adaptive scan to optimize scan I/O and thus improve query performance. It can avoid the negative impact of unreasonable numbers of buckets. (This feature is currently available on the Duplicate Key model and Merge-on-Write Unique Key model.)"}),"\n",(0,t.jsx)(i.h3,{id:"local-shuffle",children:"Local shuffle"}),"\n",(0,t.jsx)(i.p,{children:"We have introduced Local Shuffle to prevent uneven data distribution. Benchmark tests show that Local Shuffle in combination with Parallel Adaptive Scan can guarantee fast query performance in spite of unreasonable bucket number settings upon table creation."}),"\n",(0,t.jsx)(i.h3,{id:"faster-insert-into-select",children:"Faster INSERT INTO SELECT"}),"\n",(0,t.jsx)(i.p,{children:"To further improve the performance of INSERT INTO SELECT, which is a frequent operation in ETL, we have moved forward the MemTable execution-wise to reduce data ingestion overheads. Tests show that this can double the data ingestion speed in most cases compared to V2.0.\nImproved data lake analytics capabilities"}),"\n",(0,t.jsx)(i.h2,{id:"data-lake-analytic-performance",children:"Data lake analytic performance"}),"\n",(0,t.jsx)(i.h3,{id:"tpc-ds-benchmark",children:"TPC-DS Benchmark"}),"\n",(0,t.jsx)(i.p,{children:"According to TPC-DS benchmark tests (1TB) of Doris V2.1 against Trino,"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Without caching, the total execution time of Doris is 56% of that of Trino V435. (717s VS 1296s)"}),"\n",(0,t.jsx)(i.li,{children:"Enabling file cache can further increase the overall performance of Doris by 2.2 times. (323s)\nThis is achieved by a series of optimizations in I/O, parquet/ORC file reading, predicate pushdown, caching, and scan task scheduling, etc."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"sql-dialects-compatibility",children:"SQL dialects compatibility"}),"\n",(0,t.jsxs)(i.p,{children:["To facilitate migration to Doris and increase its compatibility with other DBMS, we have enabled SQL dialect conversion in V2.1. (",(0,t.jsx)(i.a,{href:"../../lakehouse/sql-dialect",children:"read more"}),') For example, by set sql_dialect = "trino" in Doris, you can use the Trino SQL dialect as you\'re used to, without modifying your current business logic, and Doris will execute the corresponding queries for you. Tests in user production environment show that Doris V2.1 is compatible with 99% of Trino SQL.']}),"\n",(0,t.jsx)(i.h3,{id:"arrow-flight-sql-protocol",children:"Arrow Flight SQL protocol"}),"\n",(0,t.jsx)(i.p,{children:"As a column-oriented database compatible with MySQL 8.0 protocol, Doris V2.1 now supports the Arrow Flight SQL protocol as well so users can have fast access to Doris data via Pandas/Numpy without data serialization and deserialization. For most common data types, the Arrow Flight protocol enables tens of times faster performance than the MySQL protocol."}),"\n",(0,t.jsx)(i.h2,{id:"asynchronous-materialized-view",children:"Asynchronous materialized view"}),"\n",(0,t.jsx)(i.p,{children:"V2.1 allows creating a materialized view based on multiple tables. This feature currently supports:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Transparent rewriting: supports transparent rewriting of common operators including Select, Where, Join, Group By, and Aggregation."}),"\n",(0,t.jsx)(i.li,{children:"Auto refresh: supports regular refresh, manual refresh, full refresh, incremental refresh, and partition-based refresh."}),"\n",(0,t.jsx)(i.li,{children:"Materialized view of external tables: supports materialized views based on external data tables such as those on Hive, Hudi, and Iceberg; supported synchronizing data from data lakes into Doris internal tables via materialized views."}),"\n",(0,t.jsx)(i.li,{children:"Direct query on materialized views: Materialized views can be regarded as the result set after ETL. In this sense, materialized views are data tables, so users can conduct queries on them directly."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"enhanced-storage",children:"Enhanced storage"}),"\n",(0,t.jsx)(i.h3,{id:"auto-increment-column",children:"Auto-increment column"}),"\n",(0,t.jsx)(i.p,{children:"V2.1 supports auto-increment columns, which can ensure data uniqueness of each row. This lays the foundation for efficient dictionary encoding and query pagination. For example, for precise UV calculation and customer grouping, users often apply the bitmap type in Doris, the process of which entails dictionary encoding. With V2.1, users can first create a dictionary table using the auto-increment column, and then simply load user data into it."}),"\n",(0,t.jsx)(i.h3,{id:"auto-partition",children:"Auto partition"}),"\n",(0,t.jsx)(i.p,{children:"To further release burden on operation and maintenance, V2.1 allows auto data partitioning. Upon data ingestion, it detects whether a partition exists for the data based on the partitioning column. If not, it automatically creates one and starts data ingestion."}),"\n",(0,t.jsx)(i.h3,{id:"high-concurrency-real-time-data-ingestion",children:"High-concurrency real-time data ingestion"}),"\n",(0,t.jsxs)(i.p,{children:["For data writing, a back pressure mechanism is in place to avoid execessive data versions, so as to reduce resource consumption by data version merging. In addition, V2.1 supports group commit (",(0,t.jsx)(i.a,{href:"../../data-operate/import/import-way/group-commit-manual",children:"read more"}),"), which means to accumulate multiple writing and commit them as one. Benchmark tests on group commit with JDBC ingestion and the Stream Load method present great results."]}),"\n",(0,t.jsx)(i.h2,{id:"semi-structured-data-analysis",children:"Semi-structured data analysis"}),"\n",(0,t.jsx)(i.h3,{id:"a-new-data-type-variant",children:"A new data type: Variant"}),"\n",(0,t.jsx)(i.p,{children:"V2.1 supports a new data type named Variant. It can accommodate semi-structured data such as JSON as well as compound data types that contain integers, strings, booleans, etcs. Users don't have to pre-define the exact data types for a Variant column in the table schema. The Variant type is handy when processing nested data structures.\nYou can include Variant columns and static columns with pre-defined data types in the same table. This will provide you with more flexibility in storage and queries.\nTests with ClickBench datasets prove that data in Variant columns takes up the same storage space as data in static columns, which is half of that in JSON format. In terms of query performance, the Variant type enables 8 times higher query speed than JSON in hot runs and even more in cold runs."}),"\n",(0,t.jsx)(i.h3,{id:"ip-types",children:"IP types"}),"\n",(0,t.jsx)(i.p,{children:"Doris V2.1 provides native support for IPv4 and IPv6. It stores IP data in binary format, which cuts down storage space usage by 60% compared to IP string in plain texts. Along with these IP types, we have added over 20 functions for IP data processing."}),"\n",(0,t.jsx)(i.h3,{id:"more-powerful-functions-for-compound-data-types",children:"More powerful functions for compound data types"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"explode_map: supports exploding rows into columns for the Map data type."}),"\n",(0,t.jsx)(i.li,{children:"Supports the STRUCT data type in the IN predicates"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"workload-management",children:"Workload Management"}),"\n",(0,t.jsx)(i.h3,{id:"hard-isolation-of-resources",children:"Hard isolation of resources"}),"\n",(0,t.jsx)(i.p,{children:"On the basis of the Workload Group mechanism, which imposes a soft limit on the resources that a workload group can use, Doris 2.1 introduces a hard limit on CPU resource consumption for workload groups as a way to ensure higher stability in query performance."}),"\n",(0,t.jsx)(i.h3,{id:"topsql",children:"TopSQL"}),"\n",(0,t.jsx)(i.p,{children:"V2.1 allows users to check the most resource-consuming SQL queries in the runtime. This can be a big help when handling cluster load spike caused by unexpected large queries."}),"\n",(0,t.jsx)(i.h2,{id:"others",children:"Others"}),"\n",(0,t.jsx)(i.h3,{id:"decimal-256",children:"Decimal 256"}),"\n",(0,t.jsx)(i.p,{children:"For users in the financial sector or high-end manufacturing, V2.1 supports a high-precision data type: Decimal, which supports up to 76 significant digits (an experimental feature, please set enable_decimal256=true.)"}),"\n",(0,t.jsx)(i.h3,{id:"job-scheduler",children:"Job scheduler"}),"\n",(0,t.jsx)(i.p,{children:"V2.1 provides a good option for regular task scheduling: Doris Job Scheduler. It can trigger the pre-defined operations on schedule or at fixed intervals. The Doris Job Scheduler is accurate to the second. It provides consistency guarantee for data writing, high efficiency and flexibility, high-performance processing queues, retraceable scheduling records, and high availability of jobs."}),"\n",(0,t.jsx)(i.h3,{id:"support-docker-fast-start-to-experience-the-new-version",children:"Support Docker fast start to experience the new version"}),"\n",(0,t.jsxs)(i.p,{children:["Starting from version 2.1.0, we will provide a separate Docker Image to support the rapid creation of a 1FE, 1BE Docker container to experience the new version of Doris. The container will complete the initialization of FE and BE, BE registration and other steps by default. After creating the container, it can directly access and use the Doris cluster about 1 ",(0,t.jsx)(i.a,{href:"http://minute.in/",children:"minute.In"})," this image version, the default ",(0,t.jsx)(i.code,{children:"max_map_count"}),", ",(0,t.jsx)(i.code,{children:"ulimit"}),", ",(0,t.jsx)(i.code,{children:"Swap"})," and other hard limits are removed. It supports X64 (avx2) machines and ARM machines for deployment. The default open ports are 8000, 8030, 8040, 9030.If you need to experience the Broker component, you can add the environment variable ",(0,t.jsx)(i.code,{children:"--env BROKER=true"})," at startup to start the Broker process synchronously. After startup, it will automatically complete the registration. The Broker name is ",(0,t.jsx)(i.code,{children:"test"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Please note that this version is only suitable for quick experience and functional testing, not for production environment!"}),"\n",(0,t.jsx)(i.h2,{id:"behavior-changed",children:"Behavior changed"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The default data model is the Merge-on-Write Unique Key model. enable_unique_key_merge_on_write will be included as a default setting when a table is created in the Unique Key model."}),"\n",(0,t.jsx)(i.li,{children:"As inverted index has proven to be more performant than bitmap index, V2.1 stops supporting bitmap index. Existing bitmap indexes will remain effective but new creation is not allowed. We will remove bitmap index-related code in the future."}),"\n",(0,t.jsx)(i.li,{children:"cpu_resource_limit is no longer supported. It is to put a limit on the number of scanner threads on Doris BE. Since the workload group mechanism also supports such settings, the already configured cpu_resource_limit will be invalid."}),"\n",(0,t.jsx)(i.li,{children:"The default value of enable_segcompaction is true. This means Doris supports compaction of multiple segments in the same rowset."}),"\n",(0,t.jsxs)(i.li,{children:["Audit log plug-in\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Since V2.1.0, Doris has a built-in audit log plug-in. Users can simply enable or disable it by setting the enable_audit_plugin parameter."}),"\n",(0,t.jsx)(i.li,{children:"If you have already installed your own audit log plug-in, you can either continue using it after upgrading to Doris V2.1, or uninstall it and use the one in Doris. Please note that the audit log table will be relocated after switching plug-in."}),"\n",(0,t.jsxs)(i.li,{children:["For more details, please see the ",(0,t.jsx)(i.a,{href:"../../admin-manual/audit-plugin",children:"docs"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"credits",children:"Credits"}),"\n",(0,t.jsx)(i.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,t.jsx)(i.p,{children:"467887319, 924060929, acnot, airborne12, AKIRA, alan_rodriguez, AlexYue, allenhooo, amory, amory, AshinGau, beat4ocean, BePPPower, bigben0204, bingquanzhao, BirdAmosBird, BiteTheDDDDt, bobhan1, caiconghui, camby, camby, CanGuan, caoliang-web, catpineapple, Centurybbx, chen, ChengDaqi2023, ChenyangSunChenyang, Chester, ChinaYiGuan, ChouGavinChou, chunping, colagy, CSTGluigi, czzmmc, daidai, dalong, dataroaring, DeadlineFen, DeadlineFen, deadlinefen, deardeng, didiaode18, DongLiang-0, dong-shuai, Doris-Extras, Dragonliu2018, DrogonJackDrogon, DuanXujianDuan, DuRipeng, dutyu, echo-dundun, ElvinWei, englefly, Euporia, feelshana, feifeifeimoon, feiniaofeiafei, felixwluo, figurant, flynn, fornaix, FreeOnePlus, Gabriel39, gitccl, gnehil, GoGoWen, gohalo, guardcrystal, hammer, HappenLee, HB, hechao, HelgeLarsHelge, herry2038, HeZhangJianHe, HHoflittlefish777, HonestManXin, hongkun-Shao, HowardQin, hqx871, httpshirley, htyoung, huanghaibin, HuJerryHu, HuZhiyuHu, Hyman-zhao, i78086, irenesrl, ixzc, jacktengg, jacktengg, jackwener, jayhua, Jeffrey, jiafeng.zhang, Jibing-Li, JingDas, julic20s, kaijchen, kaka11chen, KassieZ, kindred77, KirsCalvinKirs, KirsCalvinKirs, kkop, koarz, LemonLiTree, LHG41278, liaoxin01, LiBinfeng-01, LiChuangLi, LiDongyangLi, Lightman, lihangyu, lihuigang, LingAdonisLing, liugddx, LiuGuangdongLiu, LiuHongLiu, liuJiwenliu, LiuLijiaLiu, lsy3993, LuGuangmingLu, LuoMetaLuo, luozenglin, Luwei, Luzhijing, lxliyou001, Ma1oneZhang, mch_ucchi, Miaohongkai, morningman, morrySnow, Mryange, mymeiyi, nanfeng, nanfeng, Nitin-Kashyap, PaiVallishPai, Petrichor, plat1ko, py023, q763562998, qidaye, QiHouliangQi, ranxiang327, realize096, rohitrs1983, sdhzwc, seawinde, seuhezhiqiang, seuhezhiqiang, shee, shuke987, shysnow, songguangfan, Stalary, starocean999, SunChenyangSun, sunny, SWJTU-ZhangLei, TangSiyang2001, Tanya-W, taoxutao, Uniqueyou, vhwzIs, walter, walter, wangbo, Wanghuan, wangqt, wangtao, wangtianyi2004, wenluowen, whuxingying, wsjz, wudi, wudongliang, wuwenchihdu, wyx123654, xiangran0327, Xiaocc, XiaoChangmingXiao, xiaokang, XieJiann, Xinxing, xiongjx, xuefengze, xueweizhang, XueYuhai, XuJianxu, xuke-hat, xy, xy720, xyfsjq, xzj7019, yagagagaga, yangshijie, YangYAN, yiguolei, yiguolei, yimeng, YinShaowenYin, Yoko, yongjinhou, ytwp, yuanyuan8983, yujian, yujun777, Yukang-Lian, Yulei-Yang, yuxuan-luo, zclllyybb, ZenoYang, zfr95, zgxme, zhangdong, zhangguoqiang, zhangstar333, zhangstar333, zhangy5, ZhangYu0123, zhannngchen, ZhaoLongZhao, zhaoshuo, zhengyu, zhiqqqq, ZhongJinHacker, ZhuArmandoZhu, zlw5307, ZouXinyiZou, zxealous, zy-kkk, zzwwhh, zzzxl1993, zzzzzzzs"})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,i,a){a.d(i,{Z:function(){return s},a:function(){return o}});var n=a(667294);let t={},r=n.createContext(t);function o(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);