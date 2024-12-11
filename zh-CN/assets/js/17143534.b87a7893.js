"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["796314"],{127041:function(e,n,l){l.r(n),l.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>t});var r=JSON.parse('{"id":"sql-manual/sql-statements/Account-Management-Statements/GRANT","title":"GRANT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Account-Management-Statements/GRANT.md","sourceDirName":"sql-manual/sql-statements/Account-Management-Statements","slug":"/sql-manual/sql-statements/Account-Management-Statements/GRANT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GRANT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LDAP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/LDAP"},"next":{"title":"REVOKE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE"}}'),s=l("785893"),i=l("250065");let t={title:"GRANT",language:"zh-CN"},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"priv_level",id:"priv_level",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"workload_group_name",id:"workload_group_name",level:3},{value:"compute_group_name",id:"compute_group_name",level:3},{value:"storage_vault_name",id:"storage_vault_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"role_list",id:"role_list",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u547D\u4EE4",id:"\u76F8\u5173\u547D\u4EE4",level:2},{value:"Keywords",id:"keywords",level:3}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"GRANT \u547D\u4EE4\u7528\u4E8E\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5C06\u6307\u5B9A\u7684\u6743\u9650\u6388\u4E88\u67D0\u7528\u6237\u6216\u89D2\u8272\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5C06\u6307\u5B9A\u89D2\u8272\u6388\u4E88\u67D0\u7528\u6237\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.p,{children:"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"GRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"GRANT privilege_list ON WORKLOAD GROUP workload_group_name TO user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"GRANT privilege_list ON COMPUTE GROUP compute_group_name TO user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"GRANT privilege_list ON STORAGE VAULT storage_vault_name TO user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"GRANT role_list TO user_identity"}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,s.jsx)(n.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u8D4B\u4E88\u7684\u6743\u9650\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002\u5F53\u524D\u652F\u6301\u5982\u4E0B\u6743\u9650\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NODE_PRIV\uFF1A\u96C6\u7FA4\u8282\u70B9\u64CD\u4F5C\u6743\u9650\uFF0C\u5305\u62EC\u8282\u70B9\u4E0A\u4E0B\u7EBF\u7B49\u64CD\u4F5C\u3002"}),"\n",(0,s.jsx)(n.li,{children:"ADMIN_PRIV\uFF1A\u9664 NODE_PRIV \u4EE5\u5916\u7684\u6240\u6709\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"GRANT_PRIV\uFF1A\u64CD\u4F5C\u6743\u9650\u7684\u6743\u9650\uFF0C\u5305\u62EC\u521B\u5EFA\u5220\u9664\u7528\u6237\u3001\u89D2\u8272\uFF0C\u6388\u6743\u548C\u64A4\u6743\uFF0C\u8BBE\u7F6E\u5BC6\u7801\u7B49\u3002"}),"\n",(0,s.jsx)(n.li,{children:"SELECT_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u8BFB\u53D6\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"LOAD_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u5BFC\u5165\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"ALTER_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684 schema \u53D8\u66F4\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"CREATE_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u521B\u5EFA\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"DROP_PRIV\uFF1A\u5BF9\u6307\u5B9A\u7684\u5E93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"USAGE_PRIV\uFF1A\u5BF9\u6307\u5B9A\u8D44\u6E90\u3001Workload Group\u3001Compute Group \u7684\u4F7F\u7528\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"SHOW_VIEW_PRIV\uFF1A\u67E5\u770B view \u521B\u5EFA\u8BED\u53E5\u7684\u6743\u9650\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u65E7\u7248\u6743\u9650\u8F6C\u6362\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ALL \u548C READ_WRITE \u4F1A\u88AB\u8F6C\u6362\u6210\uFF1ASELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV\u3002"}),"\n",(0,s.jsx)(n.li,{children:"READ_ONLY \u4F1A\u88AB\u8F6C\u6362\u4E3A SELECT_PRIV\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"priv_level",children:"priv_level"}),"\n",(0,s.jsx)(n.p,{children:"\u652F\u6301\u4EE5\u4E0B\u56DB\u79CD\u5F62\u5F0F\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"."}),".*\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6240\u6709 catalog \u53CA\u5176\u4E2D\u7684\u6240\u6709\u5E93\u8868\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["catalog_name.",(0,s.jsx)(n.em,{children:"."}),"\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6307\u5B9A catalog \u4E2D\u7684\u6240\u6709\u5E93\u8868\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"catalog_name.db.*\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6307\u5B9A\u5E93\u4E0B\u7684\u6240\u6709\u8868\u3002"}),"\n",(0,s.jsx)(n.li,{children:"catalog_name.db.tbl\uFF1A\u6743\u9650\u53EF\u4EE5\u5E94\u7528\u4E8E\u6307\u5B9A\u5E93\u4E0B\u7684\u6307\u5B9A\u8868\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A resource \u540D\uFF0C\u652F\u6301 % \u548C * \u5339\u914D\u6240\u6709\u8D44\u6E90\uFF0C\u4E0D\u652F\u6301\u901A\u914D\u7B26\uFF0C\u6BD4\u5982 res*\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"workload_group_name",children:"workload_group_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A workload group \u540D\uFF0C\u652F\u6301 % \u548C * \u5339\u914D\u6240\u6709 workload group\uFF0C\u4E0D\u652F\u6301\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"compute_group_name",children:"compute_group_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A compute group \u540D\u79F0\uFF0C\u652F\u6301 % \u548C * \u5339\u914D\u6240\u6709 compute group\uFF0C\u4E0D\u652F\u6301\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"storage_vault_name",children:"storage_vault_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A storage vault \u540D\u79F0\uFF0C\u652F\u6301 % \u548C * \u5339\u914D\u6240\u6709 storage vault\uFF0C\u4E0D\u652F\u6301\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u63A5\u6536\u6743\u9650\u7684\u7528\u6237\u3002\u5FC5\u987B\u4E3A\u4F7F\u7528 CREATE USER \u521B\u5EFA\u8FC7\u7684 user_identity\u3002user_identity \u4E2D\u7684 host \u53EF\u4EE5\u662F\u57DF\u540D\uFF0C\u5982\u679C\u662F\u57DF\u540D\u7684\u8BDD\uFF0C\u6743\u9650\u7684\u751F\u6548\u65F6\u95F4\u53EF\u80FD\u4F1A\u6709 1 \u5206\u949F\u5DE6\u53F3\u7684\u5EF6\u8FDF\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"role_name",children:"role_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u63A5\u6536\u6743\u9650\u7684\u89D2\u8272\u3002\u5982\u679C\u6307\u5B9A\u7684\u89D2\u8272\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u81EA\u52A8\u521B\u5EFA\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"role_list",children:"role_list"}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u8D4B\u4E88\u7684\u89D2\u8272\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF0C\u6307\u5B9A\u7684\u89D2\u8272\u5FC5\u987B\u5B58\u5728\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u6240\u6709 catalog \u548C\u5E93\u8868\u7684\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,s.jsxs)(n.p,{children:["GRANT SELECT_PRIV ON ",(0,s.jsx)(n.em,{children:"."}),".* TO 'jack'@'%';"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u6307\u5B9A\u5E93\u8868\u7684\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u6307\u5B9A\u5E93\u8868\u7684\u6743\u9650\u7ED9\u89D2\u8272\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u6240\u6709 resource \u7684\u4F7F\u7528\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u6307\u5B9A resource \u7684\u4F7F\u7528\u6743\u9650\u7ED9\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u6307\u5B9A resource \u7684\u4F7F\u7528\u6743\u9650\u7ED9\u89D2\u8272\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5C06\u6307\u5B9A role \u6388\u4E88\u67D0\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT 'role1','role2' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5C06\u6307\u5B9A workload group \u6388\u4E88\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5339\u914D\u6240\u6709 workload group \u6388\u4E88\u7528\u6237\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5C06\u6307\u5B9A workload group \u6388\u4E88\u89D2\u8272\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5141\u8BB8\u7528\u6237\u67E5\u770B\u6307\u5B9A view \u7684\u521B\u5EFA\u8BED\u53E5\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT SHOW_VIEW_PRIV ON db1.view1 TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u7528\u6237\u5BF9\u6307\u5B9A compute group \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON COMPUTE GROUP 'group1' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u89D2\u8272\u5BF9\u6307\u5B9A compute group \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON COMPUTE GROUP 'group1' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u7528\u6237\u5BF9\u6240\u6709 compute group \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON COMPUTE GROUP '*' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u7528\u6237\u5BF9\u6307\u5B9A storage vault \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON STORAGE VAULT 'vault1' TO 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u89D2\u8272\u5BF9\u6307\u5B9A storage vault \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON STORAGE VAULT 'vault1' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u4E88\u7528\u6237\u5BF9\u6240\u6709 storage vault \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"GRANT USAGE_PRIV ON STORAGE VAULT '*' TO 'jack'@'%';"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5173\u547D\u4EE4",children:"\u76F8\u5173\u547D\u4EE4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE",children:"REVOKE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/account-management/SHOW-GRANTS.md",children:"SHOW GRANTS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",children:"CREATE ROLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../cluster-management/compute-management/CREATE-WORKLOAD-GROUP.md",children:"CREATE WORKLOAD GROUP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../cluster-management/compute-management/CREATE-RESOURCE.md",children:"CREATE RESOURCE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../cluster-management/storage-management/CREATE-STORAGE-VAULT.md",children:"CREATE STORAGE VAULT"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GRANT, WORKLOAD GROUP, COMPUTE GROUP, STORAGE VAULT, RESOURCE \n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return t}});var r=l(667294);let s={},i=r.createContext(s);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);