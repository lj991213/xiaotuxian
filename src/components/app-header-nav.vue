<template>
  <ul class="app-header-nav">
    <li class="home">
      <router-link to="/">首页</router-link>
    </li>

    <!-- 商品名称 -->
    <li v-for="item in list"
        :key="item.id"
        @mouseenter="show(item)"
        @mouseleave="hide(item)">
      <!-- 一级分类 跳转到分类 -->
      <router-link :to="`/category/${item.id}`"
                   @click="hide(item)">{{item.name}}</router-link>
      <!-- 二级分类导航  -->
      <!-- 动态添加类 item.open控制显示隐藏 -->
      <div class="layer"
           v-bind:class="{open:item.open}">
        <ul>
          <!-- 子分类集合 children -->
          <li v-for="sub in item.children"
              :key="sub.id">
            <!-- 跳转到推荐商品页面 -->
            <router-link :to="`/category/sub/${sub.id}`"
                         @click="hide(item)">
              <!-- 子分类图片名称 -->
              <img :src="sub.picture"
                   alt="">
              <p>{{sub.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  // 头部分类导航
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    // vuex中拿到首页分类列表
    const list = computed(() => {
      return store.state.category.list
    })
    // 显示二级导航条
    const show = (item) => {
      store.commit('category/show', item.id)
    }
    // 隐藏二级导航条
    const hide = (item) => {
      store.commit('category/hide', item.id)
    }
    return { list, show, hide }
  }
}
</script>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    // position: relative;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
        position: relative;
      }
      // hove距离二级导航有间隙 添加一个after
      > ::after {
        content: "";
        position: absolute;
        top: 100%;
        left: -400%;
        width: 800%;
        height: 80%;
        // background-color: red;
        z-index: 9999;
      }
    }
  }
}
// 二级导航定位
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
