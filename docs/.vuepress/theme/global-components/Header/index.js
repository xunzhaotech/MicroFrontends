/*
 * @Author: your name
 * @Date: 2020-07-25 16:02:42
 * @LastEditTime: 2020-07-25 16:07:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\global-components\Header\index.js
 */ 
import Header from './Header.vue'
Header.install = (Vue)=>{
    Vue.component(Header.name,Header)
}
export default Header;