import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../views/Catalog.vue'
import Health from '../views/Health.vue'
import Beauty from '../views/Beauty.vue'
import Enjoy from '../views/Enjoy.vue'
import Car from '../views/Car.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  },
  {
    path: '/beauty',
    name: 'Beauty',
    component: Beauty
  },
  {
    path: '/enjoy',
    name: 'Enjoy',
    component: Enjoy
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  }
]

const router = new VueRouter({
  routes
})

export default router
