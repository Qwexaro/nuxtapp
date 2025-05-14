<template>
  <div>
    <Header />

    <main class="container mx-auto p-4">
        <slot />
    </main>
    <Footer />
</div>
</template>

<style>

header a:not(.router-link-exact-active):hover{
    text-decoration: underline;
}

header a.router-link-exact-active{
    color: #ffb636!important;
    font-weight: 500;
}

h1{color: red}

</style>
