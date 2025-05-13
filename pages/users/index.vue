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
    <ul class="d-flex justify-content-between flex-wrap list-unstyled gap-3">
        <li v-for="user in users" :key="user.id">
            <UserLink :user="user"/>
        </li>
    </ul>
  </div>
</template>

<style>
h1{color: red}
</style>
