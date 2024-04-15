---
sidebar_position: 7
title: Reusable actions
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

Installing JDK 17
-----------------

The standard [actions/setup-java](https://github.com/actions/setup-java) requires us to specify JDK distributions other
than JDK version. Looking up JDK distributions wastes user's time and gives opportunities to error.

We offer a no-config action that installs JDK 17 by default. The usage is as follows:

```yaml
name: CI/CD

"on":
  pull_request:
  push:
    branches:
      - master

jobs:
  tests:
    runs-on: ubuntu-latest
    steps:
      - name: Set up JDK
        uses: paion-data/github-actions-core/.github/actions/jdk-setup@master
```
