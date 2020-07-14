/*
 * @Author: your name
 * @Date: 2020-07-11 11:32:00
 * @LastEditTime: 2020-07-14 13:55:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config\plugin.js
 */ 
const moment = require('moment')
const plugin = [
    '@vuepress/back-to-top',            // 返回到顶部插件
    '@vuepress/nprogress',              // 进度条插件
    'reading-progress',                 // 阅读进度插件
    'img-lazy',                         // 图片懒加载
    'vuepress-plugin-baidu-autopush',   // 注入百度url-baidu-push脚本，以优化百度SEO网站
    'vuepress-plugin-reading-time',     // 阅读时间
    'vuepress-plugin-smooth-scroll',    // Vuepress站点使用平滑滚动
    'vuepress-plugin-table-of-contents',// 为Vuepress站增加目录组件，支持在md和vue中写<TOC />,生成目录
    'vuepress-plugin-cat',              // 编程猫
    [
        '@vuepress/active-header-links',
        {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }
    ],
    [
        {
            transformer: (timestamp) => {
                moment.locale('zh-cn')
                return moment(timestamp).format('LLLL')
            }
        }
    ],
    [
        {
            name: 'page-plugin',
            globalUIComponents:[
                // global-Cat
            ]
        }
    ]
]
// 导出默认
module.exports = plugin