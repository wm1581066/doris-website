"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["647189"],{16539:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>i,frontMatter:()=>o});var r=JSON.parse('{"id":"sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE","title":"DROP-ROLE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE.md","sourceDirName":"sql-manual/sql-reference/Account-Management-Statements","slug":"/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DROP-ROLE","language":"en"},"sidebar":"docs","previous":{"title":"REVOKE","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},"next":{"title":"DROP-USER","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"}}'),s=t("785893"),l=t("250065");let o={title:"DROP-ROLE",language:"en"},a=void 0,c={},i=[{value:"DROP-ROLE",id:"drop-role",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"drop-role",children:"DROP-ROLE"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The statement user removes a role"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"  DROP ROLE [IF EXISTS] role1;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Deleting a role does not affect the permissions of users who previously belonged to the role. It is only equivalent to decoupling the role from the user. The permissions that the user has obtained from the role will not change"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Drop a role1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP ROLE role1;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DROP, ROLE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},l=r.createContext(s);function o(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);