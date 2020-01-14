<template>
  <RoutePage>
    <div class="card">
      <div class="card-body">
        <div class="form-inline">
          <div class="form-group">
            <label class="mr-1" for="name">Username</label>
            <input class="mr-3" v-model="formData.username" type="text" id="username" />
          </div>
          <div class="form-group">
            <label class="mr-1" for="email">Password</label>
            <input class="mr-3" v-model="formData.password" type="password" id="password" />
          </div>
          <button class="btn btn-primary" @click="insertUserOnForm()">Add</button>
        </div>
      </div>
    </div>
    <div>
      <input type="radio" v-model="dark" :value="true"/> Dark
      <input type="radio" v-model="dark" :value="false"/> Light
    </div>
    <TableKita
      :dark-mode="dark"
      :entity="userEntity">
      <template v-slot:header>
        <th>ID</th>
        <th>Username</th>
      </template>
      <template v-slot="{ entity }">
        <td>{{ entity.id }}</td>
        <td>{{ entity.username }}</td>
      </template>
    </TableKita>
  </RoutePage>
</template>

<script>

import axios from 'axios'
import User from '../entities/User'
import TableKita from '../components/TableKita'
import RoutePage from '../components/RoutePage'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dark: false,
      userEntity: User,
      formData: {
        username: '',
        password: '',
      }
    }
  },

  methods: {
    ...mapActions('users', [
      'insertUser'
    ]),

    insertUserOnForm() {
      this.insertUser({ user: this.formData })
    },
  },

  components: {
    TableKita,
    RoutePage,
  },
}
</script>