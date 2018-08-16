<template>
  <div id="home" class="page">
    <header class="header">
      <span>待办事项列表</span>
    </header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar v-model="active" class="footer-tab-bar">
      <van-tabbar-item icon="home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="setting" to="/home/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      active: 0
    }
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
