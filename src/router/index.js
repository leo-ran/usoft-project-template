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
    component: () => import(/* webpackChunkName: "login" */ '../pages/login')
  },
  {
    path: '/admin',
    name: '导航三',
    component: () => import(/* webpackChunkName: "admin" */ '../layouts/AdminLayout'),
    redirect: '/admin/dashboard/index',
    children: [
      {
        path: 'dashboard/index',
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ '../pages/admin/dashboard'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
