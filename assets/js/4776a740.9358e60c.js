"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["665533"],{708062:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>i});var o=JSON.parse('{"id":"admin-manual/cluster-management/fqdn","title":"FQDN","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/cluster-management/fqdn.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/fqdn","permalink":"/docs/3.0/admin-manual/cluster-management/fqdn","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FQDN","language":"en"},"sidebar":"docs","previous":{"title":"Time Zone","permalink":"/docs/3.0/admin-manual/cluster-management/time-zone"},"next":{"title":"Data Backup","permalink":"/docs/3.0/admin-manual/data-admin/backup"}}'),r=t("785893"),s=t("250065");let i={title:"FQDN",language:"en"},l=void 0,a={},d=[{value:"Preconditions",id:"preconditions",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Enable FQDN for new cluster",id:"enable-fqdn-for-new-cluster",level:3},{value:"Deployment of Doris for K8S",id:"deployment-of-doris-for-k8s",level:3},{value:"Server change IP",id:"server-change-ip",level:3},{value:"Enable FQDN for old cluster",id:"enable-fqdn-for-old-cluster",level:3},{value:"Common problem",id:"common-problem",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This article introduces how to enable the use of Apache Doris based on FQDN (Fully Qualified Domain Name). FQDN is the complete domain name of a specific computer or host on the Internet."}),"\n",(0,r.jsx)(n.p,{children:'After Doris supports FQDN, communication between nodes is entirely based on FQDN. When adding various types of nodes, the FQDN should be directly specified. For example, the command to add a BE node is\' ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port",'}),"\n",(0,r.jsx)(n.p,{children:"'be_host' was previously the IP address of the BE node. After starting the FQDN, be_host should specify the FQDN of the BE node."}),"\n",(0,r.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["fe.conf file set ",(0,r.jsx)(n.code,{children:"enable_fqdn_mode = true"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"All machines in the cluster must be configured with a host name."}),"\n",(0,r.jsx)(n.li,{children:"The IP address and FQDN corresponding to other machines in the cluster must be specified in the '/etc/hosts' file for each machine in the cluster."}),"\n",(0,r.jsx)(n.li,{children:"/The etc/hosts file cannot have duplicate IP addresses."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(n.h3,{id:"enable-fqdn-for-new-cluster",children:"Enable FQDN for new cluster"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Prepare machines, for example, if you want to deploy a cluster of 3FE 3BE, you can prepare 6 machines."}),"\n",(0,r.jsx)(n.li,{children:"Each machine returns unique results when executing 'host'. Assuming that the execution results of six machines are fe1, fe2, fe3, be1, be2, and be3, respectively."}),"\n",(0,r.jsxs)(n.li,{children:["Configure the real IPs corresponding to 6 FQDNs in the '/etc/hosts' of 6 machines, for example:\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"172.22.0.1 fe1\n172.22.0.2 fe2\n172.22.0.3 fe3\n172.22.0.4 be1\n172.22.0.5 be2\n172.22.0.6 be3\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Verification: It can 'ping fe2' on FE1, and can resolve the correct IP address and ping it, indicating that the network environment is available."}),"\n",(0,r.jsxs)(n.li,{children:["fe.conf settings for each FE node ",(0,r.jsx)(n.code,{children:" enable_ fqdn_ mode = true"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Refer to",(0,r.jsx)(n.a,{href:"../../install/cluster-deployment/standard-deployment",children:"Standard deployment"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select several machines to deploy broker on six machines as needed, and execute ",(0,r.jsx)(n.code,{children:'ALTER SYSTEM ADD BROKER broker_name "fe1:8000","be1:8000",...;'}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"deployment-of-doris-for-k8s",children:"Deployment of Doris for K8S"}),"\n",(0,r.jsx)(n.p,{children:"After an unexpected restart of the Pod, K8s cannot guarantee that the Pod's IP will not change, but it can ensure that the domain name remains unchanged. Based on this feature, when Doris enables FQDN, it can ensure that the Pod can still provide services normally after an unexpected restart."}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to the method for deploying Doris in K8s",(0,r.jsx)(n.a,{href:"../../install/cluster-deployment/k8s-deploy/install-operator",children:"Kubernetes Deployment"})]}),"\n",(0,r.jsx)(n.h3,{id:"server-change-ip",children:"Server change IP"}),"\n",(0,r.jsx)(n.p,{children:"After deploying the cluster according to 'Enable FQDN for new cluster', if you want to change the IP of the machine, whether it is switching network cards or replacing the machine, you only need to change the '/etc/hosts' of each machine."}),"\n",(0,r.jsx)(n.h3,{id:"enable-fqdn-for-old-cluster",children:"Enable FQDN for old cluster"}),"\n",(0,r.jsx)(n.p,{children:"Precondition: The current program supports the syntax 'Alter SYSTEM MODIFY FRONTEND'<fe_ip>:<edit_log_port>'HOSTNAME'<fe_hostname>',\nIf not, upgrade to a version that supports the syntax"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note that."}),"\n",(0,r.jsx)(n.p,{children:"At least three followers are required to perform the following operations, otherwise the cluster may not start properly"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Next, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Perform the following operations on the Follower and Observer nodes one by one (and finally on the Master node):"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Stop the node."}),"\n",(0,r.jsx)(n.li,{children:"Check if the node has stopped. Execute 'show frontends' through the MySQL client to view the Alive status of the FE node until it becomes false"}),"\n",(0,r.jsxs)(n.li,{children:["set FQDN for node: ",(0,r.jsx)(n.code,{children:'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'}),"(After stopping the master, a new master node will be selected and used to execute SQL statements)"]}),"\n",(0,r.jsxs)(n.li,{children:["Modify node configuration. Modify the 'conf/fe.conf' file in the FE root directory and add the configuration: ",(0,r.jsx)(n.code,{children:"enable_fqdn_mode = true"}),". If the newly stopped node cannot be started properly after adding the configuration to the corresponding fe.config, please add the configuration 'enable_fqdn_mode=true' to all fe.config before starting the just stopped fe node."]}),"\n",(0,r.jsx)(n.li,{children:"Start the node."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enabling FQDN for BE nodes only requires executing the following commands through MySQL, and there is no need to restart BE."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<HeartbeatPort>" HOSTNAME "<be_hostname>"'}),",If you don't know the number of HeartbeatPort, please use the command ",(0,r.jsx)(n.code,{children:"show backends"})," to help find this port."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-problem",children:"Common problem"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configuration item enable_ fqdn_ Can the mode be changed freely?"}),"\n",(0,r.jsx)(n.p,{children:"Cannot be changed arbitrarily. To change this configuration, follow the 'Enable FQDN for old cluster' procedure."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var o=t(667294);let r={},s=o.createContext(r);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);