"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["869321"],{784944:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-numbers-outer","title":"EXPLODE_NUMBERS_OUTER","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-functions/explode-numbers-outer.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-numbers-outer","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers-outer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE_NUMBERS_OUTER","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_NUMBERS","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers"},"next":{"title":"S3","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/s3"}}'),o=t("785893"),l=t("250065");let r={title:"EXPLODE_NUMBERS_OUTER",language:"en"},i=void 0,a={},c=[{value:"outer combinator",id:"outer-combinator",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"outer-combinator",children:"outer combinator"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"explode_numbers(INT x)"})}),"\n",(0,o.jsxs)(n.p,{children:["Adding the ",(0,o.jsx)(n.code,{children:"_outer"})," suffix after the function name of the table function changes the function behavior from ",(0,o.jsx)(n.code,{children:"non-outer"})," to ",(0,o.jsx)(n.code,{children:"outer"}),", and adds a row of ",(0,o.jsx)(n.code,{children:"Null"})," data when the table function generates 0 rows of data."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"outer\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let o={},l=s.createContext(o);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);