"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["529647"],{534444:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/replace","title":"replace","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/replace.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/replace","permalink":"/docs/1.2/sql-manual/sql-functions/string-functions/replace","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"replace","language":"en"},"sidebar":"docs","previous":{"title":"find_in_set","permalink":"/docs/1.2/sql-manual/sql-functions/string-functions/find_in_set"},"next":{"title":"left","permalink":"/docs/1.2/sql-manual/sql-functions/string-functions/left"}}'),i=t("785893"),l=t("250065");let r={title:"replace",language:"en"},c=void 0,o={},a=[{value:"replace",id:"replace",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"replace",children:"replace"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VARCHAR REPLACE (VARCHAR str, VARCHAR old, VARCHAR new)"})}),"\n",(0,i.jsx)(n.p,{children:"replace all old substring with new substring in str"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select replace(\"http://www.baidu.com:9090\", \"9090\", \"\");\n+------------------------------------------------------+\n| replace('http://www.baidu.com:9090', '9090', '') |\n+------------------------------------------------------+\n| http://www.baidu.com:                                |\n+------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"REPLACE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);