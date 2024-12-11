"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["733944"],{628598:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>u,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-numbers","title":"EXPLODE_NUMBERS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-functions/explode-numbers.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-numbers","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE_NUMBERS","language":"en"},"sidebar":"docs","previous":{"title":"NUMBERS","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/numbers"},"next":{"title":"EXPLODE_NUMBERS_OUTER","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers-outer"}}'),l=t("785893"),o=t("250065");let r={title:"EXPLODE_NUMBERS",language:"en"},i=void 0,u={},a=[{value:"explode_numbers",id:"explode_numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"explode_numbers",children:"explode_numbers"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.p,{children:"Table functions must be used in conjunction with Lateral View."}),"\n",(0,l.jsx)(n.p,{children:"Get a number sequence [0,n)."}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"explode_numbers(n)"})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(5) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    0 |\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n+------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"explode,numbers,explode_numbers"})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},o=s.createContext(l);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);