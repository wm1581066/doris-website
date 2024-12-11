"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["395657"],{85927:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/months-sub","title":"MONTHS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/months-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/months-sub","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/months-sub","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MONTHS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MONTHS_DIFF","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/months-diff"},"next":{"title":"YEARS_ADD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/years-add"}}'),i=t("785893"),o=t("250065");let l={title:"MONTHS_SUB",language:"zh-CN"},r=void 0,c={},d=[{value:"months_sub",id:"months_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"months_sub",children:"months_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME MONTHS_SUB(DATETIME date, INT months)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u6216\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u6708\u4EFD\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E0E\u53C2\u6570 date \u7684\u7C7B\u578B\u4E00\u81F4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select months_sub(\"2020-02-02 02:02:02\", 1);\n+--------------------------------------+\n| months_sub('2020-02-02 02:02:02', 1) |\n+--------------------------------------+\n| 2020-01-02 02:02:02                  |\n+--------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MONTHS_SUB\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},o=s.createContext(i);function l(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);