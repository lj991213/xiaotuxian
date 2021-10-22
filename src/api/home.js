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
