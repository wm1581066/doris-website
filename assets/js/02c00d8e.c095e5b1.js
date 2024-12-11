"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["363412"],{16362:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.0","title":"Release 1.1.0","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/releasenotes/v1.1/release-1.1.0.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.0","permalink":"/docs/2.0/releasenotes/v1.1/release-1.1.0","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 1.1.0","language":"en"}}'),a=i("785893"),r=i("250065");let o={title:"Release 1.1.0",language:"en"},s=void 0,d={},l=[{value:"Upgrade Notes",id:"upgrade-notes",level:2},{value:"The vectorized execution engine is enabled by default",id:"the-vectorized-execution-engine-is-enabled-by-default",level:3},{value:"BE Binary File Renaming",id:"be-binary-file-renaming",level:3},{value:"Segment storage format upgrade",id:"segment-storage-format-upgrade",level:3},{value:"Normal Upgrade",id:"normal-upgrade",level:3},{value:"Features",id:"features",level:2},{value:"Support random distribution of data [experimental]",id:"support-random-distribution-of-data-experimental",level:3},{value:"Support for creating Iceberg external tables[experimental]",id:"support-for-creating-iceberg-external-tablesexperimental",level:3},{value:"Added ZSTD compression algorithm",id:"added-zstd-compression-algorithm",level:3},{value:"Improvements",id:"improvements",level:2},{value:"More comprehensive vectorization support",id:"more-comprehensive-vectorization-support",level:3},{value:"Compaction logic optimization and real-time guarantee",id:"compaction-logic-optimization-and-real-time-guarantee",level:3},{value:"Read efficiency optimization for Parquet and ORC files",id:"read-efficiency-optimization-for-parquet-and-orc-files",level:3},{value:"Safer metadata Checkpoint",id:"safer-metadata-checkpoint",level:3},{value:"Bugfix",id:"bugfix",level:2},{value:"Fix the problem that the data cannot be queried due to the missing data version.(Serious)",id:"fix-the-problem-that-the-data-cannot-be-queried-due-to-the-missing-data-versionserious",level:3},{value:"Fix the problem that the resource isolation is invalid for the resource usage limit of loading tasks (Moderate)",id:"fix-the-problem-that-the-resource-isolation-is-invalid-for-the-resource-usage-limit-of-loading-tasks-moderate",level:3},{value:"Use HTTP BRPC to transfer network data packets over 2GB (Moderate)",id:"use-http-brpc-to-transfer-network-data-packets-over-2gb-moderate",level:3},{value:"Others",id:"others",level:2},{value:"Disabling Mini Load",id:"disabling-mini-load",level:3},{value:"Completely disable the SegmentV1 storage format",id:"completely-disable-the-segmentv1-storage-format",level:3},{value:"Limit the maximum length of String type",id:"limit-the-maximum-length-of-string-type",level:3},{value:"Fix fastjson related vulnerabilities",id:"fix-fastjson-related-vulnerabilities",level:3},{value:"Added <code>ADMIN DIAGNOSE TABLET</code> command",id:"added-admin-diagnose-tablet-command",level:3},{value:"Download to Use",id:"download-to-use",level:2},{value:"Download Link",id:"download-link",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Thanks",id:"thanks",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In version 1.1, we realized the full vectorization of the computing layer and storage layer, and officially enabled the vectorized execution engine as a stable function. All queries are executed by the vectorized execution engine by default, and the performance is 3-5 times higher than the previous version. It increases the ability to access the external tables of Apache Iceberg and supports federated query of data in Doris and Iceberg, and expands the analysis capabilities of Apache Doris on the data lake; on the basis of the original LZ4, the ZSTD compression algorithm is added , further improves the data compression rate; fixed many performance and stability problems in previous versions, greatly improving system stability. Downloading and using is recommended."}),"\n",(0,a.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade Notes"}),"\n",(0,a.jsx)(n.h3,{id:"the-vectorized-execution-engine-is-enabled-by-default",children:"The vectorized execution engine is enabled by default"}),"\n",(0,a.jsxs)(n.p,{children:["In version 1.0, we introduced the vectorized execution engine as an experimental feature and Users need to manually enable it when executing queries by configuring the session variables through ",(0,a.jsx)(n.code,{children:"set batch_size = 4096"})," and ",(0,a.jsx)(n.code,{children:"set enable_vectorized_engine = true"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:["In version 1.1, we officially fully enabled the vectorized execution engine as a stable function. The session variable ",(0,a.jsx)(n.code,{children:"enable_vectorized_engine"})," is set to true by default. All queries are executed by default through the vectorized execution engine."]}),"\n",(0,a.jsx)(n.h3,{id:"be-binary-file-renaming",children:"BE Binary File Renaming"}),"\n",(0,a.jsx)(n.p,{children:"BE binary file has been renamed from palo_be to doris_be . Please pay attention to modifying the relevant scripts if you used to rely on process names for cluster management and other operations."}),"\n",(0,a.jsx)(n.h3,{id:"segment-storage-format-upgrade",children:"Segment storage format upgrade"}),"\n",(0,a.jsx)(n.p,{children:"The storage format of earlier versions of Apache Doris was Segment V1. In version 0.12, we had implemented Segment V2 as a new storage format, which introduced Bitmap indexes, memory tables, page cache, dictionary compression, delayed materialization and many other features. Starting from version 0.13, the default storage format for newly created tables is Segment V2, while maintaining compatibility with the Segment V1 format."}),"\n",(0,a.jsx)(n.p,{children:"In order to ensure the maintainability of the code structure and reduce the additional learning and development costs caused by redundant historical codes, we have decided to no longer support the Segment v1 storage format from the next version. It is expected that this part of the code will be deleted in the Apache Doris 1.2 version."}),"\n",(0,a.jsx)(n.h3,{id:"normal-upgrade",children:"Normal Upgrade"}),"\n",(0,a.jsx)(n.p,{children:"For normal upgrade operations, you can perform rolling upgrades according to the cluster upgrade documentation on the official website."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://doris.apache.org//docs/admin-manual/cluster-management/upgrade",children:"https://doris.apache.org//docs/admin-manual/cluster-management/upgrade"})}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.h3,{id:"support-random-distribution-of-data-experimental",children:"Support random distribution of data [experimental]"}),"\n",(0,a.jsx)(n.p,{children:"In some scenarios (such as log data analysis), users may not be able to find a suitable bucket key to avoid data skew, so the system needs to provide additional distribution methods to solve the problem."}),"\n",(0,a.jsxs)(n.p,{children:["Therefore, when creating a table you can set ",(0,a.jsx)(n.code,{children:"DISTRIBUTED BY random BUCKETS number"}),"to use random distribution, the data will be randomly written to a single tablet when importing to reduce the data fanout during the loading process. And reduce resource overhead and improve system stability."]}),"\n",(0,a.jsx)(n.h3,{id:"support-for-creating-iceberg-external-tablesexperimental",children:"Support for creating Iceberg external tables[experimental]"}),"\n",(0,a.jsx)(n.p,{children:"Iceberg external tables provide Apache Doris with direct access to data stored in Iceberg. Through Iceberg external tables, federated queries on data stored in local storage and Iceberg can be implemented, which saves tedious data loading work, simplifies the system architecture for data analysis, and performs more complex analysis operations."}),"\n",(0,a.jsx)(n.p,{children:"In version 1.1, Apache Doris supports creating Iceberg external tables and querying data, and supports automatic synchronization of all table schemas in the Iceberg database through the REFRESH command."}),"\n",(0,a.jsx)(n.h3,{id:"added-zstd-compression-algorithm",children:"Added ZSTD compression algorithm"}),"\n",(0,a.jsx)(n.p,{children:"At present, the data compression method in Apache Doris is uniformly specified by the system, and the default is LZ4. For some scenarios that are sensitive to data storage costs, the original data compression ratio requirements cannot be met."}),"\n",(0,a.jsx)(n.p,{children:'In version 1.1, users can set "compression"="zstd" in the table properties to specify the compression method as ZSTD when creating a table. In the 25GB 110 million lines of text log test data, the highest compression rate is nearly 10 times, which is 53% higher than the original compression rate, and the speed of reading data from disk and decompressing it is increased by 30%.'}),"\n",(0,a.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,a.jsx)(n.h3,{id:"more-comprehensive-vectorization-support",children:"More comprehensive vectorization support"}),"\n",(0,a.jsx)(n.p,{children:"In version 1.1, we implemented full vectorization of the compute and storage layers, including:"}),"\n",(0,a.jsx)(n.p,{children:"Implemented vectorization of all built-in functions"}),"\n",(0,a.jsx)(n.p,{children:"The storage layer implements vectorization and supports dictionary optimization for low-cardinality string columns"}),"\n",(0,a.jsx)(n.p,{children:"Optimized and resolved numerous performance and stability issues with the vectorization engine."}),"\n",(0,a.jsx)(n.p,{children:"We tested the performance of Apache Doris version 1.1 and version 0.15 on the SSB and TPC-H standard test datasets:"}),"\n",(0,a.jsx)(n.p,{children:"On all 13 SQLs in the SSB test data set, version 1.1 is better than version 0.15, and the overall performance is improved by about 3 times, which solves the problem of performance degradation in some scenarios in version 1.0;"}),"\n",(0,a.jsx)(n.p,{children:"On all 22 SQLs in the TPC-H test data set, version 1.1 is better than version 0.15, the overall performance is improved by about 4.5 times, and the performance of some scenarios is improved by more than ten times;"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(632374).Z+"",width:"1280",height:"554"})}),"\n",(0,a.jsx)(n.p,{align:"center",children:"SSB Benchmark"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(262467).Z+"",width:"1280",height:"596"})}),"\n",(0,a.jsx)(n.p,{align:"center",children:"TPC-H Benchmark"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Performance test report"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://doris.apache.org//docs/benchmark/ssb",children:"https://doris.apache.org//docs/benchmark/ssb"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://doris.apache.org//docs/benchmark/tpch",children:"https://doris.apache.org//docs/benchmark/tpch"})}),"\n",(0,a.jsx)(n.h3,{id:"compaction-logic-optimization-and-real-time-guarantee",children:"Compaction logic optimization and real-time guarantee"}),"\n",(0,a.jsx)(n.p,{children:"In Apache Doris, each commit will generate a data version. In high concurrent write scenarios, -235 errors are prone to occur due to too many data versions and untimely compaction, and query performance will also decrease accordingly."}),"\n",(0,a.jsx)(n.p,{children:"In version 1.1, we introduced QuickCompaction, which will actively trigger compaction when the data version increases. At the same time, by improving the ability to scan fragment metadata, it can quickly find fragments with too many data versions and trigger compaction. Through active triggering and passive scanning, the real-time problem of data merging is completely solved."}),"\n",(0,a.jsx)(n.p,{children:"At the same time, for high-frequency small file cumulative compaction, the scheduling and isolation of compaction tasks is implemented to prevent the heavyweight base compaction from affecting the merging of new data."}),"\n",(0,a.jsx)(n.p,{children:"Finally, for the merging of small files, the strategy of merging small files is optimized, and the method of gradient merging is adopted. Each time the files participating in the merging belong to the same data magnitude, it prevents versions with large differences in size from merging, and gradually merges hierarchically. , reducing the number of times a single file participates in merging, which can greatly save the CPU consumption of the system."}),"\n",(0,a.jsx)(n.p,{children:"When the data upstream maintains a write frequency of 10w per second (20 concurrent write tasks, 5000 rows per job, and checkpoint interval of 1s), version 1.1 behaves as follows:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Quick data consolidation: Tablet version remains below 50 and compaction score is stable. Compared with the -235 problem that frequently occurred during high concurrent writing in the previous version, the compaction merge efficiency has been improved by more than 10 times."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Significantly reduced CPU resource consumption: The strategy has been optimized for small file Compaction. In the above scenario of high concurrent writing, CPU resource consumption is reduced by 25%;"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Stable query time consumption: The overall orderliness of data is improved, and the fluctuation of query time consumption is greatly reduced. The query time consumption during high concurrent writing is the same as that of only querying, and the query performance is improved by 3-4 times compared with the previous version."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"read-efficiency-optimization-for-parquet-and-orc-files",children:"Read efficiency optimization for Parquet and ORC files"}),"\n",(0,a.jsx)(n.p,{children:"By adjusting arrow parameters, arrow's multi-threaded read capability is used to speed up Arrow's reading of each row_group, and it is modified to SPSC model to reduce the cost of waiting for the network through prefetching. After optimization, the performance of Parquet file import is improved by 4 to 5 times."}),"\n",(0,a.jsx)(n.h3,{id:"safer-metadata-checkpoint",children:"Safer metadata Checkpoint"}),"\n",(0,a.jsx)(n.p,{children:"By double-checking the image files generated after the metadata checkpoint and retaining the function of historical image files, the problem of metadata corruption caused by image file errors is solved."}),"\n",(0,a.jsx)(n.h2,{id:"bugfix",children:"Bugfix"}),"\n",(0,a.jsx)(n.h3,{id:"fix-the-problem-that-the-data-cannot-be-queried-due-to-the-missing-data-versionserious",children:"Fix the problem that the data cannot be queried due to the missing data version.(Serious)"}),"\n",(0,a.jsx)(n.p,{children:"This issue was introduced in version 1.0 and may result in the loss of data versions for multiple replicas."}),"\n",(0,a.jsx)(n.h3,{id:"fix-the-problem-that-the-resource-isolation-is-invalid-for-the-resource-usage-limit-of-loading-tasks-moderate",children:"Fix the problem that the resource isolation is invalid for the resource usage limit of loading tasks (Moderate)"}),"\n",(0,a.jsx)(n.p,{children:"In 1.1, the broker load and routine load will use Backends with specified resource tags to do the load."}),"\n",(0,a.jsx)(n.h3,{id:"use-http-brpc-to-transfer-network-data-packets-over-2gb-moderate",children:"Use HTTP BRPC to transfer network data packets over 2GB (Moderate)"}),"\n",(0,a.jsx)(n.p,{children:"In the previous version, when the data transmitted between Backends through BRPC exceeded 2GB,\nit may cause data transmission errors."}),"\n",(0,a.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,a.jsx)(n.h3,{id:"disabling-mini-load",children:"Disabling Mini Load"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"/_load"})," interface is disabled by default, please use ",(0,a.jsx)(n.code,{children:"the /_stream_load"})," interface uniformly.\nOf course, you can re-enable it by turning off the FE configuration item ",(0,a.jsx)(n.code,{children:"disable_mini_load"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The Mini Load interface will be completely removed in version 1.2."}),"\n",(0,a.jsx)(n.h3,{id:"completely-disable-the-segmentv1-storage-format",children:"Completely disable the SegmentV1 storage format"}),"\n",(0,a.jsxs)(n.p,{children:["Data in SegmentV1 format is no longer allowed to be created. Existing data can continue to be accessed normally.\nYou can use the ",(0,a.jsx)(n.code,{children:"ADMIN SHOW TABLET STORAGE FORMAT"})," statement to check whether the data in SegmentV1 format\nstill exists in the cluster. And convert to SegmentV2 through the data conversion command"]}),"\n",(0,a.jsx)(n.p,{children:"Access to SegmentV1 data will no longer be supported in version 1.2."}),"\n",(0,a.jsx)(n.h3,{id:"limit-the-maximum-length-of-string-type",children:"Limit the maximum length of String type"}),"\n",(0,a.jsx)(n.p,{children:"In previous versions, String types were allowed a maximum length of 2GB.\nIn version 1.1, we will limit the maximum length of the string type to 1MB. Strings longer than this length cannot be written anymore.\nAt the same time, using the String type as a partitioning or bucketing column of a table is no longer supported."}),"\n",(0,a.jsx)(n.p,{children:"The String type that has been written can be accessed normally."}),"\n",(0,a.jsx)(n.h3,{id:"fix-fastjson-related-vulnerabilities",children:"Fix fastjson related vulnerabilities"}),"\n",(0,a.jsx)(n.p,{children:"Update to Canal version to fix fastjson security vulnerability."}),"\n",(0,a.jsxs)(n.h3,{id:"added-admin-diagnose-tablet-command",children:["Added ",(0,a.jsx)(n.code,{children:"ADMIN DIAGNOSE TABLET"})," command"]}),"\n",(0,a.jsx)(n.p,{children:"Used to quickly diagnose problems with the specified tablet."}),"\n",(0,a.jsx)(n.h2,{id:"download-to-use",children:"Download to Use"}),"\n",(0,a.jsx)(n.h3,{id:"download-link",children:"Download Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://doris.apache.org/download",children:"hhttps://doris.apache.org/download"})}),"\n",(0,a.jsx)(n.h3,{id:"feedback",children:"Feedback"}),"\n",(0,a.jsx)(n.p,{children:"If you encounter any problems with use, please feel free to contact us through GitHub discussion forum or Dev e-mail group anytime."}),"\n",(0,a.jsxs)(n.p,{children:["GitHub Forum: ",(0,a.jsx)(n.a,{href:"https://github.com/apache/doris/discussions",children:"https://github.com/apache/doris/discussions"})]}),"\n",(0,a.jsxs)(n.p,{children:["Mailing list: ",(0,a.jsx)(n.a,{href:"dev@doris.apache.org",children:"dev@doris.apache.org"})]}),"\n",(0,a.jsx)(n.h2,{id:"thanks",children:"Thanks"}),"\n",(0,a.jsx)(n.p,{children:"Thanks to everyone who has contributed to this release:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n@adonis0147\n\n@airborne12\n\n@amosbird\n\n@aopangzi\n\n@arthuryangcs\n\n@awakeljw\n\n@BePPPower\n\n@BiteTheDDDDt\n\n@bridgeDream\n\n@caiconghui\n\n@cambyzju\n\n@ccoffline\n\n@chenlinzhong\n\n@daikon12\n\n@DarvenDuan\n\n@dataalive\n\n@dataroaring\n\n@deardeng\n\n@Doris-Extras\n\n@emerkfu\n\n@EmmyMiao87\n\n@englefly\n\n@Gabriel39\n\n@GoGoWen\n\n@gtchaos\n\n@HappenLee\n\n@hello-stephen\n\n@Henry2SS\n\n@hewei-nju\n\n@hf200012\n\n@jacktengg\n\n@jackwener\n\n@Jibing-Li\n\n@JNSimba\n\n@kangshisen\n\n@Kikyou1997\n\n@kylinmac\n\n@Lchangliang\n\n@leo65535\n\n@liaoxin01\n\n@liutang123\n\n@lovingfeel\n\n@luozenglin\n\n@luwei16\n\n@luzhijing\n\n@mklzl\n\n@morningman\n\n@morrySnow\n\n@nextdreamblue\n\n@Nivane\n\n@pengxiangyu\n\n@qidaye\n\n@qzsee\n\n@SaintBacchus\n\n@SleepyBear96\n\n@smallhibiscus\n\n@spaces-X\n\n@stalary\n\n@starocean999\n\n@steadyBoy\n\n@SWJTU-ZhangLei\n\n@Tanya-W\n\n@tarepanda1024\n\n@tianhui5\n\n@Userwhite\n\n@wangbo\n\n@wangyf0555\n\n@weizuo93\n\n@whutpencil\n\n@wsjz\n\n@wunan1210\n\n@xiaokang\n\n@xinyiZzz\n\n@xlwh\n\n@xy720\n\n@yangzhg\n\n@Yankee24\n\n@yiguolei\n\n@yinzhijian\n\n@yixiutt\n\n@zbtzbtzbt\n\n@zenoyang\n\n@zhangstar333\n\n@zhangyifan27\n\n@zhannngchen\n\n@zhengshengjun\n\n@zhengshiJ\n\n@zingdle\n\n@zuochunwei\n\n@zy-kkk\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},632374:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/release-note-1.1.0-SSB-6067d10e7f8b966be8da2b64950622fb.png"},262467:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/release-note-1.1.0-TPC-H-7d6975b410de89a004c7f058226a02da.png"},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var t=i(667294);let a={},r=t.createContext(a);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);