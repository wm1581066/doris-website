"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["137763"],{369143:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>a});var l=JSON.parse('{"id":"advanced/variables-template","title":"Variable","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/variables-template.md","sourceDirName":"advanced","slug":"/advanced/variables-template","permalink":"/docs/1.2/advanced/variables-template","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Variable","language":"en"}}'),s=i("785893"),t=i("250065");let a={title:"Variable",language:"en"},r="Variable",c={},o=[{value:"Variable setting and viewing",id:"variable-setting-and-viewing",level:2},{value:"View",id:"view",level:3},{value:"Settings",id:"settings",level:3},{value:"Set variables in the query statement",id:"set-variables-in-the-query-statement",level:3},{value:"Supported variables",id:"supported-variables",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"variable",children:"Variable"})}),"\n",(0,s.jsx)(n.p,{children:"This document focuses on currently supported variables."}),"\n",(0,s.jsx)(n.p,{children:"Variables in Doris refer to variable settings in MySQL. However, some of the variables are only used to be compatible with some MySQL client protocols, and do not produce their actual meaning in the MySQL database."}),"\n",(0,s.jsx)(n.h2,{id:"variable-setting-and-viewing",children:"Variable setting and viewing"}),"\n",(0,s.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,s.jsxs)(n.p,{children:["All or specified variables can be viewed via ",(0,s.jsx)(n.code,{children:"SHOW VARIABLES [LIKE 'xxx'];"}),". Such as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW VARIABLES;\nSHOW VARIABLES LIKE '%time_zone%';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.p,{children:"Note that before version 1.1, after the setting takes effect globally, the setting value will be inherited in subsequent new session connections, but the value in the current session will remain unchanged.\nAfter version 1.1 (inclusive), after the setting takes effect globally, the setting value will be used in subsequent new session connections, and the value in the current session will also change."}),"\n",(0,s.jsxs)(n.p,{children:["For session-only, set by the ",(0,s.jsx)(n.code,{children:"SET var_name=xxx;"})," statement. Such as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'SET exec_mem_limit = 137438953472;\nSET forward_to_master = true;\nSET time_zone = "Asia/Shanghai";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For global-level, set by ",(0,s.jsx)(n.code,{children:"SET GLOBAL var_name=xxx;"}),". Such as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SET GLOBAL exec_mem_limit = 137438953472\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note 1: Only ADMIN users can set variable at global-level."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Variables that support both session-level and global-level setting include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"time_zone"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"wait_timeout"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sql_mode"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"enable_profile"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"query_timeout"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"insert_timeout"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"exec_mem_limit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"batch_size"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"parallel_fragment_exec_instance_num"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"parallel_exchange_instance_num"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"allow_partition_column_nullable"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"insert_visible_timeout_ms"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"enable_fold_constant_by_be"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Variables that support only global-level setting include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default_rowset_type"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default_password_lifetime"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"password_history"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"validate_password_policy"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"At the same time, variable settings also support constant expressions. Such as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\nSET forward_to_master = concat('tr', 'u', 'e');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"set-variables-in-the-query-statement",children:"Set variables in the query statement"}),"\n",(0,s.jsx)(n.p,{children:"In some scenarios, we may need to set variables specifically for certain queries.\nThe SET_VAR hint sets the session value of a system variable temporarily (for the duration of a single statement). Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\nSELECT /*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */ sleep(3);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that the comment must start with /*+ and can only follow the SELECT."}),"\n",(0,s.jsx)(n.h2,{id:"supported-variables",children:"Supported variables"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.p,{children:["The following content is automatically generated by ",(0,s.jsx)(n.code,{children:"docs/generate-config-and-variable-doc.sh"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To modify, please modify ",(0,s.jsx)(n.code,{children:"fe/fe-core/src/main/java/org/apache/doris/qe/SessionVariable.java"})," and ",(0,s.jsx)(n.code,{children:"fe/fe-core/src/main/java/org/apache/ Description information in doris/qe/GlobalVariable.java"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"<--DOC_PLACEHOLDER--\x3e"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var l=i(667294);let s={},t=l.createContext(s);function a(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);