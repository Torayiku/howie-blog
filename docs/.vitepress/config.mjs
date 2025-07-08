import { defineConfig } from 'vitepress'
import AutoNavPlugin from 'vitepress-auto-nav-sidebar'
// import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'

const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: ["node_modules", "assets", "public", ".vuepress", "code", ".obsidian", "utils"], // 需要排除的一些目录
  ignoreFiles: ['个人简历'], // 需要排除的一些文件
  dirPrefix: '目录：',
  filePrefix: '文件：',
  showNavIcon:false,
  showSideIcon:true,
  isCollapse: true,
  collapsed: false,
  singleLayerNav:true,
  hiddenFilePrefix: '.'
})
// module.exports = {
//   themeConfig: {
//     nav,
//     sidebar,
//   },
// };




export default defineConfig({
  title: "Howie's Blog",
  description: "A Blog of Howie",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    nav:nav,
    sidebar:sidebar,
    // nav: [
    //   { text: 'HOME', link: '/' },
    //   { text: 'ABOUT', link: '/AboutMe', activeMatch: '/AboutMe' },
    //   { text: 'EPHEMERA CABINET', link: '/日常碎片/', activeMatch: '/日常碎片/' },
    //   { text: 'FORGE NOTES', link: '/日常碎片/', activeMatch: '/日常碎片/' },
    //   { text: 'WHISPERSING PAGES', link: '/日常碎片/', activeMatch: '/日常碎片/' },
    //   // {
    //   //   text: '齿轮与玫瑰',
    //   //   link: '/日常碎片',
    //   //   items: [
    //   //     { text: 'Item A', link: '/item-1' },
    //   //     { text: 'Item B', link: '/item-2' },
    //   //     { text: 'Item C', link: '/item-3' }
    //   //   ]
    //   // },
    // ],
    // sidebar: {
    //   '/日常碎片/': [
    //     {
    //       text: '2025年',
    //       items: [
    //         { text: '2021.5.6 由道德滑坡想到的', link: '日常碎片/2021.5.6由道德滑坡想到的' },
    //         { text: '2020.5.4 娟的故事', link: '/日常碎片/娟的故事' },

    //       ],
    //       collapsed: false,
    //     },
    //     {
    //       text: '2024年以前',
    //       items: [
    //         // {
    //         //   text: '2025年',
    //         //   link: '/api-examples',
    //         //   // collapsed: true,
    //         //   items: [
    //         //     { text: 'Item A', link: '/item-1' },
    //         //   ]
    //         // },
    //         { text: '2021.5.6 由道德滑坡想到的', link: '日常碎片/2021.5.6由道德滑坡想到的' },
    //         { text: '2020.5.4 娟的故事', link: '/日常碎片/娟的故事' },

    //       ],
    //       collapsed: false,
    //     }
    //   ]
    // },
    // sidebar: [
    //   {
    //     text: '日常碎片',
    //     items: [
    //       { text: '2020.5.4 娟的故事', link: '/日常碎片/娟的故事' },
    //       { text: '2021.5.6 由道德滑坡想到的', link: '日常碎片/2021.5.6由道德滑坡想到的' },
    //       {
    //         text: 'Runtime API Examples',
    //         link: '/api-examples',
    //         // collapsed: true,
    //         items: [
    //           { text: 'Item A', link: '/item-1' },
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     text: '目录2',
    //     items: [
    //       { text: '测试1', link: '/markdown-examples' },
    //       { text: '天气', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Torayiku' },
      // { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'wechat', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'linkedin', link: 'https://github.com/vuejs/vitepress' },
    ],
    // footer: {
    //   message: 'Released under the MIT License.测试',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    lastUpdated: true
    // aside: false
  },
  // 部署的时候需要注意该参数避免样式丢失 
  base: "/howie-blog/",
})
