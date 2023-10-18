<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { todosFactory } from './todosSetUp'
import todoService from './services/todosServices'
import {ref} from 'vue'
const {update} = todosFactory();

const isLoading = ref(true);
async function prefetch(){
  update(await todoService.getTodos());
  isLoading.value = false;
}
prefetch();

</script>

<template>
  <div class="container">
    <h2 v-if="isLoading">Loadings Todos...</h2>
    <template v-if=" !isLoading">
      <ul>
        <RouterLink to="/"><li>Todo List</li></RouterLink>
        <RouterLink to="/newTodo"><li>New Todo</li></RouterLink>
      </ul>
       <RouterView />
    </template>
   
  </div>
</template>

<style>
@import './assets/base.css';
</style>
