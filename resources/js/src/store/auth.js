import axios from "axios"
import config from '../config'

const auth = {
  namespaced: true,

  state: {
    currentUser: {},
    accessToken: null,
    refreshToken: null,
  },

  getters: {
    isLoggedIn(state) {
      return state.accessToken != null
    }
  },

  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload.currentUser
    },

    SET_TOKENS(state, payload) {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    }
  },

  actions: {
    login(context, payload) {
      return axios.post('http://localhost:8000/oauth/token', {
        grant_type: 'password',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        username: payload.username,
        password: payload.password,
        scope: '*',
      }).then((response) => {
        context.commit('SET_TOKENS', {
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        })
      }).then(() => context.dispatch('getCurrentUser'))
    },

    getCurrentUser(context) {
      return axios.get('http://localhost:8000/api/users/current', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + context.state.accessToken,
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
        .then((response) => {
          context.commit('SET_CURRENT_USER', {
            currentUser: response.data
          })
        })
    },

    logout(context) {
      context.commit('SET_TOKENS', {
        accessToken: null,
        refreshToken: null,
      })

      context.commit('SET_CURRENT_USER', {
        currentUser: {},
      })
    },
  },
}

export default auth
