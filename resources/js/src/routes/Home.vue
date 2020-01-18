<template>
  <RoutePage class="home">
    Welcome
    <router-link to="/login">Login</router-link>
  </RoutePage>
</template>

<script>
import { mapActions } from 'vuex'
import RoutePage from '../components/RoutePage'

export default {
  components: {
    RoutePage,
  },

  methods: {
  }
}
</script>