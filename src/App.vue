<script setup>
  import MyForm from './views/MyForm.vue';
  import Nav from './components/Nav.vue';
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
  <Nav />
  <!-- Use this when you are using Vue app -->
  <!-- Use <slot /> if using inertia in laravel -->
  <RouterView />
  <MyForm />
</template>

<style scoped>

</style>