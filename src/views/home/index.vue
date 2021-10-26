<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <home-category />
      <!-- 轮播图 -->
      <home-banner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <home-new />
  <!-- 人气推荐 -->
  <home-hot />
  <!-- 热门品牌 -->
  <home-brand />
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import homeNew from './components/home-new.vue'
import homeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'

export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    homeNew,
    homeHot,
    HomeBrand
  }
}
</script>

<style lang="less" scoped>
</style>
