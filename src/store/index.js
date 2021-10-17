import { createStore } from 'vuex'
// 数据持久化插件 vuex-persistedstate
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    // 默认存储在localStrorea上
    createPersistedState({
      // key是存储数据的键名
      key: 'tuxian',
      // paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如user.token
      paths: ['user', 'cart']
    })]
})
