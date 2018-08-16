<template>
  <div id="register" class="page">
    <van-cell-group>
      <van-field
        v-model.trim="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        :error-message="nameErrorMessage"
      />
      <van-field
        v-model.trim="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :error-message="pwdErrorMessage"
        required
      />
    </van-cell-group>
    <van-button size="large" :disabled="disabled" @click="registerAndLogin">注册并登录</van-button>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {
      username: '', // 用户名
      password: '', // 密码
      namePatt: /(^0{0,1}(13[0-9]|15[7-9]|153|156|152|18[0-9])[0-9]{8}$)|(^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$)/i, // 用户名正则表达式
      pwdPatt: /^[a-zA-Z]([-_a-zA-Z0-9]{6,8})$/, // 密码正则表达式
      nameErrorMessage: '用户名为邮箱，手机号码', // 用户名错误提示
      pwdErrorMessage: '必须以字母开头，英文、数字、下划线和减号 6-8位', // 密码错误提示
      disabled: true // 按钮的状态
    }
  },
  watch: {
    username(val) {
      if (!val) {
        this.nameErrorMessage = '用户名为邮箱，手机号码'
      } else {
        if (!this.namePatt.exec(val)) {
          this.nameErrorMessage = '用户名为邮箱，手机号码'
        } else {
          this.nameErrorMessage = ''
        }
        if (!this.nameErrorMessage && !this.pwdErrorMessage) {
          this.disabled = false
        }
      }
    },
    password(val) {
      if (!val) {
        this.pwdErrorMessage = '必须以字母开头，英文、数字、下划线和减号 6-8位'
      } else {
        if (!this.pwdPatt.exec(val)) {
          this.pwdErrorMessage = '必须以字母开头，英文、数字、下划线和减号 6-8位'
        } else {
          this.pwdErrorMessage = ''
        }
        if (!this.nameErrorMessage && !this.pwdErrorMessage) {
          this.disabled = false
        }
      }
    }
  },
  methods: {
    registerAndLogin() {
      this.$store.dispatch('addUser', {
        account: this.username,
        password: this.password,
        name: ''
      })
    }
  }
}
</script>

