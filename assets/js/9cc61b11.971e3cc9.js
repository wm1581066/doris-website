"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["441141"],{567729:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>o,assets:()=>h,toc:()=>a,frontMatter:()=>t});var s=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.5","title":"Release 1.2.5","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/releasenotes/v1.2/release-1.2.5.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.5","permalink":"/docs/3.0/releasenotes/v1.2/release-1.2.5","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 1.2.5","language":"en"}}'),r=i("785893"),l=i("250065");let t={title:"Release 1.2.5",language:"en"},d="Behavior Changed",h={},a=[];function c(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In version 1.2.5, the Doris team has fixed nearly 210 issues or performance improvements since the release of version 1.2.4. At the same time, version 1.2.5 is also an iterative version of version 1.2.4, which has higher stability. It is recommended that all users upgrade to this version."}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"behavior-changed",children:"Behavior Changed"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"start_be.sh"})," script will check that the maximum number of file handles in the system must be greater than or equal to 65536, otherwise the startup will fail."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The BE configuration item ",(0,r.jsx)(n.code,{children:"enable_quick_compaction"})," is set to true by default. The Quick Compaction is enabled by default. This feature is used to optimize the problem of small files in the case of large batch import."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After modifying the dynamic partition attribute of the table, it will no longer take effect immediately, but wait for the next task scheduling of the dynamic partition table to avoid some deadlock problems."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"improvement",children:"Improvement"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optimize the use of bthread and pthread to reduce the RPC blocking problem during the query process."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A button to download Profile is added to the Profile page of the FE web UI."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Added FE configuration ",(0,r.jsx)(n.code,{children:"recover_with_skip_missing_version"}),", which is used to query to skip the problematic replica under certain failure conditions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The row-level permission function supports external Catalog."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Hive Catalog supports automatic refreshing of kerberos tickets on the BE side without manual refreshing."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["JDBC Catalog supports tables under the MySQL/ClickHouse system database (",(0,r.jsx)(n.code,{children:"information_schema"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed the problem of incorrect query results caused by low-cardinality column optimization"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several authentication and compatibility issues accessing HDFS."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several issues with float/double and decimal types."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several issues with date/datetimev2 types."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several query execution and planning issues."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several issues with JDBC Catalog."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several query-related issues with Hive Catalog, and Hive Metastore metadata synchronization issues."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fix the problem that the result of ",(0,r.jsx)(n.code,{children:"SHOW LOAD PROFILE"})," statement is incorrect."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several memory related issues."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fixed several issues with ",(0,r.jsx)(n.code,{children:"CREATE TABLE AS SELECT"})," functionality."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fix the problem that the jsonb type causes BE to crash on CPU that do not support avx2."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several issues with dynamic partitions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several issues with TOPN query optimization."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fixed several issues with the Unique Key Merge-on-Write table model."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"big-thanks",children:"Big Thanks"}),"\n",(0,r.jsx)(n.p,{children:"58 contributors participated in the improvement and release of 1.2.5, and thank them for their hard work and dedication:"}),"\n",(0,r.jsx)(n.p,{children:"@adonis0147"}),"\n",(0,r.jsx)(n.p,{children:"@airborne12"}),"\n",(0,r.jsx)(n.p,{children:"@AshinGau"}),"\n",(0,r.jsx)(n.p,{children:"@BePPPower"}),"\n",(0,r.jsx)(n.p,{children:"@BiteTheDDDDt"}),"\n",(0,r.jsx)(n.p,{children:"@caiconghui"}),"\n",(0,r.jsx)(n.p,{children:"@CalvinKirs"}),"\n",(0,r.jsx)(n.p,{children:"@cambyzju"}),"\n",(0,r.jsx)(n.p,{children:"@caoliang-web"}),"\n",(0,r.jsx)(n.p,{children:"@dataroaring"}),"\n",(0,r.jsx)(n.p,{children:"@Doris-Extras"}),"\n",(0,r.jsx)(n.p,{children:"@dujl"}),"\n",(0,r.jsx)(n.p,{children:"@dutyu"}),"\n",(0,r.jsx)(n.p,{children:"@fsilent"}),"\n",(0,r.jsx)(n.p,{children:"@Gabriel39"}),"\n",(0,r.jsx)(n.p,{children:"@gitccl"}),"\n",(0,r.jsx)(n.p,{children:"@gnehil"}),"\n",(0,r.jsx)(n.p,{children:"@GoGoWen"}),"\n",(0,r.jsx)(n.p,{children:"@gongzexin"}),"\n",(0,r.jsx)(n.p,{children:"@HappenLee"}),"\n",(0,r.jsx)(n.p,{children:"@herry2038"}),"\n",(0,r.jsx)(n.p,{children:"@jacktengg"}),"\n",(0,r.jsx)(n.p,{children:"@Jibing-Li"}),"\n",(0,r.jsx)(n.p,{children:"@kaka11chen"}),"\n",(0,r.jsx)(n.p,{children:"@Kikyou1997"}),"\n",(0,r.jsx)(n.p,{children:"@LemonLiTree"}),"\n",(0,r.jsx)(n.p,{children:"@liaoxin01"}),"\n",(0,r.jsx)(n.p,{children:"@LiBinfeng-01"}),"\n",(0,r.jsx)(n.p,{children:"@luwei16"}),"\n",(0,r.jsx)(n.p,{children:"@Moonm3n"}),"\n",(0,r.jsx)(n.p,{children:"@morningman"}),"\n",(0,r.jsx)(n.p,{children:"@mrhhsg"}),"\n",(0,r.jsx)(n.p,{children:"@Mryange"}),"\n",(0,r.jsx)(n.p,{children:"@nextdreamblue"}),"\n",(0,r.jsx)(n.p,{children:"@nsnhuang"}),"\n",(0,r.jsx)(n.p,{children:"@qidaye"}),"\n",(0,r.jsx)(n.p,{children:"@Shoothzj"}),"\n",(0,r.jsx)(n.p,{children:"@sohardforaname"}),"\n",(0,r.jsx)(n.p,{children:"@stalary"}),"\n",(0,r.jsx)(n.p,{children:"@starocean999"}),"\n",(0,r.jsx)(n.p,{children:"@SWJTU-ZhangLei"}),"\n",(0,r.jsx)(n.p,{children:"@wsjz"}),"\n",(0,r.jsx)(n.p,{children:"@xiaokang"}),"\n",(0,r.jsx)(n.p,{children:"@xinyiZzz"}),"\n",(0,r.jsx)(n.p,{children:"@yangzhg"}),"\n",(0,r.jsx)(n.p,{children:"@yiguolei"}),"\n",(0,r.jsx)(n.p,{children:"@yixiutt"}),"\n",(0,r.jsx)(n.p,{children:"@yujun777"}),"\n",(0,r.jsx)(n.p,{children:"@Yulei-Yang"}),"\n",(0,r.jsx)(n.p,{children:"@yuxuan-luo"}),"\n",(0,r.jsx)(n.p,{children:"@zclllyybb"}),"\n",(0,r.jsx)(n.p,{children:"@zddr"}),"\n",(0,r.jsx)(n.p,{children:"@zenoyang"}),"\n",(0,r.jsx)(n.p,{children:"@zhangstar333"}),"\n",(0,r.jsx)(n.p,{children:"@zhannngchen"}),"\n",(0,r.jsx)(n.p,{children:"@zxealous"}),"\n",(0,r.jsx)(n.p,{children:"@zy-kkk"}),"\n",(0,r.jsx)(n.p,{children:"@zzzzzzzs"})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return t}});var s=i(667294);let r={},l=s.createContext(r);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);