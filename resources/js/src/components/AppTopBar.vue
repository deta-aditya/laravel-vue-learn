<template>
  <nav class="navbar fixed-top navbar-light bg-light border-bottom justify-content-between">
    <a class="navbar-brand" href="#">Admin</a>
    <a class="navbar-link" href="#" @click.prevent="attemptLogout()">Logout</a>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),

    attemptLogout() {
      this.logout()
        .then(() => this.$router.push('/login'))
    }
  }
}
</script>
