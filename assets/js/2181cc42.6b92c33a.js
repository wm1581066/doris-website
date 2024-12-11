"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["799549"],{819791:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB","title":"KILL ANALYZE JOB","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"KILL ANALYZE JOB","language":"en"},"sidebar":"docs","previous":{"title":"DROP ANALYZE JOB","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/DROP-ANALYZE-JOB"},"next":{"title":"SHOW ANALYZE","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-ANALYZE"}}'),i=n("785893"),a=n("250065");let l={title:"KILL ANALYZE JOB",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Access Control Requirements",id:"access-control-requirements",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Stop the statistical information collection job that is being executed in the background."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"KILL ANALYZE <job_id>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"<job_id>"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'Specifies the id of the job. You can obtain the job_id of the job by using SHOW ANALYZE. For detailed usage, please refer to the "SHOW ANALYZE" chapter.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,i.jsx)(t.p,{children:"None"}),"\n",(0,i.jsx)(t.h2,{id:"access-control-requirements",children:"Access Control Requirements"}),"\n",(0,i.jsx)(t.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Privilege (Privilege)"}),(0,i.jsx)(t.th,{children:"Object (Object)"}),(0,i.jsx)(t.th,{children:"Notes (Notes)"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELECT_PRIV"}),(0,i.jsx)(t.td,{children:"Table"}),(0,i.jsx)(t.td,{})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsx)(t.p,{children:"Jobs that have already been executed cannot be stopped."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Stop the statistical information job record with an id of 10036"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"kill analyze 10036\n"})})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let i={},a=s.createContext(i);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);