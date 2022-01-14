<template>
  <div>
    <h3>Add todo</h3>
    <form @submit="onSubmit">
      <input class="title" type="text" v-model="title">
      <input class="add-todo-button" type="submit" value="Add">
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',

  data () {
    return {
      title: ''
    }
  },

  methods: {
    ...mapActions({
      addTodo: 'addTodo'
    }),

    onSubmit (event) {
      event.preventDefault()
      this.addTodo(this.title)
      this.title = ''
    }
  }
}
</script>
<style scoped>
form {
  display: flex;
}

.title {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

.add-todo-button {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
