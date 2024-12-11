"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["648228"],{70387:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>a,assets:()=>l,toc:()=>u,frontMatter:()=>d});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/seconds_sub","title":"seconds_sub","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/seconds_sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/seconds_sub","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_sub","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"seconds_sub","language":"zh-CN"},"sidebar":"docs","previous":{"title":"seconds_diff","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_diff"},"next":{"title":"hours_add","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/hours_add"}}'),i=s("785893"),o=s("250065");let d={title:"seconds_sub",language:"zh-CN"},c=void 0,l={},u=[{value:"seconds_sub",id:"seconds_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"seconds_sub",children:"seconds_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME SECONDS_SUB(DATETIME date, INT seconds)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u6216\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u79D2\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A DATETIME\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select seconds_sub(\"2020-01-01 00:00:00\", 1);\n+---------------------------------------+\n| seconds_sub('2020-01-01 00:00:00', 1) |\n+---------------------------------------+\n| 2019-12-31 23:59:59                   |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SECONDS_SUB\n"})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let i={},o=t.createContext(i);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);