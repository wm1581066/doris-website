"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["130148"],{923125:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>r,frontMatter:()=>d});var i=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-BACKUP","title":"SHOW BACKUP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-BACKUP.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-BACKUP","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-BACKUP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW BACKUP","language":"en"}}'),l=s("785893"),t=s("250065");let d={title:"SHOW BACKUP",language:"en"},a=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to view BACKUP tasks"}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:" SHOW BACKUP [FROM db_name]\n    [WHERE SnapshotName ( LIKE | = ) 'snapshot name']\n"})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Only the most recent BACKUP task is saved in Doris."}),"\n",(0,l.jsxs)(n.li,{children:["The meaning of each column is as follows:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"JobId"}),": Unique job id"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SnapshotName"}),": The name of the backup"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DbName"}),": belongs to the database"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"State"}),": current stage\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PENDING"}),": The initial state after submitting the job"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SNAPSHOTING"}),": Executing snapshot"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"UPLOAD_SNAPSHOT"}),": Snapshot completed, ready to upload"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"UPLOADING"}),": Snapshot uploading"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SAVE_META"}),": Save job meta information to a local file"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"UPLOAD_INFO"}),": Upload job meta information"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FINISHED"}),": The job was successful"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CANCELLED"}),": Job failed"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"BackupObjs"}),": Backed up tables and partitions"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CreateTime"}),": task submission time"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SnapshotFinishedTime"}),": Snapshot completion time"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"UploadFinishedTime"}),": Snapshot upload completion time"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FinishedTime"}),": Job finish time"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"UnfinishedTasks"}),": Displays unfinished subtask ids during SNAPSHOTING and UPLOADING stages"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Status"}),": If the job fails, display the failure message"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Timeout"}),": Job timeout, in seconds"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"View the last BACKUP task under example_db."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:" SHOW BACKUP FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, BACKUP\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var i=s(667294);let l={},t=i.createContext(l);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);