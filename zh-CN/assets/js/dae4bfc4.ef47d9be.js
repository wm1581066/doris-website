"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["130502"],{135323:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/hour-ceil","title":"hour_ceil","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/hour-ceil.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/hour-ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/hour-ceil","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"hour_ceil","language":"zh-CN"},"sidebar":"docs","previous":{"title":"minute_ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/minute-ceil"},"next":{"title":"day_ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/day-ceil"}}'),l=i("785893"),s=i("250065");let c={title:"hour_ceil",language:"zh-CN"},r=void 0,o={},a=[{value:"hour_ceil",id:"hour_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"hour_ceil",children:"hour_ceil"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DATETIME HOUR_CEIL(DATETIME datetime)\nDATETIME HOUR_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5C06\u65E5\u671F\u8F6C\u5316\u4E3A\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5468\u671F\u7684\u6700\u8FD1\u4E0A\u53D6\u6574\u65F6\u523B\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"datetime\uFF1A\u53C2\u6570\u662F\u5408\u6CD5\u7684\u65E5\u671F\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,l.jsx)(n.li,{children:"period\uFF1A\u53C2\u6570\u662F\u6307\u5B9A\u6BCF\u4E2A\u5468\u671F\u6709\u591A\u5C11\u5C0F\u65F6\u7EC4\u6210\u3002"}),"\n",(0,l.jsx)(n.li,{children:"origin\uFF1A\u5F00\u59CB\u7684\u65F6\u95F4\u8D77\u70B9\uFF0C\u5982\u679C\u4E0D\u586B\uFF0C\u9ED8\u8BA4\u662F 0001-01-01T00:00:00\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select hour_ceil(\"2023-07-13 22:28:18\", 5);\n+------------------------------------------------------------+\n| hour_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+------------------------------------------------------------+\n| 2023-07-14 02:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"HOUR_CEIL, HOUR, CEIL\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD8\u53EF\u53C2\u9605 ",(0,l.jsx)(n.a,{href:"./date_ceil",children:"date_ceil"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var t=i(667294);let l={},s=t.createContext(l);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);