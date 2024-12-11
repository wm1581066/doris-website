"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["865569"],{846621:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/stddev","title":"STDDEV,STDDEV_POP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/stddev.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/stddev","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STDDEV,STDDEV_POP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SUM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/sum"},"next":{"title":"STDDEV_SAMP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev-samp"}}'),r=t("785893"),i=t("250065");let o={title:"STDDEV,STDDEV_POP",language:"zh-CN"},d=void 0,a={},l=[{value:"STDDEV,STDDEV_POP",id:"stddevstddev_pop",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"stddevstddev_pop",children:"STDDEV,STDDEV_POP"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"STDDEV(expr)"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD4\u56DEexpr\u8868\u8FBE\u5F0F\u7684\u6807\u51C6\u5DEE"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"MySQL > select stddev(scan_rows) from log_statis group by datetime;\n+---------------------+\n| stddev(`scan_rows`) |\n+---------------------+\n|  2.3736656687790934 |\n+---------------------+\n\nMySQL > select stddev_pop(scan_rows) from log_statis group by datetime;\n+-------------------------+\n| stddev_pop(`scan_rows`) |\n+-------------------------+\n|      2.3722760595994914 |\n+-------------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"STDDEV,STDDEV_POP,POP"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);