<template>
  <div class="container">
    <home-category />
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory
  }
}
</script>

<style lang="less" scoped>
.container {
  // background: @xtxColor;
  // .hoverShadow();
}
</style>
