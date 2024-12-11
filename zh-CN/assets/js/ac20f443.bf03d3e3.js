"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["16956"],{921169:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var s=t(28048),r=t(785893),i=t(250065);let o={title:"Apache Doris version 2.0.10 has been released",description:"Thanks to our community users and developers, about 83 improvements and bug fixes have been made in Doris 2.0.10 version.",date:"2024-05-16",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.10.jpg"},a=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Improvements",id:"improvements",level:2},{value:"Credits",id:"credits",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Thanks to our community users and developers, about 83 improvements and bug fixes have been made in Doris 2.0.10 version."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Quick Download:"})," ",(0,r.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitHub\uFF1A"})," ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,r.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This enhancement introduces the ",(0,r.jsx)(n.code,{children:"read_only"})," and ",(0,r.jsx)(n.code,{children:"super_read_only"})," variables to the database system, ensuring compatibility with MySQL's read-only modes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When the check status is not IO_ERROR, the disk path should not be added to the broken list. This ensures that only disks with actual I/O errors are marked as broken."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When performing a Create Table As Select (CTAS) operation from an external table, convert the ",(0,r.jsx)(n.code,{children:"VARCHAR"})," column to ",(0,r.jsx)(n.code,{children:"STRING"})," type."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Support mapping Paimon column type "ROW" to Doris type "STRUCT"'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Choose disk tolerate with little skew when creating tablet"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Write editlog to ",(0,r.jsx)(n.code,{children:"set replica drop"})," to avoid confusing status on follower FE"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Make the schema change memory space adaptive to avoid memory over limit"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Inverted index 'unicode' tokenizer supports configuration to exclude stop words"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the complete list of improvements and bug fixes on ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.9...2.0.10",children:"GitHub"})," ."]}),"\n",(0,r.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(n.p,{children:"Thanks to all who contributed to this release"}),"\n",(0,r.jsx)(n.p,{children:"@airborne12, @BePPPower, @ByteYue, @CalvinKirs, @cambyzju, @csun5285, @dataroaring, @deardeng, @DongLiang-0, @eldenmoon, @felixwluo, @HappenLee, @hubgeter, @jackwener, @kaijchen, @kaka11chen, @Lchangliang, @liaoxin01, @LiBinfeng-01, @luennng, @morningman, @morrySnow, @Mryange, @nextdreamblue, @qidaye, @starocean999, @suxiaogang223, @SWJTU-ZhangLei, @w41ter, @xiaokang, @xy720, @yujun777, @Yukang-Lian, @zhangstar333, @zxealous, @zy-kkk, @zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},28048:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/release-note-2.0.10","source":"@site/blog/release-note-2.0.10.md","title":"Apache Doris version 2.0.10 has been released","description":"Thanks to our community users and developers, about 83 improvements and bug fixes have been made in Doris 2.0.10 version.","date":"2024-05-16T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/zh-CN/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris version 2.0.10 has been released","description":"Thanks to our community users and developers, about 83 improvements and bug fixes have been made in Doris 2.0.10 version.","date":"2024-05-16","author":"Apache Doris","tags":["Release Notes"],"image":"/images/2.0.10.jpg"},"unlisted":false,"prevItem":{"title":"Apache Doris 2.1.3 just released","permalink":"/zh-CN/blog/release-note-2.1.3"},"nextItem":{"title":"Multi-tenant workload isolation: a better balance between isolation and utilization","permalink":"/zh-CN/blog/multi-tenant-workload-isolation-in-apache-doris"}}')}}]);