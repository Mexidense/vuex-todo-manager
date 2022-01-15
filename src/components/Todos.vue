<template>
  <div>
      <h3>Todos</h3>
      <div class="legend">
        <div>
          <span>Double click to mark as complete</span>
        </div>
        <div>
          <span class="incomplete-todo-box"/> Incomplete
        </div>
        <div>
          <span class="complete-todo-box"/> Complete
        </div>
      </div>
      <div class="todos">
        <div
          @dblclick="onDoubleClick(todo)"
          v-for="todo in allTodos"
          :key="todo.id"
          :class="{'is-complete': todo.completed}"
          class="todo"
        >
          {{ todo.title }}
          <div
            @click="onDeleteTodo(todo.id)"
            class="icon"
          >
            <FontAwesomeIcon icon="trash" class="delete-icon"/>
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
      deleteTodo: 'deleteTodo',
      updateTodo: 'updateTodo'
    }),

    onDeleteTodo (id) {
      this.deleteTodo(id)
    },

    onDoubleClick (todo) {
      const todoToUpdate = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(todoToUpdate)
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

.icon {
  margin-top: 10px
}

.delete-icon  {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.incomplete-todo-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.complete-todo-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}
</style>
