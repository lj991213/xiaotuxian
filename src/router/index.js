import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')

const routes = [
  // 一级路由容器
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        components: Home
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  // 使用hash路由
  history: createWebHashHistory(),
  routes
})

export default router
