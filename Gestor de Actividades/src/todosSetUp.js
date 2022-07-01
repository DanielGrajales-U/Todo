
import initialTodos from './mock/todos'
import {computed, ref} from 'vue'

const todos = ref([...initialTodos])
const todosIncompleted = computed(()=> todos.value.filter(t => !t.complete));
const todosCompleted = computed(()=>todos.value.filter(t => t.complete));

const toggle =(id)=>{
    const todo = todos.value.find(t => t.id===id);
    if(todo?.complete !== undefined){
        todo.complete = !todo.complete
    }
}

const deleteTodo = (id)=>{
    todos.value = todos.value.filter(t => t.id !== id);
}

const add = (name)=>{
    const newTodo ={id:todos.value.length + 1,name,complete:false};
    todos.value.push(newTodo);
}

const update = (todosList)=>{
    todos.value = todosList
}
const todosFactory = ()=>({todosIncompleted,todosCompleted,toggle,deleteTodo,add,update})

export{todosFactory}