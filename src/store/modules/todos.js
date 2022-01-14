import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const mutations = {
  setTodos: (state, payload) => (state.todos = payload),
  addTodo: (state, payload) => state.todos.unshift(payload)
}

const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    commit('setTodos', response.data)
  },

  async addTodo ({ commit }, payload) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title: payload, completed: false })
    commit('addTodo', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
