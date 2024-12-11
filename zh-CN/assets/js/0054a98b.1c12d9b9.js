"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["680411"],{913851:function(n,d,e){e.r(d),e.d(d,{metadata:()=>r,contentTitle:()=>i,default:()=>j,assets:()=>t,toc:()=>h,frontMatter:()=>c});var r=JSON.parse('{"id":"benchmark/tpcds","title":"TPC-DS Benchmark","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/benchmark/tpcds.md","sourceDirName":"benchmark","slug":"/benchmark/tpcds","permalink":"/zh-CN/docs/1.2/benchmark/tpcds","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"TPC-DS Benchmark","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TPC-H Benchmark","permalink":"/zh-CN/docs/1.2/benchmark/tpch"},"next":{"title":"CloudCanal","permalink":"/zh-CN/docs/1.2/ecosystem/cloudcanal"}}'),s=e("785893"),l=e("250065");let c={title:"TPC-DS Benchmark",language:"zh-CN"},i="TPC-DS Benchmark",t={},h=[{value:"1. \u786C\u4EF6\u73AF\u5883",id:"1-\u786C\u4EF6\u73AF\u5883",level:2},{value:"2. \u8F6F\u4EF6\u73AF\u5883",id:"2-\u8F6F\u4EF6\u73AF\u5883",level:2},{value:"3. \u6D4B\u8BD5\u6570\u636E\u91CF",id:"3-\u6D4B\u8BD5\u6570\u636E\u91CF",level:2},{value:"4. \u6D4B\u8BD5 SQL",id:"4-\u6D4B\u8BD5-sql",level:2},{value:"5. \u6D4B\u8BD5\u7ED3\u679C",id:"5-\u6D4B\u8BD5\u7ED3\u679C",level:2},{value:"6. \u73AF\u5883\u51C6\u5907",id:"6-\u73AF\u5883\u51C6\u5907",level:2},{value:"7. \u6570\u636E\u51C6\u5907",id:"7-\u6570\u636E\u51C6\u5907",level:2},{value:"7.1 \u4E0B\u8F7D\u5B89\u88C5 TPC-DS \u6570\u636E\u751F\u6210\u5DE5\u5177",id:"71-\u4E0B\u8F7D\u5B89\u88C5-tpc-ds-\u6570\u636E\u751F\u6210\u5DE5\u5177",level:3},{value:"7.2 \u751F\u6210 TPC-DS \u6D4B\u8BD5\u96C6",id:"72-\u751F\u6210-tpc-ds-\u6D4B\u8BD5\u96C6",level:3},{value:"7.3 \u5EFA\u8868",id:"73-\u5EFA\u8868",level:3},{value:"7.3.1 \u51C6\u5907 <code>doris-cluster.conf</code> \u6587\u4EF6",id:"731-\u51C6\u5907-doris-clusterconf-\u6587\u4EF6",level:4},{value:"7.3.2 \u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA TPC-DS \u8868",id:"732-\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA-tpc-ds-\u8868",level:4},{value:"7.4 \u5BFC\u5165\u6570\u636E",id:"74-\u5BFC\u5165\u6570\u636E",level:3},{value:"7.5 \u67E5\u8BE2\u6D4B\u8BD5",id:"75-\u67E5\u8BE2\u6D4B\u8BD5",level:3},{value:"7.5.1 \u6267\u884C\u67E5\u8BE2\u811A\u672C",id:"751-\u6267\u884C\u67E5\u8BE2\u811A\u672C",level:3},{value:"7.5.2 \u5355\u4E2A SQL \u6267\u884C",id:"752-\u5355\u4E2A-sql-\u6267\u884C",level:3}];function x(n){let d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.header,{children:(0,s.jsx)(d.h1,{id:"tpc-ds-benchmark",children:"TPC-DS Benchmark"})}),"\n",(0,s.jsx)(d.p,{children:"TPC-DS\uFF08Transaction Processing Performance Council Decision Support Benchmark\uFF09\u662F\u4E00\u4E2A\u4EE5\u51B3\u7B56\u652F\u6301\u4E3A\u91CD\u70B9\u7684\u57FA\u51C6\u6D4B\u8BD5\uFF0C\u65E8\u5728\u8BC4\u4F30\u6570\u636E\u4ED3\u5E93\u548C\u5206\u6790\u7CFB\u7EDF\u7684\u6027\u80FD\u3002\u5B83\u662F\u7531 TPC\uFF08Transaction Processing Performance Council\uFF09\u7EC4\u7EC7\u5F00\u53D1\u7684\uFF0C\u7528\u4E8E\u6BD4\u8F83\u4E0D\u540C\u7CFB\u7EDF\u5728\u5904\u7406\u590D\u6742\u67E5\u8BE2\u548C\u5927\u89C4\u6A21\u6570\u636E\u5206\u6790\u65B9\u9762\u7684\u80FD\u529B\u3002"}),"\n",(0,s.jsx)(d.p,{children:"TPC-DS \u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u6A21\u62DF\u73B0\u5B9E\u4E16\u754C\u4E2D\u7684\u590D\u6742\u51B3\u7B56\u652F\u6301\u5DE5\u4F5C\u8D1F\u8F7D\u3002\u5B83\u901A\u8FC7\u4E00\u7CFB\u5217\u590D\u6742\u7684\u67E5\u8BE2\u548C\u6570\u636E\u64CD\u4F5C\u6765\u6D4B\u8BD5\u7CFB\u7EDF\u7684\u6027\u80FD\uFF0C\u5305\u62EC\u8054\u63A5\u3001\u805A\u5408\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u5B50\u67E5\u8BE2\u7B49\u3002\u8FD9\u4E9B\u67E5\u8BE2\u6A21\u5F0F\u6DB5\u76D6\u4E86\u4ECE\u7B80\u5355\u5230\u590D\u6742\u7684\u5404\u79CD\u573A\u666F\uFF0C\u5982\u62A5\u8868\u751F\u6210\u3001\u6570\u636E\u6316\u6398\u3001OLAP\uFF08\u8054\u673A\u5206\u6790\u5904\u7406\uFF09\u7B49\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris \u5728 TPC-DS 1000G \u6D4B\u8BD5\u96C6\u4E0A\u7684\u6027\u80FD\u8868\u73B0\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u5728 TPC-DS \u6807\u51C6\u6D4B\u8BD5\u6570\u636E\u96C6\u4E0A\u7684 99 \u4E2A\u67E5\u8BE2\u4E0A\uFF0C\u6211\u4EEC\u57FA\u4E8E Apache Doris 2.1.1-rc03 \u548C Apache Doris 2.0.6 \u7248\u672C\u8FDB\u884C\u4E86\u5BF9\u6BD4\u6D4B\u8BD5\u3002"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{alt:"TPCDS_1000G",src:e(877795).Z+"",width:"11091",height:"1191"})}),"\n",(0,s.jsx)(d.h2,{id:"1-\u786C\u4EF6\u73AF\u5883",children:"1. \u786C\u4EF6\u73AF\u5883"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u786C\u4EF6"}),(0,s.jsx)(d.th,{children:"\u914D\u7F6E\u8BF4\u660E"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u673A\u5668\u6570\u91CF"}),(0,s.jsx)(d.td,{children:"4 \u53F0\u817E\u8BAF\u4E91\u4E3B\u673A\uFF081 \u4E2A FE\uFF0C3 \u4E2A BE\uFF09"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"CPU"}),(0,s.jsx)(d.td,{children:"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz)  48 \u6838"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u5185\u5B58"}),(0,s.jsx)(d.td,{children:"192G"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u7F51\u7EDC\u5E26\u5BBD"}),(0,s.jsx)(d.td,{children:"21Gbps"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u78C1\u76D8"}),(0,s.jsx)(d.td,{children:"\u9AD8\u6027\u80FD\u4E91\u786C\u76D8"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"2-\u8F6F\u4EF6\u73AF\u5883",children:"2. \u8F6F\u4EF6\u73AF\u5883"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"Doris \u90E8\u7F72 3BE 1FE"}),"\n",(0,s.jsx)(d.li,{children:"\u5185\u6838\u7248\u672C\uFF1ALinux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"}),"\n",(0,s.jsx)(d.li,{children:"\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\uFF1AUbuntu 20.04 LTS (Focal Fossa)"}),"\n",(0,s.jsx)(d.li,{children:"Doris \u8F6F\u4EF6\u7248\u672C\uFF1AApache Doris 2.1.1-rc03\u3001Apache Doris 2.0.6"}),"\n",(0,s.jsx)(d.li,{children:'JDK\uFF1Aopenjdk version "1.8.0_131"'}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"3-\u6D4B\u8BD5\u6570\u636E\u91CF",children:"3. \u6D4B\u8BD5\u6570\u636E\u91CF"}),"\n",(0,s.jsx)(d.p,{children:"\u6574\u4E2A\u6D4B\u8BD5\u6A21\u62DF\u751F\u6210 TPC-DS 1000G \u7684\u6570\u636E\u5206\u522B\u5BFC\u5165\u5230 Apache Doris 2.1.1-rc03 \u548C Apache Doris 2.0.6 \u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u4E0B\u9762\u662F\u8868\u7684\u76F8\u5173\u8BF4\u660E\u53CA\u6570\u636E\u91CF\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"TPC-DS \u8868\u540D"}),(0,s.jsx)(d.th,{children:"\u884C\u6570"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"customer_demographics"}),(0,s.jsx)(d.td,{children:"1,920,800"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"reason"}),(0,s.jsx)(d.td,{children:"65"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"warehouse"}),(0,s.jsx)(d.td,{children:"20"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"date_dim"}),(0,s.jsx)(d.td,{children:"73,049"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"catalog_sales"}),(0,s.jsx)(d.td,{children:"1,439,980,416"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"call_center"}),(0,s.jsx)(d.td,{children:"42"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"inventory"}),(0,s.jsx)(d.td,{children:"783,000,000"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"catalog_returns"}),(0,s.jsx)(d.td,{children:"143,996,756"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"household_demographics"}),(0,s.jsx)(d.td,{children:"7,200"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"customer_address"}),(0,s.jsx)(d.td,{children:"6,000,000"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"income_band"}),(0,s.jsx)(d.td,{children:"20"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"catalog_page"}),(0,s.jsx)(d.td,{children:"30,000"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"item"}),(0,s.jsx)(d.td,{children:"300,000"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"web_returns"}),(0,s.jsx)(d.td,{children:"71,997,522"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"web_site"}),(0,s.jsx)(d.td,{children:"54"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"promotion"}),(0,s.jsx)(d.td,{children:"1,500"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"web_sales"}),(0,s.jsx)(d.td,{children:"720,000,376"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"store"}),(0,s.jsx)(d.td,{children:"1,002"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"web_page"}),(0,s.jsx)(d.td,{children:"3,000"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"time_dim"}),(0,s.jsx)(d.td,{children:"86,400"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"store_returns"}),(0,s.jsx)(d.td,{children:"287,999,764"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"store_sales"}),(0,s.jsx)(d.td,{children:"2,879,987,999"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ship_mode"}),(0,s.jsx)(d.td,{children:"20"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"customer"}),(0,s.jsx)(d.td,{children:"12,000,000"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"4-\u6D4B\u8BD5-sql",children:"4. \u6D4B\u8BD5 SQL"}),"\n",(0,s.jsxs)(d.p,{children:["TPC-DS 99 \u4E2A\u6D4B\u8BD5\u67E5\u8BE2\u8BED\u53E5\uFF1A ",(0,s.jsx)(d.a,{href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools/queries/sf1000",children:"TPC-DS-Query-SQL"})]}),"\n",(0,s.jsx)(d.h2,{id:"5-\u6D4B\u8BD5\u7ED3\u679C",children:"5. \u6D4B\u8BD5\u7ED3\u679C"}),"\n",(0,s.jsx)(d.p,{children:"\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 Apache Doris 2.1.1-rc03 \u548C Apache Doris 2.0.6 \u7248\u672C\u8FDB\u884C\u5BF9\u6BD4\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Query"}),(0,s.jsx)(d.th,{children:"Apache Doris 2.1.1-rc03  (ms)"}),(0,s.jsx)(d.th,{children:"Apache Doris 2.0.6  (ms)"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query1"}),(0,s.jsx)(d.td,{children:"729"}),(0,s.jsx)(d.td,{children:"914"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query2"}),(0,s.jsx)(d.td,{children:"5120"}),(0,s.jsx)(d.td,{children:"4669"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query3"}),(0,s.jsx)(d.td,{children:"286"}),(0,s.jsx)(d.td,{children:"285"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query4"}),(0,s.jsx)(d.td,{children:"11633"}),(0,s.jsx)(d.td,{children:"35148"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query5"}),(0,s.jsx)(d.td,{children:"641"}),(0,s.jsx)(d.td,{children:"22979"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query6"}),(0,s.jsx)(d.td,{children:"267"}),(0,s.jsx)(d.td,{children:"1351"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query7"}),(0,s.jsx)(d.td,{children:"468"}),(0,s.jsx)(d.td,{children:"517"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query8"}),(0,s.jsx)(d.td,{children:"263"}),(0,s.jsx)(d.td,{children:"591"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query9"}),(0,s.jsx)(d.td,{children:"4444"}),(0,s.jsx)(d.td,{children:"5430"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query10"}),(0,s.jsx)(d.td,{children:"418"}),(0,s.jsx)(d.td,{children:"3341"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query11"}),(0,s.jsx)(d.td,{children:"7246"}),(0,s.jsx)(d.td,{children:"23300"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query12"}),(0,s.jsx)(d.td,{children:"115"}),(0,s.jsx)(d.td,{children:"105"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query13"}),(0,s.jsx)(d.td,{children:"661"}),(0,s.jsx)(d.td,{children:"1719"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query14"}),(0,s.jsx)(d.td,{children:"13955"}),(0,s.jsx)(d.td,{children:"33254"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query15"}),(0,s.jsx)(d.td,{children:"474"}),(0,s.jsx)(d.td,{children:"1414"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query16"}),(0,s.jsx)(d.td,{children:"366"}),(0,s.jsx)(d.td,{children:"402"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query17"}),(0,s.jsx)(d.td,{children:"1097"}),(0,s.jsx)(d.td,{children:"2371"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query18"}),(0,s.jsx)(d.td,{children:"581"}),(0,s.jsx)(d.td,{children:"760"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query19"}),(0,s.jsx)(d.td,{children:"283"}),(0,s.jsx)(d.td,{children:"308"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query20"}),(0,s.jsx)(d.td,{children:"137"}),(0,s.jsx)(d.td,{children:"117"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query21"}),(0,s.jsx)(d.td,{children:"110"}),(0,s.jsx)(d.td,{children:"94"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query22"}),(0,s.jsx)(d.td,{children:"1996"}),(0,s.jsx)(d.td,{children:"2481"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query23"}),(0,s.jsx)(d.td,{children:"44826"}),(0,s.jsx)(d.td,{children:"77381"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query24"}),(0,s.jsx)(d.td,{children:"9873"}),(0,s.jsx)(d.td,{children:"23910"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query25"}),(0,s.jsx)(d.td,{children:"666"}),(0,s.jsx)(d.td,{children:"1021"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query26"}),(0,s.jsx)(d.td,{children:"221"}),(0,s.jsx)(d.td,{children:"213"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query27"}),(0,s.jsx)(d.td,{children:"490"}),(0,s.jsx)(d.td,{children:"544"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query28"}),(0,s.jsx)(d.td,{children:"4089"}),(0,s.jsx)(d.td,{children:"4593"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query29"}),(0,s.jsx)(d.td,{children:"768"}),(0,s.jsx)(d.td,{children:"1024"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query30"}),(0,s.jsx)(d.td,{children:"313"}),(0,s.jsx)(d.td,{children:"682"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query31"}),(0,s.jsx)(d.td,{children:"1847"}),(0,s.jsx)(d.td,{children:"2252"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query32"}),(0,s.jsx)(d.td,{children:"71"}),(0,s.jsx)(d.td,{children:"68"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query33"}),(0,s.jsx)(d.td,{children:"460"}),(0,s.jsx)(d.td,{children:"539"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query34"}),(0,s.jsx)(d.td,{children:"629"}),(0,s.jsx)(d.td,{children:"638"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query35"}),(0,s.jsx)(d.td,{children:"1660"}),(0,s.jsx)(d.td,{children:"10505"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query36"}),(0,s.jsx)(d.td,{children:"412"}),(0,s.jsx)(d.td,{children:"441"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query37"}),(0,s.jsx)(d.td,{children:"94"}),(0,s.jsx)(d.td,{children:"86"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query38"}),(0,s.jsx)(d.td,{children:"8804"}),(0,s.jsx)(d.td,{children:"8379"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query39"}),(0,s.jsx)(d.td,{children:"606"}),(0,s.jsx)(d.td,{children:"898"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query40"}),(0,s.jsx)(d.td,{children:"164"}),(0,s.jsx)(d.td,{children:"190"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query41"}),(0,s.jsx)(d.td,{children:"55"}),(0,s.jsx)(d.td,{children:"30"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query42"}),(0,s.jsx)(d.td,{children:"115"}),(0,s.jsx)(d.td,{children:"113"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query43"}),(0,s.jsx)(d.td,{children:"804"}),(0,s.jsx)(d.td,{children:"1332"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query44"}),(0,s.jsx)(d.td,{children:"1509"}),(0,s.jsx)(d.td,{children:"1520"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query45"}),(0,s.jsx)(d.td,{children:"1678"}),(0,s.jsx)(d.td,{children:"1306"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query46"}),(0,s.jsx)(d.td,{children:"1196"}),(0,s.jsx)(d.td,{children:"2167"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query47"}),(0,s.jsx)(d.td,{children:"2812"}),(0,s.jsx)(d.td,{children:"3859"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query48"}),(0,s.jsx)(d.td,{children:"559"}),(0,s.jsx)(d.td,{children:"1419"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query49"}),(0,s.jsx)(d.td,{children:"646"}),(0,s.jsx)(d.td,{children:"725"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query50"}),(0,s.jsx)(d.td,{children:"757"}),(0,s.jsx)(d.td,{children:"1299"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query51"}),(0,s.jsx)(d.td,{children:"6380"}),(0,s.jsx)(d.td,{children:"4954"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query52"}),(0,s.jsx)(d.td,{children:"128"}),(0,s.jsx)(d.td,{children:"123"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query53"}),(0,s.jsx)(d.td,{children:"396"}),(0,s.jsx)(d.td,{children:"391"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query54"}),(0,s.jsx)(d.td,{children:"388"}),(0,s.jsx)(d.td,{children:"8212"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query55"}),(0,s.jsx)(d.td,{children:"124"}),(0,s.jsx)(d.td,{children:"124"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query56"}),(0,s.jsx)(d.td,{children:"360"}),(0,s.jsx)(d.td,{children:"434"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query57"}),(0,s.jsx)(d.td,{children:"1811"}),(0,s.jsx)(d.td,{children:"2494"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query58"}),(0,s.jsx)(d.td,{children:"304"}),(0,s.jsx)(d.td,{children:"666"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query59"}),(0,s.jsx)(d.td,{children:"5758"}),(0,s.jsx)(d.td,{children:"7432"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query60"}),(0,s.jsx)(d.td,{children:"474"}),(0,s.jsx)(d.td,{children:"481"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query61"}),(0,s.jsx)(d.td,{children:"486"}),(0,s.jsx)(d.td,{children:"536"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query62"}),(0,s.jsx)(d.td,{children:"647"}),(0,s.jsx)(d.td,{children:"1082"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query63"}),(0,s.jsx)(d.td,{children:"358"}),(0,s.jsx)(d.td,{children:"303"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query64"}),(0,s.jsx)(d.td,{children:"3250"}),(0,s.jsx)(d.td,{children:"4968"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query65"}),(0,s.jsx)(d.td,{children:"5410"}),(0,s.jsx)(d.td,{children:"5971"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query66"}),(0,s.jsx)(d.td,{children:"484"}),(0,s.jsx)(d.td,{children:"603"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query67"}),(0,s.jsx)(d.td,{children:"26347"}),(0,s.jsx)(d.td,{children:"34052"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query68"}),(0,s.jsx)(d.td,{children:"1422"}),(0,s.jsx)(d.td,{children:"1428"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query69"}),(0,s.jsx)(d.td,{children:"654"}),(0,s.jsx)(d.td,{children:"808"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query70"}),(0,s.jsx)(d.td,{children:"2285"}),(0,s.jsx)(d.td,{children:"4462"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query71"}),(0,s.jsx)(d.td,{children:"650"}),(0,s.jsx)(d.td,{children:"1006"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query72"}),(0,s.jsx)(d.td,{children:"4324"}),(0,s.jsx)(d.td,{children:"4717"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query73"}),(0,s.jsx)(d.td,{children:"500"}),(0,s.jsx)(d.td,{children:"558"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query74"}),(0,s.jsx)(d.td,{children:"6678"}),(0,s.jsx)(d.td,{children:"14127"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query75"}),(0,s.jsx)(d.td,{children:"3734"}),(0,s.jsx)(d.td,{children:"6312"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query76"}),(0,s.jsx)(d.td,{children:"1835"}),(0,s.jsx)(d.td,{children:"1870"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query77"}),(0,s.jsx)(d.td,{children:"382"}),(0,s.jsx)(d.td,{children:"496"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query78"}),(0,s.jsx)(d.td,{children:"19923"}),(0,s.jsx)(d.td,{children:"23091"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query79"}),(0,s.jsx)(d.td,{children:"3061"}),(0,s.jsx)(d.td,{children:"4090"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query80"}),(0,s.jsx)(d.td,{children:"851"}),(0,s.jsx)(d.td,{children:"1559"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query81"}),(0,s.jsx)(d.td,{children:"565"}),(0,s.jsx)(d.td,{children:"960"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query82"}),(0,s.jsx)(d.td,{children:"242"}),(0,s.jsx)(d.td,{children:"221"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query83"}),(0,s.jsx)(d.td,{children:"254"}),(0,s.jsx)(d.td,{children:"415"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query84"}),(0,s.jsx)(d.td,{children:"203"}),(0,s.jsx)(d.td,{children:"131"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query85"}),(0,s.jsx)(d.td,{children:"364"}),(0,s.jsx)(d.td,{children:"444"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query86"}),(0,s.jsx)(d.td,{children:"651"}),(0,s.jsx)(d.td,{children:"931"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query87"}),(0,s.jsx)(d.td,{children:"8972"}),(0,s.jsx)(d.td,{children:"8554"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query88"}),(0,s.jsx)(d.td,{children:"4095"}),(0,s.jsx)(d.td,{children:"5202"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query89"}),(0,s.jsx)(d.td,{children:"508"}),(0,s.jsx)(d.td,{children:"480"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query90"}),(0,s.jsx)(d.td,{children:"233"}),(0,s.jsx)(d.td,{children:"322"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query91"}),(0,s.jsx)(d.td,{children:"174"}),(0,s.jsx)(d.td,{children:"159"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query92"}),(0,s.jsx)(d.td,{children:"62"}),(0,s.jsx)(d.td,{children:"59"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query93"}),(0,s.jsx)(d.td,{children:"1601"}),(0,s.jsx)(d.td,{children:"1618"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query94"}),(0,s.jsx)(d.td,{children:"297"}),(0,s.jsx)(d.td,{children:"297"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query95"}),(0,s.jsx)(d.td,{children:"1240"}),(0,s.jsx)(d.td,{children:"27354"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query96"}),(0,s.jsx)(d.td,{children:"508"}),(0,s.jsx)(d.td,{children:"847"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query97"}),(0,s.jsx)(d.td,{children:"5449"}),(0,s.jsx)(d.td,{children:"11528"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query98"}),(0,s.jsx)(d.td,{children:"382"}),(0,s.jsx)(d.td,{children:"287"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"query99"}),(0,s.jsx)(d.td,{children:"1410"}),(0,s.jsx)(d.td,{children:"2147"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"Total"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"264028"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"487990"})})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"6-\u73AF\u5883\u51C6\u5907",children:"6. \u73AF\u5883\u51C6\u5907"}),"\n",(0,s.jsxs)(d.p,{children:["\u8BF7\u5148\u53C2\u7167 ",(0,s.jsx)(d.a,{href:"../install/cluster-deployment/standard-deployment",children:"\u5B98\u65B9\u6587\u6863"})," \u8FDB\u884C Doris \u7684\u5B89\u88C5\u90E8\u7F72\uFF0C\u4EE5\u83B7\u5F97\u4E00\u4E2A\u6B63\u5E38\u8FD0\u884C\u4E2D\u7684 Doris \u96C6\u7FA4\uFF08\u81F3\u5C11\u5305\u542B 1 FE 1 BE\uFF0C\u63A8\u8350 1 FE 3 BE\uFF09\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"7-\u6570\u636E\u51C6\u5907",children:"7. \u6570\u636E\u51C6\u5907"}),"\n",(0,s.jsx)(d.h3,{id:"71-\u4E0B\u8F7D\u5B89\u88C5-tpc-ds-\u6570\u636E\u751F\u6210\u5DE5\u5177",children:"7.1 \u4E0B\u8F7D\u5B89\u88C5 TPC-DS \u6570\u636E\u751F\u6210\u5DE5\u5177"}),"\n",(0,s.jsxs)(d.p,{children:["\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u4E0B\u8F7D\u5E76\u7F16\u8BD1  ",(0,s.jsx)(d.a,{href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools",children:"tpcds-tools"}),"  \u5DE5\u5177\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"sh bin/build-tpcds-tools.sh\n"})}),"\n",(0,s.jsx)(d.h3,{id:"72-\u751F\u6210-tpc-ds-\u6D4B\u8BD5\u96C6",children:"7.2 \u751F\u6210 TPC-DS \u6D4B\u8BD5\u96C6"}),"\n",(0,s.jsx)(d.p,{children:"\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210 TPC-DS \u6570\u636E\u96C6\uFF1A"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"sh bin/gen-tpcds-data.sh -s 1000\n"})}),"\n",(0,s.jsxs)(d.blockquote,{children:["\n",(0,s.jsxs)(d.p,{children:["\u6CE8 1\uFF1A\u901A\u8FC7 ",(0,s.jsx)(d.code,{children:"sh gen-tpcds-data.sh -h"})," \u67E5\u770B\u811A\u672C\u5E2E\u52A9\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u6CE8 2\uFF1A\u6570\u636E\u4F1A\u4EE5 ",(0,s.jsx)(d.code,{children:".dat"})," \u4E3A\u540E\u7F00\u751F\u6210\u5728  ",(0,s.jsx)(d.code,{children:"tpcds-data/"})," \u76EE\u5F55\u4E0B\u3002\u6587\u4EF6\u603B\u5927\u5C0F\u7EA6 1000GB\u3002\u751F\u6210\u65F6\u95F4\u53EF\u80FD\u5728\u6570\u5206\u949F\u5230 1 \u5C0F\u65F6\u4E0D\u7B49\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"\u6CE8 3\uFF1A\u9ED8\u8BA4\u751F\u6210 100G \u7684\u6807\u51C6\u6D4B\u8BD5\u6570\u636E\u96C6"}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"73-\u5EFA\u8868",children:"7.3 \u5EFA\u8868"}),"\n",(0,s.jsxs)(d.h4,{id:"731-\u51C6\u5907-doris-clusterconf-\u6587\u4EF6",children:["7.3.1 \u51C6\u5907 ",(0,s.jsx)(d.code,{children:"doris-cluster.conf"})," \u6587\u4EF6"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5728\u8C03\u7528\u5BFC\u5165\u811A\u672C\u524D\uFF0C\u9700\u8981\u5C06 FE \u7684 ip \u7AEF\u53E3\u7B49\u4FE1\u606F\u5199\u5728 ",(0,s.jsx)(d.code,{children:"doris-cluster.conf"})," \u6587\u4EF6\u4E2D\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u6587\u4EF6\u4F4D\u7F6E\u5728 ",(0,s.jsx)(d.code,{children:"${DORIS_HOME}/tools/tpcds-tools/conf/"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"\u6587\u4EF6\u5185\u5BB9\u5305\u62EC FE \u7684 ip\uFF0CHTTP \u7AEF\u53E3\uFF0C\u7528\u6237\u540D\uFF0C\u5BC6\u7801\u4EE5\u53CA\u5F85\u5BFC\u5165\u6570\u636E\u7684 DB \u540D\u79F0\uFF1A"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where TPC-DS tables located\nexport DB='tpcds'\n"})}),"\n",(0,s.jsx)(d.h4,{id:"732-\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA-tpc-ds-\u8868",children:"7.3.2 \u6267\u884C\u4EE5\u4E0B\u811A\u672C\u751F\u6210\u521B\u5EFA TPC-DS \u8868"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"sh bin/create-tpcds-tables.sh -s 1000\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u6216\u8005\u590D\u5236 ",(0,s.jsx)(d.a,{href:"https://github.com/apache/doris/blob/master/tools/tpcds-tools/ddl/create-tpcds-tables-sf1000.sql",children:"create-tpcds-tables.sql"})," \u4E2D\u7684\u5EFA\u8868\u8BED\u53E5\uFF0C\u5728 Doris \u4E2D\u6267\u884C\u3002"]}),"\n",(0,s.jsx)(d.h3,{id:"74-\u5BFC\u5165\u6570\u636E",children:"7.4 \u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(d.p,{children:"\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u6267\u884C\u6570\u636E\u5BFC\u5165\uFF1A"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"sh bin/load-tpcds-data.sh\n"})}),"\n",(0,s.jsx)(d.h3,{id:"75-\u67E5\u8BE2\u6D4B\u8BD5",children:"7.5 \u67E5\u8BE2\u6D4B\u8BD5"}),"\n",(0,s.jsx)(d.h3,{id:"751-\u6267\u884C\u67E5\u8BE2\u811A\u672C",children:"7.5.1 \u6267\u884C\u67E5\u8BE2\u811A\u672C"}),"\n",(0,s.jsx)(d.p,{children:"\u5355\u4E2A SQL \u6267\u884C \u6216\u8005 \u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"sh bin/run-tpcds-queries.sh -s 1000\n"})}),"\n",(0,s.jsx)(d.h3,{id:"752-\u5355\u4E2A-sql-\u6267\u884C",children:"7.5.2 \u5355\u4E2A SQL \u6267\u884C"}),"\n",(0,s.jsxs)(d.p,{children:["\u4F60\u4E5F\u53EF\u4EE5\u4ECE\u4EE3\u7801\u5E93\u91CC\u83B7\u53D6\u6700\u65B0\u7684 SQL\u3002\u6700\u65B0\u6D4B\u8BD5\u67E5\u8BE2\u8BED\u53E5\u5730\u5740\uFF1A",(0,s.jsx)(d.a,{href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools/queries/sf1000",children:"TPC-DS \u6D4B\u8BD5\u67E5\u8BE2\u8BED\u53E5"})]})]})}function j(n={}){let{wrapper:d}={...(0,l.a)(),...n.components};return d?(0,s.jsx)(d,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},877795:function(n,d,e){e.d(d,{Z:function(){return r}});let r=e.p+"assets/images/tpcds_2.1-db834ed5c09bb01e81613338c4232bc8.png"},250065:function(n,d,e){e.d(d,{Z:function(){return i},a:function(){return c}});var r=e(667294);let s={},l=r.createContext(s);function c(n){let d=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(d):{...d,...n}},[d,n])}function i(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(l.Provider,{value:d},n.children)}}}]);