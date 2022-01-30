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
    prism: {
      theme: require('prism-react-renderer/themes/github')
    },
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
          position: 'right',
          label: 'CoDrone Pro/Lite',
          items: [
            {
              label: 'Blockly',
              href: '/doc-v2/docs/codrone-pro/home',
            },
            {
              label: 'Python',
              href: '/doc-v2/docs/codrone-pro/home',
            },
            {
              label: 'Arduino',
              href: '/doc-v2/docs/codrone-pro/home',
            },
          
          ]},
          {
            position: 'right',
            label: 'CoDrone Mini',
            items: [
              {
                label: 'Blockly',
                href: '/doc-v2/docs/codrone-mini/blockly/reference_blockly',
              },
              {
                label: 'Python',
                href: '/doc-v2/docs/codrone-mini/cdm',
              },
            ]},  
            {
              position: 'right',
              label: 'Zumi',
              items: [
                {
                  label: 'Blockly',
                  href: '/doc-v2/docs/zumi/home/home',
                },
                {
                  label: 'Python',
                  href: '/doc-v2/docs/zumi/home/home',
                  //doc-v2/docs/zumi/home/home
                },
              ]},      
         {
          href: 'https://robolink.com',
          label: 'Go to robolink.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `<div id="footerBox1"> <img id="imgFooter" src="/doc-v2/img/footer-logo.svg" />  <a href="#"> Robolink Help</a> | <a href="#"> Terms of use</a> | <a href="#"> Privacy</a></div><div id="box" ></div>`,
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
