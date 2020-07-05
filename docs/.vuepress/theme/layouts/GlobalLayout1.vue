<!--
 * @Author: your name
 * @Date: 2020-07-05 15:51:58
 * @LastEditTime: 2020-07-05 16:18:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\layouts\GlobalLayout.vue
--> 
<template>
  <div id="global-layout">
    <GlobalHeader />
    <GlobalMain />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from '@theme/components/common/GlobalHeader.vue'
import GlobalFooter from '@theme/components/common/GlobalFooter.vue'
import GlobalMain from '@theme/components/common/GlobalMain.vue'
export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    GlobalMain,
  },
}
</script>
<!--
<style lang="stylus" scoped>
@require '~@theme/styles/variables'
#global-layout
  display grid
  grid-template-rows 40vh 1fr auto
  min-height 100vh
</style>
-->