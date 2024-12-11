"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["506130"],{541908:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT","title":"ALTER-TABLE-COMMENT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER-TABLE-COMMENT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER-TABLE-PROPERTY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"},"next":{"title":"ALTER-TABLE-AND-GENERATED-COLUMN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN"}}'),s=t("785893"),a=t("250065");let i={title:"ALTER-TABLE-COMMENT",language:"zh-CN"},r=void 0,c={},o=[{value:"ALTER-TABLE-COMMENT",id:"alter-table-comment",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"alter-table-comment",children:"ALTER-TABLE-COMMENT"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ALTER TABLE COMMENT"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5BF9\u5DF2\u6709 table \u7684 comment \u8FDB\u884C\u4FEE\u6539\u3002\u8FD9\u4E2A\u64CD\u4F5C\u662F\u540C\u6B65\u7684\uFF0C\u547D\u4EE4\u8FD4\u56DE\u8868\u793A\u6267\u884C\u5B8C\u6BD5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539\u8868\u6CE8\u91CA"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MODIFY COMMENT "new table comment";\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u4FEE\u6539\u5217\u6CE8\u91CA"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MODIFY COLUMN col1 COMMENT "new column comment";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5C06\u540D\u4E3A table1 \u7684 comment \u4FEE\u6539\u4E3A table1_comment"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE table1 MODIFY COMMENT "table1_comment";\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5C06\u540D\u4E3A table1 \u7684 col1 \u5217\u7684 comment \u4FEE\u6539\u4E3A table1_col1_comment"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE table1 MODIFY COLUMN col1 COMMENT "table1_col1_comment";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, COMMENT, ALTER TABLE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);