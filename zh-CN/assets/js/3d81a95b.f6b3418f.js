"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["890034"],{302769:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"lakehouse/datalake-analytics/iceberg","title":"Iceberg Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/datalake-analytics/iceberg.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/iceberg","permalink":"/zh-CN/docs/dev/lakehouse/datalake-analytics/iceberg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Iceberg Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Hudi Catalog","permalink":"/zh-CN/docs/dev/lakehouse/datalake-analytics/hudi"},"next":{"title":"Paimon Catalog","permalink":"/zh-CN/docs/dev/lakehouse/datalake-analytics/paimon"}}'),a=s("785893"),i=s("250065");let c={title:"Iceberg Catalog",language:"zh-CN"},t=void 0,d={},l=[{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:2},{value:"\u521B\u5EFA Catalog",id:"\u521B\u5EFA-catalog",level:2},{value:"\u57FA\u4E8E Hive Metastore \u521B\u5EFA Catalog",id:"\u57FA\u4E8E-hive-metastore-\u521B\u5EFA-catalog",level:3},{value:"\u57FA\u4E8E Iceberg API \u521B\u5EFA Catalog",id:"\u57FA\u4E8E-iceberg-api-\u521B\u5EFA-catalog",level:3},{value:"Hadoop Catalog",id:"hadoop-catalog",level:4},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"AWS Glue",id:"aws-glue",level:4},{value:"\u963F\u91CC\u4E91 DLF",id:"\u963F\u91CC\u4E91-dlf",level:4},{value:"REST Catalog",id:"rest-catalog",level:4},{value:"Google Dataproc Metastore",id:"google-dataproc-metastore",level:4},{value:"Iceberg On Object Storage",id:"iceberg-on-object-storage",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2},{value:"Time Travel",id:"time-travel",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u5FEB\u901F\u4F53\u9A8C ",(0,a.jsx)(n.a,{href:"https://doris.apache.org/docs/gettingStarted/tutorials/doris-iceberg",children:"Apache Doris & Iceberg"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u652F\u6301 Iceberg V1/V2 \u8868\u683C\u5F0F\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u652F\u6301 Position Delete\u3002"}),"\n",(0,a.jsx)(n.li,{children:"2.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301 Equality Delete\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u652F\u6301 Parquet \u6587\u4EF6\u683C\u5F0F"}),"\n",(0,a.jsx)(n.li,{children:"2.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301 ORC \u6587\u4EF6\u683C\u5F0F\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u521B\u5EFA-catalog",children:"\u521B\u5EFA Catalog"}),"\n",(0,a.jsx)(n.h3,{id:"\u57FA\u4E8E-hive-metastore-\u521B\u5EFA-catalog",children:"\u57FA\u4E8E Hive Metastore \u521B\u5EFA Catalog"}),"\n",(0,a.jsxs)(n.p,{children:["\u548C Hive Catalog \u57FA\u672C\u4E00\u81F4\uFF0C\u8FD9\u91CC\u4EC5\u7ED9\u51FA\u7B80\u5355\u793A\u4F8B\u3002\u5176\u4ED6\u793A\u4F8B\u53EF\u53C2\u9605 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/dev/lakehouse/datalake-analytics/hive",children:"Hive Catalog"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u57FA\u4E8E-iceberg-api-\u521B\u5EFA-catalog",children:"\u57FA\u4E8E Iceberg API \u521B\u5EFA Catalog"}),"\n",(0,a.jsx)(n.p,{children:"\u4F7F\u7528 Iceberg API \u8BBF\u95EE\u5143\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u652F\u6301 Hadoop File System\u3001Hive\u3001REST\u3001Glue\u3001DLF \u7B49\u670D\u52A1\u4F5C\u4E3A Iceberg \u7684 Catalog\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"hadoop-catalog",children:"Hadoop Catalog"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A",(0,a.jsx)(n.code,{children:"warehouse"})," \u7684\u8DEF\u5F84\u5FC5\u987B\u6307\u5411 ",(0,a.jsx)(n.code,{children:"Database"})," \u8DEF\u5F84\u7684\u4E0A\u4E00\u7EA7\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u793A\u4F8B\uFF1A\u5982\u679C\u4F60\u7684\u8868\u8DEF\u5F84\u662F\uFF1A",(0,a.jsx)(n.code,{children:"s3://bucket/path/to/db1/table1"}),"\uFF0C\u90A3\u4E48 ",(0,a.jsx)(n.code,{children:"warehouse"})," \u5E94\u8BE5\u662F\uFF1A",(0,a.jsx)(n.code,{children:"s3://bucket/path/to/"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg_hadoop PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-host:8020/dir/key'\n);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg_hadoop_ha PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-nameservice/dir/key',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg_s3 PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 's3://bucket/dir/key',\n    's3.endpoint' = 's3.us-east-1.amazonaws.com',\n    's3.access_key' = 'ak',\n    's3.secret_key' = 'sk'\n);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"hive-metastore",children:"Hive Metastore"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"aws-glue",children:"AWS Glue"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u8FDE\u63A5 Glue \u65F6\uFF0C\u5982\u679C\u662F\u5728\u975E EC2 \u73AF\u5883\uFF0C\u9700\u8981\u5C06 EC2 \u73AF\u5883\u91CC\u7684 ",(0,a.jsx)(n.code,{children:"~/.aws"})," \u76EE\u5F55\u62F7\u8D1D\u5230\u5F53\u524D\u73AF\u5883\u91CC\u3002\u4E5F\u53EF\u4EE5\u4E0B\u8F7D",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS Cli"}),"\u5DE5\u5177\u8FDB\u884C\u914D\u7F6E\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u4F1A\u5728\u5F53\u524D\u7528\u6237\u76EE\u5F55\u4E0B\u521B\u5EFA",(0,a.jsx)(n.code,{children:".aws"}),"\u76EE\u5F55\u3002\n\u8BF7\u5347\u7EA7\u5230 Doris 2.1.7 \u6216 3.0.3 \u4E4B\u540E\u7684\u7248\u672C\u4F7F\u7528\u8BE5\u529F\u80FD\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Using access key and secret key\nCREATE CATALOG glue2 PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com/",\n    "client.credentials-provider" = "com.amazonaws.glue.catalog.credentials.ConfigAWSProvider",\n    "client.credentials-provider.glue.access_key" = "ak",\n    "client.credentials-provider.glue.secret_key" = "sk"\n);\n'})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Iceberg \u5C5E\u6027\u8BE6\u60C5\u53C2\u89C1 ",(0,a.jsx)(n.a,{href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog",children:"Iceberg Glue Catalog"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u4E0D\u6307\u5B9A ",(0,a.jsx)(n.code,{children:"client.credentials-provider"}),"\uFF0CDoris \u5C31\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u7684 DefaultAWSCredentialsProviderChain\uFF0C\u5B83\u4F1A\u8BFB\u53D6\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u6216\u8005 InstanceProfile \u4E2D\u914D\u7F6E\u7684\u5C5E\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u963F\u91CC\u4E91-dlf",children:"\u963F\u91CC\u4E91 DLF"}),"\n",(0,a.jsxs)(n.p,{children:["\u53C2\u89C1",(0,a.jsx)(n.a,{href:"/zh-CN/docs/dev/lakehouse/datalake-analytics/dlf",children:"\u963F\u91CC\u4E91 DLF Catalog \u914D\u7F6E"})]}),"\n",(0,a.jsx)(n.h4,{id:"rest-catalog",children:"REST Catalog"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u65B9\u5F0F\u9700\u8981\u9884\u5148\u63D0\u4F9B REST \u670D\u52A1\uFF0C\u7528\u6237\u9700\u5B9E\u73B0\u83B7\u53D6 Iceberg \u5143\u6570\u636E\u7684 REST \u63A5\u53E3\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181'\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u4F7F\u7528 HDFS \u5B58\u50A8\u6570\u636E\uFF0C\u5E76\u5F00\u542F\u4E86\u9AD8\u53EF\u7528\u6A21\u5F0F\uFF0C\u8FD8\u9700\u5728 Catalog \u4E2D\u589E\u52A0 HDFS \u9AD8\u53EF\u7528\u914D\u7F6E\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.1:8020',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.2:8020',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"google-dataproc-metastore",children:"Google Dataproc Metastore"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG iceberg PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.0.1:9083",\n    "gs.endpoint" = "https://storage.googleapis.com",\n    "gs.region" = "us-east-1",\n    "gs.access_key" = "ak",\n    "gs.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"hive.metastore.uris"}),": Dataproc Metastore \u670D\u52A1\u5F00\u653E\u7684\u63A5\u53E3\uFF0C\u5728 Metastore \u7BA1\u7406\u9875\u9762\u83B7\u53D6\uFF1A",(0,a.jsx)(n.a,{href:"https://console.cloud.google.com/dataproc/metastore",children:"Dataproc Metastore Services"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"iceberg-on-object-storage",children:"Iceberg On Object Storage"}),"\n",(0,a.jsx)(n.p,{children:"\u82E5\u6570\u636E\u5B58\u653E\u5728 S3 \u4E0A\uFF0Cproperties \u4E2D\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u53C2\u6570\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"s3.access_key" = "ak"\n"s3.secret_key" = "sk"\n"s3.endpoint" = "s3.us-east-1.amazonaws.com"\n"s3.region" = "us-east-1"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6570\u636E\u5B58\u653E\u5728\u963F\u91CC\u4E91 OSS \u4E0A\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"oss.access_key" = "ak"\n"oss.secret_key" = "sk"\n"oss.endpoint" = "oss-cn-beijing-internal.aliyuncs.com"\n"oss.region" = "oss-cn-beijing"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6570\u636E\u5B58\u653E\u5728\u817E\u8BAF\u4E91 COS \u4E0A\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"cos.access_key" = "ak"\n"cos.secret_key" = "sk"\n"cos.endpoint" = "cos.ap-beijing.myqcloud.com"\n"cos.region" = "ap-beijing"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6570\u636E\u5B58\u653E\u5728\u534E\u4E3A\u4E91 OBS \u4E0A\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"obs.access_key" = "ak"\n"obs.secret_key" = "sk"\n"obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com"\n"obs.region" = "cn-north-4"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'-- MinIO & Rest Catalog\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "uri" = "http://10.0.0.1:8181",\n    "warehouse" = "s3://bucket",\n    "token" = "token123456",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://10.0.0.1:9000",\n    "s3.region" = "us-east-1"\n);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Iceberg Type"}),(0,a.jsx)(n.th,{children:"Doris Type"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"boolean"}),(0,a.jsx)(n.td,{children:"boolean"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"int"}),(0,a.jsx)(n.td,{children:"int"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"bigint"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:"float"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"double"}),(0,a.jsx)(n.td,{children:"double"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"decimal(p,s)"}),(0,a.jsx)(n.td,{children:"decimal(p,s)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"date"}),(0,a.jsx)(n.td,{children:"date"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"uuid"}),(0,a.jsx)(n.td,{children:"string"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timestamp (Timestamp without timezone)"}),(0,a.jsx)(n.td,{children:"datetime(6)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timestamptz (Timestamp with timezone)"}),(0,a.jsx)(n.td,{children:"datetime(6)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"string"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"fixed(L)"}),(0,a.jsx)(n.td,{children:"char(L)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"binary"}),(0,a.jsx)(n.td,{children:"string"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"struct"}),(0,a.jsx)(n.td,{children:"struct\uFF082.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"map"}),(0,a.jsx)(n.td,{children:"map\uFF082.1.3 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"list"}),(0,a.jsx)(n.td,{children:"array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"time"}),(0,a.jsx)(n.td,{children:"\u4E0D\u652F\u6301"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"time-travel",children:"Time Travel"}),"\n",(0,a.jsx)(n.p,{children:"\u652F\u6301\u8BFB\u53D6 Iceberg \u8868\u6307\u5B9A\u7684 Snapshot\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6BCF\u4E00\u6B21\u5BF9 iceberg \u8868\u7684\u5199\u64CD\u4F5C\u90FD\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u5FEB\u7167\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BFB\u53D6\u8BF7\u6C42\u53EA\u4F1A\u8BFB\u53D6\u6700\u65B0\u7248\u672C\u7684\u5FEB\u7167\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"FOR TIME AS OF"})," \u548C ",(0,a.jsx)(n.code,{children:"FOR VERSION AS OF"})," \u8BED\u53E5\uFF0C\u6839\u636E\u5FEB\u7167 ID \u6216\u8005\u5FEB\u7167\u4EA7\u751F\u7684\u65F6\u95F4\u8BFB\u53D6\u5386\u53F2\u7248\u672C\u7684\u6570\u636E\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53E6\u5916\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.a,{href:"../../sql-manual/sql-functions/table-functions/iceberg-meta.md",children:"iceberg_meta"})," \u8868\u51FD\u6570\u67E5\u8BE2\u6307\u5B9A\u8868\u7684 snapshot \u4FE1\u606F\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var r=s(667294);let a={},i=r.createContext(a);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);