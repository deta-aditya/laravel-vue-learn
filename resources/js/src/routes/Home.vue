<template>
  <RoutePage class="home">
    <div class="card">
      <div class="card-body">
        <div class="">
          <div class="form-group">
            <label for="name">Username</label>
            <input class="form-control" v-model="formData.username" type="text" id="username" />
          </div>
          <div class="form-group">
            <label for="email">Password</label>
            <input class="form-control" v-model="formData.password" type="password" id="password" />
          </div>
          <button class="btn btn-primary" @click="attemptLogin()">Login</button>
        </div>
      </div>
    </div>
  </RoutePage>
</template>

<script>
import { mapActions } from 'vuex'
import RoutePage from '../components/RoutePage'

export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
      }
    }
  },

  components: {
    RoutePage,
  },

  methods: {
    ...mapActions('auth', [
      'login'
    ]),

    attemptLogin() {
      this.login(this.formData)
    }
  }
}
</script>