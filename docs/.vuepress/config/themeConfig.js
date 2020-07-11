/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-07-11 15:37:31
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
    logo: '/favicon.ico',                // 导航栏logo
    author: "xunzhaotech",               // 作者
    searchMaxSuggestions: 20,            // 搜索结果显示最大数
    sidebarDepth: 2,                     // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    docsDir: "docs",                     // 编辑的文件夹
    editLinks: false,                    // 启用编辑
    editLinkText: "编辑",                 // 修改编辑标签内容
    lastUpdated: "最近更新",              // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    repo: 'xunzhaotech/MicroFrontends',  // 导航栏右侧生成Github链接
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