<template>
  <div id="app" :class="[$store.getters.obtainUserTheme ? $store.getters.obtainUserTheme.name : 'cyan']">
    <router-view/>
  </div>
</template>
<script>
import * as local from '@/util/storage'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      themeClass: ''
    }
  },
  computed: {
    theme() {
      return this.$store.getters.obtainUserTheme
    }
  },
  watch: {
    theme(val) {
      // console.log(typeof val)
      if (val) {
        this.themeClass = val.name
      } else {
        this.themeClass = 'cyan'
      }
    }
  },
  mounted() {
    // 初始化用户表，事件表，主题表
    if (!local.echatUser.get().length) {
      local.echatUser.set([])
      local.echatEvent.set([])
      local.echatTheme.set([])
      local.currentUser.set({})
      this.$router.push({path: '/login'})
    } else {
      this.initUser(local.echatUser.get())
      this.initEvent(local.echatEvent.get())
      this.initTheme(local.echatTheme.get())
      if (!Object.keys(local.currentUser.get()).length) {
        this.$router.push({path: '/login'})
      }
    }
  },
  methods: {
    ...mapMutations({
      initUser: 'INITUSER',
      initEvent: 'INITEVENT',
      initTheme: 'INITTHEME',
      setCurrentUser: 'SETCURRENTUSER'
    })
  }
}
</script>

<style lang="scss">
</style>
