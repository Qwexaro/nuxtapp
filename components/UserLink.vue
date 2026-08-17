<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card border border-orange-500 p-2 h-100 shadow-sm bg-gradient-to-r from-white to-orange-100 rounded-lg">
    <img :src="user.image" class="card-img-top w-full h-48 object-cover rounded-t-lg" :alt="`${user.firstName} ${user.lastName}`">
    <div class="card-body p-3">
      <h5 class="card-title text-lg font-semibold">{{ user.firstName }} {{ user.lastName }}</h5>
      <p class="card-text text-muted text-sm">Age: {{ user.age }} | {{ user.gender }}</p>
      <p class="text-sm"><strong>Email: </strong>{{ user.email }}</p>
      <NuxtLink 
        :to="`/users/user-${user.id}`" 
        class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        View Profile
      </NuxtLink>
    </div>
  </div>
</template>