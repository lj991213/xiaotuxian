// 首页相关API
import request from '@/utils/request'

// 左侧分类 品牌推荐
/**
 * 获取品牌
 * @param {Integer} limit - 品牌个数
 * @returns Promise
 */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 首页-新鲜好物
 * @returns Promise
 */
export const findNew = () => {
  return request('home/new', 'get')
}

/**
 * 人气推荐
 * @returns Promise
 */
export const findHot = () => {
  return request('home/hot', 'get')
}

/**
 * 商品区块
 * @returns Promise
 */
export const findGoods = () => {
  return request('home/goods', 'get')
}
