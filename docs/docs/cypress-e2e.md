---
sidebar_position: 4
title: Cypress E2E Tests
---

:::info

This action assumes the [yarn package manager](https://yarnpkg.com/) is used.

:::

Cypress E2E action offers an easy way to automate, customize, and execute **parallel** end-to-end tests. The action
provides

- dependency installation via **yarn**,
- scanning of test specs,
- running each spec in parallel, and
- upload test screenshots and video on test failure.

The example below is a very simple setup:

1. Install Cypress with `yarn add cypress --dev`
2. Initialize Cypress with `yarn run cypress open`
3. [Support TypeScript](https://docs.cypress.io/guides/tooling/typescript-support/)
4. Put all **.spec.cy.ts** test files under "cypress/e2e" directory
5. Install [wait-on]: `yarn add -D wait-on`
6. Add the following script command to `package.json`:

   ```json
   {
     ...

     "scripts": {
       "e2e": "cypress run --browser chrome",
       "wait-on-dev": "wait-on http-get://localhost:3000/",
       "wait-on-prod": "wait-on http-get://localhost:3000/"
     },

     ...
   }
   ```

   :::info

   Note that we assume the UI is running at port 3000. Please adjust it accordingly if it's running at a different port.

   :::

8. Use Cypress E2E Tests workflow:

   ```yaml
   ---
   name: CI/CD

   "on":
     pull_request:
     push:
       branches:
         - master

   env:
     NODE_VERSION: 18

   jobs:
     list-e2e-specs:
       runs-on: ubuntu-latest
       outputs:
         paths: ${{ steps.list-e2e-specs.outputs.paths }}
       steps:
         - name: List Files
           id: list-e2e-specs
           uses: mirko-felice/list-files-action@v3.0.5
           with:
             repo: ${{ github.repository }}
             ref: ${{ github.ref }}
             path: "cypress/e2e"
             ext: ".ts"

     e2e-tests:
       name: E2E Tests
       needs: list-e2e-specs
       runs-on: ubuntu-latest
       strategy:
         fail-fast: false
         matrix:
           node_version: [18]
           start_strategy: ["yarn-start", "serve"]
           test_spec: ${{ fromJson(needs.list-e2e-specs.outputs.paths) }}
       steps:
         - uses: actions/checkout@v3
         - name: Set node version to ${{ inputs.node-version }}
           uses: actions/setup-node@v3
           with:
             node-version: ${{ inputs.node-version }}
         - name: Install dependencies
           run: yarn
         - uses: paion-data/github-actions-core/.github/workflows/cypress-e2e@master
           with:
             node-version: ${{ env.NODE_VERSION }}
             start-strategy: ${{ matrix.start_strategy }}
             spec-relative-path: ${{ matrix.test_spec }}
   ```

   :::tip

   The **start_strategy** in the `mastrix` section above specifies how the UI web app is started during the E2E test.
   There are 2 strategies:

   1. **yarn-start**: the web app is started using `yarn start`
   2. **server**: a production build is generated first using `yarn build` and then the web app is started with
      `yarn serve`

   The reason to support the two strategies is that we assume E2E testing consists of 2 logical parts:

   1. The logical tests defined by Cypress spec files
   2. The same tests in the context of integration of web app logic and the production runtime
  github-actions-core
   The app may work perfectly fine in E2E but it's a different question when the same app is packaged up using
   [webpack](https://webpack.js.org/). The later could also be interpreted as integration tests against webpackgithub-actions-core
   configuration which makes the tests more comprehensive

   :::

[wait-on]: https://www.npmjs.com/package/wait-on
