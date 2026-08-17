<script setup>

const error = useError()

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <div class="text-center max-w-md">
      <div class="text-6xl mb-4">find</div>
      <h1 class="text-4xl font-bold text-gray-800 mb-2">
        {{ error?.statusCode || '404' }}
      </h1>
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">
        {{ error?.statusMessage || 'Page Not Found' }}
      </h2>
      <p class="text-gray-600 mb-8">
        {{ error?.message || "Oops! The page you're looking for doesn't exist or has been moved." }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button 
          @click="goBack"
          class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Go Back
        </button>
        <NuxtLink 
          to="/" 
          class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>