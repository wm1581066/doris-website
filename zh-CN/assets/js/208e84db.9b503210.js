"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["258064"],{360321:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/combinators/state","title":"STATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/combinators/state.md","sourceDirName":"sql-manual/sql-functions/combinators","slug":"/sql-manual/sql-functions/combinators/state","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRUCT_ELEMENT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/struct-functions/struct-element"},"next":{"title":"MERGE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge"}}'),r=t("785893"),a=t("250065");let l={title:"STATE",language:"zh-CN"},i=void 0,o={},c=[{value:"STATE",id:"state",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"state",children:"STATE"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AGGREGATE_FUNCTION_STATE(arg...)"}),"\n\u8FD4\u56DE\u805A\u5408\u51FD\u6570\u7684\u4E2D\u95F4\u7ED3\u679C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u540E\u7EED\u7684\u805A\u5408\u6216\u8005\u901A\u8FC7merge\u7EC4\u5408\u5668\u83B7\u5F97\u5B9E\u9645\u8BA1\u7B97\u7ED3\u679C\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199\u5165agg_state\u7C7B\u578B\u7684\u8868\u4FDD\u5B58\u4E0B\u6765\u3002\n\u7ED3\u679C\u7684\u7C7B\u578B\u4E3Aagg_state\uFF0Cagg_state\u4E2D\u7684\u51FD\u6570\u7B7E\u540D\u4E3A",(0,r.jsx)(n.code,{children:"AGGREGATE_FUNCTION(arg...)"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql [test]>select avg_merge(t) from (select avg_union(avg_state(1)) as t from d_table group by k1)p;\n+----------------+\n| avg_merge(`t`) |\n+----------------+\n|              1 |\n+----------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"AGG_STATE,STATE"})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);