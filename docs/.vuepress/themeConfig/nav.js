/*
 * @Author: your name
 * @Date: 2020-04-09 20:49:45
 * @LastEditTime: 2020-04-09 20:52:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\themeConfig\nav.js
 */
module.exports = [
    {text:"首页", link:"/"},
    {
        text:"技术API",
        ariLabel:"技术API",
        items:[
            {text:"koa", link:"/api/learn/koa/"},
            {text:"vue", link:"/api/learn/vue/"},
            {text:"es6", link:"/api/learn/es6/"},
            {text:"java", link:"/api/learn/java/"},
            {text:"express", link:"/api/learn/express/"},
        ]
    },
    {
        text:"日常博客",
        ariLabel:"日常博客",
        items:[
            {text:"前端",link:"/api/front/"},
            {text:"后端",link:"/api/end/"},
            {text:"其他",link:"/api/orther/1.md"},
        ]
    },
    {text:"关于博客", link:"/api/builog/"},
    {text:"关于作者", link:"/api/author/"},
    {
        text:"其他小站",
        ariLabel:"其他小站", 
        items:[
            {text:"掘金", link:'https://juejin.im/user/5d1079ab6fb9a07ed4410cc0'},
            {text:"SegmentFault", link:'https://segmentfault.com/u/98kk'},
            {text:"CSDN", link:'https://blog.csdn.net/weixin_43374176'},
        ]
    },
    {
        text:"联系",
        ariLabel:"联系",
        items:[
            {text:"邮箱", link:"mailto:wsm_1105@163.com", target:"_blank"},
            {text:"其他", link:"/api/contact/"}
        ]
    },
    {text:"GitHub", link:"http://github.com/1046224544"}
]
