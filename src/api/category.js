// 定义首页分类需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据(顶级,二级和对应的商品)
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
