export default {
  // 获取对用用户的主题色
  obtainUserTheme: state => { return state.echatTheme.find(ele => state.currentUser.account === ele.account) },
  // 获取用户的代办事件
  obtainUserTodoThing: state => {
    let result = []
    state.echatEvent.filter(ele => {
      if (ele.account === state.currentUser.account && ele.type === 1) result.push(ele)
    })
    return result
  },
  // 获取用户完成事件
  obtainUserCompleteThing: state => {
    let result = []
    state.echatEvent.filter(ele => {
      if (ele.account === state.currentUser.account && ele.type === 2) result.push(ele)
    })
    return result
  },
  // 获取用户取消事件
  obtainUserCancelThing: state => {
    let result = []
    state.echatEvent.filter(ele => {
      if (ele.account === state.currentUser.account && ele.type === 3) result.push(ele)
    })
    return result
  }
}
