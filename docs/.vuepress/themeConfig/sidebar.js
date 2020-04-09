/*
 * @Author: your name
 * @Date: 2020-04-09 20:50:36
 * @LastEditTime: 2020-04-09 20:51:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\themeConfig\sidebar.js
 */
module.exports = {
    "/api/front/2019/": require('../.vuepress/frontbar/2019'),  // 继续分类
    "/api/front/2020/": require('../.vuepress/frontbar/2020'),
    "/api/end/2019/": require('../.vuepress/endbar/2019'),
    "/api/learn/koa/": require('../.vuepress/learnbar/koabar'),
    "/api/learn/express/": require('../.vuepress/learnbar/expressbar'),
    "/api/learn/java/": require('../.vuepress/learnbar/javabar'),
    "/api/learn/es6/": require('../.vuepress/learnbar/es6bar'),
    "/api/learn/vue/": require('../.vuepress/learnbar/vuebar'),
}
