// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axios实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址， 其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// 1. 创建一个新的axios实例
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 2. 请求拦截器，如果有token进行头部携带
instance.interceptors.requestu.use(config => {
  // 修改请求配置
  // 如果本地有token就在头部携带
  const { profile } = store.state.user // 获取到用户信息对象
  // 2. 判断是否有token
  if (profile.token) {
    // 3. 设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// res => res.data  取出data数据，调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
  // 判断无响应 和 401 状态码
  if (err.response && err.response.status === 401) {
    // 清除无效登录用户信息token
    store.commit('user/setUser', {})
    // 跳转到登录页面
    // router.currentRoute.value.fullPath 就是当前路由地址
    // router.currentRoute 是ref响应式数据
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // encodeURIComponent 传递的参数转换uri编码，防止解析地址出错误(可能出现特殊字符串)
    // 跳转需要传参（当前路由地址）给登录页码
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 4. 导出一个函数，调用当前的axios实例发请求，返回值promise
// 请求工具函数
const request = (url, method, submitData) => {
  // 发送请求 请求地址url 方式 提交的数据
  return instance({
    url,
    method,
    // 1. 如果是get请求  需要使用params来传递submitData   url传参
    // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
    // toLowerCase 转换成小写
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
