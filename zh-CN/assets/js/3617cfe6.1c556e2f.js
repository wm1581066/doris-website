"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["175941"],{171052:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"ecosystem/beats","title":"Beats Doris Output Plugin","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/beats.md","sourceDirName":"ecosystem","slug":"/ecosystem/beats","permalink":"/zh-CN/docs/ecosystem/beats","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Beats Doris Output Plugin","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Logstash Doris Output Plugin","permalink":"/zh-CN/docs/ecosystem/logstash"},"next":{"title":"AutoMQ Load","permalink":"/zh-CN/docs/ecosystem/automq-load"}}'),i=n("785893"),r=n("250065");let a={title:"Beats Doris Output Plugin",language:"zh-CN"},o="Beats Doris output plugin",d={},l=[{value:"\u5B89\u88C5",id:"\u5B89\u88C5",level:2},{value:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D",id:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D",level:3},{value:"\u4ECE\u6E90\u7801\u7F16\u8BD1",id:"\u4ECE\u6E90\u7801\u7F16\u8BD1",level:3},{value:"\u53C2\u6570\u914D\u7F6E",id:"\u53C2\u6570\u914D\u7F6E",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"TEXT \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",id:"text-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",level:3},{value:"JSON \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",id:"json-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",level:3}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"beats-doris-output-plugin",children:"Beats Doris output plugin"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats",children:"Beats"})," \u662F\u4E00\u4E2A\u6570\u636E\u91C7\u96C6 Agent\uFF0C\u5B83\u652F\u6301\u81EA\u5B9A\u4E49\u8F93\u51FA\u63D2\u4EF6\u5C06\u6570\u636E\u5199\u5165\u5B58\u50A8\u7CFB\u7EDF\uFF0CBeats Doris output plugin \u662F\u8F93\u51FA\u5230 Doris \u7684\u63D2\u4EF6\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["Beats Doris output plugin \u652F\u6301 ",(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/filebeat",children:"Filebeat"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/metricbeat",children:"Metricbeat"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/packetbeat",children:"Packetbeat"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/winlogbeat",children:"Winlogbeat"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/auditbeat",children:"Auditbeat"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/elastic/beats/tree/master/heartbeat",children:"Heartbeat"})," \u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["Beats Doris output plugin \u8C03\u7528 ",(0,i.jsx)(t.a,{href:"../data-operate/import/stream-load-manual.md",children:"Doris Stream Load"})," HTTP \u63A5\u53E3\u5C06\u6570\u636E\u5B9E\u65F6\u5199\u5165 Doris\uFF0C\u63D0\u4F9B\u591A\u7EBF\u7A0B\u5E76\u53D1\uFF0C\u5931\u8D25\u91CD\u8BD5\uFF0C\u81EA\u5B9A\u4E49 Stream Load \u683C\u5F0F\u548C\u53C2\u6570\uFF0C\u8F93\u51FA\u5199\u5165\u901F\u5EA6\u7B49\u80FD\u529B\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u4F7F\u7528 Beats Doris output plugin \u4E3B\u8981\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF1A"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u4E0B\u8F7D\u6216\u7F16\u8BD1\u5305\u542B Doris output plugin \u7684 Beats\u4E8C\u8FDB\u5236\u7A0B\u5E8F"}),"\n",(0,i.jsx)(t.li,{children:"\u914D\u7F6E Beats \u8F93\u51FA\u5730\u5740\u548C\u5176\u4ED6\u53C2\u6570"}),"\n",(0,i.jsx)(t.li,{children:"\u542F\u52A8 Beats \u5C06\u6570\u636E\u5B9E\u65F6\u5199\u5165 Doris"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u5B89\u88C5",children:"\u5B89\u88C5"}),"\n",(0,i.jsx)(t.h3,{id:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D",children:"\u4ECE\u5B98\u7F51\u4E0B\u8F7D"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/filebeat-doris-2.0.0",children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/filebeat-doris-2.0.0"})}),"\n",(0,i.jsx)(t.h3,{id:"\u4ECE\u6E90\u7801\u7F16\u8BD1",children:"\u4ECE\u6E90\u7801\u7F16\u8BD1"}),"\n",(0,i.jsx)(t.p,{children:"\u5728 extension/beats/ \u76EE\u5F55\u4E0B\u6267\u884C"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cd doris/extension/beats\n\ngo build -o filebeat-doris filebeat/filebeat.go\ngo build -o metricbeat-doris metricbeat/metricbeat.go\ngo build -o winlogbeat-doris winlogbeat/winlogbeat.go\ngo build -o packetbeat-doris packetbeat/packetbeat.go\ngo build -o auditbeat-doris auditbeat/auditbeat.go\ngo build -o heartbeat-doris heartbeat/heartbeat.go\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u53C2\u6570\u914D\u7F6E",children:"\u53C2\u6570\u914D\u7F6E"}),"\n",(0,i.jsx)(t.p,{children:"Beats Doris output plugin \u7684\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u914D\u7F6E"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http_hosts"})}),(0,i.jsx)(t.td,{children:'Stream Load HTTP \u5730\u5740\uFF0C\u683C\u5F0F\u662F\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u53EF\u4EE5\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5143\u7D20\uFF0C\u6BCF\u4E2A\u5143\u7D20\u662F host:port\u3002 \u4F8B\u5982\uFF1A["http://fe1:8030", "http://fe2:8030"]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"user"})}),(0,i.jsx)(t.td,{children:"Doris \u7528\u6237\u540D\uFF0C\u8BE5\u7528\u6237\u9700\u8981\u6709doris\u5BF9\u5E94\u5E93\u8868\u7684\u5BFC\u5165\u6743\u9650"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"password"})}),(0,i.jsx)(t.td,{children:"Doris \u7528\u6237\u7684\u5BC6\u7801"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"database"})}),(0,i.jsx)(t.td,{children:"\u8981\u5199\u5165\u7684 Doris \u5E93\u540D"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"table"})}),(0,i.jsx)(t.td,{children:"\u8981\u5199\u5165\u7684 Doris \u8868\u540D"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"label_prefix"})}),(0,i.jsxs)(t.td,{children:["Doris Stream Load Label \u524D\u7F00\uFF0C\u6700\u7EC8\u751F\u6210\u7684 Label \u4E3A ",(0,i.jsxs)(t.em,{children:["{label_prefix}",(0,i.jsx)(t.em,{children:"{db}"}),"{table}",(0,i.jsx)(t.em,{children:"{yyyymmdd_hhmmss}"}),"{uuid}"]})," \uFF0C\u9ED8\u8BA4\u503C\u662F beats"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"headers"})}),(0,i.jsx)(t.td,{children:"Doris Stream Load \u7684 headers \u53C2\u6570\uFF0C\u8BED\u6CD5\u683C\u5F0F\u4E3A YAML map"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"codec_format_string"})}),(0,i.jsx)(t.td,{children:"\u8F93\u51FA\u5230 Doris Stream Load \u7684format string\uFF0C%{[a][b]} \u4EE3\u8868\u8F93\u5165\u4E2D\u7684 a.b \u5B57\u6BB5\uFF0C\u53C2\u8003\u540E\u7EED\u7AE0\u8282\u7684\u4F7F\u7528\u793A\u4F8B"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bulk_max_size"})}),(0,i.jsx)(t.td,{children:"Doris Stream Load \u7684 batch size\uFF0C\u9ED8\u8BA4\u4E3A100000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"max_retries"})}),(0,i.jsx)(t.td,{children:"Doris Stream Load \u8BF7\u6C42\u5931\u8D25\u91CD\u8BD5\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A -1 \u65E0\u9650\u91CD\u8BD5\u4FDD\u8BC1\u6570\u636E\u53EF\u9760\u6027"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"log_request"})}),(0,i.jsx)(t.td,{children:"\u65E5\u5FD7\u4E2D\u662F\u5426\u8F93\u51FA Doris Stream Load \u8BF7\u6C42\u548C\u54CD\u5E94\u5143\u6570\u636E\uFF0C\u7528\u4E8E\u6392\u67E5\u95EE\u9898\uFF0C\u9ED8\u8BA4\u4E3A true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"log_progress_interval"})}),(0,i.jsx)(t.td,{children:"\u65E5\u5FD7\u4E2D\u8F93\u51FA\u901F\u5EA6\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5173\u95ED\u8FD9\u79CD\u65E5\u5FD7"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(t.h3,{id:"text-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",children:"TEXT \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(t.p,{children:"\u8BE5\u793A\u4F8B\u4EE5 Doris FE \u7684\u65E5\u5FD7\u4E3A\u4F8B\u5C55\u793A TEXT \u65E5\u5FD7\u91C7\u96C6\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"1. \u6570\u636E"})}),"\n",(0,i.jsx)(t.p,{children:"FE \u65E5\u5FD7\u6587\u4EF6\u4E00\u822C\u4F4D\u4E8E Doris \u5B89\u88C5\u76EE\u5F55\u4E0B\u7684 fe/log/fe.log \u6587\u4EF6\uFF0C\u662F\u5178\u578B\u7684 Java \u7A0B\u5E8F\u65E5\u5FD7\uFF0C\u5305\u62EC\u65F6\u95F4\u6233\uFF0C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u7EBF\u7A0B\u540D\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u65E5\u5FD7\u5185\u5BB9\u7B49\u5B57\u6BB5\u3002\u4E0D\u4EC5\u6709\u6B63\u5E38\u7684\u65E5\u5FD7\uFF0C\u8FD8\u6709\u5E26 stacktrace \u7684\u5F02\u5E38\u65E5\u5FD7\uFF0Cstacktrace \u662F\u8DE8\u884C\u7684\uFF0C\u65E5\u5FD7\u91C7\u96C6\u5B58\u50A8\u9700\u8981\u628A\u4E3B\u65E5\u5FD7\u548C stacktrace \u7EC4\u5408\u6210\u4E00\u6761\u65E5\u5FD7\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"2. \u5EFA\u8868"})}),"\n",(0,i.jsx)(t.p,{children:"\u8868\u7ED3\u6784\u5305\u62EC\u65E5\u5FD7\u7684\u4EA7\u751F\u65F6\u95F4\uFF0C\u91C7\u96C6\u65F6\u95F4\uFF0C\u4E3B\u673A\u540D\uFF0C\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\uFF0C\u65E5\u5FD7\u7C7B\u578B\uFF0C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u7EBF\u7A0B\u540D\uFF0C\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u65E5\u5FD7\u5185\u5BB9\u7B49\u5B57\u6BB5\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"3. \u914D\u7F6E"})}),"\n",(0,i.jsx)(t.p,{children:"filebeat \u65E5\u5FD7\u91C7\u96C6\u7684\u914D\u7F6E\u6587\u4EF6\u5982 filebeat_doris_log.yml \u662F YAML \u683C\u5F0F\uFF0C\u4E3B\u8981\u7531 4 \u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u5BF9\u5E94 ETL \u7684\u5404\u4E2A\u90E8\u5206\uFF1A"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"input \u8D1F\u8D23\u8BFB\u53D6\u539F\u59CB\u6570\u636E"}),"\n",(0,i.jsx)(t.li,{children:"processor \u8D1F\u8D23\u505A\u6570\u636E\u8F6C\u6362"}),"\n",(0,i.jsx)(t.li,{children:"queue.mem \u914D\u7F6E filebeat \u5185\u90E8\u7684\u7F13\u51B2\u961F\u5217"}),"\n",(0,i.jsx)(t.li,{children:"output \u8D1F\u8D23\u5C06\u6570\u636E\u8F93\u51FA"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'# 1. input \u8D1F\u8D23\u8BFB\u53D6\u539F\u59CB\u6570\u636E\n# type: log \u662F\u4E00\u4E2A log input plugin\uFF0C\u53EF\u4EE5\u914D\u7F6E\u8BFB\u53D6\u7684\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\uFF0C\u901A\u8FC7 multiline \u529F\u80FD\u5C06\u975E\u65F6\u95F4\u5F00\u5934\u7684\u884C\u62FC\u63A5\u5230\u4E0A\u4E00\u884C\u540E\u9762\uFF0C\u5B9E\u73B0 stacktrace \u548C\u4E3B\u65E5\u5FD7\u5408\u5E76\u7684\u6548\u679C\u3002log input \u4F1A\u5C06\u65E5\u5FD7\u5185\u5BB9\u4FDD\u5B58\u5728 message \u5B57\u6BB5\u4E2D\uFF0C\u53E6\u5916\u8FD8\u6709\u4E00\u4E9B\u5143\u6570\u636E\u5B57\u6BB5\u6BD4\u5982 agent.host\uFF0Clog.file.path\u3002\nfilebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n    - /path/to/your/log\n  # multiline \u53EF\u4EE5\u5C06\u8DE8\u884C\u7684\u65E5\u5FD7\uFF08\u6BD4\u5982Java stacktrace\uFF09\u62FC\u63A5\u8D77\u6765\n  multiline:\n    type: pattern\n    # \u6548\u679C\uFF1A\u4EE5 yyyy-mm-dd HH:MM:SS \u5F00\u5934\u7684\u884C\u8BA4\u4E3A\u662F\u4E00\u6761\u65B0\u7684\u65E5\u5FD7\uFF0C\u5176\u4ED6\u90FD\u62FC\u63A5\u5230\u4E0A\u4E00\u6761\u65E5\u5FD7\n    pattern: \'^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\'\n    negate: true\n    match: after\n    skip_newline: true\n\n# 2. processors \u90E8\u5206\u8D1F\u8D23\u6570\u636E\u8F6C\u6362\nprocessors:\n# \u7528 js script \u63D2\u4EF6\u5C06\u65E5\u5FD7\u4E2D\u7684 \\t \u66FF\u6362\u6210\u7A7A\u683C\uFF0C\u907F\u514DJSON\u89E3\u6790\u62A5\u9519\n- script:\n    lang: javascript\n    source: >\n        function process(event) {\n            var msg = event.Get("message");\n            msg = msg.replace(/\\t/g, "  ");\n            event.Put("message", msg);\n        }\n# \u7528 dissect \u63D2\u4EF6\u505A\u7B80\u5355\u7684\u65E5\u5FD7\u89E3\u6790\n- dissect:\n    # 2024-06-08 18:26:25,481 INFO (report-thread|199) [ReportHandler.cpuReport():617] begin to handle\n    tokenizer: "%{day} %{time} %{log_level} (%{thread}) [%{position}] %{content}"\n    target_prefix: ""\n    ignore_failure: true\n    overwrite_keys: true\n\n# 3. \u5185\u90E8\u7684\u7F13\u51B2\u961F\u5217\u603B\u6761\u6570\uFF0Cflush batch \u6761\u6570\uFF0Cflush \u65F6\u95F4\u95F4\u9694\nqueue.mem:\n  events: 1000000\n  flush.min_events: 100000\n  flush.timeout: 10s\n\n# 4. output \u90E8\u5206\u8D1F\u8D23\u6570\u636E\u8F93\u51FA\n# doris output \u5C06\u6570\u636E\u8F93\u51FA\u5230 Doris\uFF0C\u4F7F\u7528\u7684\u662F Stream Load HTTP \u63A5\u53E3\u3002\u901A\u8FC7 headers \u53C2\u6570\u6307\u5B9A\u4E86 Stream Load \u7684\u6570\u636E\u683C\u5F0F\u4E3A JSON\uFF0C\u901A\u8FC7 codec_format_string \u53C2\u6570\u7528\u7C7B\u4F3C printf \u7684\u65B9\u5F0F\u683C\u5F0F\u5316\u8F93\u51FA\u5230 Doris \u7684\u6570\u636E\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u57FA\u4E8E filebeat \u5185\u90E8\u7684\u5B57\u6BB5 format \u51FA\u4E00\u4E2A JSON\uFF0C\u8FD9\u4E9B\u5B57\u6BB5\u53EF\u4EE5\u662F filebeat \u5185\u7F6E\u5B57\u6BB5\u5982 agent.hostname\uFF0C\u4E5F\u53EF\u4EE5\u662F processor \u6BD4\u5982 dissect \u751F\u4EA7\u7684\u5B57\u6BB5\u5982 day\uFF0C\u901A\u8FC7 %{[a][b]} \u7684\u65B9\u5F0F\u5F15\u7528\uFF0C\uFF0CStream Load \u4F1A\u81EA\u52A8\u5C06 JSON \u5B57\u6BB5\u5199\u5165\u5BF9\u5E94\u7684 Doris \u8868\u7684\u5B57\u6BB5\u3002\noutput.doris:\n  fenodes: [ "http://fehost1:http_port", "http://fehost2:http_port", "http://fehost3:http_port" ]\n  user: "your_username"\n  password: "your_password"\n  database: "your_db"\n  table: "your_table"\n  # output string format\n  ## %{[agent][hostname]} %{[log][file][path]} \u662Ffilebeat\u81EA\u5E26\u7684metadata\n  ## \u5E38\u7528\u7684 filebeat metadata \u8FD8\u662F\u6709\u91C7\u96C6\u65F6\u95F4\u6233 %{[@timestamp]}\n  ## %{[day]} %{[time]} \u662F\u4E0A\u9762 dissect \u89E3\u6790\u5F97\u5230\u5B57\u6BB5\n  codec_format_string: \'{"ts": "%{[day]} %{[time]}", "host": "%{[agent][hostname]}", "path": "%{[log][file][path]}", "message": "%{[message]}"}\'\n  headers:\n    format: "json"\n    read_json_by_line: "true"\n    load_to_single_tablet: "true"\n\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"4. \u8FD0\u884C Filebeat"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'\n./filebeat-doris -f config/filebeat_doris_log.yml\n\n# log_request \u4E3A true \u65F6\u65E5\u5FD7\u4F1A\u8F93\u51FA\u6BCF\u6B21 Stream Load \u7684\u8BF7\u6C42\u53C2\u6570\u548C\u54CD\u5E94\u7ED3\u679C\n\ndoris stream load response:\n{\n    "TxnId": 45464,\n    "Label": "logstash_log_db_doris_log_20240708_223532_539_6c20a0d1-dcab-4b8e-9bc0-76b46a929bd1",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 452,\n    "NumberLoadedRows": 452,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 277230,\n    "LoadTimeMs": 1797,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 18,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 1758,\n    "CommitAndPublishTimeMs": 18\n}\n\n# \u9ED8\u8BA4\u6BCF\u9694 10s \u4F1A\u65E5\u5FD7\u8F93\u51FA\u901F\u5EA6\u4FE1\u606F\uFF0C\u5305\u62EC\u81EA\u542F\u52A8\u4EE5\u6765\u7684\u6570\u636E\u91CF\uFF08MB \u548C ROWS\uFF09\uFF0C\u603B\u901F\u5EA6\uFF08MB/s \u548C R/S\uFF09\uFF0C\u6700\u8FD1 10s \u901F\u5EA6\ntotal 11 MB 18978 ROWS, total speed 0 MB/s 632 R/s, last 10 seconds speed 1 MB/s 1897 R/s\n'})}),"\n",(0,i.jsx)(t.h3,{id:"json-\u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B",children:"JSON \u65E5\u5FD7\u91C7\u96C6\u793A\u4F8B"}),"\n",(0,i.jsx)(t.p,{children:"\u8BE5\u6837\u4F8B\u4EE5 github events archive \u7684\u6570\u636E\u4E3A\u4F8B\u5C55\u793A JSON \u65E5\u5FD7\u91C7\u96C6\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"1. \u6570\u636E"})}),"\n",(0,i.jsxs)(t.p,{children:["github events archive \u662F github \u7528\u6237\u64CD\u4F5C\u4E8B\u4EF6\u7684\u5F52\u6863\u6570\u636E\uFF0C\u683C\u5F0F\u662F JSON\uFF0C\u53EF\u4EE5\u4ECE ",(0,i.jsx)(t.a,{href:"https://www.gharchive.org/",children:"https://www.gharchive.org/"})," \u4E0B\u8F7D\uFF0C\u6BD4\u5982\u4E0B\u8F7D 2024\u5E741\u67081\u65E515\u70B9\u7684\u6570\u636E\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"wget https://data.gharchive.org/2024-01-01-15.json.gz\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u4E0B\u9762\u662F\u4E00\u6761\u6570\u636E\u6837\u4F8B\uFF0C\u5B9E\u9645\u4E00\u6761\u6570\u636E\u4E00\u884C\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u5C55\u793A\u8FDB\u884C\u4E86\u683C\u5F0F\u5316\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"2. Doris \u5EFA\u8868"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'CREATE DATABASE log_db;\nUSE log_db;\n\n\nCREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor` VARIANT,\n  `repo` VARIANT,\n  `payload` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor` (`actor`) USING INVERTED,\n  INDEX `idx_host` (`repo`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"3. Filebeat \u914D\u7F6E"})}),"\n",(0,i.jsx)(t.p,{children:"\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u548C\u4E4B\u524D TEXT \u65E5\u5FD7\u91C7\u96C6\u4E0D\u540C\u7684\u6709\u4E0B\u9762\u51E0\u70B9\uFF1A"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u6CA1\u6709\u7528 processors\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u989D\u5916\u7684\u5904\u7406\u8F6C\u6362"}),"\n",(0,i.jsx)(t.li,{children:"output \u4E2D\u7684 codec_format_string \u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u8F93\u51FA\u6574\u4E2A message\uFF0C\u4E5F\u5C31\u662F\u539F\u59CB\u5185\u5BB9"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'# input\nfilebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n    - /path/to/your/log\n\n# queue and batch\nqueue.mem:\n  events: 1000000\n  flush.min_events: 100000\n  flush.timeout: 10s\n\n# output\noutput.doris:\n  fenodes: [ "http://fehost1:http_port", "http://fehost2:http_port", "http://fehost3:http_port" ]\n  user: "your_username"\n  password: "your_password"\n  database: "your_db"\n  table: "your_table"\n  # output string format\n  ## \u76F4\u63A5\u628A\u539F\u59CB\u6587\u4EF6\u6BCF\u4E00\u884C\u7684 message \u539F\u6837\u8F93\u51FA\uFF0C\u7531\u4E8E headers \u6307\u5B9A\u4E86 format: "json"\uFF0CStream Load \u4F1A\u81EA\u52A8\u89E3\u6790 JSON \u5B57\u6BB5\u5199\u5165\u5BF9\u5E94\u7684 Doris \u8868\u7684\u5B57\u6BB5\u3002\n  codec_format_string: \'%{[message]}\'\n  headers:\n    format: "json"\n    read_json_by_line: "true"\n    load_to_single_tablet: "true"\n\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"4. \u8FD0\u884C Filebeat"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"./filebeat-doris -f config/filebeat_github_events.yml\n"})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(667294);let i={},r=s.createContext(i);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);