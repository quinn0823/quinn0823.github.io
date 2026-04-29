import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { zhConfig } from './zh'

export default defineConfig({
  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: 'https://quinn0823.github.io'
  },

  head: [
    ['link', { rel: 'icon', href: '/le-flat-fill-blue-transparent.svg' }]
  ],

  themeConfig: {
    logo: { src: '/le-flat-fill-blue-transparent.svg'},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quinn0823' }
    ],

    search: {
      provider: 'local'
    },

    externalLinkIcon: true,
  },

  locales: {
    root: { label: 'English', lang: 'en', ...enConfig },
    zh: { label: '中文', lang: 'zh', ...zhConfig }
  }
})
