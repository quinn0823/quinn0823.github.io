import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import copyrightYear from './components/copyright-year.mts'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'Jonathan Chiu',
  description: 'Hi! I\'m Jonathan Chiu.',

  themeConfig: {
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

    sidebar: {
      '/projects/': {
        base: '/projects/',
        items: [
          { text: 'HTML', link: 'html' },
          { text: 'Python', link: 'python' },
          { text: 'Scratch', link: 'scratch' }
        ]
      },
    },

    editLink: {
      pattern: 'https://github.com/quinn0823/quinn0823.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 license</a>.',
      copyright: `Copyright © ${copyrightYear} <a href="https://github.com/quinn0823" target="_blank">Jonathan Chiu</a>`
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    outline: {
      label: 'On this page'
    },

    lastUpdated: {
      text: 'Last updated'
    },
  }
}