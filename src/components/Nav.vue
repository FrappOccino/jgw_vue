<script setup>
    import navButton from './navButton.vue';

    const tabs = [ 
        {name: 'Home', route:'/'},
        {name:'Projects', route:'/projects'},
        {name: 'About Me', route:'/about-me'}
    ];
    
</script>
<template>
    <nav id="nav">
      <navButton 
        v-for="tab in tabs" 
        :key="tab.name"  
        :tabName='tab.name' 
        :route='tab.route'
      />
      <img src="../assets/logo.svg" alt="">
    </nav>  
</template>