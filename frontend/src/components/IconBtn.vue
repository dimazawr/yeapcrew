<script setup lang="ts">

const emit = defineEmits<{
  (event: "click"): void;
}>();


</script>

<template>
  <button @click="emit('click')" class="icon-btn">
    <slot />
  </button>
</template>

<style>
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  border-radius: 0.2em;
  background: transparent;
  cursor: pointer;
  font-size: .875rem;
  font-family: Inconsolata, Menlo, Chicago, Geneva;
}
</style>
