<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.hydrateToken()
  },
  methods: {
    ...mapActions('auth', [
      'hydrateToken'
    ])
  },
}
</script>