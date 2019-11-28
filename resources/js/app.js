require('./bootstrap');

import Vue from 'vue';
import App from './src/App';

var vm = new Vue({
  el: '#app',
  components: {
    App,
  }
})
