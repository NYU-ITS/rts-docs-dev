"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1372],{546:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"accessing-hpc/open-on-demand","title":"Open OnDemand","description":"( A Web-based Graphical User Interface )","source":"@site/docs/accessing-hpc/open-on-demand.md","sourceDirName":"accessing-hpc","slug":"/accessing-hpc/open-on-demand","permalink":"/rts-docs-dev/pr-preview/pr-17/docs/accessing-hpc/open-on-demand","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/accessing-hpc/open-on-demand.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Putty","permalink":"/rts-docs-dev/pr-preview/pr-17/docs/accessing-hpc/Putty"},"next":{"title":"Getting and Renewing an Account","permalink":"/rts-docs-dev/pr-preview/pr-17/docs/accessing-hpc/getting-and-renewing-an-account"}}');var i=s(6070),o=s(2790);const c={sidebar_position:4},a="Open OnDemand",r={},d=[{value:"Access the Shell",id:"access-the-shell",level:2},{value:"Interactive Applications",id:"interactive-applications",level:3},{value:"Troubleshooting Connections to Open OnDemand",id:"troubleshooting-connections-to-open-ondemand",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"open-ondemand",children:"Open OnDemand"})}),"\n",(0,i.jsx)(n.p,{children:"( A Web-based Graphical User Interface )"}),"\n",(0,i.jsxs)(n.p,{children:["Open OnDemand is an ",(0,i.jsx)(n.a,{href:"https://openondemand.org/",children:"open source project"})," funded by the National Science Foundation (NSF). Open OnDemand is designed to create easier access to users to interface with HPC systems. Originally developed by Ohio Supercomputer Center (OSC), used by many universities around the world, and now servicing the NYU Greene HPC cluster."]}),"\n",(0,i.jsx)(n.p,{children:"Open OnDemand has a variety of convenient tools to manage files, access the command line, manage and monitor jobs, and launch interactive applications, such as Jupyter Notebooks, RStudio sessions, and even full Linux Desktops."}),"\n",(0,i.jsx)(n.p,{children:"Features Include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Easy file management - upload and download files, view HTML and pictures without downloading"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Command-line shell access without any SSH client locally installed"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Job management and monitoring"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Full Linux desktop experience without X11"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Interactive Apps such as JupyterHub and RStudio without the need for port forwarding"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Open OnDemand (OOD) is accessible to all users with a valid NYU HPC account while on-campus network or through a VPN."}),"\n",(0,i.jsxs)(n.p,{children:["To access OOD visit: ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," (VPN Required)"]}),"\n",(0,i.jsx)(n.h2,{id:"access-the-shell",children:"Access the Shell"}),"\n",(0,i.jsxs)(n.p,{children:["Under the ",(0,i.jsx)(n.code,{children:"clusters"})," menu you can select the ",(0,i.jsx)(n.code,{children:"Greene Shell Access"})," option to access the Linux shell. No local SSH client is required."]}),"\n",(0,i.jsx)(n.h3,{id:"interactive-applications",children:"Interactive Applications"}),"\n",(0,i.jsx)(n.p,{children:"GUI based applications are accessible without the need for port or X11 forwarding. Select the Interactive Apps menu, select the desired application, and submit the job based on required resources and options."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"interactive-applications",src:s(8155).A+"",width:"1936",height:"554"})}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting-connections-to-open-ondemand",children:"Troubleshooting Connections to Open OnDemand"}),"\n",(0,i.jsxs)(n.p,{children:["A common issue that can occur is receiving an error that the Open OnDemand page cannot be reached. Sometimes this can indicate that the service is down, but often this is an issue with the the local browser cache. You can test this by opening a private browser window and seeing if ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," will load. If it does, try deleting the cache for ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," in your browser history to resolve this issue."]}),"\n",(0,i.jsx)(n.p,{children:"In Chrome, this can be done by navigating to this page in your settings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"chrome://settings/content/all?searchSubpage=ood.hpc.nyu.edu&search=site+data\n"})}),"\n",(0,i.jsx)(n.p,{children:"The link above will automatically search for the Open OnDemand site data and cookies. You can then simply click on the trashcan icon to delete the site cache."}),"\n",(0,i.jsxs)(n.p,{children:["Once done, try navigating again to ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," and the site should load. For other issues please email ",(0,i.jsx)(n.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8155:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/interactive-applications-0b8e17567cef085197b541fd5eb10fe0.png"},2790:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(758);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);