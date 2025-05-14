<script setup>
const { user } = defineProps(['user'])
</script>
<template>
    <div class="card border boder-orange-500 p-2 h-100 shadow-sm
                bg-gradient-to-r from-white to-orange-100">
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