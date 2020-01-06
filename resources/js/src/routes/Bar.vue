<template>
  <RoutePage>
    <div class="card">
      <div class="card-body">
        <div class="form-inline">
          <div class="form-group">
            <label class="mr-1" for="name">Name</label>
            <input class="mr-3" v-model="formData.name" type="text" id="name" />
          </div>
          <div class="form-group">
            <label class="mr-1" for="email">Email</label>
            <input class="mr-3" v-model="formData.email" type="email" id="email" />
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
        <th>Name</th>
        <th>Email</th>
      </template>
      <template v-slot="{ entity }">
        <td>{{ entity.id }}</td>
        <td>{{ entity.name }}</td>
        <td>{{ entity.email }}</td>
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
        name: '',
        email: '',
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