import { defineConfig, type DefaultTheme } from 'vitepress'
import { copyrightYear } from './shared'

export const en = defineConfig({
  lang: 'en',

  title: 'Jonathan Chiu',
  description: 'Hi! I\'m Jonathan Chiu.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/projects/': { base: '/projects/', items: sidebarProjects() }
    },

    editLink: {
      pattern: 'https://github.com/quinn0823/quinn0823.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'With principles but no techniques, techniques can still be learned; with techniques but no principles, one goes no further than technique.<br />Licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 license</a>.',
      copyright: `Copyright © ${copyrightYear} Jonathan Chiu`
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
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Projects',
      items: [
        { text: 'Scratch', link: '/projects/scratch' }
      ]
    }
  ]
}

function sidebarProjects(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Overview', link: 'scratch' },
    {
      text: 'OS',
      base: '/projects/scratch/',
      items: [
        { text: 'Earth OS', link: 'earth-os' },
        { text: 'Earth OS ʙᴇᴛᴀ', link: 'earth-os-beta' }
      ]
    }
  ]
}
