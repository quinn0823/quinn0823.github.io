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

export const shared = defineConfig({
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

    footer: {
      message: 'Licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 license</a>.',
      copyright: `Copyright © ${copyrightYear} <a href="https://github.com/quinn0823" target="_blank">Jonathan Chiu</a>`
    },

    search: {
      provider: 'local'
    },

    externalLinkIcon: true
  },
})
