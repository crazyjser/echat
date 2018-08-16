<template>
  <div id="login" class="page">
    <h1 class="logo">记事本</h1>
    <van-cell-group>
      <van-field
        v-model.trim="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model.trim="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <router-link class="link-reg" to="/register">去注册</router-link>
    <van-button size="large" class="btn-login" @click="login">登录</van-button>
  </div>
</template>
<script>
import * as local from '@/util/storage'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$toast({
          position: 'bottom',
          message: '用户名或密码不能为空'
        })
      } else {
        this.$store.dispatch('login', {
          account: this.username,
          password: this.password,
          name: '',
          loginTime: new Date().getTime()
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#login{
  padding: 0 13px;
  box-sizing: border-box;
  .logo{
    text-align: center;
    color:#26b6be;
    margin-bottom: 20px;
  }
  .link-reg{
    float: right;
    margin: 20px 0;
    color: #26b6be;
  }
  .btn-login{
    color: #fff;
    background-color: #26b6be;
  }
}
</style>

