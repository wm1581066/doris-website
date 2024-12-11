"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["615411"],{582858:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/random","title":"RANDOM","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/random.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/random","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/random","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RANDOM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LEAST","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/least"},"next":{"title":"MOD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/mod"}}'),t=s("785893"),i=s("250065");let l={title:"RANDOM",language:"zh-CN"},c=void 0,o={},d=[{value:"random",id:"random",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"random",children:"random"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"DOUBLE random()"}),"\n\u8FD4\u56DE0-1\u4E4B\u95F4\u7684\u968F\u673A\u6570\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"DOUBLE random(DOUBLE seed)"}),"\n\u8FD4\u56DE0-1\u4E4B\u95F4\u7684\u968F\u673A\u6570\uFF0C\u4EE5",(0,t.jsx)(e.code,{children:"seed"}),"\u4F5C\u4E3A\u79CD\u5B50\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"BIGINT random(BIGINT a, BIGINT b)"}),"\n\u8FD4\u56DEa-b\u4E4B\u95F4\u7684\u968F\u673A\u6570\uFF0Ca\u5FC5\u987B\u5C0F\u4E8Eb\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u522B\u540D\uFF1A",(0,t.jsx)(e.code,{children:"rand"})]}),"\n",(0,t.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A\u6240\u6709\u53C2\u6570\u5FC5\u987B\u4E3A\u5E38\u91CF\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"mysql> select random();\n+---------------------+\n| random()            |\n+---------------------+\n| 0.35446706030596947 |\n+---------------------+\n\nmysql> select rand(1.2);\n+---------------------+\n| rand(1)             |\n+---------------------+\n| 0.13387664401253274 |\n+---------------------+\n1 row in set (0.13 sec)\n\nmysql> select rand(1.2);\n+---------------------+\n| rand(1)             |\n+---------------------+\n| 0.13387664401253274 |\n+---------------------+\n1 row in set (0.11 sec)\n\nmysql> select rand(-20, -10);\n+------------------+\n| random(-20, -10) |\n+------------------+\n|              -13 |\n+------------------+\n1 row in set (0.10 sec)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"RANDOM, RAND\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);