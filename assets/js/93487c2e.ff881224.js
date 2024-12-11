"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["195770"],{112912:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/get-json-bigint","title":"GET_JSON_BIGINT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/json-functions/get-json-bigint.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/get-json-bigint","permalink":"/docs/sql-manual/sql-functions/json-functions/get-json-bigint","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GET_JSON_BIGINT","language":"en"},"sidebar":"docs","previous":{"title":"GET_JSON_INT","permalink":"/docs/sql-manual/sql-functions/json-functions/get-json-int"},"next":{"title":"GET_JSON_STRING","permalink":"/docs/sql-manual/sql-functions/json-functions/get-json-string"}}'),i=t("785893"),o=t("250065");let r={title:"GET_JSON_BIGINT",language:"en"},l=void 0,a={},c=[{value:"get_json_bigint",id:"get_json_bigint",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"get_json_bigint",children:"get_json_bigint"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"INT get_json_bigint(VARCHAR json_str, VARCHAR json_path)"})}),"\n",(0,i.jsx)(e.p,{children:'Parse and retrieve the big integer content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",[and].\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned.'}),"\n",(0,i.jsx)(e.p,{children:"In addition, it is recommended to use the jsonb type and jsonb_extract_XXX function performs the same function."}),"\n",(0,i.jsx)(e.p,{children:"Exception handling is as follows:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"if the field specified by json_path does not exist, return NULL"}),"\n",(0,i.jsx)(e.li,{children:"if datatype of the field specified by json_path is not the same with type of json_extract_t, return t if it can be cast to t else NULL"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:'Get the value of key as "k1"'}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'mysql> SELECT get_json_bigint(\'{"k1":1, "k2":"2"}\', "$.k1");\n+-----------------------------------------------+\n| get_json_bigint(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+-----------------------------------------------+\n|                                             1 |\n+-----------------------------------------------+\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:'Get the second element of the array whose key is "my. key"'}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'mysql> SELECT get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------------+\n|                                                                   1678708107000 |\n+---------------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"Get the first element in an array whose secondary path is k1. key - > K2"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'mysql> SELECT get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------------+\n|                                                               1678708107000 |\n+-----------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"GET_JSON_BIGINT,GET,JSON,BIGINT"})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(n){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);