/*
 * @Author: your name
 * @Date: 2020-06-23 16:38:32
 * @LastEditTime: 2020-07-10 15:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\themeConfig\index.js
 */ 
// 引入基本配置
// const config = require('./config/')
// 引入导航栏
const nav = require('./nav')
// 引入侧边栏
const  sidebar = require('./sidebar')
module.exports = {
	logo: '/favicon.ico',
    repo: 'xunzhaotech/MicroFrontends',
    nav,
    sidebar
}