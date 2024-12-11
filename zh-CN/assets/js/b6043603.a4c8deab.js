"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["510749"],{811975:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>s});var i=JSON.parse('{"id":"install/source-install/compilation-mac","title":"\u5728 MacOS \u5E73\u53F0\u4E0A\u7F16\u8BD1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/source-install/compilation-mac.md","sourceDirName":"install/source-install","slug":"/install/source-install/compilation-mac","permalink":"/zh-CN/docs/3.0/install/source-install/compilation-mac","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5728 MacOS \u5E73\u53F0\u4E0A\u7F16\u8BD1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Windows \u5E73\u53F0\u4E0A\u7F16\u8BD1","permalink":"/zh-CN/docs/3.0/install/source-install/compilation-win"},"next":{"title":"\u624B\u52A8\u90E8\u7F72","permalink":"/zh-CN/docs/3.0/install/cluster-deployment/standard-deployment"}}'),l=t("785893"),r=t("250065");let s={title:"\u5728 MacOS \u5E73\u53F0\u4E0A\u7F16\u8BD1",language:"zh-CN"},c=void 0,o={},a=[{value:"\u73AF\u5883\u8981\u6C42",id:"\u73AF\u5883\u8981\u6C42",level:2},{value:"\u6E90\u7801\u7F16\u8BD1",id:"\u6E90\u7801\u7F16\u8BD1",level:2},{value:"\u542F\u52A8",id:"\u542F\u52A8",level:2},{value:"\u4F7F\u7528\u9884\u7F16\u8BD1\u4E09\u65B9\u5E93\u8FDB\u884C\u63D0\u901F",id:"\u4F7F\u7528\u9884\u7F16\u8BD1\u4E09\u65B9\u5E93\u8FDB\u884C\u63D0\u901F",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5728 macOS \u5E73\u53F0\u4E0A\u7F16\u8BD1\u6E90\u7801\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u76EE\u524D\u8FD8\u4E0D\u652F\u6301\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u7F16\u8BD1\u90E8\u7F72"})}),"\n",(0,l.jsx)(e.h2,{id:"\u73AF\u5883\u8981\u6C42",children:"\u73AF\u5883\u8981\u6C42"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["macOS 12 (Monterey) \u53CA\u4EE5\u4E0A\uFF08",(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"Intel \u548C Apple Silicon \u5747\u652F\u6301"})}),"\uFF09"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://brew.sh/",children:"Homebrew"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6E90\u7801\u7F16\u8BD1",children:"\u6E90\u7801\u7F16\u8BD1"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["1.  \u4F7F\u7528 ",(0,l.jsx)(e.a,{href:"https://brew.sh/",children:"Homebrew"})," \u5B89\u88C5\u4F9D\u8D56"]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\npython@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@16 openjdk@11 npm\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728 MacOS \u4E0A\uFF0C\u7531\u4E8E brew \u6CA1\u6709\u63D0\u4F9B JDK8 \u7684\u5B89\u88C5\u5305\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u4F7F\u7528\u4E86 JDK11\u3002\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u624B\u52A8\u4E0B\u8F7D\u5B89\u88C5 JDK8\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2.  \u7F16\u8BD1\u6E90\u7801"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"bash build.sh\n"})}),"\n",(0,l.jsxs)(e.p,{children:["Doris \u6E90\u7801\u7F16\u8BD1\u65F6\u9996\u5148\u4F1A\u4E0B\u8F7D\u4E09\u65B9\u5E93\u6E90\u7801\u8FDB\u884C\u7F16\u8BD1\uFF0C\u4E3A\u4E86\u8282\u7701\u7F16\u8BD1\u65F6\u95F4\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\u793E\u533A\u63D0\u4F9B\u7684\u4E09\u65B9\u5E93\u7684\u9884\u7F16\u8BD1\u7248\u672C\u3002\u53C2\u89C1\u4E0B\u9762\u7684\u4F7F\u7528",(0,l.jsx)(e.strong,{children:"\u9884\u7F16\u8BD1\u4E09\u65B9\u5E93"}),"\u63D0\u901F\u6784\u5EFA\u8FC7\u7A0B\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u542F\u52A8",children:"\u542F\u52A8"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"1. \u8C03\u5927 file descriptors limit"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"# \u901A\u8FC7 ulimit \u547D\u4EE4\u8C03\u5927 file descriptors limit \u9650\u5236\u5927\u5C0F\nulimit -n 65536\n# \u67E5\u770B\u662F\u5426\u751F\u6548\n$ ulimit -n\n\n# \u5C06\u8BE5\u914D\u7F6E\u5199\u5230\u5230\u542F\u52A8\u811A\u672C\u4E2D\uFF0C\u4EE5\u4FBF\u4E0B\u6B21\u6253\u5F00\u7EC8\u7AEF\u4F1A\u8BDD\u65F6\u4E0D\u9700\u8981\u518D\u6B21\u8BBE\u7F6E\n# \u5982\u679C\u662F bash\uFF0C\u6267\u884C\u4E0B\u9762\u8BED\u53E5\necho 'ulimit -n 65536' >>~/.bashrc\n# \u5982\u679C\u662F zsh\uFF0C\u6267\u884C\u4E0B\u9762\u8BED\u53E5\necho 'ulimit -n 65536' >>~/.zshrc\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2.  \u542F\u52A8 BE"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"cd output/be/bin\n./start_be.sh --daemon\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"3.  \u542F\u52A8 FE"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"cd output/fe/bin\n./start_fe.sh --daemon\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4F7F\u7528\u9884\u7F16\u8BD1\u4E09\u65B9\u5E93\u8FDB\u884C\u63D0\u901F",children:"\u4F7F\u7528\u9884\u7F16\u8BD1\u4E09\u65B9\u5E93\u8FDB\u884C\u63D0\u901F"}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u4EE5\u5728 ",(0,l.jsx)(e.a,{href:"https://github.com/apache/doris-thirdparty/releases/tag/automation",children:"Apache Doris Third Party Prebuilt"})," \u9875\u9762\u76F4\u63A5\u4E0B\u8F7D\u9884\u7F16\u8BD1\u597D\u7684\u7B2C\u4E09\u65B9\u5E93\uFF0C\u7701\u53BB\u7F16\u8BD1\u7B2C\u4E09\u65B9\u5E93\u7684\u8FC7\u7A0B\uFF0C\u53C2\u8003\u4E0B\u9762\u7684\u547D\u4EE4\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"cd thirdparty\nrm -rf installed\n\n# Intel \u82AF\u7247\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon \u82AF\u7247\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# \u4FDD\u8BC1 protoc \u548C thrift \u80FD\u591F\u6B63\u5E38\u8FD0\u884C\ncd installed/bin\n\n./protoc --version\n./thrift --version\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD0\u884C",(0,l.jsx)(e.code,{children:"protoc"}),"\u548C",(0,l.jsx)(e.code,{children:"thrift"}),"\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u9047\u5230",(0,l.jsx)(e.strong,{children:"\u65E0\u6CD5\u6253\u5F00\uFF0C\u56E0\u4E3A\u65E0\u6CD5\u9A8C\u8BC1\u5F00\u53D1\u8005"}),"\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u5230\u524D\u5F80",(0,l.jsx)(e.code,{children:"\u5B89\u5168\u6027\u4E0E\u9690\u79C1"}),"\u3002\u70B9\u6309",(0,l.jsx)(e.code,{children:"\u901A\u7528"}),"\u9762\u677F\u4E2D\u7684",(0,l.jsx)(e.code,{children:"\u4ECD\u8981\u6253\u5F00"}),"\u6309\u94AE\uFF0C\u4EE5\u786E\u8BA4\u6253\u7B97\u6253\u5F00\u8BE5\u4E8C\u8FDB\u5236\u3002\u53C2\u8003 ",(0,l.jsx)(e.a,{href:"https://support.apple.com/zh-cn/HT202491%E3%80%82",children:"https://support.apple.com/zh-cn/HT202491\u3002"})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return s}});var i=t(667294);let l={},r=i.createContext(l);function s(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);