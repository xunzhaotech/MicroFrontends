<!--
 * @Author: your name
 * @Date: 2020-05-03 21:58:05
 * @LastEditTime: 2020-05-03 22:04:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\vue\README.md
 -->
<template>
  <div class="test-demo">
    {{ msg }}
    <my-hello></my-hello>
    <el-button>button</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>