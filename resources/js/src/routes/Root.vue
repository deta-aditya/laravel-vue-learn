<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },
  render() {
    if (this.isLoggedIn) {
      this.$router.push('/admin')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>