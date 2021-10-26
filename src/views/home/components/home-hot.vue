<template>
  <HomePanel title="人气推荐"
             sub-title="人气爆款 不容错过">
    <!-- 动画的父容器需要定位，防止定位跑偏 -->
    <div ref="target"
         style="position:relative; height:426px;">
      <ul ref="pannel"
          class="goods-list"
          v-if="goods.length">
        <li v-for="item in goods"
            :key="item.id">
          <router-link to="/">
            <img :src="item.picture"
                 alt="">
            <p class="name">{{item.title}}</p>
            <p class="desc">{{item.alt}}</p>
          </router-link>
        </li>
      </ul>
      <home-skeleton v-else />
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel'
import { findHot } from '@/api/home.js'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks/index.js'

export default {
  name: 'HomeNew',
  components: { HomePanel, HomeSkeleton },
  setup () {
    // const goods = ref([])
    // findHot().then(data => {
    //   goods.value = data.result
    // })
    const { target, result } = useLazyData(findHot)
    return { goods: result, target }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
