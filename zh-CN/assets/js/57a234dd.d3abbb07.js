"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["570767"],{701332:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>p,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp-replace","title":"REGEXP_REPLACE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/regexp-replace","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REGEXP_REPLACE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP_EXTRACT_ALL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all"},"next":{"title":"REGEXP_REPLACE_ONE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one"}}'),t=s("785893"),l=s("250065");let i={title:"REGEXP_REPLACE",language:"zh-CN"},a=void 0,c={},p=[{value:"regexp_replace",id:"regexp_replace",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"regexp_replace",children:"regexp_replace"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"VARCHAR regexp_replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)"})}),"\n",(0,t.jsx)(n.p,{children:"\u5BF9\u5B57\u7B26\u4E32 str \u8FDB\u884C\u6B63\u5219\u5339\u914D, \u5C06\u547D\u4E2D pattern \u7684\u90E8\u5206\u4F7F\u7528 repl \u6765\u8FDB\u884C\u66FF\u6362"}),"\n",(0,t.jsxs)(n.p,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"\\p{Han}"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT regexp_replace('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b-c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace('a b c','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace('a b c', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> c                                |\n+----------------------------------------+\n\nmysql> select regexp_replace('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\\\p{Han}+', '123');\n+---------------------------------------------------------------------------------------------+\n| regexp_replace('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\p{Han}+', '123')       |\n+---------------------------------------------------------------------------------------------+\n| 123This is a passage in English 1234567                                                     |\n+---------------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"REGEXP_REPLACE,REGEXP,REPLACE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);