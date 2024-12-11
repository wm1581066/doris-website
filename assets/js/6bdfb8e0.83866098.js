"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["387567"],{122372:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>l});var o=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/day-floor","title":"day_floor","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/day-floor.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/day-floor","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/day-floor","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"day_floor","language":"en"},"sidebar":"docs","previous":{"title":"hour_floor","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/hour-floor"},"next":{"title":"month_floor","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/month-floor"}}'),i=t("785893"),s=t("250065");let l={title:"day_floor",language:"en"},r=void 0,a={},d=[{value:"day_floor",id:"day_floor",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"day_floor",children:"day_floor"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DATETIME DAY_FLOOR(DATETIME datetime)\nDATETIME DAY_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME DAY_FLOOR(DATETIME datetime, INT period)\nDATETIME DAY_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Convert the date to the nearest rounding down time of the specified time interval period."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,i.jsx)(n.li,{children:"period: specifies how many days each cycle consists of."}),"\n",(0,i.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select day_floor(\"2023-07-13 22:28:18\", 5);\n+------------------------------------------------------------+\n| day_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+------------------------------------------------------------+\n| 2023-07-12 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.07 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DAY_FLOOR,DAY,FLOOR\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"./date_floor",children:"date_floor"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var o=t(667294);let i={},s=o.createContext(i);function l(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);