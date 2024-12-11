"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["895333"],{608983:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date-sub","title":"DATE_SUB","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/date-time-functions/date-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date-sub","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/date-sub","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DATE_SUB","language":"en"},"sidebar":"docs","previous":{"title":"DATE_ADD","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/date-add"},"next":{"title":"DATE_TRUNC","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/date-trunc"}}'),a=t("785893"),i=t("250065");let d={title:"DATE_SUB",language:"en"},l=void 0,r={},o=[{value:"date_sub",id:"date_sub",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"date_sub",children:"date_sub"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"DATETIME DATE_SUB(DATETIME date, INTERVAL expr type)"})}),"\n",(0,a.jsx)(n.p,{children:"Subtract the specified time interval from the date"}),"\n",(0,a.jsx)(n.p,{children:"The date parameter is a valid date expression."}),"\n",(0,a.jsx)(n.p,{children:"The expr parameter is the interval you want to add."}),"\n",(0,a.jsx)(n.p,{children:"The type parameter can be the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND"}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-11-28 23:59:59                             |\n+-------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Date, date, date\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let a={},i=s.createContext(a);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);