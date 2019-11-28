<template>
  <div>
    <p>{{ title }}</p>
    <div class="form-user">
      <input v-model="form.name" type="text" placeholder="User">
      <input v-model="form.email" type="email" placeholder="Email">
      <button type="button" @click="saveUser()">Add</button>
    </div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.email }} - {{ user.name }}
      </li>
    </ul>
    <ul>
      <li v-for="(user, idx) in userNamesWithUppercase" :key="idx">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      title: 'User List',
      users: [],
      form: {
        name: '',
        email: '',
      },
    }
  },

  computed: {
    userNamesWithUppercase() {
      return this.users.map((user) => user.name.toUpperCase())
    },
  },

  mounted() {
    this.getUsersFromServer()
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

    getUsersFromServer() {
      axios.get('http://localhost:8000/api/users')
        .then((response) => this.users = response.data)
    }
  },
}

</script>

<style lang="scss" scoped>

</style>