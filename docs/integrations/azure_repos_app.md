---
slug: azure_repos_app
title: Azure Repos App
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Diginfra Azure Repos App is an automated integration meaning that Diginfra runs on our infrastructure and we keep it up to date. Diginfra is trusted by thousands of companies around the world, including many of the Fortune 500. We are <a href="https://www.diginfra.khulnasoft.com/security/" target="_self" rel="">SOC 2 Type II</a> certified.

| 1. Install the Diginfra Azure Repos App | 2. Get pull request comments |
|--------------|-----------|
<img src={useBaseUrl("img/screenshots/azure-app-install.png")} width="70%" alt="Install the Diginfra Azure Repos App into any Azure organization"/> | <img src={useBaseUrl("img/screenshots/azure-app-comment.png")} alt="Diginfra automatically leaves a comment on every pull request"/>

## Benefits

There are two key benefits of using the Azure Repos App over manual CI/CD integrations:
1. You can add Diginfra to multiple repositories with a few clicks, no need to install or update CLI versions in your CI/CD pipeline. The Diginfra Azure Repos App uses a service principal and operates independently of Azure users.
2. Diginfra runs faster as only changed folders are run based on Azure Repos App events.

## Usage

1. Go to [Diginfra Cloud](https://infra-dashboard.khulnasoft.com) to sign up or log in to start your free trial (no credit card is needed).

2. Every Diginfra user has a default organization for personal use. Create a new organization for your company using the organization dropdown at the top of the page.

   <img src={useBaseUrl("img/diginfra-cloud/create-orgs.png")} alt="Create new organization" />

3. Click on **Settings** > **Org Settings** > **Integrations** > **Azure Repos** and follow the wizard to select the projects you want to give Diginfra access to.

4. To install the Diginfra Azure Repos App, the user must have either the **Cloud Application Administrator** or **Application Administrator** role in Azure Active Directory. The App itself will be installed with read permissions to Azure repos, using the `vso.code` scope.

5. The Diginfra Azure Repos App also requires **admin consent** during setup. This step ensures that the app has the necessary permissions to manage service hooks and policies across the selected projects. [Learn more about admin consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/user-admin-consent-overview#admin-consent).

6. During setup, Diginfra will need a short-lived Personal Access Token (PAT) with additional permissions to do the following. The PAT can be deleted in Azure Repos after the setup is done.
   - Create an Azure Active Directory (AAD) group that can manage service hooks and branch policies.
   - Add the Diginfra service principal to this group.
   - Add selected projects to this group so Diginfra can manage webhooks and policies in those projects.
   Ensure that the short-lived PAT belongs to an Owner or Project Collection Administrator and has the following scopes:
      - **Graph (Read & Manage)** - to create the Diginfra group.
      - **Identity (Read)** - to find the group’s identity descriptor.
      - **Security (Manage)** - to assign service hooks permissions to the group.
      - **Project and Team (Read)** - to list projects.
      - **Member Entitlement Management (Read & Write)** - to add projects to the Diginfra group.

   > **Note**: If you add new projects in the future, you will need to provide a PAT again to temporarily elevate access for setting up that project.

7. If you use private modules, see [this docs section](/docs/features/terraform_modules/#source-control-integrations).

8. If you need to customize how Diginfra runs, add an `diginfra.yml` or `diginfra.yml.tmpl` [config file](/docs/features/config_file/) in the **Repo** > **My repo** > **Settings** tab, or to the root of your repo. The Azure Repos App will automatically use that file if it’s present. The app will also apply any usage values defined in the `diginfra-usage.yml` [usage file](/docs/features/usage_based_resources/) at the root of the repo.

9. Open a test pull request and wait for Diginfra to leave a pull request comment. The [Diginfra Cloud dashboard](https://infra-dashboard.khulnasoft.com) should also show the cost estimate.

10. When the pull request is merged, the Diginfra Cloud dashboard will show you the time it was merged, who approved it, who merged it, and any labels associated with it on Azure Repos.

## How the Azure Repos App works

The Diginfra Azure Repos App needs read access to your code repositories to run the CLI and write access to pull requests to post comments with any cost estimates, tagging, and FinOps policy issues. The app is installed at the organization level, and you can select the projects and repositories you want to grant access to.

Each time a pull request is opened or a new commit is pushed to an open pull request, the Diginfra Azure Repos App shows the any tagging or FinOps policies issues that were introduced by the by the pull request along with the cost difference between the most recent commit of the pull request branch and the merge base of the base branch. This mirrors Azure DevOps pull request diff logic and shows only the changes the pull request introduces.

The Azure Repos App automatically reflects the following changes in Diginfra:
- Repos that are **renamed** are updated in Diginfra.
- When a repo is **moved** from one Azure DevOps project to another, the change is reflected in Diginfra as long as the projects belong to the same Azure organization.
- Repos that are **deleted** or **disabled** (also known as archived) are marked as archived in Diginfra for audit purposes. Their issues will no longer show in the dashboard.

### Disable pull request comments

From the **Org Settings** > **Integrations** > **Azure Repos App** page, you can disable pull request comments so cost estimates, guardrails, and tagging policies are only shown in Diginfra Cloud. This allows testing these features without impacting the development workflow.

## Azure DevOps to Diginfra App migration

1. Follow the [usage steps](#usage) to install the app. You can do this from the same Diginfra organization you are already using. Go to **Org Settings** > **Integrations**.
2. Test it by [sending a pull request](/docs/diginfra_cloud/get_started/#4-send-a-pull-request).
3. Remove any Diginfra-related steps from your Azure Pipelines.
