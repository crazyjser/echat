<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import * as local from '@/util/storage'
import {mapMutations} from 'vuex'
export default {
  mounted() {
    // 初始化用户表，事件表，主题表
    if (!local.echatUser.get()) {
      local.echatUser.set([])
      local.echatEvent.set([])
      local.echatTheme.set([])
    } else {
      this.initUser(local.echatUser.get())
      this.initEvent(local.echatEvent.get())
      this.initTheme(local.echatTheme.get())
    }
  },
  methods: {
    ...mapMutations({
      initUser: 'INITUSER',
      initEvent: 'INITEVENT',
      initTheme: 'INITTHEME'
    })
  }
}
</script>

<style lang="scss">
</style>
