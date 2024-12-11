"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["658964"],{322324:function(n,e,i){i.r(e),i.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/is-ipv4-string","title":"IS_IPV4_STRING","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/ip-functions/is-ipv4-string.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/is-ipv4-string","permalink":"/docs/sql-manual/sql-functions/ip-functions/is-ipv4-string","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IS_IPV4_STRING","language":"en"},"sidebar":"docs","previous":{"title":"IS_IP_ADDRESS_IN_RANGE","permalink":"/docs/sql-manual/sql-functions/ip-functions/is-ip-address-in-range"},"next":{"title":"IS_IPV6_STRING","permalink":"/docs/sql-manual/sql-functions/ip-functions/is-ipv6-string"}}'),t=i("785893"),r=i("250065");let l={title:"IS_IPV4_STRING",language:"en"},a=void 0,o={},c=[{value:"IS_IPV4_STRING",id:"is_ipv4_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"is_ipv4_string",children:"IS_IPV4_STRING"}),"\n",(0,t.jsx)(e.p,{children:"IS_IPV4_STRING"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"BOOLEAN IS_IPV4_STRING(STRING ipv4_str)"})}),"\n",(0,t.jsx)(e.p,{children:"Receive an IPv4 address in the form of a string as a parameter. If it is a correctly formatted and valid IPv4 address, return true; On the contrary, return false."}),"\n",(0,t.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"If the input parameter is NULL, return NULL, indicating invalid input"})}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"mysql> select is_ipv4_string(NULL);\n+----------------------+\n| is_ipv4_string(NULL) |\n+----------------------+\n|                 NULL |\n+----------------------+\n\nmysql> CREATE TABLE `test_is_ipv4_string` (\n      `id` int,\n      `ip_v4` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \nmysql> insert into test_is_ipv4_string values(0, NULL), (1, '0.0.0.'), (2, ''), (3, '.'), (4, '255.255.255.255');\n\nmysql> select id, is_ipv4_string(ip_v4) from test_is_ipv4_string order by id;\n+------+-----------------------+\n| id   | is_ipv4_string(ip_v4) |\n+------+-----------------------+\n|    0 |                  NULL |\n|    1 |                     0 |\n|    2 |                     0 |\n|    3 |                     0 |\n|    4 |                     1 |\n+------+-----------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(e.p,{children:"IS_IPV4_STRING, IP"})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return l}});var s=i(667294);let t={},r=s.createContext(t);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);