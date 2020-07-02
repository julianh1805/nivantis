import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'


// Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDaSQ1Lvz6U1FJ4Wa-pJ9pkFrgCuq2QL_I",
  authDomain: "mspr-nivantis-wis.firebaseapp.com",
  databaseURL: "https://mspr-nivantis-wis.firebaseio.com",
  projectId: "mspr-nivantis-wis",
  storageBucket: "mspr-nivantis-wis.appspot.com",
  messagingSenderId: "843956753805",
  appId: "1:843956753805:web:51bc039a0e7fb1c4ea99c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

