"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["110247"],{582662:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>r,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS","title":"SHOW LOAD WARNINGS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW LOAD WARNINGS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW LOAD PROFILE","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-PROFILE"},"next":{"title":"CREATE ROUTINE LOAD","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/CREATE-ROUTINE-LOAD"}}'),a=t("785893"),s=t("250065");let i={title:"SHOW LOAD WARNINGS",language:"zh-CN"},d=void 0,o={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u5BFC\u5165\u4EFB\u52A1\u5931\u8D25\u4E14\u9519\u8BEF\u4FE1\u606F\u4E3A ",(0,a.jsx)(n.code,{children:"ETL_QUALITY_UNSATISFIED"}),"\uFF0C\u5219\u8BF4\u660E\u5B58\u5728\u5BFC\u5165\u8D28\u91CF\u95EE\u9898\uFF0C\u5982\u679C\u60F3\u770B\u5230\u8FD9\u4E9B\u6709\u8D28\u91CF\u95EE\u9898\u7684\u5BFC\u5165\u4EFB\u52A1\uFF0C\u8BE5\u8BED\u53E5\u5C31\u662F\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C\u7684\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS\n[FROM db_name]\n[\n   WHERE\n   [LABEL [ = "your_label" ]]\n   [LOAD_JOB_ID = ["job id"]]\n]\n'})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u4E0D\u6307\u5B9A db_name\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4 db"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u4F7F\u7528 LABEL = \uFF0C\u5219\u7CBE\u786E\u5339\u914D\u6307\u5B9A\u7684 label"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A\u4E86 LOAD_JOB_ID\uFF0C\u5219\u7CBE\u786E\u5339\u914D\u6307\u5B9A\u7684 JOB ID"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A db \u7684\u5BFC\u5165\u4EFB\u52A1\u4E2D\u5B58\u5728\u8D28\u91CF\u95EE\u9898\u7684\u6570\u636E\uFF0C\u6307\u5B9A label \u4E3A "load_demo_20210112"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112" \n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, LOAD, WARNINGS\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var l=t(667294);let a={},s=l.createContext(a);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);