/*
 * @Author: your name
 * @Date: 2020-05-03 21:39:48
 * @LastEditTime: 2020-07-12 22:42:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
const path =  require('path')
// 导入默认主题配置,里面包裹顶部nav,以及侧边栏,以及其他一些默认配置
const themeConfig = require('./config/themeConfig') 
// 导入head配置,需要引入的html中head标签
const head = require('./config/headConfig') 
// 导入markdownConfig配置,如显示代码块行号,额外拓展支持h1~h6标签,不仅限于h2,h3标题
const markdown = require('./config/markdownConfig') 
// 导入插件配置,如:包括返回顶部,图片缩放,pwa等插件
const plugins = require('./config/plugin') 
module.exports = { 
  base: '/liangshuangshuang/',            // 博客部署路径配置
  host: '0.0.0.0',
  port: '80',
  // dest: '.vuepress/dist',              // 博客打包路径默认地址
  // title: '写给小猪头LOVING',               // 博客标题
  // description: '情不知所起却一往情深！',    // 博客描述
  keywords: '爱情 情不知所起却一往情深！',  // 关键字
  head,                                   // head头部配置,额外的需要被注入到当前页面的 HTML <head> 中的标签
  lastUpdated: '上次更新',                 // 显示更新时间,设置true，开启最后更新时间
  markdown,                               //  markdown相关配置
  themeConfig,                            // 导入默认主题的一些选项配置文件,便于集中管理配置
  plugins,                                // 外部插件配置,config.js里面写得太长了,阅读,修改起来,真的好恶心,有必要考虑拆分出去的
  theme:'antdocs',
  // theme: 'loving',
  // theme: require.resolve('../../vuepress-theme-loving'), // 使用本地主题
}
