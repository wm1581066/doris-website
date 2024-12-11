"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["956826"],{853270:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>S,assets:()=>a,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES","title":"SHOW-RESOURCES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SHOW-RESOURCES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-TABLES","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TABLES"},"next":{"title":"SHOW-PARTITIONS","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS"}}'),r=s("785893"),t=s("250065");let i={title:"SHOW-RESOURCES",language:"zh-CN"},c=void 0,a={},o=[{value:"SHOW-RESOURCES",id:"show-resources",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"show-resources",children:"SHOW-RESOURCES"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"SHOW RESOURCES"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u7528\u6237\u6709\u4F7F\u7528\u6743\u9650\u7684\u8D44\u6E90\u3002\u666E\u901A\u7528\u6237\u4EC5\u80FD\u5C55\u793A\u6709\u4F7F\u7528\u6743\u9650\u7684\u8D44\u6E90\uFF0Croot \u6216 admin \u7528\u6237\u4F1A\u5C55\u793A\u6240\u6709\u7684\u8D44\u6E90\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES\n[\n  WHERE\n  [NAME [ = "your_resource_name" | LIKE "name_matcher"]]\n  [RESOURCETYPE = ["SPARK"]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u4F7F\u7528 NAME LIKE\uFF0C\u5219\u4F1A\u5339\u914D RESOURCES \u7684 Name \u5305\u542B name_matcher \u7684Resource"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u4F7F\u7528 NAME = \uFF0C\u5219\u7CBE\u786E\u5339\u914D\u6307\u5B9A\u7684 Name"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A\u4E86 RESOURCETYPE\uFF0C\u5219\u5339\u914D\u5BF9\u5E94\u7684 Resrouce \u7C7B\u578B"}),"\n",(0,r.jsx)(n.li,{children:"\u53EF\u4EE5\u4F7F\u7528 ORDER BY \u5BF9\u4EFB\u610F\u5217\u7EC4\u5408\u8FDB\u884C\u6392\u5E8F"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A\u4E86 LIMIT\uFF0C\u5219\u663E\u793A limit \u6761\u5339\u914D\u8BB0\u5F55\u3002\u5426\u5219\u5168\u90E8\u663E\u793A"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A\u4E86 OFFSET\uFF0C\u5219\u4ECE\u504F\u79FB\u91CF offset \u5F00\u59CB\u663E\u793A\u67E5\u8BE2\u7ED3\u679C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u504F\u79FB\u91CF\u4E3A0\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5C55\u793A\u5F53\u524D\u7528\u6237\u62E5\u6709\u6743\u9650\u7684\u6240\u6709 Resource"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW RESOURCES;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A Resource \uFF0CNAME \u4E2D\u5305\u542B\u5B57\u7B26\u4E32 "20140102"\uFF0C\u5C55\u793A10\u4E2A\u5C5E\u6027'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES WHERE NAME LIKE "2014_01_02" LIMIT 10;\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'\u5C55\u793A\u6307\u5B9A Resource \uFF0C\u6307\u5B9A NAME \u4E3A "20140102" \u5E76\u6309 KEY \u964D\u5E8F\u6392\u5E8F'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW RESOURCES WHERE NAME = "20140102" ORDER BY `KEY` DESC;\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW, RESOURCES\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function S(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var l=s(667294);let r={},t=l.createContext(r);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);