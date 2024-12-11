"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["557391"],{796415:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>r});var a=JSON.parse('{"id":"data-operate/delete/truncate-manual","title":"Deleting Data with TRUNCATE Command","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/delete/truncate-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/truncate-manual","permalink":"/docs/data-operate/delete/truncate-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Deleting Data with TRUNCATE Command","language":"en"},"sidebar":"docs","previous":{"title":"Batch Deletion","permalink":"/docs/data-operate/delete/batch-delete-manual"},"next":{"title":"Replacing Atomic Table","permalink":"/docs/data-operate/delete/atomicity-replace"}}'),l=n("785893"),i=n("250065");let r={title:"Deleting Data with TRUNCATE Command",language:"en"},s="Truncate",d={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"truncate",children:"Truncate"})}),"\n",(0,l.jsx)(t.p,{children:"This statement is used to clear the data of a specified table or partition in Doris"}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"This statement only clears the data within a table or partition but preserves the table or partition itself."}),"\n",(0,l.jsx)(t.li,{children:"Unlike DELETE, this statement can only clear the specified table or partition as a whole and cannot be added with filter conditions."}),"\n",(0,l.jsx)(t.li,{children:"Unlike DELETE, truncating data will not affect query performance."}),"\n",(0,l.jsxs)(t.li,{children:["The data deleted by this operation can be recovered through the RECOVER statement(for a period of time). See ",(0,l.jsx)(t.a,{href:"../../../../sql-manual/sql-statements/recycle/RECOVER",children:"RECOVER"})," statement for details. If you execute command with FORCE, the data will be deleted directly and cannot be recovered, this operation is generally not recommended."]}),"\n",(0,l.jsx)(t.li,{children:"When using this command, the table status must be NORMAL, which means that tables undergoing SCHEMA CHANGE can not be truncated."}),"\n",(0,l.jsx)(t.li,{children:"This command may cause ongoing imports to fail."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Truncate the table ",(0,l.jsx)(t.code,{children:"tbl"})," under ",(0,l.jsx)(t.code,{children:"example_db"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsxs)(t.li,{children:["Truncate partitions ",(0,l.jsx)(t.code,{children:"p1"})," and ",(0,l.jsx)(t.code,{children:"p2"})," of table ",(0,l.jsx)(t.code,{children:"tbl"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(667294);let l={},i=a.createContext(l);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);