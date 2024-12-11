"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["14820"],{53958:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY","title":"ALTER STORAGE POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/storage-management/ALTER-STORAGE-POLICY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER STORAGE POLICY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE STORAGE POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/storage-management/CREATE-STORAGE-POLICY"},"next":{"title":"DROP STORAGE POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/storage-management/DROP-STORAGE-POLICY"}}'),s=t("785893"),a=t("250065");let o={title:"ALTER STORAGE POLICY",language:"zh-CN"},r=void 0,c={},i=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A\u5DF2\u6709\u7684\u51B7\u70ED\u5206\u5C42\u8FC1\u79FB\u7B56\u7565\u3002\u4EC5 root \u6216 admin \u7528\u6237\u53EF\u4EE5\u4FEE\u6539\u8D44\u6E90\u3002\n\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER STORAGE POLICY  \'policy_name\'\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539\u540D\u4E3A cooldown_datetime \u51B7\u70ED\u5206\u5C42\u6570\u636E\u8FC1\u79FB\u65F6\u95F4\u70B9\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES("cooldown_datetime" = "2023-06-08 00:00:00");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539\u540D\u4E3A cooldown_ttl \u7684\u51B7\u70ED\u5206\u5C42\u6570\u636E\u8FC1\u79FB\u5012\u8BA1\u65F6"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES ("cooldown_ttl" = "10000");\nALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES ("cooldown_ttl" = "1h");\nALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES ("cooldown_ttl" = "3d");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER, STORAGE, POLICY\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var l=t(667294);let s={},a=l.createContext(s);function o(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);