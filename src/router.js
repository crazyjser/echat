import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import(/* webpackChunkName: "login" */ './views/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ './views/Register.vue')
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
