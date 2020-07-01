import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/dmo',
    name: 'Home',
    component: () => import('../views/dmo/Home.vue')
  },
  {
    path: '/dmo/ajouter-des-données-sur-une-officine',
    name: 'Add',
    component: () => import('../views/dmo/Add.vue')
  },
  {
    path: '/dmo/calcul-des-achats-de-la-pharmacie',
    name: 'Calcul',
    component: () => import('../views/dmo/Calcul.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router