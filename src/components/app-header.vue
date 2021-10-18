<template>
  <header class="app-header">
    <div class="container">
      <!-- logo模块 -->
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <!-- 导航 -->
      <app-headernav />
      <!-- 搜索模块 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text"
               placeholder="搜一搜">
      </div>

      <!-- 购物车模块 -->
      <div class="cart">
        <a class="curr"
           href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>

    </div>
  </header>
</template>

<script>
import AppHeadernav from './app-header-nav.vue'
export default {
  name: 'AppHeader',
  components: {
    AppHeadernav
  }
}
</script>

<style lang="less" scoped>
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  // logo
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }

  // 搜索模块
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  // 购物车
  .cart {
    width: 50px;
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart {
        font-size: 22px;
      }
      em {
        // font-style 选择 font-family字体下的常规字体
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        // font-family 属性指定的是一个优先级从高到低的可选字体列表
        font-family: Arial;
      }
    }
  }
}
</style>
