<template>
  <div>
    <h1>app</h1>
    名称:{{$store.state.user.profile.nickname}}
    <button @click="$store.commit('user/setUser',{nickname: '水儿'})">添加</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
