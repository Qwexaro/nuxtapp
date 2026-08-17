<script setup>

definePageMeta({
  layout: 'users'
})

const route = useRoute()

const user_id = route.params.user_id

if (!user_id || isNaN(Number(user_id))) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Invalid user ID'
  })
}

const { data: user, pending, error } = await useFetch(
  `https://dummyjson.com/users/${user_id}`
)


if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'User not found'
  })
}
</script>

<template>
  <div v-if="pending" class="flex justify-center items-center min-h-[60vh]">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-4 text-gray-600">Loading user data...</p>
    </div>
  </div>

  <div v-else-if="user" class="max-w-4xl mx-auto">
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:w-1/3 bg-gradient-to-br from-blue-50 to-orange-50 p-6 flex flex-col items-center">
          <img 
            :src="user.image" 
            :alt="`${user.firstName} ${user.lastName}`" 
            class="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
          >
          <h1 class="text-2xl font-bold mt-4 text-center">{{ user.firstName }} {{ user.lastName }}</h1>
          <p class="text-gray-600 text-center">{{ user.company?.title || 'No title' }}</p>
          <div class="mt-4 flex gap-2 flex-wrap justify-center">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{{ user.gender }}</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{{ user.age }} years</span>
          </div>
        </div>

        <div class="md:w-2/3 p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="col-span-2">
              <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">Contact Information</h2>
            </div>
            
            <div class="space-y-2">
              <p><strong class="text-gray-600">Email:</strong></p>
              <p class="text-blue-600 break-all">{{ user.email }}</p>
            </div>
            
            <div class="space-y-2">
              <p><strong class="text-gray-600">Phone:</strong></p>
              <p>{{ user.phone }}</p>
            </div>

            <div class="col-span-2 mt-2">
              <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">Address</h2>
            </div>
            
            <div class="col-span-2 space-y-1">
              <p><strong class="text-gray-600">Street:</strong> {{ user.address?.address || 'N/A' }}</p>
              <p><strong class="text-gray-600">City:</strong> {{ user.address?.city || 'N/A' }}</p>
              <p><strong class="text-gray-600">State:</strong> {{ user.address?.state || 'N/A' }}</p>
              <p><strong class="text-gray-600">Country:</strong> {{ user.address?.country || 'N/A' }}</p>
              <p><strong class="text-gray-600">Postal Code:</strong> {{ user.address?.postalCode || 'N/A' }}</p>
            </div>

            <div class="col-span-2 mt-2">
              <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">Company</h2>
            </div>
            
            <div class="col-span-2 space-y-1">
              <p><strong class="text-gray-600">Name:</strong> {{ user.company?.name || 'N/A' }}</p>
              <p><strong class="text-gray-600">Department:</strong> {{ user.company?.department || 'N/A' }}</p>
              <p><strong class="text-gray-600">Title:</strong> {{ user.company?.title || 'N/A' }}</p>
            </div>

            <div class="col-span-2 mt-2">
              <h2 class="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">Additional Info</h2>
            </div>
            
            <div>
              <p><strong class="text-gray-600">Birth Date:</strong></p>
              <p>{{ user.birthDate ? new Date(user.birthDate).toLocaleDateString() : 'N/A' }}</p>
            </div>
            
            <div>
              <p><strong class="text-gray-600">University:</strong></p>
              <p>{{ user.university || 'N/A' }}</p>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t">
            <NuxtLink 
              to="/users/" 
              class="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Back to Users
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>