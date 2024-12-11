"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["222394"],{303345:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-length","title":"JSON_LENGTH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-length.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-length","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-length","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_LENGTH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_CONTAINS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-contains"},"next":{"title":"GET_JSON_DOUBLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-double"}}'),l=s("785893"),o=s("250065");let i={title:"JSON_LENGTH",language:"zh-CN"},r=void 0,c={},u=[{value:"json_length",id:"json_length",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"json_length",children:"json_length"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"INT json_length(JSON json_str)"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"INT json_length(JSON json_str, VARCHAR json_path)"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u6307\u5B9Apath\uFF0C\u8BE5JSON_LENGTH()\u51FD\u6570\u8FD4\u56DE\u4E0E JSON \u6587\u6863\u4E2D\u7684\u8DEF\u5F84\u5339\u914D\u7684\u6570\u636E\u7684\u957F\u5EA6\uFF0C\u5426\u5219\u8FD4\u56DE JSON \u6587\u6863\u7684\u957F\u5EA6\u3002\u8BE5\u51FD\u6570\u6839\u636E\u4EE5\u4E0B\u89C4\u5219\u8BA1\u7B97 JSON \u6587\u6863\u7684\u957F\u5EA6\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6807\u91CF\u7684\u957F\u5EA6\u4E3A 1\u3002\u4F8B\u5982: '1', '\"x\"', 'true', 'false', 'null' \u7684\u957F\u5EA6\u5747\u4E3A 1\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u6570\u7EC4\u5143\u7D20\u7684\u6570\u91CF\u3002\u4F8B\u5982: '[1, 2]' \u7684\u957F\u5EA6\u4E3A2\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5BF9\u8C61\u7684\u957F\u5EA6\u662F\u5BF9\u8C61\u6210\u5458\u7684\u6570\u91CF\u3002\u4F8B\u5982: '{\"x\": 1}' \u7684\u957F\u5EA6\u4E3A1"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> SELECT json_length(\'{"k1":"v31","k2":300}\');\n+--------------------------------------+\n| json_length(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.26 sec)\n\nmysql> SELECT json_length(\'"abc"\');\n+----------------------+\n| json_length(\'"abc"\') |\n+----------------------+\n|                    1 |\n+----------------------+\n1 row in set (0.17 sec)\n\nmysql> SELECT json_length(\'{"x": 1, "y": [1, 2]}\', \'$.y\');\n+---------------------------------------------+\n| json_length(\'{"x": 1, "y": [1, 2]}\', \'$.y\') |\n+---------------------------------------------+\n|                                           2 |\n+---------------------------------------------+\n1 row in set (0.07 sec)\n'})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"json,json_length"})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var t=s(667294);let l={},o=t.createContext(l);function i(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);