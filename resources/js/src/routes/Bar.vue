<template>
  <RoutePage>
    Bar
    <input type="radio" v-model="dark" :value="true"/> Dark
    <input type="radio" v-model="dark" :value="false"/> Light
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

export default {
  data() {
    return {
      dark: false,
      userEntity: User,
    }
  },
  components: {
    TableKita,
    RoutePage,
  },
}
</script>