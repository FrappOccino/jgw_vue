<script setup>
  // options API
  import {ref} from 'vue'

  const name = ref('jeff');
  const status = ref('active');
  const tasks = ref(['task1', 'task2', 'task3']);
  const counter = ref(0);

  function add(){
    counter.value ++;
  };
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is inactive</p>
  <code> Counter: {{ counter }}</code>
  <br>
  <button @click="add">add</button>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>


</template>

<style scoped>

</style>