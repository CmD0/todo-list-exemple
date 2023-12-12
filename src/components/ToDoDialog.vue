<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['add-todo'])
const newToDo = ref('')

function addToDo() {
    const todo = {
        text: newToDo.value,
        completed: false
    }
    emit('add-todo', todo)
    newToDo.value = ''
}
</script>

<template>
    <div class="to-do-dialog">
        <input type="text" v-model="newToDo" />
        <button @click="addToDo">Add</button>
    </div>
</template>

<style scoped>
.to-do-dialog {
    display: flex;
    gap: 1rem;
}

.to-do-dialog input[type="text"] {
    flex-grow: 1;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #f5f5f5;
}

.to-do-dialog button {
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #d5d5d5;
    background-color: #fafafa;
}
</style>

