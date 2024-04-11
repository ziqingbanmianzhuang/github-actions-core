---
sidebar_position: 2
title: Performing Style Check on YAML & Markdown Files and Link Check
---

Inspired by [Sous Chefs](https://github.com/sous-chefs/.github/blob/main/.github/workflows/lint-unit.yml), this
[reusable workflow](https://docs.github.com/en/actions/using-workflows/reusing-workflows) performs the following code
style checks:

1. [YAML file style check](https://github.com/actionshub/yamllint)
2. [Markdown file style check](https://github.com/actionshub/markdownlint)
3. [Broken link check](https://github.com/lycheeverse/lychee-action)

Example Usage:

```yaml
name: CI/CD

"on":
  pull_request:
  push:
    branches:
      - master

jobs:
  yml-md-style-and-link-checks:
    uses: paion-data/github-actions-core/.github/workflows/yml-md-style-and-link-checks.yml@master
```

:::tip

The configurations of the composing actions can be configured regularly by following their respective documentations

:::
