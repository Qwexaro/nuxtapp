<script setup>
definePageMeta({
  layout: 'users'
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: 'male',
  phone: '',
  image: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(null)

const submitForm = async () => {
  loading.value = true
  error.value = null
  success.value = false
  
  try {
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('User data:', form.value)
    success.value = true
    
    setTimeout(() => {
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        gender: 'male',
        phone: '',
        image: ''
      }
      success.value = false
    }, 3000)
    
  } catch (err) {
    error.value = err.message || 'Failed to add user'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Add New User</h1>
    
    <div v-if="success" class="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
      User added successfully!
    </div>

    <div v-if="error" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>

    <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow-md p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input 
            v-model="form.firstName" 
            type="text" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input 
            v-model="form.lastName" 
            type="text" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter last name"
          >
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input 
            v-model="form.email" 
            type="email" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email address"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Age *</label>
          <input 
            v-model="form.age" 
            type="number" 
            required
            min="1"
            max="120"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter age"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
          <select 
            v-model="form.gender" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            v-model="form.phone" 
            type="tel" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
          >
        </div>
        
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input 
            v-model="form.image" 
            type="url" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/avatar.jpg"
          >
          <p class="text-xs text-gray-500 mt-1">Leave empty to use default avatar</p>
        </div>
      </div>
      
      <div class="mt-6 flex gap-3">
        <button 
          type="submit" 
          :disabled="loading"
          class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading">Adding...</span>
          <span v-else>Add User</span>
        </button>
        
        <NuxtLink 
          to="/users/" 
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-center"
        >
          Cancel
        </NuxtLink>
      </div>
    </form>
  </div>
</template>