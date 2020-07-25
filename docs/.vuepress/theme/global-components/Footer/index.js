/*
 * @Author: your name
 * @Date: 2020-07-25 16:02:42
 * @LastEditTime: 2020-07-25 16:14:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\global-components\Header\index.js
 */ 
import Footer from './Footer.vue'
Footer.install = (Vue)=>{
  Vue.component(Footer.name,Footer)
}
export default Footer;