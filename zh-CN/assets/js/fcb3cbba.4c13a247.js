"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["822179"],{540263:function(n,e,a){a.r(e),a.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>r,toc:()=>h,frontMatter:()=>t});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode_map","title":"EXPLODE_MAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/explode_map.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode_map","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode_map","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE_MAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_SPLIT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-split"},"next":{"title":"EXPLODE_BITMAP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-bitmap"}}'),l=a("785893"),i=a("250065");let t={title:"EXPLODE_MAP",language:"zh-CN"},o=void 0,r={},h=[{value:"explode_map",id:"explode_map",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"explode_map",children:"explode_map"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.p,{children:"\u8868\u51FD\u6570\uFF0C\u9700\u914D\u5408 Lateral View \u4F7F\u7528, \u53EF\u4EE5\u652F\u6301\u591A\u4E2A Lateral view, \u4EC5\u4EC5\u652F\u6301\u65B0\u4F18\u5316\u5668\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5C06 map \u5217\u5C55\u5F00\u6210\u591A\u884C\u3002\u5F53 map \u4E3ANULL\u6216\u8005\u4E3A\u7A7A\u65F6\uFF0C",(0,l.jsx)(e.code,{children:"explode_map_outer"})," \u8FD4\u56DENULL\u3002\n",(0,l.jsx)(e.code,{children:"explode_map"})," \u548C ",(0,l.jsx)(e.code,{children:"explode_map_outer"})," \u5747\u4F1A\u8FD4\u56DE map \u5185\u90E8\u7684NULL\u5143\u7D20\u3002"]}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"explode_map(expr)\nexplode_map_outer(expr)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-mysql>",metastring:"SET enable_nereids_planner=true",children:'mysql> SET enable_fallback_to_original_planner=false\n\nmysql> CREATE TABLE IF NOT EXISTS `sdu`(\n                   `id` INT NULL,\n                   `name` TEXT NULL,\n                   `score` MAP<TEXT,INT> NULL\n                 ) ENGINE=OLAP\n                 DUPLICATE KEY(`id`)\n                 COMMENT \'OLAP\'\n                 DISTRIBUTED BY HASH(`id`) BUCKETS 1\n                 PROPERTIES ("replication_allocation" = "tag.location.default: 1");\nQuery OK, 0 rows affected (0.15 sec)\n\nmysql> insert into sdu values (0, "zhangsan", {"Chinese":"80","Math":"60","English":"90"}), (1, "lisi", {"null":null}), (2, "wangwu", {"Chinese":"88","Math":"90","English":"96"}), (3, "lisi2", {null:null}), (4, "amory", NULL);\nQuery OK, 5 rows affected (0.23 sec)\n{\'label\':\'label_9b35d9d9d59147f5_bffb974881ed2133\', \'status\':\'VISIBLE\', \'txnId\':\'4005\'}\n\nmysql> select * from sdu order by id;\n+------+----------+-----------------------------------------+\n| id   | name     | score                                   |\n+------+----------+-----------------------------------------+\n|    0 | zhangsan | {"Chinese":80, "Math":60, "English":90} |\n|    1 | lisi     | {"null":null}                           |\n|    2 | wangwu   | {"Chinese":88, "Math":90, "English":96} |\n|    3 | lisi2    | {null:null}                             |\n|    4 | amory    | NULL                                    |\n+------+----------+-----------------------------------------+\n\nmysql> select name, k,v from sdu lateral view explode_map(score) tmp as k,v;\n+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n+----------+---------+------+\n\nmysql> select name, k,v from sdu lateral view explode_map_outer(score) tmp as k,v;\n+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n| amory    | NULL    | NULL |\n+----------+---------+------+\n\nmysql> select name, k,v,k1,v1 from sdu lateral view explode_map_outer(score) tmp as k,v lateral view explode_map(score) tmp2 as k1,v1;\n+----------+---------+------+---------+------+\n| name     | k       | v    | k1      | v1   |\n+----------+---------+------+---------+------+\n| zhangsan | Chinese |   80 | Chinese |   80 |\n| zhangsan | Chinese |   80 | Math    |   60 |\n| zhangsan | Chinese |   80 | English |   90 |\n| zhangsan | Math    |   60 | Chinese |   80 |\n| zhangsan | Math    |   60 | Math    |   60 |\n| zhangsan | Math    |   60 | English |   90 |\n| zhangsan | English |   90 | Chinese |   80 |\n| zhangsan | English |   90 | Math    |   60 |\n| zhangsan | English |   90 | English |   90 |\n| lisi     | null    | NULL | null    | NULL |\n| wangwu   | Chinese |   88 | Chinese |   88 |\n| wangwu   | Chinese |   88 | Math    |   90 |\n| wangwu   | Chinese |   88 | English |   96 |\n| wangwu   | Math    |   90 | Chinese |   88 |\n| wangwu   | Math    |   90 | Math    |   90 |\n| wangwu   | Math    |   90 | English |   96 |\n| wangwu   | English |   96 | Chinese |   88 |\n| wangwu   | English |   96 | Math    |   90 |\n| wangwu   | English |   96 | English |   96 |\n| lisi2    | NULL    | NULL | NULL    | NULL |\n+----------+---------+------+---------+------+\n'})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"EXPLODE_MAP,EXPLODE_MAP_OUTER,MAP"})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return o},a:function(){return t}});var s=a(667294);let l={},i=s.createContext(l);function t(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);