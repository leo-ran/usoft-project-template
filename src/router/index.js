import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login')
  },
  {
    path: '/admin',
    name: '导航三',
    component: () => import(/* webpackChunkName: "admin" */ '../layouts/AdminLayout'),
    redirect: '/dashboard/index',
    children: [
      {
        path: '/main',
        name: "主页",
        component: () => import(/* webpackChunkName: "dashboard" */ '../layouts/main'),
      },
      {
        path: '/dashboard/index',
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ '../pages/admin/dashboard'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
