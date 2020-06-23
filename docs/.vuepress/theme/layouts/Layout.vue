<!--
 * @Author: your name
 * @Date: 2020-06-23 18:01:57
 * @LastEditTime: 2020-06-23 18:23:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\layouts\Layout.vue
--> 
<template>
  <!-- <div class="theme-container"> -->
    <div class="container">
    <header>
      <a href="/guide/">跳转</a>
      <Content slot-key="header"/>
    </header>
    <main>
     <Content slot-key="base"/>
    </main>
    <footer>
      <Content slot-key="footer"/>
    </footer>
  </div>
    
  <!-- </div> -->
</template>
