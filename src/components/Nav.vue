<script setup>
    import navButton from './navButton.vue';

    const tabs = [ 
        {name: 'Home', route:'/'},
        {name:'Projects', route:'/projects'},
        {name: 'About Me', route:'/about-me'}
    ];
    
</script>
<template>  
    <navButton v-for="tab in tabs" :key="tab.name"  :tabName='tab.name' :route='tab.route' />
</template>