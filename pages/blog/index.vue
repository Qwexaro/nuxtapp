<template>
  <div>
    <h1 class="text-4xl my-4 font-bold">Блог</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <article v-for="post in posts" :key="post.id"
        class="flex flex-col gap-1 bg-orange-500 p-2 rounded-xl">
        <img 
          v-if="post.cover" 
          class="rounded h-40 object-cover" 
          :src="`https://static.dublecode.ru${post.cover.url}`" 
          alt=""
        >
        <img v-else class="rounded h-40 object-cover" src="/no-image.jpeg" alt="">
        <h3 class="text-2xl text-orange-100 flex-auto">{{ post.title }}</h3>
        <NuxtLink 
          :to="`/blog/post/${post.id}`"
          class="w-full flex items-center justify-center py-2 text-orange-500 bg-orange-100 hover:bg-orange-300 hover:text-orange-100 transition-colors rounded"
        >
          Перейти
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
const posts = ref([])

const fetchPosts = async () => {
  try {
    const response = await $fetch('https://static.dublecode.ru/api/posts?populate=*')
    posts.value = response.data.map(item => ({
      id: item.id,
      title: item.attributes.title,
      cover: item.attributes.cover?.data?.attributes
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(() => fetchPosts())
</script>