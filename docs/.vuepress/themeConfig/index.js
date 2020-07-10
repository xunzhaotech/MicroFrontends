/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-06-23 16:50:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\themeConfig\index.js
 */ 
// 引入基本配置
const config = require('../config/')
// 引入导航栏
const nav = require('./nav')
// 引入侧边栏
const  sidebar = require('./sidebar')
module.exports = {
	logo: '/favicon.ico',
    repo: config && config.repo || 'xunzhaotech/MicroFrontends',
    nav,
    sidebar
}
//      {
//       '/blog/': [
//         'git',
//         'vue-amap',
//         'js-function',
//         'vuepress-theme',
//         'vuepress',
//         'vue-business-component',
//         'stylus-converter',
//         'click-outside',
//         'json-server'
//       ]
//     }
//   }
//  [
//     { text: 'Home', link: '/' },
//     { text: 'Blog', link: '/blog/' },
//     { text: '关于我', link: '/my/' },
//     {
//       text: '我的项目',
//       items: [
//         { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
//         { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
//       ]
//     }
//   ]