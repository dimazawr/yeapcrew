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
  gap: 8px;
  border: none;
  border-radius: 0.2em;
  background: transparent;
  cursor: pointer;
  height: max-content;
}

.folder--main {
  width: 100%;
  grid-row: 3;
  grid-column: 9;
}
</style>
