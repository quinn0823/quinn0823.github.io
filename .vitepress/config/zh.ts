import { defineConfig, type DefaultTheme } from 'vitepress'
import { copyrightYear } from './shared'

export const zh = defineConfig({
  lang: 'zh',

  title: '煊名',
  description: '嗨！我是煊名。',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/projects/scratch/': { base: '/zh/projects/scratch/', items: sidebarProjectsScratch() }
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
      level: 'deep',
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
        {
          text: '…上的',items: [
            { text: 'Scratch', link: '/zh/projects/scratch/overview' }
          ]
        }
      ]
    }
  ]
}

function sidebarProjectsScratch(): DefaultTheme.SidebarItem[] {
  return [
    { text: '概述', link: 'overview' },
    {
      text: '操作系统',
      items: [
        { text: 'Earth OS', link: 'earth-os' },
        { text: 'Earth OS ʙᴇᴛᴀ', link: 'earth-os-beta' }
      ]
    },
    {
      text: '工具',
      items: [
        { text: '小蚯同学 - 您身边的中文人工智能助手 (Remastered 2026)', link: 'xiaoqiutongxue' },
        { text: 'Secret Converter', link: 'secret-converter' }
      ]
    },
    {
      text: '游戏',
      items: [
        { text: '☁ Don\'t get out of the white area!', link: 'don-t-get-out-of-the-white-area' },
        { text: '☁ Don\'t move!', link: 'don-t-move' },
        { text: '☁ Don\'t make a sound!', link: 'don-t-make-a-sound' }
      ]
    },
    {
      text: '艺术',
      items: [
        { text: '☁ Cloud Shared Artboard', link: 'cloud-shared-artboard' }
      ]
    },
    {
      text: '音乐',
      items: [
        { text: '3.14 - A Song Of π (2500 Decimal Places)', link: '3-14-a-song-of-2500-decimal-places' }
      ]
    },
    {
      text: '动画',
      items: [
        { text: '4 Seasons', link: '4-seasons' }
      ]
    },
    {
      text: '教程',
      items: [
        { text: 'Emojis That Can Be Used On Scratch', link: 'emojis-that-can-be-used-on-scratch' }
      ]
    },
    {
      text: '介绍',
      items: [
        { text: 'About Little-Earthworm', link: 'about-little-earthworm' },
        { text: 'About Earthworm-Tutor', link: 'about-earthworm-tutor' }
      ]
    }
  ]
}
