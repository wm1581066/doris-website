"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["398028"],{188497:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>c,assets:()=>d,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-data-types/ip/IPV4","title":"IPV4","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-data-types/ip/IPV4.md","sourceDirName":"sql-manual/sql-data-types/ip","slug":"/sql-manual/sql-data-types/ip/IPV4","permalink":"/docs/2.0/sql-manual/sql-data-types/ip/IPV4","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"IPV4","language":"en"},"sidebar":"docs","previous":{"title":"AGG_STATE","permalink":"/docs/2.0/sql-manual/sql-data-types/aggregate/AGG-STATE"},"next":{"title":"IPV6","permalink":"/docs/2.0/sql-manual/sql-data-types/ip/IPV6"}}'),i=t("785893"),l=t("250065");let a={title:"IPV4",language:"en"},r=void 0,d={},o=[{value:"IPV4",id:"ipv4",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"ipv4",children:"IPV4"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.p,{children:"IPv4 type, stored in the form of UInt32 in 4 bytes, used to represent IPv4 addresses.\nThe range of values is ['0.0.0.0', '255.255.255.255']."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Inputs that exceed the value range or have invalid format will return NULL"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"Create table example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'CREATE TABLE ipv4_test (\n  `id` int,\n  `ip_v4` ipv4\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Insert data example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"insert into ipv4_test values(1, '0.0.0.0');\ninsert into ipv4_test values(2, '127.0.0.1');\ninsert into ipv4_test values(3, '59.50.185.152');\ninsert into ipv4_test values(4, '255.255.255.255');\ninsert into ipv4_test values(5, '255.255.255.256'); // invalid data\n"})}),"\n",(0,i.jsx)(n.p,{children:"Select data example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from ipv4_test order by id;\n+------+-----------------+\n| id   | ip_v4           |\n+------+-----------------+\n|    1 | 0.0.0.0         |\n|    2 | 127.0.0.1       |\n|    3 | 59.50.185.152   |\n|    4 | 255.255.255.255 |\n|    5 | NULL            |\n+------+-----------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"IPV4"})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);