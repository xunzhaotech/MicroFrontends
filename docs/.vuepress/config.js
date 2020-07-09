/*
 * @Author: your name
 * @Date: 2020-05-03 21:39:48
 * @LastEditTime: 2020-07-09 14:18:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
// 引入配置文件设置
const themeConfig = require('./themeConfig/')
module.exports = {
  base: '/liangshuangshuang/',
  dest: '.vuepress/dist',
  title: '微服务',
  description: '一个有自由创作灵感的平台！',
  theme: 'antdocs',
  host: '0.0.0.0',
  port: '80',
  themeConfig
}
