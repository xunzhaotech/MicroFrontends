/*
 * @Author: your name
 * @Date: 2020-07-11 11:30:48
 * @LastEditTime: 2020-07-21 17:06:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config\headConfig.js
 */ 
const head = [
    ['link', { rel: 'icon', href: '/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '情不知所起，却一往情深！'}],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc'}],// 百度统计博主验证
    ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}] // 移动端阻止页面缩放
]
// 导出默认
module.exports = head