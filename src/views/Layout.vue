<template>
  <!-- 顶部通栏 -->
  <app-navbar />
  <!-- 头部组件 -->
  <app-header />
  <!-- 内容容器 -->
  <div class="mian">
    <!-- 二级路由 -->
    <router-view />
  </div>
  <!-- 底部组件 -->
  <app-footer />
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter
  },
  setup () {
    const store = useStore()
    // 异步获取分类数据
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
.mian {
  min-height: 600px;
}
</style>
