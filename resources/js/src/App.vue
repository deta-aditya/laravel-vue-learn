<template>
  <div class="app">
    <AppTopBar />
    <div class="d-flex">
      <AppSideBar class="flex-shrink-0" />
      <div class="view-container overflow-auto w-100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import AppTopBar from './components/AppTopBar'
import AppSideBar from './components/AppSideBar'
import axios from 'axios'

export default {
  components: {
    AppTopBar,
    AppSideBar
  },
  data() {
    return {
      title: 'User List',
      form: {
        name: '',
        email: '',
      },
      response: {},
    }
  },

  computed: {
    
  },

  mounted() {
    // this.getUsersFromServer()
  },

  methods: {
    saveUser() {
      const newUser = {
        ...this.form,
      }

      this.saveUserToServer(newUser)

      this.form.name = ''
      this.form.email = ''
    },

    saveUserToServer(user) {
      axios.post('http://localhost:8000/api/users', user)
        .then((response) => this.getUsersFromServer())
    },
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