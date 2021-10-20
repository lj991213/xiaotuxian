// 分类模块

// 存储的分类数据
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state: () => {
    return {
      // 分类信息集合
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以根据topCategory常量数据来生成一个默认的顶级分类数据，不会出现空白没数据的情况
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 加载数据成功后需要修改list所以需要mutations函数
  mutations: {
    // 拿到所有的分类集合
    setList (state, payload) {
      state.list = payload
    },
    // 修改当前一级下的类目open数据为true
    show (state, id) {
      const category = state.list.find(item => item.id === id)
      category.open = true
    },
    // 修改当前下的类目为open数据false
    hide (state, id) {
      const category = state.list.find(item => item.id === id)
      category.open = false
    }
  },
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const { result } = await findAllCategory()
      // 单页面路由跳转不会刷新页面，css的hover一直触发无法关闭分类弹窗
      // 给一级分类加上一个控制二级分类显示隐藏的数据open
      // open 布尔类型，通过open设置类名控制显示隐藏。
      result.forEach(item => {
        item.open = false
      })
      // 提交mutations进行数据修改
      commit('setList', result)
    }
  }
}
