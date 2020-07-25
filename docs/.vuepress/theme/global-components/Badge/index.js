/*
 * @Author: your name
 * @Date: 2020-07-25 16:02:42
 * @LastEditTime: 2020-07-25 16:31:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\global-components\Header\index.js
 */ 
import Badge from './Badge.vue'
Badge.install = (Vue)=>{
  Vue.component(Badge.name,Badge)
}
export default Badge;