"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["340544"],{565931:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>c,toc:()=>h,frontMatter:()=>d});var s=JSON.parse('{"id":"admin-manual/system-tables/mysql/user","title":"user","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/system-tables/mysql/user.md","sourceDirName":"admin-manual/system-tables/mysql","slug":"/admin-manual/system-tables/mysql/user","permalink":"/docs/admin-manual/system-tables/mysql/user","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"user","language":"en"},"sidebar":"docs","previous":{"title":"procs_priv","permalink":"/docs/admin-manual/system-tables/mysql/props_priv"},"next":{"title":"audit_log","permalink":"/docs/admin-manual/system-tables/internal_schema/audit_log"}}'),t=r("785893"),i=r("250065");let d={title:"user",language:"en"},l=void 0,c={},h=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}];function a(n){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(e.p,{children:"View all user information."}),"\n",(0,t.jsx)(e.h2,{id:"database",children:"Database"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"mysql"})}),"\n",(0,t.jsx)(e.h2,{id:"table-information",children:"Table Information"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Column Name"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"host"}),(0,t.jsx)(e.td,{children:"character(255)"}),(0,t.jsx)(e.td,{children:"The host from which the user is allowed to connect."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"user"}),(0,t.jsx)(e.td,{children:"char(32)"}),(0,t.jsx)(e.td,{children:"Username."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"node_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Node privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"admin_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Admin privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"grant_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Grant privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"select_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Select privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"load_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Load privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"alter_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Alter privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Create privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"drop_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Drop privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"usage_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Usage privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"show_view_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Show View privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cluster_usage_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Cluster usage privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"stage_usage_priv"}),(0,t.jsx)(e.td,{children:"char(1)"}),(0,t.jsx)(e.td,{children:"Whether the user has Stage usage privileges."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ssl_type"}),(0,t.jsx)(e.td,{children:"char(9)"}),(0,t.jsx)(e.td,{children:"Always empty, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ssl_cipher"}),(0,t.jsx)(e.td,{children:"varchar(65533)"}),(0,t.jsx)(e.td,{children:"Always empty, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"x509_issuer"}),(0,t.jsx)(e.td,{children:"varchar(65533)"}),(0,t.jsx)(e.td,{children:"Always empty, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"x509_subject"}),(0,t.jsx)(e.td,{children:"varchar(65533)"}),(0,t.jsx)(e.td,{children:"Always empty, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"max_questions"}),(0,t.jsx)(e.td,{children:"bigint"}),(0,t.jsx)(e.td,{children:"Always 0, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"max_updates"}),(0,t.jsx)(e.td,{children:"bigint"}),(0,t.jsx)(e.td,{children:"Always 0, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"max_connections"}),(0,t.jsx)(e.td,{children:"bigint"}),(0,t.jsx)(e.td,{children:"Always 0, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"max_user_connections"}),(0,t.jsx)(e.td,{children:"bigint"}),(0,t.jsx)(e.td,{children:"The maximum number of allowed connections."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"plugin"}),(0,t.jsx)(e.td,{children:"char(64)"}),(0,t.jsx)(e.td,{children:"Always empty, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"authentication_string"}),(0,t.jsx)(e.td,{children:"varchar(65533)"}),(0,t.jsx)(e.td,{children:"Always empty, for MySQL compatibility only."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.expiration_seconds"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{children:"Password expiration time."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.password_creation_time"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{children:"Password creation time."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.history_num"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{children:"Number of historical passwords."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.history_passwords"}),(0,t.jsx)(e.td,{children:"varchar(65533)"}),(0,t.jsx)(e.td,{children:"Historical passwords."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.num_failed_login"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{children:"Allowed number of consecutive login failures."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.password_lock_seconds"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{children:"Password lock time after triggering lock."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.failed_login_counter"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{children:"Login failure count."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password_policy.lock_time"}),(0,t.jsx)(e.td,{children:"varchar(32)"}),(0,t.jsx)(e.td,{})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);