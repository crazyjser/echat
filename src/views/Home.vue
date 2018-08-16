<template>
  <div id="home" class="page">
    <header class="header">
      <span>{{active === 0 ? '待办事项列表': '设置'}}</span>
    </header>
    <div class="content">
      <to-do-list v-show="active == 0"></to-do-list>
      <setting v-show="active == 1"></setting>
    </div>
    <van-tabbar v-model="active" class="footer-tab-bar">
      <van-tabbar-item icon="home">首页</van-tabbar-item>
      <van-tabbar-item icon="setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import toDoList from '@/components/ToDoList'
import Setting from '@/components/Setting'
export default {
  name: 'home',
  data() {
    return {
      active: 0
    }
  },
  beforeRouteLeave(to, from, next) {
    if (Object.keys(this.$store.state.currentUser).length) {
      if (to.name === 'login' || to.name === 'register') {
        next(false)
      } else {
        next()
      }
    } else {
      next()
    }
  },
  components: {
    toDoList,
    Setting
  }
}
</script>
<style lang="scss" scoped>
#home{
  .header{
    height: 44px;
    line-height: 44px;
    width: 100%;
    text-align: center;
    color: #fff;
  }
  .content{
    height: calc(100% - 44px*2);
    overflow-y: scroll;
    padding: 0 13px;
    box-sizing: border-box;
  }
  .footer-tab-bar{
    width: 100%;
    height: 44px;
  }
}
</style>
