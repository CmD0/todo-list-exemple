<script setup lang="ts">
import { ref } from 'vue'
const toDoText = ref('This is an example to do item')
</script>

<template>
    <div class="to-do-item">
        <input type="checkbox"/>
        <p>{{ toDoText }}</p>
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

input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
}
</style>