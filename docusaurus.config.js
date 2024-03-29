// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ancon Protocol Docs',
  tagline: 'Ancon Protocol Documentation',
  url: 'https://electronic-signatures-industries.github.io/',
  baseUrl: '/ancon-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Electronic-Signatures-Industries', // Usually your GitHub org/user name.
  projectName: 'ancon-docs', // Usually your repo name.
  trailingSlash: false, // 
  deploymentBranch: 'deploy-gh',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Electronic-Signatures-Industries/ancon-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ancon docs',
        logo: {
          alt: 'Ancon Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'api/reference',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/Electronic-Signatures-Industries/ancon-docs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'API',
                to: '/docs/api/reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://ifesa.medium.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Electronic-Signatures-Industries',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Industrias de Firmas Electronicas SA. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
