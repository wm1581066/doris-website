"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["355604"],{661923:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/mask/mask","title":"MASK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/mask/mask.md","sourceDirName":"sql-manual/sql-functions/string-functions/mask","slug":"/sql-manual/sql-functions/string-functions/mask/","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/mask/","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MASK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MULTI_MATCH_ANY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/search/multi-match-any"},"next":{"title":"MASK_FIRST_N","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/mask/mask-first-n"}}'),a=s("785893"),i=s("250065");let l={title:"MASK",language:"zh-CN"},r=void 0,o={},c=[{value:"mask",id:"mask",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"mask",children:"mask"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"VARCHAR mask(VARCHAR str[, VARCHAR upper[, VARCHAR lower[, VARCHAR number]]])"})}),"\n",(0,a.jsx)(e.p,{children:'\u8FD4\u56DE str \u7684\u63A9\u7801\u7248\u672C\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5927\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u201CX\u201D\uFF0C\u5C0F\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u201Cx\u201D\uFF0C\u6570\u5B57\u8F6C\u6362\u4E3A\u201Cn\u201D\u3002 \u4F8B\u5982 mask("abcd-EFGH-8765-4321") \u7ED3\u679C\u4E3A xxxx-XXXX-nnnn-nnnn\u3002 \u60A8\u53EF\u4EE5\u901A\u8FC7\u63D0\u4F9B\u9644\u52A0\u53C2\u6570\u6765\u8986\u76D6\u63A9\u7801\u4E2D\u4F7F\u7528\u7684\u5B57\u7B26\uFF1A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u63A7\u5236\u5927\u5199\u5B57\u6BCD\u7684\u63A9\u7801\u5B57\u7B26\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u63A7\u5236\u5C0F\u5199\u5B57\u6BCD\uFF0C\u7B2C\u56DB\u4E2A\u53C2\u6570\u63A7\u5236\u6570\u5B57\u3002 \u4F8B\u5982\uFF0Cmask("abcd-EFGH-8765-4321", "U", "l", "#") \u4F1A\u5F97\u5230 llll-UUUU-####-####\u3002'}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"// table test\n+-----------+\n| name      |\n+-----------+\n| abc123EFG |\n| NULL      |\n| 456AbCdEf |\n+-----------+\n\nmysql> select mask(name) from test;\n+--------------+\n| mask(`name`) |\n+--------------+\n| xxxnnnXXX    |\n| NULL         |\n| nnnXxXxXx    |\n+--------------+\n\nmysql> select mask(name, '*', '#', '$') from test;\n+-----------------------------+\n| mask(`name`, '*', '#', '$') |\n+-----------------------------+\n| ###$$$***                   |\n| NULL                        |\n| $$$*#*#*#                   |\n+-----------------------------+\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mask\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);