<script setup>
    defineProps({
        tabName: String,
        route: String,
    });
</script>
<template>
    <button><RouterLink :to="route">{{ tabName }}</RouterLink></button>
</template>