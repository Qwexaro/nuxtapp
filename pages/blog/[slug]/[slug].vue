<script setup>

definePageMeta({
    layout: 'default'
})

const route = useRoute()

const postId = route.params.id

const { data: post, pending, error } = await useFetch(
  `https://static.dublecode.ru/api/posts/${postId}?populate=*`
)

if (error.value || !post.value?.data) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Post not found'
    })
}

const postData = post.value.data

const attributes = postData.attributes


const category = computed(() => {
    return attributes.category?.data?.attributes?.name || 'Uncategorized'
})

const categorySlug = computed(() => {
    return attributes.category?.data?.attributes?.slug || 'uncategorized'
})
</script>

<template>
  <div v-if="pending" class="flex justify-center items-center min-h-[60vh]">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>

  <article v-else-if="postData" class="max-w-4xl mx-auto">

    <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <NuxtLink to="/blog/" class="hover:text-blue-500">Blog</NuxtLink>
      <span>></span>
      <NuxtLink :to="`/blog/${categorySlug}/`" class="hover:text-blue-500">{{ category }}</NuxtLink>
      <span>></span>
      <span class="text-gray-700 font-medium truncate">{{ attributes.title }}</span>
    </div>

    <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ attributes.title }}</h1>
    
    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
      <span>{{ new Date(attributes.publishedAt).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) }}</span>
      
      <NuxtLink 
        :to="`/blog/${categorySlug}/`" 
        class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full"
      >
        {{ category }}
      </NuxtLink>
    </div>

    <div v-if="attributes.cover?.data?.attributes?.url" class="mb-8 rounded-xl overflow-hidden">
      <img 
        :src="`https://static.dublecode.ru${attributes.cover.data.attributes.url}`" 
        :alt="attributes.title"
        class="w-full max-h-[500px] object-cover"
      >
    </div>

    <div class="prose prose-lg max-w-none">
      <p v-if="attributes.description" class="text-xl text-gray-600 italic mb-6">
        {{ attributes.description }}
      </p>
      
      <div v-html="attributes.content" class="content"></div>
    </div>

    <div class="mt-12 pt-6 border-t flex flex-wrap gap-4">
      <NuxtLink 
        to="/blog/" 
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
      >
        Back to Blog
      </NuxtLink>
      
      <NuxtLink 
        :to="`/blog/${categorySlug}/`" 
        class="px-4 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition-colors"
      >
        More in {{ category }}
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.content {
  @apply text-gray-800 leading-relaxed;
}

.content h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.content h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}

.content p {
  @apply mb-4;
}

.content ul, .content ol {
  @apply pl-6 mb-4;
}

.content li {
  @apply mb-1;
}

.content blockquote {
  @apply border-l-4 border-orange-400 pl-4 py-2 my-4 text-gray-700 italic;
}

.content img {
  @apply rounded-lg my-4 max-w-full;
}

.content a {
  @apply text-blue-600 hover:underline;
}
</style>