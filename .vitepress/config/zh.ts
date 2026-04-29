import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh',

  title: '煊名',
  description: '嗨！我是煊名。',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/projects/': { base: '/zh/projects/', items: sidebarProjects() },
    },

    editLink: {
      pattern: 'https://github.com/quinn0823/quinn0823.github.io/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
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
        { text: 'HTML', link: '/zh/projects/html' },
        { text: 'Python', link: '/zh/projects/python' },
        { text: 'Scratch', link: '/zh/projects/scratch' }
      ]
    },
    {
      text: '易经',
      items: [
        { text: '六爻', link: '/zh/yijing/liuyao' },
        { text: '面相', link: '/zh/yijing/mianxiang' }
      ]
    }
  ]
}

function sidebarProjects(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'HTML', link: 'html' },
    { text: 'Python', link: 'python' },
    { text: 'Scratch', link: 'scratch' }
  ]
}
