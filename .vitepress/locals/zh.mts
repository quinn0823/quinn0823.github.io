import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import copyrightYear from './components/copyright-year.mts'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: '煊名',
  description: '嗨！我是煊名。',

  themeConfig: {
    nav: [
      {
        text: '项目',
        items: [
          { text: 'HTML', link: '/zh/projects/html' },
          { text: 'Python', link: '/zh/projects/python' },
          { text: 'Scratch', link: '/zh/projects/scratch' }
        ]
      },
      { text: '六爻', link: '/zh/liuyao' },
      { text: '面相', link: '/zh/mianxiang' }
    ],

    sidebar: {
      '/zh/projects/': {
        base: '/zh/projects/',
        items: [
          { text: 'HTML', link: 'html' },
          { text: 'Python', link: 'python' },
          { text: 'Scratch', link: 'scratch' }
        ]
      },
    },

    editLink: {
      pattern: 'https://github.com/quinn0823/quinn0823.github.io/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: 'Licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 license</a>.',
      copyright: `Copyright © ${copyrightYear} <a href="https://github.com/quinn0823" target="_blank">Jonathan Chiu</a>`
    }
  }
}