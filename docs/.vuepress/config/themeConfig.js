/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-07-11 11:40:26
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
    logo: '/favicon.ico',
    author: "xunzhaotech",
    searchMaxSuggestions: 20,
    docsDir: "docs",
    editLinks: false,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "最近更新",
    repo: 'xunzhaotech/MicroFrontends',
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