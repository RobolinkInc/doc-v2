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
       logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'codrone-pro/home',
          position: 'right',
          label: 'CoDrone Pro/Lite Lib',
        },
        {
          type: 'doc',
          docId: 'codrone-mini/cdm',
          position: 'right',
          label: 'CoDrone Mini Lib',
        },
        {
          type: 'doc',
          docId: 'zumi/home/home',
          position: 'right',
          label: 'Zumi Lib',
        },
       
         {
          href: 'https://robolink.com',
          label: 'Go to robolink.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `<div className="box" ><div> © ${new Date().getFullYear()}, Robolink <br />All rights reserved </div><div><img src="img/footer-logo.png" /> </div></div>`,
     },
  },
  plugins: [[path.resolve(__dirname, './node_modules/docusaurus-lunr-search/'),{
    languages:['en', 'de'],
    excludeRoutes: [
      'docs/zumi/home/**/*', // exclude changelogs from indexing
  ]
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
            'https://github.com/RobolinkInc/doc-v2/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
