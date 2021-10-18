<template>
  <nav class="app-topnav">
    <!-- 版心显示 -->
    <div class="container">
      <ul>
        <!-- 通过有无token判断是否有登录 -->
        <template v-if="profile.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{profile.account}}</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>

        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>

        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppTopnav',
  setup () {
    const store = useStore()
    // 获取个人用户信息 切换导航栏菜单
    const profile = computed(() => {
      // vuex 的satte需要使用computed计算属性才是响应式的
      return store.state.user.profile
    })
    return {
      profile
    }
  }
}
</script>

<style lang="less" scoped>
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      // ~ 选择器： 选择这个元素后的所有相同的元素
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
