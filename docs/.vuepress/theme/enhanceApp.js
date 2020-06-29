/*
 * @Author: your name
 * @Date: 2020-06-25 21:44:53
 * @LastEditTime: 2020-06-29 22:32:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\enhanceApp.js
 */ 
import store from './store';
import Antd from 'ant-design-vue';
import './styles/index.less';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  Vue.mixin({ store })
  Vue.use(Antd)
  Vue.use(Element)
}