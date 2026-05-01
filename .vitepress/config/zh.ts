import { defineConfig, type DefaultTheme } from 'vitepress'
import { copyrightYear } from './shared'

export const zh = defineConfig({
  lang: 'zh',

  title: '煊名',
  description: '嗨！我是煊名。',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/projects/': { base: '/zh/projects/', items: sidebarProjects() }
    },

    editLink: {
      pattern: 'https://github.com/quinn0823/quinn0823.github.io/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '有道无术，术尚可求；有术无道，止于术。<br />Licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 license</a>.',
      copyright: `Copyright © ${copyrightYear} Jonathan Chiu`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页'
    },

    lastUpdated: {
      text: '最后更新时间'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '项目',
      items: [
        { text: 'Scratch', link: '/zh/projects/scratch' }
      ]
    }
  ]
}

function sidebarProjects(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Overview', link: 'scratch' },
    {
      text: '操作系统',
      base: '/zh/projects/scratch/',
      items: [
        { text: 'Earth OS', link: 'earth-os' },
        { text: 'Earth OS ʙᴇᴛᴀ', link: 'earth-os-beta' }
      ]
    },
    {
      text: '游戏',
      base: '/zh/projects/scratch/',
      items: [
        { text: '☁ Don\'t get out of the white area!', link: 'don-t-get-out-of-the-white-area' }
      ]
    }
  ]
}
