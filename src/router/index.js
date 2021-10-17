import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

// 创建路由实例
const router = createRouter({
  // 使用hash路由
  history: createWebHashHistory(),
  routes
})

export default router
