/*
 * @Author: your name
 * @Date: 2020-05-03 21:39:48
 * @LastEditTime: 2020-05-27 13:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
module.exports = {
  base: '/MicroFrontends/',
  dest: './dist',
  title: 'Hello MT-BLOG',
  description: '12345，上山打老虎。',
  themeConfig: {
    repo: 'TaoXuSheng/mt-blog',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: '关于我', link: '/my/' },
      {
        text: '我的项目',
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    sidebar: {
      '/blog/': [
        'git',
        'vue-amap',
        'js-function',
        'vuepress-theme',
        'vuepress',
        'vue-business-component',
        'stylus-converter',
        'click-outside',
        'json-server'
      ]
    }
  }
}
