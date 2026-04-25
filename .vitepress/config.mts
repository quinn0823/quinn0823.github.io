import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Jonathan Chiu',
  description: 'Hi! I\'m Jonathan Chiu.',
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

  rewrites: {
    'en/:rest*': ':rest*'
  },
  locales: {
    root: { label: 'English', lang: 'en' },
    zh: { label: '简体中文', lang: 'zh' }
  }
})
