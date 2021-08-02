import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/Login'
import Home from '@/components/views/Home'
import AdminList from '@/components/views/AdminList.vue'
import Test from '@/components/views/test.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: "/login",
    name: "Login",
    component: Login
  }, {
    path: "/home",
    name: "Home",
    component: Home
  }, {
    path: "/adminList",
    name: "AdminList",
    component: AdminList
  }, {
    path: "/test",
    name: "Test",
    component: Test
  }]
})
