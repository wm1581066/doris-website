"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["383639"],{77677:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/starts-with","title":"STARTS_WITH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/starts-with.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/starts-with","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/starts-with","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"STARTS_WITH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ENDS_WITH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/ends-with"},"next":{"title":"TRIM","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/trim"}}'),i=t("785893"),l=t("250065");let r={title:"STARTS_WITH",language:"zh-CN"},o=void 0,a={},c=[{value:"starts_with",id:"starts_with",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"starts_with",children:"starts_with"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BOOLEAN STARTS_WITH(VARCHAR str, VARCHAR prefix)"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u5B57\u7B26\u4E32\u4EE5\u6307\u5B9A\u524D\u7F00\u5F00\u5934\uFF0C\u8FD4\u56DEtrue\u3002\u5426\u5219\uFF0C\u8FD4\u56DEfalse\u3002\u4EFB\u610F\u53C2\u6570\u4E3ANULL\uFF0C\u8FD4\u56DENULL\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"MySQL [(none)]> select starts_with(\"hello world\",\"hello\");\n+-------------------------------------+\n| starts_with('hello world', 'hello') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n\nMySQL [(none)]> select starts_with(\"hello world\",\"world\");\n+-------------------------------------+\n| starts_with('hello world', 'world') |\n+-------------------------------------+\n|                                   0 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"STARTS_WITH\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);