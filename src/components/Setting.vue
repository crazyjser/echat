<template>
  <div id="setting" class="page">
    <van-cell-group>
      <van-cell title="主题" @click="popupShow = !popupShow"/>
      <van-cell title="修改姓名" @click="modifyName" :label="$store.state.currentUser.name"/>
      <van-cell title="github地址" @click="linkTo"/>
    </van-cell-group>
    <van-button size="large" type="danger" @click="loginOut">退出登录</van-button>
    <van-popup v-model="popupShow" position="right" :overlay="true" class="popup-wrapper">
      <theme></theme>
    </van-popup>
  </div>
</template>
<script>
import Theme from '@/components/Theme'
export default {
  name: 'setting',
  data() {
    return {
      popupShow: false
    }
  },
  methods: {
    modifyName() {
      this.$dialog.confirm({
        title: '修改姓名',
        message: '<input autofocus type="text" id="name-input" maxlength="5" style="outline:none;border:none;width: 100%;padding-left:5px">'
      }).then(() => {
        let val = document.getElementById('name-input').value
        this.$store.dispatch('modifyName', val)
      }).catch(() => {
      });
    },
    loginOut() {
      this.$store.dispatch('loginOut')
    },
    linkTo() {
      window.open('https://github.com/crazyjser/echat')
    }
  },
  components: {
    Theme
  }
}
</script>
<style lang="scss" scoped>
.popup-wrapper{
  width: 100px;
  height: 100%;
}
</style>
