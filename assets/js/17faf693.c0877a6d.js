"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["204164"],{62494:function(e,o,t){t.r(o),t.d(o,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"compute-storage-decoupled/overview","title":"Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/compute-storage-decoupled/overview.md","sourceDirName":"compute-storage-decoupled","slug":"/compute-storage-decoupled/overview","permalink":"/docs/3.0/compute-storage-decoupled/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Overview","language":"en"},"sidebar":"docs","previous":{"title":"SQL Converter for Apache Doris","permalink":"/docs/3.0/lakehouse/sql-dialect"},"next":{"title":"Doris Compute-Storage Decoupled Deployment Preparation","permalink":"/docs/3.0/compute-storage-decoupled/before-deployment"}}'),n=t("785893"),r=t("250065");let a={title:"Overview",language:"en"},i=void 0,c={},d=[{value:"<strong>Compute-storage coupled VS decoupled</strong>",id:"compute-storage-coupled-vs-decoupled",level:2},{value:"<strong>Compute-storage coupled</strong>",id:"compute-storage-coupled",level:3},{value:"<strong>Compute-storage decoupled</strong>",id:"compute-storage-decoupled",level:3},{value:"How to choose",id:"how-to-choose",level:2},{value:"Advantages of compute-storage coupled mode",id:"advantages-of-compute-storage-coupled-mode",level:3},{value:"Applicable scenarios of compute-storage coupled mode",id:"applicable-scenarios-of-compute-storage-coupled-mode",level:3},{value:"Advantages of compute-storage decoupled mode",id:"advantages-of-compute-storage-decoupled-mode",level:3},{value:"Applicable scenarios of compute-storage decoupled mode",id:"applicable-scenarios-of-compute-storage-decoupled-mode",level:3},{value:"Workload isolation across compute clusters",id:"workload-isolation-across-compute-clusters",level:2}];function l(e){let o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"This article introduces the differences, advantages, and applicable scenarios of the compute-storage coupled mode and compute-storage decoupled mode of Doris, providing a reference for users' selection."}),"\n",(0,n.jsxs)(o.p,{children:["The following sections will describe in detail how to deploy and use Apache Doris in the compute-storage decoupled mode. For information on deployment in compute-storage coupled mode, please refer to the ",(0,n.jsx)(o.a,{href:"/docs/3.0/install/cluster-deployment/standard-deployment",children:"Cluster Deployment"})," section."]}),"\n",(0,n.jsx)(o.h2,{id:"compute-storage-coupled-vs-decoupled",children:(0,n.jsx)(o.strong,{children:"Compute-storage coupled VS decoupled"})}),"\n",(0,n.jsxs)(o.p,{children:["The overall architecture of Doris consists of two types of processes: Frontend (FE) and Backend (BE). The FE is primarily responsible for user request access, query parsing and planning, metadata management, and node management. The BE is responsible for data storage and query plan execution. (",(0,n.jsx)(o.a,{href:"../../gettingStarted/what-is-apache-doris",children:"More information"}),")"]}),"\n",(0,n.jsx)(o.h3,{id:"compute-storage-coupled",children:(0,n.jsx)(o.strong,{children:"Compute-storage coupled"})}),"\n",(0,n.jsx)(o.p,{children:"In the compute-storage coupled mode, the BE nodes perform both data storage and computation, and multiple BE nodes forms a massively parallel processing (MPP) distributed computing architecture."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"compute-storage-coupled",src:t(826222).Z+"",width:"1280",height:"787"})}),"\n",(0,n.jsx)(o.h3,{id:"compute-storage-decoupled",children:(0,n.jsx)(o.strong,{children:"Compute-storage decoupled"})}),"\n",(0,n.jsx)(o.p,{children:"The BE nodes no longer store the primary data. Instead, the shared storage layer serves as the unified primary data storage. Additionally, to overcome the performance loss caused by the limitations of the underlying object storage system and the overhead of network transmission, Doris introduces a high-speed cache on the local compute nodes."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"compute-storage-decoupled",src:t(150914).Z+"",width:"1831",height:"1126"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Meta data layer:"})}),"\n",(0,n.jsx)(o.p,{children:"The FE stores metadata, job information, permissions, and other MySQL protocol-dependent data."}),"\n",(0,n.jsx)(o.p,{children:"Meta Service is the Doris metadata service in the compute-storage decoupling mode. It is responsible for data import transaction processing, tablet meta, rowset meta, and cluster resource management. It is a stateless service that can scale horizontally."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Computation layer:"})}),"\n",(0,n.jsx)(o.p,{children:"In the compute-storage decoupled mode, the BE nodes are stateless. They cache a portion of the tablet metadata and data to improve query performance."}),"\n",(0,n.jsx)(o.p,{children:"A compute cluster is a collection of stateless BE nodes serving as the computing resources. Multiple compute clusters share a single set of data, and the compute clusters can be elastically scaled by adding or removing nodes as needed."}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsx)(o.p,{children:'The concept of compute cluster in the compute-storage decoupled mode is distinct from the "cluster" discussed in the [Cluster Deployment] and [Create Cluster] sections.'}),(0,n.jsx)(o.p,{children:'In the context of the compute-storage decoupled mode, the "Compute Cluster" specifically refers to the collection of stateless BE nodes that serve as the computing resources, rather than the complete distributed system consisting of multiple Apache Doris nodes as described in the [Cluster Deployment] and [Create Cluster] sections.'})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Shared storage layer:"})}),"\n",(0,n.jsx)(o.p,{children:"The shared storage layer stores the data files, including segment files and the inverted index files."}),"\n",(0,n.jsx)(o.h2,{id:"how-to-choose",children:"How to choose"}),"\n",(0,n.jsx)(o.h3,{id:"advantages-of-compute-storage-coupled-mode",children:"Advantages of compute-storage coupled mode"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Simple deployment"}),": Apache Doris does not depend on external shared file systems or object storage. It only requires the deployment of the FE and BE processes on physical servers to set up the cluster. The cluster can be scaled from a single node to hundreds of nodes. Such architecture also enhances system stability."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"High performance"}),": When executing computations, the compute nodes in Apache Doris can directly access the local storage. This means it can fully utilize the machine I/O, and achieve higher query performance by reducing unnecessary network overhead."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"applicable-scenarios-of-compute-storage-coupled-mode",children:"Applicable scenarios of compute-storage coupled mode"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"For simple usage or a quick trial of Doris, or for use in development and testing environments;"}),"\n",(0,n.jsx)(o.li,{children:"When there is a lack of reliable shared storage options (HDFS, Ceph, or object storage, etc.);"}),"\n",(0,n.jsx)(o.li,{children:"When different business teams in the company maintain Apache Doris independently, without dedicated DBA staff to manage the Doris cluster;"}),"\n",(0,n.jsx)(o.li,{children:"When there is no requirement for high elastic scalability, no need for Kubernetes containerization, and no need to run on public or private clouds."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"advantages-of-compute-storage-decoupled-mode",children:"Advantages of compute-storage decoupled mode"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Elastic computing resources"}),": Apache Doris allows using different scales of computing resources at different time points to serve different business requests. In simple terms, it supports on-demand computing resources to save costs."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"(Complete) isolation of workloads"}),": Different business teams can have their computing resources isolated on top of shared data, providing both stability and high efficiency."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Low storage costs"}),": Decoupling computation and storage allows the use of object storage, HDFS, and other low-cost storage solutions."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"applicable-scenarios-of-compute-storage-decoupled-mode",children:"Applicable scenarios of compute-storage decoupled mode"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"When you have already adopted public cloud services;"}),"\n",(0,n.jsx)(o.li,{children:"When you have reliable shared storage systems, such as HDFS, Ceph, and object storage;"}),"\n",(0,n.jsx)(o.li,{children:"When you require high elastic scalability, Kubernetes containerization, or to run on a private cloud;"}),"\n",(0,n.jsx)(o.li,{children:"When you have a dedicated team responsible for maintaining the company's entire data warehouse platform."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"workload-isolation-across-compute-clusters",children:"Workload isolation across compute clusters"}),"\n",(0,n.jsxs)(o.p,{children:["As mentioned earlier, a compute cluster is formed by one or more stateless BE nodes. By using the compute cluster specification statement (",(0,n.jsx)(o.code,{children:"use @<compute_group_name>"}),"), you can direct specific workloads to specific compute clusters, thus realizing physical isolation of data import and query workloads."]}),"\n",(0,n.jsx)(o.p,{children:"Assuming there are 2 compute clusters: C1 and C2."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Read isolation"}),": Before initiating two large queries, you can leverage ",(0,n.jsx)(o.code,{children:"use @c1"})," and ",(0,n.jsx)(o.code,{children:"use @c2"})," respectively to make the two queries run on different compute nodes. In this way, the two queries will not interfere with each other due to competition for CPU and memory resources when accessing the same dataset."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Read-write isolation"}),": Data imports can consume resources, especially with large data volumes and high import frequency. To avoid resource contention between queries and imports, you can specify query requests to run on C1 and import requests to run on C2 using ",(0,n.jsx)(o.code,{children:"use @c1"})," and ",(0,n.jsx)(o.code,{children:"use @c2"}),". Meanwhile, the ",(0,n.jsx)(o.code,{children:"c1"})," compute cluster can access the newly imported data in the ",(0,n.jsx)(o.code,{children:"c2"})," compute cluster."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Write-write isolation"}),": Data import tasks can also be isolated from each other. In some cases, the system handles both high-frequency small imports and large-scale batch imports. The batch imports often take longer and have higher retry costs, while the high-frequency small imports are the opposite. To avoid small imports interfering with batch imports, you can direct the small imports to run on ",(0,n.jsx)(o.code,{children:"c1"})," and the batch imports to run on ",(0,n.jsx)(o.code,{children:"c2"})," via ",(0,n.jsx)(o.code,{children:"use @c1"})," and ",(0,n.jsx)(o.code,{children:"use @c2"}),"."]})]})}function u(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},826222:function(e,o,t){t.d(o,{Z:function(){return s}});let s=t.p+"assets/images/compute-storage-coupled-2c6444e9b197af5b7a513f90a8438cc0.png"},150914:function(e,o,t){t.d(o,{Z:function(){return s}});let s=t.p+"assets/images/compute-storage-decoupled-cedee5c6b9e68fd174f61973723ca655.png"},250065:function(e,o,t){t.d(o,{Z:function(){return i},a:function(){return a}});var s=t(667294);let n={},r=s.createContext(n);function a(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);