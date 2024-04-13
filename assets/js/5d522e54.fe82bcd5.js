"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[121],{4870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(4848),i=n(8453);const s={sidebar_position:3,title:"UI Code Style"},r=void 0,c={id:"ui-code-style",title:"UI Code Style",description:"[//]: # (Copyright Paion Data)",source:"@site/docs/ui-code-style.md",sourceDirName:".",slug:"/ui-code-style",permalink:"/github-actions-core/docs/ui-code-style",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/github-actions-core/tree/master/docs/docs/ui-code-style.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"UI Code Style"},sidebar:"actionListSidebar",previous:{title:"UI Unit Test",permalink:"/github-actions-core/docs/ui-unit-test"},next:{title:"Bumping Semantic Version",permalink:"/github-actions-core/docs/version-bump"}},a={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In Frontend dev realm, there are lots of code style checker. Assembling all of them together takes efforts and pains.\nThis action runs the following two code style checker specifically for frontend dev:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://eslint.org/",children:"ESLint"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\nenv:\n  NODE_VERSION: 18\n\njobs:\n  code-style:\n    name: Code Style Check\n    runs-on: ubuntu-latest\n    steps:\n      - uses: paion-data/github-actions-core/.github/workflows/ui-code-style.yml@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n'})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["The configurations of Prettier and ESLint can be done regularly by following their respective documentations. For\nexample, the ",(0,o.jsx)(t.a,{href:"https://prettier.io/docs/en/configuration.html",children:".prettierrc.json"}),",\n",(0,o.jsx)(t.a,{href:"https://prettier.io/docs/en/ignore",children:".prettierignore"}),", can be placed at the project root with the following contents:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",metastring:'title=".prettierrc.json"',children:'{\n  "tabWidth": 2,\n  "useTabs": false,\n  "printWidth": 120\n}\n'})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ignore",metastring:'title=".prettierignore"',children:"*.md\n*.mdx\nbuild\ncoverage\nnode_modules\n"})})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);