"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["427553"],{378966:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/lpad","title":"LPAD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/lpad.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/lpad","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/lpad","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LPAD","language":"en"},"sidebar":"docs","previous":{"title":"CHAR_LENGTH","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/char-length"},"next":{"title":"RPAD","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/rpad"}}'),i=t("785893"),l=t("250065");let r={title:"LPAD",language:"en"},a=void 0,o={},c=[{value:"lpad",id:"lpad",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"lpad",children:"lpad"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR lpad (VARCHAR str, INT len, VARCHAR pad)"})}),"\n",(0,i.jsx)(e.p,{children:"Returns a string of length len in str, starting with the initials. If len is longer than str, pad characters are added to STR until the length of the string reaches len. If len is less than str's length, the function is equivalent to truncating STR strings and returning only strings of len's length. The len is character length not the bye size."}),"\n",(0,i.jsx)(e.p,{children:"Except when it contains a NULL in parameters, when pad's length is 0, the return value is the empty string."}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> SELECT lpad(\"hi\", 5, \"xy\");\n+---------------------+\n| lpad('hi', 5, 'xy') |\n+---------------------+\n| xyxhi               |\n+---------------------+\n\nmysql> SELECT lpad(\"hi\", 1, \"xy\");\n+---------------------+\n| lpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n\nmysql> SELECT lpad(\"\", 0, \"\");\n+-----------------+\n| lpad('', 0, '') |\n+-----------------+\n|                 |\n+-----------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"LPAD\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);