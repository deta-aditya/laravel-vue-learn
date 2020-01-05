<template>
  <div class="table-kita">
    <table :class="tableClasses">
      <thead>
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in entities" :key="record.id">
          <slot :entity="record"></slot>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li :class="{'page-item': true, 'disabled': isFirstPage}">
          <a 
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(response.current_page - 1)">
            Previous
          </a>
        </li>
        <li 
          v-for="page in response.last_page" :key="page" 
          :class="{'page-item': true, 'active': isCurrentPage(page)}">
          <a
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(page)">
            {{page}}
          </a>
        </li>
        <li :class="{'page-item': true, 'disabled': isLastPage}">
          <a 
            class="page-link" 
            href="#"
            @click.prevent="getEntityFromServer(response.current_page + 1)">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
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
    tableClasses() {
      return {
        'table': true,
        'table-sm': true,
        'table-striped': true,
        'table-hover': true,
        'table-dark': this.darkMode,
      }
    },

    entities() {
      return Object.keys(this.response).length > 0 ? this.response.data : []
    },

    isFirstPage() {
      return this.response.current_page === this.response.from
    },

    isLastPage() {
      return this.response.current_page === this.response.last_page
    },
  },

  mounted() {
    this.getEntityFromServer()
  },

  methods: {
    isCurrentPage(page) {
      return this.response.current_page === page
    },

    getEntityFromServer(page = 1) {
      axios.get(`${this.entity.getUrl}?page=${page}`)
        .then((response) => this.response = response.data)
    }
  }
}
</script>