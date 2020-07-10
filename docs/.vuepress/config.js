/*
 * @Author: your name
 * @Date: 2020-05-03 21:39:48
 * @LastEditTime: 2020-07-10 15:49:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
// 引入配置文件设置
const themeConfig = require('./config/')
module.exports = {
  base: '/liangshuangshuang/',
  dest: '.vuepress/dist',
  title: '写给小猪头LOVING',
  description: '情不知所起却一往情深！',
  theme: 'loving',
  host: '0.0.0.0',
  port: '80',
  themeConfig
}
