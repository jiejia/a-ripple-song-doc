import { defineConfig } from 'vitepress'

const logo = {
  src: '/podcast.svg',
  alt: 'A Ripple Song logo'
}

const socialLinks = [
  { icon: 'github', link: 'https://github.com/jiejia/a-ripple-song' }
]

export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/podcast.svg' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'A Ripple Song',
      description: 'A WordPress Podcast Plugin',
      themeConfig: {
        logo,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
        socialLinks,
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 A Ripple Song'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'A Ripple Song',
      description: '一个 WordPress 播客插件',
      themeConfig: {
        logo,
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '主题', link: '/zh/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh/markdown-examples' },
              { text: '运行时 API 示例', link: '/zh/api-examples' }
            ]
          }
        ],
        socialLinks,
        footer: {
          message: '基于 MIT License 发布。',
          copyright: 'Copyright © 2026 A Ripple Song'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '本页目录'
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部'
      }
    }
  }
})
