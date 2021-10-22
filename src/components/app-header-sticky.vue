<template>
  <!-- 吸顶效果 -->
  <!-- 组件渲染后，监听滚动距离超过78px隐藏 -->
  <div class="app-header-sticky"
       :class="{show:y>=78}">
    <!-- 使用v-show为了吸顶头部的内容不遮住 不吸顶的头部。 -->
    <div class="container"
         v-show="y>=78">
      <router-link class="logo"
                   to="/" />
      <AppHeaderNav />
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useWindowScroll } from '@vueuse/core'
import AppHeaderNav from './app-header-nav.vue'
// import { onMounted, ref } from 'vue'

export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav },
  setup () {
    const { y } = useWindowScroll()
    return { y }
  }
  // setup () {
  //   const xdy = ref(0)
  //   onMounted(() => {
  //     window.onscroll = () => {
  //       // 拿到根元素的scrollTop垂直滚动的像素数
  //       const scrollTop = document.documentElement.scrollTop
  //       // ref修改数据需要.value
  //       xdy.value = scrollTop
  //     }
  //   })
  //   return {
  //     xdy
  //   }
  // }
}
</script>

<style lang="less" scoped>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 默认移出顶部且完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 回到默认吸顶位置完全显示
  &.show {
    transition: all 0.6s ease;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
