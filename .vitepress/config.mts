import { defineConfig } from 'vitepress'

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
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quinn0823/quinn0823.github.io' }
    ]
  },

  locales: {
    root: { label: 'English', lang: 'en' },
    zh: { label: '简体中文', lang: 'zh' }
  }
})
