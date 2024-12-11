"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["164701"],{913668:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/convert-tz","title":"CONVERT_TZ","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/convert-tz.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/convert-tz","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/convert-tz","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CONVERT_TZ","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ELEMENT_AT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/element-at"},"next":{"title":"CURDATE,CURRENT_DATE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/curdate"}}'),i=t("785893"),o=t("250065");let r={title:"CONVERT_TZ",language:"zh-CN"},l=void 0,c={},a=[{value:"convert_tz",id:"convert_tz",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"convert_tz",children:"convert_tz"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME CONVERT_TZ(DATETIME dt, VARCHAR from_tz, VARCHAR to_tz)"})}),"\n",(0,i.jsx)(n.p,{children:"\u8F6C\u6362datetime\u503C\uFF0C\u4ECE from_tz \u7ED9\u5B9A\u65F6\u533A\u8F6C\u5230 to_tz \u7ED9\u5B9A\u65F6\u533A\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C\u503C\u3002 \u5982\u679C\u53C2\u6570\u65E0\u6548\u8BE5\u51FD\u6570\u8FD4\u56DENULL\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n+---------------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles') |\n+---------------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                       |\n+---------------------------------------------------------------------------+\n\nmysql> select convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CONVERT_TZ\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);