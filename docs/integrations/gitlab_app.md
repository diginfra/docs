---
slug: gitlab_app
title: GitLab App
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Diginfra GitLab App is an automated integration meaning that Diginfra runs on our infrastructure and we keep it up to date. Diginfra is trusted by thousands of companies around the world, including many of the Fortune 500. We are <a href="https://www.diginfra.khulnasoft.com/security/" target="_self" rel="">SOC 2 Type II</a> certified.

| 1. Install the Diginfra GitLab App | 2. Get merge request comments |
|--------------|-----------|
<img src={useBaseUrl("img/screenshots/gitlab-app-install.png")} alt="Install the GitLab App into any GitLab organization" width="100%"/> | <img src={useBaseUrl("img/screenshots/gitlab-app-comment.png")} alt="Diginfra automatically leaves a comment on every merge request"/>

## Benefits

There are two key benefits of using the GitLab App over manual CI/CD integrations:
1. You can add Diginfra to multiple repos with one click, no need to install or update CLI versions in your CI/CD pipeline.
2. Diginfra runs significantly faster as only changed folders are run based on the GitLab App events.

## Usage

1. Go to [Diginfra Cloud](https://infra-dashboard.khulnasoft.com) to sign up or log in to start your free trial (no credit card is needed).

2. Every Diginfra user has a default organization for personal use. Create a new organization for your company using the organization dropdown at the top of the page.

  <img src={useBaseUrl("img/diginfra-cloud/create-orgs.png")} alt="Create new organization" />

3. Click on Settings > Org Settings > Integrations > GitLab and follow the wizard to select the repos you want to give Diginfra access to.

4. If you use private modules, see [this docs section](/docs/features/terraform_modules/#source-control-integrations).

5. If you need to customize how Diginfra runs, add an `diginfra.yml` or `diginfra.yml.tmpl` [config file](/docs/features/config_file/) in the Repo > my repo > Settings tab, or to the root of your repo. The GitLab App will automatically use that file if it's present. The app will also apply any usage values defined in the `diginfra-usage.yml` [usage file](/docs/features/usage_based_resources/) at the root of the repo.

6. Open a test merge request and wait for Diginfra to leave a merge request comment. The [Diginfra Cloud dashboard](https://infra-dashboard.khulnasoft.com) should also show the cost estimate too.

7. When the merge request is merged the Diginfra Cloud dashboard will show you the time it was merged, who approved it, who merged it, and any labels associated with it on GitLab.

## GitLab Enterprise and self-managed

Our automated GitLab App integration works with both GitLab Enterprise and GitLab self-managed installations too. Directly integrating Diginfra Cloud to GitLab self-managed means you'll get the latest features, the fastest cost estimates and the most robust solution.

Follow the same [usage steps](#usage) as the regular GitLab App above but note that in the installation wizard, you will need to provide your GitLab's domain, and create a new OAuth application in GitLab. The Application ID and Secret from your OAuth application will be needed by Diginfra Cloud.

### Incoming traffic to GitLab

If you use GitLab's IP allow-list to restrict access to your GitLab installation, you need to allow incoming traffic from the following IP addresses to your GitLab instance's port 443 (or whatever port you use); these are the IP addresses used by Diginfra Cloud services to call the integration:
- 3.133.40.66
- 3.16.104.91
- 3.147.121.170
- 3.141.214.65
- 18.221.82.195
- 18.119.42.142

### Outgoing traffic from GitLab

If you have restricted out-going traffic from your instance, you need to allow traffic to be sent to `dashboard.api.diginfra.khulnasoft.com:443` too. If you can only do that by IP address (and not domains), you should whitelist `52.223.24.69`, and `76.223.127.201`.

### Other network/security requirements

Email us at [hello@diginfra.khulnasoft.com](mailto:hello@diginfra.khulnasoft.com) if you have custom network or security requirements, for example the use of TLS certificates, or private tunnels.

## How the GitLab App works

The GitLab App needs access to code repos so it can run the CLI against them, and post merge request comments with with any cost estimates, tagging, and FinOps policy issues. Therefore the bot/user that is installing the GitLab App should have "Maintainer" access to repos; "Developer" and lower does not work as those roles are not authorized to create repo webhooks (that are used to notify Diginfra Cloud about new merge requests).

Each time a merge request is opened or a new commit is pushed to an open merge request, the Diginfra Azure Repos App shows the any tagging or FinOps policies issues that were introduced by the by the merge request along with the cost difference between the most recent commit of the merge request branch and the merge base of the base branch. This mirrors Azure DevOps merge request diff logic and shows only the changes the merge request introduces.

The GitLab App automatically reflects the following changes in Diginfra:
- Repos that are **renamed** are automatically updated in Diginfra.
- When a repo is **moved** from one GitLab Org to another, that change is reflected in Diginfra. When the source and destination GitLab Orgs are in different Diginfra Orgs, the move is also performed as long as the Diginfra Cloud orgs are in the same Enterprise.
- Repos that are **deleted** or **archived** are marked as archived in Diginfra and preserved for audit purposes. Their issues no longer show in the dashboard.

### Disable merge request comments

From the Org Settings > Integrations > GitLab App page, you can disable merge request comments so cost estimates, guardrails and tagging policies are only shown in Diginfra Cloud. This enables you to test these features without impacting engineering workflows.
