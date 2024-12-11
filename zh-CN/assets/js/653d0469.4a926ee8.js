"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["782114"],{518137:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-angle-sphere","title":"ST_ANGLE_SPHERE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-angle-sphere.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-angle-sphere","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle-sphere","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ST_ANGLE_SPHERE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_AZIMUTH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-azimuth"},"next":{"title":"ST_AREA","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-area"}}'),l=s("785893"),i=s("250065");let a={title:"ST_ANGLE_SPHERE",language:"zh-CN"},r=void 0,o={},c=[{value:"ST_Angle_Sphere",id:"st_angle_sphere",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"st_angle_sphere",children:"ST_Angle_Sphere"}),"\n",(0,l.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DOUBLE ST_Angle_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)"})}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.p,{children:"\u8BA1\u7B97\u5730\u7403\u8868\u9762\u4E24\u70B9\u4E4B\u95F4\u7684\u5706\u5FC3\u89D2\uFF0C\u5355\u4F4D\u4E3A \u5EA6\u3002\u4F20\u5165\u7684\u53C2\u6570\u5206\u522B\u4E3AX\u70B9\u7684\u7ECF\u5EA6\uFF0CX\u70B9\u7684\u7EAC\u5EA6\uFF0CY\u70B9\u7684\u7ECF\u5EA6\uFF0CY\u70B9\u7684\u7EAC\u5EA6\u3002"}),"\n",(0,l.jsx)(n.p,{children:"x_lng \u548C y_lng \u90FD\u662F\u7ECF\u5EA6\u6570\u636E\uFF0C\u5408\u7406\u7684\u53D6\u503C\u8303\u56F4\u662F [-180, 180]\u3002"}),"\n",(0,l.jsx)(n.p,{children:"x_lat \u548C y_lat \u90FD\u662F\u7EAC\u5EA6\u6570\u636E\uFF0C\u5408\u7406\u7684\u53D6\u503C\u8303\u56F4\u662F [-90, 90]\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select ST_Angle_Sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+---------------------------------------------------------------------------+\n| st_angle_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+---------------------------------------------------------------------------+\n|                                                        0.0659823452409903 |\n+---------------------------------------------------------------------------+\n1 row in set (0.06 sec)\n\nmysql> select ST_Angle_Sphere(0, 0, 45, 0);\n+----------------------------------------+\n| st_angle_sphere(0.0, 0.0, 45.0, 0.0) |\n+----------------------------------------+\n|                                     45 |\n+----------------------------------------+\n1 row in set (0.06 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"ST_ANGLE_SPHERE,ST,ANGLE,SPHERE"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let l={},i=t.createContext(l);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);