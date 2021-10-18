<template>
  <!-- 顶部通栏 -->
  <app-navbar />
  <!-- 头部组件 -->
  <app-header />
  <!-- 内容容器 -->
  <div class="mian">
    <!-- 二级路由 -->
    <home></home>
    <router-view />
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
import Home from './home/index.vue'
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'

export default {
  name: 'Layout',
  components: {
    Home,
    AppNavbar,
    AppHeader
  },
  setup () {
  }
}
</script>

<style lang="less" scoped>
</style>
