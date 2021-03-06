import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, todoToUpdate) => {
    const index = state.todos.findIndex(todo => todo.id === todoToUpdate.id)

    if (index !== -1) {
      state.todos.splice(index, 1, todoToUpdate)
    }
  }
}

const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos', response.data)
  },

  async addTodo ({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
    commit('addTodo', response.data)
  },

  async deleteTodo ({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    commit('removeTodo', id)
  },

  async filterTodosByLimit ({ commit }, quantity) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${quantity}`)
    commit('setTodos', response.data)
  },

  async updateTodo ({ commit }, todo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
    commit('updateTodo', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
