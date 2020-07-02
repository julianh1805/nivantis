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
    path: '/login/:espace', //":espace = variable"
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register/dmo',
    name: 'RegisterDmo',
    component: () => import('../views/RegisterDmo.vue')
  },
  {
    path: '/dmo/home',
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
  },
  {
    path: '/dmo/commande-de-medicaments',
    name: 'Command',
    component: () => import('../views/dmo/Command.vue')
  },
  {
    path: '/nivantis/home',
    name: 'List',
    component: () => import('../views/nivantis/List.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router