"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6574],{7286:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"hpc/spec_sheet","title":"Greene Spec Sheet","description":"[vast home page]//www.vastdata.com/","source":"@site/docs/hpc/12_spec_sheet.mdx","sourceDirName":"hpc","slug":"/hpc/spec_sheet","permalink":"/rts-docs-dev/pr-preview/pr-59/docs/hpc/spec_sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/12_spec_sheet.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Support","permalink":"/rts-docs-dev/pr-preview/pr-59/docs/hpc/training_and_support/support"},"next":{"title":"Greene System Status","permalink":"/rts-docs-dev/pr-preview/pr-59/docs/hpc/system_status"}}');var t=r(6070),i=r(385);const l={},d="Greene Spec Sheet",a={},c=[{value:"Hardware Specs",id:"hardware-specs",level:2},{value:"Mounted Storage Systems",id:"mounted-storage-systems",level:2},{value:"General Parallel File System (GPFS)",id:"general-parallel-file-system-gpfs",level:2},{value:"GPFS Performance",id:"gpfs-performance",level:3},{value:"Flash Tier Storage (VAST)",id:"flash-tier-storage-vast",level:2},{value:"Research Project Space (RPS)",id:"research-project-space-rps",level:2},{value:"Data Transfer Nodes (gDTN)",id:"data-transfer-nodes-gdtn",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"greene-spec-sheet",children:"Greene Spec Sheet"})}),"\n",(0,t.jsx)(s.h2,{id:"hardware-specs",children:"Hardware Specs"}),"\n",(0,t.jsxs)(s.p,{children:["Please find Greene's hardware specification in detail at the ",(0,t.jsx)(s.a,{href:"https://docs.google.com/spreadsheets/d/1czgPi6x8Qa5PNRIX_VLSt7mDpe8zgg5MRqdVmINJzxc?rm=minimal",children:"google sheets here"}),":"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Hover a mouse over a cell with a black triangle to see more details_"})}),"\n",(0,t.jsx)("iframe",{src:"https://docs.google.com/spreadsheets/d/1czgPi6x8Qa5PNRIX_VLSt7mDpe8zgg5MRqdVmINJzxc?rm=minimal",width:"100%",height:"500"}),"\n",(0,t.jsx)(s.h2,{id:"mounted-storage-systems",children:"Mounted Storage Systems"}),"\n",(0,t.jsxs)(s.p,{children:["Please find the details on Greene's available storage offerings at the ",(0,t.jsx)(s.a,{href:"https://docs.google.com/spreadsheets/d/1pYZ0YtN1fhMN7kxcGcm6U-HZxMKLRBXXr2BwemxeS7Y?rm=minimal",children:"google sheets here"}),":"]}),"\n",(0,t.jsx)("iframe",{src:"https://docs.google.com/spreadsheets/d/1pYZ0YtN1fhMN7kxcGcm6U-HZxMKLRBXXr2BwemxeS7Y?rm=minimal",width:"100%",height:"300"}),"\n",(0,t.jsx)(s.h2,{id:"general-parallel-file-system-gpfs",children:"General Parallel File System (GPFS)"}),"\n",(0,t.jsxs)(s.p,{children:["The NYU HPC Clusters are served by a ",(0,t.jsx)(s.code,{children:"General Parallel File System (GPFS)"})," storage cluster. GPFS is a high-performance clustered file system software developed by IBM that provides concurrent high-speed file access to applications executing on multiple nodes of clusters."]}),"\n",(0,t.jsx)(s.p,{children:"The cluster storage runs on Lenovo Distributed Storage Solution DSS-G hardware:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"2x DSS-G 202"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"116 Solid State Drives (SSDs)"}),"\n",(0,t.jsx)(s.li,{children:"464 TB raw storage"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"2x DSS-G 240"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"668 Hard Disk Drives (HDDs)"}),"\n",(0,t.jsx)(s.li,{children:"9.1 PB raw storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"gpfs-performance",children:"GPFS Performance"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Read Bandwidth"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"78 GB"})})," per second reads"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Write Bandwidth"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"42 GB"})})," per second writes"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"I/O Performance"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"~650k"})})," Input/Output operations per second (IOPS)"]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"flash-tier-storage-vast",children:"Flash Tier Storage (VAST)"}),"\n",(0,t.jsxs)(s.p,{children:["An all flash file system, using ",(0,t.jsx)(s.a,{href:"https://www.vastdata.com/",children:"VAST Flash storage"})," is now available on Greene. Flash storage is optimal for computational workloads with high I/O rates. For example, if you have jobs to run with huge number of ",(0,t.jsx)(s.em,{children:"tiny files"}),", VAST may be a good candidate."]}),"\n",(0,t.jsxs)(s.p,{children:["Please contact the team ",(0,t.jsx)(s.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"})," for more information."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"NVMe Interface"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"778 TB"})," Total Storage"]}),"\n",(0,t.jsxs)(s.li,{children:["Available to ",(0,t.jsx)(s.strong,{children:"all"})," users as ",(0,t.jsx)(s.strong,{children:"read only"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Write"})," access available to ",(0,t.jsx)(s.strong,{children:"approved"})," users only"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"research-project-space-rps",children:"Research Project Space (RPS)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Research Project Space (RPS) volumes provide working spaces for sharing data and work amongst project or lab members for long term research needs."}),"\n",(0,t.jsx)(s.li,{children:"RPS directories are available on the Greene HPC cluster."}),"\n",(0,t.jsx)(s.li,{children:"RPS is backed up. There is no file purging policy on RPS."}),"\n",(0,t.jsxs)(s.li,{children:["There is a ",(0,t.jsx)(s.em,{children:"cost per TB per year"}),", and ",(0,t.jsx)(s.em,{children:"inodes per year"})," for RPS volumes."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Please find more inforamtion at [Research Project Space page]."}),"\n",(0,t.jsx)(s.h2,{id:"data-transfer-nodes-gdtn",children:"Data Transfer Nodes (gDTN)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Node Type"}),(0,t.jsx)(s.td,{children:"Lenovo SR630"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Number of Nodes"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CPUs"}),(0,t.jsx)(s.td,{children:"2x Intel Xeon Gold 6244 8C 150W 3.6 GHz Processor."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Memory"}),(0,t.jsx)(s.td,{children:"192 GB (total) - 12x 16GB DDR4, 2933 MHz"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Local Disk"}),(0,t.jsx)(s.td,{children:"1x 1.92 TB SSD"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Infiniband Interconnect"}),(0,t.jsx)(s.td,{children:"1x Mellanox ConnectX-6 HDR100/100GbE VPI 1-Port x16 PCIe 3.0 HCA"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Ethernet Connectivity to the NYU High-Speed Research Network (HSRN)"}),(0,t.jsx)(s.td,{children:"200 Gbit - 1x Mellanox ConnectX-5 EDR IB/100GbE VPI Dual-Port x16 PCIe 3.0 HCA"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},385:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>d});var n=r(758);const t={},i=n.createContext(t);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);