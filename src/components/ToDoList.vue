<script setup lang="ts">
import { ref } from 'vue'
import ToDoItem from '@/components/ToDoItem.vue'

const todos = ref([
    {text: 'Learn Vue 3', completed: true },
    {text: 'Build a ToDo app', completed: false }
])
console.log(todos)
console.log(todos.value)

function toggleToDo(todo: any) {
    todo.completed = !todo.completed
}
</script>

<template>
    <div class="to-do-list">
        <h2>To Do:</h2>
        <div class="to-dos">
            <ToDoItem v-for="todo in todos" v-bind:todo="todo" @toggle-todo="toggleToDo(todo)" />
        </div>
    </div>
</template>

<style scoped>
.to-do-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 10px;
}

.to-dos {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
