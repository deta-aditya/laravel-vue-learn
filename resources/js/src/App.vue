<template>
  <div>
    <p>{{ title }}</p>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li :class="{'page-item': true, 'disabled': isFirstPage}">
          <a 
            class="page-link" 
            href="#"
            @click.prevent="getUsersFromServer(response.current_page - 1)">
            Previous
          </a>
        </li>
        <li 
          v-for="page in response.last_page" :key="page" 
          :class="{'page-item': true, 'active': isCurrentPage(page)}">
          <a
            class="page-link" 
            href="#"
            @click.prevent="getUsersFromServer(page)">
            {{page}}
          </a>
        </li>
        <li :class="{'page-item': true, 'disabled': isLastPage}">
          <a 
            class="page-link" 
            href="#"
            @click.prevent="getUsersFromServer(response.current_page + 1)">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

import axios from 'axios'

export default {
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
    userNamesWithUppercase() {
      return this.users.map((user) => user.name.toUpperCase())
    },

    users() {
      return Object.keys(this.response).length > 0 ? this.response.data : []
    },

    isFirstPage() {
      return this.response.current_page === this.response.from
    },

    isLastPage() {
      return this.response.current_page === this.response.last_page
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

    isCurrentPage(page) {
      return this.response.current_page === page
    },

    saveUserToServer(user) {
      axios.post('http://localhost:8000/api/users', user)
        .then((response) => this.getUsersFromServer())
    },

    getUsersFromServer(page = 1) {
      axios.get(`http://localhost:8000/api/users?page=${page}`)
        .then((response) => this.response = response.data)
    }
  },
}

</script>

<style lang="scss" scoped>

</style>