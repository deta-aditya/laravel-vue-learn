require('./bootstrap');

import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import stores from './src/store';
import VueRouter from 'vue-router';
import routes from './routes'
import ElementUI from 'element-ui';
import App from './src/App';
import 'element-ui/lib/theme-chalk/index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.use(Vuex)
const store = new Store(stores)

Vue.use(ElementUI)

var vm = new Vue({
  router,
  store,
  components: {
    App,
  }
}).$mount('#app')
