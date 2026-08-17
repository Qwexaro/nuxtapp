<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center py-12">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Welcome to My App</h1>
      <p class="text-xl text-gray-600 mb-8">Built with Nuxt 3, Vue 3 & Tailwind CSS</p>
      
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink to="/users/" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          View Users →
        </NuxtLink>
        <NuxtLink to="/blog/" class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          Read Blog →
        </NuxtLink>
      </div>
    </div>

    <!-- Статистика -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="text-3xl font-bold text-blue-500">12+</div>
        <div class="text-gray-600">Users</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="text-3xl font-bold text-green-500">25+</div>
        <div class="text-gray-600">Blog Posts</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="text-3xl font-bold text-orange-500">5+</div>
        <div class="text-gray-600">Categories</div>
      </div>
    </div>
  </div>
</template>