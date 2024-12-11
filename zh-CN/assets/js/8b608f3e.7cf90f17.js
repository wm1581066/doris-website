"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["789588"],{157491:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap_union","title":"BITMAP_UNION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/bitmap_union.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap_union","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/bitmap_union","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"BITMAP_UNION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAX_BY","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/max_by"},"next":{"title":"group_bitmap_xor","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor"}}'),a=i("785893"),s=i("250065");let r={title:"BITMAP_UNION",language:"zh-CN"},l=void 0,d={},c=[{value:"BITMAP_UNION",id:"bitmap_union",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"Create table",id:"create-table",level:4},{value:"Data Load",id:"data-load",level:4},{value:"Stream Load",id:"stream-load",level:5},{value:"Insert Into",id:"insert-into",level:5},{value:"Data Query",id:"data-query",level:4},{value:"Syntax",id:"syntax",level:5},{value:"Example",id:"example-1",level:5},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"bitmap_union",children:"BITMAP_UNION"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.h4,{id:"create-table",children:"Create table"}),"\n",(0,a.jsx)(n.p,{children:"\u5EFA\u8868\u65F6\u9700\u8981\u4F7F\u7528\u805A\u5408\u6A21\u578B\uFF0C\u6570\u636E\u7C7B\u578B\u662F bitmap , \u805A\u5408\u51FD\u6570\u662F bitmap_union"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'CREATE TABLE `pv_bitmap` (\n  `dt` int(11) NULL COMMENT "",\n  `page` varchar(10) NULL COMMENT "",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`dt`, `page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`dt`) BUCKETS 2;\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\uFF1A\u5F53\u6570\u636E\u91CF\u5F88\u5927\u65F6\uFF0C\u6700\u597D\u4E3A\u9AD8\u9891\u7387\u7684 bitmap_union \u67E5\u8BE2\u5EFA\u7ACB\u5BF9\u5E94\u7684 rollup \u8868"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"data-load",children:"Data Load"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TO_BITMAP(expr)"})," : \u5C06 0 ~ 18446744073709551615 \u7684 unsigned bigint \u8F6C\u4E3A bitmap"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_EMPTY()"}),": \u751F\u6210\u7A7A bitmap \u5217\uFF0C\u7528\u4E8E insert \u6216\u5BFC\u5165\u7684\u65F6\u586B\u5145\u9ED8\u8BA4\u503C"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_HASH(expr)"}),"\u6216\u8005",(0,a.jsx)(n.code,{children:"BITMAP_HASH64(expr)"}),": \u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u5217\u901A\u8FC7 Hash \u7684\u65B9\u5F0F\u8F6C\u4E3A bitmap"]}),"\n",(0,a.jsx)(n.h5,{id:"stream-load",children:"Stream Load"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=bitmap_hash(user_id)"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,a.jsx)(n.h5,{id:"insert-into",children:"Insert Into"}),"\n",(0,a.jsx)(n.p,{children:"id2 \u7684\u5217\u7C7B\u578B\u662F bitmap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, id2 from bitmap_table2;\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2 \u7684\u5217\u7C7B\u578B\u662F bitmap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap(1000)), (1001, to_bitmap(2000));\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2 \u7684\u5217\u7C7B\u578B\u662F bitmap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, bitmap_union(id2) from bitmap_table2 group by id;\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2 \u7684\u5217\u7C7B\u578B\u662F int"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, to_bitmap(id2) from table;\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2 \u7684\u5217\u7C7B\u578B\u662F String"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, bitmap_hash(id_string) from table;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"data-query",children:"Data Query"}),"\n",(0,a.jsx)(n.h5,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION(expr)"})," : \u8BA1\u7B97\u8F93\u5165 Bitmap \u7684\u5E76\u96C6\uFF0C\u8FD4\u56DE\u65B0\u7684bitmap"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION_COUNT(expr)"}),": \u8BA1\u7B97\u8F93\u5165 Bitmap \u7684\u5E76\u96C6\uFF0C\u8FD4\u56DE\u5176\u57FA\u6570\uFF0C\u548C BITMAP_COUNT(BITMAP_UNION(expr)) \u7B49\u4EF7\u3002\u76EE\u524D\u63A8\u8350\u4F18\u5148\u4F7F\u7528 BITMAP_UNION_COUNT \uFF0C\u5176\u6027\u80FD\u4F18\u4E8E BITMAP_COUNT(BITMAP_UNION(expr))"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION_INT(expr)"})," : \u8BA1\u7B97 TINYINT,SMALLINT \u548C INT \u7C7B\u578B\u7684\u5217\u4E2D\u4E0D\u540C\u503C\u7684\u4E2A\u6570\uFF0C\u8FD4\u56DE\u503C\u548C\nCOUNT(DISTINCT expr) \u76F8\u540C"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"INTERSECT_COUNT(bitmap_column_to_count, filter_column, filter_values ...)"})," : \u8BA1\u7B97\u6EE1\u8DB3\nfilter_column \u8FC7\u6EE4\u6761\u4EF6\u7684\u591A\u4E2A bitmap \u7684\u4EA4\u96C6\u7684\u57FA\u6570\u503C\u3002\nbitmap_column_to_count \u662F bitmap \u7C7B\u578B\u7684\u5217\uFF0Cfilter_column \u662F\u53D8\u5316\u7684\u7EF4\u5EA6\u5217\uFF0Cfilter_values \u662F\u7EF4\u5EA6\u53D6\u503C\u5217\u8868"]}),"\n",(0,a.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"\u4E0B\u9762\u7684 SQL \u4EE5\u4E0A\u9762\u7684 pv_bitmap table \u4E3A\u4F8B\uFF1A"}),"\n",(0,a.jsx)(n.p,{children:"\u8BA1\u7B97 user_id \u7684\u53BB\u91CD\u503C\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select bitmap_union_count(user_id) from pv_bitmap;\n\nselect bitmap_count(bitmap_union(user_id)) from pv_bitmap;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8BA1\u7B97 id \u7684\u53BB\u91CD\u503C\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select bitmap_union_int(id) from pv_bitmap;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8BA1\u7B97 user_id \u7684 \u7559\u5B58:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select intersect_count(user_id, page, 'meituan') as meituan_uv,\nintersect_count(user_id, page, 'waimai') as waimai_uv,\nintersect_count(user_id, page, 'meituan', 'waimai') as retention //\u5728 'meituan' \u548C 'waimai' \u4E24\u4E2A\u9875\u9762\u90FD\u51FA\u73B0\u7684\u7528\u6237\u6570\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.p,{children:"BITMAP,BITMAP_COUNT,BITMAP_EMPTY,BITMAP_UNION,BITMAP_UNION_INT,TO_BITMAP,BITMAP_UNION_COUNT,INTERSECT_COUNT"})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var t=i(667294);let a={},s=t.createContext(a);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);