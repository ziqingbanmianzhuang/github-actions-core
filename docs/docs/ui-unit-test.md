---
sidebar_position: 3
title: UI Unit Test
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

The UI unit test action runs unit tests and assumes the **yarn** package manager and requires a `test` script to be
defined in projects `package.json` file. For example, the following uses [Jest] as the unit test runner:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

To use this action, import it in the following way:

```yaml
name: CI/CD

"on":
  pull_request:
  push:
    branches:
      - master

  unit-tests:
    name: Unit Tests
    uses: paion-data/github-actions-core/.github/workflows/ui-unit-test.yml@master
    with:
      node-version: 18
```

:::tip

In the example above, the node 18 is used in the CI/CDed project.

:::

[Jest]: https://jestjs.io/
