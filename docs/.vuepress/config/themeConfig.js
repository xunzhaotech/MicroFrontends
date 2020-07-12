/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-07-12 23:28:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\themeConfig\index.js
 */ 
// 引入导航栏
const navConfig = require('./themeConfig/navConfig')
// 引入侧边栏
const  sidebarConfig = require('./themeConfig/sidebarConfig')
// 默认为左侧底部设计
const navsConfig = require('./themeConfig/navsConfig')
// 引入评论组件设置
const commentConfig= require('./themeConfig/commentConfig')
// 页签配置
const noteConfig= require('./themeConfig/noteConfig')
// 页脚配置
const footerConfig= require('./themeConfig/footerConfig')
// 主题配置
const themeconfig = {
    smoothScroll: true,                  // 启动页面滚动效果
    logo: '/favicon.ico',                // 导航栏logo
    author: "xunzhaotech",               // 作者
    displayAllHeaders: false,            // 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接, 设置为 true 来显示所有页面的标题链接
    searchMaxSuggestions: 20,            // 搜索结果显示最大数
    sidebarDepth: 2,                     // 侧边栏显示深度，默认1，最大2（显示到h3标题）默认深度是 1，它提取 h2 标题。将其设置为 0 将禁用标题链接，最大值为2，同时提取 h2 和 h3 标题
    docsDir: "docs",                     // 文档不是放在仓库的根目录下 编辑的文件夹
    docsRepo: 'xunzhaotech/theme',       // 选择编辑 文档仓库和项目仓库不在同一个仓库
    docsBranch: 'master',                // 文档放在特定的分支下
    editLinks: false,                    // 启用编辑
    editLinkText: "编辑",                 // 修改编辑标签内容
    lastUpdated: "上次更新",              // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    repo: 'xunzhaotech/MicroFrontends',  // 导航栏右侧生成Github链接
    repoLabel: '查看源码',                // 自定义仓库链接文字
    prevLinks: true,                     // 默认值为true。设置为false来禁用所有页面的上一篇链接
    nextLinks: true,                     // 默认值为true。设置为false来禁用所有页面的下一篇链接
    prev: '上一篇',
    next: '下一篇',
    nav: navConfig,
    navs: navsConfig,
    sidebar: 'auto',                     // 侧边栏配置,自动生成仅包含当前页面的标题链接的侧边栏
    // sidebar: sidebarConfig,
    comment: commentConfig,
    note: noteConfig,
    sponsor: ["/favicon.png", "/favicon.png"],
    footerConfig,
    markdown: {
      lineNumbers: true
    }
}
// 导出默认主题配置
module.exports = themeconfig