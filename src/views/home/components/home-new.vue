<template>
  <div class="home-new">
    <HomePanel title="新鲜好物"
               sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>
      <!-- 面板内容 -->
      <div ref="target"
           style="position:relative; height:426px;">
        <!-- 动画的父容器需要定位，防止定位跑偏 -->
        <transition name="fade">
          <ul v-if="goods.length"
              class="goods-list">
            <li v-for="item in goods"
                :key="item.id">
              <router-link :to="`/product/${item.id}`">
                <img :src="item.picture"
                     alt="">
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
              </router-link>
            </li>
          </ul>
          <!-- 骨架 未完成加载 -->
          <home-skeleton v-else />
        </transition>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel'
import { findNew } from '@/api/home.js'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyDate } from '@/hooks/index.js'

export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    HomeSkeleton
  },
  setup () {
    const target = ref(null)
    // const goods = ref([])
    // findNew().then(data => {
    //   goods.value = data.result
    // })
    const result = useLazyDate(target, findNew)
    return { goods: result, target }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
