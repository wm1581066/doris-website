"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["441593"],{443658:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/percentile","title":"PERCENTILE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/percentile.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/percentile","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"PERCENTILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"APPROX_COUNT_DISTINCT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"},"next":{"title":"PERCENTILE_ARRAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-array"}}'),c=t("785893"),i=t("250065");let r={title:"PERCENTILE",language:"zh-CN"},l=void 0,o={},a=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"PERCENTILE(expr, DOUBLE p)"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8BA1\u7B97\u7CBE\u786E\u7684\u767E\u5206\u4F4D\u6570\uFF0C\u9002\u7528\u4E8E\u5C0F\u6570\u636E\u91CF\u3002\u5148\u5BF9\u6307\u5B9A\u5217\u964D\u5E8F\u6392\u5217\uFF0C\u7136\u540E\u53D6\u7CBE\u786E\u7684\u7B2C ",(0,c.jsx)(n.code,{children:"p"})," \u4F4D\u767E\u5206\u6570\u3002",(0,c.jsx)(n.code,{children:"p"})," \u7684\u503C\u4ECB\u4E8E ",(0,c.jsx)(n.code,{children:"0"})," \u5230 ",(0,c.jsx)(n.code,{children:"1"})," \u4E4B\u95F4\n\u5982\u679C ",(0,c.jsx)(n.code,{children:"p"})," \u4E0D\u6307\u5411\u7CBE\u786E\u7684\u4F4D\u7F6E\uFF0C\u5219\u8FD4\u56DE\u6240\u6307\u4F4D\u7F6E\u4E24\u4FA7\u76F8\u90BB\u6570\u503C\u5728 ",(0,c.jsx)(n.code,{children:"p"})," \u6240\u6307\u4F4D\u7F6E\u4E0A\u4EA7\u751F\u7684\u7EBF\u6027\u63D2\u503C\u3002\u6CE8\u610F\u8FD9\u4E0D\u662F\u4E24\u6570\u5B57\u7684\u5E73\u5747\u6570\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53C2\u6570\u8BF4\u660E\n",(0,c.jsx)(n.code,{children:"expr"}),"\uFF1A\u5FC5\u586B\u3002\u503C\u4E3A\u6574\u6570\uFF08\u6700\u5927\u4E3A ",(0,c.jsx)(n.code,{children:"bigint"}),"\uFF09 \u7C7B\u578B\u7684\u5217\u3002\n",(0,c.jsx)(n.code,{children:"p"}),"\uFF1A\u5E38\u91CF\uFF0C\u5FC5\u586B\u3002\u9700\u8981\u7CBE\u786E\u7684\u767E\u5206\u4F4D\u6570\u3002\u53D6\u503C\u4E3A ",(0,c.jsx)(n.code,{children:"[0.0,1.0]"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |        percentile(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select percentile(NULL,0.3) from table1;\n+-----------------------+\n| percentile(NULL, 0.3) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n"})}),"\n",(0,c.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"PERCENTILE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let c={},i=s.createContext(c);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);