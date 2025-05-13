<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="mb-4">
            <i class="bi bi-exclamation-triangle display-1 text-danger"></i>
        </div>
        <h1 class="display-4 text-danger mb-3">404 - Page not found</h1>
        <p class="lead text-muted mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <NuxtLink to="/" class="btn btn-primary btn-lg">
            Go Back to Home =/
        </NuxtLink>
    </div>
</template>