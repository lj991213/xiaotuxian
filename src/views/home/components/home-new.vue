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
import HomePanel from './home-panel'
import { findNew } from '@/api/home.js'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks/index.js'

export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    HomeSkeleton
  },
  setup () {
    // const goods = ref([])
    // findNew().then(data => {
    //   goods.value = data.result
    // })
    // target 绑定监听对象dom
    // result 传入api函数 返回响应式数据
    const { target, result } = useLazyData(findNew)
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
