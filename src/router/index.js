import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/views/Login'
import Home from '@/components/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path:"/login",
      name:"Login",
      component:Login
    },{
      path:"/home",
      name:"Home",
      component:Home
    }
  ]
})
