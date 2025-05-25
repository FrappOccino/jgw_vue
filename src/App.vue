<script setup>
  import {RouterView} from 'vue-router';
  import { RouterLink } from 'vue-router';
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
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/jobs">JOBS</RouterLink>
  </nav>
  <!-- Use this when you are using Vue app -->
  <!-- Use <slot /> if using inertia in laravel -->
  <RouterView /> 
</template>

<style scoped>

</style>