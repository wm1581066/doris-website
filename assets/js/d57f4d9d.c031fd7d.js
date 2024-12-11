"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["324374"],{495377:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/view/SHOW-CREATE-VIEW","title":"SHOW CREATE VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/view/SHOW-CREATE-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/view","slug":"/sql-manual/sql-statements/table-and-view/view/SHOW-CREATE-VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/view/SHOW-CREATE-VIEW","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW CREATE VIEW","language":"en"},"sidebar":"docs","previous":{"title":"DROP VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/view/DROP-VIEW"},"next":{"title":"SHOW VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/view/SHOW-VIEW"}}'),i=n("785893"),l=n("250065");let a={title:"SHOW CREATE VIEW",language:"en"},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Result Description",id:"result-description",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Display the CREATE VIEW statement used to create the specified view."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SHOW CREATE VIEW <name>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"**<name>**"}),"  The name of the view to view."]}),"\n",(0,i.jsx)(t.h2,{id:"result-description",children:"Result Description"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"View: The name of the queried view."}),"\n",(0,i.jsx)(t.li,{children:"Create View: The persisted SQL statement in the database."}),"\n",(0,i.jsx)(t.li,{children:"character_set_client: The value of the character_set_client system variable in the session when the view was created."}),"\n",(0,i.jsx)(t.li,{children:"collation_connection: The value of the collation_connection system variable in the session when the view was created."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Users executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Privilege"}),(0,i.jsx)(t.th,{children:"Object"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SHOW_VIEW_PRIV"}),(0,i.jsx)(t.td,{children:"Table"}),(0,i.jsx)(t.td,{})]})})]}),"\n",(0,i.jsx)(t.p,{children:"View information can also be queried via the INFORMATION_SCHEMA.VIEWS table."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE VIEW vtest AS SELECT 1, 'test';\nSHOW CREATE VIEW vtest;\n"})}),"\n",(0,i.jsx)(t.p,{children:"Query result:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"+-------+------------------------------------------+----------------------+----------------------+\n| View  | Create View                              | character_set_client | collation_connection |\n+-------+------------------------------------------+----------------------+----------------------+\n| vtest | CREATE VIEW `vtest` AS SELECT 1, 'test'; | utf8mb4              | utf8mb4_0900_bin     |\n+-------+------------------------------------------+----------------------+----------------------+\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var s=n(667294);let i={},l=s.createContext(i);function a(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);