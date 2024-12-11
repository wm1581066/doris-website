"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["394306"],{583947:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/avg-weighted","title":"AVG_WEIGHTED","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/avg-weighted.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/avg-weighted","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg-weighted","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"AVG_WEIGHTED","language":"en"},"sidebar":"docs","previous":{"title":"AVG","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg"},"next":{"title":"SUM","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/sum"}}'),i=t("785893"),a=t("250065");let l={title:"AVG_WEIGHTED",language:"en"},r=void 0,o={},c=[{value:"AVG_WEIGHTED",id:"avg_weighted",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"avg_weighted",children:"AVG_WEIGHTED"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:" double avg_weighted(x, weight)"})}),"\n",(0,i.jsx)(n.p,{children:"Calculate the weighted arithmetic mean, which is the sum of the products of all corresponding values and weights, divided the total weight sum.\nIf the sum of all weights equals 0, NaN will be returned."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select avg_weighted(k2,k1) from baseall;\n+--------------------------+\n| avg_weighted(`k2`, `k1`) |\n+--------------------------+\n|                  495.675 |\n+--------------------------+\n1 row in set (0.02 sec)\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"AVG_WEIGHTED"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);