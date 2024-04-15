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

Inspired by [Sous Chefs](https://github.com/sous-chefs/.github/blob/main/.github/workflows/lint-unit.yml), this
[reusable workflow](https://docs.github.com/en/actions/using-workflows/reusing-workflows) performs the following code
style checks:

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

The configurations of the composing checks can be configured regularly by following their respective GitHub Actions
documentations. The following sections discusses the configuration by example.

:::

Configuring YAML File Style Check
---------------------------------

Create a file named **.yamllint** at the root of the project with the following example content

```yaml title=".yamllint"
# Copyright Paion Data
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
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

:::tip

More configuration options can be found at [yamllint documentation](https://yamllint.readthedocs.io/en/stable/)

:::

Configuring Markdown File Style Check
-------------------------------------

The markdown file style check is splitted into 2 config files:

1. regular configuration file
2. rule configuration file

### Regular Configuration File

Create a file named **.mdlrc** at the root of the project with the following content:

```yaml title=".mdlrc"
rules "~MD002", "~MD005", "~MD007", "~MD013", "~MD041", "~MD029", "~MD033"
style "#{File.dirname(__FILE__)}/markdownlint.rb"
```

In the example above, the first line above *excludes*
[specified rules](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md).

The second line specifies the [rule configuration file](#rule-configuration-file)

:::tip

For more native config options, please refer to
[its documentations](https://github.com/markdownlint/markdownlint/blob/main/docs/configuration.md)

:::

### Rule Configuration File

We may need to adjust certain settings of some single rule by having another file named **markdownlint.rb**:

```ruby title="markdownlint.rb"
# Copyright Paion Data
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

all
# https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md
rule 'MD003', style: :setext_with_atx
rule 'MD004', style: :sublist
rule 'MD013', line_length: 120
```

In the last line of the exmaple above, we changed the max line length from its default (80) to 120

:::tip

More info about rule config can be found in
[its documentation](https://github.com/markdownlint/markdownlint/blob/main/docs/creating_rules.md)

:::

Configuring Broken Link Check
-----------------------------

The [Broken link check] pretty much configures everything for us, so we don't need to configure anything unless we
need to exclude
[links](https://github.com/lycheeverse/lychee-action#excluding-links-from-getting-checked) or
[file](https://github.com/lycheeverse/lychee-action) by regular expression, in which case we would simply create a
**.lycheeignore** file at our project root, for example:

```ignore title=".lycheeignore"
file:///*
```

:::tip

The ignore rule in the example above skips checks of all relative links among files. This is common in
[Docusaurus](https://docusaurus.io/docs/markdown-features/links)-based documentation

:::

[YAML file style check]: https://github.com/actionshub/yamllint
[Markdown file style check]: https://github.com/actionshub/markdownlint
[Broken link check]: https://github.com/lycheeverse/lychee-action
