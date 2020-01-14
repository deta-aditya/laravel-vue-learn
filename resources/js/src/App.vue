<template>
  <div class="app">
    <div v-show="!isLoggedIn">
      <div class="d-flex justify-content-center align-items-center">
        <div class="card" style="width:400px">
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
      </div>
    </div>
    <div v-show='isLoggedIn'>
      <AppTopBar />
      <div class="d-flex">
        <AppSideBar class="flex-shrink-0" />
        <div class="view-container overflow-auto w-100">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppTopBar from './components/AppTopBar'
import AppSideBar from './components/AppSideBar'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  components: {
    AppTopBar,
    AppSideBar
  },
  data() {
    return {
      title: 'User List',
      formData: {
        username: '',
        password: '',
      },
      response: {},
    }
  },

  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },

  mounted() {
    // this.getUsersFromServer()
  },

  methods: {
    ...mapActions('auth', [
      'login'
    ]),

    attemptLogin() {
      this.login(this.formData)
        .then(() => console.log('Test'))
        .then(() => this.$router.push('/foo'))
    }
  },
}

</script>

<style scoped>
.app {
  margin-top: 56px;
}

.app .view-container {
  max-height: calc(100vh - 56px);
}
</style>