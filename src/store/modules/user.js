// 用户模块
export default {
  // 分模块
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        // 头像
        avatar: '',
        // 昵称
        nickname: '',
        // 账号名
        account: '',
        // 手机号
        mobile: '',
        // token
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile.nickname = payload.nickname
    }
  }
}
