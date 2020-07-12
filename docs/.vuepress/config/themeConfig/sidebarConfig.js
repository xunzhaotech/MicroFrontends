/*
 * @Author: your name
 * @Date: 2020-05-26 17:14:16
 * @LastEditTime: 2020-07-12 23:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-admin\docs\.vuepress\themeConfig\sidebar.js
 */ 
const sidebar = {
    '/standard/': [
      ['','前言(2019)'],
      {
        title: '布局类组件',
        collapsable: true,
        sidebarDepth:2,
        children:[
          ["Nginx部署Vue项目", "Nginx部署Vue项目"],
          ["NVM自由切换Node版本", "NVM自由切换Node版本小笔记"],
          ["KTV点歌系统", "KTV点歌系统"],
        ],
        // children: [
        //   'base/test1',
        //   'base/test2',
        //   'base/test3',
        //   'base/test4',
        // ]
      },
      {
        title: '可视化组件',
        collapsable: true,
        children: [
        ]
      },
      {
        title: '工具类组件',
        collapsable: true,
        children: [
        ]
      },
      {
        title: '方法类函数',
        collapsable: true,
        children: [
        ]
      }
    ]
    }
// module.exports = {
//     "/api/front/2019/": require('../.vuepress/frontbar/2019'),  // 继续分类
//     "/api/front/2020/": require('../.vuepress/frontbar/2020'),
//     "/api/end/2019/": require('../.vuepress/endbar/2019'),
//     "/api/learn/koa/": require('../.vuepress/learnbar/koabar'),
//     "/api/learn/express/": require('../.vuepress/learnbar/expressbar'),
//     "/api/learn/java/": require('../.vuepress/learnbar/javabar'),
//     "/api/learn/es6/": require('../.vuepress/learnbar/es6bar'),
//     "/api/learn/vue/": require('../.vuepress/learnbar/vuebar'),
// }
// module.exports = [
//     '/',
//     '/page-a',
//     ['/page/b','EXplicit link text' ],
//     {title: 'Group1',
      //   collapsable:false,
      //   children: ['/'],
      // }
// ]
// 导出默认
module.exports = sidebar