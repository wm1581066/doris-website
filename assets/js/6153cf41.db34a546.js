"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["844561"],{977920:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/hll-union-agg","title":"HLL_UNION_AGG","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/hll-union-agg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/hll-union-agg","permalink":"/docs/2.0/sql-manual/sql-functions/aggregate-functions/hll-union-agg","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"HLL_UNION_AGG","language":"en"},"sidebar":"docs","previous":{"title":"PERCENTILE_ARRAY","permalink":"/docs/2.0/sql-manual/sql-functions/aggregate-functions/percentile-array"},"next":{"title":"TOPN","permalink":"/docs/2.0/sql-manual/sql-functions/aggregate-functions/topn"}}'),s=t("785893"),o=t("250065");let a={title:"HLL_UNION_AGG",language:"en"},l=void 0,r={},c=[{value:"HLL_UNION_AGG",id:"hll_union_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"hll_union_agg",children:"HLL_UNION_AGG"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"HLL_UNION_AGG(hll)"})}),"\n",(0,s.jsx)(n.p,{children:"HLL is an engineering implementation based on HyperLog algorithm, which is used to save the intermediate results of HyperLog calculation process."}),"\n",(0,s.jsx)(n.p,{children:"It can only be used as the value column type of the table and reduce the amount of data through aggregation to achieve the purpose of speeding up the query."}),"\n",(0,s.jsx)(n.p,{children:"Based on this, we get an estimate with an error of about 1%. The HLL column is generated by other columns or data imported into the data."}),"\n",(0,s.jsx)(n.p,{children:"When importing, hll_hash function is used to specify which column in data is used to generate HLL column. It is often used to replace count distinct, and to calculate UV quickly in business by combining rollup."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\nTHE COURT OF JUSTICE OF THE EUROPEAN COMMUNITIES,\n+-------------------------+\n| 17721                   |\n+-------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"HLL_UNION_AGG,HLL,UNION,AGG"})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},o=i.createContext(s);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);