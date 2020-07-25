/*
 * @Author: your name
 * @Date: 2020-07-25 16:02:42
 * @LastEditTime: 2020-07-25 16:31:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\global-components\Header\index.js
 */ 
import Content from './Content.vue'
Header.install = (Vue)=>{
  Vue.component(Content.name,Content)
}
export default Content;