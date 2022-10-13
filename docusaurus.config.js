const path = require('path');
module.exports = {
  title: 'Robolink Documentation',
  tagline: 'Robolink docs',
  url: 'https://github.com/RobolinkInc/doc-v2',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'RobolinkInc', // Usually your GitHub org/user name.
  projectName: 'doc-v2', // Usually your repo name.
  onBrokenLinks: 'warn',
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
          label: 'CoDrone EDU',
          items: [
            {
              label: 'Blockly',
              href: '/docs/codrone-edu/blockly/reference/library-junior',
            },
            {
              label: 'Python',
              href: '/docs/codrone-edu/python/reference/library',
            },
          ]}, 
          {
            position: 'right',
            label: 'CoDrone Mini',
            items: [
             /*  {
                label: 'Blockly',
                href: '/docs/codrone-mini/blockly/reference/library-junior',
              }, */
              {
                label: 'Python',
                href: '/docs/codrone-mini/python/reference/library',
              },
            ]}, 
        {
          position: 'right',
          label: 'CoDrone Pro/Lite',
          items: [
            {
              label: 'Python',
              href: '/docs/codrone-pro/python/reference/library',
            },
            {
              label: 'Arduino',
              href: '/docs/codrone-pro/arduino/reference/library',
            },
          
          ]}, 
            {
              position: 'right',
              label: 'Zumi',
              items: [
                {
                  label: 'Python',
                  href: '/docs/zumi/python/reference/library',
                  //docs/zumi/home/home
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
      copyright: `<div id="footerBox1"> <img id="imgFooter" src="/img/footer-logo.svg" />  <a href="https://robolink.helpdocs.io/"> Robolink Help</a> | <a href="#"> Terms of use</a> | <a href="#"> Privacy</a></div><div id="box" ></div>`,
     },
  },
  plugins: [[path.resolve(__dirname, './node_modules/docusaurus-lunr-search/'),{
    languages:['en', 'de'],
    excludeRoutes: [
      'docs/zumi/python/reference/*', // exclude changelogs from indexing
      'docs/zumi/blockly/reference/*', // exclude changelogs from indexing
      'docs/codrone-mini/python/reference/*', // exclude changelogs from indexing
      'docs/codrone-mini/blockly/**/*', // exclude changelogs from indexing
      'docs/codrone-mini/blockly/*', // exclude changelogs from indexing
      'docs/codrone-pro/python/reference/*', // exclude changelogs from indexing
      'docs/codrone-pro/arduino/reference/*', // exclude changelogs from indexing
      'docs/codrone-pro/blockly/**/*', // exclude changelogs from indexing
      'docs/codrone-pro/blockly/*', // exclude changelogs from indexing    
      'docs/codrone-edu/python/reference/**/*', // exclude changelogs from indexing
      'docs/codrone-edu/blockly/**/*', // exclude changelogs from indexing
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
            'https://github.com/RobolinkInc/edit/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/RobolinkInc/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
