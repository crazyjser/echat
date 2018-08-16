<template>
  <div id="theme">
    <span class="theme-item" v-for="item in themeInfo" :key="item.color" @click="settingTheme(item)" :style="{backgroundColor: item.color}">{{item.name}}</span>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'theme',
  computed: {
    ...mapState({
      themeInfo: state => state.theme
    })
  },
  methods: {
    // 设置主题
    settingTheme(param) {
      this.$store.dispatch('settingTheme', param)
    }
  }
}
</script>
<style lang="scss" scoped>
#theme{
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .theme-item{
    width: 80%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    margin: 10px 0;
  }
}
</style>
