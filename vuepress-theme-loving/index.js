/*
 * @Author: your name
 * @Date: 2020-07-10 14:17:42
 * @LastEditTime: 2020-07-21 14:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\vuepress-theme-loving\index.js
 */ 
const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const { sep } = path
  const { themeConfig, siteConfig, sourceDir } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
        .keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
  )
  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    chainWebpack: config=> {
      config.module
        .rule('less')
        .oneOf('normal')
        .use('less-loader')
        .options({ javascriptEnabled: true })
        .end()
        .end()
        .oneOf('modules')
        .use('less-loader')
        .options({ javascriptEnabled: true })
    },
    alias () {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js'),
        '@docs': `${sourceDir}${sep}.vuepress${sep}styles`
      }
    },
    plugins: [
      [
        '@vuepress/blog',
        {
          /* options */
        },
      ],
      // ['@vuepress/active-header-links', 
      //   {
      //     sidebarLinkSelector: '.sidebar-link',
      //     headerAnchorSelector: '.header-anchor'
      //   }
      // ],
      ['@vuepress/search', 
        {
          searchMaxSuggestions: 10
        }
      ],
      [
        '@vuepress/active-header-links', 
         options.activeHeaderLinks
      ],
      '@vuepress/plugin-search',
      // 'uepress-plugin-cat',
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告'
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }],
      ['smooth-scroll', enableSmoothScroll]
    ]
  }
}
