/*
 * @Author: your name
 * @Date: 2020-04-09 19:48:12
 * @LastEditTime: 2020-04-09 21:11:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config.js
 */
const resolve = dir => require('path').join(__dirname, dir)
const  nav = require('./themeConfig/nav')         // 引入导航栏
const  sidebar =require('./themeConfig/sidebar')  // 引入侧边栏

const sortFn = key => (a, b) => {
  // README排在第一位 其他按照首字母顺序排列
  if (a[key] === 'README') return -1
  return a[key][0] > b[key][0] ? 1 : -1
}

module.exports = {
  title: '前端微服务',
  description: '讯曌科技前端微服务',// 描述 
  keywords:"讯曌科技前端微服务博客",  // 关键字
  head:[   // 配置头部
    [
        ['link', {rel:'icon', href:"/icon.png"}],
        ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
    ]
  ],
  markdown: {
    lineNumbers: true,  // 代码显示行号
  }, 
  base: '/',
  dest: 'vuepress',    // 设置打包路径
  lastUpdated: 'Last Updated',    // 显示更新时间
  serviceWorker: true,
  // themeConfig:{
  //   logo:"/icon.png",   // 导航栏左边logo,不写就不显示
  //   sidebarDepth: 2, // 侧边栏显示2级
  //   nav:[   // 导航栏配置
  //       { text: 'vue', link: '/' },
  //       { text: 'css', link: '/blog/' },
  //       { 
  //           text: 'js',  // 这里是下拉列表展现形式。 items可以一直嵌套下去
  //           items:[
  //               text:"ES5", link:"/js/es5/",
  //               text:"ES6", link:"/js/es6/",
  //           ]
  //       },
  //       {text: 'github', link:"https://github.com/1046224544"}
  //   ],
    // 为以下路由添加侧边栏
    // sidebar: ['/', '/git', '/vue']
    // 嵌套侧边栏  以对象的方式嵌套下去
    // sidebar: {
    //     '/2019/': [
    //         ['','前言(2019)'],
    //         {
    //             title:"10月份",
    //             collapsable:false,
    //             sidebarDepth:2,
    //             children:[
    //                 ["Nginx部署Vue项目", "Nginx部署Vue项目"],
    //                 ["NVM自由切换Node版本", "NVM自由切换Node版本小笔记"],
    //                 ["KTV点歌系统", "KTV点歌系统"],
    //             ]
    //         },
    //         {
    //             title:"9月份",
    //             collapsable:false,
    //             sidebarDepth:2,
    //             children:[
    //                 ["综合性博客网站", "综合性博客网站"]
    //             ]
    //         }
    //     ],
    //     ...
    // }
  // },
  // 主题配置
  themeConfig: {
    // 顶部导航栏配置
    nav,   // 引入导航栏
    sidebar  // 引入侧边栏
  },
  plugins: {
    'vuepress-plugin-auto-sidebar': {
      sort: sortFn,
    }
  },
  configureWebpack: {
    module: {
      rules: [
        { test: /[.]js$/, exclude: /node_modules/, use: ['babel-loader'] },
      ]
    }
  },
  chainWebpack(config) {
    // 设置与vue.config.js公共的别名
    config.resolve.alias.set('@', resolve('../../src')).end()
    // config.module.rule('js').use('babel-loader').query()

  },
  scss: {
    // 参考vue.config.js实现
    // 传入共享的全局变量
    prependData: `
        @import "~@/styles/variables.scss";
        @import "~@/styles/mixins.scss";
        `
  }
}
