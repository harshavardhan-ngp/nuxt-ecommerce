import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/LoginRegister'
import Home from './pages/HomePage'
import Shop from './pages/ShopPage'
import Cart from './pages/CartPage'
import Profile from './pages/Profile'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode:'history',
    routes: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        component: Home
      },
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      },
    ]
  })
}