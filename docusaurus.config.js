const path = require('path');
module.exports = {
  title: 'Robolink Documentation',
  tagline: 'Robolink docs',
  url: 'https://github.com/RobolinkInc/doc-v2',
  baseUrl: '/doc-v2/',
  favicon: 'img/favicon.ico',
  organizationName: 'RobolinkInc', // Usually your GitHub org/user name.
  projectName: 'doc-v2', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true, 
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'zumi/home',
          position: 'left',
          label: 'Zumi Lib',
        },
        {
          type: 'doc',
          docId: 'codrone-pro/home',
          position: 'left',
          label: 'CoDrone Pro/Lite Lib',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [[path.resolve(__dirname, './node_modules/docusaurus-lunr-search/'),{
    languages:['en', 'de']
  }]],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/RobolinkInc/doc-v2/edit/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://ggithub.com/RobolinkInc/doc-v2/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
