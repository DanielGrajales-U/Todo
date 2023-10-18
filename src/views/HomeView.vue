<script setup>
import {todosFactory} from '../todosSetUp'

const {todosIncompleted,todosCompleted,toggle,deleteTodo} = todosFactory();
</script>

<template>
  <h3>Incompleted</h3>  
  <ul id="incomplete-tasks">
    <li v-for="todo of todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox">
      <label>{{todo.name}}</label>
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
  <h3>Completed</h3>
  <ul id="completed-tasks">
    <li v-for="todo of todosCompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox" checked>
      <label>{{todo.name}}</label>
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
</template>
<style>
  
</style>