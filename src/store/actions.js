export default {
  addUser: ({commit}, obj) => {
    commit('ADDUSER', obj)
  },
  login: ({state, commit}, obj) => {
    let hasUser = state.echatUser.find((ele) => {return ele.account === obj.account }) // 判断用户是否存在
    let passwordRight = state.echatUser.find((ele) => { return ele.account === obj.account && ele.password === obj.password }) // 判断用户密码正确与否
    if (hasUser === undefined) {
      window.ECHAT.$toast({
        position: 'bottom',
        message: '用户名不存在,请先注册'
      })
    } else {
      if (passwordRight === undefined) {
        window.ECHAT.$toast({
          position: 'bottom',
          message: '密码不正确'
        })
      } else {
        commit('SETCURRENTUSER', passwordRight)
        window.ECHAT.$router.push({
          path: '/home'
        })
        console.log(state.currentUser)
      }
    }
  }
}