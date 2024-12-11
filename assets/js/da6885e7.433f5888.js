"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["111973"],{883983:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/url-decode","title":"url_decode","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/url-decode.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/url-decode","permalink":"/docs/sql-manual/sql-functions/string-functions/url-decode","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"url_decode","language":"en"},"sidebar":"docs","previous":{"title":"QUOTE","permalink":"/docs/sql-manual/sql-functions/string-functions/quote"},"next":{"title":"CONVERT_TO","permalink":"/docs/sql-manual/sql-functions/string-functions/convert-to"}}'),l=s("785893"),r=s("250065");let i={title:"url_decode",language:"en"},o=void 0,c={},d=[{value:"url_decode",id:"url_decode",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"parameters",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"url_decode",children:"url_decode"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.p,{children:"Converts an url to a decode string."}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"VARCHAR url_decode(VARCHAR url)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"url: the string to decode. If url is not a string type."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> mysql> select url_decode('https%3A%2F%2Fdoris.apache.org%2Fzh-CN%2Fdocs%2Fsql-manual%2Fsql-functions%2Fstring-functions');\n+------------------------------------------------+\n| url_decode('https%3A%2F%2Fdoris.apache.org%2Fzh-CN%2Fdocs%2Fsql-manual%2Fsql-functions%2Fstring-functions') |\n+------------------------------------------------+\n| https://doris.apache.org/zh-CN/docs/sql-manual/sql-functions/string-functions                               |\n+------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"URL DECODE\n"})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);