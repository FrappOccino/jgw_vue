<script setup>
    defineProps({
        tabName: String,
        route: String,
    });
</script>
<template>
    <RouterLink :to="route" id="nav-button">{{ tabName }}</RouterLink>
</template>