module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'getting_started',
    },
    {
      type: 'doc',
      id: 'integrations/cicd',
    },
    {
      type: 'category',
      label: 'Open source features',
      collapsed: false,
      items: [
        'features/cli_commands',
        'features/usage_based_resources',
        'features/config_file',
        'features/vscode',
        'features/terraform_modules',
        'features/terragrunt',
        'features/environment_variables',
      ],
    },
    {
      type: 'category',
      label: 'Diginfra Cloud features',
      collapsed: false,
      items: [
        'diginfra_cloud/get_started',
        'diginfra_cloud/finops_policies',
        'diginfra_cloud/tagging_policies',
        'diginfra_cloud/guardrails',
        'diginfra_cloud/jira_integration',
        'diginfra_cloud/reports',
        'diginfra_cloud/data_export',
        'diginfra_cloud/api',
        'diginfra_cloud/sso',
        'diginfra_cloud/custom_price_books',
        'diginfra_cloud/readme_badge',
        'diginfra_cloud/key_concepts',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/github_app',
        'integrations/azure_repos_app',
        'integrations/gitlab_app',
        'integrations/cicd_integrations',
        'integrations/slack',
        'integrations/spacelift',
        'integrations/terraform_cloud_enterprise',
        'integrations/open_policy_agent',
        'integrations/diginfra_api',
        'integrations/third_party_integrations',
      ],
    },
    {
      type: 'category',
      label: 'Supported clouds',
      collapsed: true,
      items: [
        `supported_resources/overview`,
        'supported_resources/aws',
        'supported_resources/azure',
        'supported_resources/google',
        'supported_resources/cloud_pricing_api',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
    },
    {
      type: 'doc',
      id: 'troubleshooting',
    },
    {
      type: 'doc',
      id: 'support',
    },
  ]
};
