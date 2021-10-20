import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index.vue')
const TopCategory = () => import('@/views/category/index.vue')
const SubCategory = () => import('@/views/category/sub.vue')

const routes = [
  // 一级路由容器
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      // 头部分类(居家，美食...)
      { path: '/category/:id', component: TopCategory },
      // 头部分类二级列表
      { path: '/category/sub/:id', component: SubCategory }
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
