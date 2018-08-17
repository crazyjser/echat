import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from 'vant'
import store from './store/index'
// import FastClick from 'fastclick'
import 'vant/lib/vant-css/index.css'
import '@/style/base.scss'
import '@/style/theme.scss'
Vue.use(vant)
Vue.config.productionTip = false
// FastClick.attach(document.body)
window.ECHAT = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
