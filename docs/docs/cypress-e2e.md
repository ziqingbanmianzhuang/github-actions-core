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

     e2e-tests:
       name: Unit Tests
       needs: unit-tests
       uses: paion-data/github-actions-core/.github/workflows/cypress-e2e.yml@master
   ```

   In the example above, the node 18 is used in the CI/CDed project by default. A list of custom node versions can be
   used to replace the default. For example, to run E2E tests in node 16, 18, and 20, simply use **node-versions**
   parameter:

   ```yaml
   ---
     e2e-tests:
       name: Unit Tests
       needs: unit-tests
       uses: paion-data/github-actions-core/.github/workflows/cypress-e2e.yml@master
       with:
         node-versions: '["16", "18", "20"]'
   ```

:::tip

Inside the `cypress-e2e` workflow, each [Cypress spec] is tested in 2 modes:

1. **yarn-start**: the web app is started using `yarn start`
2. **server**: a production build is generated first using `yarn build` and then the web app is started with
   `yarn serve`

The reason we run the same E2E in 2 separate modes is that we assume E2E testing consists of 2 logical parts:

1. The logical tests defined by Cypress spec files
2. The same tests in the context of integration of web app logic and the production runtime github-actions-core

The app may work perfectly fine in E2E, but it's a different question when the same app is packaged up using,
for example, [webpack](https://webpack.js.org/). The later could also be interpreted as integration tests against
webpack configuration which makes the tests more comprehensive

:::

[Cypress spec]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Spec-files

[wait-on]: https://www.npmjs.com/package/wait-on
