import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/LoginRegister'
import Home from './pages/ShopPage'
import Cart from './pages/CartPage'
import Wishlist from './pages/WishList'

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
        path: '/cart',
        component: Cart
      },
      {
        path: '/wishlist',
        component: Wishlist
      },
    ]
  })
}