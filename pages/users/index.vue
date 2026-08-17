<script setup>

definePageMeta({
  layout: 'users'
})

const { data } = await useFetch('https://dummyjson.com/users')

const users = ref(data.value?.users || [])

const getUserLink = (id) => {
  return id ? `/users/user-${id}` : '/users'
}

</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">All Users</h1>
      <NuxtLink 
        to="/users/add" 
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        + Add User
      </NuxtLink>
    </div>
    
    <div v-if="users.length === 0" class="text-center py-12">
      <p class="text-gray-500">No users found</p>
    </div>
    
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-unstyled">
      <li v-for="user in users" :key="user.id">
        <UserLink :user="user" />
      </li>
    </ul>
  </div>
</template>