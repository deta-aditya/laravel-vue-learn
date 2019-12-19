<template>
  <div>
    Bar
    <input type="radio" v-model="dark" :value="true"/> Dark
    <input type="radio" v-model="dark" :value="false"/> Light
    <TableKita :dark-mode="dark"></TableKita>
  </div>
</template>

<script>

import axios from 'axios'
import TableKita from '../components/TableKita'

export default {
  data() {
    return {
      dark: false,
    }
  },
  components: {
    TableKita,
  },
}
</script>