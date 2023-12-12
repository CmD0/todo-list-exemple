import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useTodoStore = defineStore('counter', () => {
    const todos = ref<{text:string, completed:boolean}[]>(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')!) : [])
    function addTodo(todo: {text:string, completed:boolean}) {
        todos.value.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }
    return {todos, addTodo}
})