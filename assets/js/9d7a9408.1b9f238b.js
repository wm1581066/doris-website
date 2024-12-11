"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["680808"],{478964:function(e,i,r){r.r(i),r.d(i,{metadata:()=>n,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.2","title":"Release 2.0.2","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/releasenotes/v2.0/release-2.0.2.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.2","permalink":"/docs/3.0/releasenotes/v2.0/release-2.0.2","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 2.0.2","language":"en"}}'),h=r("785893"),t=r("250065");let s={title:"Release 2.0.2",language:"en"},l="Release 2.0.2",a={},c=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Easier to use",id:"easier-to-use",level:3},{value:"New optimizer Nereids statistics collection improvement",id:"new-optimizer-nereids-statistics-collection-improvement",level:3},{value:"Better support for JDBC, HDFS, Hive, MySQL, Max Compute, Multi-Catalog",id:"better-support-for-jdbc-hdfs-hive-mysql-max-compute-multi-catalog",level:3},{value:"Performance for inverted index query",id:"performance-for-inverted-index-query",level:3},{value:"Improve Array functions",id:"improve-array-functions",level:3},{value:"Important Bug fixes",id:"important-bug-fixes",level:2},{value:"Big Thanks",id:"big-thanks",level:2}];function o(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.header,{children:(0,h.jsx)(i.h1,{id:"release-202",children:"Release 2.0.2"})}),"\n",(0,h.jsx)(i.p,{children:"Thanks to our community users and developers, 489 improvements and bug fixes have been made in Doris 2.0.2."}),"\n",(0,h.jsx)(i.h2,{id:"behavior-changes",children:"Behavior Changes"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24679",children:"Remove json -> operator convert to json_extract #24679"})}),"\n",(0,h.jsx)(i.p,{children:"Remove json '->' operator since it is conflicted with lambda function syntax. It's a syntax sugar for function json_extract and can be replaced with the former."}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24308",children:"Start the script to set metadata_failure_recovery #24308"})}),"\n",(0,h.jsx)(i.p,{children:"Move metadata_failure_recovery from fe.conf to start_fe.sh argument to prevent being used unexpectedly."}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24207",children:"Change ordinary type null value is \\N,complex type null value is null #24207"})}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23795",children:"Optimize priority_ network matching logic for be #23795"})}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/17730",children:"Fix cancel load failed because Job could not be cancelled\u2026 #17730"})}),"\n",(0,h.jsx)(i.p,{children:"Allow cancel a retrying load job."}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(i.h2,{id:"improvements",children:"Improvements"}),"\n",(0,h.jsx)(i.h3,{id:"easier-to-use",children:"Easier to use"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23887",children:"Support custom lib dir to save custom libs #23887"})}),"\n",(0,h.jsx)(i.p,{children:"Add a custom_lib dir to allow users place custom lib files and custom_lib will not be replaced."}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23784",children:"Optimize priority_ network matching logic #23784"})}),"\n",(0,h.jsx)(i.p,{children:"Optimize priority_network logic to avoid error when this config is wrong or not configured."}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23022",children:"Row policy support role #23022"})}),"\n",(0,h.jsx)(i.p,{children:"Support role based auth for row policy."}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(i.h3,{id:"new-optimizer-nereids-statistics-collection-improvement",children:"New optimizer Nereids statistics collection improvement"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23663",children:"Disable file cache while running analysis tasks. #23663"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23703",children:"Show column stats even when error occurred. #23703"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23965",children:"Support basic jdbc external table stats collection. #23965"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24625",children:"Skip unknown col stats check on __internal_scheam and information_schema #24625"})}),"\n"]}),"\n",(0,h.jsx)(i.h3,{id:"better-support-for-jdbc-hdfs-hive-mysql-max-compute-multi-catalog",children:"Better support for JDBC, HDFS, Hive, MySQL, Max Compute, Multi-Catalog"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24168",children:"Support hadoop viewfs. #24168"})}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22369",children:"Avoid calling checksum when replaying creating jdbc catalog and fix ranger issue #22369"})}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23868",children:"Optimize the JDBC Catalog connection error message #23868"})}),"\n",(0,h.jsx)(i.p,{children:"Improve property check and error message for JDBC catalog"}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24242",children:"Fix mc decimal type parse, fix wrong obj location #24242"})}),"\n",(0,h.jsx)(i.p,{children:"Fix some issues for Max Compute catalog"}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23391",children:"Support sql cache for hms catalog #23391"})}),"\n",(0,h.jsx)(i.p,{children:"SQL cache for Hive catalog"}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22869",children:"Merge hms partition events. #22869"})}),"\n",(0,h.jsx)(i.p,{children:"Improve performance for Hive metadata sync"}),"\n"]}),"\n",(0,h.jsxs)(i.li,{children:["\n",(0,h.jsx)(i.p,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/22702",children:"Add metadata_name_ids for quickly get catlogs,db,table and add profiling table in order to Compatible with mysql #22702"})}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(i.h3,{id:"performance-for-inverted-index-query",children:"Performance for inverted index query"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23952",children:"Add bkd index query cache to improve perf #23952"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24678",children:"Improve performance for count on index other than match #24678"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24751",children:"Improve match performance without index #24751"})}),"\n",(0,h.jsxs)(i.li,{children:[(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23871",children:"Optimize multiple terms conjunction query #23871"}),"\nImprove performance of MATCH_ALL"]}),"\n",(0,h.jsxs)(i.li,{children:[(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24389",children:"Optimize unnecessary conversions #24389"}),"\nImprove performance of MATCH"]}),"\n"]}),"\n",(0,h.jsx)(i.h3,{id:"improve-array-functions",children:"Improve Array functions"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsxs)(i.li,{children:["[",(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23630",children:"Fix old optimizer with some array literal functions #23630"})]}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24327",children:"Improve array union support multi params #24327"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24455",children:"Improve explode func with array nested complex type #24455"})}),"\n"]}),"\n",(0,h.jsx)(i.h2,{id:"important-bug-fixes",children:"Important Bug fixes"}),"\n",(0,h.jsxs)(i.ul,{children:["\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23601",children:"The parameter positions of timestamp diff function to sql are reversed #23601"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23630",children:"Fix old optimizer with some array literal functions #23630"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23555",children:"Fix query cache returns wrong result after deleting partitions. #23555"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/17644",children:"Fix potential data loss when clone task's dst tablet is cooldown replica #17644"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23779",children:"Fix array map batch append data with right next_array_item_rowid #23779"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23940",children:"Fix or to in rule #23940"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23860",children:"Fix 'char' function's toSql implementation is wrong #23860"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23973",children:"Record wrong best plan properties #23973"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24020",children:"Make TVF's distribution spec always be RANDOM #24020"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24039",children:"External scan use STORAGE_ANY instead of ANY as distibution #24039"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23958",children:"Runtimefilter target is not SlotReference #23958"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24104",children:"mv in select materialized_view should disable show table #24104"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24097",children:"Fail over to remote file reader if local cache failed #24097"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23852",children:"Fix revoke role operation cause fe down #23852"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsxs)(i.a,{href:"https://github.com/apache/doris/pull/24139",children:["Handle status code correctly and add a new error code ",(0,h.jsx)(i.code,{children:"ENTRY_NOT_FOUND"})," #24139"]})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsxs)(i.a,{href:"https://github.com/apache/doris/pull/24165",children:["Fix leaky abstraction and shield the status code ",(0,h.jsx)(i.code,{children:"END_OF_FILE"})," from upper layers #24165"]})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24164",children:"Fix bug that Read garbled files caused be crash. #24164"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsxs)(i.a,{href:"https://github.com/apache/doris/pull/24369",children:["Fix be core when user sepcified empty ",(0,h.jsx)(i.code,{children:"column_separator"})," using hdfs tvf #24369"]})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24372",children:"Fix need to restart BE after replacing the jar package in java-udf #24372"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24381",children:"Need to call 'set_version' in nested functions #24381"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24385",children:"windown_funnel compatibility issue with multi backends #24385"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24290",children:"correlated anti join shouldn't be translated to null aware anti join #24290"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24207",children:"Change ordinary type null value is \\N,complex type null value is null #24207"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24521",children:"Fix analyze failed when there are thousands of partitions. #24521"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24460",children:"Do not use enum as the data type for JavaUdfDataType. #24460"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24568",children:"Fix multi window projection issue temporarily #24568"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24610",children:"Make metadata compatible with 2.0.3 #24610"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24595",children:"Select outfile column order is wrong #24595"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24616",children:"Incorrect result of semi/anti mark join #24616"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24635",children:"Fix broker read issue #24635"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24625",children:"Skip unknown col stats check on __internal_scheam and information_schema #24625"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24572",children:"Fixed bug when parsing multi-character delimiters. #24572"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24578",children:"Fix timezone parse when there is no tzfile #24578"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/23943",children:"We need to issue an error when starting FE without setting the Java home environment #23943"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24697",children:"Enable_unique_key_partial_update should be forwarded to master #24697"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24681",children:"Fix paimon file catalog meta issue and replication num analysis issue #24681"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24617",children:"Add more log for ingest_binlog && Fix ingest_binlog not rewrite rowset_meta tablet_uid #24617"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24692",children:"Do not abort when a disk is broken #24692"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24700",children:"colocate join could not work well on full outer join #24700"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24389",children:"Optimize unnecessary conversions #24389"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24698",children:"Optimize the reading efficiency of nullable (string) columns. #24698"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24778",children:"Fix segment cache core when output rowset is nullptr #24778"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24782",children:"Fix duplicate key in schema change #24782"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24800",children:"Make metadata compatible for future version after 2.0.2 #24800"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24808",children:"Fix map/array deserialize string with quote pair #24808"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24636",children:"Failed on arm platform, with clang compiler and pch on, close #24633 #24636"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24981",children:"Table column order is changed if add a column and do truncate #24981"})}),"\n",(0,h.jsx)(i.li,{children:(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/pull/24949",children:"Make parser mode coarse grained by default #24949"})}),"\n"]}),"\n",(0,h.jsxs)(i.p,{children:["See the complete list of improvements and bug fixes on ",(0,h.jsx)(i.a,{href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.2-merged+is%3Aclosed",children:"github"})," ."]}),"\n",(0,h.jsx)(i.h2,{id:"big-thanks",children:"Big Thanks"}),"\n",(0,h.jsx)(i.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,h.jsxs)(i.p,{children:[(0,h.jsx)(i.a,{href:"https://github.com/adonis0147",children:"@adonis0147"})," ",(0,h.jsx)(i.a,{href:"https://github.com/airborne12",children:"@airborne12"})," ",(0,h.jsx)(i.a,{href:"https://github.com/amorynan",children:"@amorynan"})," ",(0,h.jsx)(i.a,{href:"https://github.com/AshinGau",children:"@AshinGau"})," ",(0,h.jsx)(i.a,{href:"https://github.com/BePPPower",children:"@BePPPower"})," ",(0,h.jsx)(i.a,{href:"https://github.com/BiteTheDDDDt",children:"@BiteTheDDDDt"})," ",(0,h.jsx)(i.a,{href:"https://github.com/bobhan1",children:"@bobhan1"})," ",(0,h.jsx)(i.a,{href:"https://github.com/ByteYue",children:"@ByteYue"})," ",(0,h.jsx)(i.a,{href:"https://github.com/caiconghui",children:"@caiconghui"})," ",(0,h.jsx)(i.a,{href:"https://github.com/CalvinKirs",children:"@CalvinKirs"})," ",(0,h.jsx)(i.a,{href:"https://github.com/cambyzju",children:"@cambyzju"})," ",(0,h.jsx)(i.a,{href:"https://github.com/ChengDaqi2023",children:"@ChengDaqi2023"})," ",(0,h.jsx)(i.a,{href:"https://github.com/ChinaYiGuan",children:"@ChinaYiGuan"})," ",(0,h.jsx)(i.a,{href:"https://github.com/CodeCooker17",children:"@CodeCooker17"})," ",(0,h.jsx)(i.a,{href:"https://github.com/csun5285",children:"@csun5285"})," ",(0,h.jsx)(i.a,{href:"https://github.com/dataroaring",children:"@dataroaring"})," ",(0,h.jsx)(i.a,{href:"https://github.com/deadlinefen",children:"@deadlinefen"})," ",(0,h.jsx)(i.a,{href:"https://github.com/DongLiang-0",children:"@DongLiang-0"})," ",(0,h.jsx)(i.a,{href:"https://github.com/Doris-Extras",children:"@Doris-Extras"})," ",(0,h.jsx)(i.a,{href:"https://github.com/dutyu",children:"@dutyu"})," ",(0,h.jsx)(i.a,{href:"https://github.com/eldenmoon",children:"@eldenmoon"})," ",(0,h.jsx)(i.a,{href:"https://github.com/englefly",children:"@englefly"})," ",(0,h.jsx)(i.a,{href:"https://github.com/freemandealer",children:"@freemandealer"})," ",(0,h.jsx)(i.a,{href:"https://github.com/Gabriel39",children:"@Gabriel39"})," ",(0,h.jsx)(i.a,{href:"https://github.com/gnehil",children:"@gnehil"})," ",(0,h.jsx)(i.a,{href:"https://github.com/GoGoWen",children:"@GoGoWen"})," ",(0,h.jsx)(i.a,{href:"https://github.com/gohalo",children:"@gohalo"})," ",(0,h.jsx)(i.a,{href:"https://github.com/HappenLee",children:"@HappenLee"})," ",(0,h.jsx)(i.a,{href:"https://github.com/hello-stephen",children:"@hello-stephen"})," ",(0,h.jsx)(i.a,{href:"https://github.com/HHoflittlefish777",children:"@HHoflittlefish777"})," ",(0,h.jsx)(i.a,{href:"https://github.com/hubgeter",children:"@hubgeter"})," ",(0,h.jsx)(i.a,{href:"https://github.com/hust-hhb",children:"@hust-hhb"})," ",(0,h.jsx)(i.a,{href:"https://github.com/ixzc",children:"@ixzc"})," ",(0,h.jsx)(i.a,{href:"https://github.com/JackDrogon",children:"@JackDrogon"})," ",(0,h.jsx)(i.a,{href:"https://github.com/jacktengg",children:"@jacktengg"})," ",(0,h.jsx)(i.a,{href:"https://github.com/jackwener",children:"@jackwener"})," ",(0,h.jsx)(i.a,{href:"https://github.com/Jibing-Li",children:"@Jibing-Li"})," ",(0,h.jsx)(i.a,{href:"https://github.com/JNSimba",children:"@JNSimba"})," ",(0,h.jsx)(i.a,{href:"https://github.com/kaijchen",children:"@kaijchen"})," ",(0,h.jsx)(i.a,{href:"https://github.com/kaka11chen",children:"@kaka11chen"})," ",(0,h.jsx)(i.a,{href:"https://github.com/Kikyou1997",children:"@Kikyou1997"})," ",(0,h.jsx)(i.a,{href:"https://github.com/Lchangliang",children:"@Lchangliang"})," ",(0,h.jsx)(i.a,{href:"https://github.com/LemonLiTree",children:"@LemonLiTree"})," ",(0,h.jsx)(i.a,{href:"https://github.com/liaoxin01",children:"@liaoxin01"})," ",(0,h.jsx)(i.a,{href:"https://github.com/LiBinfeng-01",children:"@LiBinfeng-01"})," ",(0,h.jsx)(i.a,{href:"https://github.com/liugddx",children:"@liugddx"})," ",(0,h.jsx)(i.a,{href:"https://github.com/luwei16",children:"@luwei16"})," ",(0,h.jsx)(i.a,{href:"https://github.com/mongo360",children:"@mongo360"})," ",(0,h.jsx)(i.a,{href:"https://github.com/morningman",children:"@morningman"})," ",(0,h.jsx)(i.a,{href:"https://github.com/morrySnow",children:"@morrySnow"})," @mrhhsg @Mryange @mymeiyi @neuyilan @pingchunzhang @platoneko @qidaye @realize096 @RYH61 @shuke987 @sohardforaname @starocean999 @SWJTU-ZhangLei @TangSiyang2001 @Tech-Circle-48 @w41ter @wangbo @wsjz @wuwenchi @wyx123654 @xiaokang @XieJiann @xinyiZzz @XuJianxu @xutaoustc @xy720 @xyfsjq @xzj7019 @yiguolei @yujun777 @Yukang-Lian @Yulei-Yang @zclllyybb @zddr @zhangguoqiang666 @zhangstar333 @ZhangYu0123 @zhannngchen @zxealous @zy-kkk @zzzxl1993 @zzzzzzzs"]})]})}function d(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,h.jsx)(i,{...e,children:(0,h.jsx)(o,{...e})}):o(e)}},250065:function(e,i,r){r.d(i,{Z:function(){return l},a:function(){return s}});var n=r(667294);let h={},t=n.createContext(h);function s(e){let i=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:s(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);