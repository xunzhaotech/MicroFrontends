/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-06-26 23:30:21
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
    sidebar,
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    search: true,
    sidebarDepth: 2,
    displayAllHeaders: true, // 默认值：false
    searchMaxSuggestions: 10,
    activeHeaderLinks: true, // 默认值：true
    lastUpdated: '最近更新',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    personalInfo: {
        name: 'melodydl',
        avatar: '/avatar-top.jpeg',
        headerBackgroundImg: '/avatar-bg.jpeg',
        description: 'In me the tiger sniffs the rose<br/>情不知所起,却一往情深！',
        email: 'xunzhaotech@aliyun.com',
        location: 'Guangzhou, China',
        // organization: '不知名某公司',
    },
    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    algolia: {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
    }


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