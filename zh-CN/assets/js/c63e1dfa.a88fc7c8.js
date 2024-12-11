"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["2979"],{573877:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/corr","title":"CORR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/corr.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/corr","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/corr","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CORR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COVAR_SAMP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/covar-samp"},"next":{"title":"TOPN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/topn"}}'),r=t("785893"),o=t("250065");let i={title:"CORR",language:"zh-CN"},l=void 0,c={},a=[{value:"CORR",id:"corr",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"corr",children:"CORR"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:" double corr(x, y)"})}),"\n",(0,r.jsx)(n.p,{children:"\u8BA1\u7B97\u76AE\u5C14\u900A\u7CFB\u6570, \u5373\u8FD4\u56DE\u7ED3\u679C\u4E3A: x\u548Cy\u7684\u534F\u65B9\u5DEE\uFF0C\u9664x\u548Cy\u7684\u6807\u51C6\u5DEE\u4E58\u79EF\u3002\n\u5982\u679Cx\u6216y\u7684\u6807\u51C6\u5DEE\u4E3A0, \u5C06\u8FD4\u56DE0\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select corr(x,y) from baseall;\n+---------------------+\n| corr(x, y)          |\n+---------------------+\n| 0.89442719099991586 |\n+---------------------+\n1 row in set (0.21 sec)\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"CORR"})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);