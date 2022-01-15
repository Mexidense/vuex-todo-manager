<template>
  <div>
    Filter Todos:
    <select @change="onFilterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'FilterTodos',

  methods: {
    ...mapActions({
      filterTodosByLimit: 'filterTodosByLimit'
    }),

    onFilterTodos (event) {
      const selectedOption = event.target.options[event.target.options.selectedIndex]
      this.filterTodosByLimit(parseInt(selectedOption.innerText))
    }
  }
}
</script>
<style scoped>

</style>
