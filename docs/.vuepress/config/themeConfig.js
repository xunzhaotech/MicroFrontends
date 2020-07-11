/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-07-11 16:00:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\themeConfig\index.js
 */ 
// 引入基本配置
// const config = require('./config/')
// 引入导航栏
const nav = require('./themeConfig/nav')
// 引入侧边栏
const  sidebar = require('./themeConfig/sidebar')
// 默认为左侧底部设计
const navs = require('./themeConfig/navs')
// 
const comment= require('./themeConfig/comment')
const noteConfig= require('./themeConfig/noteConfig')
const footer= require('./themeConfig/footer')
module.exports = {
    smoothScroll: true,                  //启动页面滚动效果
    logo: '/favicon.ico',                // 导航栏logo
    author: "xunzhaotech",               // 作者
    searchMaxSuggestions: 20,            // 搜索结果显示最大数
    sidebarDepth: 2,                     // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    docsDir: "docs",                     // 文档不是放在仓库的根目录下 编辑的文件夹
    docsRepo: 'xunzhaotech/theme',       // 选择编辑 文档仓库和项目仓库不在同一个仓库
    docsBranch: 'master',                // 文档放在特定的分支下
    editLinks: false,                    // 启用编辑
    editLinkText: "编辑",                 // 修改编辑标签内容
    lastUpdated: "最近更新",              // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    repo: 'xunzhaotech/MicroFrontends',  // 导航栏右侧生成Github链接
    repoLabel: '查看源码',                // 自定义仓库链接文字
    prevLinks: true,                     // 默认值为true。设置为false来禁用所有页面的上一篇链接
    nextLinks: true,                     // 默认值为true。设置为false来禁用所有页面的下一篇链接
    prev: '上一篇',
    next: '下一篇',
    nav,
    navs,
    sidebar,
    comment,
    noteConfig,
    sponsor: ["/favicon.png", "/favicon.png"],
    footer,
    markdown: {
      lineNumbers: true
    }
}