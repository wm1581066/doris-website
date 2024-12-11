"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["647128"],{613113:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/microsecond","title":"MICROSECOND","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/microsecond.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/microsecond","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/microsecond","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MICROSECOND","language":"en"},"sidebar":"docs","previous":{"title":"year_ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/year-ceil"},"next":{"title":"MICROSECONDS_ADD","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/microseconds-add"}}'),i=t("785893"),o=t("250065");let c={title:"MICROSECOND",language:"en"},r=void 0,l={},d=[{value:"microsecond",id:"microsecond",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"microsecond",children:"microsecond"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"INT MICROSECOND(DATETIMEV2 date)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns microsecond information in the time type."}),"\n",(0,i.jsx)(n.p,{children:"The parameter is Datetime type"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select microsecond(cast('1999-01-02 10:11:12.000123' as datetimev2(6))) as microsecond;\n+-------------+\n| microsecond |\n+-------------+\n|         123 |\n+-------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MICROSECOND\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(667294);let i={},o=s.createContext(i);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);