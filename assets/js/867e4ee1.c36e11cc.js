"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["950241"],{280702:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/crc32","title":"CRC32","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/crc32.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/crc32","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/crc32","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CRC32","language":"en"},"sidebar":"docs","previous":{"title":"AUTO_PARTITION_NAME","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/auto-partition-name"},"next":{"title":"LENGTH","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/length"}}'),c=t("785893"),i=t("250065");let r={title:"CRC32",language:"en"},l=void 0,o={},a=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,c.jsx)(e.p,{children:"Use CRC32 to compute the result."}),"\n",(0,c.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"BIGINT crc32 (VARCHAR str)"})}),"\n",(0,c.jsx)(e.p,{children:"Returns the Cyclic Redundancy Check value of this string."}),"\n",(0,c.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"mysql> select crc32(\"abc\");\n+--------------+\n| crc32('abc') |\n+--------------+\n|    891568578 |\n+--------------+\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"CRC32\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var s=t(667294);let c={},i=s.createContext(c);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);