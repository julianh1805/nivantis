import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register/dmo",
    name: "RegisterDmo",
    component: () => import("../views/RegisterDmo.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/dmo/Home",
    name: "Home",
    component: () => import("../views/dmo/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dmo/ajouter-des-données-sur-une-officine",
    name: "Add",
    component: () => import("../views/dmo/Add.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dmo/calcul-des-achats-de-la-pharmacie",
    name: "Calcul",
    component: () => import("../views/dmo/Calcul.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dmo/commande-de-medicaments",
    name: "Command",
    component: () => import("../views/dmo/Command.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/nivantis/home",
    name: "List",
    component: () => import("../views/nivantis/List.vue"),
    // meta: {
    //   requiresAuth: true,
    // },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    !store.getters.isLogged &&
    to.matched.some((record) => record.meta.requiresAuth)
  ) {
    next("/login");
  } else {
    next();
  }
});
export default router;
