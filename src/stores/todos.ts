import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useTodoStore = defineStore('counter', () => {
    const todos = ref<{text:string, completed:boolean}[]>([])
    function addTodo(todo: {text:string, completed:boolean}) {
        todos.value.push(todo)
    }
    return {todos, addTodo}
})