<script setup>
    import navButton from './navButton.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const activeTabIndex = ref(0);

    const tabs = [ 
        {name: 'Home', route:'/'},
        {name:'Projects', route:'/projects'},
        {name: 'About Me', route:'/about-me'}
    ];
    function onTabChange(event) {
        const newIndex = event.target.activeTabIndex;
        activeTabIndex.value = newIndex;
        router.push(tabs[newIndex].route);
    }
    
</script>
<template>  
    <!-- <navButton v-for="tab in tabs" :key="tab.name"  :tabName='tab.name' :route='tab.route' /> -->
  <md-tabs @change="onTabChange" :active-tab-index="activeTabIndex">
    <md-primary-tab
      v-for="(tab, index) in tabs"
      :key="tab.name"
      :label="tab.name"
    >{{ tab.name }}</md-primary-tab>
  </md-tabs>

</template>