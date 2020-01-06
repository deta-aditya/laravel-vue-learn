import axios from 'axios'

const users = {
  namespaced: true,

  state: {
    page: {
      current_page: 0,
      first_page: 0,
      last_page: 0,
    },
    users: [],
  },

  getters: {
    isFirstPage(state) {
      return state.page.current_page === state.page.first_page
    },

    isLastPage(state) {
      return state.page.current_page === state.page.last_page
    },

    isCurrentPage(state) {
      return (page) => state.page.current_page === page
    },
  },

  mutations: {
    SET_PAGE(state, payload) {
      state.page.current_page = payload.current_page
      state.page.first_page = payload.from
      state.page.last_page = payload.last_page
    },

    SET_USERS(state, payload) {
      state.users = payload.data
    },
  },

  actions: {
    fetchUsers(context, payload) {
      axios.get(`http://localhost:8000/api/users?page=${payload.page}`)
        .then((response) => {
          context.commit('SET_PAGE', response.data)
          context.commit('SET_USERS', response.data)
        })
    },
    
    insertUser(context, payload) {
      axios.post(`http://localhost:8000/api/users`, payload.user)
        .then((response) => context.dispatch('fetchUsers', { page: 1 }))
    },
  },
}

export default users
