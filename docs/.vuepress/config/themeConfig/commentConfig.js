/*
 * @Author: your name
 * @Date: 2020-07-10 16:20:09
 * @LastEditTime: 2020-07-12 23:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\config\comment.js
 */ 
const comment = {
    choosen: "valine",
    // options选项中的所有参数，会传给Valine的配置
    options: {
      el: "#valine-ic-comment",
      appId: "Y34cUjWPqzbPWKc1Ua5UGDqn-gzGzoHsz",
      appKey: "cKSTywqJYCSmbHPYbwaOC23d",
      notify: false,
      // verify: false,
      visitor: true,
      // avatar:'mm', //头像，默认即可
      placeholder: "just go go"
    },
    container: ".valine-ic-comment"
  }
  // 导出默认
  module.exports = comment