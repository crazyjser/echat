<template>
  <div id="login" class="page">
    <h1>echat-TODOLIST</h1>
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
    <router-link to="/register">去注册</router-link>
    <van-button size="large" @click="login">登录</van-button>
  </div>
</template>

<script>
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
        Toast({
          position: 'bottom',
          message: '用户名或密码不能为空'
        })
      } else {
        this.$store.dispatch('login', {
          account: this.username,
          password: this.password,
          name: ''
        })
      }
    }
  }
}
</script>
