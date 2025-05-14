<template>
    <!-- страница категории со статьями категории -->
    <h1>{{ route.params.slug }}</h1>
</template>

<script setup>
const route = useRoute();
</script>