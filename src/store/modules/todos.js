import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const mutations = {
  setTodos: (state, payload) => (state.todos = payload)
}

const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    commit('setTodos', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
