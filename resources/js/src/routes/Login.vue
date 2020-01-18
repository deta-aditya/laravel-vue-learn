<template>
  <div class="login d-flex justify-content-center align-items-center">
    <div class="card" style="width:400px">
      <div class="card-body">
        <form @submit.prevent="attemptLogin()">
          <div class="form-group">
            <label for="name">Username</label>
            <input class="form-control" v-model="formData.username" type="text" id="username" />
          </div>
          <div class="form-group">
            <label for="email">Password</label>
            <input class="form-control" v-model="formData.password" type="password" id="password" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import publicPage from '../mixins/publicPage'

export default {
  mixins: [
    publicPage,
  ],

  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    ...mapActions('auth', [
      'login'
    ]),

    attemptLogin() {
      this.login(this.formData)
        .then(() => this.$router.push('/admin'))
    }
  },
}
</script>

<style scoped>
.login {
  height: 100vh;
}
</style>
