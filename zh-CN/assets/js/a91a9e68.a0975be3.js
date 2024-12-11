"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["812115"],{335290:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/parse-url","title":"PARSE_URL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/parse-url.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/parse-url","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/parse-url","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"PARSE_URL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NGRAM_SEARCH","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/ngram-search"},"next":{"title":"QUOTE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/quote"}}'),t=s("785893"),i=s("250065");let l={title:"PARSE_URL",language:"zh-CN"},a=void 0,o={},c=[{value:"parse_url",id:"parse_url",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"keywords",id:"keywords",level:3}];function u(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"parse_url",children:"parse_url"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"VARCHAR  parse_url(VARCHAR url, VARCHAR  name)"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728url\u89E3\u6790\u51FAname\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0Cname\u53EF\u9009\u9879\u4E3A\uFF1A'PROTOCOL', 'HOST', 'PATH', 'REF', 'AUTHORITY', 'FILE', 'USERINFO', 'PORT', 'QUERY'\uFF0C\u5C06\u7ED3\u679C\u8FD4\u56DE\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> SELECT parse_url ('https://doris.apache.org/', 'HOST');\n+------------------------------------------------+\n| parse_url('https://doris.apache.org/', 'HOST') |\n+------------------------------------------------+\n| doris.apache.org                               |\n+------------------------------------------------+\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679C\u60F3\u83B7\u53D6 QUERY \u4E2D\u7684\u7279\u5B9A\u53C2\u6570\uFF0C\u53EF\u4F7F\u7528",(0,t.jsx)(e.a,{href:"./extract_url_parameter.md",children:"extract_url_parameter"}),"\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"PARSE URL\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);