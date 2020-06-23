/*
 * @Author: your name
 * @Date: 2020-05-03 21:39:48
 * @LastEditTime: 2020-06-23 16:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
// 引入配置文件设置
const themeConfig = require('./themeConfig/')
module.exports = {
  base: '/MicroFrontends/',
  dest: '.vuepress/dist',
  title: '微服务',
  description: '一个有自由创作灵感的平台！',
  theme: 'antdocs',
  themeConfig
}
