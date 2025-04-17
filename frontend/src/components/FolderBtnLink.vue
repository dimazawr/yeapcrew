<script setup lang="ts">
import FolderIcon from './icons/FolderIcon.vue'

const { classname, href } = defineProps<{
  href: Record<string, unknown> | string
  classname?: string
}>()
</script>

<template>
  <RouterLink :class="classname" :to="href">
    <FolderIcon />
    <slot />
  </RouterLink>
</template>

<style>
a {
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

a:hover {
  background: var(--color-primary-light);
}

a:active {
  background: var(--color-primary-dark);
}

a:focus {
  outline: none;
  box-shadow: 0 0 0 0.2em var(--color-primary-light);
}

.folder--main {
  width: 100%;
  grid-row: 3;
  grid-column: 9;
}
</style>
