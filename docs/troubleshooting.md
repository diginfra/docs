---
slug: troubleshooting
title: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Please try the following troubleshooting steps and if they don't help, either [create an issue](https://github.com/diginfra/diginfra/issues/new/choose) or join our [community Slack channel](https://www.diginfra.khulnasoft.com/community-chat) - we'll help you very quickly 😄🚀

## 1. Enable additional logging

If the Diginfra CLI fails, re-run it with `--log-level=debug` or the `DIGINFRA_LOG_LEVEL=debug` environment variable in case that provides helpful details.

If the Terraform CLI fails, check their [debugging page](https://www.terraform.io/internals/debugging) for help. Likewise, if the Terragrunt CLI fails, check their [debugging page](https://terragrunt.gruntwork.io/docs/features/debugging/) for help.

## 2. Generating plan JSON files

By default, the Diginfra CLI parses Terraform HCL code to estimate costs. If that does not work for your use-case, Diginfra can also parse the Terraform/Terragrunt [plan JSON file](/docs/features/cli_commands/#option-2-terraform-plan-json).

If you have multiple Terraform plan JSON files, you can
1. run [`diginfra breakdown`](/docs/features/cli_commands/#breakdown) with `--path plan-1.json --format json --out-file diginfra-1.json` to generate an Diginfra JSON file for each.
2. run [`diginfra output`](/docs/features/cli_commands/#combined-output-formats) with `--path "diginfra-*.json" --format diff` (glob patterns need quotes) to combine the Diginfra JSON files into one output format then use that file with `diginfra comment`. The `diginfra output --help` command shows the other options.

## 3. Check supported versions

Check the Terraform version matches what you expect. Diginfra works with Terraform v0.12 and above.
Use `ls -lah` in the CI build to check for any `.terraform*` files/folders that might be confusing Terraform running in CI vs previous runs that were used to create them. Removing those files might help.

## 4. Posting comments

If you're having issues posting pull request comments, please review the troubleshooting section for your version control system:

- [GitHub](https://github.com/diginfra/actions/#permissions-issue)
- [GitLab](https://gitlab.com/diginfra/diginfra-gitlab-ci#troubleshooting)
- [Azure Repos](https://github.com/diginfra/diginfra-azure-devops#troubleshooting)
- [Bitbucket](https://bitbucket.org/diginfra/diginfra-bitbucket-pipeline) > see the Troubleshooting section

## 5. Diginfra Cloud dashboard

Try the following troubleshooting steps and join our [community Slack channel](https://www.diginfra.khulnasoft.com/community-chat) - we'll help you very quickly 😄🚀

If Diginfra is **erroring or running too slow**, email us at [hello@diginfra.khulnasoft.com](mailto:hello@diginfra.khulnasoft.com) so we can arrange a debugging session with you quickly.

If your pull requests comments are being posted but they are **not showing in the dashboard**, ensure that the:
1. In Diginfra Cloud's Org settings page, the cost estimate dashboard is enabled.
2. Diginfra CLI version (`diginfra --version`) being used is latest patch version of v0.10.
3. [Required environment variables](/docs/features/environment_variables/#environment-variables-to-set-metadata) are set before the `diginfra breakdown` and `diginfra diff` commands are run. You can verify this by running `cat diginfra.json | jq .metadata` or `diginfra breakdown --path /code --format json | jq .metadata` and checking the Diginfra JSON block shows your pull request metadata.
4. Either [`diginfra comment`](/docs/features/cli_commands/#comment-on-pull-requests) or [`diginfra upload`](/docs/features/cli_commands/#upload-runs) is used in your CI/CD integration. If Diginfra Cloud is enabled (step 1 above), these commands send the Diginfra JSON data to your organization in Diginfra Cloud.
