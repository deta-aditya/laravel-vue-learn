require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.use(VueRouter)

var vm = new Vue({
  router,
}).$mount('#app')
