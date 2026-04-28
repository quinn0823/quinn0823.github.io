import { defineConfig } from 'vitepress'

const START_YEAR = 2026;
const currentYear = new Date().getFullYear();
let copyrightYear;
if (currentYear === START_YEAR) {
  copyrightYear = `${START_YEAR}`;
} else if (currentYear === START_YEAR + 1) {
  copyrightYear = `${START_YEAR}, ${currentYear}`;
} else {
  copyrightYear = `${START_YEAR}-${currentYear}`;
}

export default defineConfig({
  title: 'Jonathan Chiu',
  // titleTemplate: ':title | Jonathan Chiu',
  description: 'Hi! I\'m Jonathan Chiu.',
  head: [
    ['link', { rel: 'icon', href: '/le-flat-fill-blue-transparent.svg' }]
  ],
  lang: 'en-US',
  // base: '/',

  cleanUrls: true,
  rewrites: { 'en/:rest*': ':rest*' },

  // srcDir: '.',
  // srcExclude: [],
  // outDir: './.vitepress/dist',
  // assetsDir: 'assets',
  // cacheDir: './.vitepress/cache',
  // ignoreDeadLinks: false,
  // metaChunk: false,
  // mpa: false,

  // appearance: true,
  lastUpdated: true,

  // markdown: {},
  // vite: {},
  // vue: {},

  themeConfig: {
    // i18nRouting: true,

    logo: { src: '/le-flat-fill-blue-transparent.svg', alt: 'Little Earthworm'},
    // siteTitle: '',
    nav: [
      {
        text: 'Projects',
        items: [
          { text: 'HTML', link: '/projects/html' },
          { text: 'Python', link: '/projects/python' },
          { text: 'Scratch', link: '/projects/scratch' }
        ]
      },
      { text: 'Liu Yao (Six Lines)', link: '/liuyao' },
      { text: 'Mian Xiang (face reading)', link: '/mianxiang' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/quinn0823', ariaLabel: 'Jonathan Chiu on GitHub' }
    ],

    sidebar: {
      '/projects/': [
        { text: 'HTML', link: '/projects/html' },
        { text: 'Python', link: '/projects/python' },
        { text: 'Scratch', link: '/projects/scratch' }
      ],
    },

    // aside: true,
    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/quinn0823/quinn0823.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    // lastUpdated: {
    //   text: 'Last updated'
    //   formatOptions: {}
    // },
    // docFooter: {
    //   prev: '',
    //   next: ''
    // }

    footer: {
      message: 'Licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 license</a>.',
      copyright: `Copyright © ${copyrightYear} <a href="https://github.com/quinn0823" target="_blank">Jonathan Chiu</a>`
    },

    // darkModeSwitchLabel: 'Appearance',
    // lightModeSwitchTitle: 'Switch to light theme',
    // darkModeSwitchTitle: 'Switch to dark theme',
    // sidebarMenuLabel: 'Menu',
    // returnToTopLabel: 'Return to top',
    // langMenuLabel: 'Change language',

    search: {
      provider: 'local'
    },

    externalLinkIcon: true,
  },

  locales: {
    root: { label: 'English', lang: 'en' },
    zh: { label: '简体中文', lang: 'zh' }
  },

  sitemap: {
    hostname: 'https://quinn0823.github.io'
  }
})
