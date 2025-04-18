<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
</script>

<template>
    <div class="standard-dialog scale-down">
        <h1 class="dialog-text">404 - Not Found  <ErrorIcon /></h1>
        <p class="dialog-text">The page you are looking for does not exist.</p>
        <RouterLink to="/">Go to Home Page</RouterLink>
    </div>
</template>

<style scoped>
.standard-dialog {
    display: flex;
    align-items: center;
    flex-direction: column;
    grid-row: 2;
    grid-column: 6 / 9;
    align-self: center;
    min-width: 280px;
}

.dialog-text {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
}
</style>