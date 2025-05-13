<script setup>
const { user } = defineProps(['user'])
</script>
<template>
    <div class="card h-100 shadow-sm">
        <img :src="user.image" class="card-img-top" alt="User Image">
        <div class="card-body">
            <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="card-text text-muted">Age: {{ user.age }} | {{ user.gender | cap }}</p>
            <p><strong>Email: </strong>{{ user.email }}</p>
            <NuxtLink :to="`/users/user-${user.id}`" class="btn btn-primary">View Profile</NuxtLink>
        </div>
    </div>
</template>

<style>

</style>