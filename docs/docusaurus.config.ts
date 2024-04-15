import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GitHub Actions Core',
  tagline: 'Reusable GitHub Actions',
  favicon: 'img/favicon.ico',

  url: 'https://paion-data.github.io',
  baseUrl: '/github-actions-core/',

  organizationName: 'paion-data',
  projectName: 'github-actions-core',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/paion-data/github-actions-core/tree/master/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Paion GitHub Actions',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'actionListSidebar',
          position: 'left',
          label: 'Documentations',
        },
        {
          href: 'https://github.com/paion-data/github-actions-core',
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
              label: 'All Actions',
              to: '/docs/yml-md-style-and-link-checks',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/paion-data/github-actions-core',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Actions Documentations',
              href: 'https://docs.github.com/en/actions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paion Data. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ruby', 'json', 'java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
