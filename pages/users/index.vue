<script setup>
definePageMeta({
    layout: 'users'
})

// const users = ref([
//     { id: 1, name: 'Alex'},
//     { id: 2, name: 'Sockrat'},
//     { id: 3, name: 'Dima'},
// ])

const { data } = await useFetch('https://dummyjson.com/users')
const users = ref(data.value.users)
</script>

<template>
  <div>
    <h1>All users</h1>
    <ul class="grid grid-cols-4 gap-3 flex-wrap list-unstyled">
        <li v-for="user in users" :key="user.id">
            <UserLink :user="user"/>
        </li>
    </ul>
  </div>
</template>

<style>
h1{color: red}
</style>
