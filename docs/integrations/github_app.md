---
slug: github_app
title: GitHub App
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Diginfra GitHub App is an automated integration meaning that Diginfra runs on our infrastructure and we keep it up to date. Diginfra is trusted by thousands of companies around the world, including many of the Fortune 500. We are <a href="https://www.diginfra.khulnasoft.com/security/" target="_self" rel="">SOC 2 Type II</a> certified.

| 1. Install the Diginfra GitHub App | 2. Get pull request comments |
|--------------|-----------|
<img src={useBaseUrl("img/screenshots/github-app-install.png")} alt="Install the GitHub App into any GitHub organization"/> | <img src={useBaseUrl("img/screenshots/github-app-comment.png")} alt="Diginfra automatically leaves a comment on every pull request"/>

## Benefits

There are two key benefits of using the GitHub App over manual CI/CD integrations:
1. You can add Diginfra to multiple repos with one click, no need to install or update CLI versions in your CI/CD pipeline.
2. Diginfra runs faster as only changed folders are run based on the GitHub App events.

## Usage

1. Go to [Diginfra Cloud](https://infra-dashboard.khulnasoft.com) to sign up or log in to start your free trial (no credit card is needed).

2. Every Diginfra user has a default organization for personal use. Create a new organization for your company using the organization dropdown at the top of the page.

  <img src={useBaseUrl("img/diginfra-cloud/create-orgs.png")} alt="Create new organization" />

3. Click on Settings > Org Settings > Integrations > GitHub and follow the wizard to select the repos you want to give Diginfra access to.

4. If you use private modules, see [this docs section](/docs/features/terraform_modules/#source-control-integrations).

5. If you need to customize how Diginfra runs, add an `diginfra.yml` or `diginfra.yml.tmpl` [config file](/docs/features/config_file/) in the Repo > my repo > Settings tab, or to the root of your repo. The GitHub App will automatically use that file if it's present. The app will also apply any usage values defined in the `diginfra-usage.yml` [usage file](/docs/features/usage_based_resources/) at the root of the repo.

6. Open a test pull request and wait for Diginfra to leave a pull request comment. The [Diginfra Cloud dashboard](https://infra-dashboard.khulnasoft.com) should also show the cost estimate too.

7. When the pull request is merged the Diginfra Cloud dashboard will show you the time it was merged, who approved it, who merged it, and any labels associated with it on GitHub.

## GitHub Enterprise

Our automated GitHub App integration works with both GitHub Enterprise Cloud and GitHub Enterprise Server. Directly integrating Diginfra Cloud to GitHub Enterprise means you'll get the latest features, the fastest cost estimates and the most robust solution.

### GitHub Enterprise Cloud

Follow the same [usage steps](#usage) as the regular GitHub App above.

#### Incoming traffic to GitHub
If you use the GitHub Enterprise "Enable IP allow list", the Diginfra GitHub App will automatically add the required IP address to your GitHub organization's IP allow list. If you need to do that manually, please allow incoming traffic from the following IP addresses to your GitHub instance port 443 (or whatever port you use); these are the IP addresses used by Diginfra Cloud services to call the integration:
- 3.133.40.66
- 3.16.104.91
- 3.147.121.170
- 3.141.214.65
- 18.221.82.195
- 18.119.42.142

#### Outgoing traffic from GitHub
If you have restricted out-going traffic from your instance, you need to allow traffic to be sent to `dashboard.api.diginfra.khulnasoft.com:443` too. If you can only do that by IP address (and not domains), you should whitelist `52.223.24.69`, and `76.223.127.201`.

### GitHub Enterprise Server

Email us at [hello@diginfra.khulnasoft.com](mailto:hello@diginfra.khulnasoft.com) to enable GitHub Enterprise Server in your Diginfra Cloud account. This requires a meeting with your server admin so we can install the Diginfra GitHub App in your GitHub organization.

Diginfra Cloud optionally supports mTLS with GitHub Enterprise Server by using client certificates. If a client's GitHub Enterprise Server requires such a certificate, they have the option to supply Diginfra with one. This certificate is securely stored and encrypted at rest. For each request sent to the client's GitHub Enterprise Server, Diginfra Cloud will use this certificate. When Diginfra Cloud instantiates its ephemeral isolated runners they use this certificate when scanning the code to provide cost estimates and when posting comments to the pull requests.

## How the GitHub App works

The [Diginfra GitHub App](https://github.com/marketplace/diginfra) is verified by GitHub, and installed in thousands of GitHub orgs.

The app needs *read access to code repos* so it can run the CLI against them, and *write access to pull requests* so it can post a comment with any cost estimates, tagging, and FinOps policy issues. You can select the repos you would like to give access to the App.

<details>
  <summary>Details of required permissions</summary>

The Diginfra GitHub App requires the following permissions.

- **Read-only** access is needed for the following so Diginfra gets notified of repo or pull request changes and can process the code:
  - Metadata (Search repositories, list collaborators, and access repository metadata)
  - Contents (Repository contents, commits, branches, downloads, releases, and merges)
  - Actions (Workflows, workflow runs and artifacts)
  - Deployments (Deployments and deployment statuses)
  - Issues (Issues and related comments, assignees, labels, and milestones)
  - Administration (Repository creation, deletion, settings, teams, and collaborators)
  - Members (Organization members and teams)
- **Read and write** access is needed for the following so Diginfra can post pull request comments and update statuses in GitHub:
  - Pull requests (Pull requests and related comments, assignees, labels, milestones, and merges)
  - Checks (checks on code)
  - Commit statuses
  - Webhooks (Manage the post-receive hooks for a repository)

</details>

Each time a pull request is opened or a new commit is pushed to an open pull request, the Diginfra GitHub App shows the any tagging or FinOps policies issues that were introduced by the by the pull request along with the cost difference between the most recent commit of the pull request branch and the merge base of the base branch. This mirrors GitHub's pull request diff logic and shows only the changes the pull request introduces.

The GitHub App automatically reflects the following changes in Diginfra:
- Repos that are **renamed** are automatically updated in Diginfra.
- When a repo is **moved** from one GitHub Org to another, that change is reflected in Diginfra. When the source and destination GitHub Orgs are in different Diginfra Orgs, the move is also performed as long as the Diginfra Cloud orgs are in the same Enterprise.
- Repos that are **deleted** or **archived** are marked as archived in Diginfra and preserved for audit purposes. Their issues no longer show in the dashboard.

### Disable pull request comments

From the Org Settings > Integrations > GitHub App page, you can disable pull request comments so cost estimates, guardrails and tagging policies are only shown in Diginfra Cloud. This enables you to test these features without impacting engineering workflows.

### GitHub Actions to App migration

1. Follow the [usage](#usage) docs to install the app. You can do this from the same Diginfra organization you use already, and going into the Org Settings > Integrations page.
2. Test it by [sending a pull request](/docs/diginfra_cloud/get_started/#4-send-a-pull-request).
3. Remove all Diginfra steps from your GitHub Actions.
