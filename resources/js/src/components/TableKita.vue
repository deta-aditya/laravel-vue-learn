<template>
  <div class="table-kita">
    <table :class="tableClasses">
      <thead>
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in users" :key="record.id">
          <slot :entity="record"></slot>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example" class="paginator overflow-auto">
      <ul class="pagination m-0">
        <li :class="{'page-item': true, 'disabled': isFirstPage}">
          <a 
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(page.current_page - 1)">
            Previous
          </a>
        </li>
        <li 
          v-for="pageItem in page.first_page + 1" :key="pageItem" 
          :class="{'page-item': true, 'active': isCurrentPage(pageItem)}">
          <a
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(pageItem)">
            {{pageItem}}
          </a>
        </li>
        <li 
          v-for="pageItem in page.first_page + 1" :key="pageItem" 
          :class="{'page-item': true, 'active': isCurrentPage(page.last_page - pageItem)}">
          <a
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(page.last_page - pageItem)">
            {{page.last_page - pageItem}}
          </a>
        </li>
        <li :class="{'page-item': true, 'disabled': isLastPage}">
          <a 
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(page.current_page + 1)">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },

    entity: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      response: {}, 
    }
  },

  computed: {
    ...mapState('users', [
      'page', 
      'users',
    ]),

    ...mapGetters('users', [
      'isFirstPage',
      'isLastPage',
      'isCurrentPage',
    ]),

    tableClasses() {
      return {
        'table': true,
        'table-sm': true,
        'table-striped': true,
        'table-hover': true,
        'table-dark': this.darkMode,
      }
    },
  },

  mounted() {
    this.getEntityFromServer()
  },

  methods: {
    ...mapActions('users', [
      'fetchUsers',
    ]),

    getEntityFromServer(page = 1) {
      this.fetchUsers({ 
        page,
      })
    },
  }
}
</script>