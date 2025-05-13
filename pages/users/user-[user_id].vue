<script setup>
definePageMeta({
  layout: 'users'
})

const { user_id } = useRoute().params

const { data } = await useFetch(`https://dummyjson.com/users/${user_id}`)

</script>

<template>


<div>
    <h1>ID of user: {{ user_id }}</h1>
    <p>User: {{ data.firstName }} {{ data.lastName }}</p>
</div>

  <!-- <div>
    <div class="card shadow-lg">
      <div class="row g-0"></div>
      <div class="col-md-4">
        <img :src="data.image" alt="User Image" class="img-fluid rounded-start">
      </div>

      <div class="col-md-8">
        <h2 class="card-title">{{ data.firstName }} {{ data.lastName }}</h2>
        <p class="card-text text-muted">ID: {{ user.id }} | Age: {{ data.age }}</p>

        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Email:</strong> {{ data.email }}</li>
          <li class="list-group-item"><strong>Phone:</strong> {{ data.phone }}</li>
          <li class="list-group-item">
            <strong>Address:</strong> {{ data.address.address }}, {{ data.address.country }},
            {{ data.address.state }}, {{ data.address.postalCode }}
          </li>
          <li class="list-group-item">
            <strong>Company:</strong> {{ data.company.name }} - {{ data.company.lastName }}
            <p class="mb-0">Department: {{ data.company.department }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<style>
h1{color: red}
</style>
