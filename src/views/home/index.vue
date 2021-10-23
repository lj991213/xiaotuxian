<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <home-category />
      <!-- 轮播图 -->
      <home-banner />
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'

export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner
  }
}
</script>

<style lang="less" scoped>
</style>
