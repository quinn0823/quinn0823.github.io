import { defineConfig, type DefaultTheme } from 'vitepress'
import { copyrightYear } from './shared'

export const en = defineConfig({
  lang: 'en',

  title: 'Jonathan Chiu',
  description: 'Hi! I\'m Jonathan Chiu.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/projects/scratch/': { base: '/projects/scratch/', items: sidebarProjectsScratch() }
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
        { text: 'Scratch', link: '/projects/scratch/overview' }
      ]
    }
  ]
}

function sidebarProjectsScratch(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Overview', link: 'overview' },
    {
      text: 'OS',
      items: [
        { text: 'Earth OS', link: 'earth-os' },
        { text: 'Earth OS ʙᴇᴛᴀ', link: 'earth-os-beta' }
      ]
    },
    {
      text: 'Games',
      items: [
        { text: '☁ Don\'t get out of the white area!', link: 'don-t-get-out-of-the-white-area' },
        { text: '☁ Don\'t move!', link: 'don-t-move' },
        { text: '☁ Don\'t make a sound!', link: 'don-t-make-a-sound' }
      ]
    },
    {
      text: 'Arts',
      items: [
        { text: '☁ Cloud Shared Artboard', link: 'cloud-shared-artboard' }
      ]
    },
    {
      text: 'Music',
      items: [
        { text: '3.14 - A Song Of π (2500 Decimal Places)', link: '3-14-a-song-of-2500-decimal-places' }
      ]
    }
  ]
}
