"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["216263"],{568619:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date-format","title":"DATE_FORMAT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/date-format.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date-format","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/date-format","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DATE_FORMAT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE_TRUNC","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/date-trunc"},"next":{"title":"DATEDIFF","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/datediff"}}'),d=t("785893"),r=t("250065");let i={title:"DATE_FORMAT",language:"zh-CN"},l=void 0,a={},c=[{value:"date_format",id:"date_format",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h2,{id:"date_format",children:"date_format"}),"\n",(0,d.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,d.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)"})}),"\n",(0,d.jsx)(e.p,{children:"\u5C06\u65E5\u671F\u7C7B\u578B\u6309\u7167format\u7684\u7C7B\u578B\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\uFF0C\n\u5F53\u524D\u652F\u6301\u6700\u5927128\u5B57\u8282\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u8FD4\u56DE\u503C\u957F\u5EA6\u8D85\u8FC7128\u5B57\u8282\uFF0C\u5219\u8FD4\u56DENULL\u3002"}),"\n",(0,d.jsx)(e.p,{children:"date \u53C2\u6570\u662F\u5408\u6CD5\u7684\u65E5\u671F\u3002format \u89C4\u5B9A\u65E5\u671F/\u65F6\u95F4\u7684\u8F93\u51FA\u683C\u5F0F\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u53EF\u4EE5\u4F7F\u7528\u7684\u683C\u5F0F\u6709\uFF1A"}),"\n",(0,d.jsx)(e.p,{children:"%a | \u7F29\u5199\u661F\u671F\u540D"}),"\n",(0,d.jsx)(e.p,{children:"%b | \u7F29\u5199\u6708\u540D"}),"\n",(0,d.jsx)(e.p,{children:"%c | \u6708\uFF0C\u6570\u503C"}),"\n",(0,d.jsx)(e.p,{children:"%D | \u5E26\u6709\u82F1\u6587\u524D\u7F00\u7684\u6708\u4E2D\u7684\u5929"}),"\n",(0,d.jsx)(e.p,{children:"%d | \u6708\u7684\u5929\uFF0C\u6570\u503C(00-31)"}),"\n",(0,d.jsx)(e.p,{children:"%e | \u6708\u7684\u5929\uFF0C\u6570\u503C(0-31)"}),"\n",(0,d.jsx)(e.p,{children:"%f | \u5FAE\u79D2"}),"\n",(0,d.jsx)(e.p,{children:"%H | \u5C0F\u65F6 (00-23)"}),"\n",(0,d.jsx)(e.p,{children:"%h | \u5C0F\u65F6 (01-12)"}),"\n",(0,d.jsx)(e.p,{children:"%I | \u5C0F\u65F6 (01-12)"}),"\n",(0,d.jsx)(e.p,{children:"%i | \u5206\u949F\uFF0C\u6570\u503C(00-59)"}),"\n",(0,d.jsx)(e.p,{children:"%j | \u5E74\u7684\u5929 (001-366)"}),"\n",(0,d.jsx)(e.p,{children:"%k | \u5C0F\u65F6 (0-23)"}),"\n",(0,d.jsx)(e.p,{children:"%l | \u5C0F\u65F6 (1-12)"}),"\n",(0,d.jsx)(e.p,{children:"%M | \u6708\u540D"}),"\n",(0,d.jsx)(e.p,{children:"%m | \u6708\uFF0C\u6570\u503C(00-12)"}),"\n",(0,d.jsx)(e.p,{children:"%p | AM \u6216 PM\uFF0C\u4EC5\u5728\u91C7\u752812\u5C0F\u65F6\u5236\u65F6\u53EF\u7528\u3002"}),"\n",(0,d.jsx)(e.p,{children:"%r | \u65F6\u95F4\uFF0C12-\u5C0F\u65F6\uFF08hh:mm:ss\uFF09\uFF0C\u53EF\u4EE5\u5305\u542B\u6216\u4E0D\u5305\u542BAM/PM\u3002"}),"\n",(0,d.jsx)(e.p,{children:"%S | \u79D2(00-59)"}),"\n",(0,d.jsx)(e.p,{children:"%s | \u79D2(00-59)"}),"\n",(0,d.jsx)(e.p,{children:"%T | \u65F6\u95F4, 24-\u5C0F\u65F6 (hh:mm:ss)"}),"\n",(0,d.jsx)(e.p,{children:"%U | \u5468 (00-53) \u661F\u671F\u65E5\u662F\u4E00\u5468\u7684\u7B2C\u4E00\u5929"}),"\n",(0,d.jsx)(e.p,{children:"%u | \u5468 (00-53) \u661F\u671F\u4E00\u662F\u4E00\u5468\u7684\u7B2C\u4E00\u5929"}),"\n",(0,d.jsx)(e.p,{children:"%V | \u5468 (01-53) \u661F\u671F\u65E5\u662F\u4E00\u5468\u7684\u7B2C\u4E00\u5929\uFF0C\u4E0E %X \u4F7F\u7528"}),"\n",(0,d.jsx)(e.p,{children:"%v | \u5468 (01-53) \u661F\u671F\u4E00\u662F\u4E00\u5468\u7684\u7B2C\u4E00\u5929\uFF0C\u4E0E %x \u4F7F\u7528"}),"\n",(0,d.jsx)(e.p,{children:"%W | \u661F\u671F\u540D"}),"\n",(0,d.jsx)(e.p,{children:"%w | \u5468\u7684\u5929 \uFF080=\u661F\u671F\u65E5, 6=\u661F\u671F\u516D\uFF09"}),"\n",(0,d.jsx)(e.p,{children:"%X | \u5E74\uFF0C\u5176\u4E2D\u7684\u661F\u671F\u65E5\u662F\u5468\u7684\u7B2C\u4E00\u5929\uFF0C4 \u4F4D\uFF0C\u4E0E %V \u4F7F\u7528"}),"\n",(0,d.jsx)(e.p,{children:"%x | \u5E74\uFF0C\u5176\u4E2D\u7684\u661F\u671F\u4E00\u662F\u5468\u7684\u7B2C\u4E00\u5929\uFF0C4 \u4F4D\uFF0C\u4E0E %v \u4F7F\u7528"}),"\n",(0,d.jsx)(e.p,{children:"%Y | \u5E74\uFF0C4 \u4F4D"}),"\n",(0,d.jsx)(e.p,{children:"%y | \u5E74\uFF0C2 \u4F4D"}),"\n",(0,d.jsx)(e.p,{children:"%% | \u7528\u4E8E\u8868\u793A %"}),"\n",(0,d.jsx)(e.p,{children:"\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E09\u79CD\u7279\u6B8A\u683C\u5F0F\uFF1A"}),"\n",(0,d.jsx)(e.p,{children:"yyyyMMdd"}),"\n",(0,d.jsx)(e.p,{children:"yyyy-MM-dd"}),"\n",(0,d.jsx)(e.p,{children:"yyyy-MM-dd HH:mm:ss"}),"\n",(0,d.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n"})}),"\n",(0,d.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"DATE_FORMAT,DATE,FORMAT\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);