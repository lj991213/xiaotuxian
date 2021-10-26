<template>
  <div class='home-skeleton'>
    <div class="item"
         v-for="i in 4"
         :key="i">
      <n-skeleton style="width:306px; height:306px" />
      <n-skeleton style="width:160px; height:24px; margin-top:15px; margin-left:25%;" />
      <n-skeleton style="width:120px; height:24px; margin-top:17px; margin-left:30%;" />
    </div>
  </div>
</template>

<script>
import { NSkeleton } from 'naive-ui'
export default {
  // 新鲜人气骨架屏
  name: 'HomeSkeleton',
  components: {
    NSkeleton
  }
}
</script>

<style lang="less" scoped>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
  }
}
</style>
