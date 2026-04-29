import { defineConfig } from 'vitepress'

function getCopyrightYear() {
  const START_YEAR = 2026;
  const currentYear = new Date().getFullYear();
  if (currentYear === START_YEAR) {
    return `${START_YEAR}`;
  } else if (currentYear === START_YEAR + 1) {
    return `${START_YEAR}, ${currentYear}`;
  } else {
    return `${START_YEAR}-${currentYear}`;
  }
}
export const copyrightYear = getCopyrightYear();

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

    search: {
      provider: 'local'
    },

    externalLinkIcon: true
  }
})
