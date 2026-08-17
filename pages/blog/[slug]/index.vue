<script setup>
definePageMeta({
    layout: 'default'
})

const route = useRoute()

const slug = route.params.slug

const { data: posts, pending, error } = await useFetch(
    `https://static.dublecode.ru/api/posts?filters[category][slug][$eq]=${slug}&populate=*`
)


if (error.value || (posts.value && posts.value.data?.length === 0)) {
    throw createError({
        statusCode: 404,
        statusMessage: `Category "${slug}" not found`
    })
}

const categoryName = computed(() => {
    if (posts.value?.data?.length > 0) {
        return posts.value.data[0]?.attributes?.category?.data?.attributes?.name || slug
    }

    return slug
})

</script>

<template>
  <div v-if="pending" class="flex justify-center items-center min-h-[40vh]">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>

  <div v-else-if="posts?.data?.length > 0">
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <NuxtLink to="/blog/" class="hover:text-blue-500">Blog</NuxtLink>
        <span>></span>
        <span class="text-gray-700 font-medium">{{ categoryName }}</span>
    </div>

    <h1 class="text-4xl font-bold mb-2">{{ categoryName }}</h1>
    
    <p class="text-gray-600 mb-6">{{ posts.data.length }} articles found</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <article 
        v-for="post in posts.data" 
        :key="post.id"
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <img 
          v-if="post.attributes?.cover" 
          class="w-full h-48 object-cover" 
          :src="`https://static.dublecode.ru${post.attributes.cover.data?.attributes?.url}`" 
          :alt="post.attributes.title"
        >
        <img v-else class="w-full h-48 object-cover" src="/no-image.jpeg" alt="No image">
        
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2 line-clamp-2">{{ post.attributes.title }}</h2>
          <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{ post.attributes.description }}</p>
          
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">
              {{ new Date(post.attributes.publishedAt).toLocaleDateString() }}
            </span>
            <NuxtLink 
              :to="`/blog/post/${post.id}`" 
              class="text-orange-500 hover:text-orange-600 font-medium text-sm"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <h1 class="text-3xl font-bold text-gray-700">Category: {{ slug }}</h1>
    <p class="text-gray-500 mt-4">No posts found in this category</p>
    <NuxtLink to="/blog/" class="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      Back to Blog
    </NuxtLink>
  </div>
</template>