<template>
  <div class="home-banner">
    <n-carousel autoplay>
      <img class="carousel-img"
           v-for="item in sliders"
           :key="item.key"
           :src="item.imgUrl" />
    </n-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'
import { findBanner } from '@/api/home.js'
import { NCarousel } from 'naive-ui'

export default {
  name: 'HomeBanner',
  components: {
    NCarousel
  },
  setup () {
    const sliders = ref([])
    findBanner().then(data => {
      sliders.value = data.result
    })
    return {
      sliders
    }
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  overflow: hidden;
  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
