import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BrowsAll from '../views/BrowsAll.vue'
import ProductCard from '../views/ProductCard.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/all-products',
    name: 'all-products',
    component: BrowsAll
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/product-card',
    component: ProductCard,
    children: [{
      path: ':id',
      component: ProductCard
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
