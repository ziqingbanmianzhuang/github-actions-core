"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{5303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(4848),s=t(8453);const o={sidebar_position:6,title:"Bump Semantic (Patch) Version By GitHub Tags"},a=void 0,r={id:"version-bump",title:"Bump Semantic (Patch) Version By GitHub Tags",description:"[//]: # (Copyright Paion Data)",source:"@site/docs/version-bump.md",sourceDirName:".",slug:"/version-bump",permalink:"/github-actions-core/docs/version-bump",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/github-actions-core/tree/master/docs/docs/version-bump.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Bump Semantic (Patch) Version By GitHub Tags"},sidebar:"actionListSidebar",previous:{title:"NPM Release action",permalink:"/github-actions-core/docs/npm-release"},next:{title:"Reusable actions",permalink:"/github-actions-core/docs/reusable-actions"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We offer a convenient versioning management approach for releasing software on GitHub."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manually create the first tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'git tag -a v0.0.1 -m "v0.0.1"\ngit push origin v0.0.1\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a pull request that adds the following job to GitHub Action"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\"on\":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  push-release-tag:\n    if: github.ref == 'refs/heads/master'\n    uses: paion-data/github-actions-core/.github/workflows/version-bump.yml@master\n    with:\n      user: QubitPi\n      email: jack20220723@gmail.com\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["When the pull request is merged, the version bump action will automatically create and push a new version tag of\n",(0,i.jsx)(n.code,{children:"MAJOR"}),".",(0,i.jsx)(n.code,{children:"MINOR"}),".(",(0,i.jsx)(n.code,{children:"PATCH"})," + 1)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Bumping the ",(0,i.jsx)(n.code,{children:"MAJOR"})," or ",(0,i.jsx)(n.code,{children:"MINOR"})," version still needs to be done manually using ",(0,i.jsx)(n.code,{children:'git tag -a vx.x.x -m "vx.x.x"'})," command\ngiven the assumption that agile software development will change patch version most frequently and almost always"]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);