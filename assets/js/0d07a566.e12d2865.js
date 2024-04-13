"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[678],{1450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const o={sidebar_position:2,title:"UI Unit Test"},r=void 0,a={id:"ui-unit-test",title:"UI Unit Test",description:"[//]: # (Copyright Paion Data)",source:"@site/docs/ui-unit-test.md",sourceDirName:".",slug:"/ui-unit-test",permalink:"/github-actions-core/docs/ui-unit-test",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/github-actions-core/tree/master/docs/docs/ui-unit-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"UI Unit Test"},sidebar:"actionListSidebar",previous:{title:"Performing Style Check on YAML & Markdown Files and Link Check",permalink:"/github-actions-core/docs/yml-md-style-and-link-checks"},next:{title:"UI Code Style",permalink:"/github-actions-core/docs/ui-code-style"}},c={},d=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The UI unit test action runs unit tests and assumes the ",(0,s.jsx)(n.strong,{children:"yarn"})," package manager and requires a ",(0,s.jsx)(n.code,{children:"test"})," script to be\ndefined in projects ",(0,s.jsx)(n.code,{children:"package.json"})," file. For example, the following uses ",(0,s.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," as the unit test\nrunner:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"To use this action, import it in the following way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\nenv:\n  NODE_VERSION: 18\n\njobs:\n  unit-tests:\n    name: Unit Tests\n    runs-on: ubuntu-latest\n    steps:\n      - uses: paion-data/github-actions-core/.github/workflows/ui-unit-test.yml@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The example above uses Node version 18, which is specified in ",(0,s.jsx)(n.code,{children:"NODE_VERSION"}),"\n",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow",children:"environment variable"})]})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);