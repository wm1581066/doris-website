"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["291725"],{686676:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>c,assets:()=>i,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb","title":"\u90E8\u7F72 FoundationDB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb.md","sourceDirName":"install/cluster-deployment/k8s-deploy/compute-storage-decoupled","slug":"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb","permalink":"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u90E8\u7F72 FoundationDB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5728 Kubernetes \u4E0A\u90E8\u7F72\u5B58\u7B97\u5206\u79BB\u96C6\u7FA4","permalink":"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart"},"next":{"title":"\u914D\u7F6E\u90E8\u7F72 MetaService","permalink":"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms"}}'),r=o("785893"),s=o("250065");let d={title:"\u90E8\u7F72 FoundationDB",language:"zh-CN"},a=void 0,i={},l=[{value:"\u5728 Kubernetes \u4E0A\u90E8\u7F72 FoundationDB",id:"\u5728-kubernetes-\u4E0A\u90E8\u7F72-foundationdb",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u90E8\u7F72 FoundationDB \u76F8\u5173\u8D44\u6E90\u5B9A\u4E49",id:"\u7B2C-1-\u6B65\u90E8\u7F72-foundationdb-\u76F8\u5173\u8D44\u6E90\u5B9A\u4E49",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u90E8\u7F72 fdb-kubernetes-operator \u670D\u52A1",id:"\u7B2C-2-\u6B65\u90E8\u7F72-fdb-kubernetes-operator-\u670D\u52A1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u90E8\u7F72 FoundationDB \u96C6\u7FA4",id:"\u7B2C-3-\u6B65\u90E8\u7F72-foundationdb-\u96C6\u7FA4",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u786E\u8BA4 FoundationDB \u72B6\u6001",id:"\u7B2C-4-\u6B65\u786E\u8BA4-foundationdb-\u72B6\u6001",level:3},{value:"\u83B7\u53D6\u5305\u542B FoundationDB \u8BBF\u95EE\u4FE1\u606F\u7684 ConfigMap",id:"\u83B7\u53D6\u5305\u542B-foundationdb-\u8BBF\u95EE\u4FE1\u606F\u7684-configmap",level:2}];function u(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://apple.github.io/foundationdb/#overview",children:"FoundationDB"})," \u662F Apple \u516C\u53F8\u5F00\u53D1\u7684\u5206\u5E03\u5F0F\u5F3A\u4E00\u81F4\u6027\u5B58\u50A8\u7ED3\u6784\u5316\u6570\u636E\u7684\u6570\u636E\u5E93\u3002 Doris \u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4F7F\u7528 FoundationDB \u4F5C\u4E3A\u5143\u6570\u636E\u5B58\u50A8\uFF0C\u901A\u8FC7 meta-service \u7EC4\u4EF6\u6765\u7BA1\u7406 FoundationDB \u4E2D\u7684\u5143\u6570\u636E\u3002 Kubernetes \u4E0A\u90E8\u7F72\u5B58\u7B97\u5206\u79BB\u96C6\u7FA4\u9700\u8981\u63D0\u524D\u90E8\u7F72 FoundationDB \u670D\u52A1\uFF0C\u63A8\u8350\u4E24\u79CD\u90E8\u7F72\u65B9\u5F0F\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728\u865A\u673A\uFF08\u5305\u62EC\u7269\u7406\u673A\uFF09\u4E0A\u76F4\u63A5\u90E8\u7F72\u3002\u865A\u673A\u90E8\u7F72\u8BF7\u53C2\u8003 Doris \u5B58\u7B97\u5206\u79BB\u5B98\u65B9\u6587\u6863",(0,r.jsx)(n.a,{href:"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment",children:"\u90E8\u7F72\u524D\u51C6\u5907\u90E8\u5206"}),"\u642D\u5EFA FoundationDB \u96C6\u7FA4\u3002\u90E8\u7F72\u524D\u8BF7\u786E\u4FDD FoundationDB \u6709\u88AB Doris \u90E8\u7F72\u7684 Kubernetes \u96C6\u7FA4\u8BBF\u95EE\u7684\u80FD\u529B\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728 Kubernetes \u4E0A\u90E8\u7F72 FoundationDB\u3002 FoundationDB \u5B98\u65B9\u63D0\u4F9B Kubernetes \u4E0A\u90E8\u7F72\u8FD0\u7EF4\u7BA1\u7406\u670D\u52A1 ",(0,r.jsx)(n.a,{href:"https://github.com/FoundationDB/fdb-kubernetes-operator",children:"fdb-kubernetes-operator"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5728-kubernetes-\u4E0A\u90E8\u7F72-foundationdb",children:"\u5728 Kubernetes \u4E0A\u90E8\u7F72 FoundationDB"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Kubernetes \u4E0A\u90E8\u7F72 FoundationDB \u5206\u4E3A 4 \u6B65\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u90E8\u7F72 FoundationDB \u76F8\u5173\u8D44\u6E90\u5B9A\u4E49\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u90E8\u7F72 fdb-kubernetes-operator \u670D\u52A1\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u90E8\u7F72 FoundationDB \u96C6\u7FA4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u786E\u8BA4 FoundationDB \u72B6\u6001\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u90E8\u7F72-foundationdb-\u76F8\u5173\u8D44\u6E90\u5B9A\u4E49",children:"\u7B2C 1 \u6B65\uFF1A\u90E8\u7F72 FoundationDB \u76F8\u5173\u8D44\u6E90\u5B9A\u4E49"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u53D1 FoundationDB \u8D44\u6E90\u5B9A\u4E49\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbclusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbbackups.yaml\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbrestores.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9884\u671F\u7ED3\u679C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbclusters.yaml\ncustomresourcedefinition.apiextensions.k8s.io/foundationdbclusters.apps.foundationdb.org created\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbbackups.yaml\ncustomresourcedefinition.apiextensions.k8s.io/foundationdbbackups.apps.foundationdb.org created\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbrestores.yaml\ncustomresourcedefinition.apiextensions.k8s.io/foundationdbrestores.apps.foundationdb.org created\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u90E8\u7F72-fdb-kubernetes-operator-\u670D\u52A1",children:"\u7B2C 2 \u6B65\uFF1A\u90E8\u7F72 fdb-kubernetes-operator \u670D\u52A1"}),"\n",(0,r.jsxs)(n.p,{children:["fdb-kubernetes-operator \u4ED3\u5E93\u63D0\u4F9B\u4E86\u4EE5 IP \u6A21\u5F0F\u90E8\u7F72 FoundationDB \u96C6\u7FA4\u7684\u90E8\u7F72\u6837\u4F8B\u3002\u5728 doris-operator \u4ED3\u5E93\u4E2D\u63D0\u4F9B\u4E86\u4EE5 ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/dns-pod-service/#pod-sethostnameasfqdn-field",children:"FQDN \u6A21\u5F0F"}),"\u90E8\u7F72\u7684 FoundationDB \u96C6\u7FA4\u6837\u4F8B\uFF0C\u53EF\u4EE5\u6309\u9700\u4E0B\u8F7D\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4E0B\u8F7D\u90E8\u7F72\u6837\u4F8B"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ECE fdb-kubernetes-operator \u5B98\u65B9\u4ED3\u5E93\u4E0B\u8F7D"}),"\n",(0,r.jsxs)(n.p,{children:["fdb-kuberentes-operator \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 IP \u6A21\u5F0F\u90E8\u7F72 FoundationDB Cluster\uFF0C\u53EF\u4EE5\u4E0B\u8F7D ",(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/foundationdb/fdb-kubernetes-operator/main/config/samples/deployment.yaml",children:"fdb-kubernetes-operator \u9ED8\u8BA4\u90E8\u7F72"})," yaml\u3002\u5982\u679C\u4F7F\u7528 FQDN \u90E8\u7F72\u6A21\u5F0F\uFF0C\u8BF7\u6309\u7167\u5B98\u65B9\u6587\u6863",(0,r.jsx)(n.a,{href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/docs/manual/customization.md#using-dns",children:"\u4F7F\u7528 DNS \u90E8\u5206"}),"\u8FDB\u884C\u5B9A\u5236\u5316\u4F7F\u7528\u57DF\u540D\u6A21\u5F0F\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget -O fdb-operator.yaml https://raw.githubusercontent.com/foundationdb/fdb-kubernetes-operator/main/config/samples/deployment.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ECE doris-operator \u4ED3\u5E93\u4E0B\u8F7D"}),"\n",(0,r.jsx)(n.p,{children:"doris-operator \u4ED3\u5E93\u4E2D\u5236\u5B9A\u5316\u4E86\u4EE5 fdb-kuberentes-operator 1.46.0 \u7248\u672C\u4E3A\u57FA\u7840\u7684\u90E8\u7F72\u793A\u4F8B\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u90E8\u7F72 FoundationDB cluster \u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget https://raw.githubusercontent.com/apache/doris-operator/master/config/operator/fdb-operator.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u90E8\u7F72 fdb-kubernetes-operator \u670D\u52A1"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5B9A\u5236\u5316 ",(0,r.jsx)(n.code,{children:"fdb-kubernetes-operator"})," \u7684\u90E8\u7F72 yaml \u540E\uFF0C\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u90E8\u7F72 fdb-kubernetes-operator \uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f fdb-operator.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9884\u671F\u7ED3\u679C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"serviceaccount/fdb-kubernetes-operator-controller-manager created\nclusterrole.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-clusterrole created\nclusterrole.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-role created\nrolebinding.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-rolebinding created\nclusterrolebinding.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-clusterrolebinding created\ndeployment.apps/fdb-kubernetes-operator-controller-manager created\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u90E8\u7F72-foundationdb-\u96C6\u7FA4",children:"\u7B2C 3 \u6B65\uFF1A\u90E8\u7F72 FoundationDB \u96C6\u7FA4"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.a,{href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/config/samples/cluster.yaml",children:"fdb-kuberneteS-OPErator \u4ED3\u5E93"}),"\u4E2D\u63D0\u4F9B\u4E86\u90E8\u7F72 FoundationDB \u7684\u90E8\u7F72\u6837\u4F8B\uFF0C\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u76F4\u63A5\u4E0B\u8F7D\u4F7F\u7528"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4E0B\u8F7D\u90E8\u7F72\u6837\u4F8B"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ECE FoundationDB \u5B98\u65B9\u4E0B\u8F7D IP \u6A21\u5F0F\u90E8\u7F72\u6837\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget https://raw.githubusercontent.com/foundationdb/fdb-kubernetes-operator/main/config/samples/cluster.yaml\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u5B9A\u5236\u5316\u90E8\u7F72\u6837\u4F8B"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u73AF\u5883\u53EF\u8BBF\u95EE dockerhub"}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636E\u5B98\u7F51\u63D0\u4F9B\u7684",(0,r.jsx)(n.a,{href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/docs/manual/index.md",children:"\u7528\u6237\u624B\u518C"}),"\u5B9A\u5236\u5316\u90E8\u7F72\u7EC8\u6001\u3002\u5982\u679C\u4F7F\u7528 FQDN \u90E8\u7F72\uFF0C\u8BF7\u5C06 ",(0,r.jsx)(n.code,{children:"routing.useDNSInClusterFile"})," \u5B57\u6BB5\u8BBE\u7F6E\u4E3A true\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A",(0,r.jsx)(n.br,{}),"\ndoris-operator \u7684\u5B98\u65B9\u4ED3\u5E93\u4E2D\u63D0\u4F9B\u4E86\u4F7F\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris-operator/blob/master/doc/examples/disaggregated/fdb/cluster.yaml",children:"FQDN \u90E8\u7F72 FoundationDB \u7684\u90E8\u7F72\u6837\u4F8B"}),"\u53EF\u76F4\u63A5\u4E0B\u8F7D\u4F7F\u7528\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  routing:\n  useDNSInClusterFile: true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u79C1\u7F51\u73AF\u5883"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u79C1\u7F51\u73AF\u5883\u4E0B\uFF0C\u5982\u679C\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE dockerhub \u53EF\u4ECE FoundationDB \u7684\u5B98\u65B9\u4ED3\u5E93\u4E2D\u5C06\u9700\u8981\u7684\u955C\u50CF\u4E0B\u8F7D\uFF0C\u5E76\u63A8\u5230\u79C1\u6709\u4ED3\u5E93\u4E2D\u3002 fdb-kubernetes-operator \u4F9D\u8D56 ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/foundationdb/fdb-kubernetes-operator",children:"foundationdb/fdb-kubernetes-operator"}),", ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/foundationdb/foundationdb-kubernetes-sidecar",children:"foundationdb/foundationdb-kubernetes-sidecar"})," \u3002",(0,r.jsx)(n.br,{}),"\n\u90E8\u7F72 FoundationDB \u4F9D\u8D56\u7684\u955C\u50CF\u5305\u62EC\uFF1A",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/foundationdb/foundationdb",children:"foundationdb/foundationdb"})," \uFF0C ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/foundationdb/foundationdb-kubernetes-sidecar",children:"foundationdb/foundationdb-kubernetes-sidecar"}),"\u3002",(0,r.jsx)(n.br,{}),"\n\u63A8\u5230\u79C1\u6709\u4ED3\u5E93\u540E\uFF0C\u6309\u7167 fdb-kubernetes-operator \u5B98\u65B9\u6587\u6863",(0,r.jsx)(n.a,{href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/docs/manual/customization.md#customizing-the-foundationdb-image",children:"\u5B9A\u5236\u5316\u955C\u50CF\u914D\u7F6E"}),"\u8BF4\u660E\u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u53C2\u8003\u5982\u4E0B\u914D\u7F6E\u6DFB\u52A0\u79C1\u6709\u4ED3\u5E93\u955C\u50CF\u914D\u7F6E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  mainContainer:\n    imageConfigs:\n    - baseImage: foundationdb/foundationdb\n      tag: 7.1.38\n  sidecarContainer:\n    imageConfigs:\n    - baseImage: foundationdb/foundationdb-kubernetes-sidecar\n      tag: 7.1.36-1\n  version: 7.1.38\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u79C1\u6709\u73AF\u5883\u4E0B\uFF0CFoundationDB \u63A8\u5230\u79C1\u6709\u4ED3\u5E93\u65F6\uFF0Ctag \u5FC5\u987B\u4E0E\u5B98\u65B9\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A7.1.38\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u90E8\u7F72 FoundationDB \u65F6, FoundationDBCluster \u8D44\u6E90\uFF0C",(0,r.jsx)(n.code,{children:".spec.version"})," \u5FC5\u987B\u914D\u7F6E\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"FoundationDB \u57FA\u4E8E fdb-kubernetes-operator \u90E8\u7F72\uFF0C\u8981\u6C42 Kubernetes \u96C6\u7FA4\u81F3\u5C11\u6709\u4E09\u53F0\u5BBF\u4E3B\u673A\u624D\u53EF\u6EE1\u8DB3\u751F\u4EA7\u73AF\u5883\u9AD8\u53EF\u7528\u8981\u6C42\u3002"}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u786E\u8BA4-foundationdb-\u72B6\u6001",children:"\u7B2C 4 \u6B65\uFF1A\u786E\u8BA4 FoundationDB \u72B6\u6001"}),"\n",(0,r.jsx)(n.p,{children:"FoundationDB \u57FA\u4E8E fdb-kubernetes-operator \u90E8\u7F72\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u67E5\u770B FoundationDB \u96C6\u7FA4\u72B6\u6001\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get fdb\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9884\u671F\u7ED3\u679C\u5982\u4E0B\uFF0C\u82E5 ",(0,r.jsx)(n.code,{children:"AVAILABLE"})," \u4E3A ",(0,r.jsx)(n.code,{children:"true"})," \u5219\u4EE3\u8868\u96C6\u7FA4\u53EF\u7528\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NAME           GENERATION   RECONCILED   AVAILABLE   FULLREPLICATION   VERSION   AGE\ntest-cluster   1            1            true        true              7.1.26    13m\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u83B7\u53D6\u5305\u542B-foundationdb-\u8BBF\u95EE\u4FE1\u606F\u7684-configmap",children:"\u83B7\u53D6\u5305\u542B FoundationDB \u8BBF\u95EE\u4FE1\u606F\u7684 ConfigMap"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/FoundationDB/fdb-kubernetes-operator",children:"fdb-kubernetes-operator"}),' \u90E8\u7F72 FoundationDB\uFF0C\u4F1A\u5728\u90E8\u7F72\u7684\u547D\u540D\u7A7A\u95F4\u4E0B\u751F\u6210\u4E00\u4E2A\u7279\u5B9A\u7684 ConfigMap \u5305\u542B FoundationDB \u7684\u8BBF\u95EE\u4FE1\u606F\u3002\u8FD9\u4E2A ConfigMap \u7684\u540D\u79F0\u4E3A\u90E8\u7F72 FoundationDB \u7684\u8D44\u6E90\u540D\u79F0\u52A0\u4E0A "-config"\u3002\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u67E5\u770B ConfigMap\uFF1A']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get configmap\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9884\u671F\u7ED3\u679C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"test-cluster-config   5      15d\n"})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var t=o(667294);let r={},s=t.createContext(r);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);