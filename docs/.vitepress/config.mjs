import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Howie's Blog",
  description: "A Blog of Howie",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    nav: [
      { text: '主页', link: '/' },
      { text: '青苔札记', link: '/青苔札记' },
      {
        text: '齿轮与玫瑰',
        link: '/青苔札记'
        // items: [
        //   { text: 'Item A', link: '/item-1' },
        //   { text: 'Item B', link: '/item-2' },
        //   { text: 'Item C', link: '/item-3' }
        // ]
      },
      { text: '未知海图', link: '/青苔札记/娟的故事' },
    ],
    sidebar: {
      '/青苔札记/': [
        {
          text: '青苔札记',
          items: [
            { text: '2020.5.4 娟的故事', link: '/青苔札记/娟的故事' },
            { text: '2021.5.6 由道德滑坡想到的', link: '青苔札记/2021.5.6由道德滑坡想到的' },
            {
              text: '2025年',
              link: '/api-examples',
              // collapsed: true,
              items: [
                { text: 'Item A', link: '/item-1' },
              ]
            }
          ]
        }
      ]
    },
    // sidebar: [
    //   {
    //     text: '青苔札记',
    //     items: [
    //       { text: '2020.5.4 娟的故事', link: '/青苔札记/娟的故事' },
    //       { text: '2021.5.6 由道德滑坡想到的', link: '青苔札记/2021.5.6由道德滑坡想到的' },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.测试',
      copyright: 'Copyright © 2019-present Evan You'
    },
    lastUpdated: true
    // aside: false
  },
  // 部署的时候需要注意该参数避免样式丢失 
  base: "/howie-blog/",
})
