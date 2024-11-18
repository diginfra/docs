---
slug: overview
title: Overview
---

Diginfra supports over **1,100** Terraform resources across [AWS](/docs/supported_resources/aws), [Azure](/docs/supported_resources/azure) and [Google](/docs/supported_resources/google). That number is growing fast thanks to our [large open source community](https://github.com/diginfra/diginfra/#community-and-contributing) of contributors.

The quickest way to find out if your Terraform resources are supported is to run [`diginfra breakdown`](/#usage) with the `--show-skipped` flag. This shows the unsupported resources at the bottom of the output

You could also run the following command to only see the unsupported resources:
`diginfra breakdown --path . --format=json | jq ".summary.unsupportedResourceCounts"`

### The resource I want isn't supported

We regularly add support for new resources so we recommend watching our repo for releases: goto the [repo](https://github.com/diginfra/diginfra) page, click on the Watch button > select Custom > Releases and click on Apply.

You can help by:
1. [Creating an issue](https://github.com/diginfra/diginfra/issues/new/choose) and mentioning the resource names you need; we'll try to prioritize it depending on the community feedback.
2. [Contributing to Diginfra](https://github.com/diginfra/diginfra#contributing). You can join our [community Slack channel](https://www.diginfra.khulnasoft.com/community-chat) if you need help contributing.

We plan to add support for other IaC tools such as [Pulumi](https://github.com/diginfra/diginfra/issues/187), [AWS CloudFormation/CDK](https://github.com/diginfra/diginfra/issues/190) and [Azure ARM/Bicep](https://github.com/diginfra/diginfra/issues/812). Please 👍 them if you'd like us to work on them sooner.

### My cost estimate looks wrong

Please [create an issue](https://github.com/diginfra/diginfra/issues/new/choose) and provide the Terraform resource code that can be used to reproduce the issue. If possible, also include any relevant billing data from the cloud vendor that might help us troubleshoot.
