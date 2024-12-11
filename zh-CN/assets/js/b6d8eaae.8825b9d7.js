"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["871930"],{815941:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>i,toc:()=>a,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-replace","title":"JSON_REPLACE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-replace.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-replace","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-replace","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_REPLACE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_INSERT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-insert"},"next":{"title":"JSON_SET","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-set"}}'),t=s("785893"),o=s("250065");let c={title:"JSON_REPLACE",language:"zh-CN"},r=void 0,i={},a=[{value:"json_replace",id:"json_replace",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"json_replace",children:"json_replace"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"VARCHAR json_replace(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"json_replace"})," \u51FD\u6570\u5728 JSON \u4E2D\u66F4\u65B0\u6570\u636E\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002\u5982\u679C ",(0,t.jsx)(e.code,{children:"json_str"})," \u6216 ",(0,t.jsx)(e.code,{children:"path"})," \u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002\u5426\u5219\uFF0C\u5982\u679C ",(0,t.jsx)(e.code,{children:"json_str"})," \u4E0D\u662F\u6709\u6548\u7684 JSON \u6216\u4EFB\u4F55 ",(0,t.jsx)(e.code,{children:"path"})," \u53C2\u6570\u4E0D\u662F\u6709\u6548\u7684\u8DEF\u5F84\u8868\u8FBE\u5F0F\u6216\u5305\u542B\u4E86 * \u901A\u914D\u7B26\uFF0C\u5219\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u8DEF\u5F84\u503C\u5BF9\u6309\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u8FDB\u884C\u8BC4\u4F30\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679C JSON \u4E2D\u5DF2\u5B58\u5728\u67D0\u4E2A\u8DEF\u5F84\uFF0C\u5219\u8DEF\u5F84\u503C\u5BF9\u4F1A\u5C06\u73B0\u6709 JSON \u503C\u8986\u76D6\u4E3A\u65B0\u503C\u3002\n\u5426\u5219\uFF0C\u5BF9\u4E8E JSON \u4E2D\u4E0D\u5B58\u5728\u7684\u67D0\u4E2A\u8DEF\u5F84\u7684\u8DEF\u5F84\u503C\u5BF9\u5C06\u88AB\u5FFD\u7565\u4E14\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u5F71\u54CD\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"MySQL> select json_replace(null, null, null);\n+----------------------------------+\n| json_replace(NULL, NULL, 'NULL') |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n\nMySQL> select json_replace('{\"k\": 1}', \"$.k\", 2);\n+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.k', '2') |\n+----------------------------------------+\n| {\"k\":2}                                |\n+----------------------------------------+\n\nMySQL> select json_replace('{\"k\": 1}', \"$.j\", 2);\n+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.j', '2') |\n+----------------------------------------+\n| {\"k\":1}                                |\n+----------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"JSON, json_replace"})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var l=s(667294);let t={},o=l.createContext(t);function c(n){let e=l.useContext(o);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),l.createElement(o.Provider,{value:e},n.children)}}}]);