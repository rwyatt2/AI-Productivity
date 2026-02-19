import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// Branding: change title, tagline, navbar.title, footer.copyright here; styles in src/css/custom.css

const repoName = 'AI-Productivity';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const kitConfig = require('../kit/cursor-ai-kit.config.json');

const config: Config = {
  title: 'AI Productivity',
  tagline: 'AI Kit for Cursor and Copilot',
  favicon: 'img/favicon.svg',

  customFields: {
    kitVersion: kitConfig.version,
    heroHighlight: 'now with Google Antigravity support',
  },

  future: {
    v4: true,
  },

  url: 'https://rwyatt2.github.io',
  baseUrl: isGitHubPages ? `/${repoName}/` : '/',

  organizationName: 'rwyatt2',
  projectName: repoName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/rwyatt2/AI-Productivity/tree/main/site',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    mermaid: {
      theme: { light: 'base', dark: 'dark' },
      options: {
        themeVariables: {
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '16px',
          primaryColor: '#fafafa',
          primaryTextColor: '#171717',
          primaryBorderColor: '#e5e5e5',
          lineColor: '#404040',
          secondaryColor: '#f0f0f0',
          tertiaryColor: '#e5e5e5',
        },
      },
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true, // system preference when set
    },
    navbar: {
      title: 'AI Productivity',
      logo: {
        alt: 'AI Productivity',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'whats-new',
          label: "What's New",
          position: 'left',
        },
        {
          href: 'https://github.com/rwyatt2/AI-Productivity',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Intro', to: '/docs/intro' },
            { label: 'Getting Started', to: '/docs/getting-started/what-is-this' },
            { label: "What's New", to: '/docs/whats-new' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Kit preview', to: '/docs/reference/kit-preview' },
          ],
        },
        {
          title: 'Repo',
          items: [
            { label: 'GitHub', href: 'https://github.com/rwyatt2/AI-Productivity' },
            { label: 'Releases', href: 'https://github.com/rwyatt2/AI-Productivity/releases' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Russell Wyatt.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
