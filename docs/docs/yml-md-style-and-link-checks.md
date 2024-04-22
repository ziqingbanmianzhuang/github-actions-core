---
sidebar_position: 1
title: Performing Style Check on YAML & Markdown Files and Link Check
---

[//]: # (Copyright Paion Data)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

Inspired by [Sous Chefs](https://github.com/sous-chefs/.github/blob/main/.github/workflows/lint-unit.yml), we offer a
[reusable workflow](https://docs.github.com/en/actions/using-workflows/reusing-workflows) that performs the
following code style checks:

1. [YAML file style check]
2. [Markdown file style check]
3. [Broken link check]

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

The example above is all we need to run the 3 checks. The workflow has default configurations, which can be
[overridden](#optional-overriding-default-configurations)

The configurations of the composing checks can be configured regularly by following their respective GitHub Actions
documentations. The following sections discusses the configuration by example.

:::

(Optional) Overriding Default Configurations
--------------------------------------------

### YAML File Style Check

The default YAML style configurations is

```yaml
---
extends: default
rules:
  line-length:
    max: 256
    level: warning
  document-start: disable
  braces:
    forbid: false
    min-spaces-inside: 0
    max-spaces-inside: 1
    min-spaces-inside-empty: -1
    max-spaces-inside-empty: -1
```

To override the default configuration, create a file named **.yamllint** at the root of the downstream project and
configure the workflow with `use-custom-yamllint-config-file` option set to `true`. For example

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
    with:
      use-custom-yamllint-config-file: true
```

:::tip

More configuration options can be found at [yamllint documentation](https://yamllint.readthedocs.io/en/stable/)

:::

### Markdown File Style Check

The configurations of markdown file style check are splitted into 2 config files whose default configurations
are

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value=".mdlrc" label=".mdlrc" default>

    ```
    rules "~MD002", "~MD003", "~MD005", "~MD007", "~MD013", "~MD022", "~MD024", "~MD029", "~MD033", "~MD034", "~MD036", "~MD041"
    style "#{File.dirname(__FILE__)}/markdownlint.rb"
    ```

:::tip

In the example above, the first line above *excludes*
[specified rules](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md). The second line specifies the
rule configuration file (`markdownlint.rb`). For more native config options, please refer to
[its documentations](https://github.com/markdownlint/markdownlint/blob/main/docs/configuration.md)

:::

  </TabItem>
  <TabItem value="markdownlint.rb" label="markdownlint.rb">

    We may need to adjust certain settings of some single rule by having another file named `markdownlint.rb`:

    ```ruby
    all
    rule 'MD003', style: :setext_with_atx
    rule 'MD004', style: :sublist
    rule 'MD013', line_length: 120
    rule 'MD029', style: :ordered
    ```

:::tip

More info about rule config can be found in
[its documentation](https://github.com/markdownlint/markdownlint/blob/main/docs/creating_rules.md) and
[its comprehensive rule list](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md)

:::
</TabItem>
</Tabs>

Create files named `.mdlrc` and `markdownlint.rb` at the root of the project and add `use-custom-mdlrc-config-file` and
`use-custom-markdownlint-config-file` options to the workflow file like so:

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
    with:
      use-custom-mdlrc-config-file: true
      use-custom-markdownlint-config-file: true
```

### Broken Link Check

The [Broken link check] pretty much configures everything for us, so we don't need to configure anything unless we
need to exclude
[links](https://github.com/lycheeverse/lychee-action#excluding-links-from-getting-checked) or
[file](https://github.com/lycheeverse/lychee-action) by regular expression. This workflow defaults to exclude all
relative file links with the following default:

```ignore title=".lycheeignore"
file:///*
```

:::info

The ignore rule in the example above skips checks of all relative links among files. This is common in
[Docusaurus](https://docusaurus.io/docs/markdown-features/links)-based documentation

:::

If we don't need such default, we would simply create a `.lycheeignore` file at our project root and setting
`use-custom-lycheeignore-file` to `true`:

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
    with:
      use-custom-lycheeignore-file: true
```

[YAML file style check]: https://github.com/actionshub/yamllint
[Markdown file style check]: https://github.com/actionshub/markdownlint
[Broken link check]: https://github.com/lycheeverse/lychee-action
