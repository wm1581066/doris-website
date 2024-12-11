"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["497214"],{48422:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>r,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/last-day","title":"LAST_DAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/last-day.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/last-day","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/last-day","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LAST_DAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FROM_DAYS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from-days"},"next":{"title":"TO_MONDAY","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/to-monday"}}'),l=t("785893"),a=t("250065");let i={title:"LAST_DAY",language:"zh-CN"},d=void 0,o={},r=[{value:"last_day",id:"last_day",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"last_day",children:"last_day"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DATE last_day(DATETIME date)"})}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u8F93\u5165\u65E5\u671F\u4E2D\u6708\u4EFD\u7684\u6700\u540E\u4E00\u5929\uFF1B\u6240\u4EE5\u8FD4\u56DE\u7684\u65E5\u671F\u4E2D\uFF0C\u5E74\u548C\u6708\u4E0D\u53D8\uFF0C\u65E5\u53EF\u80FD\u662F\u5982\u4E0B\u60C5\u51B5\uFF1A\n'28'(\u975E\u95F0\u5E74\u7684\u4E8C\u6708\u4EFD),\n'29'(\u95F0\u5E74\u7684\u4E8C\u6708\u4EFD),\n'30'(\u56DB\u6708\uFF0C\u516D\u6708\uFF0C\u4E5D\u6708\uFF0C\u5341\u4E00\u6708),\n'31'(\u4E00\u6708\uFF0C\u4E09\u6708\uFF0C\u4E94\u6708\uFF0C\u4E03\u6708\uFF0C\u516B\u6708\uFF0C\u5341\u6708\uFF0C\u5341\u4E8C\u6708)"}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql > select last_day('2000-02-03');\n+-------------------+\n| last_day('2000-02-03 00:00:00') |\n+-------------------+\n| 2000-02-29        |\n+-------------------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"LAST_DAY,DAYS\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);