"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["537386"],{149691:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"developer-guide/be-vscode-dev","title":"Doris BE\u5F00\u53D1\u8C03\u8BD5\u73AF\u5883 -- vscode","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/be-vscode-dev.md","sourceDirName":"developer-guide","slug":"/developer-guide/be-vscode-dev","permalink":"/zh-CN/community/developer-guide/be-vscode-dev","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Doris BE\u5F00\u53D1\u8C03\u8BD5\u73AF\u5883 -- vscode","language":"zh-CN"},"sidebar":"community","previous":{"title":"FE \u5F00\u53D1\u73AF\u5883\u642D\u5EFA - Visual Studio Code (VSCode)","permalink":"/zh-CN/community/developer-guide/fe-vscode-dev"},"next":{"title":"Doris BE \u5F00\u53D1\u8C03\u8BD5\u73AF\u5883 -- clion","permalink":"/zh-CN/community/developer-guide/be-clion-dev"}}'),i=r("785893"),o=r("250065");let d={title:"Doris BE\u5F00\u53D1\u8C03\u8BD5\u73AF\u5883 -- vscode",language:"zh-CN"},t="Apache Doris Be \u5F00\u53D1\u8C03\u8BD5",l={},c=[{value:"\u524D\u671F\u51C6\u5907\u5DE5\u4F5C",id:"\u524D\u671F\u51C6\u5907\u5DE5\u4F5C",level:2},{value:"\u7F16\u8BD1",id:"\u7F16\u8BD1",level:2},{value:"\u90E8\u7F72\u8C03\u8BD5(GDB)",id:"\u90E8\u7F72\u8C03\u8BD5gdb",level:2},{value:"\u8C03\u8BD5(LLDB)",id:"\u8C03\u8BD5lldb",level:2},{value:"\u8C03\u8BD5core dump\u6587\u4EF6",id:"\u8C03\u8BD5core-dump\u6587\u4EF6",level:2},{value:"\u5E38\u7528\u8C03\u8BD5\u6280\u5DE7",id:"\u5E38\u7528\u8C03\u8BD5\u6280\u5DE7",level:2},{value:"\u51FD\u6570\u6267\u884C\u8DEF\u5F84",id:"\u51FD\u6570\u6267\u884C\u8DEF\u5F84",level:3},{value:"\u8C03\u8BD5CRTP\u5BF9\u8C61",id:"\u8C03\u8BD5crtp\u5BF9\u8C61",level:3}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"apache-doris-be-\u5F00\u53D1\u8C03\u8BD5",children:"Apache Doris Be \u5F00\u53D1\u8C03\u8BD5"})}),"\n",(0,i.jsx)(n.h2,{id:"\u524D\u671F\u51C6\u5907\u5DE5\u4F5C",children:"\u524D\u671F\u51C6\u5907\u5DE5\u4F5C"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u672C\u6559\u7A0B\u662F\u5728 Ubuntu 20.04 \u4E0B\u8FDB\u884C\u7684"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u6587\u4E2D\u7684\u51FA\u73B0\u7684 BE \u4E8C\u8FDB\u5236\u6587\u4EF6\u540D\u79F0 ",(0,i.jsx)(n.code,{children:"doris_be"}),"\uFF0C\u5728\u4E4B\u524D\u7684\u7248\u672C\u4E2D\u4E3A ",(0,i.jsx)(n.code,{children:"palo_be"}),"\u3002"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0B\u8F7D doris \u6E90\u4EE3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E0B\u8F7D\u5730\u5740\u4E3A\uFF1A",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris",children:"apache/doris: Apache Doris (github.com)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5B89\u88C5 GCC 8.3.1+\uFF0COracle JDK 1.8+\uFF0CPython 2.7+\uFF0C\u786E\u8BA4 gcc, java, python \u547D\u4EE4\u6307\u5411\u6B63\u786E\u7248\u672C, \u8BBE\u7F6E JAVA_HOME \u73AF\u5883\u53D8\u91CF"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5B89\u88C5\u5176\u4ED6\u4F9D\u8D56\u5305"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python brotli\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10\nsudo apt-get install autoconf automake libtool autopoint\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u5B89\u88C5 openssl libssl-dev"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt install -y openssl libssl-dev\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7F16\u8BD1",children:"\u7F16\u8BD1"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u64CD\u4F5C\u6B65\u9AA4\u5728 /home/workspace \u76EE\u5F55\u4E0B\u8FDB\u884C"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4E0B\u8F7D\u6E90\u7801"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u7F16\u8BD1\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5305"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" cd /home/workspace/doris/thirdparty\n ./build-thirdparty.sh\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u7F16\u8BD1 doris \u4EA7\u54C1\u4EE3\u7801"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /home/workspace/doris\n./build.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u8FD9\u4E2A\u7F16\u8BD1\u6709\u4EE5\u4E0B\u51E0\u6761\u6307\u4EE4\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./build.sh  #\u540C\u65F6\u7F16\u8BD1be \u548Cfe\n./build.sh  --be #\u53EA\u7F16\u8BD1be\n./build.sh  --fe #\u53EA\u7F16\u8BD1fe\n./build.sh  --fe --be#\u540C\u65F6\u7F16\u8BD1be fe\n./build.sh  --fe --be --clean#\u5220\u9664\u5E76\u540C\u65F6\u7F16\u8BD1be fe\n./build.sh  --fe  --clean#\u5220\u9664\u5E76\u7F16\u8BD1fe\n./build.sh  --be  --clean#\u5220\u9664\u5E76\u7F16\u8BD1be\n./build.sh  --be --fe  --clean#\u5220\u9664\u5E76\u540C\u65F6\u7F16\u8BD1be fe\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4E0D\u51FA\u610F\u5916\uFF0C\u5E94\u8BE5\u4F1A\u7F16\u8BD1\u6210\u529F\uFF0C\u6700\u7EC8\u7684\u90E8\u7F72\u6587\u4EF6\u5C06\u4EA7\u51FA\u5230 /home/workspace/doris/output/ \u76EE\u5F55\u4E0B\u3002\u5982\u679C\u8FD8\u9047\u5230\u5176\u4ED6\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u7167 doris \u7684\u5B89\u88C5\u6587\u6863 ",(0,i.jsx)(n.a,{href:"http://doris.apache.org%E3%80%82",children:"http://doris.apache.org\u3002"})]}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u5982\u679C\u7F16\u8BD1fe\u65F6\u5E0C\u671B\u5355\u72EC\u6307\u5B9A\u79C1\u6709\u7684maven\u4ED3\u5730\u5740\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CFUSER_SETTINGS_MVN_REPO\u6307\u5B9Asettings.xml\u7684\u6587\u4EF6\u8DEF\u5F84\u3002\n\u4E3E\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  export USER_SETTINGS_MVN_REPO="/xxx/xxx/settings.xml"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u90E8\u7F72\u8C03\u8BD5gdb",children:"\u90E8\u7F72\u8C03\u8BD5(GDB)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ED9 be \u7F16\u8BD1\u7ED3\u679C\u6587\u4EF6\u6388\u6743"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"chmod  /home/workspace/doris/output/be/lib/doris_be\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A /home/workspace/doris/output/be/lib/doris_be \u4E3A be \u7684\u6267\u884C\u6587\u4EF6\u3002"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u521B\u5EFA\u6570\u636E\u5B58\u653E\u76EE\u5F55"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u67E5\u770B/home/workspace/doris/output/be/conf/be.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# INFO, WARNING, ERROR, FATAL\nsys_log_level = INFO\nbe_port = 9060\nbe_rpc_port = 9070\nwebserver_port = 8040\nheartbeat_service_port = 9050\nbrpc_port = 8060\narrow_flight_sql_port = -1\n\n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/\n# Default value is empty.\npriority_networks = 192.168.59.0/24 # data root path, separate by ';'\nstorage_root_path = /soft/be/storage\n# sys_log_dir = ${PALO_HOME}/log\n# sys_log_roll_mode = SIZE-MB-\n# sys_log_roll_num =\n# sys_log_verbose_modules =\n# log_buffer_level = -\n# palo_cgroups\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u8FD9\u662F be \u6570\u636E\u5B58\u653E\u7684\u5730\u65B9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir -p /soft/be/storage\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6253\u5F00 vscode\uFF0C\u5E76\u6253\u5F00 be \u6E90\u7801\u6240\u5728\u76EE\u5F55\uFF0C\u5728\u672C\u6848\u4F8B\u4E2D\u6253\u5F00\u76EE\u5F55\u4E3A ",(0,i.jsx)(n.strong,{children:"/home/workspace/doris/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5B89\u88C5 vscode ms c++ \u8C03\u8BD5\u63D2\u4EF6"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(105388).Z+"",width:"1440",height:"744"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"\u521B\u5EFA launch.json \u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/doris/",\n            "environment": [{"name":"PALO_HOME","value":"/home/workspace/doris/output/be/"},\n                            {"name":"UDF_RUNTIME_DIR","value":"/home/workspace/doris/output/be/lib/udf-runtime"},\n                            {"name":"LOG_DIR","value":"/home/workspace/doris/output/be/log"},\n                            {"name":"PID_DIR","value":"/home/workspace/doris/output/be/bin"}\n                           ],\n            "externalConsole": true,\n            "MIMode": "gdb",\n            "miDebuggerPath": "/path/to/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4E2D\uFF0Cenvironment \u5B9A\u4E49\u4E86\u51E0\u4E2A\u73AF\u5883\u53D8\u91CF DORIS_HOME UDF_RUNTIME_DIR LOG_DIR PID_DIR\uFF0C\u8FD9\u662F doris_be \u8FD0\u884C\u65F6\u9700\u8981\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u542F\u52A8\u4F1A\u5931\u8D25\u3002"}),"\n",(0,i.jsx)(n.p,{children:"miDebuggerPath \u6307\u5B9A\u4E86\u8C03\u8BD5\u5668\u7684\u8DEF\u5F84\uFF08\u5982gdb\uFF09\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A miDebuggerPath \uFF0C\u5B83\u5C06\u5728\u64CD\u4F5C\u7CFB\u7EDF\u7684 PATH \u53D8\u91CF\u4E2D\u641C\u7D22\u8C03\u8BD5\u5668\u3002\u7CFB\u7EDF\u81EA\u5E26\u7684 gdb \u7248\u672C\u6709\u53EF\u80FD\u8FC7\u4F4E\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u624B\u52A8\u53BB\u6307\u5B9A\u65B0\u7248\u672C\u7684 gdb \u8DEF\u5F84\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A\u5982\u679C\u5E0C\u671B\u662F attach(\u9644\u52A0\u8FDB\u7A0B\uFF09\u8C03\u8BD5\uFF0C\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "version": "0.2.0",\n    "configurations": [\n      	{\n          "name": "(gdb) Launch",\n          "type": "cppdbg",\n          "request": "attach",\n          "program": "/home/workspace/doris/output/lib/doris_be",\n          "processId":,\n          "MIMode": "gdb",\n          "miDebuggerPath": "/path/to/gdb",\n          "internalConsoleOptions":"openOnSessionStart",\n          "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u914D\u7F6E\u4E2D ",(0,i.jsx)(n.strong,{children:'"request": "attach"\uFF0C "processId":PID'}),"\uFF0C\u8FD9\u4E24\u4E2A\u914D\u7F6E\u662F\u91CD\u70B9\uFF1A \u5206\u522B\u8BBE\u7F6E gdb \u7684\u8C03\u8BD5\u6A21\u5F0F\u4E3A attach\uFF0C\u9644\u52A0\u8FDB\u7A0B\u7684 processId\uFF0C\u5426\u5219\u4F1A\u5931\u8D25\u3002\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u76F4\u63A5\u63D0\u53D6\u8FDB\u7A0BID\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'lsof -i | grep -m 1 doris_be | awk "{print $2}"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6216\u8005\u5199\u4F5C ",(0,i.jsx)(n.strong,{children:'"processId": "${command:pickProcess}"'}),"\uFF0C\u53EF\u5728\u542F\u52A8attach\u65F6\u6307\u5B9Apid."]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u56FE\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(493495).Z+"",width:"1188",height:"65"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4E2D\u7684 15200 \u5373\u4E3A\u5F53\u524D\u8FD0\u884C\u7684 be \u7684\u8FDB\u7A0B id."}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u4E2A\u5B8C\u6574\u7684 launch.json \u7684\u4F8B\u5B50\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:' {\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Attach",\n            "type": "cppdbg",\n            "request": "attach",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "processId": 17016,\n            "MIMode": "gdb",\n            "miDebuggerPath": "/path/to/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        },\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/doris/output/be",\n            "environment": [\n                {\n                    "name": "DORIS_HOME",\n                    "value": "/home/workspace/doris/output/be"\n                },\n                {\n                    "name": "UDF_RUNTIME_DIR",\n                    "value": "/home/workspace/doris/output/be/lib/udf-runtime"\n                },\n                {\n                    "name": "LOG_DIR",\n                    "value": "/home/workspace/doris/output/be/log"\n                },\n                {\n                    "name": "PID_DIR",\n                    "value": "/home/workspace/doris/output/be/bin"\n                }\n            ],\n            "externalConsole": false,\n            "MIMode": "gdb",\n            "miDebuggerPath": "/path/to/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u70B9\u51FB\u8C03\u8BD5\u5373\u53EF"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u5C31\u53EF\u4EE5\u5F00\u59CB\u4F60\u7684 Doris DEBUG \u4E4B\u65C5\u4E86"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(843430).Z+"",width:"1718",height:"888"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8C03\u8BD5lldb",children:"\u8C03\u8BD5(LLDB)"}),"\n",(0,i.jsxs)(n.p,{children:["lldb\u7684attach\u6BD4gdb\u66F4\u5FEB\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548Cgdb\u7C7B\u4F3C\u3002vscode\u9700\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\u6539\u4E3A",(0,i.jsx)(n.code,{children:"CodeLLDB"}),"\uFF0C\u7136\u540E\u5728launch\u4E2D\u52A0\u5165\u5982\u4E0B\u914D\u7F6E:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "name": "CodeLLDB attach",\n    "type": "lldb",\n    "request": "attach",\n    "program": "${workspaceFolder}/output/be/lib/doris_be",\n    "pid":"${command:pickMyProcess}"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65B9\u5F0F\u8981\u6C42\u7CFB\u7EDF",(0,i.jsx)(n.code,{children:"glibc"}),"\u7248\u672C\u4E3A",(0,i.jsx)(n.code,{children:"2.18+"}),"\u3002\u5982\u679C\u6CA1\u6709\u5219\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"https://gist.github.com/JaySon-Huang/63dcc6c011feb5bd6deb1ef0cf1a9b96",children:"\u5982\u4F55\u4F7FCodeLLDB\u5728CentOS7\u4E0B\u5DE5\u4F5C"})," \u5B89\u88C5\u9AD8\u7248\u672Cglibc\u5E76\u5C06\u5176\u94FE\u63A5\u5230\u63D2\u4EF6\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8C03\u8BD5core-dump\u6587\u4EF6",children:"\u8C03\u8BD5core dump\u6587\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u65F6\u6211\u4EEC\u9700\u8981\u8C03\u8BD5\u7A0B\u5E8F\u5D29\u6E83\u4EA7\u751F\u7684core\u6587\u4EF6\uFF0C\u8FD9\u540C\u6837\u53EF\u4EE5\u5728vscode\u4E2D\u5B8C\u6210\uFF0C\u6B64\u65F6\u53EA\u9700\u8981\u5728\u5BF9\u5E94\u7684configuration\u9879\u4E2D\u6DFB\u52A0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    "coreDumpPath": "/PATH/TO/CORE/DUMP/FILE"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5373\u53EF\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5E38\u7528\u8C03\u8BD5\u6280\u5DE7",children:"\u5E38\u7528\u8C03\u8BD5\u6280\u5DE7"}),"\n",(0,i.jsx)(n.h3,{id:"\u51FD\u6570\u6267\u884C\u8DEF\u5F84",children:"\u51FD\u6570\u6267\u884C\u8DEF\u5F84"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u5BF9BE\u7684\u6267\u884C\u7EC6\u8282\u4E0D\u719F\u6089\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,i.jsx)(n.code,{children:"perf"}),"\u7B49\u76F8\u5173\u5DE5\u5177\u8FFD\u8E2A\u51FD\u6570\u8C03\u7528\uFF0C\u627E\u51FA\u8C03\u7528\u94FE\u3002",(0,i.jsx)(n.code,{children:"perf"}),"\u7684\u4F7F\u7528\u53EF\u4EE5\u5728",(0,i.jsx)(n.a,{href:"/zh-CN/community/developer-guide/debug-tool",children:"\u8C03\u8BD5\u5DE5\u5177"}),"\u4E2D\u627E\u5230\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u5728\u8F83\u5927\u7684\u8868\u4E0A\u6267\u884C\u9700\u8981\u8FFD\u8E2A\u7684sql\u8BED\u53E5\uFF0C\u7136\u540E\u589E\u5927\u91C7\u6837\u9891\u7387\uFF08\u4F8B\u5982\uFF0C",(0,i.jsx)(n.code,{children:"perf -F 999"}),"\uFF09\u3002\u89C2\u5BDF\u7ED3\u679C\u53EF\u4EE5\u5927\u81F4\u5F97\u5230sql\u5728BE\u6267\u884C\u7684\u5173\u952E\u8DEF\u5F84\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8C03\u8BD5crtp\u5BF9\u8C61",children:"\u8C03\u8BD5CRTP\u5BF9\u8C61"}),"\n",(0,i.jsx)(n.p,{children:"BE\u4EE3\u7801\u4E3A\u4E86\u63D0\u9AD8\u8FD0\u884C\u6548\u7387\uFF0C\u5728\u57FA\u7840\u7C7B\u578B\u4E2D\u5927\u91CF\u91C7\u7528\u4E86CRTP\uFF08\u5947\u5F02\u9012\u5F52\u6A21\u677F\u6A21\u5F0F\uFF09\uFF0C\u5BFC\u81F4debugger\u65E0\u6CD5\u6309\u7167\u6D3E\u751F\u7C7B\u578B\u8C03\u8BD5\u5BF9\u8C61\u3002\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528GDB\u8FD9\u6837\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u8C03\u8BD5",(0,i.jsx)(n.code,{children:"IColumn"}),"\u7C7B\u578B\u7684\u5BF9\u8C61",(0,i.jsx)(n.code,{children:"col"}),"\uFF0C\u4E0D\u77E5\u9053\u5B83\u7684\u5B9E\u9645\u7C7B\u578B\uFF0C\u90A3\u4E48\u53EF\u4EE5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"set print object on # \u6309\u7167\u6D3E\u751F\u7C7B\u578B\u8F93\u51FA\u5BF9\u8C61\np *col.t # \u6B64\u65F6\u4F7F\u7528col.t\u5373\u53EF\u5F97\u5230col\u7684\u5177\u4F53\u7C7B\u578B\np col.t->size() # \u53EF\u4EE5\u6309\u7167\u6D3E\u751F\u7C7B\u578B\u53BB\u4F7F\u7528\u5B83\uFF0C\u4F8B\u5982ColumnString\u6211\u4EEC\u53EF\u4EE5\u8C03\u7528size()\n......\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A\u5177\u6709\u591A\u6001\u6548\u679C\u7684\u662F\u6307\u9488",(0,i.jsx)(n.code,{children:"COW::t"}),"\u800C\u975E",(0,i.jsx)(n.code,{children:"IColumn"}),"\u7C7B\u5BF9\u8C61\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728GDB\u4E2D\u5C06\u6240\u6709\u5BF9",(0,i.jsx)(n.code,{children:"col"}),"\u7684\u4F7F\u7528\u66FF\u6362\u4E3A",(0,i.jsx)(n.code,{children:"col.t"}),"\u624D\u53EF\u4EE5\u771F\u6B63\u5F97\u5230\u6D3E\u751F\u7C7B\u578B\u5BF9\u8C61\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},843430:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/image-20210618091006146-fa06a2d90e786b2f5dbd43a762327b73.png"},493495:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/image-20210618095240216-9950478a7c5a4193588b1c3a8d9ccc3b.png"},105388:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/image-20210618104004956-e5b71cd0c11aed31267eb149b30d9e01.png"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var s=r(667294);let i={},o=s.createContext(i);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);