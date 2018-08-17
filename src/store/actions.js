import * as local from '@/util/storage'
export default {
  // 注册用户
  addUser: ({commit}, obj) => {
    commit('ADDUSER', obj)
  },
  // 用户登录
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
        obj.name = passwordRight.name
        commit('SETCURRENTUSER', obj)
        local.currentUser.set(obj)
        window.ECHAT.$router.push({
          path: '/'
        })
      }
    }
  },
  // 退出登陆
  loginOut: ({state, commit}, obj) => {
    local.currentUser.set({})
    commit('SETCURRENTUSER', {})
    window.ECHAT.$router.replace({path: '/login'})
  },
  // 设置主题
  settingTheme: ({commit}, obj) => {
    commit('SETTINGTHEME', obj)
  },
  // 添加事件
  addThing: ({commit}, obj) => {
    commit('ADDTODOTHING', obj)
  },
  // 完成事件
  completeThing: ({commit}, obj) => {
    commit('COMPLETETHING', obj)
  },
  // 取消事件
  cancelThing: ({commit}, obj) => {
    commit('CANCELTHING', obj)
  },
  // 恢复事件
  resetThing: ({commit}, obj) => {
    commit('RESETTHING', obj)
  },
  // 已完成置为未完成
  resetTodo: ({commit}, obj) => {
    commit('RESETTODO', obj)
  },
  // 修改姓名
  modifyName: ({commit}, obj) => {
    commit('MODIFYNAME', obj)
  }
}
