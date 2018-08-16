import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import(/* webpackChunkName: "login" */ './views/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ './views/Register.vue')
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const ToDoList = () => import(/* webpackChunkName: "ToDOList" */ './views/ToDoList.vue')
const Setting = () => import(/* webpackChunkName: "setting" */ './views/Setting.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'todolist',
          component: ToDoList
        },{
          path: 'setting',
          name: 'setting',
          component: Setting
        }
      ]
    }
  ]
})
