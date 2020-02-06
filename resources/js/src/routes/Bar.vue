<template>
  <RoutePage>
    <button class="btn btn-primary" @click="toggleModal()">Add</button>
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
        <th>Actions</th>
      </template>
      <template v-slot="{ entity }">
        <td>{{ entity.id }}</td>
        <td>{{ entity.username }}</td>
        <td>
          <button type="button" class="btn btn-link" @click="editUser(entity)">Edit</button>
        </td>
      </template>
    </TableKita>
    <Modal id="create-user" :show="showModal" @hide="toggleModal" v-model="editEntity"/>
  </RoutePage>
</template>

<script>

import axios from 'axios'
import User from '../entities/User'
import TableKita from '../components/TableKita'
import RoutePage from '../components/RoutePage'
import Modal from '../components/Modal'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dark: false,
      userEntity: User,
      editEntity: {
        id: 0,
        username: '',
        password: '',
      },
      showModal: false,
    }
  },

  methods: {
    ...mapActions('users', [
      'insertUser'
    ]),

    toggleModal() {
      this.showModal = ! this.showModal
    },

    editUser(entity) {
      this.editEntity.id = entity.id
      this.editEntity.username = entity.username
      this.toggleModal()
    },

    catchEditEntity(newEntity) {
      this.editEntity = newEntity
    }
  },

  components: {
    TableKita,
    RoutePage,
    Modal,
  },
}
</script>