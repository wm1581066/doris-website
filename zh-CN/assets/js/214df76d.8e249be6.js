"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["388449"],{170562:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-data-types/aggregate/AGG-STATE","title":"AGG_STATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/aggregate/AGG-STATE.md","sourceDirName":"sql-manual/sql-data-types/aggregate","slug":"/sql-manual/sql-data-types/aggregate/AGG-STATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/aggregate/AGG-STATE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"AGG_STATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"QUANTILE_STATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/aggregate/QUANTILE-STATE"},"next":{"title":"IPV4","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/ip/IPV4"}}'),s=t("785893"),r=t("250065");let l={title:"AGG_STATE",language:"zh-CN"},c=void 0,i={},o=[{value:"AGG_STATE",id:"agg_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"agg_state",children:"AGG_STATE"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"AGG_STATE\u4E0D\u80FD\u4F5C\u4E3Akey\u5217\u4F7F\u7528\uFF0C\u5EFA\u8868\u65F6\u9700\u8981\u540C\u65F6\u58F0\u660E\u805A\u5408\u51FD\u6570\u7684\u7B7E\u540D\u3002\n\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u5B9E\u9645\u5B58\u50A8\u7684\u6570\u636E\u5927\u5C0F\u4E0E\u51FD\u6570\u5B9E\u73B0\u6709\u5173\u3002\n"})}),"\n",(0,s.jsxs)(n.p,{children:["AGG_STATE \u53EA\u80FD\u914D\u5408",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/state",children:"state"}),"\n/",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/merge",children:"merge"}),"/",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/union",children:"union"}),"\u51FD\u6570\u7EC4\u5408\u5668\u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u805A\u5408\u51FD\u6570\u7684\u7B7E\u540D\u4E5F\u662F\u7C7B\u578B\u7684\u4E00\u90E8\u5206\uFF0C\u4E0D\u540C\u7B7E\u540D\u7684 agg_state \u65E0\u6CD5\u6DF7\u5408\u4F7F\u7528\u3002\u6BD4\u5982\u5982\u679C\u5EFA\u8868\u58F0\u660E\u7684\u7B7E\u540D\u4E3A",(0,s.jsx)(n.code,{children:"max_by(int,int)"}),",\u90A3\u5C31\u65E0\u6CD5\u63D2\u5165",(0,s.jsx)(n.code,{children:"max_by(bigint,int)"}),"\u6216\u8005",(0,s.jsx)(n.code,{children:"group_concat(varchar)"}),"\u3002\n\u6B64\u5904 nullable \u5C5E\u6027\u4E5F\u662F\u7B7E\u540D\u7684\u4E00\u90E8\u5206\uFF0C\u5982\u679C\u80FD\u786E\u5B9A\u4E0D\u4F1A\u8F93\u5165 null \u503C\uFF0C\u53EF\u4EE5\u5C06\u53C2\u6570\u58F0\u660E\u4E3A not null\uFF0C\u8FD9\u6837\u53EF\u4EE5\u83B7\u5F97\u66F4\u5C0F\u7684\u5B58\u50A8\u5927\u5C0F\u548C\u51CF\u5C11\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u5F00\u9500\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u6CE8\u610F: \u56E0\u4E3A",(0,s.jsx)(n.code,{children:"agg_state"}),"\u5B58\u50A8\u7684\u662F\u805A\u5408\u51FD\u6570\u7684\u4E2D\u95F4\u7ED3\u679C\uFF0C\u6240\u4EE5\u8BFB\u5199\u8FC7\u7A0B\u90FD\u5F3A\u4F9D\u8D56\u4E8E\u805A\u5408\u51FD\u6570\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u5982\u679C\u5728Doris\u7248\u672C\u5347\u7EA7\u65F6\u5BF9\u805A\u5408\u51FD\u6570\u5B9E\u73B0\u505A\u4E86\u4FEE\u6539\uFF0C\u5219\u53EF\u80FD\u4F1A\u9020\u6210\u4E0D\u517C\u5BB9\u7684\u60C5\u51B5\u3002\u5982\u679C\u51FA\u73B0\u4E0D\u517C\u5BB9\u7684\u60C5\u51B5\uFF0C\u4F7F\u7528\u5230\u5BF9\u5E94",(0,s.jsx)(n.code,{children:"agg_state"}),"\u7684\u7269\u5316\u89C6\u56FE\u9700\u8981",(0,s.jsx)(n.code,{children:"drop"}),"\u5E76\u91CD\u65B0\u521B\u5EFA\uFF0C\u53E6\u5916\u6D89\u53CA\u5230\u7684\u57FA\u7840\u805A\u5408\u8868\u5219\u4F1A\u76F4\u63A5\u4E0D\u53EF\u7528\uFF0C\u6240\u4EE5\u9700\u8981\u614E\u91CD\u4F7F\u7528",(0,s.jsx)(n.code,{children:"agg_state"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"\u5EFA\u8868\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table a_table(\n    k1 int null,\n    k2 agg_state<max_by(int not null,int)> generic,\n    k3 agg_state<group_concat(string)> generic\n)\naggregate key (k1)\ndistributed BY hash(k1) buckets 3\nproperties("replication_num" = "1");\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u91CC\u7684 k2 \u548C k3 \u5206\u522B\u4EE5 max_by \u548C group_concat \u4E3A\u805A\u5408\u7C7B\u578B\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u63D2\u5165\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into a_table values(1,max_by_state(3,1),group_concat_state('a'));\ninsert into a_table values(1,max_by_state(2,2),group_concat_state('bb'));\ninsert into a_table values(2,max_by_state(1,3),group_concat_state('ccc'));\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5BF9\u4E8E agg_state \u5217\uFF0C\u63D2\u5165\u8BED\u53E5\u5FC5\u987B\u7528",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/state",children:"state"}),"\u51FD\u6570\u6765\u751F\u6210\u5BF9\u5E94\u7684 agg_state \u6570\u636E\uFF0C\u8FD9\u91CC\u7684\u51FD\u6570\u548C\u5165\u53C2\u7C7B\u578B\u90FD\u5FC5\u987B\u8DDF agg_state \u5B8C\u5168\u5BF9\u5E94\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql [test]>select k1,max_by_merge(k2),group_concat_merge(k3) from a_table group by k1 order by k1;\n+------+--------------------+--------------------------+\n| k1   | max_by_merge(`k2`) | group_concat_merge(`k3`) |\n+------+--------------------+--------------------------+\n|    1 |                  2 | bb,a                     |\n|    2 |                  1 | ccc                      |\n+------+--------------------+--------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u83B7\u53D6\u5B9E\u9645\u7ED3\u679C\uFF0C\u5219\u8981\u7528\u5BF9\u5E94\u7684",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/merge",children:"merge"}),"\u51FD\u6570\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql [test]>select max_by_merge(u2),group_concat_merge(u3) from (\n  select k1,max_by_union(k2) as u2,group_concat_union(k3) u3 from a_table group by k1 order by k1\n  ) t;\n+--------------------+--------------------------+\n| max_by_merge(`u2`) | group_concat_merge(`u3`) |\n+--------------------+--------------------------+\n|                  1 | ccc,bb,a                 |\n+--------------------+--------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u60F3\u8981\u5728\u8FC7\u7A0B\u4E2D\u53EA\u805A\u5408 agg_state \u800C\u4E0D\u83B7\u53D6\u5B9E\u9645\u7ED3\u679C\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,s.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/combinators/union",children:"union"}),"\u51FD\u6570\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66F4\u591A\u7684\u4F8B\u5B50\u53C2\u89C1",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/regression-test/suites/datatype_p0/agg_state",children:"datatype_p0/agg_state"})]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"AGG_STATE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var a=t(667294);let s={},r=a.createContext(s);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);