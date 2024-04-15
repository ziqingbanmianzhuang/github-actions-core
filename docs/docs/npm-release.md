---
sidebar_position: 5
title: NPM Release action
---

:::tip

This action works for both [npm] and [yarn] package managers

:::

The NPM release action bundles up a React/Vue package and publishes it to [npm registry][npm].

To use the release action,
[create a GitHub Secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)
for [npm token](https://docs.npmjs.com/creating-and-viewing-access-tokens), which will be used to authenticate against
NPM in the action. Then use the following template in CI/CD:

```yaml
name: CI/CD

"on":
  pull_request:
  push:
    branches:
      - master

env:
  NODE_VERSION: 18

jobs:
  publish:
    name: Publish Package to NPM
    if: github.ref == 'refs/heads/master'
    runs-on: ubuntu-latest
    steps:
      - uses: paion-data/github-actions-core/.github/workflows/npm-release.yml@master
        with:
          node-version: ${{ env.NODE_VERSION }}
          npm-token: ${{ env.NPM_TOKEN }}
          user: Qubitpi
          email: qubitpi@paion-data.dev
```

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
