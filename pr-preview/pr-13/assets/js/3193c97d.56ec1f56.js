"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9858],{3688:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"accessing-hpc/Using-a-Terminal","title":"Using a Terminal","description":"Mac/Linux","source":"@site/docs/accessing-hpc/Using-a-Terminal.md","sourceDirName":"accessing-hpc","slug":"/accessing-hpc/Using-a-Terminal","permalink":"/rts-docs-dev/pr-preview/pr-13/docs/accessing-hpc/Using-a-Terminal","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/accessing-hpc/Using-a-Terminal.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"NYU VPN & HPC Gateway","permalink":"/rts-docs-dev/pr-preview/pr-13/docs/accessing-hpc/nyu-vpn-and-hpc-gateway"},"next":{"title":"Putty","permalink":"/rts-docs-dev/pr-preview/pr-13/docs/accessing-hpc/Putty"}}');var t=s(6070),o=s(5658);const r={sidebar_position:2},a="Using a Terminal",c={},l=[{value:"Mac/Linux",id:"maclinux",level:2},{value:"Windows",id:"windows",level:2},{value:"WSL2",id:"wsl2",level:3},{value:"Setting up SSH Keys",id:"setting-up-ssh-keys",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"using-a-terminal",children:"Using a Terminal"})}),"\n",(0,t.jsx)(n.h2,{id:"maclinux",children:"Mac/Linux"}),"\n",(0,t.jsx)(n.p,{children:"To connect with a gateway server, simply open a terminal application and enter the following command :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"ssh <NetID>@gw.hpc.nyu.edu\n"})}),"\n",(0,t.jsx)(n.p,{children:"After typing in your password you will be logged in to the cluster. Once this connection is established, you can make one more hop and connect to one of the HPC clusters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"ssh <NetID>@greene.hpc.nyu.edu\n"})}),"\n",(0,t.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.p,{children:"Windows 11 users have several options :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"WSL2 ( Windows Sub-system for Linux )"}),"\n",(0,t.jsx)(n.li,{children:"Setting up SSH Keys"}),"\n",(0,t.jsx)(n.li,{children:"Using PuTTY ( Only for Windows )"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"wsl2",children:"WSL2"}),"\n",(0,t.jsx)(n.p,{children:"If you run Windows 11, you can install WSL, and then install any Linux distribution like Ubuntu (for example, from Microsoft Store). You will have a fully functional Ubuntu with terminal and can connect to the cluster using instructions provided above for Linux/Mac users"}),"\n",(0,t.jsxs)(n.p,{children:["Instructions on WSL installation: ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"https://learn.microsoft.com/en-us/windows/wsl/install"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"One of many options to get terminal that support tabs, etc. is to install 'Windows Terminal' from Microsoft Store."})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you are using WSL 2 (Windows subsystem for Linux), you may not be able to access internet when Cisco AnyConnect VPN, installed from exe file, is activated. A potential solution: uninstall Cisco AnyConnect and install AnyConnect using Microsoft Store, and then setup new VPN connection using settings described on ",(0,t.jsx)(n.a,{href:"https://www.nyu.edu/servicelink/KB0011177",children:"IT webpage"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-ssh-keys",children:"Setting up SSH Keys"}),"\n",(0,t.jsx)(n.p,{children:"Instead of typing your password every time you need to log in, you can also specify an ssh key."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only do that on the computer you trust"}),"\n",(0,t.jsxs)(n.li,{children:["Generate ssh key pair (terminal in Linux/Mac or cmd/WSL in Windows): ",(0,t.jsx)(n.a,{href:"https://www.ssh.com/ssh/keygen/",children:"https://www.ssh.com/ssh/keygen/"})]}),"\n",(0,t.jsx)(n.li,{children:"Note the path to ssh key files. Don't share key files with anybody - anybody with this key file can login to your account"}),"\n",(0,t.jsxs)(n.li,{children:["Log into cluster using regular login/password and then add the content of generated public key file (the one with .pub) to ",(0,t.jsx)(n.code,{children:"$HOME/.ssh/authorized_keys"})," on the cluster"]}),"\n",(0,t.jsx)(n.li,{children:"Next time you will log into cluster no password will be required."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For additional recommendations on how to configure your SSH sessions, ",(0,t.jsx)(n.a,{href:"https://sites.google.com/nyu.edu/nyu-hpc/training-support/general-hpc-topics/tunneling-and-x11-forwarding?authuser=0",children:"see this page"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5658:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(758);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);