<script setup lang="ts">
defineEmits(['toggle-todo'])
const props = defineProps(['todo'])

console.log(props.todo)
</script>

<template>
    <div class="to-do-item" :class="{completed: todo.completed}">
        <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-todo')"/>
        <p>{{ todo.text }}</p>
    </div>
</template>

<style scoped>
.to-do-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #ffe6e6;
    border-radius: 10px;
    border-bottom: 1px solid #f5f5f5;
}

.to-do-item.completed {
    background-color: #e6ffe6;
    text-decoration: line-through;
}

input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
}
</style>