<template>
  <div :id="id" ref="modalEl" class="modal fade" data-backdrop="static" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createUser()">
            <div class="form-group">
              <label class="mr-1" for="name">Username</label>
              <input class="mr-3" v-model="entity.username" type="text" id="username" />
            </div>
            <div class="form-group">
              <label class="mr-1" for="email">Password</label>
              <input class="mr-3" v-model="entity.password" type="password" id="password" />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  model: {
    prop: 'entity',
    event: 'edit'
  },

  props: {
    id: String,

    show: {
      type: Boolean,
      default: false,
    },

    entity: {
      type: Object
    }
  },

  data() {
    return {
      modalEl: null,
    }
  },

  computed: {
    formEntity: {
      get: () => {
        return this.entity
      },

      set: (newValue) => {
        this.$emit('edit', newValue)
      },
    }
  },

  mounted() {
    this.modalEl = $(this.$refs.modalEl)

    this.modalEl.on('hide.bs.modal', () => {
      this.$emit('hide')
    })
  },

  methods: {
    createUser() {
      alert('User created!')
    }
  },

  watch: {
    show(after, before) {
      if (after) {
        this.modalEl.modal('show')
      }
    }
  }
}
</script>

<style scoped>
  /* .modal {
    display: block
  } */
</style>