<script setup>
    import {todosFactory} from '../todosSetUp'
    import router from '../router'

    const {add} = todosFactory();

    const addAndNavigate = (name)  =>{
        add(name);
        router.push('/');
    }
</script>

<template>
    <div class="container">
        <label for="new-task">New Todo</label>
        <input id="new-task" @keyup.enter="addAndNavigate(name)" type="text" v-model="name">
        <button type="add"  @click="addAndNavigate(name)">Add</button>
    </div>

</template>
<style>
</style>