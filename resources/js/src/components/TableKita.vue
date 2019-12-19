<template>
  <table :class="tableClasses">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return { users: [] }
  },

  computed: {
    tableClasses() {
      return {
        'table': true,
        'table-sm': true,
        'table-striped': true,
        'table-hover': true,
        'table-dark': this.darkMode,
      }
    }
  },

  mounted() {
    this.getUsersFromServer()
  },

  methods: {
    getUsersFromServer() {
      axios.get('http://localhost:8000/api/users')
        .then((response) => this.users = response.data)
    }
  }
}
</script>