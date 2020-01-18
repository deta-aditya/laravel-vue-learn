import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.isLoggedIn) {
        vm.$router.push('/admin')
      }
    })
  }
}
