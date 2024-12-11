"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["124136"],{962086:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>o,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/substr","title":"substr","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/substr.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/substr","permalink":"/docs/1.2/sql-manual/sql-functions/string-functions/substr","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"substr","language":"en"},"sidebar":"docs","previous":{"title":"concat_ws","permalink":"/docs/1.2/sql-manual/sql-functions/string-functions/concat_ws"},"next":{"title":"substring","permalink":"/docs/1.2/sql-manual/sql-functions/string-functions/substring"}}'),r=s("785893"),i=s("250065");let l={title:"substr",language:"en"},o=void 0,u={},c=[{value:"substr",id:"substr",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"substr",children:"substr"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"VARCHAR substr(VARCHAR content, INT start, INT length)"})}),"\n",(0,r.jsx)(e.p,{children:"Find a substring, return the part of the string described by the first parameter starting from start and having a length of len. The index of the first letter is 1."}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select substr(\"Hello doris\", 2, 1);\n+-----------------------------+\n| substr('Hello doris', 2, 1) |\n+-----------------------------+\n| e                           |\n+-----------------------------+\nmysql> select substr(\"Hello doris\", 1, 2);\n+-----------------------------+\n| substr('Hello doris', 1, 2) |\n+-----------------------------+\n| He                          |\n+-----------------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"SUBSTR\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);