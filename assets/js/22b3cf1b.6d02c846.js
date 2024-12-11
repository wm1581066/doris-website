"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["961188"],{411622:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/rtrim","title":"RTRIM","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/rtrim.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/rtrim","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/rtrim","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RTRIM","language":"en"},"sidebar":"docs","previous":{"title":"LTRIM","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/ltrim"},"next":{"title":"NULL_OR_EMPTY","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/null-or-empty"}}'),s=t("785893"),i=t("250065");let l={title:"RTRIM",language:"en"},o=void 0,a={},c=[{value:"rtrim",id:"rtrim",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"rtrim",children:"rtrim"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR rtrim(VARCHAR str[, VARCHAR rhs])"})}),"\n",(0,s.jsx)(n.p,{children:"When the 'rhs' parameter is not present, remove the continuous spaces that appear from the ending of the 'str' parameter. Otherwise, remove 'rhs'."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> SELECT rtrim('ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT rtrim('ababccaab','ab') str;\n+---------+\n| str     |\n+---------+\n| ababcca |\n+---------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"RTRIM\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);