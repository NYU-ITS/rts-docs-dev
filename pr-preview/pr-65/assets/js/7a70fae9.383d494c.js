"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8535],{7631:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"srde/user_guide/best_practices","title":"Best Practices","description":"Shared Files","source":"@site/docs/srde/02_user_guide/05_best_practices.mdx","sourceDirName":"srde/02_user_guide","slug":"/srde/user_guide/best_practices","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/srde/user_guide/best_practices","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/srde/02_user_guide/05_best_practices.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"srdeSidebar","previous":{"title":"Troubleshooting","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/srde/user_guide/troubleshooting"},"next":{"title":"DLP Interpretation Guide","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/srde/dlp/dlp"}}');var i=r(5105),n=r(3881);const d={},o="Best Practices",a={},c=[{value:"Shared Files",id:"shared-files",level:2},{value:"Shared data files",id:"shared-data-files",level:3},{value:"Shared code files",id:"shared-code-files",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"best-practices",children:"Best Practices"})}),"\n",(0,i.jsx)(s.h2,{id:"shared-files",children:"Shared Files"}),"\n",(0,i.jsxs)(s.p,{children:["Each user on the research workspace has their own home directory, as well as access to the top-level ",(0,i.jsx)(s.strong,{children:"/shared"})," partition."]}),"\n",(0,i.jsx)(s.h3,{id:"shared-data-files",children:"Shared data files"}),"\n",(0,i.jsx)(s.p,{children:"It is recommended to keep datasets under the /shared partition, especially if they are large. This is more efficient than each researcher making their own copy from the ingress bucket, and ensures all experiments are consistent with each other."}),"\n",(0,i.jsx)(s.h3,{id:"shared-code-files",children:"Shared code files"}),"\n",(0,i.jsx)(s.p,{children:"Code files should also be stored under the /shared partition whenever possible. You can use a local git repo to keep a version history of your codebase, and to avoid conflicts from multiple developers working on the same file at once.  To create a repo,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"cd /shared/code\ngit init\n"})}),"\n",(0,i.jsx)(s.p,{children:"And then, after adding or modifying files,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"git add *\ngit commit -m \u201clog message describing your change\u201d\n"})}),"\n",(0,i.jsx)(s.p,{children:"The git repo, with its full version history, can be exported alongside your results for transparency and reproducibility."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3881:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var t=r(8101);const i={},n=t.createContext(i);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);