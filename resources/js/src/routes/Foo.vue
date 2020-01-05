<template>
  <RoutePage>
    Foo
    <p>Count: {{ count }}</p>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </RoutePage>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import RoutePage from '../components/RoutePage'

export default {
  components: {
    RoutePage,
  },

  computed: {
    sebuahComputed() {

    },

    ...mapState('counter', [
      'count',
    ])
  },

  methods: {
    ...mapMutations('counter', [
      'increment',
      'decrement',
    ])
  },
}
</script>