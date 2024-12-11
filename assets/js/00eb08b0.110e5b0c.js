"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["883097"],{120498:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>x,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"admin-manual/system-tables/information_schema/partitions","title":"partitions","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/system-tables/information_schema/partitions.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/partitions","permalink":"/docs/3.0/admin-manual/system-tables/information_schema/partitions","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"partitions","language":"en"},"sidebar":"docs","previous":{"title":"parameters","permalink":"/docs/3.0/admin-manual/system-tables/information_schema/parameters"},"next":{"title":"processlist","permalink":"/docs/3.0/admin-manual/system-tables/information_schema/processlist"}}'),i=e("785893"),r=e("250065");let d={title:"partitions",language:"en"},l=void 0,a={},c=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}];function h(n){let t={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Show the Partition status of all tables in the database. Before 3.0.2(inclusive), the tables were always empty."}),"\n",(0,i.jsx)(t.h2,{id:"database",children:"Database"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"information_schema"})}),"\n",(0,i.jsx)(t.h2,{id:"table-information",children:"Table Information"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Column Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TABLE_CATALOG"}),(0,i.jsx)(t.td,{children:"varchar(64)"}),(0,i.jsx)(t.td,{children:"Catalog name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TABLE_SCHEMA"}),(0,i.jsx)(t.td,{children:"varchar(64)"}),(0,i.jsx)(t.td,{children:"Database name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TABLE_NAME"}),(0,i.jsx)(t.td,{children:"varchar(64)"}),(0,i.jsx)(t.td,{children:"Table name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PARTITION_NAME"}),(0,i.jsx)(t.td,{children:"varchar(64)"}),(0,i.jsx)(t.td,{children:"Partition name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUBPARTITION_NAME"}),(0,i.jsx)(t.td,{children:"varchar(64)"}),(0,i.jsx)(t.td,{children:"Always empty"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PARTITION_ORDINAL_POSITION"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Ordinal position of the partition"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUBPARTITION_ORDINAL_POSITION"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Always empty"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PARTITION_METHOD"}),(0,i.jsx)(t.td,{children:"varchar(13)"}),(0,i.jsx)(t.td,{children:"Partition method"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUBPARTITION_METHOD"}),(0,i.jsx)(t.td,{children:"varchar(13)"}),(0,i.jsx)(t.td,{children:"Always empty"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PARTITION_EXPRESSION"}),(0,i.jsx)(t.td,{children:"varchar(2048)"}),(0,i.jsx)(t.td,{children:"Partition expression"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SUBPARTITION_EXPRESSION"}),(0,i.jsx)(t.td,{children:"varchar(2048)"}),(0,i.jsx)(t.td,{children:"Always empty"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PARTITION_DESCRIPTION"}),(0,i.jsx)(t.td,{children:"text"}),(0,i.jsx)(t.td,{children:"Partition description"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TABLE_ROWS"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AVG_ROW_LENGTH"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DATA_LENGTH"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MAX_DATA_LENGTH"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"INDEX_LENGTH"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DATA_FREE"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CREATE_TIME"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UPDATE_TIME"}),(0,i.jsx)(t.td,{children:"datetime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CHECK_TIME"}),(0,i.jsx)(t.td,{children:"datetime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CHECKSUM"}),(0,i.jsx)(t.td,{children:"bigint"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PARTITION_COMMENT"}),(0,i.jsx)(t.td,{children:"text"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"NODEGROUP"}),(0,i.jsx)(t.td,{children:"varchar(256)"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TABLESPACE_NAME"}),(0,i.jsx)(t.td,{children:"varchar(268)"}),(0,i.jsx)(t.td,{})]})]})]})]})}function x(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return l},a:function(){return d}});var s=e(667294);let i={},r=s.createContext(i);function d(n){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);