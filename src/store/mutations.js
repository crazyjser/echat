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
    local.currentUser.set(obj)
    window.ECHAT.$router.push({path: '/'})
  },
  // 设置当前用户信息
  [type.SETCURRENTUSER]: (state, obj) => {
    state.currentUser = obj
  },
  // 设置主题
  [type.SETTINGTHEME]: (state, obj) => {
    let account = state.currentUser.account
    let theme = {
      name: obj.name,
      account: account
    }
    if (state.echatTheme.find(ele => ele.account === account)) {
      state.echatTheme.forEach(ele => {
        if (ele.account === account) {
          ele.name = obj.name
        }
      })
    } else {
      state.echatTheme.push(theme)
    }
    local.echatTheme.set(state.echatTheme)
  },
  // 修改姓名
  [type.MODIFYNAME]: (state, obj) => {
    state.currentUser.name = obj
    local.currentUser.set(state.currentUser)
    state.echatUser.forEach(ele => {
      if (ele.account === state.currentUser.account) {
        ele.name = obj
      }
    })
    local.echatUser.set(state.echatUser)
  },
  // 添加待办事件
  [type.ADDTODOTHING]: (state, obj) => {
    let account = state.currentUser.account
    let temp = {
      account: account,
      content: obj,
      id: new Date().getTime(),
      type: 1
    }
    state.echatEvent.push(temp)
    local.echatEvent.set(state.echatEvent)
  },
  // 完成事件
  [type.COMPLETETHING]: (state, obj) => {
    state.echatEvent.forEach(ele => {
      if (ele.id === obj) ele.type = 2
    })
    local.echatEvent.set(state.echatEvent)
  },
  // 取消事件
  [type.CANCELTHING]: (state, obj) => {
    state.echatEvent.forEach(ele => {
      if (ele.id === obj) ele.type = 3
    })
    local.echatEvent.set(state.echatEvent)
  },
  // 恢复事件
  [type.RESETTHING]: (state, obj) => {
    state.echatEvent.forEach(ele => {
      if (ele.id === obj) ele.type = 1
    })
    local.echatEvent.set(state.echatEvent)
  },
  // 完成事件重置为未完成
  [type.RESETTODO]: (state, obj) => {
    state.echatEvent.forEach(ele => {
      if (ele.id === obj) ele.type = 1
    })
    local.echatEvent.set(state.echatEvent)
  }
}
