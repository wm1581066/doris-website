"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["7724"],{90259:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/combinators/state","title":"STATE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/combinators/state.md","sourceDirName":"sql-manual/sql-functions/combinators","slug":"/sql-manual/sql-functions/combinators/state","permalink":"/docs/3.0/sql-manual/sql-functions/combinators/state","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"STATE","language":"en"},"sidebar":"docs","previous":{"title":"STRUCT_ELEMENT","permalink":"/docs/3.0/sql-manual/sql-functions/struct-functions/struct-element"},"next":{"title":"MERGE","permalink":"/docs/3.0/sql-manual/sql-functions/combinators/merge"}}'),a=n("785893"),i=n("250065");let r={title:"STATE",language:"en"},o=void 0,l={},c=[{value:"STATE",id:"state",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"state",children:"STATE"}),"\n",(0,a.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"AGGREGATE_FUNCTION_STATE(arg...)"}),"\nReturns the intermediate result of the aggregation function, which can be used for subsequent aggregation or to obtain the actual calculation result through the merge combiner, or can be directly written into the agg_state type table and saved.\nThe type of the result is agg_state, and the function signature in agg_state is ",(0,a.jsx)(t.code,{children:"AGGREGATE_FUNCTION(arg...)"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"mysql [test]>select avg_merge(t) from (select avg_union(avg_state(1)) as t from d_table group by k1)p;\n+----------------+\n| avg_merge(`t`) |\n+----------------+\n|              1 |\n+----------------+\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(t.p,{children:"AGG_STATE,STATE"})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var s=n(667294);let a={},i=s.createContext(a);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);