"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["116572"],{660568:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"admin-manual/cluster-management/load-balancing","title":"\u8D1F\u8F7D\u5747\u8861","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/cluster-management/load-balancing.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/load-balancing","permalink":"/zh-CN/docs/1.2/admin-manual/cluster-management/load-balancing","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"\u8D1F\u8F7D\u5747\u8861","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5F39\u6027\u6269\u7F29\u5BB9","permalink":"/zh-CN/docs/1.2/admin-manual/cluster-management/elastic-expansion"},"next":{"title":"FQDN","permalink":"/zh-CN/docs/1.2/admin-manual/cluster-management/fqdn"}}'),o=s("785893"),t=s("250065");let l={title:"\u8D1F\u8F7D\u5747\u8861",language:"zh-CN"},a="\u8D1F\u8F7D\u5747\u8861",i={},c=[{value:"\u4EE3\u7801\u5B9E\u73B0",id:"\u4EE3\u7801\u5B9E\u73B0",level:2},{value:"JDBC Connector",id:"jdbc-connector",level:2},{value:"ProxySQL \u65B9\u5F0F",id:"proxysql-\u65B9\u5F0F",level:2},{value:"\u5B89\u88C5ProxySQL \uFF08yum\u65B9\u5F0F\uFF09",id:"\u5B89\u88C5proxysql-yum\u65B9\u5F0F",level:3},{value:"ProxySQL \u914D\u7F6E",id:"proxysql-\u914D\u7F6E",level:3},{value:"\u67E5\u770B\u53CA\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",id:"\u67E5\u770B\u53CA\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",level:4},{value:"\u8FDE\u63A5 ProxySQL \u7BA1\u7406\u7AEF\u53E3\u6D4B\u8BD5",id:"\u8FDE\u63A5-proxysql-\u7BA1\u7406\u7AEF\u53E3\u6D4B\u8BD5",level:4},{value:"ProxySQL \u914D\u7F6E\u540E\u7AEF Doris FE",id:"proxysql-\u914D\u7F6E\u540E\u7AEF-doris-fe",level:4},{value:"\u76D1\u63A7Doris FE\u8282\u70B9\u914D\u7F6E",id:"\u76D1\u63A7doris-fe\u8282\u70B9\u914D\u7F6E",level:4},{value:"\u914D\u7F6EDoris\u7528\u6237",id:"\u914D\u7F6Edoris\u7528\u6237",level:4},{value:"\u901A\u8FC7 ProxySQL \u8FDE\u63A5 Doris \u8FDB\u884C\u6D4B\u8BD5",id:"\u901A\u8FC7-proxysql-\u8FDE\u63A5-doris-\u8FDB\u884C\u6D4B\u8BD5",level:4},{value:"Nginx TCP\u53CD\u5411\u4EE3\u7406\u65B9\u5F0F",id:"nginx-tcp\u53CD\u5411\u4EE3\u7406\u65B9\u5F0F",level:2},{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:3},{value:"\u73AF\u5883\u51C6\u5907",id:"\u73AF\u5883\u51C6\u5907",level:3},{value:"\u5B89\u88C5\u4F9D\u8D56",id:"\u5B89\u88C5\u4F9D\u8D56",level:3},{value:"\u5B89\u88C5Nginx",id:"\u5B89\u88C5nginx",level:3},{value:"\u914D\u7F6E\u53CD\u5411\u4EE3\u7406",id:"\u914D\u7F6E\u53CD\u5411\u4EE3\u7406",level:3},{value:"\u542F\u52A8Nginx",id:"\u542F\u52A8nginx",level:3},{value:"\u9A8C\u8BC1",id:"\u9A8C\u8BC1",level:3}];function d(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u8D1F\u8F7D\u5747\u8861",children:"\u8D1F\u8F7D\u5747\u8861"})}),"\n",(0,o.jsx)(e.p,{children:"\u5F53\u90E8\u7F72\u591A\u4E2A FE \u8282\u70B9\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u591A\u4E2A FE \u4E4B\u4E0A\u90E8\u7F72\u8D1F\u8F7D\u5747\u8861\u5C42\u6765\u5B9E\u73B0 Doris \u7684\u9AD8\u53EF\u7528\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u4EE3\u7801\u5B9E\u73B0",children:"\u4EE3\u7801\u5B9E\u73B0"}),"\n",(0,o.jsx)(e.p,{children:"\u81EA\u5DF1\u5728\u5E94\u7528\u5C42\u4EE3\u7801\u8FDB\u884C\u91CD\u8BD5\u548C\u8D1F\u8F7D\u5747\u8861\u3002\u6BD4\u5982\u53D1\u73B0\u4E00\u4E2A\u8FDE\u63A5\u6302\u6389\uFF0C\u5C31\u81EA\u52A8\u5728\u5176\u4ED6\u8FDE\u63A5\u4E0A\u8FDB\u884C\u91CD\u8BD5\u3002\u5E94\u7528\u5C42\u4EE3\u7801\u91CD\u8BD5\u9700\u8981\u5E94\u7528\u81EA\u5DF1\u914D\u7F6E\u591A\u4E2A doris \u524D\u7AEF\u8282\u70B9\u5730\u5740\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"jdbc-connector",children:"JDBC Connector"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528 mysql jdbc connector \u6765\u8FDE\u63A5 Doris\uFF0C\u53EF\u4EE5\u4F7F\u7528 jdbc \u7684\u81EA\u52A8\u91CD\u8BD5\u673A\u5236:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"jdbc:mysql:loadbalance://[host:port],[host:port].../[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u8BE6\u7EC6\u53EF\u4EE5\u53C2\u8003",(0,o.jsx)(e.a,{href:"https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-usagenotes-j2ee-concepts-managing-load-balanced-connections.html",children:"Mysql\u5B98\u7F51\u6587\u6863"})]}),"\n",(0,o.jsx)(e.h2,{id:"proxysql-\u65B9\u5F0F",children:"ProxySQL \u65B9\u5F0F"}),"\n",(0,o.jsx)(e.p,{children:"ProxySQL\u662F\u7075\u6D3B\u5F3A\u5927\u7684MySQL\u4EE3\u7406\u5C42, \u662F\u4E00\u4E2A\u80FD\u5B9E\u5B9E\u5728\u5728\u7528\u5728\u751F\u4EA7\u73AF\u5883\u7684MySQL\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8BFB\u5199\u5206\u79BB\uFF0C\u652F\u6301 Query \u8DEF\u7531\u529F\u80FD\uFF0C\u652F\u6301\u52A8\u6001\u6307\u5B9A\u67D0\u4E2A SQL \u8FDB\u884C cache\uFF0C\u652F\u6301\u52A8\u6001\u52A0\u8F7D\u914D\u7F6E\u3001\u6545\u969C\u5207\u6362\u548C\u4E00\u4E9B SQL\u7684\u8FC7\u6EE4\u529F\u80FD\u3002"}),"\n",(0,o.jsx)(e.p,{children:"Doris \u7684 FE \u8FDB\u7A0B\u8D1F\u8D23\u63A5\u6536\u7528\u6237\u8FDE\u63A5\u548C\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u5176\u672C\u8EAB\u662F\u53EF\u4EE5\u6A2A\u5411\u6269\u5C55\u4E14\u9AD8\u53EF\u7528\u7684\uFF0C\u4F46\u662F\u9700\u8981\u7528\u6237\u5728\u591A\u4E2A FE \u4E0A\u67B6\u8BBE\u4E00\u5C42 proxy\uFF0C\u6765\u5B9E\u73B0\u81EA\u52A8\u7684\u8FDE\u63A5\u8D1F\u8F7D\u5747\u8861\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u5B89\u88C5proxysql-yum\u65B9\u5F0F",children:"\u5B89\u88C5ProxySQL \uFF08yum\u65B9\u5F0F\uFF09"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"\u914D\u7F6Eyum\u6E90\n# vim /etc/yum.repos.d/proxysql.repo\n[proxysql_repo]\nname= ProxySQL YUM repository\nbaseurl=http://repo.proxysql.com/ProxySQL/proxysql-1.4.x/centos/\\$releasever\ngpgcheck=1\ngpgkey=http://repo.proxysql.com/ProxySQL/repo_pub_key\n \n\u6267\u884C\u5B89\u88C5\n# yum clean all\n# yum makecache\n# yum -y install proxysql\n\u67E5\u770B\u7248\u672C  \n# proxysql --version\nProxySQL version 1.4.13-15-g69d4207, codename Truls\n\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8\n# systemctl enable proxysql\n# systemctl start proxysql      \n# systemctl status proxysql\n\u542F\u52A8\u540E\u4F1A\u76D1\u542C\u4E24\u4E2A\u7AEF\u53E3\uFF0C \u9ED8\u8BA4\u4E3A6032\u548C6033\u30026032\u7AEF\u53E3\u662FProxySQL\u7684\u7BA1\u7406\u7AEF\u53E3\uFF0C6033\u662FProxySQL\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684\u7AEF\u53E3 (\u5373\u8FDE\u63A5\u5230\u8F6C\u53D1\u540E\u7AEF\u7684\u771F\u6B63\u6570\u636E\u5E93\u7684\u8F6C\u53D1\u7AEF\u53E3)\u3002\n# netstat -tunlp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name  \ntcp        0      0 0.0.0.0:6032            0.0.0.0:*               LISTEN      23940/proxysql    \ntcp        0      0 0.0.0.0:6033            0.0.0.0:*               LISTEN\n"})}),"\n",(0,o.jsx)(e.h3,{id:"proxysql-\u914D\u7F6E",children:"ProxySQL \u914D\u7F6E"}),"\n",(0,o.jsxs)(e.p,{children:["ProxySQL \u6709\u914D\u7F6E\u6587\u4EF6 ",(0,o.jsx)(e.code,{children:"/etc/proxysql.cnf"})," \u548C\u914D\u7F6E\u6570\u636E\u5E93\u6587\u4EF6",(0,o.jsx)(e.code,{children:"/var/lib/proxysql/proxysql.db"}),"\u3002",(0,o.jsx)(e.strong,{children:"\u8FD9\u91CC\u9700\u8981\u7279\u522B\u6CE8\u610F"}),"\uFF1A\u5982\u679C\u5B58\u5728\u5982\u679C\u5B58\u5728",(0,o.jsx)(e.code,{children:'"proxysql.db"'}),"\u6587\u4EF6(\u5728",(0,o.jsx)(e.code,{children:"/var/lib/proxysql"}),"\u76EE\u5F55\u4E0B)\uFF0C\u5219 ProxySQL \u670D\u52A1\u53EA\u6709\u5728\u7B2C\u4E00\u6B21\u542F\u52A8\u65F6\u624D\u4F1A\u53BB\u8BFB\u53D6",(0,o.jsx)(e.code,{children:"proxysql.cnf\u6587\u4EF6"}),"\u5E76\u89E3\u6790\uFF1B\u540E\u9762\u542F\u52A8\u4F1A\u5C31\u4E0D\u4F1A\u8BFB\u53D6",(0,o.jsx)(e.code,{children:"proxysql.cnf"}),"\u6587\u4EF6\u4E86\uFF01\u5982\u679C\u60F3\u8981\u8BA9proxysql.cnf \u6587\u4EF6\u91CC\u7684\u914D\u7F6E\u5728\u91CD\u542F proxysql \u670D\u52A1\u540E\u751F\u6548(\u5373\u60F3\u8981\u8BA9 proxysql \u91CD\u542F\u65F6\u8BFB\u53D6\u5E76\u89E3\u6790 proxysql.cnf\u914D\u7F6E\u6587\u4EF6)\uFF0C\u5219\u9700\u8981\u5148\u5220\u9664 ",(0,o.jsx)(e.code,{children:"/var/lib/proxysql/proxysql.db"}),"\u6570\u636E\u5E93\u6587\u4EF6\uFF0C\u7136\u540E\u518D\u91CD\u542F proxysql \u670D\u52A1\u3002\u8FD9\u6837\u5C31\u76F8\u5F53\u4E8E\u521D\u59CB\u5316\u542F\u52A8 proxysql \u670D\u52A1\u4E86\uFF0C\u4F1A\u518D\u6B21\u751F\u4EA7\u4E00\u4E2A\u7EAF\u51C0\u7684 proxysql.db \u6570\u636E\u5E93\u6587\u4EF6(\u5982\u679C\u4E4B\u524D\u914D\u7F6E\u4E86 proxysql \u76F8\u5173\u8DEF\u7531\u89C4\u5219\u7B49\uFF0C\u5219\u5C31\u4F1A\u88AB\u62B9\u6389)"]}),"\n",(0,o.jsx)(e.h4,{id:"\u67E5\u770B\u53CA\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",children:"\u67E5\u770B\u53CA\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,o.jsx)(e.p,{children:"\u8FD9\u91CC\u4E3B\u8981\u662F\u51E0\u4E2A\u53C2\u6570\uFF0C\u5728\u4E0B\u9762\u5DF2\u7ECF\u6CE8\u91CA\u51FA\u6765\u4E86\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u8FDB\u884C\u4FEE\u6539"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'# egrep -v "^#|^$" /etc/proxysql.cnf\ndatadir="/var/lib/proxysql"         #\u6570\u636E\u76EE\u5F55\nadmin_variables=\n{\n        admin_credentials="admin:admin"  #\u8FDE\u63A5\u7BA1\u7406\u7AEF\u7684\u7528\u6237\u540D\u4E0E\u5BC6\u7801\n        mysql_ifaces="0.0.0.0:6032"    #\u7BA1\u7406\u7AEF\u53E3\uFF0C\u7528\u6765\u8FDE\u63A5proxysql\u7684\u7BA1\u7406\u6570\u636E\u5E93\n}\nmysql_variables=\n{\n        threads=4                #\u6307\u5B9A\u8F6C\u53D1\u7AEF\u53E3\u5F00\u542F\u7684\u7EBF\u7A0B\u6570\u91CF\n        max_connections=2048\n        default_query_delay=0\n        default_query_timeout=36000000\n        have_compress=true\n        poll_timeout=2000\n        interfaces="0.0.0.0:6033"    #\u6307\u5B9A\u8F6C\u53D1\u7AEF\u53E3\uFF0C\u7528\u4E8E\u8FDE\u63A5\u540E\u7AEFmysql\u6570\u636E\u5E93\u7684\uFF0C\u76F8\u5F53\u4E8E\u4EE3\u7406\u4F5C\u7528\n        default_schema="information_schema"\n        stacksize=1048576\n        server_version="5.5.30"        #\u6307\u5B9A\u540E\u7AEFmysql\u7684\u7248\u672C\n        connect_timeout_server=3000\n        monitor_username="monitor"\n        monitor_password="monitor"\n        monitor_history=600000\n        monitor_connect_interval=60000\n        monitor_ping_interval=10000\n        monitor_read_only_interval=1500\n        monitor_read_only_timeout=500\n        ping_interval_server_msec=120000\n        ping_timeout_server=500\n        commands_stats=true\n        sessions_sort=true\n        connect_retries_on_failure=10\n}\nmysql_servers =\n(\n)\nmysql_users:\n(\n)\nmysql_query_rules:\n(\n)\nscheduler=\n(\n)\nmysql_replication_hostgroups=\n(\n)\n'})}),"\n",(0,o.jsx)(e.h4,{id:"\u8FDE\u63A5-proxysql-\u7BA1\u7406\u7AEF\u53E3\u6D4B\u8BD5",children:"\u8FDE\u63A5 ProxySQL \u7BA1\u7406\u7AEF\u53E3\u6D4B\u8BD5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"# mysql -uadmin -padmin -P6032 -hdoris01\n\u67E5\u770Bmain\u5E93\uFF08\u9ED8\u8BA4\u767B\u9646\u540E\u5373\u5728\u6B64\u5E93\uFF09\u7684global_variables\u8868\u4FE1\u606F\nMySQL [(none)]> show databases;\n+-----+---------------+-------------------------------------+\n| seq | name          | file                                |\n+-----+---------------+-------------------------------------+\n| 0   | main          |                                     |\n| 2   | disk          | /var/lib/proxysql/proxysql.db       |\n| 3   | stats         |                                     |\n| 4   | monitor       |                                     |\n| 5   | stats_history | /var/lib/proxysql/proxysql_stats.db |\n+-----+---------------+-------------------------------------+\n5 rows in set (0.000 sec)\nMySQL [(none)]> use main;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n \nDatabase changed\nMySQL [main]> show tables;\n+--------------------------------------------+\n| tables                                     |\n+--------------------------------------------+\n| global_variables                           |\n| mysql_collations                           |\n| mysql_group_replication_hostgroups         |\n| mysql_query_rules                          |\n| mysql_query_rules_fast_routing             |\n| mysql_replication_hostgroups               |\n| mysql_servers                              |\n| mysql_users                                |\n| proxysql_servers                           |\n| runtime_checksums_values                   |\n| runtime_global_variables                   |\n| runtime_mysql_group_replication_hostgroups |\n| runtime_mysql_query_rules                  |\n| runtime_mysql_query_rules_fast_routing     |\n| runtime_mysql_replication_hostgroups       |\n| runtime_mysql_servers                      |\n| runtime_mysql_users                        |\n| runtime_proxysql_servers                   |\n| runtime_scheduler                          |\n| scheduler                                  |\n+--------------------------------------------+\n20 rows in set (0.000 sec)\n\n"})}),"\n",(0,o.jsx)(e.h4,{id:"proxysql-\u914D\u7F6E\u540E\u7AEF-doris-fe",children:"ProxySQL \u914D\u7F6E\u540E\u7AEF Doris FE"}),"\n",(0,o.jsx)(e.p,{children:"\u4F7F\u7528 insert \u8BED\u53E5\u6DFB\u52A0\u4E3B\u673A\u5230 mysql_servers \u8868\u4E2D\uFF0C\u5176\u4E2D\uFF1Ahostgroup_id \u4E3A10\u8868\u793A\u5199\u7EC4\uFF0C\u4E3A20\u8868\u793A\u8BFB\u7EC4\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4E0D\u9700\u8981\u8BFB\u5199\u5206\u79BB\uFF0C\u65E0\u6240\u8C13\u968F\u4FBF\u8BBE\u7F6E\u54EA\u4E00\u4E2A\u90FD\u53EF\u4EE5\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"[root@mysql-proxy ~]# mysql -uadmin -padmin -P6032 -h127.0.0.1\n............\nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.211',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.212',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.213',9030);\nQuery OK, 1 row affected (0.000 sec)\n \n\u5982\u679C\u5728\u63D2\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u51FA\u73B0\u62A5\u9519\uFF1A\nERROR 1045 (#2800): UNIQUE constraint failed: mysql_servers.hostgroup_id, mysql_servers.hostname, mysql_servers.port\n \n\u8BF4\u660E\u53EF\u80FD\u4E4B\u524D\u5C31\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u5176\u4ED6\u914D\u7F6E\uFF0C\u53EF\u4EE5\u6E05\u7A7A\u8FD9\u5F20\u8868 \u6216\u8005 \u5220\u9664\u5BF9\u5E94host\u7684\u914D\u7F6E\nMySQL [(none)]> select * from mysql_servers;\nMySQL [(none)]> delete from mysql_servers;\nQuery OK, 6 rows affected (0.000 sec)\n\n\u67E5\u770B\u8FD93\u4E2A\u8282\u70B9\u662F\u5426\u63D2\u5165\u6210\u529F\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u7684\u72B6\u6001\u3002\nMySQL [(none)]> select * from mysql_servers\\G;\n*************************** 1. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.211\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n*************************** 2. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.212\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n*************************** 3. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.213\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n6 rows in set (0.000 sec)\n  \nERROR: No query specified\n  \n\u5982\u4E0A\u4FEE\u6539\u540E\uFF0C\u52A0\u8F7D\u5230RUNTIME\uFF0C\u5E76\u4FDD\u5B58\u5230disk\uFF0C\u4E0B\u9762\u4E24\u6B65\u975E\u5E38\u91CD\u8981\uFF0C\u4E0D\u7136\u9000\u51FA\u4EE5\u540E\u4F60\u7684\u914D\u7F6E\u4FE1\u606F\u5C31\u6CA1\u4E86\uFF0C\u5FC5\u987B\u4FDD\u5B58\nMySQL [(none)]> load mysql servers to runtime;\nQuery OK, 0 rows affected (0.006 sec)\n  \nMySQL [(none)]> save mysql servers to disk;\nQuery OK, 0 rows affected (0.348 sec)\n"})}),"\n",(0,o.jsx)(e.h4,{id:"\u76D1\u63A7doris-fe\u8282\u70B9\u914D\u7F6E",children:"\u76D1\u63A7Doris FE\u8282\u70B9\u914D\u7F6E"}),"\n",(0,o.jsx)(e.p,{children:"\u6DFB doris fe \u8282\u70B9\u4E4B\u540E\uFF0C\u8FD8\u9700\u8981\u76D1\u63A7\u8FD9\u4E9B\u540E\u7AEF\u8282\u70B9\u3002\u5BF9\u4E8E\u540E\u7AEF\u591A\u4E2AFE\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u73AF\u5883\u6765\u8BF4\uFF0C\u8FD9\u662F\u5FC5\u987B\u7684\uFF0C\u56E0\u4E3A ProxySQL \u9700\u8981\u901A\u8FC7\u6BCF\u4E2A\u8282\u70B9\u7684 read_only \u503C\u6765\u81EA\u52A8\u8C03\u6574"}),"\n",(0,o.jsx)(e.p,{children:"\u5B83\u4EEC\u662F\u5C5E\u4E8E\u8BFB\u7EC4\u8FD8\u662F\u5199\u7EC4\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u9996\u5148\u5728\u540E\u7AEFmaster\u4E3B\u6570\u636E\u8282\u70B9\u4E0A\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u76D1\u63A7\u7684\u7528\u6237\u540D"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"\u5728doris fe master\u4E3B\u6570\u636E\u5E93\u8282\u70B9\u884C\u6267\u884C\uFF1A\n# mysql -P9030 -uroot -p \nmysql> create user monitor@'192.168.9.%' identified by 'P@ssword1!';\nQuery OK, 0 rows affected (0.03 sec)\nmysql> grant ADMIN_PRIV on *.* to monitor@'192.168.9.%';\nQuery OK, 0 rows affected (0.02 sec)\n \n\u7136\u540E\u56DE\u5230mysql-proxy\u4EE3\u7406\u5C42\u8282\u70B9\u4E0A\u914D\u7F6E\u76D1\u63A7\n# mysql -uadmin -padmin -P6032 -h127.0.0.1\nMySQL [(none)]> set mysql-monitor_username='monitor';\nQuery OK, 1 row affected (0.000 sec)\n \nMySQL [(none)]> set mysql-monitor_password='P@ssword1!';\nQuery OK, 1 row affected (0.000 sec)\n \n\u4FEE\u6539\u540E\uFF0C\u52A0\u8F7D\u5230RUNTIME\uFF0C\u5E76\u4FDD\u5B58\u5230disk\nMySQL [(none)]> load mysql variables to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n \nMySQL [(none)]> save mysql variables to disk;\nQuery OK, 94 rows affected (0.079 sec)\n \n\u9A8C\u8BC1\u76D1\u63A7\u7ED3\u679C\uFF1AProxySQL\u76D1\u63A7\u6A21\u5757\u7684\u6307\u6807\u90FD\u4FDD\u5B58\u5728monitor\u5E93\u7684log\u8868\u4E2D\u3002\n\u4EE5\u4E0B\u662F\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\u7684\u76D1\u63A7(\u5BF9connect\u6307\u6807\u7684\u76D1\u63A7)\uFF1A\n\u6CE8\u610F\uFF1A\u53EF\u80FD\u4F1A\u6709\u5F88\u591Aconnect_error\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6CA1\u6709\u914D\u7F6E\u76D1\u63A7\u4FE1\u606F\u65F6\u7684\u9519\u8BEF\uFF0C\u914D\u7F6E\u540E\u5982\u679Cconnect_error\u7684\u7ED3\u679C\u4E3ANULL\u5219\u8868\u793A\u6B63\u5E38\u3002\nMySQL [(none)]> select * from mysql_server_connect_log;\n+---------------+------+------------------+-------------------------+---------------+\n| hostname      | port | time_start_us    | connect_success_time_us | connect_error |\n+---------------+------+------------------+-------------------------+---------------+\n| 192.168.9.211 | 9030 | 1548665195883957 | 762                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665195894099 | 399                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665195904266 | 483                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665255883715 | 824                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665255893942 | 656                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665495884125 | 615                     | NULL          |\n| 192.168.9.212 | 9030  | 1548665495894254 | 441                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665495904479 | 638                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665512917846 | 487                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665512928071 | 994                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665512938268 | 613                     | NULL          |\n+---------------+------+------------------+-------------------------+---------------+\n20 rows in set (0.000 sec)\n\u4EE5\u4E0B\u662F\u5BF9\u5FC3\u8DF3\u4FE1\u606F\u7684\u76D1\u63A7(\u5BF9ping\u6307\u6807\u7684\u76D1\u63A7)\nMySQL [(none)]> select * from mysql_server_ping_log;\n+---------------+------+------------------+----------------------+------------+\n| hostname      | port | time_start_us    | ping_success_time_us | ping_error |\n+---------------+------+------------------+----------------------+------------+\n| 192.168.9.211 | 9030 | 1548665195883407 | 98                   | NULL       |\n| 192.168.9.212 | 9030 | 1548665195885128 | 119                  | NULL       |\n...........\n| 192.168.9.213 | 9030 | 1548665415889362 | 106                  | NULL       |\n| 192.168.9.213 | 9030 | 1548665562898295 | 97                   | NULL       |\n+---------------+------+------------------+----------------------+------------+\n110 rows in set (0.001 sec)\n \nread_only\u65E5\u5FD7\u6B64\u65F6\u4E5F\u4E3A\u7A7A(\u6B63\u5E38\u6765\u8BF4\uFF0C\u65B0\u73AF\u5883\u914D\u7F6E\u65F6\uFF0C\u8FD9\u4E2A\u53EA\u8BFB\u65E5\u5FD7\u662F\u4E3A\u7A7A\u7684)\nMySQL [(none)]> select * from mysql_server_read_only_log;\nEmpty set (0.000 sec)\n\n3\u4E2A\u8282\u70B9\u90FD\u5728hostgroup_id=10\u7684\u7EC4\u4E2D\u3002\n\u73B0\u5728\uFF0C\u5C06\u521A\u624Dmysql_replication_hostgroups\u8868\u7684\u4FEE\u6539\u52A0\u8F7D\u5230RUNTIME\u751F\u6548\u3002\nMySQL [(none)]> load mysql servers to runtime;\nQuery OK, 0 rows affected (0.003 sec)\n \nMySQL [(none)]> save mysql servers to disk;\nQuery OK, 0 rows affected (0.361 sec)\n\n\u73B0\u5728\u770B\u7ED3\u679C\nMySQL [(none)]> select hostgroup_id,hostname,port,status,weight from mysql_servers;\n+--------------+---------------+------+--------+--------+\n| hostgroup_id | hostname      | port | status | weight |\n+--------------+---------------+------+--------+--------+\n| 10           | 192.168.9.211 | 9030 | ONLINE | 1      |\n| 20           | 192.168.9.212 | 9030 | ONLINE | 1      |\n| 20           | 192.168.9.213 | 9030 | ONLINE | 1      |\n+--------------+---------------+------+--------+--------+\n3 rows in set (0.000 sec)\n"})}),"\n",(0,o.jsx)(e.h4,{id:"\u914D\u7F6Edoris\u7528\u6237",children:"\u914D\u7F6EDoris\u7528\u6237"}),"\n",(0,o.jsx)(e.p,{children:"\u4E0A\u9762\u7684\u6240\u6709\u914D\u7F6E\u90FD\u662F\u5173\u4E8E\u540E\u7AEF Doris FE \u8282\u70B9\u7684\uFF0C\u73B0\u5728\u53EF\u4EE5\u914D\u7F6E\u5173\u4E8E SQL \u8BED\u53E5\u7684\uFF0C\u5305\u62EC\uFF1A\u53D1\u9001 SQL \u8BED\u53E5\u7684\u7528\u6237\u3001SQL \u8BED\u53E5\u7684\u8DEF\u7531\u89C4\u5219\u3001SQL \u67E5\u8BE2\u7684\u7F13\u5B58\u3001SQL \u8BED\u53E5\u7684\u91CD\u5199\u7B49\u7B49\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u672C\u5C0F\u8282\u662F SQL \u8BF7\u6C42\u6240\u4F7F\u7528\u7684\u7528\u6237\u914D\u7F6E\uFF0C\u4F8B\u5982 root \u7528\u6237\u3002\u8FD9\u8981\u6C42\u6211\u4EEC\u9700\u8981\u5148\u5728\u540E\u7AEF Doris FE \u8282\u70B9\u6DFB\u52A0\u597D\u76F8\u5173\u7528\u6237\u3002\u8FD9\u91CC\u4EE5 root \u548C doris \u4E24\u4E2A\u7528\u6237\u540D\u4E3A\u4F8B."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"\u9996\u5148\uFF0C\u5728Doris FE master\u4E3B\u6570\u636E\u5E93\u8282\u70B9\u4E0A\u6267\u884C\uFF1A\n# mysql -P9030 -uroot -p\n.........\nmysql> create user doris@'%' identified by 'P@ssword1!';\nQuery OK, 0 rows affected, 1 warning (0.04 sec)\n \nmysql> grant ADMIN_PRIV on *.* to doris@'%';\nQuery OK, 0 rows affected, 1 warning (0.03 sec)\n \n \n\u7136\u540E\u56DE\u5230mysql-proxy\u4EE3\u7406\u5C42\u8282\u70B9\uFF0C\u914D\u7F6Emysql_users\u8868\uFF0C\u5C06\u521A\u624D\u7684\u4E24\u4E2A\u7528\u6237\u6DFB\u52A0\u5230\u8BE5\u8868\u4E2D\u3002\nadmin> insert into mysql_users(username,password,default_hostgroup) values('root','',10);\nQuery OK, 1 row affected (0.001 sec)\n  \nadmin> insert into mysql_users(username,password,default_hostgroup) values('doris','P@ssword1!',10);\nQuery OK, 1 row affected (0.000 sec)\n\n\u52A0\u8F7D\u7528\u6237\u5230\u8FD0\u884C\u73AF\u5883\u4E2D\uFF0C\u5E76\u5C06\u7528\u6237\u4FE1\u606F\u4FDD\u5B58\u5230\u78C1\u76D8\nadmin> load mysql users to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n  \nadmin> save mysql users to disk;\nQuery OK, 0 rows affected (0.108 sec)\n  \nmysql_users\u8868\u6709\u4E0D\u5C11\u5B57\u6BB5\uFF0C\u6700\u4E3B\u8981\u7684\u4E09\u4E2A\u5B57\u6BB5\u4E3Ausername\u3001password\u548Cdefault_hostgroup\uFF1A\n-  username\uFF1A\u524D\u7AEF\u8FDE\u63A5ProxySQL\uFF0C\u4EE5\u53CAProxySQL\u5C06SQL\u8BED\u53E5\u8DEF\u7531\u7ED9MySQL\u6240\u4F7F\u7528\u7684\u7528\u6237\u540D\u3002\n-  password\uFF1A\u7528\u6237\u540D\u5BF9\u5E94\u7684\u5BC6\u7801\u3002\u53EF\u4EE5\u662F\u660E\u6587\u5BC6\u7801\uFF0C\u4E5F\u53EF\u4EE5\u662Fhash\u5BC6\u7801\u3002\u5982\u679C\u60F3\u4F7F\u7528hash\u5BC6\u7801\uFF0C\u53EF\u4EE5\u5148\u5728\u67D0\u4E2AMySQL\u8282\u70B9\u4E0A\u6267\u884C\n   select password(PASSWORD)\uFF0C\u7136\u540E\u5C06\u52A0\u5BC6\u7ED3\u679C\u590D\u5236\u5230\u8BE5\u5B57\u6BB5\u3002\n-  default_hostgroup\uFF1A\u8BE5\u7528\u6237\u540D\u9ED8\u8BA4\u7684\u8DEF\u7531\u76EE\u6807\u3002\u4F8B\u5982\uFF0C\u6307\u5B9Aroot\u7528\u6237\u7684\u8BE5\u5B57\u6BB5\u503C\u4E3A10\u65F6\uFF0C\u5219\u4F7F\u7528root\u7528\u6237\u53D1\u9001\u7684SQL\u8BED\u53E5\u9ED8\u8BA4\n   \u60C5\u51B5\u4E0B\u5C06\u8DEF\u7531\u5230hostgroup_id=10\u7EC4\u4E2D\u7684\u67D0\u4E2A\u8282\u70B9\u3002\n \nadmin> select * from mysql_users\\G\n*************************** 1. row ***************************\n              username: root\n              password: \n                active: 1\n               use_ssl: 0\n     default_hostgroup: 10\n        default_schema: NULL\n         schema_locked: 0\ntransaction_persistent: 1\n          fast_forward: 0\n               backend: 1\n              frontend: 1\n       max_connections: 10000\n*************************** 2. row ***************************\n              username: doris\n              password: P@ssword1!\n                active: 1\n               use_ssl: 0\n     default_hostgroup: 10\n        default_schema: NULL\n         schema_locked: 0\ntransaction_persistent: 1\n          fast_forward: 0\n               backend: 1\n              frontend: 1\n       max_connections: 10000\n2 rows in set (0.000 sec)\n  \n\u867D\u7136\u8FD9\u91CC\u6CA1\u6709\u8BE6\u7EC6\u4ECB\u7ECDmysql_users\u8868\uFF0C\u4F46\u53EA\u6709active=1\u7684\u7528\u6237\u624D\u662F\u6709\u6548\u7684\u7528\u6237\u3002\n\nMySQL [(none)]> load mysql users to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n \nMySQL [(none)]> save mysql users to disk;\nQuery OK, 0 rows affected (0.123 sec)\n\n\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7sql\u5BA2\u6237\u7AEF\uFF0C\u4F7F\u7528doris\u7684\u7528\u6237\u540D\u5BC6\u7801\u53BB\u8FDE\u63A5\u4E86ProxySQL\u4E86\n"})}),"\n",(0,o.jsx)(e.h4,{id:"\u901A\u8FC7-proxysql-\u8FDE\u63A5-doris-\u8FDB\u884C\u6D4B\u8BD5",children:"\u901A\u8FC7 ProxySQL \u8FDE\u63A5 Doris \u8FDB\u884C\u6D4B\u8BD5"}),"\n",(0,o.jsx)(e.p,{children:"\u4E0B\u9762\uFF0C\u5206\u522B\u4F7F\u7528 root \u7528\u6237\u548C doris \u7528\u6237\u6D4B\u8BD5\u4E0B\u5B83\u4EEC\u662F\u5426\u80FD\u8DEF\u7531\u5230\u9ED8\u8BA4\u7684 hostgroup_id=10 (\u5B83\u662F\u4E00\u4E2A\u5199\u7EC4)\u8BFB\u6570\u636E\u3002\u4E0B\u9762\u662F\u901A\u8FC7\u8F6C\u53D1\u7AEF\u53E3 6033 \u8FDE\u63A5\u7684\uFF0C\u8FDE\u63A5\u7684\u662F\u8F6C\u53D1\u5230\u540E\u7AEF\u771F\u6B63\u7684\u6570\u636E\u5E93!"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"#mysql -uroot -p -P6033 -hdoris01 -e \"show databases;\"\nEnter password: \nERROR 9001 (HY000) at line 1: Max connect timeout reached while reaching hostgroup 10 after 10000ms\n\u8FD9\u4E2A\u65F6\u5019\u53D1\u73B0\u51FA\u9519\uFF0C\u5E76\u6CA1\u6709\u8F6C\u53D1\u5230\u540E\u7AEF\u771F\u6B63\u7684doris fe\u4E0A\n\u901A\u8FC7\u65E5\u5FD7\u770B\u5230\u6709set autocommit=0 \u8FD9\u6837\u5F00\u542F\u4E8B\u52A1\n\u68C0\u67E5\u914D\u7F6E\u53D1\u73B0\uFF1A\nmysql-forward_autocommit=false\nmysql-autocommit_false_is_transaction=false\n\u6211\u4EEC\u8FD9\u91CC\u4E0D\u9700\u8981\u8BFB\u5199\u5206\u79BB\uFF0C\u53EA\u9700\u8981\u5C06\u8FD9\u4E24\u4E2A\u53C2\u6570\u901A\u8FC7\u4E0B\u9762\u8BED\u53E5\u76F4\u63A5\u641E\u6210true\u5C31\u53EF\u4EE5\u4E86\nmysql> UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-forward_autocommit';\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-autocommit_false_is_transaction';\nQuery OK, 1 row affected (0.01 sec)\n\nmysql>  LOAD MYSQL VARIABLES TO RUNTIME;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SAVE MYSQL VARIABLES TO DISK;\nQuery OK, 98 rows affected (0.12 sec)\n\n\u7136\u540E\u6211\u4EEC\u5728\u91CD\u65B0\u8BD5\u4E00\u4E0B\uFF0C\u663E\u793A\u6210\u529F\n[root@doris01 ~]# mysql -udoris -pP@ssword1! -P6033 -h192.168.9.211  -e \"show databases;\"\nWarning: Using a password on the command line interface can be insecure.\n+--------------------+\n| Database           |\n+--------------------+\n| doris_audit_db     |\n| information_schema |\n| retail             |\n+--------------------+\n"})}),"\n",(0,o.jsx)(e.p,{children:"OK\uFF0C\u5230\u6B64\u5C31\u7ED3\u675F\u4E86\uFF0C\u4F60\u5C31\u53EF\u4EE5\u7528 Mysql \u5BA2\u6237\u7AEF\uFF0CJDBC \u7B49\u4EFB\u4F55\u8FDE\u63A5 mysql \u7684\u65B9\u5F0F\u8FDE\u63A5 ProxySQL \u53BB\u64CD\u4F5C\u4F60\u7684 doris \u4E86"}),"\n",(0,o.jsx)(e.h2,{id:"nginx-tcp\u53CD\u5411\u4EE3\u7406\u65B9\u5F0F",children:"Nginx TCP\u53CD\u5411\u4EE3\u7406\u65B9\u5F0F"}),"\n",(0,o.jsx)(e.h3,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,o.jsx)(e.p,{children:"Nginx\u80FD\u591F\u5B9E\u73B0HTTP\u3001HTTPS\u534F\u8BAE\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u4E5F\u80FD\u591F\u5B9E\u73B0TCP\u534F\u8BAE\u7684\u8D1F\u8F7D\u5747\u8861\u3002\u90A3\u4E48\uFF0C\u95EE\u9898\u6765\u4E86\uFF0C\u53EF\u4E0D\u53EF\u4EE5\u901A\u8FC7Nginx\u5B9E\u73B0Apache Doris\u6570\u636E\u5E93\u7684\u8D1F\u8F7D\u5747\u8861\u5462\uFF1F\u7B54\u6848\u662F\uFF1A\u53EF\u4EE5\u3002\u63A5\u4E0B\u6765\uFF0C\u5C31\u8BA9\u6211\u4EEC\u4E00\u8D77\u63A2\u8BA8\u4E0B\u5982\u4F55\u4F7F\u7528Nginx\u5B9E\u73B0Apache Doris\u7684\u8D1F\u8F7D\u5747\u8861\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u73AF\u5883\u51C6\u5907",children:"\u73AF\u5883\u51C6\u5907"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u6CE8\u610F\uFF1A\u4F7F\u7528Nginx\u5B9E\u73B0Apache Doris\u6570\u636E\u5E93\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u524D\u63D0\u662F\u8981\u642D\u5EFAApache Doris\u7684\u73AF\u5883\uFF0CApache Doris FE\u7684IP\u548C\u7AEF\u53E3\u5206\u522B\u5982\u4E0B\u6240\u793A, \u8FD9\u91CC\u6211\u662F\u7528\u4E00\u4E2AFE\u6765\u505A\u6F14\u793A\u7684\uFF0C\u591A\u4E2AFE\u53EA\u9700\u8981\u5728\u914D\u7F6E\u91CC\u6DFB\u52A0\u591A\u4E2AFE\u7684IP\u5730\u5740\u548C\u7AEF\u53E3\u5373\u53EF"})}),"\n",(0,o.jsx)(e.p,{children:"\u901A\u8FC7Nginx\u8BBF\u95EEMySQL\u7684Apache Doris\u548C\u7AEF\u53E3\u5982\u4E0B\u6240\u793A\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"IP: 172.31.7.119 \n\u7AEF\u53E3: 9030\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u5B89\u88C5\u4F9D\u8D56",children:"\u5B89\u88C5\u4F9D\u8D56"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"sudo apt-get install build-essential\nsudo apt-get install libpcre3 libpcre3-dev \nsudo apt-get install zlib1g-dev\nsudo apt-get install openssl libssl-dev\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u5B89\u88C5nginx",children:"\u5B89\u88C5Nginx"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"sudo wget http://nginx.org/download/nginx-1.18.0.tar.gz\nsudo tar zxvf nginx-1.18.0.tar.gz\ncd nginx-1.18.0\nsudo ./configure --prefix=/usr/local/nginx --with-stream --with-http_ssl_module --with-http_gzip_static_module --with-http_stub_status_module\nsudo make && make install\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u914D\u7F6E\u53CD\u5411\u4EE3\u7406",children:"\u914D\u7F6E\u53CD\u5411\u4EE3\u7406"}),"\n",(0,o.jsx)(e.p,{children:"\u8FD9\u91CC\u662F\u65B0\u5EFA\u4E86\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"vim /usr/local/nginx/conf/default.conf\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u7136\u540E\u5728\u91CC\u9762\u52A0\u4E0A\u4E0B\u9762\u7684\u5185\u5BB9"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"events {\nworker_connections 1024;\n}\nstream {\n  upstream mysqld {\n      hash $remote_addr consistent;\n      server 172.31.7.119:9030 weight=1 max_fails=2 fail_timeout=60s;\n      ##\u6CE8\u610F\u8FD9\u91CC\u5982\u679C\u662F\u591A\u4E2AFE\uFF0C\u52A0\u8F7D\u8FD9\u91CC\u5C31\u884C\u4E86\n  }\n  ###\u8FD9\u91CC\u662F\u914D\u7F6E\u4EE3\u7406\u7684\u7AEF\u53E3\uFF0C\u8D85\u65F6\u65F6\u95F4\u7B49\n  server {\n      listen 6030;\n      proxy_connect_timeout 300s;\n      proxy_timeout 300s;\n      proxy_pass mysqld;\n  }\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u542F\u52A8nginx",children:"\u542F\u52A8Nginx"}),"\n",(0,o.jsx)(e.p,{children:"\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u542F\u52A8"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"cd /usr/local/nginx\n/usr/local/nginx/sbin/nginx -c conf.d/default.conf\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u9A8C\u8BC1",children:"\u9A8C\u8BC1"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"mysql -uroot -P6030 -h172.31.7.119\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u53C2\u6570\u89E3\u91CA:-u   \u6307\u5B9ADoris\u7528\u6237\u540D-p   \u6307\u5B9ADoris\u5BC6\u7801,\u6211\u8FD9\u91CC\u5BC6\u7801\u662F\u7A7A\uFF0C\u6240\u4EE5\u6CA1\u6709-h   \u6307\u5B9ANginx\u4EE3\u7406\u670D\u52A1\u5668IP-P   \u6307\u5B9A\u7AEF\u53E3"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"mysql -uroot -P6030 -h172.31.7.119\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 13\nServer version: 5.1.0 Doris version 0.15.1-rc09-Unknown\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| test               |\n+--------------------+\n2 rows in set (0.00 sec)\n\nmysql> use test;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+------------------+\n| Tables_in_test   |\n+------------------+\n| dwd_product_live |\n+------------------+\n1 row in set (0.00 sec)\nmysql> desc dwd_product_live;\n+-----------------+---------------+------+-------+---------+---------+\n| Field           | Type          | Null | Key   | Default | Extra   |\n+-----------------+---------------+------+-------+---------+---------+\n| dt              | DATE          | Yes  | true  | NULL    |         |\n| proId           | BIGINT        | Yes  | true  | NULL    |         |\n| authorId        | BIGINT        | Yes  | true  | NULL    |         |\n| roomId          | BIGINT        | Yes  | true  | NULL    |         |\n| proTitle        | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| proLogo         | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| shopId          | BIGINT        | Yes  | false | NULL    | REPLACE |\n| shopTitle       | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| profrom         | INT           | Yes  | false | NULL    | REPLACE |\n| proCategory     | BIGINT        | Yes  | false | NULL    | REPLACE |\n| proPrice        | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| couponPrice     | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| livePrice       | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| volume          | BIGINT        | Yes  | false | NULL    | REPLACE |\n| addedTime       | BIGINT        | Yes  | false | NULL    | REPLACE |\n| offTimeUnix     | BIGINT        | Yes  | false | NULL    | REPLACE |\n| offTime         | BIGINT        | Yes  | false | NULL    | REPLACE |\n| createTime      | BIGINT        | Yes  | false | NULL    | REPLACE |\n| createTimeUnix  | BIGINT        | Yes  | false | NULL    | REPLACE |\n| amount          | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| views           | BIGINT        | Yes  | false | NULL    | REPLACE |\n| commissionPrice | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| proCostPrice    | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| proCode         | VARCHAR(1024) | Yes  | false | NULL    | REPLACE |\n| proStatus       | INT           | Yes  | false | NULL    | REPLACE |\n| status          | INT           | Yes  | false | NULL    | REPLACE |\n| maxPrice        | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| liveView        | BIGINT        | Yes  | false | NULL    | REPLACE |\n| firstCategory   | BIGINT        | Yes  | false | NULL    | REPLACE |\n| secondCategory  | BIGINT        | Yes  | false | NULL    | REPLACE |\n| thirdCategory   | BIGINT        | Yes  | false | NULL    | REPLACE |\n| fourCategory    | BIGINT        | Yes  | false | NULL    | REPLACE |\n| minPrice        | DECIMAL(18,2) | Yes  | false | NULL    | REPLACE |\n| liveVolume      | BIGINT        | Yes  | false | NULL    | REPLACE |\n| liveClick       | BIGINT        | Yes  | false | NULL    | REPLACE |\n| extensionId     | VARCHAR(128)  | Yes  | false | NULL    | REPLACE |\n| beginTime       | BIGINT        | Yes  | false | NULL    | REPLACE |\n| roomTitle       | TEXT          | Yes  | false | NULL    | REPLACE |\n| beginTimeUnix   | BIGINT        | Yes  | false | NULL    | REPLACE |\n| nickname        | TEXT          | Yes  | false | NULL    | REPLACE |\n+-----------------+---------------+------+-------+---------+---------+\n40 rows in set (0.06 sec)\n"})})]})}function m(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return l}});var r=s(667294);let o={},t=r.createContext(o);function l(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);