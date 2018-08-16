import * as type from './mutations-types'
import * as local from '@/util/storage'
export default {
  // 初始化用户信息表
  [type.INITUSER]: (state, obj) => {
    state.echatUser = obj
  },
  // 初始化待办事件表
  [type.INITEVENT]: (state, obj) => {
    state.echatEvent = obj
  },
  // 初始化主题表
  [type.INITTHEME]: (state, obj) => {
    state.echatTheme = obj
  },
  // 注册新用户
  [type.ADDUSER]: (state, obj) => {
    let users = state.echatUser
    if (!users.length) {
      state.echatUser.push(obj)
    } else {
      if (users.find(ele => ele.account === obj.account)) {
        window.ECHAT.$toast({
          position: 'bottom',
          message: '电话号码或邮箱已被占用'
        })
        return false
      } else {
        state.echatUser.push(obj)
      }
    }
    local.echatUser.set(state.echatUser)
    state.currentUser = obj
    window.ECHAT.$router.push({path: '/home'})
  },
  // 设置当前用户信息
  [type.SETCURRENTUSER]: (state, obj) => {
    state.currentUser = obj
  }
}