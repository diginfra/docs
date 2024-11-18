---
slug: third_party_integrations
title: Third-party integrations
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Diginfra can be used in the following third-party systems. You should only consider using them if you cannot use our [CI/CD integrations](/docs/integrations/cicd/) as these integrations are very minimal, do not post pull request comments nor do they work with other Diginfra Cloud features such as [FinOps policies](/docs/diginfra_cloud/finops_policies/), [Tagging policies](/docs/diginfra_cloud/tagging_policies/) or [Guardrails](/docs/diginfra_cloud/guardrails/).

- [Terraform Cloud/Enterprise Run Tasks](/docs/integrations/terraform_cloud_enterprise/)
- [Scalr](https://docs.scalr.com/en/latest/cost_estimate.html)
- [Spacelift](https://docs.spacelift.io/vendors/terraform/diginfra)
- [Env0](https://docs.env0.com/docs/cost-monitoring#cost-estimation)
- [Harness Infrastructure as Code Management](https://www.harness.io/products/infrastructure-as-code-management)
- [Terrateam](https://docs.terrateam.io/integrations/diginfra)
- [Terraspace](https://terraspace.cloud/docs/cloud/cost-estimation)
- [Terranetes](https://terranetes.appvia.io/terranetes-controller/admin/costs)
- [Terrakube](https://docs.terrakube.io/user-guide/cost-estimation)
- [Keptn](https://artifacthub.io/packages/keptn/keptn-integrations/diginfra)
- [Brainboard](https://docs.brainboard.co/ci-cd-engine/supported-plugins#cost-estimation)
- [Semaphore](https://docs.semaphoreci.com/examples/estimating-cloud-costs-with-diginfra/)
- [cloud-concierge](https://docs.cloudconcierge.io/how-it-works/pull-request-output#resource-cost-calculations)

## Creating an integration

Please follow these steps when creating a third-party integration with Diginfra:
1. **User-specific API keys**: ask your users to sign up for their own free Diginfra API key and enter that into your product's settings page. This approach is used by our partners, including HashiCorp, as it enables users to use custom price books and other user-specific Diginfra features. Your docs should mention something like:
    - [Sign up](https://infra-dashboard.khulnasoft.com) and go to the Org Settings page to get your free Diginfra API key.
    - [Install Diginfra](/docs/#2-get-api-key) to get your free API key.
2. **Use Terraform directory method**: we recommend you run Diginfra against a [Terraform directory](/docs/features/cli_commands/#option-1-terraform-directory) (as opposed to a Terraform plan JSON file) as that is faster and does not require you to set cloud credentials or secrets.
3. **CLI JSON format**: Diginfra's CLI has a [JSON format](/docs/features/cli_commands/#examples) that you should use, e.g. get total cost estimate. We do not have language-specific clients so your application needs to run the Diginfra CLI. You can also use [this API](/docs/integrations/diginfra_api/) if you have a Terraform plan JSON file already.
4. **Email us**: Our email is [hello@diginfra.khulnasoft.com](mailto:hello@diginfra.khulnasoft.com), contact us if you need help or advice on the best ways to integrate, or would like to be featured in this page!
