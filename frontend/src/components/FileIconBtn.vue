<script setup lang="ts">
import FileIcon from './icons/FileIcon.vue'

const { onClick } = defineProps<{
  onClick?: () => void
}>()
</script>

<template>
  <button @click="onClick">
    <FileIcon />
    <slot />
  </button>
</template>

<style>
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border: none;
  border-radius: 0.2em;
  background: transparent;
  cursor: pointer;
}

button:hover {
  background: var(--color-primary-light);
}

button:active {
  background: var(--color-primary-dark);
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 0.2em var(--color-primary-light);
}
</style>
