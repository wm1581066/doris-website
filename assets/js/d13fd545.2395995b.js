"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["621711"],{760181:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SYNC","title":"SYNC","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/load-and-export/SYNC.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SYNC","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/SYNC","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SYNC","language":"en"},"sidebar":"docs","previous":{"title":"SHOW SYNC JOB","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-SYNC-JOB"},"next":{"title":"EXPORT","permalink":"/docs/sql-manual/sql-statements/data-modification/load-and-export/EXPORT"}}'),s=n("785893"),o=n("250065");let i={title:"SYNC",language:"en"},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Used to synchronize metadata for fe non-master nodes. doris only master node can write fe metadata, other fe nodes write metadata operations will be forwarded to master. After master finishes metadata writing operation, there will be a short delay for non-master nodes to replay metadata, you can use this statement to synchronize metadata."}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SYNC;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Synchronized metadata:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SYNC;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SYNC\n"})}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var a=n(667294);let s={},o=a.createContext(s);function i(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);