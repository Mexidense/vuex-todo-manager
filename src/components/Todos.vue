<template>
  <div>
      <h3>Todos</h3>
      <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todo">
          {{ todo.title }}
          <div @click="onDeleteTodo(todo.id)">
            <i class="fas fa-trash-alt delete-icon"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todos',

  computed: {
    ...mapGetters({
      allTodos: 'allTodos'
    })
  },

  created () {
    this.getTodos()
  },

  methods: {
    ...mapActions({
      getTodos: 'fetchTodos',
      deleteTodo: 'deleteTodo'
    }),

    onDeleteTodo (id) {
      this.deleteTodo(id)
    }
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.delete-icon  {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
