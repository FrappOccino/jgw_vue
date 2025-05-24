<script>
  // options API
  export default {
    data(){
      return{
        name: 'jeff',
        status: 'active',
        tasks: ['task1', 'task2', 'task3']
      };
    },
  };
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is inactive</p>

  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
</template>

<style scoped>

</style>