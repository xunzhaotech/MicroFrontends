/*
 * @Author: your name
 * @Date: 2020-05-03 21:39:48
 * @LastEditTime: 2020-06-26 17:59:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
// 引入配置文件设置
const path = require('path')
const themeConfig = require('./themeConfig/')
module.exports = {
  base: '/liangshuangshuang/',                    // 子路径配置
  title: '写给小猪头(LOVING)',                     // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
  description: '情不知所起却一往情深！',            // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      'name':'viewport', 
      content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
    }]
  ],
  host: '0.0.0.0',
  port: '80',
  temp: '.vuepress/',
  dest: '.vuepress/dist',
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
  //     title: 'English',
  //     description: 'Vue-powered Static Site Generator'
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN',
  //     title: '简体中文',
  //     description: 'Vue 驱动的静态网站生成器'
  //   }
  // },
  theme: 'loving',
  themeConfig
}
