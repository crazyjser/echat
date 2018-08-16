import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from 'vant'
import store from './store/index'
import 'vant/lib/vant-css/index.css'
import '@/style/base.scss'
Vue.use(vant)
Vue.config.productionTip = false
window.ECHAT = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
