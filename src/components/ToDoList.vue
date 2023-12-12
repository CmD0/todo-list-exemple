<script setup lang="ts">
import { useTodoStore } from '@/stores/todos'
import ToDoDialog from '@/components/ToDoDialog.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { storeToRefs } from 'pinia';

const todoStore = useTodoStore()
const {todos} = storeToRefs(todoStore)
const {addTodo, reset, writeTodos} = todoStore

function toggleToDo(todo: any) {
    todo.completed = !todo.completed
    writeTodos()
}

function addToDo (todo: any) {
    addTodo(todo)
}

function clear() {
    reset()
    writeTodos()
}
</script>

<template>
    <div class="to-do-list">
        <h2>To Do:</h2>
        <ToDoDialog @add-todo="addToDo"/>
        <button @click="clear">Clear</button>
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
